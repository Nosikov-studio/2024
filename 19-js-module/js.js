// обработчик для 2 и 3 кнопки
function f1() {
    alert('2 или 3 - Ура!!');
}


// для 3 кнопки

const b=document.getElementById('test1');

b.onclick = f1;


// для 4 кнопки

const b4=document.getElementById('test4');

b4.addEventListener('click', f4);

function f4() {
    alert('4 - Ура!!!!');
}

// для 5 кнопки
const b5=document.getElementById('test5');

b5.addEventListener('click', function(){
    alert('5 - Ура!!!!'); 
});