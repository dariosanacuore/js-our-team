const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


/**
 * Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
 */


const listElem = document.querySelector(".cards-container");
function renderCards() {
  listElem.innerHTML = "";
  for (let i = 0; i < teamMembers.length; i++) {
    //const curMember = nomi[i];
    const { name, role, email, img } = teamMembers[i];
    const item = `
     <div class="card mb-3 bg-dark" style="max-width: 350px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${img}" class="img-fluid rounded-start" alt="${name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-light">${name}</h5>
              <p class="card-text text-light">${role}</p>
              <p class="card-text "><small class=" text-info">${email}</small></p>
            </div>
          </div>
        </div>
     </div>
  `
    listElem.innerHTML += item;
  }
}
renderCards();
//form

const nameInput = document.getElementById("nome");
const roleInput = document.getElementById("ruolo");
const emailInput = document.getElementById("email");
const imgInput = document.getElementById("img");
const form = document.querySelector(".card-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submit");

  const newMember = {
    name: nameInput.value.trim(),
    role: roleInput.value.trim(),
    email: emailInput.value.trim(),
    img: imgInput.files[0]
  };
  teamMembers.push(newMember);
  renderCards();
});
