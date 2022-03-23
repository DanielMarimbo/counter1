let counter = 0;
const span = document.getElementById("counter")
const decrease = document.getElementById("less");
const reset = document.getElementById("reset");
const increase = document.getElementById("add");

function minus(){
    counter--;
    span.innerHTML = counter;
};

function clear(){
    counter = 0;
    span.innerHTML = counter;
}

function increment(){
    counter++;
    span.innerHTML = counter;
}
// Add Event listeners
decrease.addEventListener("click", function (){
    minus()
})
reset.addEventListener("click", function(){
    clear()
});
increase.addEventListener("click", function(){
    increment()
}
)