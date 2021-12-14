import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <div>
            <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.google.co.in">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.google.co.in">About</a>
            </li>
            <li>
                {props.searchBar? <form className='d-flex'>
                    <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                    <button className='btn btn-outline-success' type='submit'>Search</button>
                </form>:"No Search Bar"}
            </li>
            </ul>
        </div>
    )
}


Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}

Header.defaultProps = {
    title: 'Your Title Here',
    searchBar: true
}