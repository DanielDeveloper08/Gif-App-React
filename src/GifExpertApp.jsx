import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {

    if (categories.includes(category)) {
      alert("Elemento ya existe");
      return;
    }

    setCategories([category, ...categories]);
  }

  return (
    <>
      <div className="bg-info fw-bold fs-4 rounded-top-5 text-center py-2 text-white" >Gif App</div>
      <AddCategory onAddCategories={onAddCategory} />

      {
        categories.length==0 && <div className="my-5 fs-5 text-center fw-bold">No existen busquedas recientes..!</div>
      }

      {
        categories.map(category =>
          <GifGrid
            key={category}
            category={category} />
        )
      }

    </>
  )
}
