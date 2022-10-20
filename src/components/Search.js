import React,{useState} from 'react'
import {useGlobalContext} from '../ContextApi/Context'

  

const Search = () => {
  const {location, searchL} = useGlobalContext()
  const [text, setText] = useState("")
  const handleClick = () =>{
    searchL(text)
  }

  return (
    <nav className="navbar bg-light" style={{width:"100%", height: "10%"}}>
    <div className="container-fluid">
    <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
      <input className="form-control me-2" type="text" placeholder="Search.." aria-label="Search" value={text} onChange={(e)=> setText(e.target.value)} />
      <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
    </form>
  <h5 className='ml-auto text-center text-danger text-capitalize'>Weather Forcast of {location.name}, {location.region}</h5>
  </div>
</nav>
  )
}

export default Search