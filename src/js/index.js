// Passo 1 - Criar variavel no JS para trabalhar com a listagem
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);

// Passo 2 - identificar o evento de clique
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        // Passo 3 - remover classe aberto
        removercartao();
        // Passo 4 - ao clicar num pokedev da lista, pegar o id para abrir descericao
        const idPokedevSelecionado = mostrarCartao(pokedev);
        
        // Passo 5 - remover classe ativo
        RemoverClasseAtivo();
        
        // Passo 6 - addiconar ativo no selecinado listagem
        AdicionarClasseAtivo(idPokedevSelecionado);
    });
})

function AdicionarClasseAtivo(idPokedevSelecionado) {
    const PokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    PokedevSelecionadoNaListagem.classList.add("ativo");
}

function RemoverClasseAtivo() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartao(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function removercartao() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
