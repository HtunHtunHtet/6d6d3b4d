import React, { useState, useEffect } from 'react';
import Loading from "../Loading";
import CallCard from "./CallCard";
import {fetchAllCalls} from "../../api";
import Modal from "../Modal";

const AllCall = () => {

    const [allCall, setAllCall] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCall, setSelectedCall] = useState(null);

    useEffect(() => {
        fetchAllCalls().then(data => setAllCall(data));
    }, []);

    const handleCallSelect = (call) => {
        setSelectedCall(call);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };


    return (
        <div className="container-view">
            {
                allCall
                ?
                <div className="cards-container">
                    {allCall.map((call) => (
                        <CallCard
                            key={call.id}
                            call={call}
                            onSelect={() => handleCallSelect(call)}
                        />
                    ))}
                </div>
                    : <Loading />
            }

            {isModalVisible && (
                <Modal
                    isVisible={isModalVisible}
                    onClose={handleCloseModal}
                    call={selectedCall}
                />
            )}

        </div>
    );
}

export default AllCall;