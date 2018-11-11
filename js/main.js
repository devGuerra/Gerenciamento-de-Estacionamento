let carros = JSON.parse(localStorage.getItem('list_carros')) || []

$(document).ready(criaTabela())

$('#marcarEntrada').click( function(){
    placa = $('#placaCarro').val()
    modelo = $('#modeloCarro').val()
    cor = $('#corCarro').val()
    entrada = horario()
    
    carros.push({ placa, modelo, cor, entrada })
    
    criaTabela()
    saveStorage()
    clear()
})

$('#listaCarros tbody').on('click', 'tr', (function(){
     
    let linhaSelected = $(this).parent().children().index(this)
    let arraySelected = carros[linhaSelected] 

    $('#placaCarro').val(arraySelected.placa)
    $('#modeloCarro').val(arraySelected.modelo)
    $('#corCarro').val(arraySelected.cor)
}))

$('#marcarSaida').click(function(){
    let placaInput = $('#placaCarro').val()
    for( i = 0; i < carros.length; i++){
        if(placaInput == carros[i].placa){
            carros[i].saida = horario()
            console.log(carros[i].entrada.charAt(10, 16) )
        }
    }
    criaTabela()
    saveStorage()
    clear()
})

$('#listaCarros').on('click','#btn-delete',function(){
    
    $(this).closest('tr').remove()
    let apagarLinha =  $(this).closest('tr').index()
    carros.splice(apagarLinha)

    saveStorage()
    criaTabela()
    clear()
    console.log()
})

