import '../Style/Card.css'

export const Card = ({ id, title, imageUrl, description, addRecentCard }) => {
    
    const openNewWindow = (description) => {
        const myWindow = window.open('http://localhost:3000/about/'+ id, 'Game description', 'width=700,height=200' )
    }
    return(
        <div className='card' onClick={() => {
            openNewWindow(description)
            addRecentCard(id)
            }}>
            <label className='card-title'> {title} </label>
            <img className='card-image' src= {imageUrl} alt= 'card visual'/> 
        </div>      
    )
}

export default Card
