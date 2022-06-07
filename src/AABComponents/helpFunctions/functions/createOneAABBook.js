const createOneAABBook = (
    id, title, last_name,
    first_name, created_at, image
) => {
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