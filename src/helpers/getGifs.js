const getGift = async( category )=>{
    const deco_category = encodeURI(category);
    const url = `https://api.giphy.com/v1/gifs/search?q=${deco_category}&limit=10&api_key=vRR8iOA4l90PRhc1h8tx9vVvjFTsGFEm`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url : img.images?.downsized_medium.url
        }
    })

    
    return gifs;

}

export default getGift;