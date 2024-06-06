// import Select from "react-select";
import React from "react";
import Select from "react-select";

function SelectBox({ title, data, dispatch, value, label }) {
  let optionArray = [];
  data.forEach((el) => optionArray.push({ value: el.name, label: el.name }));
  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: "red",
      padding: "5px",
      borderRadius: "7px",
      backgroundColor: "base-100",
      "&:focus": { outline: "red" },
      "&:hover": { borderColor: "red" },
    }),
  };

  return (
    <div className="flex flex-col space-y-3">
      <label className="text-lg font-medium w-full max-w-xs">{label}</label>
      {/* <select
        className="select select-secondary w-full max-w-xs"
        value={value}
        onChange={(e) => dispatch({ type: title, payload: e.target.value })}
      >
        {data.map((el, i) => {
          return <option key={i}>{el.name}</option>;
        })}
      </select> */}
      <Select
        styles={customStyles}
        className="w-full max-w-xs redBorder"
        id="name"
        placeholder={`Enter ${label}`}
        // value={value}
        // onChange={(e) => dispatch({ type: title, payload: e.target.value })}
        onChange={(selectedOption) =>
          dispatch({ type: title, payload: selectedOption?.value })
        }
        name="name"
        options={optionArray}
      />
    </div>
  );
}

export default SelectBox;
