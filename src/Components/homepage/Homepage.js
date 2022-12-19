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
    }, [])

    // useEffect(() => {
    //     if (cards.length) {
    //         console.log(cards)
    //         const firstCards = cards.slice(0,4)
    //         setRecentlyPlayedCards(firstCards)
    //     }
    // }, [cards])

    const addRecentCard = (clickedCardId) => {
        setRecentlyPlayedCards((oldCardsArray) => {
            const found = oldCardsArray.find((element) => element === cards[clickedCardId - 1])
            if (found) {
                return [...oldCardsArray]
            }
            else {
                if (oldCardsArray.length >= 4) {
                    oldCardsArray.unshift(cards[clickedCardId - 1])
                    oldCardsArray.pop()
                    return [...oldCardsArray]
                }
                else {  
                    oldCardsArray.unshift(cards[clickedCardId - 1])
                    return [...oldCardsArray]
                }
            }

        })
        
    }

    return(
        <div className='homepage-container'>
            <div className= 'cards-container'>
                {cards.map((element) =>
                    <Card
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        imageUrl={element.url}
                        description={element.description}
                        AddRecentCard={addRecentCard}
                    />
                )}
            </div>
            <RecentlyPlayedZone
                receivedCards={recentlyPlayedCards}
                addRecentCard={addRecentCard}
            />
        </div>
    )
}

export default Homepage