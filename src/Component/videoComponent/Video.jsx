import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { useParams } from "react-router-dom";

const getVideoId = (meals) => {
  const meal = meals.find((meal) => meal.idMeal === params.id);
  return meal ? meal.strYoutube.split("v=").pop() : "";
};

const Video = () => {
  const params = useParams();
  console.log(params.id);

  const hello = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const { data } = useQuery({
    queryKey: ["reci"],
    queryFn: async () => {
      return await Axios.get(hello).then((response) => response.data);
    },
  });

  const videoId = React.useMemo(() => getVideoId(data?.meals??[]), [data])

  return (
    <div class="video">
      <iframe
        width="100%"
        height="710px"
        className="videos-food"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </div>
  );
};

export default Video;
