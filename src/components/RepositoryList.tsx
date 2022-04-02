import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";


interface Repository{
    name: string;
    description: string;
    html_url: string;
}
export function RepositoryList(){

    const [respositories, setResitories] = useState<Repository[]>([]);
    useEffect(()=>{
        fetch('http://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setResitories(data))
    })

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
        <ul>
            {respositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />
            })}
        </ul>
        </section>
    );
}