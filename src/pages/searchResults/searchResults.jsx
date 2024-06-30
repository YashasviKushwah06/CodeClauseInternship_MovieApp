import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/card/card'

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([])
    const { query } = useParams()

    useEffect(() => {
        fetchSearchResults()
    }, [query])

    const fetchSearchResults = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=98d6141f4dbab3dddc4a6022c557773c&query=${query}`)
            .then(res => res.json())
            .then(data => setSearchResults(data.results))
            .catch(error => console.error('Error fetching search results:', error))
    }

    return (
        <div className='search_results'>
            <h2 className='results_title'>Search Results for: {query}</h2>
            <div className='results_cards'>
                {
                    searchResults.map(movie => (
                        <Card key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default SearchResults
