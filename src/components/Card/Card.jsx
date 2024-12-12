




export default function Card({ content }) {

    console.log(content)
    const { title, original_title, original_language, vote_average, poster_path } = content

    function getFlagUrl(original_language) {
        let url
        switch (original_language) {
            case 'en': url = ''
        }

    }




    return (


        <div>
            <div>{title}</div>
            <div>{original_title}</div>
            <div>{original_language}</div>
            <div>{vote_average}</div>
        </div>


    )
}