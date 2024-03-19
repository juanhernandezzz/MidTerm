let quantity = prompt("How Many Pizzas?")
let quantity2 = prompt("How Many slices?")
let quantityLimit1 = '50'
//let priceLimit1 = '50' 
let quantityLimit2 = '10'
//let priceLimit2 = '5' 
const button1 = document.createElement("button");

// Create button text
const buttonText = new Text("Medium 16' Pizza");

//Put button text in button
button1.appendChild(buttonText);

// Put button in document's body
document.body.appendChild(button1);

// Welcomes user to the website
alert("Hello User Welcome to My Demonstration, At this moment you are in a Ordering App for pizza and will have a choice of either a whole pizza or a slice of pizza. You will have a choice of how much you want and the dependending on your quantity, the code will respond with a line of text.")






const image = document.createElement("img");
const image2 = document.createElement("img");
// Set image's source URL 
image.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
image2.src = "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png";
// add image to body
document.body.appendChild(image);

const button2 = document.createElement("button");

// Create button text
const buttonText2 = new Text("Slice of Pizza");

//Put button text in button
button2.appendChild(buttonText2);

// Put button in document's body
document.body.appendChild(button2);



document.body.appendChild(image2);

image.style.width = "400px";
image.style.length = "400px";
image2.style.width = "300px";
image2.style.length = "300px";

button1.onclick = function(){
    if (confirm("You Sure you want the 16' Pizza?"))
        
        {
            if (prompt("How Many?") >= priceLimit1 ){
                alert('Family event huh');
            }
        }
    
        else {
            alert("Ok no problem :)");
        }
    };


button2.onclick = function(){
    if(confirm("You Sure you want the slice of pizza?"))

    {
        if (prompt("How Many slices?") >= priceLimit2 ){
            alert('Really 10 slices!?, why not order a whole pizza then!?');
        }
    }

    else {
        alert("Ok no problem :)");
    }
};