"use client";
// Full-screen image viewer. Any <img data-zoom> on the page opens here on click, Enter or Space;
// Esc, the close button or a click outside the image closes it. Mount once per page.
// An image inside a link opens the viewer instead of following the link. Styles in app/site.css (.image-lightbox).
import { useEffect, useRef, useState } from "react";

type Shown = { src: string; alt: string };

export default function ImageLightbox({ closeLabel }: { closeLabel: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [shown, setShown] = useState<Shown | null>(null);

  useEffect(() => {
    const target = (e: Event) => (e.target instanceof Element ? e.target.closest<HTMLImageElement>("img[data-zoom]") : null);
    const open = (img: HTMLImageElement, e: Event) => {
      e.preventDefault();
      setShown({ src: img.currentSrc || img.src, alt: img.alt });
    };
    const onClick = (e: MouseEvent) => {
      const img = target(e);
      if (img) open(img, e);
    };
    const onKey = (e: KeyboardEvent) => {
      const img = target(e);
      if (img && (e.key === "Enter" || e.key === " ")) open(img, e);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (shown && !dialog.current?.open) dialog.current?.showModal();
  }, [shown]);

  return (
    <dialog
      ref={dialog}
      className="image-lightbox"
      aria-label={shown?.alt || undefined}
      onClose={() => setShown(null)}
      onClick={(e) => {
        if (e.target === e.currentTarget) dialog.current?.close();
      }}
    >
      {shown && (
        <figure className="image-lightbox-figure">
          <img className="image-lightbox-image" src={shown.src} alt={shown.alt} />
          {shown.alt && <figcaption className="image-lightbox-caption">{shown.alt}</figcaption>}
        </figure>
      )}
      <button type="button" className="image-lightbox-close" aria-label={closeLabel} onClick={() => dialog.current?.close()}>
        ✕
      </button>
    </dialog>
  );
}
