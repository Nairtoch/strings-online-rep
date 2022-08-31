// no {} around the thing you import means it's a default import
import axios from "axios";
// {} around the thing you import means it's a "named import"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

// Function component
const Search = () => {
    // Defines values for our useState hook
    const [ keyword, setKeyword ] = useState('')
    // Defines values for our useForm hook
    const { register, handleSubmit } = useForm();

    // Another function component with parameters (data)
    const getSearchResult = data => {
        setKeyword(data.keyword);
    }

    // We return a form
    return(
        // <> is not a mistake, it's a react fragment
        <>
            {/* A function that takes another function as an argument */}
            <form onSubmit={handleSubmit(getSearchResult)}>
                {/* It is "sermatisk korrekt" to use fieldset or legend around your form, but it's not nessecary for the form to work */}
                <fieldset>
                    {/* A label, wow */}
                    <label htmlFor="keyword">Search word:</label>
                    {/* This is the searchbar, when you type in it it'll register what you typed, the keyword */}
                    <input type="text" id="keyword" {...register("keyword", { required: true })} />
                    <button>Search</button>
                </fieldset>
            </form>
            {/* If keyword is true then it'll find a result */}
            {keyword && (
                <SearchResult keyword={keyword} />
            )}
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