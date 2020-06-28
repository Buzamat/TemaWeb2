const container = document.querySelector("#listjoc");
const addjoc = document.querySelector("#addjoc");
const deljoc = document.querySelector("#deljoc");


//cod luat in mare parte de la curs, modificat pentru a-l putea folosi la site-ul meu

async function afiseajajocuri() {

    const response = await fetch('http://localhost:3000/lista-jocuri');
    const jocuriarray = await response.json();

    container.innerHTML = ''

    jocuriarray.forEach(joc => {
       const tempjoc = `<div class="item" style="background:url(${joc.src}) no-repeat;background-size: 300px;text-align: center;color: black;font-size: 22px;font-weight: bold;text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;" data-id=${joc.id}>
       <br><br><br><br><br><br><br><br>Id: ${joc.id}<br>
        Nume: ${joc.nume}<br>
        Pret: ${joc.pret}<hr>`

        container.insertAdjacentHTML("beforeend", tempjoc);

    });
}

addjoc.addEventListener("click", async function () {
    const nume = document.querySelector("#titlejoc").value;
    const tip = document.querySelector("#prcjoc").value;
    const src = document.querySelector("#urljoc").value;
    const newjoc = {
        nume,
        pret,
        src
    }

    const newjocarray = await postData('http://localhost:3000/adauga-joc', newjoc)

    afiseajajocuri(newjocarray)
})

deljoc.addEventListener("click", async function () {
    const id = document.querySelector("#idjoc").value;
    const url = "http://localhost:3000/sterge-joc/" + id;
    const newjocarray = await deletejoc(url);
    afiseajajocuri(newjocarray)
})

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

async function deletejoc(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    });
    return response.json();
}

afiseajajocuri();