#include<stdio.h>
#include<locale.h>

int main(){
	
	setlocale(LC_ALL,"");
    	
    int x, y, maior;
    
    printf("Precisa de ajuda para somar? Ent�o vamos nessa!\n");
    printf("Digite separadamente os dois n�meros que deseja somar\n");
    scanf("%d %d",&x, &y);
    printf("A soma dos numeros que voce informou � %d", x + y);
    
    return 0;
}
