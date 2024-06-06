import { useReducer } from "react";
import Input from "./Input";
import { countries } from "./countryData";
import { useRouter } from "next/router";
import SelectBox from "./Select";

const initialState = {
  date: "",
  destination: "",
  category: "",
  members: "",
  error: "",
};

// Tourist Medical, Study, Business Visa,
const visaData = [
  { id: 0, name: "Tourist visa" },
  { id: 0, name: "Study visa" },
  { id: 0, name: "Business visa" },
  { id: 0, name: "Medical visa" },
];

function Visa() {
  const router = useRouter();
  function reducer(state, action) {
    switch (action.type) {
      case "Submit":
        if (
          state.date === "" ||
          state.destination === "" ||
          state.category === "" ||
          state.members === ""
        ) {
          return { ...state, error: "*Please fill all the field." };
        }
        return { ...state, error: "" };
      case "date":
        return { ...state, date: action.payload };
      case "destination":
        return { ...state, destination: action.payload };
      case "category":
        return { ...state, category: action.payload };
      case "members":
        return { ...state, members: action.payload };
      default:
        return { ...state };
    }
  }
  const [{ date, destination, category, members, error }, dispatch] =
    useReducer(reducer, initialState);
  var formData = { date, destination, category, members };

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/routes/visas", {
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
            title="destination"
            data={countries}
            label="Destination"
            value={destination}
            dispatch={dispatch}
          />
          <SelectBox
            title="category"
            data={visaData}
            label="Visa category"
            value={category}
            dispatch={dispatch}
          />

          <Input
            placeholder="Date of Travel"
            type="date"
            title="date"
            label="Date of Travel"
            value={date}
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

export default Visa;
