import matplotlib.pyplot as plt

# Dados
produtos = ['Arroz', 'Feijão', 'Milho', 'Trigo', 'Soja']
precos = [5.4, 6.8, 3.2, 4.28, 3.99]
quantidades = [5000, 6000, 7000, 4500, 2800]
total = [27000, 40800, 22400, 19260, 11172]

# Gráfico de Coluna
plt.figure(figsize=(10, 6))
plt.bar(produtos, total, color='skyblue')
plt.xlabel('Produtos')
plt.ylabel('Total')
plt.title('Total de vendas por produto')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Gráfico de Linha
plt.figure(figsize=(10, 6))
plt.plot(produtos, quantidades, marker='o', color='darkblue')
plt.xlabel('Produtos')
plt.ylabel('Quantidades')
plt.title('Quantidades vendidas por produto')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Define the colors for each slice
cor_fatia= ['skyblue', 'mediumpurple', 'indigo', 'steelblue', 'blueviolet']

# Gráfico de Pizza
plt.figure(figsize=(8, 8))
plt.pie(precos, labels=produtos, autopct='%1.1f%%', startangle=140, colors=cor_fatia)
plt.title('Distribuição de preços dos produtos')
plt.show()

# Gráfico de Barras
plt.figure(figsize=(10, 6))
plt.barh(produtos, precos, color='darkslateblue')
plt.xlabel('Preços')
plt.ylabel('Produtos')
plt.title('Preços dos produtos')
plt.tight_layout()
plt.show()
