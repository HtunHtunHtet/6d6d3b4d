export const fetchAllCalls = () => {
    return fetch('https://aircall-backend.onrender.com/activities')
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
};