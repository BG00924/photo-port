import React from 'react'
// imports helpers
import { capitalizeFirstLetter } from '../../utils/helpers'
//imports small photos
// import photo from "../../assets/small/commercial/0.jpg"
import PhotoList from "../PhotoList"

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
//   const currentCategory = {
//     name: "commercial",
//     description:
//       "Photos of grocery stores, food trucks, and other commercial projects",
//   };
    const { currentCategory } = props
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      {/* <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div> */}
      {/* must have the category part to be used in PhotoList */}
      <PhotoList category={currentCategory.name}/>
    </section>
  );
}

export default Gallery