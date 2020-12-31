import axios from 'axios';
import{
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL
} from './types.js'

export const listBlogs = (keyword = '', pageNumber = '') => async(dispatch)=>{
    try {
        dispatch({
            type: BLOG_LIST_REQUEST
        })

        const { data }  = await axios.get(`/api/blog?keyword=${keyword}&pageNumber=${pageNumber}`)

        dispatch({
            type: BLOG_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
          dispatch({
              type: BLOG_LIST_FAIL,
              payload: error.response && error.response.data.message ? error.message.data.message : error.message
          })  
    }
}