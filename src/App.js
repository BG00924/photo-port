import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import About from './components/About'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import ContactForm from './components/Contact';

function App() {
  // lifted up from nav
  const [categories] = useState([
    {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial products"
    },
    { 
        name: "portraits",
        description: "Portraits of people in my life"
    },
    {
        name: "food",
        description: "Delicious delicacies"
    },
    {
        name: "landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
])

// lfited from nav
const [currentCategory, setCurrentCategory] = useState(categories[0])

//necessary for SPA
const [contactSelected, setContactSelected] = useState(false)

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* <div>
          <ContactForm></ContactForm>
          <Gallery currentCategory={currentCategory} />
          <About></About>
        </div> */}
        {/* below allows rendering of specific sections/ ternary operator used */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
            <About />
          </>
        ) : (
          <ContactForm />
        )}
        {/* above same as:
        if(!contactSelected) {
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </> 
        } else {
          <ContactForm></ContactForm>
        } */}
      </main>
    </div>
  );
}

export default App;
