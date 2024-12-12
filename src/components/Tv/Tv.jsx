import { useContext } from "react";
import Card from "../Card/Card";
import GlobalContext from "../../contex/GlobalContex";



export default function Tv() {

    const { tvs } = useContext(GlobalContext)
    console.log(tvs)

    return (

        <section>
            <h2>Serie TV</h2>

            {tvs.length ?
                <ul>
                    {tvs.map(tv => (
                        <li key={tv.id}>
                            <Card content={tv} />
                        </li>
                    ))}

                </ul> :
                <div>Non ci sono  serie tv che corrispondono</div>
            }
        </section>

    )
}