
const expanding_div = document.getElementById('movable');

function expand(){
    let current_width = window.getComputedStyle(expanding_div).width;
    if (current_width ==='500px'){
        expanding_div.style.width = '50px'
        //console.log((current_width ='500px'))
    }
    else{
        expanding_div.style.width = '500px'
        console.log('sdfsdf')
    }
   


}


document.addEventListener('click', expand);