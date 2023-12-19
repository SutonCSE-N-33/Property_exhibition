/* eslint-disable react/prop-types */

const SearchFilterSort = ({
  query,
  setQuery,
  setDivisionFilter,
  setPurposeFilter,
  setStatusFilter,
  setTypeFilter,
  setSortOrder,
  resetFiltersAndSorting,
  sortOrder,
}) => {
  return (
    <div className=" ">
      <div className="flex justify-center">
        <div className=" border rounded border-sky-900 mb-5 p-5">
          <div className="mb-3">
            <label htmlFor="searchform">
              <input
                type="search"
                name="searchform"
                id="searchform"
                placeholder="Search for..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="md:w-3/4 px-3 py-3 text-md leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                aria-label="Filter By Purpose"
              ></input>
            </label>
          </div>
          <div className="">
            <div className="grid md:grid-cols-8 gap-3">
              <div className="">
                <select
                  onChange={e => setDivisionFilter(e.target.value)}
                  className="md:w-full px-2 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  aria-label="Filter Property By division"
                >
                  <option value="All">Filter By Division</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Mymensingh">Mymensingh</option>
                </select>
              </div>
              <div className="">
                <select
                  onChange={e => setPurposeFilter(e.target.value)}
                  className="md:w-full px-2 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  aria-label="Filter By Purpose"
                >
                  <option value="All">Filter By Purpose</option>
                  <option value="Buy">Buy</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              <div className="">
                <select
                  onChange={e => setStatusFilter(e.target.value)}
                  className="md:w-full px-2 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  aria-label="Filter By Status"
                >
                  <option value="All">Filter By Status</option>
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>
              <div className="">
                <select
                  onChange={e => setTypeFilter(e.target.value)}
                  className="w-full px-2 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  aria-label="Filter By Type"
                >
                  <option value="All">Filter By Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                </select>
              </div>
              <div className="">
                <select
                  id="sort-order"
                  onChange={e => setSortOrder(e.target.value)}
                  value={sortOrder}
                  className="md:w-full px-2 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                >
                  <label htmlFor="sort-order">Sort by:</label>
                  <option value="">Soting</option>
                  <option value="asc">A-Z</option>
                  <option value="desc">Z-A</option>
                  <option value="minArea">Min Area</option>
                  <option value="maxArea">Max Area</option>
                  <option value="minPrice">Min Price</option>
                  <option value="maxPrice">Max Price</option>
                </select>
              </div>
              <div>
                <button
                  onClick={resetFiltersAndSorting}
                  className="md:w-full px-2 py-3  text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterSort;
