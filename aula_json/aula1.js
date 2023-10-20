let pessoa =[{//esse é o objeto
    "nome":"NOME",
    "idade":20,
    "cidade": "CIDADE"
    }, 
    {"nome":"NOME2",
    "idade":22,
    "cidade": "CIDADE2"
    }
];

console.log(pessoa);
//conventer o objeto para json
let pessoaJSON = JSON.stringify(pessoa);
console.log("JSON:" + pessoaJSON);
console.log (pessoa[0].cidade); //ver a cidade da primeira 'pessoa'

//converter de json para objeto:parse
let novamenteObjPessoa = JSON.parse(pessoaJSON);
console.log(novamenteObjPessoa);
console.log(novamenteObjPessoa[1].cidade);
