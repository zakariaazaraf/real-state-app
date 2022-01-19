import axios from 'axios'


export const urlBase = 'https://bayut.p.rapidapi.com'

export const fetchApiData = async (url) => {

    try {
        const { data } = await axios(url, {
            headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '2f8126bea7mshdf5675490dfb0a3p11b801jsn0452e1e62c57'
            }
        });
        
        return data
    } catch (error) {
        console.log(error)
        return []
    }

}