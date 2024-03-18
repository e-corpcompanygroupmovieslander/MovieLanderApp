import { TEXT } from "../RESOURCES/CONNECTION/Connection.js";

let CONNECTION;

if (localStorage.getItem('Environment')) {

    CONNECTION = () => {

        TEXT('','h1','h3','',()=>{
            alert('')
        })
    
    }

} else {

    CONNECTION = (DIV) => {

        TEXT(DIV,'h1','h3','',()=>{
            alert('')
        })

          
    }
}

export { CONNECTION }
