import React from "react";
import Noticia from './Notica';

const ListadoNoticias = ({noticias}) =>( 
    <div className="row">
        {noticias.map(noticia=>(
            <Noticia
            key={noticia.url}
            noticia={noticia}
            />
        ))}
    </div>
)

export default ListadoNoticias;