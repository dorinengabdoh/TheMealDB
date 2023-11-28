import React from 'react';
import First from '../firstComponent/First';
import Second from '../secondComponent/Second';
import Third from '../thirdComponent/Third';
import Last from '../lastComponent/Last';
import { useQuery } from "react-query";
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Fouth = () => {
  const hello = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const {data} = useQuery({
    queryKey: ["reci"],
    queryFn: async () => {
      const response = await fetch(hello)
      const jsonResponse = await response.json()
      return jsonResponse.data
    },
  });
  console.log(data);

  return (
    <>
      < First />
        < Second/>
        < Third/>
      <h1 className='none'>Latest Recipes</h1>
      {data ? (
        <>
          <section5 className="sect5">
            <div className="carte1">
              <div className="image-container">
                {data.meals.map((recipe) => (
                  <div className="image-card">
                    <Link to={`/details/${recipe.idMeal}`}><img id="small" src={recipe.strMealThumb} alt="Image 4" /></Link>
                    <div className="desc">{recipe.strMeal}<br />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carte2">
            </div>
          </section5>
        </>
      ) : (
        <div>No Data</div>
      )}
          <Last/>
    </>
  )
}

export default Fouth