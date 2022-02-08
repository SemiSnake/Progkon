

 //console array list.
 var click1Output = "You click on the cool ass box";

 // currency variables, or other variables that affect general income.
 var money = 0;
 var clickCount = 0;
 var moneyPerClick = 1;
 var upgrade1Cost = 10;
 var moneyPerSecond = 1;
 var gameSpeed = 100;

 // update perimeter for kpsUpdate function, saying it should run 100 times pers second
 setInterval(kpsUpdate, gameSpeed);
 setInterval(frameUpdate, 1);

 // creating an object consisting of body tag in html, allowing interaction in javascript.
 let bodyEl = document.querySelector("body");

 // sets text with the id "money" to the variable "money"
 document.getElementById("money").innerHTML = money;

 //sets text with the id "upgrade1Cost" to the variable "upgrade1Cost"
 document.getElementById("upgrade1Cost").innerHTML = upgrade1Cost;
 // copies .content element, allowing interaction in javascript
 let contentEl = document.querySelector(".content");

 // pastes bodyEl in console, allowing surveillance of body tag (html) in the console.
 console.log(bodyEl);

 // adds a statement to start the "click" function, making the function run on clickEvent.
 bodyEl.addEventListener("click", clickEvent);

 // identifies element "box" by its id, and starts function: "consoleOutput" on click.
 document.getElementById("box").onclick = function() {consoleOutput()};

 //function for smoother updates on variables on screen.
 function frameUpdate(){
   //updates upgrade1Cost variable on the html document
   document.getElementById("upgrade1Cost").innerHTML = upgrade1Cost;
   //updates money variable on the html document
   document.getElementById("money").innerHTML = money;
   //updates console_content variable on the html document


 }



 function kpsUpdate(){
   // add a tenth of moneyPerSecond to money
   money += moneyPerSecond /10;

   // rounds up money variable to closest one decimal
   money = (Math.round(money * 10)/ 10);

 }


 function consoleOutput(e){
   console.log(clickCount);
   //adds 1 to clickCount;
   clickCount += 1;
         if(clickCount == 1){
           document.getElementById("click1Output").innerHTML = click1Output;
           document.getElementById("click1Output").animate([
             {
               opacity: 0,
             },
             {
               opacity: 1,
             }
           ], 1000);
         }
 }



 function clickEvent (e){
   //checks if target of click is box or not.
       if (e.target.id == "box"){
         //adds moneyPerClick to money;
         money += moneyPerClick;
         //logs string in the console with target id.
         console.log("Kult, du trykka på", e.target.id,". Du har trykka på", e.target.id, clickCount, "ganger");

       }

       //checks if target of click is upgrade button, and also checks if money is higher than or equal to price.
       else if (e.target.id == "Upgrade1" && money >= upgrade1Cost) {
         //changes moneyPerClick by 1
         moneyPerClick += 1;
         //reduces money by upgrade1Cost
         money -= upgrade1Cost;
         //increases cost of upgrade1 for future upgrades
         upgrade1Cost *= 1.25;
         //prevents unneccesary decimals
         upgrade1Cost = (Math.round(upgrade1Cost * 10)/ 10);
         money = (Math.round(money * 10)/ 10);

       }
       //if none of above statements return 1, this happens:
       else {
         //logs target id of click
         console.log(e.target.id);
       }
   }
