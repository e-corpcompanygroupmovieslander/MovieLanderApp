import { BODY, CLEAR, ENVIRONMENT, INPUT} from "../RESOURCES/CONNECTION/Connection.js";

let CONNECTION;

if (localStorage.getItem('Environment')) {

    CONNECTION = () => {

        CLEAR('');

        ENVIRONMENT('');

        INPUT('','Email','Enter A Emails','');
    
    }

} else {

    CONNECTION = (DIV) => {

        BODY();

        CLEAR('');

        INPUT('','Email','Enter A Emails','');

          
    }
}

export { CONNECTION }
