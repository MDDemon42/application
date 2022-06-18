import axios from "axios";

const imageLoader = file => {
    const data = new FormData();
    data.append('file', file);
    axios.post('http://localhost:3005/api/upload', data, {})
        .then(res => {
            console.log(res.statusText)
        });
};

export default imageLoader;