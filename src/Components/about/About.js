import '../Style/About.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataById } from '../../Apis/Dummy-api'
import { useEffect, useState } from 'react'

export const About = () => {
    const [description, setDescription] = useState('')
    const { id } = useParams() 
    
    useEffect(() => {
        fetchDataById(id).then((res) => {setDescription(res)}).catch((error) => {
            console.error('[ERROR FETCHING BY ID]: ' + error)
        })
    }, '')
 
    return(
        <div className="about-window">
            <label>{description}</label>
        </div>
    )
}

export default About