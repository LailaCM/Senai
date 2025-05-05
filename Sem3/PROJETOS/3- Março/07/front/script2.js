const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: cadastro.nome.value,
        cpf: cadastro.cpf.value.toString(), // Convertendo cpf para string
        email: cadastro.email.value,
        nasc: new Date(cadastro.nasc.value),
        salario: parseFloat(cadastro.salario.value), // Convertendo salario para float
        endereco: cadastro.endereco.value,
    }     
    
    fetch('http://localhost:3000/funcionarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Funcionário cadastrado com sucesso');
            } else {
                msg3('Erro ao cadastrar funcionário');
            }
        });
});

fetch('http://localhost:3000/funcionarios')
    .then(response => response.json())
    .then(funcionarios => {
        const tabela = document.getElementById('funcionarios');
        funcionarios.forEach(funcionario => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td>${funcionario.id}</td>
            <td contenteditable="true">${funcionario.nome}</td>
            <td contenteditable="true">${funcionario.cpf}</td>
            <td contenteditable="true">${funcionario.email}</td>
            <td contenteditable="true">${new Date(funcionario.nasc).toLocaleDateString('pt-br')}</td>
            <td contenteditable="true">${funcionario.salario}</td>
            <td contenteditable="true">${funcionario.endereco}</td>
            <td>
                <button onclick="update(this)">Atualizar</button>
                <button onclick="deletarFuncionario(${funcionario.id})">Deletar</button>
            </td>
        `;
            tabela.appendChild(linha);
        });
    });

function deletarFuncionario(id) {
    fetch(`http://localhost:3000/funcionarios/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.status)
    .then(status => {
        if (status === 201) {
            msg3('Funcionário deletado com sucesso');
        } else {
            msg3('Erro ao deletar funcionário');
        }
    });
}

function update(btn) {
    let linha = btn.closest('tr'); 
    let celulas = linha.cells;
    let id = celulas[0].textContent.trim(); 
    let data = {
        nome: celulas[1].textContent.trim(),
        cpf: celulas[2].textContent.trim(),
        email: celulas[3].textContent.trim(),
        nasc: celulas[4].textContent.trim(),
        salario: parseFloat(celulas[5].textContent.trim()), // Convertendo salario para float
        endereco: celulas[6].textContent.trim(),
    };

    if (!data.nome || !data.cpf || !data.email || !data.nasc || !data.salario || !data.endereco) {
        msg3('Erro: Todas as informações são obrigatórias!');
        return;
    }

    fetch(`http://localhost:3000/funcionarios/${id}`, {
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
            celulas[4].removeAttribute('contenteditable');
            celulas[5].removeAttribute('contenteditable');
            celulas[6].removeAttribute('contenteditable');
            msg3('Funcionário atualizado com sucesso');
        } else {
            console.error('Erro SQL:', res.sqlMessage);
            msg3('Erro ao atualizar funcionário!');
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