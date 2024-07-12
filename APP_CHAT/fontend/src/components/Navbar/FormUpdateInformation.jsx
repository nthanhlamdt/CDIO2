import { FaArrowLeft } from "react-icons/fa";

function FormUpdateInformation() {
  return (
    <div>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2"><FaArrowLeft /></button>
      </form>

      <h1 className="font-bold text-2xl">Thông tin tài khoản</h1>
    </div>
  )
}

export default FormUpdateInformation
