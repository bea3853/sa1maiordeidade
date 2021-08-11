    function Confirma(){
        var resp = prompt("Qual a sua idade?");

      if (resp < 18){
       alert ("Chame um maior para te acompanhar");
        }else{
        window.location="autoriza.html";
      }
      }