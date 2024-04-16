const botoes = document.querySelectorAll(".botao"); //constante botões
const textos = document.querySelectorAll(".aba-conteudo"); //constante aba conteudo
for (let i = 0; i < botoes.length; i++) { //laço de repetição que passará por todos botões
    botoes[i].onclick = function (){ //funcao que ao clicar no botao ativa os efeitos e textos
        for (let j = 0; j < botoes.length; j++) { 
            botoes[j].classList.remove("ativo"); //aqui remove o efeito ativo do botao        
            textos[j].classList.remove("ativo"); //aqui remove o efeito ativo do texto   
        }
        botoes[i].classList.add("ativo"); //aqui ativa o efeito do botao
        textos[i].classList.add("ativo"); //aqui ativa o texto no botao
    }
}
const contadores = document.querySelectorAll(".contador"); //constante contador
const tempo1 = new Date("2024-12-13T00:00:00"); //estipula uma data para a contagem regressiva

contadores[0].textContent = calculaTempo(tempo1); 
function calculaTempo(tempo){ //funcao contagem regressiva
    let tempoAtual = new Date(); 
    let tempoFinal = tempo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}