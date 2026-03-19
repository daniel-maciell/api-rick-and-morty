const container = document.querySelector(".infos");

// Pega o ID da URL
const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

if (!characterId) {
    container.innerHTML = "<p>Personagem não encontrado.</p>";
} else {
    // Fetch no personagem pelo ID
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => {
            if (!response.ok) throw new Error("Personagem não encontrado");
            return response.json();
        })
        .then(personagem => {
            // Cria o card de detalhes
            container.innerHTML = `
                <div class="character-card">
                    <img src="${personagem.image}" alt="${personagem.name}" class="character-image">
                    <div class="character-info">
                        <h1>${personagem.name}</h1>
                        <p><strong>Status:</strong> ${personagem.status}</p>
                        <p><strong>Espécie:</strong> ${personagem.species}</p>
                        <p><strong>Gênero:</strong> ${personagem.gender}</p>
                        <p><strong>Origem:</strong> ${personagem.origin.name}</p>
                        <p><strong>Localização:</strong> ${personagem.location.name}</p>
                        <p><strong>Primeiro episódio em que apareceu:</strong> ${personagem.episode[0].split('/').pop()}</p>
                        <a href="index.html" class="voltar">Voltar</a>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            container.innerHTML = "<p>Erro ao carregar o personagem.</p>";
            container.style.color = "#FFF";
            console.error(error);
        });
}