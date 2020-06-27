
/*
* parm: numero inteiro
* retorna: preenche o campo cujo o id é 'resp' com o valor do parm
*/

function Range(val) {
    document.getElementById('resp').innerHTML = val.toString(); 
}

/*
* Funcao para a validacao do formulario
*/

//VALIDAR-------------------------------------------------
function validar_campos(){
    var nome = formulario.nome.value;
    /*var tel = formulario.tel.value;
    var email = formulario.email.value; //Criação variavéis dos campos do form
    var msg = formulario.msg.value;*/
    var bool = true; //variável booleana que confere se o formulario foi preenchido corretamente
    
    if(!valida_nome(nome)) bool = false;
 
  
  /*
  if(tel == "" || tel == "*VALOR INVÁLIDO*" ){
    formulario.tel.value = "*VALOR INVÁLIDO*"; //Validação do Telefone
    formulario.tel.focus();
    bool = true;
  }
  
  if(email == "" || email == "*VALOR INVÁLIDO*" || email.indexOf('@') == -1){ //Validação do e-mail
    formulario.email.value = "*VALOR INVÁLIDO*";
    formulario.email.focus();
    bool = false
  }
  
  if(msg == "" || msg == "*FAVOR PREENCHER*"){ ////Validação da mensagem
    formulario.msg.value = "*FAVOR PREENCHER*";
    formulario.msg.focus();
    bool = false
  }*/
  
    return bool; //Caso um dos campos nãotenha sido preenchido corretamente, não envia o form
  }

function valida_nome(nome){
    if(nome == "" || nome == null ){
        document.getElementById('erro').innerHTML  =  "Preencher o campo nome corretamente." ;
        formulario.nome.focus();
        return false;
    } 
    return true;
}