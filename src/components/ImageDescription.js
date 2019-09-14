import React, { useEffect, useState } from 'react';
import unsplash from '../api/unsplash';

const ImageDescription = ({ match: { params } }) => {
    const [Image, setImage] = useState([]);


    useEffect(() => {
        unsplash.get(`/photos/${params.id}`).then((res) => {
            setImage(res.data.urls);
        }).catch(() => {
            return null;
        });
    }, []);

    return (
        <div className="description">
            <a href="/search" className="Go_back">Go back to search</a>
            <a href="/" className="log-out">Logout</a>
            <div>
                <img alt="image" src={Image.regular} className="description-image" />
            </div>
        </div>
    )
}

export default ImageDescription;
