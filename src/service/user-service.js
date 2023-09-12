import axios from './api'

export const userService = {
    async getUsers() {
        const {data} = await axios.get('/users')
        return data
    },
    async postUsers(user) {
        const {data} = await axios.post('/add-user', {user})
        return data
    }
}