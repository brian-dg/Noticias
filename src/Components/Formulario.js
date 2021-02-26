import React from 'react'
import styles from './Formulario.module.css';
import useSelect from '../Hooks/useSelect';


const Formulario = ({guardarCategorias}) => {
    const OPCIONES = [
        {value: 'ULTIMAS_NOTICIAS', label: 'Ultimas noticias '},
        {value: 'ECONOMIA', label: 'Economia'},
        {value: 'POLITICA', label: 'Politica'},
        {value: 'DEPORTES', label: 'Deportes'},
        {value: 'TECNOLOGIA', label: 'Tecnologia'}
    ]


    //Utilizar custom Hook
    const [categorias, SelectNoticias] = useSelect('ULTIMAS_NOTICIAS', OPCIONES);


    //Submit al form, pasar categorias al app.js

    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategorias(categorias);
    }

    return (
            <div className={`${styles.buscador} row `}>
            
                <div className="col s12 m8 offset-m2">
                    <form 
                    onSubmit={buscarNoticias}
                    >
                    <h2 className={styles.heading}>Encuentra Noticias por categorias</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2 `}
                            value="Buscar"
                            />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario;