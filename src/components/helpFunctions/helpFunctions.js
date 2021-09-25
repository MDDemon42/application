import axios from "axios";
import C from '../../redux/constants'

export const setStartingItemData = (URLid, content, type) => {
    const id = Number(URLid) ||
        Math.floor(Math.random()*10000) * (type === C.BOOK ? 100 : 1)
    const theItem = id && content.filter(item => item.id === id)[0]

    const last_name = theItem ? theItem.last_name : ''
    const first_name = theItem ? theItem.first_name : ''

    if (type === C.AUTHOR) {
        return {
            id,
            last_name,
            first_name
        }
    }

    const title = theItem ? theItem.title : ''
    const created_at = theItem ? theItem.created_at : ''
    const image = theItem ? theItem.image : ''

    return {
        id,
        title,
        last_name,
        first_name,
        created_at,
        image
    }
}

export const setFinalItemData = (type, id, itemLastName, itemFirstName, ...bookData) => {
    if (type === C.AUTHOR) {
        return {
            id,
            itemLastName,
            itemFirstName
        }
    }

    const [bookTitle, bookCreatedAt, bookImage] = bookData
    return {
        id,
        itemLastName,
        itemFirstName,
        bookTitle,
        bookCreatedAt,
        bookImage
    }
}

export const setSaveButtonData = (onSave, onAdd, creation, type) => {

    let readyText = creation ?
        (type === C.BOOK && 'Книга добавлена!') || 'Автор добавлен!' :
        'Изменения сохранены!'
    let toMakeText = creation ?
        (type === C.BOOK && 'Добавить книгу') || 'Добавить автора' :
        'Сохранить изменения'
    let func = creation ? onAdd : onSave

    return {
        readyText,
        toMakeText,
        func
    }
}

export const getFullName = item => item.first_name + ' ' + item.last_name

export const imageChanger = event => {
    const newFile = event.target.files[0]
    console.log(newFile)
    if (newFile && newFile.type === 'image/jpeg') {
        return newFile
    }
    else {
        alert('Не jpeg!')
    }
    return ''
}

export const imageLoader = file => {
    const data = new FormData()
    data.append('file', file)
    axios.post('http://localhost:3005/api/upload', data, {})
        .then(res => {
            console.log(res.statusText)
        })
}

export const getOtherAuthors = (authors, theBook) => {
    return authors.filter(author => author.last_name !== theBook.last_name && author.first_name !== theBook.first_name)
}

export const getValidationResult = (criterion_1= '', criterion_2= '', criterion_3= 0) => {
    return criterion_1.length > 0 &&
        criterion_2.length > 0 &&
        String(criterion_3).length > 0 &&
        criterion_3 <= new Date().getFullYear()
}