const catContainer = document.getElementById("catContainer");

function movecatContainerLeft() {
    const leftNumbers = catContainer.style.left.replace("%", "");
    const left = parseInt(leftNumbers, 10);
  
      catContainer.style.left = `${left - 1}%`;
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      movecatContainerLeft();
    }
  });

function movecatContainerRight() {
    const leftNumbers = catContainer.style.left.replace("%", "");
    const left = parseInt(leftNumbers, 10);
  
      catContainer.style.left = `${left + 1}%`;
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      movecatContainerRight();
    }
  });

let count = 10;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

function redWin(){
  document.getElementById("leftColor").style.backgroundColor = "#E22030";
  document.getElementById("catImg").src = "catpat.gif";
  setTimeout(function(){
  window.alert("Red wins! Enjoy patting the goodboy!");
  }, 1000);
}

function blueWin(){
  document.getElementById("rightColor").style.backgroundColor = "#1E3A4B";
  document.getElementById("catImg").src = "catpat.gif";
  setTimeout(function(){
  window.alert("Blue wins! Enjoy patting the goodboy!");
  }, 1000);
}

function draw(){
  document.getElementById("rightColor").style.backgroundColor = "#7f7f7f";
  document.getElementById("leftColor").style.backgroundColor = "#7f7f7f";
  document.getElementById("catImg").src = "catpat.gif";
  setTimeout(function(){
  window.alert("It's a draw! The goodboy still gets pats");
  }, 1000);
}

function reset(){
  document.getElementById("rightColor").style.backgroundColor = "#E22030";
  document.getElementById("leftColor").style.backgroundColor = "#1E3A4B";
  document.getElementById("catImg").src = "cat.png";
}

function winnerCheck(){
  const leftNumbers = catContainer.style.left.replace("%", "");
  const left = parseInt(leftNumbers, 10);

    if(left > 49){
        redWin();
    }
    else if(left < 51){
        blueWin();
    }
    else if(left === 50){
        draw();
    }
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("start")) {
       let timer = setInterval(function(){
           count--
           value.textContent = count;
           if(count === 0){
               clearInterval(timer);
               winnerCheck();
           }
         }, 1000);
    }
    if (styles.contains("reset")) {
       catContainer.style.left = `50%`;
      count = 10;
      reset();
    }
    value.textContent = count;
  });
});