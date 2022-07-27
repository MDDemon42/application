interface HasFullName {
    first_name: string,
    last_name: string
}

const getFullName = (item: HasFullName): string => {
    return item.first_name + ' ' + item.last_name;
}

export default getFullName;