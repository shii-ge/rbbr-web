let wrapper = document.getElementById('evt-wrapper');

fetch('../data/events.json')
    .then(response => response.json())
    .then(eventos => {
        eventos.forEach(function (event) {
            const div = document.createElement('div');

            div.style.border = "thin solid white";
            div.style.background = "#23233599";
            div.style.padding = "30px";
            div.style.borderRadius = "25px";
            div.style.marginBottom = "20px";
            div.innerHTML = `
                <img src="${event.img}" alt="${event.nome}" width="300px" class="img-card" style="float: right; height: auto; margin-left: 30px; margin-bottom: 20px;">
                <h3 style="font-size: 18pt; margin-bottom: 1rem;">${event.nome}</h3>
                <p style="margin-bottom: .75rem; text-align: justify;">${event.desc}</p>
                <p style="margin-bottom: .75rem">Data: <b>${event.data}</b></p>
                <p>Link do evento: <a href="${event.url}" target="_blank" class="event-url">Challonge</a></p>
                <div style="clear: both;"></div>
            `;

            wrapper.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar dados...', error);
    });
