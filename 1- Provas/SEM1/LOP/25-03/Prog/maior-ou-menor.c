#include <stdio.h>
#include<locale.h>

int main() {
	
	setlocale(LC_ALL,"");
	
    int num_numeros, i, maior, menor;
    int numero;
    
    printf("Quer saber qual num�ro � maior e qual � menor?Vamos nessa!\n");
    printf("Qual � a quantidade de n�meros que deseja comparar?\n");
    scanf("%d", &num_numeros);

    printf("Digite o %d� n�mero: ", 1);
    scanf("%d", &maior);

    menor = maior;

    for(i = 2; i <= num_numeros; i++) {
        printf("Digite o %d� n�mero: ", i);
        scanf("%d", &numero);

        if(numero > maior) {
            maior = numero;
        }

        if(numero < menor) {
            menor = numero;
        }
    }

    printf("O maior n�mero informado foi: %d\n", maior);
    printf("O menor n�mero informado foi: %d\n", menor);

    return 0;
}
