import Card from '../Card/Card'
import '../Style/Recently-played-zone.css'

export const RecentlyPlayedZone = ({ receivedCards, addRecentCard }) => {
    return (
        <div className='recently-played-zone-container'>
            <label className='recently-played-label'>Recently played</label>

            <div className={`recently-played-cards-container-${receivedCards.length}`}>
                {receivedCards.map((element) =>
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
        </div>

    )
}

export default RecentlyPlayedZone