import React from 'react'

const Recipe = () => {
  const hello = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const { data } = useQuery({
    queryKey: ["reci"],
    queryFn: async () => {
      return await Axios.get(hello).then((response) => response.data);
    },
  });
  return (
    <div>Recipe</div>
  )
}

export default Recipe