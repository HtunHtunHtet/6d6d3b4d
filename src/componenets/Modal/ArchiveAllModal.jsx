import React from 'react';
import Modal from "./Modal";
import {resetAllCall, updateCallArchive} from "../../api";

const ArchiveAllModal = ({ isVisible, onClose, calls, isArchive }) => {
    const handleAllArchiveStatus = () => {
        if(!isArchive) {
            resetAllCall().then(() => {
                onClose();
            });
        } else {
            calls.forEach(call => {
                updateCallArchive(call.id , true). then(() => {
                    onClose();
                });
            })
        }
    }

    return (
        <Modal isVisible={isVisible} onClose={onClose}>
            <div className="modal-content">
                <p> Are you sure you want to {isArchive ? 'archive' : 'unarchived'} all of the calls?</p>
                <div className="button-container">
                    <a href="#" className="cancel-btn" onClick={onClose}>Cancel</a>
                    <a href="#" className="process-btn"
                       onClick={handleAllArchiveStatus}>{isArchive ? 'Archive' : 'Unarchived'}</a></div>
            </div>
        </Modal>
    );
};

export default ArchiveAllModal;