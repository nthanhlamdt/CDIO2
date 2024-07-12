import { useState } from "react"
import FormUpdateInformation from "./FormUpdateInformation"
import Information from "./Information"

// eslint-disable-next-line react/prop-types
function Model({ lastName, firstName, gender, profilePic, dateOfBirth, email, phoneNumber }) {
  const [statusModel, setStatusModel] = useState("information")
  const handleChangeModel = () => {
    setStatusModel("formUpdateInformation")
  }
  return (
    <dialog id="my_modal_3"
      className="modal flex items-center justify-center w-full h-full">
      <div className={
        `modal-box max-w-96
        ${statusModel === "formUpdateInformation" ? "opacity-0 w-0" : null}
        `}>
        <Information
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          profilePic={profilePic}
          dateOfBirth={dateOfBirth}
          email={email}
          phoneNumber={phoneNumber}
          handleChangeModel={handleChangeModel}
        />
      </div>

      <div className={
        `modal-box max-w-96
        ${statusModel === "information" ? "opacity-0 w-0" : null}
        `}>
        <FormUpdateInformation />
      </div>
    </dialog>
  )
}

export default Model
