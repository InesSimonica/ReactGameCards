import { useEffect, useState } from 'react'
import { fetchData } from '../APIs/dummy-api'
import Card from './Card'

export default function CardsContainer() {
    const [cardData, setCardData] = useState([])
    const numberOfCards = 20

    useEffect(() => {
        fetchData(numberOfCards).then((res) => {setCardData(res)})

    }, [])

    return(
        <div> Hi </div>
    )
}

