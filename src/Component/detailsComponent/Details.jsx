import React from 'react'
import Video from '../videoComponent/Video';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Axios from 'axios';
import Comment from '../commentComponent/comment';
import Ingredient from '../ingredientComponent/Ingredient';


const Details = () => {

  const params = useParams()
  console.log(params.id)

  
  const hello = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${+params.id}`;
  const { data, error } = useQuery({
    queryKey: ["reci"],
    queryFn: async () => {
      const meal = await Axios.get(hello).then((response) => response.data)
      const filter_by_category = await Axios.get(`https:www.themealdb.com/api/json/v1/1/filter.php?c=${meal.meals[0].strCategory}`)
      return {
        meal, filter_by_category: filter_by_category.data
      };
    },
  });
  
  if(data){
    console.log(data);
  }

  return (
    <>
      <div class="container">
        <div className="header">
          <div className="logos">
            <img src="src/assets/images/Logo 2.png" alt="" id="logo" />
          </div>
          <div className="home">
            <select>
              <option value="">Homepage</option>
            </select>
            <select>
              <option value="">Recipe Page</option>
            </select>
            <select>
              <option value="">pages</option>
            </select>
            <select>
              <option value="">buy</option>
            </select>
          </div>
          <div className="left">
            <i id="icon" className="fas fa-search"></i>
            <img id="profile" height="10%" src="./images/breakfast.webp" alt="" />
            <span id="menu-btn">☰</span>
          </div>
        </div>
        <section className="sect2">
          <div className="head-left">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <p>85% would make this again</p>
          </div>
          <div className="head-right">
            <i id="lone" className="fa-solid fa-arrow-up-from-bracket"></i>
            <button id="favo"><i className="fa-regular fa-bookmark"></i></button>
          </div>
        </section>
        <h1>Strawberry Creams Cheesecake</h1>
        <div className="comment">
          <img id="profil" height="10%" src="./images/breakfast.webp" alt="" />
          <p>Tricia Albert</p>
          <div className="favorite-and-date">
            <div className="null">
              <i className="fas fa-calendar"></i>
              <p>yesterday</p>
            </div>
            <div className="null">
              <i className="fa-regular fa-message"></i>
              <p>456</p>H
            </div>
          </div>
          <div className="star-row">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <br />
        <div className="all-video">
          <p className="texte">
            One thing learned living in the Canarsie section of Brooklyn, NY was how
            to cook a good Italian meal. <br />
            Here is a recipe I created after having this dish in a restaurant .
            Enjoy!
          </p>
        </div>
        < Video />
        <Comment />
        <Ingredient />
      </div>
    </>
  )
}

export default Details