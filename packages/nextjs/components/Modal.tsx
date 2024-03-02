import React from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: any;
  imageData: string;
}

const Modal = ({ isOpen, closeModal, imageData }: ModalProps) => {
  return (
    <div>
      <div
        style={{
          display: isOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.6s ease-in-out",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "black",
            borderRadius: "9px",
            backgroundColor: "#d2d2d2",
            padding: "20px",
            transition: "transform 0.3s ease-in-out",
            transform: isOpen ? "translate(-50%, -50%)" : "translate(-50%, -60%)",
          }}
        >
          {imageData ? (
            <div>
              {/* Display your modal content using modalData */}
              <h2>{`Image ${imageData + 1}`}</h2>
              <p>Description or other details </p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
