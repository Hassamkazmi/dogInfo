import React, { useState, useEffect ,Fragment} from "react"
import { useNavigate } from "react-router-dom"

const Search = () => {

  const navigate = useNavigate();

  const [text, setText] = useState("")
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await res.json()
      } catch (error) {
        console.error(error)
      }
    }
    fetchDogData()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()

    searchForDog()
    setSearched(true)
  }

  const searchForDog = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${text}`
      )
      const data = await res.json()
      navigate(`/${text}`)
      setText('')
    } catch (error) {
      console.error(error)
    }
  }
  const onOptionChangeHandler = (e) => {
    navigate(`/${e.target.value}`)
  }
  return (
    <Fragment>
      <div className='searchbox'>
      <form
                onSubmit={handleSubmit}
                className=""
                autoComplete="off"
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for a dog / breed"
                  className=""
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
      </div>
    </Fragment>
  )
}

export default Search