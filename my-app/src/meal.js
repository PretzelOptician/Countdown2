import React from "react" 

class meal extends React.Component {
    render() {
        return(
            <>
                <h1> {this.props.menuMeal.meal} </h1>
            </>
        );
    }
}

export default meal;