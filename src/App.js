import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App(){
    const [search, setSearch] = useState('')
    const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async() => {
      const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
      const response = await fetch(url)
      const data = await response.json()

      if (data.results.length) {
        setData(data.results)
      } else {
        setMessage('No results found')
      }
    }

    if (search) fetchData()
  }, [search])
  
  const handleSubmit = async (e, term) => {
    e.preventDefault()
    setSearch(term)
  }
    

    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} />
        {message}
        <DataContext.Provider value ={data}>
          <Gallery />
        </DataContext.Provider>
        </div>
    )
}

 

export default App