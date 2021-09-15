import C from './constants'
import axios from 'axios'

export function delBook(id) {
    return {
        type: C.DELETE_BOOK,
        id
    }
}
export function saveBook(id,title,last_name,first_name,created_at,image) {
    return {
        type: C.SAVE_BOOK,
        id, title, last_name, first_name, created_at, image
    }
}
export function addBook(id,title,last_name,first_name,created_at,image) {
    return {
        type: C.ADD_BOOK,
        id, title, last_name, first_name, created_at, image
    }
}
export function delAuthor(id) {
    return {
        type: C.DELETE_AUTHOR,
        id
    }
}
export function saveAuthor(id,last_name,first_name) {
    return {
        type: C.SAVE_AUTHOR,
        id, last_name, first_name
    }
}
export function addAuthor(id,last_name,first_name) {
    return {
        type: C.ADD_AUTHOR,
        id, last_name, first_name
    }
}
export function getExternalData(url) {
    return dispatch => {
        axios.get(url).then(response => dispatch(setExternalData(response.data)))
    }
}
export function setExternalData(data) {
    return {
        type: 'ADD_EX_DATA',
        data
    }
}