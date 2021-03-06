import React from 'react'
import ListServiceComponent from '../components/Service/ListServiceComponent'
import CreateLoginComponent  from '../components/SignIn/signin'


function Service() {
    if(localStorage.getItem('token')!=undefined)
    {
        return (
            <div>
                
                <ListServiceComponent />
            </div>
        )
    }
    else{
        return (
            <div>
                <CreateLoginComponent />
          </div>
              
        )
        
    }
   
}

export default Service
