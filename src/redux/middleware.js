
export const logger = store => next => action => console.log(next(action), store.getState())

export const saver = store => next => action => {
    const result = next(action)
    let storeForStorage = []
    Object.keys(store.getState()).forEach(reducer =>
        storeForStorage.push(store.getState()[reducer]))
    localStorage['garpix-test'] = JSON.stringify(storeForStorage)
    return result
}