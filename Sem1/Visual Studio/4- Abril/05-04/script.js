function calcularDespesas() {
            var aluguel = parseFloat(document.getElementById('aluguel').value);
            var agua = parseFloat(document.getElementById('agua').value);
            var energia = parseFloat(document.getElementById('energia').value);
            var folhaPagamento = parseFloat(document.getElementById('folhaPagamento').value);
            var impostos = parseFloat(document.getElementById('impostos').value);

            const totalGastos = document.querySelector("h1#totalGastos");
            const mediaGastos = document.querySelector("h1#mediaGastos");
            const estimativaAnual = document.querySelector("h1#estimativaAnual");


            totalGastos.innerHTML = `<p>Total de gastos: R$ ${aluguel + agua + energia + folhaPagamento + impostos}</p>`;
            mediaGastos.innerHTML = `<p>Media de gastos: R$ ${(aluguel + agua + energia + folhaPagamento + impostos)/5}</p>`;
            estimativaAnual.innerHTML = `<p>Estimativa Anual: R$ ${(aluguel + agua + energia + folhaPagamento + impostos) * 12}</p>`;

            // resultadoHTML += "<h3>Média de Gastos:</h3>";
            // resultadoHTML += "<p>R$ " + mediaGastos.toFixed(2) + "</p>";
            // resultadoHTML += "<h3>Estimativa Anual de Gastos:</h3>";
            // resultadoHTML += "<p>R$ " + estimativaAnual.toFixed(2) + "</p>";

            // document.getElementById('resultado').innerHTML = resultadoHTML;
            console.log(totalGastos);
            console.log(mediaGastos);
            console.log(estimativaAnual);
        }