let quantity = prompt("How Many Pizzas?")
let quantity2 = prompt("How Many slices?")
//this variable will act as a checkpoint or event triger in which if the user inputs a value greater or less than this value
//then the if statements below can decide what to say to the user
let quantityLimit1 = '5'
//let priceLimit1 = '50' 
//this variable will act as a checkpoint or event triger in which if the user inputs a value greater or less than this value
//then the if statements below can decide what to say to the user
let quantityLimit2 = '10'
//let priceLimit2 = '5' 

// creates the first button
const button1 = document.createElement("button");

// Create button text
const buttonText = new Text("Medium 16' Pizza");

//Put button text in button
button1.appendChild(buttonText);

// Put button in document's body
document.body.appendChild(button1);

// Welcomes user to the website
alert("Hello User Welcome to My Demonstration, At this moment you are in a Ordering App for pizza and will have a choice of either a whole pizza or a slice of pizza. You will have a choice of how much you want and the dependending on your quantity, the code will respond with a line of text.")

// Two images are now made
const image = document.createElement("img");
const image2 = document.createElement("img");
// Set two image's source URL 
image.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
image2.src = "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png";
// add image to body after the first button
document.body.appendChild(image);

// creates a second button after the first image
const button2 = document.createElement("button");

// Create button text
const buttonText2 = new Text("Slice of Pizza");

//Put button text in button
button2.appendChild(buttonText2);

// Puts the second button in document's body
document.body.appendChild(button2);


// places the image of the slice of pizza after the first button
document.body.appendChild(image2);

// reshapes the images width and height
image.style.width = "400px";
image.style.length = "400px";
image2.style.width = "300px";
image2.style.length = "300px";

// this function is made specifically for when the user clicks the first button
// these if statements are useful for asking the user a series of questions after clicking yes or no for the first button
button1.onclick = function(){
    if (confirm("You Sure you want the 16' Pizza?"))
    
        {
            if (prompt("How Many Pizzas?") >= quantityLimit1 ){
                alert('Family event huh');
            }
        }
    
        else {
            alert("Ok no problem :)");
        }
    
    };


    // this function is made specifically for when the user clicks the first button
// these if statements are useful for asking the user a series of questions after clicking yes or no for the first button
button2.onclick = function(){
    if(confirm("You Sure you want the slice of pizza?"))
       
    {
        if ( prompt("How Many Slices?") >= quantityLimit2 ){
            alert('Really 10 slices!?, why not order a whole pizza then!?');
        }
        
    }

    else {
        alert("Ok no problem :)");
    }

};