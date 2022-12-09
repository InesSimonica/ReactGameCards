import './card.css'



export default function Card ({ title, imageUrl, description}) {
    
    return(
        <div className='card' onClick={() => OpenNewWindow(description)}>
            <label className='card-title'> {title} </label>
            <img className='card-image' src= {imageUrl} alt= 'Could not find img'/> 
        </div>      
    )

    function OpenNewWindow(description) {
        console.log(description)
        let myWindow = window.open('http://localhost:3000/about', 'Game description', 'width=500,height=400' )

    }
}
