import { useReducer } from "react";
import Input from "./Input";
import { countries } from "./countryData";
import { useRouter } from "next/router";
import SelectBox from "./Select";

const initialState = {
  destination: "",
  from: "",
  to: "",
  members: "",
  budget: "0",
  error: "",
};

function Tours() {
  const router = useRouter();
  function reducer(state, action) {
    switch (action.type) {
      case "Submit":
        if (
          state.destination === "" ||
          state.from === "" ||
          state.to === "" ||
          state.members === "" ||
          state.budget === "0"
        ) {
          return { ...state, error: "*Please fill all the field." };
        }
        return { ...state, error: "" };
      case "Select destination":
        return { ...state, destination: action.payload };
      case "from":
        return { ...state, from: action.payload };
      case "to":
        return { ...state, to: action.payload };
      case "members":
        return { ...state, members: action.payload };
      case "range":
        return { ...state, budget: action.payload };
      default:
        return state;
    }
  }
  const [{ destination, from, to, members, budget, error }, dispatch] =
    useReducer(reducer, initialState);
  var formData = { destination, from, to, members, budget };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/routes/tours", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("failed uploading data");
    }
    // console.log(formData);
  }
  return (
    <div className="sm:px-12 sm:py-16 px-4 py-6">
      <form className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-5">
          <SelectBox
            title="Select destination"
            data={countries}
            label="Destination"
            value={destination}
            dispatch={dispatch}
          />

          <Input
            placeholder="Enter the date"
            type="date"
            title="from"
            label="From"
            value={from}
            dispatch={dispatch}
          />
          <Input
            placeholder="Enter the date"
            type="date"
            title="to"
            label="To"
            value={to}
            dispatch={dispatch}
          />
          <Input
            placeholder="Members"
            type="text"
            label="Members"
            title="members"
            value={members}
            dispatch={dispatch}
          />
        </div>
        <div>
          <Input
            type="range"
            label="Budget"
            value={budget}
            dispatch={dispatch}
          />
        </div>
        <div className="text-sm text-secondary">{error}</div>
        <button
          className="btn btn-secondary text-white w-fit self-end"
          onClick={(e) => {
            handleSubmit(e);
            router.push("https://wa.me/919672040456");
            dispatch({ type: "Submit" });
          }}
        >
          Book now
        </button>
      </form>
    </div>
  );
}

export default Tours;
