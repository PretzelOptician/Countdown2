import React, { useState } from "react"
import './App.css';

function App() {
  const [veggie, setVeggie] = useState(false); 
  const menu = {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]
  }

  if(!veggie) {
  return (
    <div className="App">
      <h1>Menu</h1>
      <button onClick={() => setVeggie(true)}>Show Vegetarian Options Only</button>
      <MenuTable menu = {menu} vegetarianBool = {veggie} />
    </div>
  );
  }
  else {
    return(
      <div className="App">
      <h1>Menu</h1>
      <button onClick={() => setVeggie(false)}>Show All</button>
      <MenuTable menu = {menu} vegetarianBool = {veggie} />
    </div>
    ); 
  }
}

class MenuTable extends React.Component {
  render() {
    return(
      <div>
        <MenuMeal mealName = "Breakfast" menuList = {this.props.menu.breakfast} vegetarianBool = {this.props.vegetarianBool}/>
        <MenuMeal mealName = "Lunch" menuList = {this.props.menu.lunch} vegetarianBool = {this.props.vegetarianBool}/>
        <MenuMeal mealName = "Dinner" menuList = {this.props.menu.dinner} vegetarianBool = {this.props.vegetarianBool}/>
      </div>
    );
  }
}

class MenuMeal extends React.Component {
  render() {
    return(
      <div>
        <h3>{this.props.mealName}</h3>
        {this.props.menuList.map((item) => <MenuItem key={item.food} item={item} vegetarianBool = {this.props.vegetarianBool}/>)}
      </div>
    );
  }
}

class MenuItem extends React.Component {
  render() {
    let string = "";
    if(!this.props.vegetarianBool || this.props.item.vegetarian) {
      string = this.props.item.food + " ($" + this.props.item.price + ")";
    }
    return(
      <div>
        <p>{string}</p>
      </div>
    );
  }
}

export default App;
