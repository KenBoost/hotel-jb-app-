import './index.scss'
import {Outlet} from 'react-router-dom'
import Nav from '../../components/Nav'

const Layout =() =>{
    return(
        <div className='App'>
           <Nav />
           <div className="page">
           <Outlet></Outlet>
      </div>
        </div>
    )
}

export default Layout