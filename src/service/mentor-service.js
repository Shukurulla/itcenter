import axios from './api'

export const MentorServices = {
    async getMentors(){
        const {data} = await axios.get('/mentors')
        return data
    }
}