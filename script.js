const projects = [
    {
        title: "LabMov System Update",
        desc: "Modernização de interface e integração de IA para análise forense de patrimônio histórico.",
        tags: "C# | .NET | CNN | Arduino",
        category: "Full Stack"
    },
    {
        title: "Valoreco",
        desc: "Plataforma sustentável premiada no Desafio LED para gestão de resíduos e recompensas.",
        tags: "JS | Node.js | Frontend | PostgreSQL",
        category: "Full Stack"
    },
    {
        title: "Cloud Infrastructure",
        desc: "Implementação e gestão de recursos escaláveis focados em alta disponibilidade.",
        tags: "AWS | Cloud Practitioner",
        category: "Cloud"
    }
];

function init() {
    const grid = document.getElementById('project-grid');
    grid.innerHTML = projects.map(p => `
        <div class="card">
            <small style="color: var(--text-secondary)">${p.category}</small>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="tech-tags">${p.tags}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);