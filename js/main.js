let carros = JSON.parse(localStorage.getItem('list_carros')) || []

$(document).ready(criaTabela())

$('#marcarEntrada').click( function(){
    placa = $('#placaCarro').val()
    modelo = $('#modeloCarro').val()
    cor = $('#corCarro').val()
    entrada = horario()
    validaPlaca(placa)
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
            let saidaIntHr = (parseInt(carros[i].saida.substring(11, 13)) * 60 )  + (parseInt(carros[i].saida.substring(14, 16)))
            let entradaIntMn = (parseInt(carros[i].entrada.substring(11, 13)) * 60) + (parseInt(carros[i].entrada.substring(14, 16)))
            let tempoPermanencia =  saidaIntHr- entradaIntMn

            
            if(tempoPermanencia < 5){
                carros[i].permanencia = tempoPermanencia
                carros[i].valor = 'R$'+00,00
                console.log('Sem cobrança')
            }else if(tempoPermanencia <= 60){
                console.log(carro)
                carros[i].permanencia = tempoPermanencia 
                carros[i].valor = 'R$'+10,00
                console.log('Valor de R$ 10,00')
            }else{
                carros[i].permanencia = tempoPermanencia
                
                if(tempoPermanencia > 60 && tempoPermanencia <= 120){
                    carros[i].valor = 'R$'+14,00
                }else if(tempoPermanencia > 120 && tempoPermanencia <= 180){
                    carros[i].valor = 'R$'+18,00
                }else if(tempoPermanencia > 180 && tempoPermanencia <= 240){
                    carros[i].valor = 'R$'+22,00
                }
                console.log('O valor é de R$ 14,00 mais 4 reais mais por hora')
            }
                 
            
            
        }
    }
    criaTabela()

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

