const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: cadastro.nome.value,
        descricao: cadastro.descricao.value,
        quantidade: parseInt(cadastro.quantidade.value), // Convertendo quantidade para número
        precocompra: parseFloat(cadastro.precocompra.value), // Convertendo precocompra para número
        precovenda: parseFloat(cadastro.precovenda.value), // Convertendo precovenda para número
        fornecedor: cadastro.fornecedor.value,
    }     
    
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Produto cadastrado com sucesso');
            } else {
                msg3('Erro ao cadastrar produto');
            }
        });
});

fetch('http://localhost:3000/produtos')
    .then(response => response.json())
    .then(produtos => {
        const tabela = document.getElementById('produtos');
        produtos.forEach(produto => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td>${produto.id}</td>
            <td contenteditable="true">${produto.nome}</td>
            <td contenteditable="true">${produto.descricao}</td>
            <td contenteditable="true">${produto.quantidade}</td>
            <td contenteditable="true">${produto.precocompra}</td>
            <td contenteditable="true">${produto.precovenda}</td>
            <td contenteditable="true">${produto.fornecedor}</td>
            <td>
                <button onclick="update(this)">Atualizar</button>
                <button onclick="deletarProduto(${produto.id})">Deletar</button>
            </td>
        `;
            tabela.appendChild(linha);
        });
    });

function deletarProduto(id) {
    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.status)
    .then(status => {
        if (status === 201) {
            msg3('Produto deletado com sucesso');
        } else {
            msg3('Erro ao deletar produto');
        }
    });
}

function update(btn) {
    let linha = btn.closest('tr'); 
    let celulas = linha.cells;
    let id = celulas[0].textContent.trim(); 
    let data = {
        nome: celulas[1].textContent.trim(),
        descricao: celulas[2].textContent.trim(),
        quantidade: parseInt(celulas[3].textContent.trim()), // Convertendo quantidade para número
        precocompra: parseFloat(celulas[4].textContent.trim()), // Convertendo precocompra para número
        precovenda: parseFloat(celulas[5].textContent.trim()), // Convertendo precovenda para número
        fornecedor: celulas[6].textContent.trim(),
    };

    if (!data.nome || !data.descricao || !data.quantidade || !data.precocompra || !data.precovenda || !data.fornecedor) {
        msg3('Erro: Todas as informações são obrigatórias!');
        return;
    }

    fetch(`http://localhost:3000/produtos/${id}`, {
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
            msg3('Produto atualizado com sucesso');
        } else {
            console.error('Erro SQL:', res.sqlMessage);
            msg3('Erro ao atualizar produto!');
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