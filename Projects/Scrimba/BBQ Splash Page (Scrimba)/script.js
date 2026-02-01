let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    // Do something with the event
    console.log("The event is firing!")

let ourFormData = new FormData(event.target)

let userFirstName = ourFormData.get("firstName")
                
let updatedHtmlContent = `
    <h1  class="main-title">Congratulations, ${userFirstName}!</h1>

    <h2 class="main-sub-title">You're on your way to becoming a BBQ Master!</h2>
    
    <footer>We'll never share your information without your permission</footer>
`
let ourMainContent = document.getElementById("Main-Content")

ourMainContent.innerHTML = updatedHtmlContent

})

