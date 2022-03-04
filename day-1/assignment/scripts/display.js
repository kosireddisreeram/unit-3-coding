
 var storedata= JSON.parse(localStorage.getItem("number"));

 document.getElementById("show_number").innerText=storedata;
 var div=document.getElementById("show_number");
  if(storedata=== 1){
      div.style.color="yellow";
  }
  else if(storedata===6){
      div.style.color="green";
  }
  else{
   div.style.color="red";

  }