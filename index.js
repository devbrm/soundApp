
const scoreHolder = {
  score: 0,
  setscore: function() {
    this.score += 1;
    let bar = document.querySelector("#file");
    bar.value = this.score;
    console.log(bar.value);
    }
}

function keyPress(event) {
  play(event.keyCode);
}


function contact(e) {
  let i = 0;
  if(Boolean(e.target.attributes[0])) i = (e.target.attributes[0].value);
  else if(Boolean(e.target.parentNode.attributes[0])) i = (e.target.parentNode.attributes[0].value);

  play(Number(i));
}

function play(i) {

  const audio = document.querySelector(`.audios [data-key = "${i}"]`);
  const key = document.querySelector(`#keys [data-key = "${i}"]`);
  audio.play();
  audio.currentTime = 0;
  
  //Play class added
  key.classList.add("playing");
  
  //Play class removed
  key.addEventListener ( "transitionend", (e) => {
    
    if (e.propertyName != "transform") return;
    e.target.classList.remove("playing");
  } );
  scoreHolder.setscore();

}
  
//Event Listeners
window.addEventListener( "keydown", (e) => keyPress(e) );
Array.from(document.querySelectorAll(`.key`))
  .forEach( (key) => {
    key.addEventListener( "click", (event) =>  contact(event) )
    // .addEventListener( "touch", (event) => contact(event));
  }); 