import React from 'react';
import { BiPhoneIncoming, BiPhoneOutgoing } from "react-icons/bi";

const CallCard = ({ call, onSelect }) => {
    return (
        <div key={call.id} className="card" onClick={() => onSelect(call)}>
            <div className="card-body">
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
        </div>
    );
};

export default CallCard;