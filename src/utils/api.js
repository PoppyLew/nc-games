import axios from 'axios'

const gamesApi = axios.create({
    baseURL:'http://games-api-app.herokuapp.com/api' 
});

export const getReviews = () => {
    return gamesApi
    .get('/reviews')
    .then((res) => {
        return res.data
    })
}