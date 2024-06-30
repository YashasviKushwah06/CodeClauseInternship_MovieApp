import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Home from './pages/home/home'
import MovieList from './components/movieList/movieList'
import Movie from './pages/movieDetail/movie'
import SearchResults from './pages/searchResults/searchResults'

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='movie/:id' element={<Movie />}></Route>
        <Route path='movies/:type' element={<MovieList />}></Route>
        <Route path='/' element={<h1>Error Page</h1>}></Route>
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </Router>
  )
}

export default App
