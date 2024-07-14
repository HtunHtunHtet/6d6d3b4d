import React from 'react';
import { BiPhoneIncoming, BiPhoneOutgoing } from "react-icons/bi";

const CallCard = ({ call, onSelect, onSelectArchive, children }) => {
    return (
        <div key={call.id} className="card">
            <div className="card-body" onClick={() => onSelect(call)}>
                <div>
                    {call.direction === 'inbound' && <BiPhoneIncoming color='red' size="2em"/>}
                    {call.direction === 'outbound' && <BiPhoneOutgoing color='green' size="2em"/>}

                    <div>
                        {call.direction === 'inbound' && <span>Incoming from </span>}
                        {call.direction === 'outbound' && <span>Outgoing to </span>}
                        {call.from.toString()}
                    </div>
                </div>
                <p>
                    {new Date(call.created_at).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })}
                </p>
            </div>

            <div className="archive-btn" onClick={() => onSelectArchive(call)}>
                {children}
            </div>
        </div>
    );
};

export default CallCard;