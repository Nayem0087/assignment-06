
import './App.css'
import ActiveUser from './assets/Component/ActiveUser'
import Banner from './assets/Component/Banner'
import Footer from './assets/Component/Footer'
import GetStarted from './assets/Component/GetStarted'
import Navbar from './assets/Component/Navbar'
import TransparentPricing from './assets/Component/TransparentPricing'
import Workflow from './assets/Component/Workflow'

function App() {
  

  return (
    <>
     <Navbar/>
     <Banner/>
     <ActiveUser/>
     <GetStarted/>
     <TransparentPricing/>
     <Workflow/>
     <Footer/>
    </>
  )
}

export default App
