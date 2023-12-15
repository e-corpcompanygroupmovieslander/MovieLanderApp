const DIV=document.querySelector('div');


setTimeout(() => {

    import("./START/AppStart.js").then((module) => {
        
        const { CONNECTION } = module;

        CONNECTION(DIV);

    });

}, 2000);