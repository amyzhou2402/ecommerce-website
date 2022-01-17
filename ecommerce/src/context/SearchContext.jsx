import { useState, createContext } from "react";

// Export a context that we can use in our other components
export const SearchContext = createContext();

// This component will contain our other components
// Only components that are children of this can access it's context
const SearchProvider = ({ children }) => {
    // Set up a state to store our data
    const [searchTerm, setSearchTerm] = useState("");

    console.log("THIS IS INSIDE THE CONTEXT", searchTerm);

    // Reformat that state so it is a single object that
    // can be passed around
    const data = { searchTerm, setSearchTerm };

    // return a search context provider that stores our data for us
    // and puts all of the children back inside of itself
    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;
