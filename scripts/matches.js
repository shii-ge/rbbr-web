let wrapper = document.getElementById('match-wrapper');

fetch('../data/matches.json')
    .then(response => response.json())
    .then(matches => {
        matches.forEach(function (match) {
            if (!(match.scorep1<0 || match.scorep2<0)) {
                const row = document.createElement('tr');

                if (match.scorep1 > match.scorep2) {
                    row.innerHTML = `
                        <td>${match.match_id}</td>
                        <td class="text-dark">${match.seedp1}</td>
                        <td class="text-row matchwin-1"><b>${match.namep1}</b></td>
                        <td><b>${match.scorep1}</b></td>
                        <td class="text-dark">${match.scorep2}</td>
                        <td class="text-row"><b>${match.namep2}</b></td>
                        <td class="text-dark">${match.seedp2}</td>
                        <td>${match.event}</td>
                    `;
                } else {
                    row.innerHTML = `
                        <td>${match.match_id}</td>
                        <td class="text-dark">${match.seedp1}</td>
                        <td class="text-row"><b>${match.namep1}</b></td>
                        <td class="text-dark">${match.scorep1}</td>
                        <td><b>${match.scorep2}</b></td>
                        <td class="text-row matchwin-2"><b>${match.namep2}</b></td>
                        <td class="text-dark">${match.seedp2}</td>
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