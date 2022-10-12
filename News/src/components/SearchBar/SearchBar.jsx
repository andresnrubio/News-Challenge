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



    return (
        <div>
            <form id='searchBar'>
                <input type="text" name='keywords' placeholder="Search by keywords"/>
                <label htmlFor="language">Set language</label>
                <select name="language" id='language'>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
                <select name="source" >
                <option value="">Sources</option>
                {sources.length > 0  ? sources.map((source, index)=>{return <option key={index}>{source}</option>}):<></>}
                </select>
                <button id='button' onClick={searchParameters}>Click</button>
            </form>
          
            </div>
    )
}

export default SearchBar

