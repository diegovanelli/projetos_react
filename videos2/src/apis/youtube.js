import axios from 'axios'

const KEY = 'AIzaSyCs7ZlUFhLzXcuUOQTQ73_k5e0dXceuTVM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})