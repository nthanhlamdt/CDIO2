import PropTypes from 'prop-types';

function hiddenUser({ lastName, firstName, profilePic, phoneNumber }) {
  return (
    <div className="flex items-center py-2 cursor-pointer w-full ">
      <div className="avatar online">
        <div className="w-16 rounded-full bg-slate-600">
          <img src={profilePic} />
        </div>
      </div>
      <div className="flex flex-col ml-3">
        <div className=" font-bold mb-1">{firstName} {lastName}</div>
        <div>Số điện thoại: {phoneNumber}</div>
      </div>
    </div>
  )
}

hiddenUser.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
};

export default hiddenUser