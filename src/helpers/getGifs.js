export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=I00k1IzeKNJsn56d8y4Qdx9HHCDH2VCK&q=${category}&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
