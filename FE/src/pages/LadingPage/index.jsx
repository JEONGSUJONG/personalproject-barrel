import React, { useEffect, useState } from "react";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import CardItem from "./Sections/CardItem";
import axiosInstance from "../../utils/axios";
import { IoIosArrowDown } from "react-icons/io";
import { continents, prices } from "../../utils/filterData";
import Switch from "react-switch";
import MainImage from "./Sections/MainImage";
import RecommendCard from "./Sections/RecommendCard";
import BestItem from "./Sections/BestItem";
import SearchInput from "./Sections/SearchInput";

const LandingPage = () => {
  const limit = 4;
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [filters, setFilters] = useState({
    continents: [],
    price: [],
  });

  useEffect(() => {
    fetchProducts({ skip, limit });
  }, []);

  const fetchProducts = async ({
    skip,
    limit,
    loadMore = false,
    filters = {},
    searchTerm = "",
  }) => {
    const params = {
      skip,
      limit,
      filters,
      searchTerm,
    };
    try {
      const response = await axiosInstance.get("/products", { params });
      
      setProducts(
        loadMore
          ? [...products, ...response.data.products]
          : response.data.products
      );

//  if (loadMore) {
//    setProducts([...products, ...response.data.products]);
//  } else {
//    setProducts(response.data.hasMore);
//  }

// 문제는 두 번째 줄에서 setProducts를 호출할 때 발생합니다. 여기서는 잘못된 값이 products에 설정되고 있습니다.

// javascript
// Copy code
// setProducts(response.data.hasMore);
// 여기서 response.data.hasMore는 불리언 값(true 또는 false)입니다. 하지만 products는 일반적으로 상품 목록을 담는 배열이어야 합니다. 그러나 이 코드는 불리언 값을 products에 설정하고 있어서 products가 배열이 아닌 불리언 값이 되는 문제가 발생합니다.

// 따라서 response.data.hasMore를 products에 설정하는 대신에, response.data.products를 products에 추가해야 합니다.

// 이제 두 가지 경우에 대한 상품 목록을 올바르게 처리하도록 수정된 코드는 다음과 같습니다:

// javascript
// Copy code
// setProducts(loadMore ? [...products, ...response.data.products] : response.data.products);
// 여기서 loadMore가 true일 때는 현재 상품 목록에 새로운 상품 목록을 추가하고, loadMore가 false일 때는 새로운 상품 목록으로 바로 설정합니다.

      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadMore = () => {
    const body = {
      skip: skip + limit,
      limit,
      loadMore: true,
      filters,
      searchTerm,
    };
    fetchProducts(body);
    setSkip(skip + limit);
  };

  const handleFilters = (newFilteredData, category) => {
    const newFilters = { ...filters };
    newFilters[category] = newFilteredData;
    if (category === "price") {
      const priceValues = handlePrice(newFilteredData);
      newFilters[category] = priceValues;
    }
    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const handlePrice = (value) => {
    let array = [];

    for (let key in prices) {
      if (prices[key]._id === parseInt(value, 10)) {
        array = prices[key].array;
      }
    }
    return array;
  };

  const showFilteredResults = (filters) => {
    const body = {
      skip: 0,
      limit,
      filters,
      searchTerm,
    };

    fetchProducts(body);
    setSkip(0);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchTerm = (event) => {
    const body = {
      skip: 0,
      limit,
      filters,
      searchTerm: event.target.value,
    };
    setSkip(0);
    setSearchTerm(event.target.value);
    fetchProducts(body);
  };

  return (
    <section>
      <MainImage />
      <div className="text-center text-4xl my-[80px] font-bold">
        BEST ITEM
        <BestItem />
      </div>
      <div className="text-center text-4xl my-[80px] font-bold">NEW ITEM</div>
      <div className="flex flex-wrap justify-center">
        <RecommendCard />
      </div>

      <div className="w-3/4 mx-auto mb-24">
        <div className="text-center text-4xl my-[80px] font-bold">
          WELCOME TO BARREL
        </div>
        <div>
          <div className="flex justify-end mb-2">
            <Switch
              onChange={toggleFilter}
              checked={isOpen}
              offColor="#6B7280"
              onColor="#06b6d4"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          {isOpen && (
            <div className="flex gap-2">
              <div className="w-1/2">
                <CheckBox
                  continents={continents}
                  checkedContinents={filters.continents}
                  onFilters={(filters) => handleFilters(filters, "continents")}
                />
              </div>
              <div className="w-1/2">
                <RadioBox
                  prices={prices}
                  checkedPrice={filters.price}
                  onFilters={(filters) => handleFilters(filters, "price")}
                />
              </div>
            </div>
          )}
          <div className="flex justify-end mt-10">
            <SearchInput searchTerm={searchTerm} onSearch={handleSearchTerm} />
          </div>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <CardItem product={product} key={product._id} />
          ))}
        </div>

        {/* LoadMore */}
        {hasMore && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleLoadMore}
              className="py-2 border-2 px-12 rounded-md hover:bg-gray-500"
            >
              <IoIosArrowDown />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LandingPage;
