        function forloopfunction(){
            var i;
        for (i = 1; i <= 10; i++) {
          document.getElementById("numbers").innerHTML += "<li>" + i + "</li>";
        }
        }

        function whileloopfunction(){
          var states = ["Alabama", "Alaska", "Arizona", "Arkansas"];
          var i = 0;
          while (i < states.length) {
            var option = document.createElement("option");
            option.text = states[i];
            document.getElementById("states").add(option);
            i++;
          }
        }
        
        function foreachloopfunction(){
          var colors = ["red", "green", "blue"];
          colors.forEach(function(color) {
            var li = document.createElement("li");
            li.textContent = color;
            document.getElementById("colors").appendChild(li);
          });
        }

        function displayMessage(){
          alert("Welcome to JavaScript");
          arlet("Welcome to JavaScript");
        }

        function callFunction() {
          var text = document.getElementById("welcomecallfunctiontextbox").value; 
          eval(text); 
        }


        function sum(a,b){
         return a+b;
         let result = sum(5, 10);
        alert( result );
        }
        
    
		

		function displayCode() {
			var firstName= "John";
			var lastName ="Doe";
       alert("Jonh Doe")
		}
     
    function mybuttonfunction() { 
      alert("Hello you clicked the button") 
    };

    function sum(a, b) {
      return a + b; }
      ;

    window.onload = function() {
      alert("Welcome To Group C JavaScript and AJAX presenation")
    };
    function consolog(){
      let x = 10;
      console.log(x);
    }
    var person = {
      firstName: "John",
      lastName: "Doe",
      age: 25,
      fullName:
   function() {
        return this.firstName + " " + this.lastName;
       }
      }; 
    
    function eventlist(){
      const formElement = document.getElementById('myForm');
      formElement.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent the default form submit behavior
        // execute some code here
      }); 
    }
    function divide(a, b) {
      try {
        if (b === 0) {
          throw 'Error: Cannot divide by zero'; // throws an error if b is zero
        } else {
          return a / b; // returns the result of a divided by b
        }
      } catch (error) {
        console.log(error); // logs the error message
        return null; // returns null if there is an error
      }
    }

    function asyncFunction() {
      return new Promise((resolve, reject) => {
        // Do some async task and resolve with the result
        // or reject with an error
        // For example, we can use setTimeout() to simulate an async operation
        setTimeout(() => {
          let result = 'Async task completed successfully';
          // Simulate a random error. Remove the if statement for no error.
          if (Math.random() < 0.5) {
            reject('Error: The async task failed');
          } else {
            resolve(result);
          }
        }, 2000);
      });
    }

    function add(a, b) {
      debugger;
      return a + b;
     } 
     
     function debuggerwhileloop(){
      let i = 0;
       while (i < 10) {
        if (i===5){
          debugger
        }
         i++;
         console.log(i);
} 
     }

     function createRegex() {
      let pattern = /hello world/;
      let regex = new RegExp("hello world");
    
      console.log(pattern); // Output: /hello world/
      console.log(regex); // Output: /hello world/
    }

    function testPattern() {
      let pattern = /hello world/;
      let str = "hello world";
    
      console.log(pattern.test(str)); // Output: true
    }
    
    function testPattern2() {
      let pattern = /a.*z/;
      let str = "abcz";
    
      console.log(pattern.test(str)); // Output: true
    }

    function testPattern3() {
      let pattern = /[abc]/;
      let str = "def";
    
      console.log(pattern.test(str)); // Output: false
    }
    
    function testPattern4() {
      let pattern = /a+/;
      let str = "aaab";
    
      console.log(pattern.test(str)); // Output: true
    }
    
    
    function testPattern5() {
      let pattern = /(abc)+/;
      let str = "abcabcabc";
    
      console.log(pattern.test(str)); // Output: true
    }
   
      function testPattern6() {
      let pattern = /(abc)+/;
      let str = "abcabcabc";
    
      console.log(pattern.test(str)); // Output: true
    }

function showMessage(message, isError) {
  let messageDiv = document.querySelector("#message");
  messageDiv.textContent = message;
  if (isError) {
    messageDiv.classList.add("error");
  } else {
    messageDiv.classList.remove("error");
  }
}

function windowalert(){
  window.alert("Hello World!"); 
}

function deleteItem() {
  let result = window.confirm("Are you sure you want to delete this item?");
  if (result) {
    // code to delete the item goes here
    console.log("Item deleted");
  } else {
    console.log("Item not deleted");
  }
}

function sayHelloo() {
  let name = window.prompt("Please enter your name:");
  if (name) {
    window.alert("Hello, " + name + "!");
  } else {
    window.alert("You didn't enter your name.");
  }
}
