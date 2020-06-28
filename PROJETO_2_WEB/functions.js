
/*
* @parm: numero inteiro - valor do input range
* retorn: preenche o campo cujo o id é 'valor_range' com o mesmo valor do parm
*/
function Range(val) {
    document.getElementById('valor_range').innerHTML = val.toString(); 
}

/*
* Funcao para a validacao do formulario
* return: false para o caso de encontrar algum erro
*/
function validar_campos(){
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var msg = formulario.msg.value;
    var bool = true; //variável booleana que confere se o formulario foi preenchido corretamente
   
    if(!valida_campo(nome,'nome','erro_nome')) bool = false;
    if(!valida_email(email)) bool = false;
    if(!valida_campo(msg,'msg','erro_msg')) bool = false;
    return bool;
}

/*
* Funcao para a verificar se o campo foi preenchido
* @parm1: recebe o valor do campo desejado
* @parm2: recebe o id do campo
* @parm3: recebe o id do elemento '<p>' em que a mensagem de erro deve ser exibida
* return: false para o caso de encontrar algum erro
*/
function valida_campo(campo,id_campo,id_erro){
  if(campo == "" || campo == null ){
      document.getElementById(id_erro).innerHTML  =  "Campo obrigatório." ;
      document.getElementById(id_campo).focus();
      return false;
  }
  document.getElementById(id_erro).innerHTML  =  "" ; //limpar mensagem
  return true;
}

/*
* Verifica se o campo email foi preenchido
* Verifica se o email fornecido possui '@' ou '.com'
* @parm1: recebe o valor do campo desejado
* return: false para o caso de encontrar algum erro
*/
function valida_email(email){
  if(!valida_campo(email,'email','erro_email')) return false;
  else if(email.indexOf('@') == -1 || email.indexOf('.com') == -1){
    document.getElementById('erro_email').innerHTML  =  "E-mail inválido!" ;
    formulario.email.focus();
    return false;
  }
  document.getElementById('erro_email').innerHTML  =  "" ; //limpar mensagem
  return true;
}