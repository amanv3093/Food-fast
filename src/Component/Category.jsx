import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UseFoodContext } from '../Context/Context';
import './Category.css'
function Category() {
    const [categoryData , setCategoryData] = useState([]);
    // let {data} = UseFoodContext();
    // console.log(data);
    async function fetchCategory() {
        
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            setCategoryData(data.categories);
            // console.log(data);
        
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    console.log(categoryData);

    return (

        <div className='CATEGORIES'>
        
            <div className='filter-Data-Heading'>
                <h1 className='heading2'>CATEGORIES</h1>
                <span></span>
            </div>
            {categoryData.map((category) => (
                <NavLink className='CATEGORIES-box' to={`/subcategory/${category.strCategory}`}>
                <div className='CATEGORIES-box-inner' key={category.idCategory}>
                    <p>{category.strCategory}</p>
                    <img src={category.strCategoryThumb} alt={category.strCategory}/>
                </div>
                </NavLink>
            ))}
        </div>
    );
}

export default Category;
