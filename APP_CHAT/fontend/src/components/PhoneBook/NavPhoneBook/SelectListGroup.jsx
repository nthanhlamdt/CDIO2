import { GrGroup } from "react-icons/gr";
function SelectListGroup() {
  return (
    <div className="flex items-center py-2 pl-6 cursor-pointer w-full hover:bg-slate-300 border border-color-white h-20">
      <GrGroup className="text-3xl font-bold mr-4" />
      <span className="text-xl font-medium">Danh sách bạn bè</span>
    </div>
  )
}

export default SelectListGroup
