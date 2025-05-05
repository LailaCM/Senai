import 'dart:io';

class Candidato {
  String nome;
  int votos;

  Candidato(this.nome, this.votos);
}

void main() {
  List<Candidato> candidatos = [];

  while (true) {
    print('1 - Adicionar candidato');
    print('2 - Excluir candidato');
    print('3 - Mostrar porcentagem de votos');
    print('4 - Sair');
    String? opcao = stdin.readLineSync();

    if (opcao == '1') {
      print('Digite o nome do candidato:');
      String? nome = stdin.readLineSync();
      print('Digite a quantidade de votos:');
      int votos = int.parse(stdin.readLineSync()!);
      candidatos.add(Candidato(nome!, votos));
    } else if (opcao == '2') {
      print('Digite o nome do candidato:');
      String? nome = stdin.readLineSync();
      candidatos.removeWhere((candidato) => candidato.nome == nome);
    } else if (opcao == '3') {
      int totalVotos = candidatos.fold(0, (sum, candidato) => sum + candidato.votos);
      print('Candidatos\tVotos\tPorcentagem');
      for (var candidato in candidatos) {
        double porcentagem = (candidato.votos / totalVotos) * 100;
        print('${candidato.nome}\t${candidato.votos}\t${porcentagem.toStringAsFixed(2)}%');
      }
    } else if (opcao == '4') {
      break;
    } else {
      print('Opção inválida. Tente novamente.');
    }
  }
}