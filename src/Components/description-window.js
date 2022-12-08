import './description-window.css'

export default function DescriptionWindow(description) {
    return(
        <div className="window">
            <label>{description}</label>
        </div>
    )
}