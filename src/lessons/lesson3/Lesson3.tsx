import React, {useState} from 'react';
import API from './API';
import './lesson_3';

type FilmsType = {
    Title: string,
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [SearchResult, setSearchResult] = useState<FilmsType[]>([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [SearchResultByType, setSearchResultByType] = useState<FilmsType[]>([]);


    const searchFilm = () => {
        API.searchFilmsByTitle(searchName).then(
            (response) => {
                console.log(response)
                setSearchResult(response)

            }
        )
    }

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type).then((response) => {
            console.log(response)
            setSearchResultByType(response)
        })

    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    <ul>
                        {SearchResult.map(i => <li key={i.imdbID}>{i.Title}</li>)}
                    </ul>
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {SearchResultByType.map(i => <p>{i.Title + " " + i.Type}</p>)}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;