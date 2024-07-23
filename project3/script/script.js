let result=document.getElementById("screen");

let string='';


let buttons=document.querySelectorAll("button")
let array=Array.from(buttons) 
array.forEach((btn )=> {
   btn.addEventListener("click",(e)=>{
    if (e.target.innerHTML== '=') {
      
        string = string.replace(/(\d+(\.\d+)?)%/g, '(($1/100))');
        try {
            string = eval(string);
        } catch (error) {
            string = 'Error';
        }
        result.value=string;
    }
    else if (e.target.innerHTML== 'C') {
        string='';
        result.value=string;
        
    }
    else if(e.target.innerHTML == 'DE'){
        string=string.substring(0,string.length-1)
        result.value=string;

    }
    
    
    else{
        string+=e.target.innerHTML;    
        result.value=string;
    }
   
      

    })
    
});

