import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import CallCard from "./CallCard";
import { fetchAllCalls } from "../api";
import toast, { Toaster } from 'react-hot-toast';
import {BiArchiveOut} from "react-icons/bi";
import ArchiveModal from "./Modal/ArchiveModal";
import DetailModal from "./Modal/DetailModal";

const ArchivedCall = () => {
    const [archivedCalls, setArchivedCalls] = useState(null);
    const [detailModal, setDetailModal] = useState(false);
    const [archiveModal, setArchiveModal] = useState(false);
    const [selectedCall, setSelectedCall] = useState(null);

    useEffect(() => {
        fetchAllCalls().then(data => {
            const archived = data.filter(call => call.is_archived);
            setArchivedCalls(archived);
        });
    }, []);
    const handleDetailModal = (call) => {
        setSelectedCall(call);
        setDetailModal(true);
    };

    const handleUnArchiveModal = (call) => {
        setSelectedCall(call);
        setArchiveModal(true);
    }

    const handleCloseDetailModal = () => {
        setDetailModal(false);
    };

    const handleCloseUnArchiveModal = () => {
        setArchiveModal(false);
        toast.success('Call UnArchived successfully!');
        fetchAllCalls().then(data => {
            const archived = data.filter(call => call.is_archived);
            setArchivedCalls(archived);
        });
    };


    return (
        <div className="container-view">
            {
                archivedCalls ?
                    (
                        archivedCalls.length > 0 ?
                            <div className="cards-container">
                                {archivedCalls.map(call => (
                                    <CallCard
                                        key={call.id}
                                        call={call}
                                        onSelect={() => handleDetailModal(call)}
                                        onSelectArchive={() => handleUnArchiveModal(call)}
                                    >
                                        <BiArchiveOut size="1.5em" />
                                    </CallCard>
                                ))}
                            </div>
                            :
                            <p style={{ textAlign: "center" }}>No Archived Calls</p>
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
                    onClose={handleCloseUnArchiveModal}
                    call={selectedCall}
                    isArchive={false}
                />
            )}

            <Toaster position="top-center" />
        </div>
    );
}

export default ArchivedCall;
