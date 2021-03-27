import { useState, useEffect } from 'react'
import getGift from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=>{
        getGift(category)
        .then( imgs => {

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
                
            }, 3000);
        })
    }, [ category])

    return state; 
}
