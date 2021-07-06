const inputBtn=document.getElementById("input-btn");
const labelText=document.getElementById("label-text");
const submit=document.getElementById("submit");

let regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z{2,8}]).([a-z{2,8}])?$/;

submit.addEventListener("click",function(){
  console.log("clicked");
  validate();
});

function validate(){
if(!regx.test(inputBtn.value)){
  inputBtn.style.borderColor="indianred";
  labelText.style.visibility="visible";
}
}