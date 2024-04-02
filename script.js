// let foi introduzido no JS mas recentes, guanabara diz ser o mesmo que var e que tem diferença no escopo (facilita o escopo)
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    // significa: se ini ou fim ou passo, o value tenha um comprimento igual a 0 (quantas letras tem dentro)
    //  window.alert('[ERRO] FALTAM DADOS!')  // foi retirado no final do video [ao nao digitar alguma caixa aparecia esse alerta]
        res.innerHTML = 'Impossivel contar!'  // mensagem que aparece quando alguma caixa não é preenchida
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)              // pega o value dentro de ini e transforma(converte) em Number
        let f = Number(fim.value)              // pega o value dentro de fim e transforma(converte) em Number
        let p = Number(passo.value)            // pega o value dentro de passo e transforma(converte) em Number
        if (p <= 0) {                          // se o passo for menor ou igual a 0 (pois antes ele travava quando colocava passo 0)
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1                              // entao o p passa a ser 1 (caso seja 0 ou numero negativo)
        }
        if (i < f) {                           // se o valor do inicio for menor que o valor de fim (pois nao funcionava tras para frente)
            for (let c = i; c <= f; c += p) {  // c (contador)    i (inicio)    f (fim)    p (passo)
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {                               // senao (que seria o codigo de contar do maior para o menor)
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`           // lembrando que o codigo de emoji só funciona dentro de crase
    }
}
/*
{linha 22}  para (contador começa no inicio; enquanto contador for menor ou igual ao fim; contador recebe ele mesmo mais o passo) faça
{linha 26}  para (contador começa no inicio; enquanto contador for maior ou igual a f; contador vai perder o passo) faça

{linha 23}       no java script para adicionar o emoji ex: U+1F449 tiramos o U+ e colocamos \u{ } que ficaria \u{1F449}
{linha 23 e 27}  res[que seria Contando: ] +=(concatenação) e o resultado do contador
*/