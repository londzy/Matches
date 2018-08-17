
  // JavaScript code goes here at the bottom
   function getRandomInt(max, min) {

    let randomNumber = Math.floor(Math.random() * Math.floor(max));

    num = [];

    var number = document.querySelectorAll("number");
    for (var i = 0; i < num.length; i++) {
      let nums = num[i];
     nums.innerHTML = num;
  }
    number.innerHTML= randomNumber(10);
    console.log(randomNumber(10));
}

getRandomInt(3,5,6);
