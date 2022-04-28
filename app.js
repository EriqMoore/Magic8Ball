
function eightBallGame(){

    let userQuestion = document.getElementById("userQuestion")
    if (!userQuestion.checkValidity()){
      document.getElementById("obstacle").innerHTML = "Ask a question first";
    }else{
      document.getElementById("obstacle").innerHTML = `${userQuestion.value}`;
    let randomNumber = Math.floor(Math.random() * 8);
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
    eightBall = 'Reply hazy try again';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 3:
    eightBall = 'Cannot predict now';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 4:
    eightBall = 'Do not count on it';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 5:
    eightBall = 'My sources say no';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 6:
    eightBall = 'Outlook not so good';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  case 7:
    eightBall = 'Signs point to yes';
    document.getElementById("answer").innerHTML = eightBall;
    break;
  
  default:
  document.getElementById("answer").innerHTML = "Invalid";
   
    }

}
}









