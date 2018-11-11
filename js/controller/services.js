const horario = function(){
    let dataAtual = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'}
    let today = new Date()
    return today.toLocaleDateString('pt-BR', dataAtual)
}

function saveStorage(){
    localStorage.setItem('list_carros', JSON.stringify(carros))
}

function clear(){
    $('#modeloCarro').val('')
    $('#corCarro').val('')
    $('#placaCarro').val('').focus()
}

function criaTabela(){
    $('#listaCarros tbody').html('')
    for(carro of carros){
        $('#listaCarros table:last-child').append('<tr></tr>')
        $('#listaCarros tr:last').append('<td></td>')
        $('#listaCarros td:last').text(carro.placa)
        $('#listaCarros tr:last').append('<td></td>')
        $('#listaCarros td:last').text(carro.modelo)
        $('#listaCarros tr:last').append('<td></td>')
        $('#listaCarros td:last').text(carro.cor)
        $('#listaCarros tr:last').append('<td></td>')
        $('#listaCarros td:last').text(carro.entrada)
        $('#listaCarros tr:last').append('<td></td>')
        $('#listaCarros td:last').text(carro.saida || '-')
        $('#listaCarros tr:last').append('<td></td>')
        $('#listaCarros td:last').append('<button type="submit" id="btn-delete"></button>')
        $('#listaCarros button:last').text('Apagar')
    }
}

function tempoPermanencia(entrada, saida){
    return saida - entrada
}