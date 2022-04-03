let firstItem;  
let buttonValue;

/* enter bosganda natijani hisoblaydi */
document.addEventListener("keyup", function(event){
if(event.keyCode==13){ /*13 = enter keyCode*/
    event.preventDefault();
    document.getElementById("equal").click();
}
});

/*ekranga sonlarni va amalni yozadi  */
function printNumber(param){
    
    document.getElementById("input").value+=param;
    firstItem = document.getElementById("input").value;
    buttonValue = param;
   }
/* javobni ekranga chiqaradi */   
function answer(){
    firstItem = document.getElementById("input").value;
    let javob = eval(firstItem);
      /* bu faqat daraja uchun: */
      let firstNumber = "";
      let secondNumber = "";
  
      for(let i=0; i<firstItem.length; i++){
        if(firstItem[i]=='^'){
            let index = firstItem.indexOf('^') ;
            // let firstNumber = "";
            for( let w=0; w<index; w++){
                firstNumber +=firstItem[w];
            }
            // let secondNumber = ""; 
            for(let b=index+1; b<firstItem.length; b++){
                secondNumber += firstItem[b];
            }
            let javo = (firstNumber+"**"+secondNumber);
            javo = eval(javo);
            javob = javo;
        }

      }/* daraja uchun qismi tugadi */    
    document.getElementById("input").value = javob;  
}
/* ekranni tozalaydi (Cl tugmasi) */
function tozalash(parameter){
    document.getElementById("input").value = null;
}
/* oxirgi raqamni o'chiradi (<-- tugmasi) */
function back(){
    let firm='' ;
    for(let i=0; i<firstItem.length-1; i++){
        firm += firstItem[i];
   }
   firstItem = firm;
   document.getElementById("input").value=firstItem;
      return 0;
}
