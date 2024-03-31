const p=document.querySelector('p')

console.log("Алилуя!!!!!!!!")

const d=document.createElement('div');
const h=document.createElement('h1');
const a=document.createElement('a');

a.href='https://ya.ru';
a.innerText='vlabla';


h.innerText="Learn JS!!!!!!!!!!!!!";
h.classList.add('t1');
d.appendChild(h);

document.body.appendChild(d);
document.body.appendChild(a);

