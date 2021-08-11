export default function Encuesta({ encuesta }){
    return(
        <li key={encuesta.id}>
            <span>{encuesta.titulo}: {encuesta.descripcion}</span>  
        </li>
    )
}