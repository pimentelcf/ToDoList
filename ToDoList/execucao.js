// Selecionar elementos do DOM
const inputTarefa = document.getElementById('tarefaInput');
const botaoAdicionar = document.getElementById('adicionarBtn');
const lista = document.getElementById('minhaLista');

// Adicionar evento ao botão
botaoAdicionar.addEventListener('click', () => {
    const tarefa = inputTarefa.value.trim();

    if (tarefa) {
        // Criar um novo item de lista
        const novoItem = document.createElement('li');
        novoItem.textContent = tarefa;

        // Adicionar um botão para remover a tarefa
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.style.marginLeft = '10px';

        // Adicionar evento ao botão de remover
        botaoRemover.addEventListener('click', () => {
            lista.removeChild(novoItem);
        });

        // Anexar o botão ao item da lista
        novoItem.appendChild(botaoRemover);

        // Adicionar o item à lista
        lista.appendChild(novoItem);

        // Limpar o campo de input
        inputTarefa.value = '';
        inputTarefa.focus();
    } else {
        alert('Por favor, insira uma tarefa.');
    }
});


//testando commit!ee