import './CardFilme.css'

export default function CardFilme(props) {

    return (
        <div className='CardFilme'>
            <img src={props.filme.poster} alt="Poster do filme" />
            <h3>{props.filme.titulo}</h3>
            <span>{props.filme.nota}</span>
        </div>

    )

}

//{} é utilizado para chamar códigos javascript dentro do jsx