import { VERIFY } from "../CONNECTION/Connection.js"
import { APPCOLOR } from "../RESOURCES/COMPONENTS/APPCOLOR/AppColor.js";
import { BODY } from "../RESOURCES/FUNCTIONS/BODY/Body.js";

const CONNECTION=(DIV)=>{

    APPCOLOR(DIV,'#ffffff');

    BODY();

    VERIFY(DIV);
     
}

export { CONNECTION }
