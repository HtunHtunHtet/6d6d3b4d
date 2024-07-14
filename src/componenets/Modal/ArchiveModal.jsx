import React from 'react';
import Modal from "./Modal";
import {updateCallArchive} from "../../api";

const ArchiveModal = ({ isVisible, onClose, call, isArchive }) => {

    const handleArchiveCall = (flag) => {
        updateCallArchive(call.id, flag).then((data) => {
            onClose();
        });
    }

    return (
        <Modal isVisible={isVisible} onClose={onClose}>
            <div className="modal-content">
                <p> Are you sure you want to {isArchive ? 'archive' : 'unarchived'} this call?</p>
                <div className="button-container">
                    <a href="#" className="cancel-btn" onClick={onClose}>Cancel</a>
                    <a href="#" className="process-btn"
                       onClick={() => handleArchiveCall(isArchive)}>{isArchive ? 'Archive' : 'Unarchive'}</a></div>
            </div>
        </Modal>
    );
};

export default ArchiveModal;