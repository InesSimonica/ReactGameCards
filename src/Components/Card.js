import './card.css'

export default function Card({ id, title, imageUrl, description}) {
    
    return(
        <div className='card' id= {id} >
            <label className='card-title'> {title} </label>
            <img className='card-image' src= {imageUrl} alt= 'Could not find img'/> 
            <label className='card-description'> {description} </label>
        </div>      
    );
}