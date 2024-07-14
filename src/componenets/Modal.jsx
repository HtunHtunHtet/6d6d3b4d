import React, {useEffect, useState} from 'react';
import {fetchCall} from "../api";
import Loading from "./Loading";
const Modal = ({ isVisible, onClose, call }) => {

    const [callData, setCallData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (call && call.id) {
            fetchCall(call.id).then(data => {
                setCallData(data);
                setLoading(false);
            });
        }
    }, [call.id]);

    const formatKey = (key) => {
        return key
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className={`modal ${isVisible ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {callData && Object.entries(callData).map(([key, value]) => (
                    <div key={key} style={{marginBottom: '20px'}}>
                        <strong>{formatKey(key)}:</strong> {value.toString()}
                    </div>
                ))}

                {loading && <Loading/>}
            </div>
        </div>
    );
};

export default Modal;