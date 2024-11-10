let wrapper = document.getElementById('match-wrapper');

fetch('../data/matches.json')
    .then(response => response.json())
    .then(matches => {
        matches.forEach(function (match) {
            if (!(match.scorep1<0 || match.scorep2<0)) {
                const row = document.createElement('tr');

                if (match.scorep1 > match.scorep2) {
                    row.innerHTML = `
                        <td>${match.match_id.toString().padStart(3, '0')}</td>
                        <td class="text-dark">#${match.seedp1}</td>
                        <td class="text-row matchwin-1"><b><a href="../pages/players.html?id=${match.namep1}" class="player-link">${match.namep1}</a></b></td>
                        <td><b>${match.scorep1}</b></td>
                        <td class="text-dark">${match.scorep2}</td>
                        <td class="text-row"><b><a href="../pages/players.html?id=${match.namep2}" class="player-link">${match.namep2}</a></b></td>
                        <td class="text-dark">#${match.seedp2}</td>
                        <td>${match.event}</td>
                    `;
                } else {
                    row.innerHTML = `
                        <td>${match.match_id.toString().padStart(3, '0')}</td>
                        <td class="text-dark">#${match.seedp1}</td>
                        <td class="text-row"><b><a href="../pages/players.html?id=${match.namep1}" class="player-link">${match.namep1}</a></b></td>
                        <td class="text-dark">${match.scorep1}</td>
                        <td><b>${match.scorep2}</b></td>
                        <td class="text-row matchwin-2"><b><a href="../pages/players.html?id=${match.namep2}" class="player-link">${match.namep2}</a></b></td>
                        <td class="text-dark">#${match.seedp2}</td>
                        <td>${match.event}</td>
                    `;
                }

    
                wrapper.appendChild(row);
            }
        });
    })
    .catch(error => {
        console.error('Erro ao carregar dados...', error);
    });

function searchTable() {
    const input = document.getElementById("live-search");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("main-table");
    const rows = document.getElementsByTagName("tr");

    for (let i=1; i<rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let found = false;
        for (let j=0; j<cells.length; j++) {
            if (cells[j].textContent.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }
        if (found) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}