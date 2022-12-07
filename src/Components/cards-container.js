import { useEffect, useState } from 'react'
import { fetchData } from '../APIs/dummy-api'
import Card from './card'
import './cards-container.css'

export default function CardsContainer() {
    const [cardData, setCardData] = useState([])
    const numberOfCards = 20

    useEffect(() => {
        fetchData(numberOfCards).then((res) => {setCardData(res)})
        
    }, [])
    
    return(
        <div className= 'cards-container'>
            {cardData.map((element) =>
                <Card
                    id = {element.id}
                    title = {element.title}
                    imageUrl = {element.url}
                    description = {element.description}
                />
            )}
        </div>

    )
}

