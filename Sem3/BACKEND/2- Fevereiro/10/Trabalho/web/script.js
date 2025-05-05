function msg3(mensagem) {
    msg = document.getElementById('msg')
    msg.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}
const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        telefone: cadastro.telefone.value,
        nome: cadastro.nome.value,
        obs: cadastro.obs.value
    }
    fetch('http://localhost:4000/telefones', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Telefone cadastrado com sucesso');
            } else {
                msg3('Erro ao cadastrar telefone');
            }
        });
});

fetch('http://localhost:4000/telefones')
    .then(response => response.json())
    .then(telefones => {
        const tabela = document.getElementById('telefones');
        telefones.forEach(telefone => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td>${telefone.telefone_id}</td>
            <td contenteditable="true">${telefone.telefone}</td>
            <td contenteditable="true">${telefone.nome}</td>
            <td contenteditable="true">${telefone.obs}</td> 
            <td>
                <button onclick="update(this)">Atualizar</button>
                <button onclick="deletarTelefone(${telefone.telefone_id})">Deletar</button>
            </td>
        `;
            tabela.appendChild(linha);
        });
    });

function deletarTelefone(id) {
    fetch(`http://localhost:4000/telefones/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.status)
    .then(status => {
        if (status === 201) {
            msg3('Telefone deletado com sucesso');
        } else {
            msg3('Erro ao deletar telefone');
        }
    });
}

function update(btn) {
    let linha = btn.closest('tr'); 
    let celulas = linha.cells;
    let id = celulas[0].textContent.trim(); 

    let data = {
        telefone: celulas[1].textContent.trim(),
        nome: celulas[2].textContent.trim(),
        obs: celulas[3].textContent.trim()
    };

    if (!data.telefone || !data.nome) {
        msg3('Erro: Telefone e Nome são obrigatórios!');
        return;
    }

    fetch(`http://localhost:4000/telefones/${id}`, {
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
            celulas[3].removeAttribute('contenteditable');
            msg3('Telefone atualizado com sucesso');
        } else {
            console.error('Erro SQL:', res.sqlMessage);
            msg3('Erro ao atualizar telefone!');
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        msg3('Erro ao conectar com o servidor!');
    });
}

