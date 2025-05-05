const formCadastro = document.getElementById('cadastro');
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const alunoData = {
        ra: formCadastro.ra.value,
        nome: formCadastro.nome.value,
        nascto: new Date(formCadastro.nascto.value)
    };
    fetch('http://localhost:5000/aluno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alunoData)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                exibirMensagem('Aluno cadastrado com sucesso');
            } else {
                exibirMensagem('Erro ao cadastrar aluno');
            }
        });
});

fetch('http://localhost:5000/aluno')
    .then(response => response.json())
    .then(alunos => {
        const tabelaAlunos = document.getElementById('aluno');
        alunos.forEach(aluno => {
            const linhaAluno = document.createElement('tr');
            linhaAluno.innerHTML = `
                <td>${aluno.ra}</td>
                <td contenteditable="true">${aluno.nome}</td>
                <td contenteditable="true">${new Date(aluno.nascto).toLocaleDateString('pt-BR')}</td>
                <td>
                <button onclick="atualizarAluno(this)">Atualizar</button>
                <button onclick="excluirAluno(${aluno.ra})">Deletar</button>
                </td>
                `;
            tabelaAlunos.appendChild(linhaAluno);
        });
    });

function excluirAluno(ra) {
    fetch(`http://localhost:5000/aluno/${ra}`, {
        method: 'DELETE'
    })
        .then(response => response.status)
        .then(status => {
            if (status === 204) {
                exibirMensagem('Aluno deletado com sucesso');
            } else {
                exibirMensagem('Erro ao deletar aluno');
            }
        });
}

function atualizarAluno(botao) {
    let linhaAluno = botao.closest('tr');
    let celulas = linhaAluno.cells;
    let ra = celulas[0].textContent.trim();

    let alunoAtualizado = {
        nome: celulas[1].textContent.trim(),
        nascto: new Date(celulas[2].textContent.trim()).toISOString().split('T')[0] 
    };

    if (!alunoAtualizado.nome || !alunoAtualizado.nascto) {
        exibirMensagem('Erro: Todas as informações são obrigatórias!');
        return;
    }

    fetch(`http://localhost:5000/aluno/${ra}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alunoAtualizado)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage === undefined) {
                celulas[1].removeAttribute('contenteditable');
                celulas[2].removeAttribute('contenteditable');
                exibirMensagem('Aluno atualizado com sucesso');
            } else {
                console.error('Erro SQL:', res.sqlMessage);
                exibirMensagem('Erro ao atualizar aluno!');
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            exibirMensagem('Erro ao conectar com o servidor!');
        });
}

function exibirMensagem(mensagem) {
    const elementoMensagem = document.getElementById('msg');
    elementoMensagem.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 1500);
}