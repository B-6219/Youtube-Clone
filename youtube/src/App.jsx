import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"


const App = () => {
  return(
    <>

    <section className="bg-[#000000] h-screen">
      <NavBar/>

      <div className="flex flex-1">
        <Sidebar/>
      </div>


      <h1 className="text-3x1 text-white font-serif text-center">Hi there</h1>
      
    </section>
    

    </>

    
  )
}

export default App
