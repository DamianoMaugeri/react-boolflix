

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
            default: url = 'https://flagcdn.com/h20/gb.png';
                break

        }
        return url
    }




    return (


        <div>
            <div>{title}</div>
            <div>{original_title}</div>
            <img src={getFlagUrl(original_language)} alt="" />
            <div>{vote_average}</div>
        </div>


    )
}