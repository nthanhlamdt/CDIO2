import { PiProjectorScreenChartBold } from "react-icons/pi";
function ManagementProject() {
  return (
    <div>
      <div className="hover:bg-green-800 tooltip tooltip-bottom" data-tip="Dự án">
        <PiProjectorScreenChartBold className=" text-white size-20 cursor-pointer p-6" />
      </div>
    </div>
  )
}

export default ManagementProject