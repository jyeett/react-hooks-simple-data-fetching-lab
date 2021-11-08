import {useEffect, useState} from 'react'

// create your App component here
const Url = 'https://dog.ceo/api/breeds/image/random'
function App() {
    const [image, setImage] = useState('Loading...')

    useEffect(() => {
        fetch(Url)
        .then(res => res.json())
        .then(json => setImage(json.message))
    }, [])

    return (
        <>
            {image ==='Loading...' ? <p>Loading...</p> : <img src={image} alt='A Random Dog'></img>}
        </>
    )
    
}

export default App