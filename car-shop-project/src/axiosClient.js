import axios from 'axios'

const axiosClient = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api',
    // baseURL: 'https://student.valuxapps.com/api',
    baseURL : 'https://reach2store.com/api',
    headers: {
        'x-api-key': 'eyJpdiI6InAvT2x5R1pnZjNrUURJMjQ0QlNldUE9PSIsInZhbHVlIjoiNThSTVZsOHNiRHhnOXpuQ0FQWkxxdz09IiwibWFjIjoiN2YxNWE1MTM2OWRlYjMwYWFlMGE2ZjM4ODA0ODFhMmU1Y2UyNzE4ODFjZDNlMjYzYzhjOGE2YjUyZGNjY2E3MiIsInRhZyI6IiJ9',
        'language' : 'en',
        'Accept' : 'application/json',
    }
});
export default axiosClient;