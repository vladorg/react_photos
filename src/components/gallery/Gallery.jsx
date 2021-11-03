import React from "react";
import { Link } from "react-router-dom";
import { setUrl } from '~r';

const Gallery = ({limit, step, images, setLimit}) => {
  
  const grid = images.map((image, i) => {
    return (
      <Link to={setUrl('photo', {id: image.id})} key={i} className="photo-item">
        <div className="img">
          <img src={image.url} alt={`photo-${image.id}`} />
        </div>
      </Link>
    )
  });

  return (
    <div className="gallery-section">
      <div className="gallery-container">
        {grid}
      </div>
      {
        limit < 28 && grid.length
        ?
        <>
        <div className="loader-box" onClick={() => setLimit(limit + step)}>
          <span className="glyphicon glyphicon-refresh loader "></span>
        </div>
        </>
        :
        null
      }      
    </div>
  )
}

export default Gallery;