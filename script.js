        const projects = [
            {
                title: "LabMov - IFRJ",
                desc: "Atualização de interface em C# e integração de IA para análise forense de pinturas.",
                link: "#"
            },
            {
                title: "Valoreco",
                desc: "App sustentável que recompensa reciclagem (Desafio LED).",
                link: "#"
            },
            {
                title: "Veggies Channel",
                desc: "Projeto criativo focado em animação e branding para canal infantil.",
                link: "#"
            }
        ];
        

        function loadProjects() {
            const grid = document.getElementById('project-list');
            grid.innerHTML = projects.map(p => `
                <div class="card">
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <a href="${p.link}" class="btn">Ver Detalhes</a>
                </div>
            `).join('');
        }

        // Inicia o carregamento
        window.onload = loadProjects;
  