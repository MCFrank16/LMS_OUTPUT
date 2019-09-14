import React, { useState } from "react";
import unSplash from '../api/unsplash';
import ImageList from './ImageList';

const SearchBar = () => {
  const [ searchValue, setSearchValue ] = useState('');
  const [images, setImages] = useState([]);

  const onFormSubmit = event => {
    event.preventDefault();
    unSplash.get('/search/photos', {
      params: {
        query: searchValue
      }
    }).then((res) => {
      console.log(res.data.results);
      setImages(res.data.results);
    }).catch(() => {
      return null;
    })
  }

    return (
      <div className="ui segment container">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Search for Images like Cars, Houses, etc"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value) }
            />
          </div>
        </form>
        <ImageList images={images} />
      </div>
    );
}

export default SearchBar;
