import React from 'react'
import logofooter from '../../images/Mundos-E.jpg'
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer-content'>
            <div className='texto-footer'>
                <p>&copy;2023 Certificación Full Stack 2203 </p>
            </div>
            <div className='footer-logo'>
                <img src={logofooter} alt='logo MundosE' />
            </div>
        </div>
    )
}

export default Footer