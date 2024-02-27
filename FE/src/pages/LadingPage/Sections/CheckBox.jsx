import React from "react";

const CheckBox = ({ continents, checkedContinents, onFilters }) => {
  const handleToggle = (continentId) => {
    // currentCheckBox가 이미 누른 Check인지 체크
    const currentIndex = checkedContinents.indexOf(continentId);
    const newChecked = [...checkedContinents]; // 불변성 유지

    if (currentIndex === -1) {
      newChecked.push(continentId);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    onFilters(newChecked);
  };
  return (
    <div className="pl-14 my-8">
      <p className="px-3 pt-3 font-bold text-xl">CATEGORY</p>
      <hr className="w-10/12 my-4" />
      {continents?.map((continent) => (
        <div key={continent._id}>
          <input
            type="checkbox"
            onChange={() => handleToggle(continent._id)}
            checked={
              checkedContinents.indexOf(continent._id) === -1 ? false : true
            }
          />{" "}
          <label>{continent.name}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
