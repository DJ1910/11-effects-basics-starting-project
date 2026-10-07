import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

function Modal({ children, isOpen, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {isOpen && children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
