import Card from '../Card/Card'
import '../Style/Recently-played-zone.css'

export const RecentlyPlayedZone = ({ receivedCards, addRecentCard }) => {
    return (
        <div className='recently-played-zone-container'>
            <label className='recently-played-label'>Recently played</label>

            <div className={`recently-played-cards-container-${receivedCards.length}`}>
                {receivedCards.map(({id, title, url, description}) =>
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        imageUrl={url}
                        description={description}
                        addRecentCard={addRecentCard}
                    />
                )}
            </div>
        </div>

    )
}

export default RecentlyPlayedZone