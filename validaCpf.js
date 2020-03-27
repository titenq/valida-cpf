function validaCpf(cpf) {
  let soma = 0;
  let resto;

  const cpfNumber = Number(cpf);

  if (isNaN(cpfNumber)) {
    console.log('O CPF deve conter somente números.');
    return false;
  }

  if (cpf.length !== 11) {
    console.log(`O CPF deve conter 11 dígitos, foram passados ${cpf.length} dígitos.`);
    return false;
  }

  for (i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
  }

  if (resto == 10 || resto == 11) {
    resto = 0;
  } 

  if (resto != parseInt(cpf.substring(9, 10))) {
    console.log('O CPF é inválido.');
    return false;
  } 

  soma = 0;

  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
  }

  if (resto == 10 || resto == 11) {
    resto = 0;
  }

  if (resto != parseInt(cpf.substring(10, 11))) {
    console.log('O CPF é inválido.');
    return false;
  }

  let cpfSequencial = [];

  for (let i = 0; i < 10; i++) {
    cpfSequencial.push(i.toString());
  }

  let cpfSeqArray = [];

  cpfSequencial.map(digit => {
    let cpfSeq = Array(11).fill(digit);
    cpfSeq = cpfSeq.join('');
    cpfSeqArray.push(cpfSeq);
  });

  if (cpfSeqArray.includes(cpf)) {
    console.log('O CPF não pode ser uma sequência de números.');
    return false;
  }

  console.log('CPF válido.');
  return true;
}

let cpf = '55555555555';

console.log(validaCpf(cpf));
