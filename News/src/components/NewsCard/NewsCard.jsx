import "./NewsCards.css"
import React from 'react'


const NewsCard = (props) => {

    return (
        <div className="card">
        <a href={props.new.url}> 
            <img src={props.new.urlToImage} alt="Image Not Found" onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src="http://michaelnorthrop.net/wp-content/uploads/2008/12/technical-difficulties.png";
            }}/>
            <article>
                <p className="title">{props.new.title}</p>
                <p className="description">{props.new.description}</p>
                {/* <a href={props.new.url}> Read more. . .</a> */}
                <p href={props.new.url}> Read more. . .</p>
            </article>
        </a>
        </div>
    )
}

export default NewsCard
