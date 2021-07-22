const getMessages = () => {
    const passcode = document.querySelector("#passcode")
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()
        let there = false
        for (let key in data) {
            if (key === passcode.value) {
                console.log("match found")
                there = true
                const message = document.querySelector("#message")
                message.innerHTML = data[key]
            }
        }
        if (!there) {
            const message = document.querySelector("#message")
            message.innerHTML = "ERROR: No Message Found"
        }
    })
}