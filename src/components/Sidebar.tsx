import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Products {
  category: string;
}

interface FetchResponse {
  products: Products[];
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirts",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const unique = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(unique);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };
  const handleRadioChangeCategories = (category: string) => {
    setSelectedCategory(category);
  };
  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-full sm:w-64 p-5 sm:h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React store</h1>

      <section>
        <input
          type="text"
          className="border-2 rounded px-2 w-full"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row justify-center mt-3 items-center gap-2">
          <input
            type="text"
            className="border-2 px-5 py-3 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className="border-2 px-5 py-3 w-full"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/* categories section */}
        <div className="mb-5 mt-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
          <section>
            {categories.map((category, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio"
                  name="category"
                  className="mr-2 w-[16px] h-[16px]"
                  value={category}
                  onChange={() => handleRadioChangeCategories(category)}
                  checked={selectedCategory === category}
                />
                {category.toUpperCase()}
              </label>
            ))}
          </section>
        </div>

        {/* keywords section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
          <div>
            {keywords.map((keyword, index) => (
              <label
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="block mb-1 px-4 py-2 w-full text-left rounded hover:bg-gray-200 cursor-pointer"
              >
                {keyword.toUpperCase()}
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleResetFilters}
          className="w-full mb-[3rem] py-2 bg-black text-white rounded mt-3"
        >
          Reset filters
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
