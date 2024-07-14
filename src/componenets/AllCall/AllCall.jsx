import React, { useState, useEffect } from 'react';
import {BiPhoneIncoming, BiPhoneOutgoing} from "react-icons/bi";
import Loading from "../Loading";
import CallCard from "./CallCard";
import {fetchAllCalls} from "../../api";


const AllCall = () => {

    const [allCall, setAllCall] = useState(null);

    useEffect(() => {
        fetchAllCalls().then(data => setAllCall(data));
    }, []);

    return (
        <div className="container-view">
            {
                allCall
                ?
                <div className="cards-container">
                    {allCall.map((call) => (
                        <CallCard key={call.id} call={call}/>
                    ))}
                </div>
                    : <Loading />
            }
        </div>
    );
}

export default AllCall;