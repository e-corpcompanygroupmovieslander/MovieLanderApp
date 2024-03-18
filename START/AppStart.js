import { BODY, CLEAR, ENVIRONMENT, INPUT, TEXT } from "../RESOURCES/CONNECTION/Connection.js";

BODY();

let CONNECTION;

if (localStorage.getItem('Environment')) {

    CONNECTION = () => {

        CLEAR('');

        ENVIRONMENT('');

        TEXT('','h1','Fire','',()=>{});
    
    }

} else {

    CONNECTION = (DIV) => {

        CLEAR('');

        INPUT('','Email','Enter A Emails','')

          
    }
}

export { CONNECTION }
