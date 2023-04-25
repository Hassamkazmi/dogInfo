import React, { useState, useEffect ,Fragment} from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {

  const [dogs, setDogs] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await res.json()
        setDogs(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDogData()
  }, [])

  const onOptionChangeHandler = (e) => {
    navigate(`/${e.target.value}`)
  }
  return (
    <Fragment>
      <div className='searchbox'>
      <select onChange={onOptionChangeHandler}>
      <option className="breedoption">Select a Breed</option>
        {
          dogs.map((dog,event) => {
            return(
              <option key={event}>
             {dog.name}
              </option>
              )
          })
        }
      </select>
      </div>
    </Fragment>
  )
}

export default Search