import './CategoriesDisplay.css'

import React from 'react'

const CategoriesDisplay = (props) => {

let categories = [
    "business","entertainment","general","health","science","sports","technology"
]

const sendCategory = (category) =>{
   props.handleCategories({
    endpoint:'top',
    category: category
})
}

  return (
    <div className='container'>
        {categories.map((category)=> {return (<button key={category} className="category" onClick={()=>{sendCategory(category)}}>{category}</button>)})}
    </div>
  )
}

export default CategoriesDisplay