while True:
    n = input("Digite o número que deseja obter a tabuada de 1 à 10 (ou 'E' para sair) ")

    if n.upper() == 'E':
        break

    n = int(n)

    if n in range(1,11):
        for i in range(1, 11):
            print(f"{n} x {i} = {n * i}")
    else:
        print(f"Que parte do '1 à 10' você não entendeu?")