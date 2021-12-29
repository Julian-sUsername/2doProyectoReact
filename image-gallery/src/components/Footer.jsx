import React from 'react'

const Footer = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1" href="#">Julián Correa - &copy; {new Date().getFullYear()} </span>
            </div>
        </nav>
    )
}

export default Footer
