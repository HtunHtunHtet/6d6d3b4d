import React, { useState, useEffect } from 'react';
import {BiPhoneIncoming} from "react-icons/bi";

const AllCall = () => {

    const [allCall, setAllCall] = useState(null);

    useEffect(() => {
        fetch('https://aircall-backend.onrender.com/activities')
            .then(response => response.json())
            .then(data => {
                setAllCall(data);
                console.log('data', data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container-view">
            {allCall
                ?
                <div className="cards-container">
                    {allCall.map((call) => (
                        <div key={call.id} className="card">
                            <div className="card-body">
                                <div>
                                    <BiPhoneIncoming color='red' size="2em"/>
                                    <div>
                                        tried to call on {call.from.toString()}
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
                    ))}
                </div>
                : <div>Loading...</div>}
        </div>
    );
}

export default AllCall;