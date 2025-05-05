#include<stdio.h>
#include<locale.h>

int main(){
	
	setlocale(LC_ALL,"");
    	
    int x, y, z, n;
    
    printf("Precisa descobrir a média de três números? Então vem comigo!\n");
    printf("Digite separadamente os três números que deseja descobrir a média\n");
    scanf("%d %d %d",&x, &y, &z);
    
    n= x + y + z;
    n=n/3;
    
    printf("A média dos numeros que voce informou é %d", n);
    
    return 0;
}
