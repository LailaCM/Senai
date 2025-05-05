import 'dart:io';

class Funcionario {
  // Atributos
  int id = 0;
  String nome = '';
  double salario = 0.0;
  int? dependentes;

  // Construtor - Entrada de dados
  Funcionario(this.id, this.nome, this.salario, [this.dependentes]);

  // Método de lógica - calcular o salário família
  double salFamilia() {
    return dependentes != null
        ? salario < 2000
            ? dependentes! * 60.0
            : dependentes! * 60.0
        : 0.0;
  }

  // Método para calcular o INSS
  double calcularINSS() {
    if (salario <= 1212.00) {
      return salario * 0.075;
    } else if (salario <= 2427.35) {
      return salario * 0.09;
    } else if (salario <= 3641.03) {
      return salario * 0.12;
    } else {
      return salario * 0.14;
    }
  }

  // Método para calcular o IRPF
  double calcularIRPF() {
    if (salario <= 1903.98) {
      return 0.0;
    } else if (salario <= 2826.65) {
      return salario * 0.075 - 142.80;
    } else if (salario <= 3751.05) {
      return salario * 0.15 - 354.80;
    } else if (salario <= 4664.68) {
      return salario * 0.225 - 636.13;
    } else {
      return salario * 0.275 - 869.36;
    }
  }

  // Método para calcular o salário líquido
  double calcularSalarioLiquido() {
    return salario - calcularINSS() - calcularIRPF() + salFamilia();
  }

  // Método toJSON - Saída de dados
  String toJSON() {
    return '{ "id": $id, "nome": "$nome", "salario": $salario, "salFamilia": ${salFamilia()}, "INSS": ${calcularINSS()}, "IRPF": ${calcularIRPF()}, "salarioLiquido": ${calcularSalarioLiquido()} }';
  }
}

void main() {
  List<Funcionario> funcionarios = [];

  while (true) {
    print('1 - Adicionar funcionário');
    print('2 - Listar funcionários');
    print('3 - Excluir funcionário');
    print('4 - Sair');
    String? opcao = stdin.readLineSync();

    if (opcao == '1') {
      print('Digite o id do funcionário:');
      int id = int.parse(stdin.readLineSync()!);
      print('Digite o nome do funcionário:');
      String? nome = stdin.readLineSync();
      print('Digite o salário do funcionário:');
      double salario = double.parse(stdin.readLineSync()!);
      print('Digite o número de dependentes do funcionário (opcional):');
      String? dependentesStr = stdin.readLineSync();
      int? dependentes = dependentesStr != null && dependentesStr.isNotEmpty ? int.parse(dependentesStr) : null;
      funcionarios.add(Funcionario(id, nome!, salario, dependentes));
    } else if (opcao == '2') {
      print('Funcionários:');
      for (var f in funcionarios) {
        print(f.toJSON());
      }
    } else if (opcao == '3') {
      print('Digite o id do funcionário a ser excluído:');
      int id = int.parse(stdin.readLineSync()!);
      funcionarios.removeWhere((funcionario) => funcionario.id == id);
    } else if (opcao == '4') {
      break;
    } else {
      print('Opção inválida. Tente novamente.');
    }
  }
}