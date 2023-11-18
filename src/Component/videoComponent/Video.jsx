import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Video = () => {
  const params = useParams();
  const [videoId, setVideoId] = React.useState("");
  console.log(params.id);

  const hello = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const { data } = useQuery({
    queryKey: ["reci"],
    queryFn: async () => {
      return await Axios.get(hello).then((response) => response.data);
    },
  });

  const getVideoId = (meals) => {
    const meal = meals.find((meal) => meal.idMeal === params.id);

    return meal ? meal.strYoutube.split("v=").pop() : "";
  };

  React.useEffect(() => {
    if (data) {
      const url = getVideoId(data?.meals || []);

      setVideoId(url)
    }
  }, [data]);

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
