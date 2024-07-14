import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {

    return (
        <>
            {
             isVisible &&
                 <div className="modal-backdrop">
                    <div className="modal-content">
                        <span className="close" onClick={onClose}>&times;</span>
                        {children}
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;