export const logger = store => next => action => console.log(next(action),store.getState())

export const saver = store => next => action => {
    const result = next(action)
    localStorage['garpix-test']=JSON.stringify(store.getState())
    return result
}