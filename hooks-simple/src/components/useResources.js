import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async (resource) => {
            const reponse = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

            setResources(reponse.data);
        })(resource);
    }, [resource]);

    return resources;
};

export default useResources;
