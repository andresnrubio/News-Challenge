import { useEffect, useState } from "react"
import { getByKeywords } from '../utils/news.utils'


//** Hook de manejo de estado news */

const useNews = (filter, pageNumber) => {

const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState(false)
const [news, setNews] = useState([])
const [hasRemainingNews, setHasRemainingNews] = useState(false)

useEffect(()=>{
    setNews([])
},[filter])

useEffect(() => {
    setIsLoading(true)
    setError(false)
    getByKeywords(filter, pageNumber)
    .then((res)=>{
         setTimeout(() => {
            setNews(prevNews=>{
                return [...new Set([...prevNews, ...res.articles])]
            })
            setHasRemainingNews(res.articles.length > 0)
            if(pageNumber >=6) setHasRemainingNews(false)
            setIsLoading(false)
         },500);
    }).catch(err=>{if(err)setError(true)}
    )
}, [filter, pageNumber])



  return {isLoading, error, news, hasRemainingNews}
}


export { useNews }