"use client";

import { ReactNode } from "react";
import va from "@vercel/analytics";

export default function ContactButton({
  email,
  children,
}: {
  email: string;
  children: ReactNode;
}) {
  return (
    <a
      onClick={() => va.track("Email contact clicked")}
      href={`mailto:${email}`}
      className="button button-primary"
    >
      {children}
    </a>
  );
}
