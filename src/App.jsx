
import { useState } from 'react'
import './App.css'
import ActiveUser from './assets/Component/ActiveUser'
import Banner from './assets/Component/Banner'
import Cart from './assets/Component/Cart'
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

  const [activeTab, setActiveTab] = useState('model')
    const [carts, setCarts] = useState([])

  return (
    <>
      <Navbar />
      <Banner />
      <ActiveUser />

      <div className='text-center pb-10'>
        <h2 className='font-bold md:text-5xl text-4xl'>Premium Digital Tools</h2>
        <p className='text-gray-700 pt-3'>Choose from our curated collection of premium digital products <br /> designed  to boost your productivity and creativity.</p>
      </div>

      <div className="tabs tabs-box justify-center mb-10 bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Products"
          onClick={() => setActiveTab('Products')}
          defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Carts"
          onClick={() => setActiveTab('Carts')}
        />
      </div>

      {activeTab === 'Products' && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === 'Carts' && <Cart />}
      <GetStarted />
      <TransparentPricing />
      <Workflow />
      <Footer />
    </>
  )
}

export default App
