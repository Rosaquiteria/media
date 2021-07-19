var titulo = document.querySelector(".titulo-p");
titulo.addEventListener("click", function () {
    console.log("fui clicado! anonimo");
    // body...
});

function mostrarMensagem() {
    console.log("fui clicado");
}

var botao = document.querySelector("#enviar-dados");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Botao foi clicado");


    var form = document.querySelector("#media");
    var nome = form.nome.value;
    var nota1 = form.nota1.value;
    var nota2 = form.nota2.value;
    var nota3 = form.nota3.value;


    var aluno = obtemAluno(form);


    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno")

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("inf-nome");
    var nota1Td = document.createElement("td");
    var nota2Td = document.createElement("td");
    var nota3Td = document.createElement("td");
    var mediaTd = document.createElement("td");
    var situacaoTd = document.createElement("td");

    nomeTd.textContent = aluno.nome;
    nota1Td.textContent = aluno.nota1;
    nota2Td.textContent = aluno.nota2;
    nota3Td.textContent = aluno.nota3;
    mediaTd.textContent = aluno.media;
    situacaoTd.textContent = aluno.situacao;


    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(nota1Td);
    alunoTr.appendChild(nota2Td);
    alunoTr.appendChild(nota3Td);
    alunoTr.appendChild(mediaTd);
    alunoTr.appendChild(situacaoTd);

    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

    var alunos = document.querySelectorAll(".aluno");
    console.log(aluno);
    var nota1Td = document.querySelector(".inf-nota1");
    var nota1 = nota1Td.textContent;
    console.log(nota1);
    var nota2Td = document.querySelector(".inf-nota2");
    var nota2 = nota2Td.textContent;
    console.log(nota2);
    var nota3Td = document.querySelector(".inf-nota3");
    var nota3 = nota3Td.textContent;
    console.log(nota3);
    var mediaTd = document.querySelector(".inf-media");
    var media = mediaTd.textContent;
});




function cal(media) {
    if (media >= 7) {
        console.log("Aprovado");
        return "Aprovado";
    } else if (media < 4) {
        console.log("Reprovado");
        return "Reprovado";
    } else if (media > 4 && media < 7) {
        console.log("Prova final");
        return "Prova Final";
    }    
}

function obtemAluno(form) {
    let media = (parseInt(form.nota1.value) + parseInt(form.nota2.value) + parseInt(form.nota3.value)) / 3;
    var aluno = {
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        nota3: form.nota3.value,
        media: media.toFixed(2),
        situacao: cal(media)
    }

    return aluno;
}

function montarTd(dado, classe){
    var td= document.createElement("td");
    td.classList.add(classe);
    td.textContent= dado;

    return td;
}

function montarTr(aluno){
    var alunoTr= document.createElement("tr");
    aluno.classList.add("aluno");

    alunoTr.appendChild(montarTd(aluno.nome, "inf-nome"));
    alunoTr.appendChild(montarTd(aluno.nome, "inf-nota1"));
    alunoTr.appendChild(montarTd(aluno.nome, "inf-nota2"));
    alunoTr.appendChild(montarTd(aluno.nome, "inf-nota3"));
    alunoTr.appendChild(montarTd(aluno.nome, "inf-media"));
    alunoTr.appendChild(montarTd(aluno.nome, "inf-situacao"));
}

var tabela= document.querySelector("#tabela");
tabela.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("show");

        setTimeout(function(){
            event.target.parentNode.remove(); 

        },1000);
});

var campoFiltrar = document.querySelector("#filtrar");
campoFiltrar.addEventListener("input", function(){
    var alunos= document.querySelectorAll(".aluno");
    if(this.value.length>0){
        for (var i = 0; i < alunos.length; i++) {
            var aluno= alunos[i];

            var nomeTd= aluno.querySelector(".inf-nome");
            console.log(nomeTd);
            var nome= nomeTd.textContent;
            
            var expressao= new RegExp(this.value, "i");

            if(expressao.test(nome)){
                aluno.classList.remove("invisivel");
            }else{
                aluno.classList.add("invisivel");
            }

         }
    }else{
        for (var i = 0; i < alunos.length; i++) {
            var aluno= alunos[i];
            aluno.classList.remove("invisivel");
        }
    }
});

            


        

    