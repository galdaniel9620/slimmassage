const reply = document.querySelector("#reply")
const toName = document.querySelector("#toName")
const fromName = document.querySelector("#fromName")
const msg = document.querySelector("#msg")
const btn = document.querySelector(".send-text")

function sendMail(params) {
    var tempParams = {
        reply_to: reply.value,
        to_name: toName.value,
        from_name: fromName.value,
        message: msg.value,
    }

    emailjs.send('gmail', 'slimmassage', tempParams)
        .then(function (res) {
            console.log("success", res.status)
        })
}

