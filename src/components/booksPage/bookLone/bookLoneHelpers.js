import axios from "axios";

const creationURL = '/books/creation'

export const setStartingBookData = (URLid, books) => {
    let {title, last_name, first_name, created_at, image} = emptyBook

    const id = Number(URLid) || ''
    const theBook = id && books.filter(book => book.id === id)[0]
    if (theBook) {
        title = theBook.title
        last_name = theBook.last_name
        first_name = theBook.first_name
        created_at = theBook.created_at
        image = theBook.image
    }

    return {
        id,
        title,
        last_name,
        first_name,
        created_at,
        image
    }
}

export const setFinalBookData = (id, bookTitle, bookLastName, bookFirstName, bookCreatedAt, bookImage) => {
    return {
        id,
        bookTitle,
        bookLastName,
        bookFirstName,
        bookCreatedAt,
        bookImage
    }
}

export const setSaveButtonData = (props) => {
    let creation = false
    let readyText = 'Изменения сохранены!'
    let toMakeText = 'Сохранить изменения'
    let func = props.onSave

    if (props.match.path === creationURL) {
        creation = true
        readyText = 'Книга добавлена!'
        toMakeText = 'Добавить книгу'
        func = props.onAdd
    }

    return {
        creation,
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

export const getOtherAuthors = (authors, last_name, first_name) => {
    return authors.filter(author => author.last_name !== last_name && author.first_name !== first_name)
}

export const getValidationResult = (title, last_name, year) => {
    console.log(title, last_name, year)
    return title.length > 0 &&
        last_name.length > 0 &&
        year.length > 0 &&
        year <= new Date().getFullYear()
}

const emptyBook = {
    title: '',
    last_name: '',
    first_name: '',
    created_at: '',
    image: ''
}