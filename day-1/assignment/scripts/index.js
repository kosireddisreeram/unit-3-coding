function a(){
    function getrandom(){
        return Math.floor(Math.random() *(7-1))+1;
    }
    var store=getrandom()
    localStorage.setItem("number",JSON.stringify(store));

   
  }