var allproductas = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn =document.querySelector("#add")
var addprice=document.querySelector("#addprice")
var nameproduct = document.querySelector("name")
var totalprice = 0

allproductas.forEach(function(item){
   item.onclick =function(){

    totalprice += +(item.getAttribute("price")) 

    content.innerHTML +=item.textContent + "/"

    if(content.innerHTML !=""){
        btn.style.display= "block" 
    }

   }
})
var a = btn.onclick=function(){
    parseInt(addprice.innerHTML += (totalprice))
    if (a!=0){
        addprice.innerHTML=totalprice
    }
}
