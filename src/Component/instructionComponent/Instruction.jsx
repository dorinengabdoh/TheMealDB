import React from 'react'
import { useQuery } from "react-query";
import Axios from 'axios';



const Instruction = () => {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { data } = useQuery({
    queryKey: ["anyyy"],
    queryFn: async () => {
      return await Axios.get(API_URL).then((res) => res.data);
    },
  });
  console.log(data);
  return (
      <>
      <div className="instru">
        <h2 className="intrus">Instructions</h2>
        {data ? (
          <>
            {data.meals.map((instruct) => (
              <div className="intru">
                <p className="circle">1</p>
                <p> {instruct.strInstructions} </p>
              </div>
            ))}

          </>
        ) : (
          <div> No Data</div>
        )}
        </div>
      </>
      )
}

  export default Instruction