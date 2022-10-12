import './SearchBar.css'

import React from 'react'
import { getAllSources } from '../../utils/news.utils';
import { useEffect, useState } from 'react';
import { useNews } from '../../hooks/useNews'

const SearchBar = (props) => {
    let [sources, setSources] = useState([])

    useEffect(()=>{
        getAllSources().then((res)=>{setSources(res)})
    },[])

    const button = document.getElementById('button');

    if (button) { button.addEventListener("click", (e) => e.preventDefault()) }

    const searchParameters = () => {
        let form = document.getElementById('searchBar')
        let keywordSearch = "keyword"
        if(!form.keywords.value == '')
        {
            keywordSearch = form.keywords.value
        }
        props.handleSearch({
            keyword: keywordSearch,
            language: form.language.value,
            source: form.source.value
        })
    }

    
    // <div className="searchBar d-flex align-items-center">
        
    //     <form id='searchBar' className='container-fluid d-flex align-items-center justify-content-center '>
    //         <img src="/magnifying-glass.png" alt="magnifying-glass" className='magnifying-glass-icon'/>
    //         <input className='form-control input' type="text" name='keywords' placeholder="Search by keywords"/>
    //         <select name="language" id='language' className='form-select selector'>
    //             <option selected>Language</option>
    //             <option value="en">English</option>
    //             <option value="es">Español</option>
    //         </select>
    //         <select name="source"  className='form-select selector'>
    //         <option value="">Sources</option>
    //         {sources.length > 0  ? sources.map((source, index)=>{return <option key={index}>{source}</option>}):<></>}
    //         </select>
    //         <button id='button' onClick={searchParameters} className="btn btn-outline-success searchButton">Buscar</button>
    //     </form>
      
    // </div>


    return (
        <nav class="navbar navbar-expand-lg  searchBar" >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <form id='searchBar' className='container-fluid d-flex align-items-center justify-content-center '>
              <img src="/magnifying-glass.png" alt="magnifying-glass" className='magnifying-glass-icon'/>
              <input className='form-control input' type="text" name='keywords' placeholder="Search by keywords"/>
              <select name="language" id='language' className='form-select selector'>
                  <option value="en">English</option>
                  <option value="es">Español</option>
              </select>
              <select name="source"  className='form-select selector'>
              <option value="">Sources</option>
              {sources.length > 0  ? sources.map((source, index)=>{return <option key={index}>{source}</option>}):<></>}
              </select>
              <button id='button' onClick={searchParameters} className="btn btn-outline-success searchButton">Buscar</button>
          </form>
    </div>
  </div>
</nav>
    )
}

export default SearchBar

