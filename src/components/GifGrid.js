//import React, {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import getGift from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid =  ({category}) => {

    const { data: images, loading} = useFetchGifs(category)
    /*
    const [images, setImages] = useState([]);

    useEffect( ()=>{
        getGift(category)
        .then( setImages)
    }, [ category])
*/
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>
        { loading && <p className="animate__animated animate__flash">Loading</p>}
        <div className="card-grid">
            
                { images.map( image => (
                    <GifGridItem 
                       key={image.id}
                       img={image}
                    />
                ))}
        </div>
        
        </>
    )
}


export default GifGrid;
