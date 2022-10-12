import './Home.css'
import React, { useRef, useCallback, useState } from 'react'
import { useNews } from '../../hooks/useNews'
import NewsCard from '../../components/NewsCard/NewsCard'
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {
    const [filter, setFilter] = useState({
        keyword:"keyword",
        language:"en"
    })
    const [pageNumber, setPageNumber] = useState(1)
    const {isLoading, error, news, hasRemainingNews} =  useNews(filter, pageNumber)

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const observer = useRef()
    const lastItem = useCallback(node => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasRemainingNews) {
                console.log("visible")
                nextPage()
            }
        })
        if (node) observer.current.observe(node)
    }, [isLoading, hasRemainingNews])

    const handleSearch = (formData) =>{
        console.log(formData)
        setFilter(formData)
        setPageNumber(1)
    }

    
    return (
        <>
            <SearchBar handleSearch={handleSearch} />
            {/* <button onClick={nextPage}>Proxima pagina</button> */}
            <div className="container">
                {news.length > 0 ? news.map((data, index) => {
                    if (index + 1 === news.length) {
                        return (
                        <div ref={lastItem} key={index}>
                            <NewsCard new={data} key={index} />
                        </div>)
                    } else {
                        return <NewsCard new={data} key={index} />
                    }
                }) : <></>}
            </div>
            <div className='Loading'>{isLoading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </>
    )
}

export default Home