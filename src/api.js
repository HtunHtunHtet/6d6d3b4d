const BASE_URL = 'https://aircall-backend.onrender.com/activities';

export const fetchAllCalls = () => {
    return fetch(BASE_URL)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
};

export const fetchCall = (call_id) => {
    return fetch(`${BASE_URL}/${call_id}`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
};