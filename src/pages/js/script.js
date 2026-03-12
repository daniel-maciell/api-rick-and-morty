const container = document.getElementById("characters");
const searchInput = document.getElementById("search-input");
const API = "https://rickandmortyapi.com/api/character";

function buscarPersonagem(nome) {
    if (!nome) {
        container.innerHTML = "";
        return;
    }

    fetch(`${API}?name=${nome}`)
        .then(response => {
            if (!response.ok) throw new Error("Personagem não encontrado");
            return response.json();
        })
        .then(dados => {
            if (!dados.results || dados.results.length === 0) {
                container.innerHTML = "<p>Personagem não encontrado.</p>";
                return;
            }
            mostrarPersonagens(dados.results);
        })
        .catch(erro => {
            container.innerHTML = "<p>Erro ao buscar personagem.</p>";
            console.error(erro);
        });
}

function mostrarPersonagens(personagens) {
    container.innerHTML = "";

    personagens.forEach(personagem => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${personagem.image}" alt="${personagem.name}">
            <h3>${personagem.name}</h3>
            <p>Status: ${personagem.status}</p>
        `;

        card.addEventListener("click", () => {
            window.location.href = `characters.html?id=${personagem.id}`;
        });

        container.appendChild(card);
    });
}

searchInput.addEventListener("input", (e) => {
    const nome = e.target.value.trim();
    buscarPersonagem(nome);
});

document.getElementsByTagName(img).classList.add("");