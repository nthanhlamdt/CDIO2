import { useState } from "react"
import FormUpdateInformation from "./FormUpdateInformation"
import Information from "./Information"

// eslint-disable-next-line react/prop-types
function Model({ lastName, firstName, gender, profilePic, dateOfBirth, email, phoneNumber }) {
  const [statusModel, setStatusModel] = useState("information")
  const handleChangeModel = (updateForm) => {
    setStatusModel(updateForm)
  }
  return (
    <dialog id="my_modal_3"
      className="modal flex items-center justify-center w-full h-full">

      <div className='modal-box max-w-96'>
        {statusModel === "formUpdateInformation" ?
          <FormUpdateInformation
            handleChangeModel={handleChangeModel}
            setStatusModel={setStatusModel}
          /> :
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
        }

      </div>
    </dialog>
  )
}

export default Model
