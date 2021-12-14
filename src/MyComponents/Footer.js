import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: '100vh',
        width: '100%'
    }
    return (
        <div>
            <footer className='bg-dark text-light py-3' style={footerStyle}>
                <p className='text-center'>
                    Copyrigh &copy; My 1st website
                </p>
            </footer> 
        </div>
    )
}
