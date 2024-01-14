import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import NavButtons from "./NavButton";

function ArtistView() {
    const [artistData, setArtistData] = useState()
    const { id } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            const url = `http://localhost:4000/album/${id}`
            const response = await fetch(url)
            const data = await response.json()

            const albums = data.results.filter(item => item.collectionType === 'Album')
            setArtistData(albums)
        }

        fetchData()
    }, [id])

    const display = artistData.map(album => {
        return (
            < div key={album.collectionID}>
                <Link to={`/album/$album.collectionId}`} >
                <p>{album.collectionName}</p>
                </Link>
            </div > 
        )
    })

    return (
        <div>
            <NavButtons />
            {display}
        </div>
    )
}

export default ArtistView