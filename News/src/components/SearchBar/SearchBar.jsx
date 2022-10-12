import './SearchBar.css'
import React from 'react'

const SearchBar = (props) => {
  

    const button = document.getElementById('button');

    if (button) { button.addEventListener("click", (e) => e.preventDefault()) }

    const searchParameters = () => {
        let form = document.getElementById('searchBar')
        let keywordSearch = "keyword"
        if (!form.keywords.value == '') {
            keywordSearch = form.keywords.value
        }
        props.handleSearch({
            endpoint:'everything?',
            keyword: keywordSearch,
            language: form.language.value,
        })
    }

    return (
        <nav className="navbar navbar-expand-lg  searchBar" >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form id='searchBar' className='container-fluid d-flex align-items-center justify-content-center '>
                        <img src="/magnifying-glass.png" alt="magnifying-glass" className='magnifying-glass-icon' />
                        <input className='form-control input' type="text" name='keywords' placeholder="Search by keywords" />
                        <select name="language" id='language' className='form-select selector'>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                        </select>
                        <button id='button' onClick={searchParameters} className="btn btn-outline-success searchButton">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default SearchBar

