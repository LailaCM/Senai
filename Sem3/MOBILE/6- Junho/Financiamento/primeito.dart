import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(MaterialApp(home: FinanciamentoSemPacote()));
}

class FinanciamentoSemPacote extends StatefulWidget {
  @override
  _FinanciamentoSemPacoteState createState() => _FinanciamentoSemPacoteState();
}

class _FinanciamentoSemPacoteState extends State<FinanciamentoSemPacote> {
  final valorController = TextEditingController();
  final taxaController = TextEditingController();
  final parcelasController = TextEditingController();
  final taxasExtrasController = TextEditingController();

  double valorTotal = 0.0;
  double valorParcela = 0.0;
  double valorPrincipal = 0.0;
  double valorJuros = 0.0;
  double valorTaxas = 0.0;

  void calcularFinanciamento() {
    final double? valor = double.tryParse(valorController.text);
    final double? taxa = double.tryParse(taxaController.text);
    final int? parcelas = int.tryParse(parcelasController.text);
    final double? taxasExtras = double.tryParse(taxasExtrasController.text);

    if (valor != null &&
        taxa != null &&
        parcelas != null &&
        taxasExtras != null) {
      double i = taxa / 100;
      double pmt = valor * i / (1 - (1 / pow(1 + i, parcelas)));
      double totalSemTaxas = pmt * parcelas;

      setState(() {
        valorPrincipal = valor;
        valorJuros = totalSemTaxas - valor;
        valorTaxas = taxasExtras;
        valorTotal = totalSemTaxas + taxasExtras;
        valorParcela = valorTotal / parcelas;
      });

      showDialog(
        context: context,
        builder:
            (_) => AlertDialog(
              title: Text('Resultado do Financiamento'),
              content: Text(
                'Valor total: R\$ ${valorTotal.toStringAsFixed(2)}\n'
                'Parcela mensal: R\$ ${valorParcela.toStringAsFixed(2)}',
              ),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text('OK'),
                ),
              ],
            ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.brown[50],
      appBar: AppBar(
        backgroundColor: Colors.brown[800],
        title: Text('Simulador de Financiamento'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Valor do financiamento:', style: TextStyle(fontSize: 16)),
            TextField(
              controller: valorController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(hintText: 'Digite o valor'),
            ),
            SizedBox(height: 16),
            Text('Taxa de juros ao mês (%):', style: TextStyle(fontSize: 16)),
            TextField(
              controller: taxaController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(hintText: 'Digite a taxa'),
            ),
            SizedBox(height: 16),
            Text('Número de parcelas:', style: TextStyle(fontSize: 16)),
            TextField(
              controller: parcelasController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(hintText: 'Digite as parcelas'),
            ),
            SizedBox(height: 16),
            Text('Demais taxas e custos:', style: TextStyle(fontSize: 16)),
            TextField(
              controller: taxasExtrasController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(hintText: 'Digite as taxas extras'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              style: ElevatedButton.styleFrom(backgroundColor: Colors.brown),
              onPressed: calcularFinanciamento,
              child: Text('Calcular Financiamento'),
            ),
          ],
        ),
      ),
    );
  }
}
