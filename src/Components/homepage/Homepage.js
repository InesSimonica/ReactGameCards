import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { fetchData } from '../../Apis/Dummy-api'
import '../Style/Homepage.css'
import RecentlyPlayedZone from '../Recently-played-zone/Recently-played-zone'


export const Homepage = () =>  {
    const [cards, setCards] = useState([])
	const [errorMessage, setErrorMessage] = useState([])
	const [recentlyPlayedCards, setRecentlyPlayedCards] = useState([])
    

	const numberOfCards = 20


    useEffect(() => {
        fetchData(numberOfCards)
        .then((res) => {setCards(res)})
        .catch((error) => {
            setErrorMessage(error)
            console.error('[ERROR IN HOMEPAGE COMPONENT FETCH DATA]: ' + errorMessage)
        })
    },[])

    useEffect(() => {
    if (cards.length) {
        console.log(cards)
        const firstCards = cards.slice(0,4)
        setRecentlyPlayedCards(firstCards)
    }
    }, [cards])

    const AddRecentCard = (clickedCardId) => {
        const updatedRecentlyPlayedCards = recentlyPlayedCards
        updatedRecentlyPlayedCards.unshift(cards[clickedCardId-1])
        updatedRecentlyPlayedCards.pop()
        setRecentlyPlayedCards(updatedRecentlyPlayedCards)
        
    }



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
                        AddRecentCard = {AddRecentCard}
                    />
                )}
            </div>
            <RecentlyPlayedZone
                receivedCards = {recentlyPlayedCards}
            />
        </div>

    )

}





export default Homepage