import React,{Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


class FoodMenu extends Component {
    state = { 
      foodMenu :[],
     } ;
     componentDidMount() {
         //send get request
        axios
        .get("http://localhost:8081/CanteenFood")
          .then((response) => {
            console.log(response);
            this.setState({ foodMenu: response.data });
         })
         .catch((error) => console.log(error));
      }
    
      handleDelete = (foodId) => {
        // http://localhost:8080/employee/{id}
        axios
          .delete(`http://localhost:8081/CanteenFood/${foodId}`)
          .then((res) => {
            console.log(res);
            // return all employees except emp which is selected for delete
            const food = this.state.foodMenu.filter((food) => food.foodId != foodId);
    
            // update state object with employees
            this.setState({ foodMenu: food });
            alert("Employee with foodId " + foodId + " deleted successfully!");
          })
          .catch((err) => console.log(err));
      };

    render() { 
        return (
            <div >
                <h4 className="mt-1">FOOD MENU</h4>
                <Link to="/foodItem/add" className="btn btn-success float-end mb-2">AddNew FoodItem</Link>
            <table  class="table table-striped table-primary  mt-4 w-25 mx-auto">
                <thead>
                    <tr>
                        <th>FoodId</th>
                        <th>FoodName</th>
                        <th>FoodImage</th>
                        <th>FoodPrice</th>
                        <th>FoodQuantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {this.state.foodMenu.map((food) =>(
                   <tr>
                    <td>{food.foodId}</td>
                    <td>{food.foodName}</td>
                    <td>{food.foodImage}</td>
                    <td>{food.foodPrice}</td>
                    <td>{food.foodQuantity}</td>
                    <td>
                    <Link to={`/foodItem/update/${food.foodId}`}>
                    <i className="bi bi-arrow-repeat me-3" type="button"></i>
                    </Link>
                      <i className="bi bi-trash3-fill"
                       type="button"
                       onClick={() => this.handleDelete(food.foodId)}>
                       </i>
                    </td>
                   </tr>
                  ))}
                </tbody>
            </table>
            </div>
        );
    }
}
 
export default FoodMenu ;