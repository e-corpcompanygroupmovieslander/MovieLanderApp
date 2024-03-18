import { VERIFY } from "../CONNECTION/Connection.js"
import { BODY } from "../RESOURCES/COMPONENTS/BODY/Body.js";
import { ENVIRONMENT } from "../RESOURCES/FUNCTIONS/ENVIRONMENT/Environment.js";

const CONNECTION=(DIV)=>{

    BODY();    

    VERIFY(DIV);

    ENVIRONMENT('');
     
}

export { CONNECTION }
