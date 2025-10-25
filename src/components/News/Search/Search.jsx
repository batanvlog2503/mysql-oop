import React from "react";
import "./Search.css"
function Search({search, setSearch}){
    return (
        <div className="container search">
            <div className="row inner-search">
                <div className="inner-wrap-search col-xl-6 col-lg-6 col-sm-12 col-12">
                    <form action="" className = "form-search" onSubmit={(e) => e.preventDefault()}>
                        <input className="form-control" type="search" role="searchbox" placeholder="Search Blog..." value={search} onChange={(e)=>setSearch(e.target.value)} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;