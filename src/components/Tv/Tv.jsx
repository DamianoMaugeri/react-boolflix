import { useContext } from "react";
import Card from "../Card/Card";
import GlobalContext from "../../contex/GlobalContex";



export default function Tv() {

    const { tvs } = useContext(GlobalContext)
    console.log(tvs)

    return (
        <>
            {tvs.length ?
                tvs.map(tv => (
                    <div className="col_2" key={tv.id}>
                        <Card content={tv} />
                    </div>
                ))

                :
                <div>Non ci sono  serie tv che corrispondono</div>
            }

        </>

    )
}