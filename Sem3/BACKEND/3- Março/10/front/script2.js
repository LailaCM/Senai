const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: cadastro.nome.value,
        especialidade: cadastro.especialidade.value
    }
    fetch('http://localhost:5000/professor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Professor cadastrado com sucesso');
            } else {
                msg3('Erro ao cadastrar professor');
            }
        });
});

fetch('http://localhost:5000/professor')
    .then(response => response.json())
    .then(professor => {
        const tabela = document.getElementById('professor');
        professor.forEach(professor => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td>${professor.id}</td>
            <td contenteditable="true">${professor.nome}</td>
            <td contenteditable="true">${professor.especialidade}</td>
            <td>
                <button onclick="update(this)">Atualizar</button>
                <button onclick="deletarProfessor(${professor.id})">Deletar</button>
            </td>
        `;
            tabela.appendChild(linha);
        });
    });

function deletarProfessor(id) {
    fetch(`http://localhost:5000/professor/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.status)
    .then(status => {
        if (status === 204) {
            msg3('Professor deletado com sucesso');
        } else {
            msg3('Erro ao deletar professor');
        }
    });
}

function update(btn) {
    let linha = btn.closest('tr'); 
    let celulas = linha.cells;
    let id = celulas[0].textContent.trim(); 

    let data = {
        nome: celulas[1].textContent.trim(),
        especialidade: celulas[2].textContent.trim(),
    };

    if (!data.nome || !data.especialidade) {
        msg3('Erro: Todas as informações são obrigatórias!');
        return;
    }

    fetch(`http://localhost:5000/professor/${id}`, {
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
            msg3('Professor atualizado com sucesso');
        } else {
            console.error('Erro SQL:', res.sqlMessage);
            msg3('Erro ao atualizar professor!');
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