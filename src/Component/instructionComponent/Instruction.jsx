import React from 'react'
import { useQuery } from "react-query";
import Axios from 'axios';
import { useParams } from "react-router-dom";



const Instruction = () => {
  const hello = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const { data } = useQuery({
    queryKey: ["reci"],
    queryFn: async () => {
      return await Axios.get(hello).then((response) => response.data);
    },
  });
  const params = useParams();

  console.log(data);
  return (
    <>
      <div className="instru">
        <h2 className="intrus">Instructions</h2>
        {data ? (
          <>
            {data.meals.map((instruct) => {
              if (params.id == instruct.idMeal) {
                return (
                  <div className="intru">
                    <p className="circle">1</p>
                    <p> {instruct.strInstructions} </p>
                  </div>
                );
              }
            })}
          </>
        ) : (
          <div> No Data</div>
        )}
      </div>
    </>
  )
}
export default Instruction