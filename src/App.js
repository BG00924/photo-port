import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

import About from './components/About'
import Nav from './components/Nav'
import Gallery from './components/Gallery'

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

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery />
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
