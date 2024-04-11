const botaoMostrarMais = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


// Passo 2 - identificar o clique no botão 

botaoMostrarMais.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();

});     

function esconderBotao() {
    botaoMostrarMais.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

