let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let bodyx = document.body;

bodyx.addEventListener('input', ()=>{
  //console.log(color.value)
  document.body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
})
