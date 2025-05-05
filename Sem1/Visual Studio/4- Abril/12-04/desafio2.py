import matplotlib.pyplot as plt

def calcular_parcela(valor_financiamento, taxa_juros, meses):
    # Calcula o valor da parcela e a amortização mensal
    amortizacao = valor_financiamento / meses
    valor_parcela = valor_financiamento * (1 + taxa_juros/100)*meses / meses
    return valor_parcela, amortizacao

def tabela_sac(valor_financiamento, taxa_juros, meses):
    # Calcula a tabela SAC (Sistema de Amortização Constante)
    saldo_devedor = valor_financiamento
    amortizacao = valor_financiamento / meses
    parcelas = []

    for i in range(1, meses + 1):0
        juros = saldo_devedor * taxa_juros
        valor_parcela = amortizacao + juros
        saldo_devedor -= amortizacao
        parcelas.append((i, valor_parcela, saldo_devedor))
    
    return parcelas

def grafico_parcelas(parcelas):
    # Gera o gráfico das parcelas ao longo do tempo
    meses = [parcela[0] for parcela in parcelas]
    valores = [parcela[1] for parcela in parcelas]

    plt.figure(figsize=(10, 6))
    plt.plot(meses, valores, marker='o', color='blue')
    plt.title('Valor das parcelas ao longo do tempo (SAC)')
    plt.xlabel('Mês')
    plt.ylabel('Valor da Parcela')
    plt.grid(True)
    plt.xticks(range(1, len(meses) + 1))
    plt.show()

def main():
    # Mensagem de boas-vindas e solicitação de entrada ao usuário
    print("Bem-vindo ao calculador de financiamento!")
    valor_financiamento = float(input("Digite o valor do financiamento: "))
    taxa_juros = float(input("Digite a taxa de juros ao mês (em decimal): "))
    meses = int(input("Digite a quantidade de meses para pagar: "))

    # Calcula o valor da parcela e a amortização
    valor_parcela, amortizacao = calcular_parcela(valor_financiamento, taxa_juros, meses)
    print(f"\nValor da parcela: R${valor_parcela:.2f}")
    print(f"Montante final a ser pago: R${amortizacao:.2f}")

    # Gera e exibe a tabela SAC de amortização
    sac = tabela_sac(valor_financiamento, taxa_juros, meses)
    print("\nTabela SAC de amortização:")
    print("Mês | Parcela | Saldo Devedor")
    for parcela in sac:
        print(f"{parcela[0]} | R${parcela[1]:.2f} | R${parcela[2]:.2f}")

    # Gera e exibe o gráfico das parcelas ao longo do tempo
    grafico_parcelas(sac)

if __name__ == "__main__":
    main()


