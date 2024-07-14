import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import CallCard from "./CallCard";
import { fetchAllCalls } from "../api";
import toast, { Toaster } from 'react-hot-toast';
import {BiArchiveIn, BiArchiveOut} from "react-icons/bi";
import ArchiveModal from "./Modal/ArchiveModal";
import DetailModal from "./Modal/DetailModal";

const CallList = ({ showArchived }) => {
    const [calls, setCalls] = useState(null);
    const [detailModal, setDetailModal] = useState(false);
    const [archiveModal, setArchiveModal] = useState(false);
    const [selectedCall, setSelectedCall] = useState(null);

    useEffect(() => {
        fetchAllCalls().then(data => {
            const filteredCalls = showArchived ? data.filter(call => call.is_archived) : data.filter(call => !call.is_archived);
            setCalls(filteredCalls);
        });
    }, [showArchived]);

    const handleDetailModal = (call) => {
        setSelectedCall(call);
        setDetailModal(true);
    };

    const handleArchiveModal = (call) => {
        setSelectedCall(call);
        setArchiveModal(true);
    };

    const handleCloseDetailModal = () => {
        setDetailModal(false);
    };

    const handleCloseArchiveModal = () => {
        setArchiveModal(false);
        toast.success(`Call ${showArchived ? 'Unarchived' : 'Archived'} successfully!`);
        fetchAllCalls().then(data => {
            const filteredCalls = showArchived ? data.filter(call => call.is_archived) : data.filter(call => !call.is_archived);
            setCalls(filteredCalls);
        });
    };

    return (
        <div className="container-view">
            {calls ? (
                calls.length > 0 ? (
                    <div className="cards-container">
                        {calls.map(call => (
                            <CallCard
                                key={call.id}
                                call={call}
                                onSelect={() => handleDetailModal(call)}
                                onSelectArchive={() => handleArchiveModal(call)}
                            >
                                {showArchived ? <BiArchiveOut size="1.5em" /> : <BiArchiveIn size="1.5em" />}
                            </CallCard>
                        ))}
                    </div>
                ) : (
                    <p style={{ textAlign: "center" }}>No {showArchived ? 'Archived' : 'Active'} Calls</p>
                )
            ) : <Loading /> }
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
                    isArchive={!showArchived}
                />
            )}
            <Toaster position="top-center" />
        </div>
    );
};

export default CallList;