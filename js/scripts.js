/*!
* Start Bootstrap - Heroic Features v5.0.4 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function jokeFunction() {
	var answer = ""
    var question = ""
  var x =Math.floor(Math.random() * 10);
    switch(x) {
      case 1:
        var question = "What kind of dog likes taking a bath every day?"
    	var answer = "Shampoo-dle"
        break;
      case 2:
        var question = "Why did the man living in Alaska name his dog Frost?"
    	var answer = "Because Frost bites"
        break;
      case 3:
        var question = "What do you call a dog that has been left outside in the cold for a long time?"
    	var answer = "A chili-dog"        
        break;
      case 4:
        var question = "Why are dogs terrible dancers?"
    	var answer = "Because they have two left feet"        
        break;
      case 5:
        var question = "What do dogs get after they graduate from obedience school?"
    	var answer = "Their masters"        
        break;
      case 6:
        var question = "When you cross an aggressive dog with a computer, what do you get?"
    	var answer = "A lot of bites"        
        break;
      case 7:
        var question = "Why didn’t the dog want to play football?"
    	var answer = "It was a Boxer"        
        break;
      case 8:
        var question = "Which dog breed is Dracula’s favorite?"
    	var answer = "Bloodhounds"        
        break;
      case 9:
        var question = "When the dog went to the flea circus, what happened?"
    	var answer = "He stole the show"        
        break;
      default:
        var question = "What type of dog is constantly aware of the time?"
    	var answer = "A watch dog"
  	}
    document.getElementById("modelBodyTextQuestion").innerHTML = question;
    document.getElementById("modelBodyTextAnswer").innerHTML = answer;
  }
