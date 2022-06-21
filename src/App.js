import React from 'react';
import "./App.css";
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './screens/ItemsListContainer/Components/ItemListContainer'
import {ItemList} from './screens/ItemsListContainer/Components/ItemList'

function App () {
  return (
    <>
    <NavBar/>
    <ItemListContainer titulo="titulo"/>
    <ItemList/>
    </>
  );
}

export default App;