 
import DetailsBarContainer from "./components/detailsBar/DetailsBarContainer"
import Header from "./components/header/Header"
import Navbar from "./components/left_navbar/Navbar"

function App() {
   
  return (
   
      <div className=" flex bg-[#f8f8f8] min-h-screen ">
        <Navbar/>

        <div className="flex flex-col  box-border w-full   ">
        <Header/>
        <DetailsBarContainer/>
        </div>
         
      </div>
       
    
  )
}

export default App
