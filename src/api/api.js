import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'cd21278c-8cb3-4bb7-8beb-55d8994c1147'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

