import { MdGroupAdd } from "react-icons/md";
import AddFriendIcon from './AddFriendIcon';
function Search() {


  return (
    <div className='p-6 flex items-center w-full z-10 h-20 bg-emerald-500 dropdown dropdown-bottom'>
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="input input-bordered h-10 w-2/3 min-w-32"
      />
      <div className="relative flex items-center flex-1" >
        <AddFriendIcon />
        <div className="text-2xl text-white cursor-pointer ml-5 tooltip tooltip-bottom" data-tip="Tạo nhóm chat">
          <MdGroupAdd />
        </div>
      </div>


    </div>
  );
}

export default Search;
