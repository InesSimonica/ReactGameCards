import { useEffect, useState } from 'react'
import { fetchData } from '../apis/dummy-api'
import Card from './card'
import './cards-container.css'

export default function CardsContainer() {
    const [cardData, setCardData] = useState([])
    const [errorMessage, setErrorMessage] = useState([])

    const numberOfCards = 20

    useEffect(() => {
        fetchData(numberOfCards).then((res) => {setCardData(res)}).catch((e) => {
            setErrorMessage(e)
            console.error('[ERROR IN USEEFFECT]: ' + errorMessage)
        })
        
    }, [])
    
    return(
        <div className= 'cards-container'>
            {cardData.map((element) =>
                <Card
                    key = {element.id}
                    title = {element.title}
                    imageUrl = {element.url}
                    description = {element.description}
                />
            )}
        </div>

    )
}

