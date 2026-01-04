const userTextareaInput = document.getElementById('userinput')
const translateButton = document.getElementById('translate')

translateButton.addEventListener('click', () => {
    document.getElementById('main-body').style.display = 'none'
    document.getElementById('main-container').innerHTML =
     `
     <div id="main-body-render">
                <p>Original Text👇</p>
                <textarea name="userinput" id="userinput"></textarea>
                <p>Your Translation👇</p>
                <textarea name="AiTranslation" id="AiTranslation"></textarea>
                <button>Start Over</button>
    </div>
    `
})