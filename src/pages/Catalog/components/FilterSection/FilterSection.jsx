import React from "react";
import './FilterSection.css';
import Dropdown from "../../../../components/Dropdown";
import SearchBar from "../../../../components/SearchBar";
import selectedValue1 from '../../Catalog'
import selectedValue2 from '../../Catalog'

const FilterSection = ({ setSelectedValue1, setSelectedValue2, value, setValue }) => {
  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  
  const handleSelectChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };

  return (
    <div className="filter__section">

      <div style={{ display: "flex" }}>
        <Dropdown
          value={selectedValue1}
          onChange={handleSelectChange1}
          controlId="yourSelectControl1"
          label="Max speed"
          selectItems={[
            { value: "option1", title: "> 400" },
            { value: "option2", title: "< 400" }
          ]}
          required={true}
        />
        <Dropdown
          value={selectedValue2}
          onChange={handleSelectChange2}
          controlId="yourSelectControl2"
          label="Passengers"
          selectItems={[
            { value: "option1", title: "> 20" },
            { value: "option2", title: "< 20" }
          ]}
          required={true}
        />
      </div>

      <SearchBar value={value} setValue={setValue} />

    </div>
  );
};

export default FilterSection;

