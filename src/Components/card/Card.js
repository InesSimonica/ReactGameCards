import '../Style/Card.css'



export const Card = ({ id, title, imageUrl, description, AddRecentCard}) => {
    
    return(
        <div className='card' onClick={() => {
            OpenNewWindow(description)
            AddRecentCard(id)
            }}>
            <label className='card-title'> {title} </label>
            <img className='card-image' src= {imageUrl} alt= 'card visual'/> 
        </div>      
    )

    function OpenNewWindow(description) {
        const myWindow = window.open('http://localhost:3000/about/'+ id, 'Game description', 'width=700,height=200' )
    }
}

export default Card