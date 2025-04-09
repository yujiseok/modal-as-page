"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const onDismiss = () => {
    router.back();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm">
      <dialog
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-0 bg-transparent"
      >
        <button
          onClick={onDismiss}
          className="absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
