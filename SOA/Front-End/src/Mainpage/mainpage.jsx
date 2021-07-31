import React , { Component }from 'react';
import Footer from './footer';
import NavbarUnRe from './navbar_unre';
import NavbarRe from './navbar_re';
import MainBody
 from './mainbody';
  class MainPage extends Component {
      
      render() { 
        const token = localStorage.getItem("token")
      

        var isAuthenticated = false
        
  
        if(token==null) {
          isAuthenticated = false
        }
        else {
          isAuthenticated = true
        }
          return (
              
    
            <body>
                {isAuthenticated ? <NavbarRe /> : <NavbarUnRe/>}
                
                <MainBody/>
         
                <Footer />
            </body>
            );
        }
    }
     
    export default MainPage ;