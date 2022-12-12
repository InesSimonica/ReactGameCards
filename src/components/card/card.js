import './card.css'



export default function Card ({ id, title, imageUrl, description}) {
    
    return(
        <div className='card' onClick={() => OpenNewWindow(description)}>
            <label className='card-title'> {title} </label>
            <img className='card-image' src= {imageUrl} alt= 'Could not find img'/> 
        </div>      
    )

    function OpenNewWindow(description) {
        const myWindow = window.open('http://localhost:3000/about/'+ id, 'Game description', 'width=700,height=200' )
    }
}
