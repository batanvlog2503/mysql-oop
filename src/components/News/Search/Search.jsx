import React from "react"
import "./Search.css"
function Search({ search, setSearch }) {
  return (
    <div className="container search">
      <div className="row inner-search">
        <div className="inner-wrap-search col-xl-8 col-lg-8 col-sm-12 col-12">
          <form
            className="form-search"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="search-box">
              <input
                className="form-control"
                type="search"
                placeholder="Search Blog..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
