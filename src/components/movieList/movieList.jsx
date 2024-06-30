import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import './movieList.css';
import { useParams } from 'react-router-dom';

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=98d6141f4dbab3dddc4a6022c557773c`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
            .catch(error => console.error('Error fetching popular movies:', error));
    };

    return (
        <div className='movie_list'>
            <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className='list_cards'>
                {
                    movieList.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;
