import 'dart:io';

class Paciente {
  String nome;
  int idade;
  String sexo;
  bool apto;

  Paciente(this.nome, this.idade, this.sexo) : apto = _verificarAptidao(idade, sexo);

  static bool _verificarAptidao(int idade, String sexo) {
    if (sexo.toLowerCase() == 'masculino' && idade >= 14 && idade <= 50) {
      return true;
    } else if (sexo.toLowerCase() == 'feminino' && idade >= 20 && idade <= 40) {
      return true;
    }
    return false;
  }
}

void main() {
  List<Paciente> pacientes = [];

  while (true) {
    print('1 - Adicionar paciente');
    print('2 - Listar pacientes aptos');
    print('3 - Listar pacientes não aptos');
    print('4 - Sair');
    String? opcao = stdin.readLineSync();

    if (opcao == '1') {
      print('Digite o nome do paciente:');
      String? nome = stdin.readLineSync();
      print('Digite a idade do paciente:');
      int idade = int.parse(stdin.readLineSync()!);
      print('Digite o sexo do paciente (masculino/feminino):');
      String? sexo = stdin.readLineSync();
      pacientes.add(Paciente(nome!, idade, sexo!));
    } else if (opcao == '2') {
      print('Pacientes aptos:');
      for (var paciente in pacientes) {
        if (paciente.apto) {
          print('${paciente.nome}, ${paciente.idade} anos, ${paciente.sexo}');
        }
      }
    } else if (opcao == '3') {
      print('Pacientes não aptos:');
      for (var paciente in pacientes) {
        if (!paciente.apto) {
          print('${paciente.nome}, ${paciente.idade} anos, ${paciente.sexo}');
        }
      }
    } else if (opcao == '4') {
      break;
    } else {
      print('Opção inválida. Tente novamente.');
    }
  }
}