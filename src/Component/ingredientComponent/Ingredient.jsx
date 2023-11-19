import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { useParams } from "react-router-dom";


const Ingredient = () => {
  const params = useParams();
  const [ingre, setIngre] = React.useState("");
  console.log(params.id);

  const hello = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const { data } = useQuery({
    queryKey: ["reci"],
    queryFn: async () => {
      return await Axios.get(hello).then((response) => response.data);
    },
  });

  return (
    <>

      <div class="ingre">
        <h2>Ingredients</h2>
        {data?(
          <>
            <p className="cake">For the crust</p>
            {data.meals.map((ingre) => 
                if (mealId == meal.idMeal) {
                  mealCard.innerHTML = `
                    <div class="ingredient-container">
                    <div class="ingedients">
                    <strong> 1 -</strong>
                    <p class="gri">${meal.strMeasure1}</p>
                    <p>${meal.strIngredient1}</p>
                  </div>
                  <div class="ingedients">
                  <strong>2 -</strong>
                  <p class="gri">${meal.strMeasure2}</p>
                    <p>${meal.strIngredient2}</p>
                  </div>
                  <div class="ingedients">
                    <strong>3 -</strong>
                    <p class="gri">${meal.strMeasure3}</p>
                    <p>${meal.strIngredient3}</p>
                  </div>
                  <div class="ingedients">
                    <strong>4 -</strong>
                    <p class="gri">${meal.strMeasure4}</p>
                    <p>${meal.strIngredient4}</p>
                  </div>
                  <div class="ingedients">
                     <strong>5 -</strong>
                    <p class="gri">${meal.strMeasure5}</p>
                    <p>${meal.strIngredient5}</p>
                  </div>
                  <div class="ingedients">
                    <strong>6 -</strong>
                    <p class="gri">${meal.strMeasure6}</p>
                    <p>${meal.strIngredient6}</p>
                  </div>
                  <div class="ingedients">
                     <strong>7 -</strong>
                    <p class="gri">${meal.strMeasure7}</p>
                    <p>${meal.strIngredient7}</p>
                  </div>
                  <div class="ingedients">
                    <strong>8 -</strong>
                    <p class="gri">${meal.strMeasure8}</p>
                    <p>${meal.strIngredient8}</p>
                  </div>
                  <div class="ingedients">
                    <strong>9 -</strong>
                    <p class="gri">${meal.strMeasure9}</p>
                    <p>${meal.strIngredient9}</p>
                  </div>
                  <div class="ingedients">
                    <strong>10 -</strong>
                    <p class="gri">${meal.strMeasure10}</p>
                    <p>${meal.strIngredient10}</p>
                  </div>
                  <div class="ingedients">
                     <strong>11 -</strong>
                    <p class="gri">${meal.strMeasure11}</p>
                    <p>${meal.strIngredient11}</p>
                  </div>
                  <div class="ingedients">
                     <strong>12 -</strong>
                    <p class="gri">${meal.strMeasure12}</p>
                    <p>${meal.strIngredient12}</p>
                  </div>
                  <div class="ingedients">
                    <strong>13 -</strong>
                    <p class="gri">${meal.strMeasure13}</p>
                    <p>${meal.strIngredient13}</p>
                  </div>
                  <div class="ingedients">
                    <strong>14 -</strong>
                    <p class="gri">${meal.strMeasure14}</p>
                    <p>${meal.strIngredient14}</p>
                  </div>
                  <div class="ingedients">
                    <strong>15 -</strong>
                    <p class="gri">${meal.strMeasure15}</p>
                    <p>${meal.strIngredient15}</p>
                  </div>
                  <div class="ingedients">
                    <strong>16 -</strong>
                    <p class="gri">${meal.strMeasure16}</p>
                    <p>${meal.strIngredient16}</p>
                  </div>
                  <div class="ingedients">
                     <strong>17 -</strong>
                    <p class="gri">${meal.strMeasure17}</p>
                    <p>${meal.strIngredient17}</p>
                  </div>
                  <div class="ingedients">
                   <strong>18 -</strong>
                    <p class="gri">${meal.strMeasure18}</p>
                    <p>${meal.strIngredient18}</p>
                  </div>
                  <div class="ingedients">
                    <strong>19 -</strong>
                    <p class="gri">${meal.strMeasure19}</p>
                    <p>${meal.strIngredient19}</p>
                  </div>
                  <div class="ingedients">
                    <strong>20 -</strong>
                    <p class="gri">${meal.strMeasure20}</p>
                    <p>${meal.strIngredient20}</p>
                  </div>
                    </div>
                   
                   
            )}
          </>

        ) : (
          <div>No Data</div>
        )
      }

      </div>
    </>
  )
}

export default Ingredient