function scuberGreetingForFeet(feet){
  // Write your code here!
let greeting = ""
 if (feet <= 400) {
  greeting = "This one is on me!"
  return greeting
  }    
    else if (feet > 2000 && feet<=2500){
          greeting = "I will gladly take your thirty bucks."
          return greeting
    
} else{
       greeting = "No can do."
       return greeting      
}
}
function ternaryCheckCity(city){
  // Write your code here!
  return (city == "NYC")? "Ok, sounds good." : "No go.";
  
}

function switchOnCharmFromTip(message){
  // Write your code here!
  switch (message){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    case "thanks for everything":
      return "Bye."
      break;
  }
}