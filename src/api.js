const BASE_URL = 'https://aircall-backend.onrender.com';

export const fetchAllCalls = async () => {
    return await fetch(`${BASE_URL}/activities`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
};

export const fetchCall = async (call_id) => {
    return await fetch(`${BASE_URL}/activities/${call_id}`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
};

export const updateCallArchive = async (call_id, is_archive ) => {
    return await fetch(`${BASE_URL}/activities/${call_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            is_archived: is_archive
        })
    })
        .then(response => response)
        .catch(error => console.error('Error :', error));
}

//reset to unarchive all calls
export const resetAllCall = async () => {
    return await fetch(`${BASE_URL}/reset`, {
        method: 'PATCH',
    })
        .then(response => response)
        .catch(error => console.error('Error :', error));
}