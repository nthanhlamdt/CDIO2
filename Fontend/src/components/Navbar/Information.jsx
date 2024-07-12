
function Information({ lastName, firstName, gender, profilePic, dateOfBirth, email, phoneNumber, handleChangeModel }) {
  return (
    <div>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h1 className="font-bold text-2xl">Thông tin tài khoản</h1>
      {/* Avata */}
      <div tabIndex={0} className="avatar flex items-center mt-5">
        <div className="w-16 rounded-full">
          <img
            alt="avata"
            src={profilePic}
          />
        </div>
        <h2 className="ml-3 font-bold">{firstName} {lastName}</h2>
      </div>


      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>Giới tính</td>
              <td>{gender}</td>
            </tr>

            <tr>
              <td>Ngày sinh</td>
              <td>{dateOfBirth}</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>{email}</td>
            </tr>


            <tr>
              <td>Điện thoại</td>
              <td>{phoneNumber}</td>
            </tr>
          </tbody>

        </table>
      </div>

      <button onClick={() => handleChangeModel("formUpdateInformation")} className="btn w-full">Cập nhật</button>
    </div>
  )
}

export default Information
