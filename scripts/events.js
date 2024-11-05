let wrapper = document.getElementById('evt-wrapper');

let event1 = {
    nome: "Depletion Garden 8",
    data: "02 de novembro de 2024",
    desc: "A oitava edição do Depletion Garden, nosso torneio livre de MBAACC da comunidade! Este será o último evento de AACC antes do Battle Coliseum, então não fiquem de fora!",
    img: "https://pbs.twimg.com/media/GbLP1AxX0AA3whC?format=jpg&name=large",
    url: "https://challonge.com/depletiongarden8"
};
let event2 = {
    nome: "Depletion Garden 8",
    data: "02 de novembro de 2024",
    desc: "A oitava edição do Depletion Garden, nosso torneio livre de MBAACC da comunidade! Este será o último evento de AACC antes do Battle Coliseum, então não fiquem de fora!",
    img: "https://pbs.twimg.com/media/GbLP1AxX0AA3whC?format=jpg&name=large",
    url: "https://challonge.com/depletiongarden8"
};
let event3 = {
    nome: "Depletion Garden 8",
    data: "02 de novembro de 2024",
    desc: "A oitava edição do Depletion Garden, nosso torneio livre de MBAACC da comunidade! Este será o último evento de AACC antes do Battle Coliseum, então não fiquem de fora!",
    img: "https://pbs.twimg.com/media/GbLP1AxX0AA3whC?format=jpg&name=large",
    url: "https://challonge.com/depletiongarden8"
};
let event4 = {
    nome: "Depletion Garden 8",
    data: "02 de novembro de 2024",
    desc: "A oitava edição do Depletion Garden, nosso torneio livre de MBAACC da comunidade! Este será o último evento de AACC antes do Battle Coliseum, então não fiquem de fora!",
    img: "https://pbs.twimg.com/media/GbLP1AxX0AA3whC?format=jpg&name=large",
    url: "https://challonge.com/depletiongarden8"
};
let event5 = {
    nome: "Depletion Garden 8",
    data: "02 de novembro de 2024",
    desc: "A oitava edição do Depletion Garden, nosso torneio livre de MBAACC da comunidade! Este será o último evento de AACC antes do Battle Coliseum, então não fiquem de fora!",
    img: "https://pbs.twimg.com/media/GbLP1AxX0AA3whC?format=jpg&name=large",
    url: "https://challonge.com/depletiongarden8"
};
let event6 = {
    nome: "Depletion Garden 8",
    data: "02 de novembro de 2024",
    desc: "A oitava edição do Depletion Garden, nosso torneio livre de MBAACC da comunidade! Este será o último evento de AACC antes do Battle Coliseum, então não fiquem de fora!",
    img: "https://pbs.twimg.com/media/GbLP1AxX0AA3whC?format=jpg&name=large",
    url: "https://challonge.com/depletiongarden8"
};

let eventos = [event1, event2, event3, event4, event5, event6];

eventos.forEach(function(event) {
    const div = document.createElement('div');

    div.style.border = "thin solid white";
    div.style.background = "#23233599";
    div.style.padding = "30px";
    div.style.borderRadius = "25px";
    div.style.marginBottom = "20px";
    div.innerHTML = `
        <img src="${event.img}" alt="${event.nome}" width="300px" class="img-card" style="float: right; height: auto; margin-left: 30px; margin-bottom: 20px; border-radius: 10px;">
        <h3 style="font-size: 18pt; margin-bottom: 1rem;">${event.nome}</h3>
        <p style="margin-bottom: .75rem; text-align: justify;">${event.desc}</p>
        <p style="margin-bottom: .75rem">Data: <b>${event.data}</b></p>
        <p>Link do evento: <a href="${event.url}" target="_blank" class="event-url">Challonge</a></p>
        <div style="clear: both;"></div>
    `;
    
    wrapper.appendChild(div);
});
