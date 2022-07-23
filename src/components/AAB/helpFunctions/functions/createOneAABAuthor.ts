export interface OneAABAuthor {
    id: number,
    last_name: string,
    first_name: string
}

const createOneAABAuthor = (
    id: number, last_name: string, first_name: string
): OneAABAuthor => {
    return (
        {
            id,
            last_name,
            first_name
        }
    )
};

export default createOneAABAuthor;