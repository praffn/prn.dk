import { ReactNode, useState } from "react";

import CloseIcon from "../assets/icons/close.svg";

interface AlertProps {
  children: ReactNode;
  closable?: boolean;
}

function Alert({ children, closable }: AlertProps) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="
        relative
        bg-gray-200 dark:bg-gray-900
        border border-gray-300 dark:border-gray-700
        rounded py-2 px-4
        text-center"
    >
      {children}
      {closable ? (
        <button
          className="
            absolute
            top-1/2 right-2
            -translate-y-1/2
            block w-6 h-6"
          onClick={() => setOpen(false)}
        >
          <CloseIcon className="opacity-50 hover:opacity-100 transition-opacity" />{" "}
          <span className="sr-only">Close</span>
        </button>
      ) : null}
    </div>
  );
}

export default Alert;
