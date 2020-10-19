import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
    // const [currentCategory, setCurrentCategory] = useState(categories[0])
    // defines categories before mapped below
    // const [categories] = useState([
    //     {
    //         name: "commercial",
    //         description: "Photos of grocery stores, food trucks, and other commercial products"
    //     },
    //     { 
    //         name: "portraits",
    //         description: "Portraits of people in my life"
    //     },
    //     {
    //         name: "food",
    //         description: "Delicious delicacies"
    //     },
    //     {
    //         name: "landscape",
    //         description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    //     }
    // ])

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    }, [currentCategory])
    
    // //function for the onClick() in the map
    // function caetgorySelected(name) {
    //     console.log(`${name} clicked`)
    // }
    
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸 </span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        {/* the on click hides the contact form */}
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        {/* onclick reveals contact hides rest */}
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 
                        ${currentCategory.name === category.name && !contactSelected && 'navActive'}
                        `} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)
                                setContactSelected(false)
                            }} >
                                {capitalizeFirstLetter(category.name)} 
                                {/* {console.log(currentCategory)} */}
                                {/* {console.log(capitalizeFirstLetter(currentCategory.name))} */}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header> 
    )
}

export default Nav