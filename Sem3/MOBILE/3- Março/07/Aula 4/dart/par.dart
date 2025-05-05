main(){
    String total = numero (10);
    print (total);
}

numero (int n){
    if (n % 2 == 0) return 'Par';
    else 
        return 'Ímpar';
}