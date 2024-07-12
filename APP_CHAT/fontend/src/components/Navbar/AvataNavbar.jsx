
import useLogout from "../../hooks/useLogout";
// eslint-disable-next-line react/prop-types
function AvataNavbar({ firstName, lastName, gender, profilePic, dateOfBirth, email, phoneNumber }) {

  const { logout } = useLogout()
  return (
    <div className="p-4">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src={profilePic} />
      </div>
    </div>
  )
}

export default AvataNavbar
