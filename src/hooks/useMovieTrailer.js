import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideos } from '../utils/movieSlice'
import { useEffect } from 'react'

export const useMovieTrailer = (id) => {
    const dispatch = useDispatch()

  const getMovieVideos = async () => {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?languages=en-US`,options)
  const json = await data.json()

  const AllTrailers = json.results.filter(video => video.type == 'Trailer')
  const trailer = AllTrailers.length ? AllTrailers[0] : json.results[0]
  dispatch(addTrailerVideos(trailer.key))
}

useEffect(()=>{
  getMovieVideos();
},[])

}