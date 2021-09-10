import C from './constants'

export function delBook(id) {
    return {
        type: C.DELETE_BOOK,
        id
    }
}