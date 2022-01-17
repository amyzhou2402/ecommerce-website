import Button from "../Button";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
    // Current search is the exact value of the text inside the search bar every time onInput is called
    const [currentSearch, setCurrentSearch] = useState("");
    const searchContext = useContext(SearchContext);

    console.log("Input:", currentSearch);

    return (
        <div>
            <input
                type="text"
                value={currentSearch}
                onInput={(e) => setCurrentSearch(e.target.value)}
            ></input>
            <Button
                label="Search"
                clickHandler={() => {
                    searchContext.setSearchTerm(currentSearch);
                    setCurrentSearch("");
                }}
            ></Button>
        </div>
    );
};

// when we type something into search bar
// Will take the current search term
// Add it to a list of previous searches
// Will say "searching... whatever" in the console

export default SearchBar;

// Next week we will cover:

// useEffect
// controlling behaviour for on mount and on unmount of components
// mounting is when a component is created, unmounting is when it is removed

// routing
// Routing allows us to create an imitation of visiting mulitple pages
// in an SPA (single page application)

// Firestore
// Firestore is a feature of the google Firebase platform
// Which is a cloud framework used for rapid application development
// Firestore is a non-sql database which we will use for our
// ecommerce website project over the holidays!

// useContext
// useContext allows us to set and use state that exists
// Across our entire application, in conjunction with individual states

// Secret google books hint:
// use useState for the result of your API calls ;)
