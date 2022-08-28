console.log('hello world')
const change = document.getElementById('change');

const roofOne = document.createElement('img');
roofOne.className = "roof-pics";
roofOne.src = "./images/slideOne.jpg";

const roofTwo = document.createElement('img');
roofTwo.className = "roof-pics";
roofTwo.src = "./images/slideTwo.jpg";

const roofThree = document.createElement('img');
roofThree.className = "roof-pics";
roofThree.src = "./images/slideThree.jpg";

const roofFour = document.createElement('img');
roofFour.className = "roof-pics";
roofFour.src = "./images/slideFour.jpg";

const string = ["./images/slideOne.jpg", "./images/slideTwo.jpg", "./images/slideThree.jpg", "./images/slideFour.jpg", "./images/slideOne.jpg", "./images/slideTwo.jpg", "./images/slideThree.jpg", "./images/slideFour.jpg", "./images/slideOne.jpg", "./images/slideTwo.jpg", "./images/slideThree.jpg", "./images/slideFour.jpg", "./images/slideOne.jpg", "./images/slideTwo.jpg", "./images/slideThree.jpg", "./images/slideFour.jpg", "./images/slideOne.jpg", "./images/slideTwo.jpg", "./images/slideThree.jpg", "./images/slideFour.jpg"];
console.log(roofOne)

change.appendChild(roofFour)

setInterval(changePicture, 1500);
let sum = 0
function changePicture() {
    
    if(sum <= string.length - 1) {
      
        roofFour.src = string[sum];
        sum += 1
        
    } else {
        sum = 0;
        roofFour.src = string[sum];
    }
}


