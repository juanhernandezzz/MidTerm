
//this variable will act as a checkpoint or event triger in which if the user inputs a value greater or less than this value
//then the if statements below can decide what to say to the user
let quantityLimit1 = '5'

// creates the first button
const pizzaButton = document.createElement("button");

// Create button text
const pizzaButtonText = new Text("Medium 16' Pizza");

//Put button text in button
pizzaButton.appendChild(pizzaButtonText);

// Put button in document's body
document.body.appendChild(pizzaButton);

// Welcomes user to the website
alert("Hello User Welcome to My Demonstration, At this moment you are in a Ordering App for pizza and will have a choice of either a whole pizza or a slice of pizza. You will have a choice of how much you want and the dependending on your quantity, the code will respond with a line of text.")

// Two images are now made
const pizzaImage = document.createElement("img");
const sliceImage = document.createElement("img");
// Set two image's source URL 
pizzaImage.src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg";
sliceImage.src = "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png";
// add image to body after the first button
document.body.appendChild(pizzaImage);

// creates a second button after the first image
const pizzaSliceButton = document.createElement("button");

// Create button text
const pizzaSliceButtonText = new Text("Slice of Pizza");

//Put button text in button
pizzaSliceButton.appendChild(pizzaSliceButtonText);

// Puts the second button in document's body
document.body.appendChild(pizzaSliceButton);


// places the image of the slice of pizza after the first button
document.body.appendChild(sliceImage);

// reshapes the images width and height
pizzaImage.style.width = "400px";
pizzaImage.style.length = "400px";
sliceImage.style.width = "300px";
sliceImage.style.length = "300px";

// this function is made specifically for when the user clicks the first button
// these if statements are useful for asking the user a series of questions after clicking yes or no for the first button
pizzaButton.onclick = function(){
    if (confirm("You Sure you want the 16' Pizza?"))
    {
        
            let pizzaQuantity = prompt("How Many Pizzas?")
            if (pizzaQuantity > quantityLimit1 ){
                alert('Family event huh');
            }
            else if (pizzaQuantity < quantityLimit1){
                alert('Ok your order is finalized, wait here till the meantime while we make your pizza!')
            }

    
        else {
            alert("Ok no problem :)");
        }
    
    }
};

    // this function is made specifically for when the user clicks the first button
// these if statements are useful for asking the user a series of questions after clicking yes or no for the first button
pizzaSliceButton.onclick = function(){
    if(confirm("You Sure you want the slice of pizza?"))
       
    {
        let quantity2 = prompt("How Many Slices?")
        if ( quantity2 > 4 ){
            alert(`Really ${quantity2} slices!?, why not order a whole pizza then!?`);
        }
        // depending on user's response, a certain number of pizzas will be displayed
        for (let sliceQuantity = 0; sliceQuantity< quantity2; sliceQuantity++)
      {
        
             const sliceImage = document.createElement("img");
            sliceImage.src = "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png";
            document.body.appendChild(sliceImage);
            sliceImage.style.width = "100px";
        
     
        
        
       
      }
        
    }
 // in case the user decideds not to want any slices, a no will trigger diaglog
    else
    {
        alert("Ok no problem :)");
    }
    
   
    

};

