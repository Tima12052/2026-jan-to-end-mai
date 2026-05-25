// Створіть форму з введенням користувача. Використовуйте методи життєвого циклу для збереження та оновлення введених даних користувача. 
// Основний код можна використати з приклада нижче. Для збереження та оновлення даних використовуйте локальне сховище.

import React,{Component} from "react";

class NewFile extends Component {

    state = {
        name = "",
        email = ""
    }

    componentDidMount(){
        console.log("Compn. was added")
    }
    componentDidUpdate(prevProps, prevState){
        console.log("compn. was updated");
        console.log(prevState);
        console.log(this.state);
    }
    componentWillUnmount(){
        console.log("Compn. was deleted from DOM");
    }

    changeName=()=>{
        console.log("Name was changed");
        this.setState(prevState => ({
            name: prevState.name = {valueName}
        }))
    }
    changeEmail=()=>{
        console.log("Email was changed");
        this.setState(prevState => ({
            email: prevState.email = {valueEmail}
        }))
    }

    render(){
        return(
            <div>
                <input type="text" value={e.target.value} placeholder="name" />
                <input type="email" value={e.target.value} placeholder="email" />
                <h2>your name is {name}</h2>
                <h3>your email is {email}</h3>
            </div>
        )
    }
}

export default NewFile