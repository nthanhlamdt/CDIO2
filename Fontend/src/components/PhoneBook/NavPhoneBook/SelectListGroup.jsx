import { GrGroup } from "react-icons/gr";
function SelectListGroup({ setSelectPhoneBook }) {
  return (
    <div
      onClick={() => { setSelectPhoneBook('ListGroup') }}
      className="flex items-center py-2 pl-6 cursor-pointer w-full hover:bg-slate-300 border border-color-white h-20"
    >
      <GrGroup className="text-3xl font-bold mr-4" />
      <span className="text-xl font-medium">Danh sách nhóm</span>
    </div>
  )
}

export default SelectListGroup
