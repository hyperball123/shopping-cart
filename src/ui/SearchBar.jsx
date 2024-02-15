function SearchBar() {
  return (
    <div className="p-1 rounded-md overflow-hidden shadow-lg w-96">
      <div className="p-2 rounded-md">
        {/* <label className="block text-center font-bold text-gray-800 mb-4">
          Search for the Products here
        </label> */}
        <div className="flex">
          <div className="min-w-33 min-h-33 flex items-center justify-center rounded-md mr-4  bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657789"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className="w-full relative">
            <input
              className="bg-gray-100 rounded-md px-8 py-4 w-full  transition-colors duration-300 placeholder-gray-500"
              type="text"
              placeholder="Search Products..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
