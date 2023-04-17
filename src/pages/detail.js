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
      <section className="detailpage">
        {dog.map((item) => (
          <div
            key={item.id}
            className=""
          >
            <article>
              <img
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt={item.name}
              />
            </article>
            <article>
              <h1 className="">
                {item.name}
              </h1>
              {item.description && (
                <p className="">
                  {item.description}
                </p>
              )}

              <ul className="">
                <li>
                  <span>Bred For:</span>{" "}
                  {item.bred_for}
                </li>
                <li>
                  <span>Height:</span>{" "}
                  {item.height.metric} cm
                </li>
                <li>
                  <span>Weight:</span>{" "}
                  {item.weight.metric} kgs
                </li>
                <li>
                  <span>Breed Group:</span>{" "}
                  {item.breed_group}
                </li>
                <li>
                  <span>Lifespan:</span>{" "}
                  {item.life_span}
                </li>
                <li>
                  <span>Temperament:</span>{" "}
                  {item.temperament}
                </li>
              </ul>

              <Link
                to="/"
                className="backbtn"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  )
}