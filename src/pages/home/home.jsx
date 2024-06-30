import React, { useState, useEffect } from 'react';
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=98d6141f4dbab3dddc4a6022c557773c")
            .then(res => res.json())
            .then(data => {
                console.log('Home API Data:', data);
                setPopularMovies(data.results);
            })
            .catch(error => console.error('Error fetching popular movies:', error));
    }, []);

    return (
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                transitionTime={300}
                infiniteLoop={true}
                showStatus={false}
            >
                {popularMovies && popularMovies.length > 0 ? (
                    popularMovies.map(movie => (
                        <Link key={movie.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                            <div className='posterImage'>
                                {movie.backdrop_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                        alt={movie.original_title}
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'default-image-path.jpg'; }}
                                    />
                                ) : (
                                    <img
                                        src='default-image-path.jpg'
                                        alt='Default'
                                    />
                                )}
                            </div>
                            <div className='posterImage_overlay'>
                                <div className='posterImage_title'>{movie.original_title}</div>
                                <div className='posterImage_runtime'>
                                    {movie.release_date}
                                    <span className='posterImage_rating'>
                                        {movie.vote_average}
                                        <i className='fas fa-star' />{" "}
                                    </span>
                                </div>
                                <div className='posterImage_description'>{movie.overview}</div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Loading popular movies...</p>
                )}
            </Carousel>
            <MovieList />
        </div>
    );
};

export default Home;
