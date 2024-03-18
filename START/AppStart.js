let CONNECTION;

if (localStorage.getItem('Environment')) {

    CONNECTION = () => {

        alert('From Advance');
    
    }

} else {

    CONNECTION = (DIV) => {

        alert('From Cordova')

          
    }
}

export { CONNECTION }
