import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { fetchData } from '../../Apis/Dummy-api'
import '../Style/Homepage.css'
import RecentlyPlayedZone from '../Recently-played-zone/Recently-played-zone'

export const Homepage = () =>  {
    const [cards, setCards] = useState([])
	const [errorMessage, setErrorMessage] = useState([])

	const numberOfCards = 20

    useEffect(() => {
        fetchData(numberOfCards).then((res) => {setCards(res)}).catch((error) => {
            setErrorMessage(error)
            console.error('[ERROR IN HOMEPAGE COMPONENT FETCH DATA]: ' + errorMessage)
        })
    }, [])

    return(
        <div className='homepage-container'>
            <div className= 'cards-container'>
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
            <RecentlyPlayedZone/>
        </div>

    )
}

export default Homepage