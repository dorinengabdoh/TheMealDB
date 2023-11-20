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
      {data ? (
        <>
          <p className="cake">For the crust</p>
          {data.meal.map((ingre) => 
            {if (mealId == meal.idMeal) {
              <div class="ingredient-container">
                <div class="ingedients">
                  <strong> 1 -</strong>
                  <p class="gri">${ingre.strMeasure1}</p>
                  <p>${ingre.strIngredient1}</p>
                </div>
                <div class="ingedients">
                  <strong>2 -</strong>
                  <p class="gri">${ingre.strMeasure2}</p>
                  <p>${ingre.strIngredient2}</p>
                </div>
                <div class="ingedients">
                  <strong>3 -</strong>
                  <p class="gri">${ingre.strMeasure3}</p>
                  <p>${ingre.strIngredient3}</p>
                </div>
                <div class="ingedients">
                  <strong>4 -</strong>
                  <p class="gri">${ingre.strMeasure4}</p>
                  <p>${ingre.strIngredient4}</p>
                </div>
                <div class="ingedients">
                  <strong>5 -</strong>
                  <p class="gri">${ingre.strMeasure5}</p>
                  <p>${ingre.strIngredient5}</p>
                </div>
                <div class="ingedients">
                  <strong>6 -</strong>
                  <p class="gri">${ingre.strMeasure6}</p>
                  <p>${ingre.strIngredient6}</p>
                </div>
                <div class="ingedients">
                  <strong>7 -</strong>
                  <p class="gri">${ingre.strMeasure7}</p>
                  <p>${ingre.strIngredient7}</p>
                </div>
                <div class="ingedients">
                  <strong>8 -</strong>
                  <p class="gri">${ingre.strMeasure8}</p>
                  <p>${ingre.strIngredient8}</p>
                </div>
                <div class="ingedients">
                  <strong>9 -</strong>
                  <p class="gri">${ingre.strMeasure9}</p>
                  <p>${ingre.strIngredient9}</p>
                </div>
                <div class="ingedients">
                  <strong>10 -</strong>
                  <p class="gri">${ingre.strMeasure10}</p>
                  <p>${ingre.strIngredient10}</p>
                </div>
                <div class="ingedients">
                  <strong>11 -</strong>
                  <p class="gri">${ingre.strMeasure11}</p>
                  <p>${ingre.strIngredient11}</p>
                </div>
                <div class="ingedients">
                  <strong>12 -</strong>
                  <p class="gri">${ingre.strMeasure12}</p>
                  <p>${ingre.strIngredient12}</p>
                </div>
                <div class="ingedients">
                  <strong>13 -</strong>
                  <p class="gri">${ingre.strMeasure13}</p>
                  <p>${ingre.strIngredient13}</p>
                </div>
                <div class="ingedients">
                  <strong>14 -</strong>
                  <p class="gri">${ingre.strMeasure14}</p>
                  <p>${ingre.strIngredient14}</p>
                </div>
                <div class="ingedients">
                  <strong>15 -</strong>
                  <p class="gri">${ingre.strMeasure15}</p>
                  <p>${ingre.strIngredient15}</p>
                </div>
                <div class="ingedients">
                  <strong>16 -</strong>
                  <p class="gri">${ingre.strMeasure16}</p>
                  <p>${ingre.strIngredient16}</p>
                </div>
                <div class="ingedients">
                  <strong>17 -</strong>
                  <p class="gri">${ingre.strMeasure17}</p>
                  <p>${ingre.strIngredient17}</p>
                </div>
                <div class="ingedients">
                  <strong>18 -</strong>
                  <p class="gri">${ingre.strMeasure18}</p>
                  <p>${ingre.strIngredient18}</p>
                </div>
                <div class="ingedients">
                  <strong>19 -</strong>
                  <p class="gri">${ingre.strMeasure19}</p>
                  <p>${ingre.strIngredient19}</p>
                </div>
                <div class="ingedients">
                  <strong>20 -</strong>
                  <p class="gri">${ingre.strMeasure20}</p>
                  <p>${ingre.strIngredient20}</p>
                </div>
              </div>                   
            }} 
            )}
        </>
      ) : (
        <div>No Data</div>
      )}
      </div >
    </>
  )
}

export default Ingredient