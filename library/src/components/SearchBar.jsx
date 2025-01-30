import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="d-flex justify-content-center gap-2 my-4">
            <input type="text" placeholder="Search for books..." value={query} onChange={(e) => setQuery(e.target.value)} className="p-2 border border-warning rounded-lg w-1/2" />
            <button onClick={handleSearch} className="btn btn-outline-warning">Search</button>
        </div>
    );
};

export default SearchBar;
