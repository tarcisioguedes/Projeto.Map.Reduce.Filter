# Master Class em Arrays com JavaScript

> *Transformando dados em um cardápio interativo através do poder das funções de alta ordem (`Higher-Order Functions`) no JavaScript.*

---

## 💡 Sobre o Projeto

É uma aplicação web interativa criada para demonstrar na prática o poder e a elegância dos principais métodos de iteração de arrays do JavaScript moderno (**ES6+**).

Simulando a interface de um cardápio digital de uma hamburgueria artesanal, a aplicação permite ao usuário manipular dinamicamente uma lista de produtos em tempo real — calculando descontos, filtrando preferências alimentares e somando valores totais com apenas um clique.

---

### 🌐 Teste a Aplicação Online

A aplicação está publicada e pronta para ser testada diretamente no seu navegador! 

👉 **[Clique aqui para abrir a aplicação no GitHub Pages](https://tarcisioguedes.github.io/Projeto.Map.Reduce.Filter/)**

---

## ⚡ Métodos de Array em Ação

| Método | Botão na Interface | O que faz por baixo dos panos? |
| :--- | :--- | :--- |
| **`forEach`** | **Mostrar Tudo** | Itera sobre a lista de produtos e injeta dinamicamente o HTML na página para renderizar cada card. |
| **`map`** | **Mapear (Desconto)** | Cria um novo array aplicando **10% de desconto** em cada item do menu sem mutar a lista original. |
| **`reduce`** | **Somar Tudo** | Acumula os valores de todos os itens do cardápio, retornando o valor total somado em uma única linha informativa. |
| **`filter`** | **Filtrar (Veganos)** | Filtra o array mantendo apenas as opções onde `vegan: true`, ideal para buscas personalizadas. |

---

## 🛠️ Tecnologias & Ferramentas

- **HTML5**: Estrutura semântica para renderização dinâmica via DOM.
- **CSS3**: Layout moderno com **CSS Grid** e **Flexbox**, efeitos visuais e estados de `:hover`.
- **JavaScript (ES6+)**:
  - *Higher-Order Functions* (`map`, `filter`, `reduce`, `forEach`).
  - *Template Literals* para injeção fluida de componentes HTML.
  - Formatação monetária BRL com tratamento de `toFixed()` e `replace()`.

---

## 🧠 Desafios e Aprendizados Técnicos

1. **Imutabilidade**: Garantir que as transformações de dados (como a aplicação de descontos) gerassem novos arrays sem alterar os dados de origem.
2. **Manipulação Dinâmica do DOM**: Reduzir acoplamento e re-renderizar a lista na tela de forma rápida e performática.
3. **UX & Formatação de Moeda**: Tratar números no JavaScript para garantir a exibição no padrão correto de moeda brasileira (`R$ 00,00`).

---

## 📂 Estrutura do Arquivo

```text
├── 📁 img/              # Imagens dos lanches e bebidas
├── 📄 index.html        # Estrutura base da aplicação
├── 📄 styles.css        # Estilização e grid layout
├── 📄 products.js       # Base de dados (Array de Objetos)
└── 📄 scripts.js        # Regras de negócio e métodos funcionais
