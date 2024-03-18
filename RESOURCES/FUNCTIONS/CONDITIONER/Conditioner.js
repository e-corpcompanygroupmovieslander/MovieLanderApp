//CONDITIONER
const CONDITIONER = (CONDITION,HOOK,ACTION,ACTION1) => {

    if (CONDITION===HOOK) {

      return  ACTION();

    } else {

      return  ACTION1();

    }
    
};

export{CONDITIONER}