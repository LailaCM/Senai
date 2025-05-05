while True:
    n = input("Digite um número inteiro positivo: ")

    if not n.isdigit():
        print("Não entendeu que o número deve ser um inteiro POSITIVO?")
    else:
        n = int(n)
        if n < 0:
            print("Não entendeu que o número deve ser POSITIVO?")
        else:
            fatorial = 1
            for i in range(1, n + 1):
                fatorial *= i
            print(f"O fatorial de {n} é {fatorial}.")