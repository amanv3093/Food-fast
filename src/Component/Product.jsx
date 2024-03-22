import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Search from './Search';
import Category from './Category'
import './Product.css'
function Product() {
    //https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874
    let params = useParams();
    console.log(params);
    let  [ProductDetails , setProductDetails] = useState([]);
    let [tags , setTags] = useState([]);
   
    let [instructions , setInstructions] = useState([]);
    async function details() {
      let Fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeals}`);
      let response = await Fetch.json();
      console.log(response.meals);
      setProductDetails(response.meals[0]);
  
      if (response.meals[0]) {
          
          if (response.meals[0].strTags) {
              setTags(response.meals[0].strTags.split(','));
          } else {
              setTags([]);
          }
  
         
          if (response.meals[0].strInstructions) {
              setInstructions(response.meals[0].strInstructions.split('.'));
          } else {
              setInstructions([]);
          }
      }
  }
    useEffect(()=>{
        details();
    },[])
    console.log(ProductDetails);
    console.log(instructions);
  return (
    <div>
    { ProductDetails?
        <>
        <Search />
        <div className='product'>
            <div className='product-section1'>

            </div>
            <div className='product-section2'>

            </div>

            <div className='product-section3'>
                <div className='product-section3-banner'>
                  <img src={ProductDetails.strMealThumb} />
                </div>

                <div className='product-section3-box'>
                  <p className='strMeal'>{ProductDetails.strMeal}</p>
                  <h4 className='strCategory2'>CATEGORY: <span>{ProductDetails.strCategory}</span></h4>
               
                  <h4 className='strSource'>Source: <a className='strSource-anchor' href={ProductDetails.strSource}>{ProductDetails.strSource}</a></h4>
                  
                  <div className='tags'>
                    <h3 className='tags-heading'>Tags: </h3>
                    {tags.map((elem)=>(
                     <p className='tags-headingBox'>{elem}</p>
                    ))

                    } 
                   </div> 

                   <div className='Ingredients'>
                      <h3 className='Ingredients-heading'>Ingredients</h3>
                      <div className='IngredientsBox'>
                        {Array.from({ length: 20 }, (_, index) => (
                          ProductDetails[`strIngredient${index + 1}`] !== '' && (
                            <div key={index} className='Ingredients-headingBox'>
                              <p>{index+1}</p>
                              <p >{ProductDetails[`strIngredient${index + 1}`]}</p>
                            </div>
                           )
                        ))}
                      </div>

                   </div>
                </div>
            </div>

            <div className='product-section4'>
            <h4>Measure:</h4>
              <ul className='product-section4-box'>
                {
                  Array.from({ length: 20 }, (_, index) => (
                          ProductDetails[`strMeasure${index + 1}`] !== '' && (
                            <div key={index} className='product-headingBox'>
                            <svg className='scp' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                              <li>{ProductDetails[`strMeasure${index + 1}`]}</li>
                            </div>
                           )
                        ))

                }
               
              </ul>

            </div>

            <div className='product-section5'> 
              <h4>Instructions:</h4>
              
              {instructions.map((e, index) => (
                  e !== '' &&
                  <ul key={index}>
                      <svg style={{ color: '#e16120' }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-orange li-icon" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                      </svg>
                      <li key={index}>{e}</li>
                  </ul>
                 ))}
             

            </div>
        </div>
        
        
        <Category />
        </>:<></>
      }
    </div>
  )
}

export default Product;
