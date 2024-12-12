
import placeholder_Flag from '../../assets/placeholder_Flag.webp'
import { IMG_BASE_URI } from '../../config';

export default function Card({ content }) {

    console.log(content)
    const { title, original_title, original_language, vote_average, poster_path } = content

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




    return (


        <div>
            <div>
                <img src={`${IMG_BASE_URI}w342${poster_path}`} alt="" />
            </div>
            <div>{title}</div>
            <div>{original_title}</div>
            <div>
                <img src={getFlagUrl(original_language)} alt="" />
            </div>
            <div>{formattedVote}</div>
        </div>


    )
}