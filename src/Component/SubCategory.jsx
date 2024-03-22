import React, { useState , useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Search from './Search'
import './SubCategory.css'
function SubCategory() {
    
    const [subcategoryData , setSubCategoryData] = useState([]);
    let params = useParams();
    console.log(params);
    async function fetchCategory() {
            

            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.sub}`);
            const data = await response.json();
            setSubCategoryData(data.meals);
            console.log(data);
        
    }
    // idMeal
    useEffect(() => {
        fetchCategory();
    }, []);
    console.log(subcategoryData);
  return (
    <div>
       <Search />
       <div className='subCat-Data'>
       
            <div className='filter-Data-Heading'>
                <h1 className='heading2'>MEALS</h1>
                <span></span>
          </div>
        {subcategoryData.map((category)=>(
            <NavLink className='subCat-Data-box' to={`/Product/${category.idMeal}`}>
            
            <div className='subCat-Data-Innerbox'>
                        <img src={category.strMealThumb} alt='img'/>
                        <p>{category.strMeal}</p>
                       

                    </div>
            </NavLink>
        ))


        }
        </div>
        
      
    </div>
  )
}

export default SubCategory
