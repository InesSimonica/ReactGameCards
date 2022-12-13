import { fetchData } from '../../Apis/Dummy-api'
import Card from '../Card/Card'
import '../Style/Recently-played-zone.css'
import { useEffect, useState } from 'react'


export const RecentlyPlayedZone = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetchData(4).then((res) => {setCards(res)}).catch((error) => {
            console.error('[ERROR IN RECENTLY PLAYED ZONE COMPONENT FETCH DATA]: ' + error)
        })
    }, [])


    return (
        <div className='recently-played-zone-container'>
            {cards.map((element) =>
                <Card
                    key = {element.id}
                    id = {element.id}
                    title = {element.title}
                    imageUrl = {element.url}
                    description = {element.description}
                />
            )}
        </div>
    )
}

export default RecentlyPlayedZone