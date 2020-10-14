import React from 'react'
// imports helpers
import { capitalizeFirstLetter } from '../../utils/helpers'
//imports small photos
import photo from "../../assets/small/commercial/0.jpg"
// import PhotoList from "../PhotoList"

// function Gallery(currentCategory) {
//     // const currentGallery = {
//     //     name: "commercial",
//     //     description: "Photos of grocery stores, food trucks, and other commercial projects"
//     // }
//     const { name, description } = currentCategory
//     return (
//         <section>
//             <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
//             <p>{description}</p>
//             <PhotoList />
//         </section>
//     )
// }

function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}

export default Gallery