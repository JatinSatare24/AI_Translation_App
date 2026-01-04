import OpenAI from "openai"

const openAI = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

const translateButton = document.getElementById('translate')

translateButton.addEventListener('click', async () => {

    const userTextareaInput = document.getElementById('userinput')
    const selectedRadio = document.querySelector('input[name="language"]:checked')

    if (!selectedRadio || !userTextareaInput.value) {
        document.getElementById('error').textContent = "Please provide text and select a language! 🦜"
        return
    }

    const selectedLang = selectedRadio.value

    const messages = [
        {
            role: 'system',
            content: 'You are an expert polyglot'
        },

        {
            role: 'user',
            content: `translate the given ${userTextareaInput.value} by user to ${selectedLang} as it is. No extra words`
        }

    ]

    const response = await openAI.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages
    })

    const aiResult = response.choices[0].message.content;

    document.getElementById('main-body').style.display = 'none'
    document.getElementById('main-container').innerHTML =
        `
     <div id="main-body-render">
                <p>Original Text👇</p>
                <textarea name="userinput" id="userinput">${userTextareaInput.value}</textarea>
                <p>Your Translation👇</p>
                <textarea name="AiTranslation" id="AiTranslation">${aiResult}</textarea>
                <button id="startover">Start Over</button>
    </div>
    `

    document.getElementById('startover').addEventListener('click', () => {
        window.location.reload()
    })
})



