import Films from "../Films/Films";
import Tv from "../Tv/Tv";

export default function Main() {
    return (
        <main className="container">
            <h2>FILM</h2>
            <div className="row">
                <Films />
            </div>
            <h2>SERIE TV</h2>
            <div className="row">
                <Tv />
            </div>


        </main>
    )
}