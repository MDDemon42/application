import C from './constants'

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