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


const getByKeywords = async (filter, pageNumber) => {    
    let filterNews;
    if(filter.endpoint == "top"){
        filterNews = await axios.get(`https://newsapi.org/v2/top-headlines?country=ar&category=${filter.category}&apiKey=${import.meta.env.VITE_API_KEY}`)
    }else{
        filterNews = await axios.get(`https://newsapi.org/v2/everything?q=${filter.keyword}&language=${filter.language}&pageSize=15&page=${pageNumber}&apiKey=${import.meta.env.VITE_API_KEY}`)
    }
    const { data } = await filterNews
    return data
}



export { getAll, getAllNews, getByKeywords, getAllSources }