import "./NewsCards.css"
import React from 'react'


const NewsCard = (props) => {

    let date = new Date(props.new.publishedAt);
    date=date.getDate()+' ' + (date.toLocaleString('default', { month: 'long' })) + ', '+date.getFullYear()


    return (
        <>
            <section className="cardAlt">
                <div className="title">
                <h3>{props.new.title}</h3>
                </div>
                <a href={props.new.url}  target="_blank"><img src={props.new.urlToImage} alt="Image Not Found" onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "http://michaelnorthrop.net/wp-content/uploads/2008/12/technical-difficulties.png";
                }} /> </a> <p className="date">{date}</p>
                <p className="description">{props.new.description}</p>
                <a href={props.new.url}  target="_blank">Read More...</a>
            </section>
        </>

    )
}

export default NewsCard
