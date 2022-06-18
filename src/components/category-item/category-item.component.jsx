import './category-item.styles.scss'


const CategoryItem = ({category})=>{
    const {imageUrl,title} = category;
    return (
  
    <div  className='category-container'>
    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
<div className='category-body-container'>

<h3>{title}</h3>
<p>shop now</p>
  </div>
  
  </div>
    )
}


 
 export default CategoryItem;