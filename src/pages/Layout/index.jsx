import './index.scss'
import {Outlet} from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const Layout =() =>{
    return(
        <div className='App'>
           <Nav />
           <div className="page">
           <Outlet></Outlet>
           <Footer/>
      </div>
        </div>
    )
}

export default Layout