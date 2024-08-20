const caixaprincipal = document.querySelector('.caixa-principal')
const caixaperguntas = document.querySelector('.caixa-perguntas')
const caixaalternativas = document.querySelector('.caixa-alternativas')
const caixaresultados = document.querySelector('.caixa-resultado')
const textoresultados = document.querySelector('.texto-resultado')

const perguntas = [

    {
        enunciado: "no ambito social, voce prefere:",
        alternativas:
            [

                {
                    texto: "conseguir a carreira dos sonhos e nunca mais poder faltar trabalho nem tirar férias, com um salário ótimo ",
                    afirmação: "parabens você, mas trabalha que nem uma vaca",
                },

                {
                    texto: "passar na faculdade que você preferir,  nunca poder exercer o que você cursou,  trabalhar com algo que você odeia e tirar férias a cada 3 meses",
                    afirmação: "parabens você trabalha com o que você odeia mas tem muito tempo livre",
                }]
    },
    {
        enunciado: "no ambito ambiental, voce prefere:",
        alternativas:
            [

                {
                    texto: "poder eliminar o desmatamento na amazônia e nunca mais poder realizar um sonho seu",
                    afirmação: "parabens você salvou o mundo mas não o seu",
                },

                {
                    texto: "poder realizar um sonho na hora que quiser e morrer com o aumento do aquecimento global 1 semana depois  (você não pode desejar acabar com o aquecimento global)",
                    afirmação: "parabens sua felicidade durou muito pouco",
                }]
    },
    {
        enunciado: "no ambito tecnologico, voce prefere:",
        alternativas:
            [

                {
                    texto: "a tecnologia avançar em um nível as pessoas não precisem fazer esforços físicos porém todos os seus dados e vida pessoal serão expostos ",
                    afirmação: "parabens você é um preguiçoso com a vida exposta",
                },

                {
                    texto: "A tecnologia encontrar a cura para todas as doenças porém começaram a ser criados robôs para exilar a humanidade ",
                    afirmação: "parabens você salvou milhares de vidas mas provavelmente vai ser exilado por um robo",
                }]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){

    perguntaAtual= perguntas[atual];
    caixaperguntas.textContent = perguntaAtual.enunciado;
    caixaalternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas)
    { const botaoAlternativa = document.createElement ("button")
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaalternativas.appendChild(botaoAlternativa);

    }

}
function respostaSelecionada (alternativa){
const afrimacoes = alternativa.afirmação;
atual++;
mostraAlternativas();

}

mostraPerguntas();