const id = getParamId('id');
let flag = document.querySelector('.flag');
let list = document.getElementById('player-list');
let vitorias = 0;
let derrotas = 0;
let jogosw = 0;
let jogosl = 0;

async function fetchData() {
    try {
        const playersResponse = await fetch('../data/players.json');
        const players = await playersResponse.json();
        const id_atual = getParamId('id');
        list.innerHTML = '<h2 style="margin-bottom: 1rem;">Lista de jogadores</h2>';

        vitorias = 0;
        derrotas = 0;
        jogosw = 0;
        jogosl = 0;

        players.sort((a, b) => a.name.localeCompare(b.name));

        for (let player of players) {
            if (player.name === id_atual) {
                const matchesResponse = await fetch('../data/matches.json');
                const matches = await matchesResponse.json();

                for (let match of matches) {
                    if (match.scorep1 + match.scorep2 != -1) {
                        if (match.namep1 === player.name) {
                            if (match.scorep1 > match.scorep2) vitorias += 1;
                            else derrotas += 1;
                            jogosw += match.scorep1;
                            jogosl += match.scorep2;
                        } else if (match.namep2 === player.name) {
                            if (match.scorep2 > match.scorep1) vitorias += 1;
                            else derrotas += 1;
                            jogosl += match.scorep1;
                            jogosw += match.scorep2;
                        }
                    }
                }
                atualizarInfo(player.name, player.country, player.char, vitorias, derrotas, jogosw, jogosl);
            }
            
            const entry = document.createElement('p');
            entry.classList.add('list-item');
            entry.innerHTML = `
                <a href="#" onclick="atualizar('${player.name}', '${player.country}', '${player.char}')" class="list-link">${player.name}</a>
            `;
            list.appendChild(entry);
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

function getParamId(value) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(value);
}

function atualizar(nome, pais, image) {
    document.getElementById('player-container').style.opacity = "0.2";
    const url = new URL(window.location);
    url.searchParams.set('id', nome);
    window.history.pushState({}, '', url);
    setTimeout(function () {
        atualizarContainer(nome, pais, image);
        fetchData();
        document.getElementById('player-container').style.opacity = "1";
    }, 600);
}

function atualizarContainer(nome, pais, image) {
    if (nome) {
        document.getElementById('nome').textContent = nome;
        document.getElementById('player-container').style.display = 'block';
    } else {
        document.getElementById('nome').textContent = '';
        document.getElementById('player-container').style.display = 'none';
    }
    document.querySelector('.flag').src = 'https://assets.ppy.sh/old-flags/' + pais + '.png';
    document.querySelector('.char-image').src = image;
}

function atualizarInfo(p1, p2, p3, a, b, c, d) {
    atualizarContainer(p1, p2, p3);
    document.getElementById('win').textContent = 'Vitórias: ' + a;
    document.getElementById('los').textContent = 'Derrotas: ' + b;
    document.getElementById('jogosw').textContent = 'Jogos vencidos: ' + c;
    document.getElementById('jogosl').textContent = 'Jogos perdidos: ' + d;
}


window.onload = function () {
    const id = getParamId('id');
    fetchData();
};