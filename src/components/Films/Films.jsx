import { useContext } from "react";
import Card from "../Card/Card";
import GlobalContext from "../../contex/GlobalContex";


export default function Films() {

    const { films } = useContext(GlobalContext)


    return (
        <>
            {films.length ?
                films.map(film => (
                    <div className="col_2" key={film.id}>
                        <Card content={film} />
                    </div>
                ))
                :
                <div>Non ci sono film che corrispondono</div>
            }
        </>


    )
}