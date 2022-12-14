import { useEffect } from 'react'
import Card from '../Card/Card'
import '../Style/Recently-played-zone.css'
// import { useEffect, useState } from 'react'

export const RecentlyPlayedZone = ({receivedCards}) => {

    useEffect(() => {
        console.log('The recent cards have changed!')
    }, [receivedCards])

    return (
        <div className='recently-played-zone-container'>
            <label className='recently-played-label'>Recently played</label>
            <div className='recently-played-cards-container'>
                {receivedCards.map((element) =>
                    <Card
                        key = {element.id}
                        id = {element.id}
                        title = {element.title}
                        imageUrl = {element.url}
                        description = {element.description}
                    />
                )}
            </div>
        </div>

    )
}

export default RecentlyPlayedZone