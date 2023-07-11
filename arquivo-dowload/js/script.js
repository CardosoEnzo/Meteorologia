const key = "9d6b80f2eee6c6f8fc19637415cf0de9";
const botao = document.querySelector(".botao-busca");

botao.addEventListener("click", cliqueBotao);

function cliqueBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then((resposta) => resposta.json());

  console.log(dados)

  dadosnaTela(dados)

}

function dadosnaTela(dados){

    const cidade = document.querySelector('.cidade')
    cidade.innerHTML = "Tempo em "+dados.name

    const tempo = document.querySelector(".temp")
    
    tempo.innerHTML =Math.ceil (dados.main.temp)+" ºC"

    const previsao = document.querySelector(".texto-previsao")
    
    previsao.innerHTML = dados.weather[0].description  

    const imagem = document.querySelector(".img-previsao")

    imagem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}
