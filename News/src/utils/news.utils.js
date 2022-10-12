import axios from 'axios'

const getAll = async () => {
    const oneNews = await axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=${import.meta.env.VITE_API_KEY}`)
    const { data } = await oneNews
    return data
}

const getAllNews = async () => {
    const news = await getAll()
    return news.articles
}

const getAllSources = async () => {
    const news = await getAllNews()
    let sources = []
    news.map((data)=>{
    sources.push(data.source.name)
    })
    sources = [...new Set(sources)]
    return sources
}

const getOne = async () => {
    const oneNew = await getAllNews()
    return oneNew[0]
}

const getByKeywords = async (filter, pageNumber) => {    
    const filterNews = await axios.get(`https://newsapi.org/v2/everything?q=${filter.keyword}&language=${filter.language}&pageSize=20&page=${pageNumber}&apiKey=${import.meta.env.VITE_API_KEY}`)
    const { data } = await filterNews
    return data
}


export { getAll, getOne, getAllNews, getByKeywords, getAllSources }