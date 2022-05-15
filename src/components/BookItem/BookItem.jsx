import React, { useState } from "react";
import "./BookItem.css";
import NoImage from "../../assets/pictures/no-image.png";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    minWidth: "320px"
  },
};

function BookItem({ book }) {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);

  return (
    <>
      <div
        className="container"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <img
          alt={`book ${book.title}`}
          src={`${book.thumbnailURL ? book.thumbnailURL : NoImage}`}
        />
        <h2>{book.title}</h2>
        <p>{book?.authors.length > 1 ? "Authors: " : "Author: "}</p>
        <ul className="authors">
          {book?.authors.map((author, idx) => (
            <li key={idx}>{author}</li>
          ))}
        </ul>
      </div>
      {openModal && (
        <Modal
          isOpen={openModal}
          style={customStyles}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          <button
            onClick={closeModal}
            style={{ float: "right", cursor: "pointer", "borderRadius": "50%" }}
          >
            {" "}
            X{" "}
          </button>
          <h2>{book.title}</h2>
          <img
            alt={`book ${book.title}`}
            src={`${book.thumbnailURL ? book.thumbnailURL : NoImage}`}
          />
          <p>{book.shortDescription ? "Short Description: " : ""}</p>
          <p>{book.shortDescription}</p>
          <div>
            <p>{book?.authors.length > 1 ? "Authors: " : "Author: "}</p>
            <ul className="authors">
                {book?.authors.map((author, idx) => (
                <li key={idx}>{author}</li>
                ))}
            </ul>
          </div>
          <p>Pages: {book.pageCount}</p>
        </Modal>
      )}
    </>
  );
}

export default BookItem;
