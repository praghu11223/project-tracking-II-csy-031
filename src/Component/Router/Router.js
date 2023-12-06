import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import SignUp from './Sign_up'
import SignInSide from './Login'
import Dashboard from './Home'
import ContactList from './Contact'
function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<SignUp/>}/>
        <Route path="/Sign" element={<SignInSide/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Contact" element={<ContactList/>}/>
        
        

    </Routes>
    </BrowserRouter>
  )
}

export default Router