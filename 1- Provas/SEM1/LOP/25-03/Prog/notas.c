#include <stdio.h>
#include<locale.h>

int main() {
	
	setlocale(LC_ALL,"");
	
	char nome[100];
	int x, y, n;
    
    printf("Quer saber se passou de ano? Ent�o vem comigo!\n");
    printf("Qual o seu nome?\n");
    scanf("%s",&nome);
    printf("Digite separadamente suas notas\n");
    scanf("%d %d",&x, &y);
    
    n= x + y;
    n= n/2;
	
	if (n >= 70) {
			printf("Muito bem %s! Voc� foi aprovado com m�dia %d", nome, n);
		} 
	else {
			printf("Sinto muito %s. Voc� foi reprovado com m�dia %d", nome, n);
	}
	
	return 0;
}
