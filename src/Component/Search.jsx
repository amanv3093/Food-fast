import React, { useState } from 'react'
import './Search.css'
import { NavLink, useNavigate } from 'react-router-dom';
function Search() {
    //https://www.themealdb.com/api/json/v1/1/search.php?s=burger
    let [inputValue , setInputValue] = useState('')
    let [searchData , setSearchData] = useState([]);
    let[showMenu , setShowMenu] = useState(false)
    const navigate = useNavigate();
    
    let handelFoodText = (e) =>{
        setInputValue(e.target.value);
        
    }

    let handelSearch = () =>{
        async function foodItem(){
            let Fetch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
            let response = await Fetch.json();
            setSearchData(response);
            console.log(response);
            navigate('/')
            
        }
        foodItem();
    }

    let menuShow = () =>{
        setShowMenu(prevShowMenu => !prevShowMenu);
    }
    console.log(searchData);


  return (
   <>
        <div className='navbar'>
            <header> 
                <div className='food-logo'> 
                    <a>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0  24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3L4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"></path></svg>
                        <span>FastEat.</span>
                    </a>
    
    
                </div>
    
                <div className='menu'>
                    <span class="material-symbols-outlined menu-logo" onClick={menuShow}>menu</span>
                        <div className={`menu-box ${showMenu === true ? 'menu-show' : ''}`} >
                    <span class="material-symbols-outlined close" onClick={menuShow}>close</span>
                        <ul>
                            <li><NavLink  to={`/subcategory/Beef`}>Beef</NavLink></li>
                            <li><NavLink to={`/subcategory/Chicken`}>Chicken</NavLink></li>
                            <li><NavLink to={`/subcategory/Dessert`}>Dessert</NavLink></li>
                            <li><NavLink to={`/subcategory/Lamb`}>Lamb</NavLink></li>
                            <li><NavLink to={`/subcategory/Miscellaneous`}>Miscellaneous</NavLink></li>
                            <li><NavLink to={`/subcategory/Pasta`}>Pasta</NavLink></li>
                            <li><NavLink to={`/subcategory/Pork`}>Pork</NavLink></li>
                            <li><NavLink to={`/subcategory/Seafood`}>Seafood</NavLink></li>
                            <li><NavLink to={`/subcategory/Starter`}>Side</NavLink></li>
                            <li><NavLink to={`/subcategory/Starter`}>Starter</NavLink></li>
                            <li><NavLink to={`/subcategory/Vegan`}>Vegan</NavLink></li>
                            <li><NavLink to={`/subcategory/Vegetarian`}>Vegetarian</NavLink></li>
                            <li><NavLink to={`/subcategory/Breakfast`}>Breakfast</NavLink></li>
                            <li><NavLink to={`/subcategory/Goat`}>Goat</NavLink></li>
    
                        </ul>
    
                    </div>
                    
    
                </div>
    
            </header>
        </div>

        <div className='search-box'>
            
            <div className='search-input-box'>
                <input type='text' placeholder='Search recipes here' onChange={handelFoodText}/>
                <span class="material-symbols-outlined Search-icon" onClick={handelSearch}>search</span>
                
            </div>
           
            <h2>What are your favorite cuisines?</h2>
            <p>PERSONALIZE YOUR EXPERIENCE</p>
            
        </div>
      
        
       {searchData && searchData.meals ?
        <div className='filter-Data'>
            <div className='filter-Data-Heading'>
                <h1 className='heading2'>MEALS</h1>
                <span></span>
            </div>
            {searchData.meals.map((elem)=>(
                <NavLink className='filter-Data-box' to={`/Product/${elem.idMeal}`}>
                    <div className='filter-Data-Innerbox'>
                        <img src={elem.strMealThumb} alt='img'/>
                        <p className='strCategory'>{elem.strCategory}</p>
                        <p>{elem.strArea}</p>
                        <h3 >{elem.strMeal}</h3>

                    </div>
                </NavLink>

            ))

            }

        </div>:<></>
    }
    </>
  )
}

export default Search;
// idMeal: "52901"