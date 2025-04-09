let btn = document.querySelector(".new")
let cards = document.querySelector(".card-ota")
btn.addEventListener("click", ()=>{

    fetch("https://randomuser.me/api/")
    .then(tushunarsiz_narsa => tushunarsiz_narsa.json())
    .then(tushunarli_narsa => {
        cards.innerHTML = ''
        let card = document.createElement("div")
        card.classList.add("card")
        let qisqa = tushunarli_narsa.results[0]
        card.innerHTML = ` <img src="${qisqa.picture.large}" alt="Profile" class="profile-img">
            <div class="name">${qisqa.name.first} ${qisqa.name.last}</div>
            <div class="title">Frontend Developer</div>
            <div class="info">
                <p><strong>Phone:</strong> ${qisqa.phone}</p>
                <p><strong>Manzil:</strong> ${qisqa.location.street.name}, ${qisqa.location.country}</p>
                <p><strong>Yosh:</strong> ${qisqa.dob.age}</p>
                <p><strong>Email:</strong> ${qisqa.email}</p>
            </div>
    `
    cards.append(card)
  
})})
