export interface OneAABBook {
    id: number,
    title: string,
    last_name: string,
    first_name: string,
    created_at: number,
    year: number,
    image: string,
}

const createOneAABBook = (
    id: number,
    title: string,
    last_name: string,
    first_name: string,
    created_at: number,
    image: string,
): OneAABBook => {
    return (
        {
            id,
            title,
            last_name,
            first_name,
            created_at,
            year: 2022,
            image,
        }
    )
};

export default createOneAABBook;