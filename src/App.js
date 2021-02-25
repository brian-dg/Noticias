import React, {Fragment} from "react";
import Header from  './Components/Header';
import Formulario from  './Components/Formulario';

function App() {
  return (
    <Fragment>
      <Header
      titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario/>
      </div>
    </Fragment>
  );
}

export default App;
