import axios from 'axios';
const KEY = 'AIzaSyANmlqR2zlPRcXRLdA7_tI3JGMdNhfmN3Y'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})