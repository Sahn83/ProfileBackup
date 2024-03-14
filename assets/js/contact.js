/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
   contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_lugonn1', 'template_3r5l7ap','#contact-form','-K8sDq-H03DFffifw')
    .then(() =>  {
        //show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)   

        //clear input field
        contactForm.reset()
    }, () => {
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)