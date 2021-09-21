
export const logger = store => next => action => console.log(next(action), store.getState())

export const saver = store => next => action => {
    const result = next(action)

    const storeForStorage = {}

    const storeData = store.getState()
    const reducers = Object.keys(storeData)

    reducers.forEach(reducer => {
        const reducerHeader = Object.keys(storeData[reducer])[0]
        storeForStorage[reducerHeader] = storeData[reducer][reducerHeader]
    })

    localStorage['garpix-test'] = JSON.stringify(storeForStorage)
    return result
}