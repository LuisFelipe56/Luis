 function atualizarTempo(){
 var display = document.querySelector('.display');

 var agora = new Date();
  
 var horario = corrigiHorarios(agora.getHours()) + ':' + corrigiHorarios(agora.getMinutes()) + ':' + corrigiHorarios(agora.getSeconds());

 display.textContent = horario;

    
 }
 function corrigiHorarios(numero){
     if (numero < 10) {
         numero = '0' + numero;
     }
        return numero;
    }
    
 atualizarTempo();
 setInterval(atualizarTempo, 1000);
 
 console.log(horario);
