import axios from './api'

export const CourseService = {
    async getCourses() {
        const {data} = await axios.get('/courses')
        return data
    }
}