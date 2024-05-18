// Tab Link and Content Display Code
let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tl of tablinks){
        tl.classList.remove("active-link");
    }
    for(tc of tabcontents){
        tc.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side menubar adjustment code
let sm = document.getElementById("sidemenu");

function openMenu(){
    sm.style.right = "0";
}
function closeMenu(){
    sm.style.right = "-200px";
}

// Google Sheets integration code
const scriptURL = 'https://script.google.com/macros/s/AKfycbyorZZ9c0sqDGFv0TVCAB74UDlr_jCuRIpho5vClQuUuK_31viO0n61T48JYF_HtFlU/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(()=>{
            msg.innerHTML = "";
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});