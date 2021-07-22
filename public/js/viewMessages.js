const getMessages = () => {
    const passcode = document.querySelector("#passcode")
    
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()
        let there = false
        console.log(data)
        for (let key in data) {
            if (data[key].passcode === passcode.value) {
                console.log("match found")
                there = true
                const message = document.querySelector("#message")
                message.innerHTML = data[key].message
            }
        }
        if (!there) {
            const message = document.querySelector("#message")
            message.innerHTML = "ERROR: No Message Found"
        }
    })
}