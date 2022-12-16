import { useEffect, useState} from 'react'
import Card from '../Card/Card'
import '../Style/Recently-played-zone.css'

export const RecentlyPlayedZone = ({ receivedCards }) => {
    return (
        <div className='recently-played-zone-container'>
            <label className='recently-played-label'>Recently played</label>
            <div className='recently-played-cards-container'>
                {receivedCards.map((element) =>
                    <Card
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        imageUrl={element.url}
                        description={element.description}
                    />
                )}
            </div>
        </div>

    )
}

export default RecentlyPlayedZone