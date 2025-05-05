#include<stdio.h>
#include<locale.h>

int main(){
	
	setlocale(LC_ALL,"");
    	
    int x, y, maior;
    
    printf("Precisa de ajuda para somar? Então vamos nessa!\n");
    printf("Digite separadamente os dois números que deseja somar\n");
    scanf("%d %d",&x, &y);
    printf("A soma dos numeros que voce informou é %d", x + y);
    
    return 0;
}
