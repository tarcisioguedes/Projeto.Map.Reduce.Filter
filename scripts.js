const lista = document.querySelector('ul')
const botãoMostrarTudo = document.querySelector('.botãoMostrarTudo')
const botãoMapear = document.querySelector('.botãoMapear') 
const botãoSomarTudo = document.querySelector('button:nth-child(3)')
const botãoFiltrar = document.querySelector('button:nth-child(4)') // Seleciona o botão do Filter

let descontoAplicado = false 

function mostrarTudo(arrayDeProdutos) {
    let minhaLista = ''
    descontoAplicado = false // Resetamos a trava sempre que mostramos tudo

    arrayDeProdutos.forEach((produto) => {
        minhaLista += `
        <li>  
            <img src="${produto.src}" alt="${produto.name}">
            <p>${produto.name}</p>
            <p class="item-preço">R$ ${produto.price.toFixed(2).replace('.', ',')}</p>
        </li>
        `
    })

    lista.innerHTML = minhaLista
}

function aplicarDesconto() {
    if (descontoAplicado) return 

    const novosPreços = menuOptions.map((produto) => ({
        ...produto, 
        price: produto.price * 0.9 
    }))

    descontoAplicado = true 
    mostrarTudo(novosPreços)
}

function somarTudo() {
    const valorTotal = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    lista.innerHTML = `
        <li>
            <p style="font-size: 18px; color: #79cb15; text-align: center;">
                O valor total dos itens é:<br> 
                <strong>R$ ${valorTotal.toFixed(2).replace('.', ',')}</strong>
            </p>
        </li>
    `
}

function filtrarVeganos() {
    // O filter cria um novo array apenas com os itens que são veganos
    const produtosVeganos = menuOptions.filter((produto) => produto.vegan === true)

    mostrarTudo(produtosVeganos)
}

// Eventos
botãoMostrarTudo.addEventListener('click', () => mostrarTudo(menuOptions))
botãoMapear.addEventListener('click', aplicarDesconto)
botãoSomarTudo.addEventListener('click', somarTudo)
botãoFiltrar.addEventListener('click', filtrarVeganos)

