const containerDom = document.querySelector(".container")

for (let i = 1; i <= 100; i++) {

    
    
    
    if (( i % 3 == 0 ) && ( i % 5 == 0 )){

        console.log("fizzbuzz")
        const square = `<div class="square">fizzbuzz</div>`;
        containerDom.innerHTML += square;

    } else if ( i % 3 == 0 ) {

        console.log("fizz")
        const square = `<div class="square">fizz</div>`;
        containerDom.innerHTML += square;

    } else if ( i % 5 == 0 ) {

        console.log("buzz")
        const square = `<div class="square">buzz</div>`;
        containerDom.innerHTML += square;
    } else {
        console.log(i)
        const square = `<div class="square">${i}</div>`;
        containerDom.innerHTML += square;
    }
}