import {useState, useEffect, useRef} from 'react';
import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


function MovieList({ title, movies }) {

    const scrollRef = useRef()
    const [showArrows, setShowArrows] = useState(false);

    useEffect(() => {
        if (scrollRef.current) {
            setShowArrows(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
        }
  }, [movies]);

    const slideLeft = () => {
        if(scrollRef.current){
            scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' })
        }
    };

    const slideRight = () => {
        if(scrollRef.current){
            scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' })
        }
    };

    return (
        <div className='px-3'>
            <h1 className='text-3xl font-bold py-3 text-white'>{title}</h1>
            <div className='relative flex items-center'>
                {showArrows && <MdChevronLeft 
                    size={40} 
                    className='absolute left-0 z-10 cursor-pointer bg-gray-100 rounded-full p-1 opacity-75 hover:opacity-100 transition-transform duration-200' 
                    onClick={slideLeft} 
                />}
                <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hidden scroll-smooth whitespace-nowrap space-x-4 px-10">
                        {movies?.filter((movie) => movie.poster_path).map(movie => (
                            <div key={movie.id} className="min-w-[200px]">
                                <MovieCard  posterPath={movie.poster_path} />
                            </div>
                            ))}
                </div>
                
                {showArrows && <MdChevronRight 
                    size={40} 
                    className='absolute right-0 z-10 cursor-pointer bg-gray-300 rounded-full p-1 opacity-75 hover:opacity-100 transition-transform duration-200' 
                    onClick={slideRight} 
                />}
            </div>
        </div>
    );
}

export default MovieList;

