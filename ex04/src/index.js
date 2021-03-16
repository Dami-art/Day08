//Write code bellow this line
function localScope(){
    var myVariable = "I am here!";
    console.log(myVariable);
}
localScope();
//Write code above this line

//Myvariable is not defined outside of localScope
  if(typeof myVariable != "undefined") {
     console.log("outside localScope", myVariable)
  } else{
    console.log("outside localScope UNDEFINED!!!");
  }

module.exports = localScope;
