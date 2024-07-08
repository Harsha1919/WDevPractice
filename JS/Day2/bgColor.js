var button = document.getElementById("buttonClick")
const arr = ['blue','red','green','yellow','pink','orange'];
button.addEventListener('click',changeBackground);

function changeBackground(){
    let numb = Math.floor(Math.random() * arr.length);
    document.body.style.backgroundColor=arr[numb];
}

