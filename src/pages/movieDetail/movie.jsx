import React, { useEffect, useState } from 'react'
import './movie.css'
import { useParams } from 'react-router-dom'

const Movie = () => {
    const [currentMovieDetail, setCurrentMovieDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [id])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=98d6141f4dbab3dddc4a6022c557773c`)
            .then(res => res.json())
            .then(data => setCurrentMovieDetail(data))
            .catch(error => console.error('Error fetching movie details:', error))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt={currentMovieDetail ? currentMovieDetail.original_title : "Backdrop"} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt={currentMovieDetail ? currentMovieDetail.original_title : "Poster"} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? `(${currentMovieDetail.vote_count} votes)` : ""}</span>
                        </div>
                        <div className="movie__runtime">{currentMovieDetail ? `${currentMovieDetail.runtime} mins` : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? `Release date: ${currentMovieDetail.release_date}` : ""}</div>
                        <div className="movie__genres">
                            {currentMovieDetail && currentMovieDetail.genres && currentMovieDetail.genres.map(genre => (
                                <span key={genre.id} className="movie__genre" id={genre.id}>{genre.name}</span>
                            ))}
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {currentMovieDetail && currentMovieDetail.imdb_id && <a href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb <i className="newTab fas fa-external-link-alt"></i></span></p></a>}
            </div>
        </div>
    )
}

export default Movie
