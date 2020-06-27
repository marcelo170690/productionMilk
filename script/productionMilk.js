const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const glass1 = document.getElementById('glass1');
const glass2 = document.getElementById('glass2');
const glass3 = document.getElementById('glass3');
m1.addEventListener('animationend', (event) => {
  glass1.src = 'glass1.png'
  glass1.style.animationName = 'm1Move';
  glass1.style.animationDuration = '2s';
  glass1.style.animationTimingFunction = 'linear';
  glass1.style.animationFillMode = 'forwards';
});
m2.addEventListener('animationend', (event) => {
  glass2.src = 'glass1.png'
  glass2.style.animationName = 'm2Move';
  glass2.style.animationDuration = '2s';
  glass2.style.animationTimingFunction = 'linear';
  glass2.style.animationFillMode = 'forwards';
});
m3.addEventListener('animationend', (event) => {
  glass3.src = 'glass1.png'
  glass3.style.animationName = 'm3Move';
  glass3.style.animationDuration = '2s';
  glass3.style.animationTimingFunction = 'linear';
  glass3.style.animationFillMode = 'forwards';
});

const group__hearts = document.getElementById('group__hearts');
glass1.addEventListener('animationend', (event) => {
  let n = randHeart(1, 100);
  let t=0;
  let x=0;
  for (let i=0; i<n; i++){
    const div = document.createElement('div');
    div.classList.add('like');
    div.classList.add('is-liked');
    x = randHeart(1, 1768);
    t = randHeart(0, 10);
    div.style.transform = `translateX(${x}px)`;
    div.style.animationDelay = Math.floor((Math.random() * (10000)))+"ms";
    group__hearts.appendChild(div);
  }
})
function randHeart(a, b){
  const r = a+(b-a)*Math.random();
  return Math.round(r);
}
console.log(window.innerWidth)
console.log(window.innerHeight)