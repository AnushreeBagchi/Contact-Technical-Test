import axios  from 'axios';
import { baseURL } from '../../constants/constants';

const api =  ({dispatch}) => next => async action => {
    if (action.type !== "apiCallBegan") return next(action);
    
    next(action);
    const {url, method, data, onSuccess, onError, headers} = action.payload;
    try{
        const response  = await axios.request({
            baseURL,
            url,
            method, 
            data,
            headers
        });
        dispatch({type: onSuccess, payload: response.data});
    } catch ( error) {
        dispatch({type: onError, payload: error.response.data });
    }

}

export default api;