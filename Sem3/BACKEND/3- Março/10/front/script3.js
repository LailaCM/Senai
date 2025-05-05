const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: cadastro.nome.value,
        ano: parseInt(cadastro.ano.value)
    }
    fetch('http://localhost:5000/turma', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Turma cadastrada com sucesso');
            } else {
                msg3('Erro ao cadastrar turma');
            }
        });
});

fetch('http://localhost:5000/turma')
    .then(response => response.json())
    .then(turma => {
        const tabela = document.getElementById('turma');
        turma.forEach(turma => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td>${turma.id}</td>
            <td contenteditable="true">${turma.nome}</td>
            <td contenteditable="true">${turma.ano}</td>
            <td>
                <button onclick="update(this)">Atualizar</button>
                <button onclick="deletarTurma(${turma.id})">Deletar</button>
            </td>
        `;
            tabela.appendChild(linha);
        });
    });

function deletarTurma(id) {
    fetch(`http://localhost:5000/turma/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.status)
    .then(status => {
        if (status === 204) {
            msg3('Turma deletada com sucesso');
        } else {
            msg3('Erro ao deletar turma');
        }
    });
}

function update(btn) {
    let linha = btn.closest('tr'); 
    let celulas = linha.cells;
    let id = celulas[0].textContent.trim(); 

    let data = {
        nome: celulas[1].textContent.trim(),
        ano: parseInt(celulas[2].textContent.trim()),
    };

    if (!data.nome || isNaN(data.ano)) {
        msg3('Erro: Todas as informações são obrigatórias e o ano deve ser um número válido!');
        return;
    }

    fetch(`http://localhost:5000/turma/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if (res.sqlMessage === undefined) {
            celulas[1].removeAttribute('contenteditable');
            celulas[2].removeAttribute('contenteditable');
            msg3('Turma atualizada com sucesso');
        } else {
            console.error('Erro SQL:', res.sqlMessage);
            msg3('Erro ao atualizar turma!');
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        msg3('Erro ao conectar com o servidor!');
    });
}

function msg3(mensagem) {
    const msg = document.getElementById('msg');
    msg.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 1500);
}