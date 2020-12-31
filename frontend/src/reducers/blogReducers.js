import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL
} from '../actions/types.js'

export const blogListReducer = (state = { blogs: [] }, action ) => {
    switch(action.type){
        case BLOG_LIST_REQUEST:
            return{
                loading: true,
                blogs: []
            }
        case BLOG_LIST_SUCCESS:
            return{
                loading: false,
                blogs: action.payload.blogs,
                pages: action.payload.pages,
                page: action.payload.page
            }
        case BLOG_LIST_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        default: 
            return state
    }
}