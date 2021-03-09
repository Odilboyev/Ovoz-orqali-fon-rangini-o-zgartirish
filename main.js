const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new speechRecognition 
recognition.lang = 'uz-UZ'

microphone.addEventListener('click', () => {
    microphone.textContent = 'gapiravering!'
    recognition.start()
})

recognition.onresult = (event) => {
    let natija = event.results[0][0].transcript
    microphone.textContent = 'Ovoz yozish'
    console.log(natija);

    if(natija == 'qizil'){
        document.querySelector('body').style.backgroundColor = '#7c0000'
    } else if (natija == 'yashil') {
        document.querySelector('body').style.background = '#26ff00'
    }  else if (natija == "kok" || natija == "kop") {
        document.querySelector('body').style.background = '#00205a'
    } else if (natija == "sariq") {
        document.querySelector('body').style.background = '#e7e700'
    } else if (natija == "pushti") {
        document.querySelector('body').style.background = 'pink'
    } else if (natija == "qora") {
        document.querySelector('body').style.background = '#171717'
    }



}