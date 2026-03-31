
import './App.css'
import ActiveUser from './assets/Component/ActiveUser'
import Banner from './assets/Component/Banner'
import Footer from './assets/Component/Footer'
import GetStarted from './assets/Component/GetStarted'
import Models from './assets/Component/Models'
import Navbar from './assets/Component/Navbar'
import TransparentPricing from './assets/Component/TransparentPricing'
import Workflow from './assets/Component/Workflow'


const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json()
}

const modelPromise = getModels()


function App() {
  
  return (
    <>
     <Navbar/>
     <Banner/>
     <ActiveUser/>
     <Models modelPromise = {modelPromise}/>
     <GetStarted/>
     <TransparentPricing/>
     <Workflow/>
     <Footer/>
    </>
  )
}

export default App
