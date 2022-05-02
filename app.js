function eightBallGame(){
    let obstacle = document.getElementById("obstacle");
    let userQuestion = document.getElementById("userQuestion");
    if (!userQuestion.checkValidity()){
      obstacle.innerHTML = "Ask a question first";
    }else{
      obstacle.innerHTML = `${userQuestion.value}?`;
    let randomNumber = Math.floor(Math.random() * 7);
    let eightBall = document.getElementById("answer")
  
    switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 1:
    eightBall = 'It is decidedly so';
    document.getElementById("answer").innerHTML = eightBall;
  break;
  case 2:
    eightBall = 'Cannot predict now';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 3:
    eightBall = 'Do not count on it';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 4:
    eightBall = 'My sources say no';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 5:
    eightBall = 'Outlook not so good';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 6:
    eightBall = 'Signs point to yes';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  
  default:
  document.getElementById("answer").innerHTML = "Invalid";
   
    }

  
    

}

}

function clearFields (){
  document.getElementById("userQuestion").value = "";
 
}













