const form = document.getElementById('form');
const fname = document.getElementById('fName');
const mname = document.getElementById('mName');
const lname = document.getElementById('lName');

form.addEventListener('submit',e =>{
    e.preventDefault();
     checkStatus();
   
})

function checkStatus(){
    const fnames = fname.value;
    const mnames = mname.value;
    const lnames = lname.value;
    if(fnames=== ''){
        // setError(fname,'Invalid');
        fname.setCustomValidity('Invalid First Name');
        console.error('Invalid First Name');
    }
    if(mnames=== ''){
        // setError(fname,'Invalid');
        mname.setCustomValidity('Invalid Middle Name');
        console.error('Invalid Middle Name');
    }
    if(lnames===''){
        // setError(fname,'Invalid');
        lname.setCustomValidity('Invalid Last Name');
        console.error('Invalid Last Name');
    }
}
