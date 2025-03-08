import { useMovieTrailer } from "../hooks/useMovieTrailer"
import { useSelector } from "react-redux";

function VideoBackground({id}) {

  useMovieTrailer(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
  
  return (
    <div>
      <iframe
      className="w-screen aspect-video"
      src={`https://www.youtube.com/embed/${trailerVideo}?&autoplay=1&mute=1`}
      title="YouTube Video Player"
      allow="accelerometer: autoplay; clipboard-write; encryped-media; gyroscope; picture-in-picture"
      />
    </div>
  )
}

export default VideoBackground