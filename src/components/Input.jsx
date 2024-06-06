function Input({ placeholder, type, title, dispatch, value, label }) {
  if (type === "range")
    return (
      <div className="flex flex-col space-y-3">
        <label className="text-lg font-medium w-full max-w-xs">{label}</label>
        <input
          type="range"
          min={0}
          max="100"
          value={value}
          className="range range-secondary w-full max-w-xs"
          onChange={(e) => dispatch({ type, payload: e.target.value })}
        />

        <div className="w-full max-w-xs flex justify-between text-xs px-2">
          <span>0</span>
          <span>25k</span>
          <span>50k</span>
          <span>75k</span>
          <span>100k</span>
        </div>
      </div>
    );
  if (type === "tel")
    return (
      <>
        <label className="text-lg font-medium w-full max-w-xs">{label}</label>
        <input
          type="tel"
          name="phone"
          placeholder={placeholder}
          onChange={(e) => dispatch({ type, payload: e.target.value })}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="input input-bordered input-secondary w-full max-w-xs"
          required
        />
      </>
    );

  return (
    <div className="flex flex-col space-y-3">
      <label className="text-lg font-medium w-full max-w-xs">{label}</label>
      <input
        type={type}
        name={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={(e) => dispatch({ type: title, payload: e.target.value })}
        className="input input-bordered input-secondary w-full max-w-xs"
        required
      />
    </div>
  );
}

export default Input;
