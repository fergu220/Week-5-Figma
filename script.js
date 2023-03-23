// get all input fields
const name = document.getElementById("name")
const username = document.getElementById("username")
const DOB = document.getElementById("DOB")
const email = document.getElementById("email")
const password = document.getElementById("password")

//initiate data model
let data = [];
data = JSON.parse(localStorage.getItem("account")) || [];

// add event listeners to form
const form = document.getElementById("form")

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    //create an account instance
    const userAccount = new Account(
        name.value,
        username.value,
        DOB.value,
        email.value,
        password.value,
        )

        //check if user exist
        const emailCheck = userAccount.doesAccountExist(userAccount.email)

        if(emailCheck){
            alert("User already exist!!");
            throw new Error("User already exists!!");
        }else{
            data.push(userAccount);
            localStorage.setItem("account", JSON.stringify(data))
        }
    })

class Account {
    constructor(name, username, DOB, email, password ){
        this.name = name;
        this.username = username;
        this.DOB = DOB;
        this.email = email;
        this.password = password;
    }

    doesAccountExist(email){
        if(!data) return

        const check = data.find(value => value.email === email)
        return check
    }

    getAllAccount(){
        return data
    }
}