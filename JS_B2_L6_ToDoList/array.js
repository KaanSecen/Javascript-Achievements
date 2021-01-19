//Create your arrays an variables
//get DOM elements
btn_add = document.getElementById("add");
btn_remove = document.getElementById("remove");
btn_finish = document.getElementById("finish");
inputting = document.getElementById("input");
errors = document.getElementById("error");

var listing = [];
lijstdoc = document.getElementById("listing");

btn_add.addEventListener("click", ()=>{
    //handle adding a new todo
    lijstdoc.innerHTML = "";
    listing.push(inputting.value);
    listing.forEach(updateListing);
    
});

btn_finish.addEventListener("click", ()=>{
    //handle finishing a todo
    
    //make sure your input is seen as a number
    x = Number(inputting.value);
    //check if input really is a number
    if(isNaN(x)){
        //not a number
        console.log("No Number");
        errors.innerHTML = "Error het is geen nummer";
    }else{
        //is a number
        errors.innerHTML = "";
        console.log("Yes Number");
    }

});

btn_remove.addEventListener("click", ()=>{
    //handle removing of a todo
    //make sure your input is seen as a number
    x = Number(inputting.value);
    //check if input really is a number
    if(isNaN(x)){
        //not a number
        console.log("No Number");
        errors.innerHTML = "Error het is geen nummer";
    }else{
        //! is a number
        errors.innerHTML = "";
        console.log("Yes Number");
        listing.splice(x, 1);
        console.log(listing);
        listing.forEach(updateListing);
    }
});

function updateListing(items, index){
 //print list of todo's
 //use loop to step trough the arrays
    lijstdoc.innerHTML += index + ":" + items + "<br>"; 
}