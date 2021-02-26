import React, {Fragment, useState, useEffect} from "react";
import Header from  './Components/Header';
import Formulario from  './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';


function App() {
  //Definir categorias y Noticias 
  const [categorias, guardarCategorias] = useState('');
  const [noticias, guardarNoticias] = useState ([]);

  useEffect (() =>{
    const consultarAPI = async () => {
      const url = `https://api.jornalia.net/api/v1/articles?apiKey=dd05e8b876864beeb55b0d18df031a8b&categories=${categorias}`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias (noticias.articles);
    }
    consultarAPI ();
  }, [categorias])

  return (
    <Fragment>
      <Header
      titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario
        guardarCategorias={guardarCategorias}
        />
        <ListadoNoticias
        noticias={noticias}
      />
      </div>
      

    </Fragment>

    
  );
}

export default App;
