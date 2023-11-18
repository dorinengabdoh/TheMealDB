import React from 'react';
import { useQuery } from "react-query";
import Axios from 'axios';

const Second = () => {
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
    <section className="section3">
      <h1 className='none'>Popular Categories</h1>
      <div className="sect3">
        {data ?(
          <>
          {data.categories.map((cat) =>(
            <div className="pasta">
            <img  src={cat.strCategoryThumb} id="img" alt="" />
            <span>{cat.strCategory}</span>
            </div>
          ))}
          </>
        ) : (
          <div> No Data</div>
        )} 
      </div>
    </section>
    </>
  )
}

export default Second