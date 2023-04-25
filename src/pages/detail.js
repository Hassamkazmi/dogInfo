import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function SingleDog() {
  const [dog, setDog] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        )
        const data = await res.json()
        setDog(data)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSingleDogData()
  }, [name])

  return (
    <>
      <section>
      {dog &&
        dog.map((item) => {
          return (
            <Link
            to={`/${item.name}`}
            key={item.id}
            className="linkclass"
          >
            <div class="card">
              <img
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt="Avatar"
              />
              <div class="container">
                <h4>
                  <b>{item.name}</b>
                </h4>
                <p>{item.bred_for}</p>
                <p>height :{item.height.metric}</p>
                <p>Weigth :{item.weight.metric}</p>
                <p>Country :{item.country_code}</p>
                <p>Temperament :{item.temperament}</p>

              </div>
            </div>
            </Link>
          );
        })}
        
    </section>
    <Link
                to="/"
                className="backbtn"
              >
                &larr; Back
              </Link>
    </>
  )
}