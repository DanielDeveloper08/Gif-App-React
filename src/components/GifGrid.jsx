import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="fs-2 text-white my-4 bg-danger rounded text-center">{category}</div>

      {
        isLoading && <h4>Cargando....</h4>
      }

    


      <div className="card-grid ">

        {
          images.map(image =>

            <div key={image.id} className="card">
              <p>{image.title}</p>
              <img src={image.url} alt="Gifs" />
            </div>

          )
        }
      </div>

    </>
  )
}
