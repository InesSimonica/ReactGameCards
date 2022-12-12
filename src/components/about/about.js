import '../Style/About.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataById } from '../../Apis/Dummy-api'
import { useEffect, useState } from 'react'

export const About = () => {
    const [description, setDescription] = useState('')
    const { id } = useParams() 
    
    console.log(id) 
    useEffect(() => {
        fetchDataById(id).then((res) => {setDescription(res)}).catch((e) => {
            console.error('[ERROR FETCHING BY ID]: ' + e)
        })
    }, '')
 
    console.log(description)
    return(
        <div className="about-window">
            <label>{description}</label>
        </div>
    )
}

export default About