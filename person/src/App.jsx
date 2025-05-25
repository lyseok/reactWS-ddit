import { Outlet } from "react-router-dom"
import Sidebar from "./components/commons/Sidebar"

function App() {

  return (
    <main className="flex">
      <Sidebar />
      <div className="p-[30px] bg-gray-50 w-full min-h-lvh">
        <div className="bg-white border-[1px] border-gray-300 rounded-[4px] p-[50px]">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default App
