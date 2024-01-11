import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"


export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />      
        <Outlet />
      </div>
      
    </div>
  )
}