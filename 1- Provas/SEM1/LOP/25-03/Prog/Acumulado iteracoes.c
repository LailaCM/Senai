#include<stdio.h> 
int main(){
	int i, iteracoes;
	float acumulado = 0, valor;
	printf("Digite dois números que deseja somar");
	scanf("%d", &iteracoes);
	
	for(i = 1; i<=iteracoes; i++){
		printf("Valor [%d]:",i);
		scanf("%f", &valor);
		acumulado += valor;
		}
		printf("o total é = %.2f ",acumulado);
	return 0;
}
