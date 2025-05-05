num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

if num1 > num2:
    print(f"O primeiro número {num1} é maior que o segundo número {num2}.")
elif num1 < num2:
    print(f"O segundo número {num2} é maior que o primeiro número {num1}.")
else:
    print("Os dois números são iguais.")