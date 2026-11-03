// Fills a translated template ("Build on {server}.") with React nodes, so each language keeps its own word order.
import { Fragment, type ReactNode } from "react";

export function fill(template: string, parts: Record<string, ReactNode>) {
  return template.split(/\{(\w+)\}/).map((piece, i) => <Fragment key={i}>{i % 2 ? parts[piece] : piece}</Fragment>);
}
