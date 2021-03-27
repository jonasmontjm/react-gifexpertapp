//import PropTypes from 'prop-types';
import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['One Puch', 'Samuarai X', 'Dragon  Ball'];
    
    const [categories, setCategories] = useState(['Dragon Ball']);
/*
    const handleAdd = () => {
        setCategories([...categories, 'HUnterXHunter']);
    }
*/
    return ( 
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        <ol>
            {
                /* categories.map( (category, i) => {
                    return <li key={i}> {category} </li>
                }) */

                categories.map( category => (
                    <GifGrid
                      key={category}
                      category={category}
                      />
                ))
            }
        </ol>
        
        
        </>
   );
}

export default GifExpertApp;