import 'dart:io';
import 'dart:math';
main(){
    print('Digite um número inteiro:');
    String? n1 = stdin.readLineSync();
    print('Digite outro número inteiro:');
    String? n2 = stdin.readLineSync();
    if(n1 != null && n2 != null){
        int num1 = int.parse(n1);
        int num2 = int.parse(n2);
        num result = pow(num1, num2);
        print('O resultado da potência é ${result}');

    }
}