import { useReducer } from "react";
import Input from "./Input";
import { countries } from "./countryData";
import { useRouter } from "next/router";
import SelectBox from "./Select";
const initialState = {
  from: "",
  date: "",
  to: "",
  members: "",
  error: "",
};

function Flights() {
  const router = useRouter();
  function reducer(state, action) {
    switch (action.type) {
      case "Submit":
        if (
          state.date === "" ||
          state.from === "" ||
          state.to === "" ||
          state.members === ""
        ) {
          return { ...state, error: "*Please fill all the field." };
        }
        return { ...state, error: "" };
      case "From":
        return { ...state, from: action.payload };
      case "date":
        return { ...state, date: action.payload };
      case "To":
        return { ...state, to: action.payload };
      case "members":
        return { ...state, members: action.payload };
      case "trip":
        return { ...state, trip: action.payload };
      default:
        return state;
    }
  }
  const [{ from, date, to, members, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  var formData = { date, from, to, members };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/routes/flights", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("failed uploading data");
    }
    console.log(formData);
  }
  return (
    <div className="sm:px-12 sm:py-16 px-4 py-6">
      <form className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-5">
          <SelectBox
            title="From"
            data={countries}
            label="From"
            value={from}
            dispatch={dispatch}
          />

          <Input
            placeholder="Enter the date"
            title="date"
            type="date"
            label="Date"
            value={date}
            dispatch={dispatch}
          />
          <SelectBox
            title="To"
            data={countries}
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

export default Flights;
