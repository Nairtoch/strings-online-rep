import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"

const Search = () => {
    const [ keyword, setKeyword ] = useState('')
    const { register, handleSubmit } = useForm();

    const getSearchResult = data => {
        setKeyword(data.keyword);
    }

    return(
        <>
            <form onSubmit={handleSubmit(getSearchResult)}>
                <fieldset>
                    <label htmlFor="keyword">Search word:</label>
                    <input type="text" id="keyword" {...register("keyword", { required: true })} />
                    <button>Search</button>
                </fieldset>
            </form>
            {/* If keyword is true then it'll find a result */}
            {keyword && [
                <SearchResult keyword={keyword} />
            ]}
        </>
    )
}

const SearchResult = props => {
    const [ searchData, setSearchData ] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`https://api.mediehuset.net/stringsonline/search/${props.keyword}`)
            setSearchData(result.data)
        }
        getData();
    }, [props.keyword, setSearchData])

    return(
        <>
            <p>Found {searchData.num_items} items under <i>{props.keyword}</i></p>
            {searchData.items && searchData.items.map(item => {
                return(
                    <div key={item.id}>{item.id}. {item.name}</div>
                )
            })}
        </>
    )
}

export { Search, SearchResult }