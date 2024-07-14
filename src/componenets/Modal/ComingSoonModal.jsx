import React from 'react';
import Modal from "./Modal";
import {resetAllCall, updateCallArchive} from "../../api";

const ArchiveAllModal = ({ isVisible, onClose }) => {


    return (
        <Modal isVisible={isVisible} onClose={onClose}>
            <div className="modal-content">
                <p> This feature is coming soon, stay tuned !</p>
                <div className="button-container">
                    <a href="#" className="cancel-btn" onClick={onClose}>Close</a>
                </div>
            </div>
        </Modal>
    );
};

export default ArchiveAllModal;