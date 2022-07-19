//const convidado = document.getElementById9('convidado');
const convidado = prompt('Digite seu nome: ');

convidado.length >= 3 ?
document.getElementById('convidado').innerHTML = convidado.charAt(0).toUpperCase() + convidado.slice(1, 50)
: alert('Seu nome precisa ter mais de 3 ou mais caracteres') ? false : location.reload();