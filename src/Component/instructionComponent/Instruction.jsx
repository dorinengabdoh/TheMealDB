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
      <div class="instru">
        <h2 class="intrus">Instructions</h2>
        <div class="intru">
          {data ? (
            <>
                      {data.categories.map((cat) =>(

              <p class="circle">1</p>
              <p>
              </p>
            </>
          ) : (
            <div> No Data</div>
          )}

        </div>
        <div />
      </>
      )
}

      export default Instruction