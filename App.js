import logo from './logo.svg';
import './App.css';
import RegisterPage from './RegisterAccount/RegisterAcount';
import SigninPage from './SigninAcount/SigninAcount';
// import Footer from "./footer/footer";
import Navbar from './navbar/navbar';
import { FooterContainer } from './footer'

function App() {
  return (
    <div className="page-container">
      <Navbar/>
    <div className="content-wrap">
    {/* <RegisterPage/> */}
    <SigninPage/>
    </div>
      
      <FooterContainer />
    </div>
  );
}

export default App;
