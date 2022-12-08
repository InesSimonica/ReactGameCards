import './card.css'
import './description-window'
import DescriptionWindow from './description-window'

export default function Card ({ title, imageUrl, description}) {
    
    return(
        <div className='card' onClick={() => OpenNewWindow(description)}>
            <label className='card-title'> {title} </label>
            <img className='card-image' src= {imageUrl} alt= 'Could not find img'/> 
        </div>      
    )

    function OpenNewWindow(description) {
        console.log(description)
        let myWindow = window.open('', 'Game description', 'width=500,height=400' )

    }
}
