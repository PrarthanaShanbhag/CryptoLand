import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeBody from './pages/HomeBody'


const Home = () => {
    return (
        <>    
       <div className='homepage'>
    <Header show={false}/>
    <HomeBody/>
    <Footer/>
           </div> 
   
        </>
    )
}

export default Home
