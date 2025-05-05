const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: cadastro.nome.value,
        cpf: cadastro.cpf.value,
        nascimento: cadastro.nascimento.value
    }
    fetch('http://localhost:4000/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Cliente cadastrado com sucesso');
            } else {
                msg3('Erro ao cadastrar cliente');
            }
        });
});

fetch('http://localhost:4000/clientes')
    .then(response => response.json())
    .then(clientes => {
        const tabela = document.getElementById('clientes');
        clientes.forEach(cliente => {
            const data = new Date(cliente.nascimento);
            const dataFormatada = data.toLocaleDateString('pt-BR').replace(/\//g, '/');
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td>${cliente.id_cliente}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.cpf}</td>
            <td>${dataFormatada}</td>
            <td>
                <button onclick="editarCliente(${cliente.id_cliente})">Editar</button>
                <button onclick="deletarCliente(${cliente.id_cliente})">Deletar</button>
            </td>
        `;
            tabela.appendChild(linha);
        });
    });

function msg3(mensagem) {
    msg = document.getElementById('msg')
    msg.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}

function deletarCliente(id) {
    fetch(`http://localhost:4000/clientes/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.status)
    .then(status => {
        if (status === 201) {
            msg3('Cliente deletado com sucesso');
        } else {
            msg3('Erro ao deletar cliente');
        }
    });
}

// Função para editar um cliente
function editarCliente(id) {
    fetch(`http://localhost:4000/clientes/${id}`)
        .then(response => response.json())
        .then(cliente => {
            cadastro.nome.value = cliente.nome;
            cadastro.cpf.value = cliente.cpf;
            cadastro.nascimento.value = cliente.nascimento;

            cadastro.onsubmit = (event) => {
                event.preventDefault();
                const corpo = {
                    nome: cadastro.nome.value,
                    cpf: cadastro.cpf.value,
                    nascimento: cadastro.nascimento.value
                };

                fetch(`http://localhost:4000/clientes/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(corpo)
                })
                .then(response => response.status)
                .then(status => {
                    if (status === 200) {
                        msg3('Cliente atualizado com sucesso');
                    } else {
                        msg3('Erro ao atualizar cliente');
                    }
                });
            };
        });
}
