import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
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
        
        <div className='product'>
            <div className='product-section1'>
            <NavLink id='section1-tags' to='/'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
            </svg>
            </NavLink>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="23" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path><path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path></svg>
            <p>{ProductDetails.strMeal}</p>

            

            </div>
            <div className='product-section2'>
            <div className='filter-Data-Heading2'>
                <h1 className='heading3'>MEAL DETAILS</h1>
                <span></span>
            </div>

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
              {Array.from({ length: 20 }, (_, index) => {
                  const measure = ProductDetails[`strMeasure${index + 1}`];
                  {console.log(measure)}
                  if(measure !== ' ' && measure !== '' & measure !== null){
                  return(
                        <div key={index} className='product-headingBox'>
                            <svg className='scp' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8 63-62.9 83.6-172.8 28.5-227.8z"></path></svg>
                            <li>{measure}</li>
                        </div> 
                    
                     )
                  }
                   
              })}
               
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

 