const countValue = document.getElementById('counterMachine');
const dButton = document.getElementById('decrease');
const iButton = document.getElementById('increase');

function counters(){
    let count = 0;
    console.log("hello")
    dButton.addEventListener('click',(e)=>{
        if(count>0){
            count--;
        } 
        countValue.style.color = "red";
        updateCount();
    })
    iButton.addEventListener('click',(e)=>{
        count++;
        countValue.style.color = 'green'
        updateCount();
    })
    function updateCount(){
        countValue.textContent = count;
    }
    countValue.textContent = count;
}
counters();