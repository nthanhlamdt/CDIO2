// eslint-disable-next-line react/prop-types
function Checkbox({ selectGender, getGender }) {
  return (
    <div className="flex left">
      <div className="form-control selected">
        <label className="label cursor-pointer selected">
          <span className="label-text mr-2">Male</span>
          <input
            type="checkbox"
            className="checkbox" 
            checked={getGender === "Male"}
            onChange={() => selectGender("Male")}
            />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-2">Female</span>
          <input
            type="checkbox"
            className="checkbox" 
            checked={getGender === "Female"}
            onChange={() => selectGender("Female")}
            />
        </label>
      </div>
    </div>
  )
}

export default Checkbox
