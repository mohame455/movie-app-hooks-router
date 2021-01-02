import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import { moviesList } from './assets/Data';
import AddMovie from './Components/AddMovie';
import { BrowserRouter, Route } from 'react-router-dom';
import Description from './Components/Description';


function App() {
  const [movieList, setMovieList] = useState(moviesList)
  const addMovie=(title,posterUrl,description,rate)=>{
    setMovieList([...movieList,{title:title,posterUrl:posterUrl,description:description,rate:rate}])
  }
  return (
    <div className='container-fluid'>
      <BrowserRouter>
      <Route exact path='/' render={()=><MovieList movieList={movieList}/>}/>
      <Route path='/Description/:title' render={(props)=><Description movieList={moviesList} {...props}/>}/>
      <Route exact path='/' render={()=><AddMovie addMovie={addMovie}/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
