import { useLoaderData } from "react-router-dom"


export default function ProjectPage () {
    const data = useLoaderData('/public/data/projects.json');
    console.log(data)

    return (
        <>
        <p>Projet formation {data}</p>
        </>
    )
}