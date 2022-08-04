//class component
import React,{ Component } from "react";
import {Link} from "react-router-dom";

class Pay extends Component{
    state={ 
        count:0,
     };
    render(){
        return(
            <div>
            
                <Link to="/payWithCard" className="btn btn-primary float-middle nb-20 bg-secondary">PayWithCard</Link>
                <br></br>
                <br></br>
               <Link to="/cardDetailsById" className="btn btn-primary float-middle nb-20 bg-secondary">Add Card</Link>
               <br></br>
                <br></br>
                <Link to="/viewCard" className="btn btn-primary float-middle nb-20 bg-secondary">View Card</Link>
            </div>
        );
    }
}

export default Pay;