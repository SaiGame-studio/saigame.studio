"use client";

import { useEffect, useRef, useState } from "react";
import s from "./SaiServer.module.css";
import { CheckCircleIcon } from "./icons";
import { DISCORD_URL } from "./links";

type Props = { placeholder: string; submit: string; thanks: string };

// There is no signup backend yet: the email is not stored anywhere. Submitting shows a toast
// and points the visitor to the Discord server, where early access is announced.
export default function SubscribeForm({ placeholder, submit, thanks }: Props) {
  const [toast, setToast] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setToast(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(false), 4500);
    window.open(DISCORD_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
        <input type="email" required placeholder={placeholder} aria-label={placeholder} className={s.input} />
        <button type="submit" className={s.btnSubmit}>
          {submit}
        </button>
      </form>
      <div className={`${s.toast} ${toast ? s.toastShow : ""}`} role="status" aria-live="polite">
        <CheckCircleIcon />
        <span>{thanks}</span>
      </div>
    </>
  );
}
