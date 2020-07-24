  const dict = require("./deutsch.json")


var zeile = [];
var absatz = [];

for(let f =0;f<3;f++){
for(let i = 0; i<5;i++){
  for(let z = 0; z<2;z++){
    let listerandom = Math.floor(Math.random() * dict.liste.length); 
    let oftandom = Math.floor(Math.random() * dict.pronomen.length); 
    let verbrandom = Math.floor(Math.random() * Object.values(dict.verben).length); 
    let verbrandom2 = Math.floor(Math.random() * Object.values(dict.verben2).length); 

    
    let modal_verben = Object.values(dict.verben)[verbrandom] 
    let stamm_verben = Object.values(dict.verben2)[verbrandom2]


    let verbrandom0 = Math.floor(Math.random() * modal_verben.length);


    let verb_position = Math.floor(Math.random() * 2); 

    let inf_verben = Object.values(dict.verben3);
    let inf_random = Math.floor(Math.random() * inf_verben[0].length); 
   

    if(verb_position==0){
       //Ich,du..
       let verbrandom = Math.floor(Math.random() * Object.values(dict.verben).length); 
      zeile.push(dict.pronomen[verbrandom])
      //verb modal
      zeile.push(modal_verben[verbrandom])
      listerandom = Math.floor(Math.random() * dict.liste.length);
      zeile.push(dict.nomen[listerandom])
    

      zeile.push(inf_verben[0][inf_random])
    }
    else if(verb_position==1){
      //ich,du..

    let verbrandom2 = Math.floor(Math.random() * Object.values(dict.verben2).length); 
    zeile.push(dict.pronomen[verbrandom2])
    //stamm verb
    zeile.push(stamm_verben[verbrandom2])
    let nomenrandom = Math.floor(Math.random() * dict.nomen.length); 
    zeile.push(dict.nomen[nomenrandom])
  

    }
  }
  zeile = zeile.join(" ").trim();
  absatz.push(zeile);
  zeile = []
}
  absatz.push(" ")
}

absatz = absatz.map(day => day.charAt(0).toUpperCase()+ day.substr(1))
console.log(absatz.join("\n"))



  