import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

export const TIME = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("Timer started");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIME);

    return () => {
      console.log("Timer cleared");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar time={TIME} />
    </div>
  );
}
