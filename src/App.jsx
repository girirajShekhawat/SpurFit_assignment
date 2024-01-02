 
import DetailsBarContainer from "./components/detailsBar/DetailsBarContainer"
import Header from "./components/header/Header"
import Navbar from "./components/left_navbar/Navbar"

function App() {
   
  return (
   
      <div className=" flex bg-slate-100 min-h-screen">
        <Navbar/>

        <div className="flex flex-col w-[1200px] box-border pr-5 flex-grow">
        <Header/>
        <DetailsBarContainer/>
        </div>
         
      </div>
       
    
  )
}

export default App