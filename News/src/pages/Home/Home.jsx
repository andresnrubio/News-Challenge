import './Home.css'
import React, { useRef, useCallback, useState } from 'react'
import { useNews } from '../../hooks/useNews'
import SearchBar from '../../components/SearchBar/SearchBar'
import Header from '../../components/Header/Header'
import CategoriesDisplay from '../../components/CategoriesDisplay/CategoriesDisplay'
import NewsContainer from '../../components/NewsContainer/NewsContainer'

const Home = () => {
    const [filter, setFilter] = useState({
        endpoint:'every',
        keyword: "keyword",
        language: "en"
    })
    const [pageNumber, setPageNumber] = useState(1)
    const { isLoading, error, news, hasRemainingNews } = useNews(filter, pageNumber)

   
    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    //* Ref para localizacion y observacion de el ultimo elemento renderizado con trigger para infinite scroll
    
    const observer = useRef()
    const lastItem = useCallback(node => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasRemainingNews) {
                nextPage()
            }
        })
        if (node) observer.current.observe(node)
    }, [isLoading, hasRemainingNews])


    const handleSearch = (formData) => {
        setFilter(formData)
        setPageNumber(1)
    }

    const handleCategories = (category) => {
        setFilter(category)
        setPageNumber(1)
    }

    return (
        <>
            <Header />
            <CategoriesDisplay handleCategories={handleCategories} />
            <SearchBar handleSearch={handleSearch} />
            <NewsContainer news={news} lastItem={lastItem} />
            <div className='container loading'>{isLoading && <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}</div>
            <div>{error && 'Error'}</div>
            <div>{(news.length === 0 && !isLoading) && 'No hay resultados para los criterios ingresados'}</div>
        </>
    )
}

export default Home