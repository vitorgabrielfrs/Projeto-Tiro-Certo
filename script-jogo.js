const botao = document.getElementById('bt')
const numero = document.getElementById('numero')
const mensagem = document.getElementById('StatusMessage')
const numero_acerto = 67
const borda = document.getElementById('borda-sts')
const gif = document.getElementById('gif')



botao.addEventListener('click', () => {
    const Valor = parseInt(numero.value.trim())
    if (Valor === numero_acerto){
        mensagem.style.visibility = 'visible'
        mensagem.textContent = 'Parabéns, você acertou'
        mensagem.style.color = 'green'
        borda.style.display = 'flex'
        setTimeout(() => {
            borda.style.display = 'none'
            gif.style.display = 'block'
        }, 2000)
        setTimeout(() => {
            gif.style.display = 'none'
        }, 4000)
       
    }
    else{
        if (numero.value.trim() === ''){
            mensagem.style.visibility = 'visible'
            mensagem.textContent = 'Digite um valor válido'
            mensagem.style.color = 'green'
            borda.style.display = 'flex'
            setTimeout(() => {
                borda.style.display = 'none'
            }, 1500)
        }
        else if (Valor > numero_acerto){
            mensagem.style.visibility = 'visible'
            mensagem.textContent = 'O número é menor, tente novamente kkk'
            mensagem.style.color = 'aliceblue'
            mensagem.style.fontWeight = 'bold'
            borda.style.display = 'flex'

            setTimeout(() => {
                borda.style.display = 'none'
            }, 1500)
        }
        else{
            mensagem.style.visibility = 'visible'
            mensagem.textContent = 'O número é maior, tente novamente kkk'
            mensagem.style.color = 'aliceblue'
            mensagem.style.fontWeight = 'bold'
            borda.style.display = 'flex'

            setTimeout(() => {
                borda.style.display = 'none'
            }, 1500)
        }
    }
}) 