import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import CallCard from "./CallCard";
import {fetchAllCalls} from "../api";
import DetailModal from "./Modal/DetailModal";
import ArchiveModal from "./Modal/ArchiveModal";
import toast, { Toaster } from 'react-hot-toast';
import {BiArchiveIn} from "react-icons/bi";

const AllCall = () => {

    const [allCall, setAllCall] = useState(null);
    const [detailModal, setDetailModal] = useState(false);
    const [archiveModal, setArchiveModal] = useState(false);
    const [selectedCall, setSelectedCall] = useState(null);

    useEffect(() => {
        fetchAllCalls().then(data => setAllCall(data));
    }, []);

    const handleDetailModal = (call) => {
        setSelectedCall(call);
        setDetailModal(true);
    };

    const handleArchiveModal = (call) => {
        setSelectedCall(call);
        setArchiveModal(true);
    }

    const handleCloseDetailModal = () => {
        setDetailModal(false);
    };

    const handleCloseArchiveModal = () => {
        setArchiveModal(false);
        toast.success('Call archived successfully!');
        fetchAllCalls().then(data => setAllCall(data));
    };

    return (
        <div className="container-view">
            {
                allCall ?
                    (
                        allCall.filter(call => !call.is_archived).length > 0 ?
                            <div className="cards-container">
                                {
                                    allCall.filter(call => !call.is_archived).map(call => (
                                        <CallCard
                                            key={call.id}
                                            call={call}
                                            onSelect={() => handleDetailModal(call)}
                                            onSelectArchive={() => handleArchiveModal(call)}
                                        >
                                            <BiArchiveIn size="1.5em" />
                                        </CallCard>
                                    ))
                                }
                            </div>
                            :
                            <p style={{textAlign: "center"}}>No Call Activity</p>
                    )
                    : <Loading />
            }

            {detailModal && (
                <DetailModal
                    isVisible={detailModal}
                    onClose={handleCloseDetailModal}
                    call={selectedCall}
                />
            )}

            {archiveModal && (
                <ArchiveModal
                    isVisible={archiveModal}
                    onClose={handleCloseArchiveModal}
                    call={selectedCall}
                    isArchive={true}
                />
            )}

            <Toaster position="top-center" />
        </div>
    );
}

export default AllCall;