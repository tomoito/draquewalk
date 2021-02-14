/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const modalStyle:Modal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
  },
  content: {
    position: 'absolute',
    top: '5rem',
    left: '5rem',
    right: '5rem',
    bottom: '5rem',
    borderRadius: '1rem',
    padding: '1.5rem',
    color: 'pink',
  },
};

const Kensho:React.FC = () => {
  const x = 'hoge';

  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <p>aiueo</p>
      <button type="button" onClick={() => setIsOpen(true)}>OpenModal</button>
      <Modal isOpen={modalIsOpen} style={modalStyle}>
        <button type="button" onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>

    </div>
  );
};

export default Kensho;
