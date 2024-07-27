# Projeto de E-commerce

Este projeto é uma aplicação de e-commerce desenvolvida utilizando React, TypeScript, e várias bibliotecas para gerenciar formulários, rotas, validação e ícones. A aplicação permite a navegação de produtos, pesquisa, filtragem e compra.

## Bibliotecas Utilizadas

- **React**: Biblioteca principal para construção da interface de usuário.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **react-hook-form**: Biblioteca para gerenciar formulários de maneira simples e performática.
- **zod**: Biblioteca para validação e criação de esquemas de dados.
- **react-router-dom**: Biblioteca para gerenciamento de rotas na aplicação React.
- **lucide-react**: Biblioteca de ícones para React.
- **Bootstrap**: Framework CSS para desenvolvimento responsivo e estilização rápida.

## Como Executar o Projeto

Siga os passos abaixo para clonar o repositório e executar o projeto localmente:

1. Clone o repositório:

   ```sh
   git clone https://github.com/vicentesantos13/liftersshop
   ```
2. Navegue até o diretório do projeto:

   ```sh
   cd seu-repositorio
   ```
3. Instale as dependências:

   ```sh
   npm install
   ```
4. Execute o projeto:

   ```sh
   npm start
   ```

O projeto estará disponível em `http://localhost:3000`.

## Arquitetura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```
src/
├── components/
│   ├── home/
│   │   └── Filters.tsx          # Componente de filtros
│   ├── layout/
│   │   ├── Header.tsx           # Componente de cabeçalho
│   │   └── Layout.tsx           # Componente de layout principal
│   └── cart.tsx                 # Componente de carrinho
├── context/
│   └── context.tsx              # Contexto global da aplicação
├── pages/
│   ├── Checkout.tsx             # Página de checkout
│   ├── Home.tsx                 # Página inicial
│   └── ProductDetails.tsx       # Página de detalhes do produto
├── schemas/
│   └── creditCardSchema.ts      # Esquema de validação de cartão de crédito
├── services/
│   └── fetchProducts.ts         # Função para buscar produtos
├── types/
│   ├── cartProducts.ts          # Tipos e interfaces TypeScript para produtos no carrinho
│   └── products.ts              # Tipos e interfaces TypeScript para produtos
```

### Descrição das Pastas

- **components**: Contém componentes reutilizáveis organizados por funcionalidade.
  - **home**: Contém componentes específicos da página inicial, como filtros.
  - **layout**: Contém componentes de layout, como cabeçalho e layout principal.
  - **cart.tsx**: Componente do carrinho de compras.
- **context**: Contém o contexto global da aplicação.
- **pages**: Contém componentes de páginas da aplicação.
  - **Checkout.tsx**: Página de checkout.
  - **Home.tsx**: Página inicial.
  - **ProductDetails.tsx**: Página de detalhes do produto.
- **schemas**: Contém esquemas de validação.
  - **creditCardSchema.ts**: Esquema de validação de cartão de crédito.
- **services**: Contém funções de serviços e chamadas de API.
  - **fetchProducts.ts**: Função para buscar produtos.
- **types**: Contém definições de tipos TypeScript utilizados no projeto.
  - **cartProducts.ts**: Tipos e interfaces para produtos no carrinho.
  - **products.ts**: Tipos e interfaces para produtos.
