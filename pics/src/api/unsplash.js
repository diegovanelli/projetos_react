import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 94f2355558b66aa211c3f8a7b93dccf645b919a9c21adfa84cc149b8a325831d'
    }
})