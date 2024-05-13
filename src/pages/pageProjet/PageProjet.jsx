import { useParams } from "react-router-dom";


export default function PageProjet () {
    const { id } = useParams();


    return (
    <>
    <h1>hello from {id} {id.name}</h1>
    </>
    )
}