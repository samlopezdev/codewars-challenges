// Classic Hello World

// Simple function called greet that returns the most-famous "hello world!".

// Most logical solution:
function greet() {
    return "hello world!"
}


// Other Solutions:
const greet = () => "hello world!"




// 2
function greet(){
	var a=0
  	var abc=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  	'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  	var hello = [];
  	var world = [];
			          
    a++;    a++;  a++;a++;  a++;      a++;      a++;a--;a++;
hello.push(abc[a]); a++;    a++;  a--;      a--;      a--;      a--;    a--;
hello.push(abc[a]); a++;a++;a++;  a++;a--;  a++;      a++;      a++;    a++;
hello.push(abc[a]); a++;    a++;  a--;      a--;      a++;      a--;    a=a;
hello.push(abc[a]);	a++;    a--;  a++;a++;  a--;a++;  a--;a++;  a++;a--;a++;
hello.push(abc[a]);

					 
      			        a++;		      a++;  a++;a++;a++;  a++;a--;a++;  a=a;      a++;a++;
world.push(abc[a]);  a--;		     a--;   a--;    a--;  a--;    a--;  a--;      a--;   a=a;
world.push(abc[a]);   a++;	    a++;    a++;    a--;  a--;a--;      a++;      a++;    a++;
world.push(abc[a]);    a--;a++;a--;     a--;    a--;  a--;  a++;    a--;      a--;   a--;
world.push(abc[a]);     a--;  a--;      a--;a--;a--;  a--;    a--;  a--;a++;  a=a;a--;
world.push(abc[a]);

	return hello.join("") + " " + world.join("")+"!";
}


// 3
const greet = () => {
    const hello = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"] ;
    let result = "";
  
    for (let indexFromHelloWorldArray = 0; indexFromHelloWorldArray < hello.length; indexFromHelloWorldArray++ ){
      result = result + hello[indexFromHelloWorldArray];
    }
    // Checking for result[0] is really "h"...
    if( result[0] === "h"){
      // ...Checking for result[1] is really "e"
      if( result[1] === "e"){
        // Checking for the "l"
        if( result[2] === "l"){
          /* checking for the second "l" becouse
          the second "l" is the most important
          letter in the hello world */
          if( result[3] === "l"){
            // Have you ever seen hello world without "o" ???
            if( result[4] === "o"){
              // Here is a big spaaaaaaaaaaaaace!!!!!111!!1!!!one!!!11one!
              if( result[5] === " "){
                // Hey it's a "W"
                if( result[6] === "w"){
                  // I have dejavu... Have u ever seen letter "o" before?
                  if( result[7] === "o"){
                    // Can anybody read this?
                    if( result[8] === "r"){
                      // Hmm again an important "l" letter! Never forget it.
                      if( result[9] === "l"){
                        // Deluckchuck - Good bye
                        if( result[10] === "d"){
                          // Greetings from Hungary (Pálinka!!)
                          if( result[11] === "!"){
                            return result;
                          } else {
                            greet();
                          }     
                        } else {
                          greet();
                        }
                      } else {
                        greet();
                      } // I have no idea what I am doing right now
                    } else {
                      greet();
                    }
                  } else {
                    greet();
                  }
                } else {
                  greet();
                }
              } else {
                greet();
              }
            } else {
              greet();
            }
          } else {
            greet();
          }
        } else {
          greet();
        }
      } else {
        greet();
      }
    } else {
      greet();
    }
  // 14.01.2021 team Potato
}


// 4

(function () { 
    var prev = 22915696;
    var modulus = Math.pow(2,32);
    var multiplier = 1664525;
    var increment = 1013904223;
    
    function setRandSeed(s) {
      prev = s;
    }
    function random() {
      prev = (multiplier * prev + increment) % modulus;  
      return prev/Math.pow(2,32);
    }
    Math.random = random;
    Math.setRandSeed = setRandSeed;
  })();
  
  function generateChar() {
    return String.fromCharCode(Math.floor(Math.random() * (91-65)) + 65);
  }
  
  function generateWord(length)
  {
    var res = "";
    for(var i = 0; i < length; i++)
      res += generateChar();
    return res.toLowerCase();
  }
  
  function greet() {
    var greetings = generateWord(5);
    Math.setRandSeed(18337180); 
    var someone = generateWord(5);
    
    return greetings + " " + someone + "!";
  }