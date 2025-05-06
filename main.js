var add = document.querySelector("button");
var Input = document.querySelector("input")
add.addEventListener('click', load);
function load(e) {
    var complete = document.querySelector(".complete > ul");
    var notcomplete = document.querySelector(".Notcomplete > ul");
  if(Input.value!==" " && Input.value!=="")
  {
      var newli = document.createElement("li");
      var p = document.createElement("p");
      p.innerHTML = Input.value;
      Input.value = " ";
      var del = document.createElement("button");
      del.innerHTML = '<i class="fa-solid fa-trash delete"></i>';
      var com = document.createElement("button");
      com.innerHTML = '<i class="fa-sharp fa-solid fa-check complete"></i>';
      newli.appendChild(p);
      newli.appendChild(del);
      newli.appendChild(com);
      notcomplete.appendChild(newli);
      del.addEventListener('click', function () {
          var parent1 = this.parentElement;
          parent1.remove();

      });
      com.addEventListener('click', function () {
          var parent = this.parentElement;
          parent.remove();
          complete.appendChild(parent);
          com.style.display = "none";
      });
  }
}
document.addEventListener('DOMContentLoaded',function(){
    var sub = document.querySelector(".sub");
    sub.disabled = true;
    var inp=document.querySelector(".in");
    inp.onkeyup=function(){
if(inp.value.length>4){
    sub.disabled = false;
}
else{
    sub.disabled = true;
}
    }
});