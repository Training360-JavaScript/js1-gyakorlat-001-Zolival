'use strict';


const handleClick = () => {
    const elements = document.querySelectorAll('.button');
    for (let i = 0; i < elements.length; i += 1) {
            elements[i].addEventListener( 'click', function(){
                console.log(elements[i].innerHTML );
            });
        }
}
