import './card.css'

export default function Card ({ title, imageUrl, description}) {
    
    return(
        <div className='card' >
            <label className='card-title'> {title} </label>
            <img className='card-image' src= {imageUrl} alt= 'Could not find img'/> 
            <label className='card-description'> {description} </label>
        </div>      
    )
}
