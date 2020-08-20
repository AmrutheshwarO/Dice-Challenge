/* Alternate Solution1
const image1 = document.createElement("img");
const image2 = document.createElement("img");
const div1 = document.getElementById("dice1");
const div2 = document.getElementById("dice2");
*/
const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];
const titleDiv = document.getElementById("titleDiv");

messageBanner = function(n1, n2) {
    if(n1 > n2) {
        const newHTML = "Player 1 is the winner";
        titleDiv.innerHTML = newHTML;
    }
    else if (n2 > n1) {
        const newHTML = "Player 2 is the winner";
        titleDiv.innerText = newHTML;
    }
    else {
        const newHTML = "Tie";
        titleDiv.innerText = newHTML;
    }
};

diceGame = function() {
    var n1 = Math.floor(Math.random()*6)+1;
    var n2 = Math.floor(Math.random()*6)+1;
    var add1 = "images/dice" + n1 +".png";
    var add2 = "images/dice" + n2 +".png";
    
    /* Alternate Solution1
    
    USEFULL WHILE APPENDING CHILDREN IMAGES OR TEXT FOR ALREADY EXISTING IMAGES OR TEXT

    image1.src = add1;
    image2.src = add2;
    div1.appendChild(image1);
    div2.appendChild(image2);
    */

    image1.setAttribute("src", add1);
    image2.setAttribute("src", add2);

    messageBanner(n1, n2);
};