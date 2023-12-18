import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Home from "./Components/Home"
export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />      
        <Home />
      </div>
      
    </div>
  )
}