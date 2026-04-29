function jogar(indice) {
    const escolhas = ["Pedra", "Papel", "Tesoura"];
    document.querySelector("#resultado").innerHTML = `Você escolheu ${escolhas[indice]}`;
}