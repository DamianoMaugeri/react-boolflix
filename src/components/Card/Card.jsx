
import placeholder_Flag from '../../assets/placeholder_Flag.webp'
import { IMG_BASE_URI } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import placeHolderFilm from '../../assets/placeHolderFilm.jpg'
import style from './Card.module.css'



export default function Card({ content }) {

    console.log(content)
    const { title, original_title, original_language, vote_average, poster_path, overview } = content

    function getFlagUrl(original_language) {
        let url
        switch (original_language) {
            case 'en': url = 'https://flagcdn.com/h20/gb.png';
                break;
            case 'it': url = 'https://flagcdn.com/h20/it.png';
                break;
            case 'fr': url = 'https://flagcdn.com/h20/fr.png';
                break;
            case 'es': url = 'https://flagcdn.com/h20/es.png';
                break;
            case 'ja': url = 'https://flagcdn.com/h20/jp.png';
                break;
            default: url = placeholder_Flag;
                break

        }
        return url
    }


    const formattedVote = Math.ceil(vote_average / 2)


    const StarVote = []

    for (let index = 0; index < 5; index++) {

        if (index < formattedVote) {
            StarVote.push(<FontAwesomeIcon icon={faStar} />)
        } else {
            StarVote.push(<FontAwesomeIcon icon={faStarRegular} />)
        }

    }





    return (


        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.img} src={poster_path !== null ? `${IMG_BASE_URI}w342${poster_path}` : placeHolderFilm} alt="" />
            </figure>
            <div className={style.body}>
                <h3>{title}</h3>
                <div className={style.description}>{overview}</div>


                <div className={style.language}>
                    <span>Lingua:</span>
                    <img className={style.languageImg} src={getFlagUrl(original_language)} alt="" />
                </div>

                <ul className={style.vote}>
                    {StarVote.map((star, i) => (
                        <li key={i}>{star}</li>
                    ))}
                </ul>

            </div>


        </div>


    )
}