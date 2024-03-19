/* 
Functions
-Input: arguments, specified by parameters
-Body: block of code
-Output: return 
*/
function testMessage(){
    console.log("swows")
}

testMessage();

const button1 = document.createElement("button");

// Put text in button
const buttonText = new Text("Click Me!");

button1.appendChild(buttonText);

document.body.appendChild(button1);

/*
 Whenever the button is clicked  
 Call the testMessage function
*/

button1.addEventListener("click", testMessage);

const sourceA = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
const sourceB = "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png";

function createSwitchingImage() {


//  Create image element 
const image = document.createElement("img");
// Set image's source URL 
image.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
// add image to body
document.body.appendChild(image);

function switchImage() {
   if(image.src === sourceA){
    image.src = sourceB
   }
   else{
    image.src = sourceA
   }
};

image.addEventListener("mouseenter",switchImage);
image.addEventListener("mouseleave",switchImage);
image.style.width = "400px";
image.style.length = "400px";
}

for(let imageCount = 0; imageCount < 10; imageCount++) {
    createSwitchingImage();
}

