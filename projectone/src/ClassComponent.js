import React from "react"
import Pizza from './PizzaFunction'

class ClassComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            arrayOfPizza: []
        }
    
    }
    componentDidMount() {
        fetch('http://localhost:3001/api',{headers:{'Content-Type':'application/json', 'Accept': 'application/json'}})
                // .then(res => console.log(res))
             .then(res => res.json())
             .then(data => this.setState({arrayOfPizza: data}));
    }

    render(){
        let mappedPizzas = this.state.arrayOfPizza.map(item => 
        <Pizza type={item.type} calories={item.calories} price={item.price} popularity={item.popularity} />)
        console.log(mappedPizzas)
        return (
            <div>
                <h1> Craving Pizza? Here is a list of our offerings! </h1>
                {mappedPizzas}
            </div>
        )
    }
}

export default ClassComponent;