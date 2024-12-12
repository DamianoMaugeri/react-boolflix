import { useContext } from "react";
import Card from "../Card/Card";
import GlobalContext from "../../contex/GlobalContex";


export default function Films() {

    const { films } = useContext(GlobalContext)


    return (
        <section>
            <h2>film</h2>
            {films.length ?
                <ul>
                    {films.map(film => (
                        <li key={film.id}>
                            <Card content={film} />
                        </li>
                    ))}

                </ul> :
                <div>Non ci sono film che corrispondono</div>
            }
        </section>
    )
}