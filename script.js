/* =========================================================
   LUCIDE
========================================================= */

lucide.createIcons();


/* =========================================================
   PROJETOS
=========================================================

   Para adicionar um novo projeto:

   1. copie um objeto abaixo
   2. altere as informações
   3. coloque suas imagens em /assets/
   4. coloque os links do GitHub e projeto

========================================================= */

const projects = [

    {
        id: "dna",

        number: "01",

        title: "DNA Jeanswear",

        shortDescription:
            "E-commerce de jeanswear desenvolvido com foco em experiência digital, personalização e recursos tecnológicos.",

        image:
            "assets/dna-cover.jpg",

        github:
            "https://github.com/juliaDemartini",

        live:
            "#",

        technologies: [
            {
                name: "C#",
                icon: "devicon-csharp-plain"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain"
            },
            {
                name: "React",
                icon: "devicon-react-original"
            },
            {
                name: "AWS",
                icon: "devicon-amazonwebservices-plain-wordmark"
            }
        ],

        /* -----------------------------------------
           DETALHES
        ----------------------------------------- */

        overview:
            "Projeto de e-commerce desenvolvido para explorar uma experiência de compra de jeanswear mais personalizada, combinando desenvolvimento web, arquitetura de software e recursos de tecnologia.",

        problem:
            "Criar uma experiência de compra que permita ao usuário compreender melhor o produto, navegar pelas opções disponíveis e tomar decisões com mais segurança.",

        objective:
            "Desenvolver uma plataforma de e-commerce moderna, responsiva e preparada para receber funcionalidades de personalização e interação.",

        features: [
            "Catálogo de produtos",
            "Variações de produtos",
            "Página detalhada do produto",
            "Experiência responsiva",
            "Fluxo de navegação de e-commerce",
            "Provador virtual como conceito",
            "Estrutura preparada para chatbot",
            "Integração com API"
        ],

        requirements: [
            "Interface responsiva",
            "Navegação intuitiva",
            "Organização modular",
            "Separação entre frontend e backend",
            "Persistência e manipulação de dados",
            "Estrutura preparada para expansão"
        ],

        architecture:
            "Frontend estruturado de forma componentizada e integrado a uma API responsável pela camada de dados e regras da aplicação.",

        challenges:
            "Um dos principais desafios foi pensar a experiência não apenas como uma interface visual, mas como um sistema que pudesse evoluir para receber novas funcionalidades.",

        learning:
            "O projeto permitiu aprofundar conhecimentos em desenvolvimento web, organização de componentes, APIs, experiência do usuário e integração entre diferentes camadas de uma aplicação.",

        status:
            "Em desenvolvimento"
    },


    {
        id: "valoreco",

        number: "02",

        title: "ValorEco",

        shortDescription:
            "Sistema de reciclagem inteligente que conecta hardware, software e gamificação para incentivar o descarte correto.",

        image:
            "assets/valoreco-cover.jpg",

        github:
            "https://github.com/juliaDemartini",

        live:
            "#",

        technologies: [
            {
                name: "Arduino",
                icon: "devicon-arduino-plain"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain"
            },
            {
                name: "Node.js",
                icon: "devicon-nodejs-plain"
            }
        ],

        overview:
            "Projeto experimental de tecnologia aplicada à sustentabilidade, combinando sensores, automação e uma experiência digital baseada em recompensas.",

        problem:
            "A dificuldade de incentivar hábitos consistentes de reciclagem pode ser explorada através de sistemas que ofereçam feedback imediato e mecanismos de recompensa.",

        objective:
            "Criar um protótipo de lixeira inteligente capaz de interagir com uma aplicação e registrar ações relacionadas à reciclagem.",

        features: [
            "Sistema de coleta inteligente",
            "Sensores",
            "Automação",
            "Sistema de recompensas",
            "Interface de acompanhamento",
            "Integração hardware/software"
        ],

        requirements: [
            "Leitura de sensores",
            "Processamento dos dados",
            "Comunicação entre componentes",
            "Feedback ao usuário"
        ],

        architecture:
            "Arquitetura composta por camada física de sensores e microcontrolador, integrada a uma camada de software responsável pelo processamento e apresentação das informações.",

        challenges:
            "Integrar componentes físicos e digitais mantendo um fluxo de comunicação previsível.",

        learning:
            "O projeto aproximou conceitos de programação, eletrônica, automação e desenvolvimento de sistemas.",

        status:
            "Projeto acadêmico"
    },


    {
        id: "pontomusical",

        number: "03",

        title: "Ponto Musical",

        shortDescription:
            "Aplicação web desenvolvida para explorar organização de conteúdo, navegação e experiência do usuário.",

        image:
            "assets/pontomusical-cover.jpg",

        github:
            "https://github.com/juliaDemartini",

        live:
            "https://juliademartini.github.io/pontomusical/",

        technologies: [
            {
                name: "HTML",
                icon: "devicon-html5-plain"
            },
            {
                name: "CSS",
                icon: "devicon-css3-plain"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain"
            }
        ],

        overview:
            "Projeto web desenvolvido para colocar em prática conceitos de estruturação de interfaces, navegação e organização de conteúdo.",

        problem:
            "Organizar uma experiência de navegação que fosse simples de compreender e agradável de utilizar.",

        objective:
            "Construir uma aplicação web funcional aplicando fundamentos de frontend e experiência do usuário.",

        features: [
            "Interface responsiva",
            "Navegação entre páginas",
            "Organização de conteúdo",
            "Interações em JavaScript"
        ],

        requirements: [
            "Responsividade",
            "Semântica HTML",
            "Organização CSS",
            "Interações JavaScript"
        ],

        architecture:
            "Aplicação frontend organizada em estrutura modular de HTML, CSS e JavaScript.",

        challenges:
            "Equilibrar conteúdo, hierarquia visual e navegação sem criar uma interface excessivamente complexa.",

        learning:
            "Fortalecimento dos fundamentos de desenvolvimento frontend e construção de experiências web.",

        status:
            "Concluído"
    },


    {
        id: "clinicabemestar",

        number: "04",

        title: "Clínica Bem Estar",

        shortDescription:
            "Projeto de interface web para uma clínica, explorando arquitetura visual, responsividade e experiência do usuário.",

        image:
            "assets/clinicabemestar-cover.jpg",

        github:
            "https://github.com/juliaDemartini",

        live:
            "https://juliademartini.github.io/clinicabemestar/",

        technologies: [
            {
                name: "HTML",
                icon: "devicon-html5-plain"
            },
            {
                name: "CSS",
                icon: "devicon-css3-plain"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain"
            }
        ],

        overview:
            "Projeto desenvolvido para explorar construção de interfaces voltadas para serviços e organização de informações.",

        problem:
            "Apresentar informações de forma clara, acessível e organizada em diferentes tamanhos de tela.",

        objective:
            "Criar uma experiência web responsiva com foco em clareza e facilidade de navegação.",

        features: [
            "Página institucional",
            "Design responsivo",
            "Seções informativas",
            "Navegação",
            "Elementos interativos"
        ],

        requirements: [
            "Responsividade",
            "Boa hierarquia visual",
            "Acessibilidade básica",
            "Organização de conteúdo"
        ],

        architecture:
            "Frontend baseado em HTML semântico, CSS responsivo e JavaScript para interações.",

        challenges:
            "Construir uma interface visualmente organizada sem comprometer a experiência em dispositivos menores.",

        learning:
            "Prática de arquitetura de páginas, CSS responsivo e organização de componentes visuais.",

        status:
            "Concluído"
    }

];


/* =========================================================
   RENDER PROJECTS
========================================================= */

const projectsGrid = document.getElementById("projectsGrid");

function renderProjects() {

    projectsGrid.innerHTML = projects.map(project => {

        const techHTML = project.technologies
            .slice(0, 4)
            .map(tech => `
                <span>
                    <i class="${tech.icon}"></i>
                    ${tech.name}
                </span>
            `)
            .join("");

        return `

            <article
                class="project-card"
                data-project="${project.id}"
            >

                <div class="project-image">

                    ${
                        project.image
                            ? `
                                <img
                                    src="${project.image}"
                                    alt="${project.title}"
                                    onerror="this.style.display='none'"
                                >
                            `
                            : `
                                <div class="project-placeholder">
                                    <i data-lucide="image"></i>
                                </div>
                            `
                    }

                </div>


                <div class="project-content">

                    <div class="project-top">

                        <span class="project-number">
                            ${project.number}
                        </span>

                        <div class="project-open">
                            <i data-lucide="arrow-up-right"></i>
                        </div>

                    </div>

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.shortDescription}
                    </p>

                    <div class="project-tech">
                        ${techHTML}
                    </div>

                </div>

            </article>

        `;

    }).join("");

    lucide.createIcons();

    document.querySelectorAll(".project-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const projectId =
                    card.dataset.project;

                openProject(projectId);

            });

        });
}

renderProjects();


/* =========================================================
   MODAL
========================================================= */

const modal =
    document.getElementById("projectModal");

const modalContent =
    document.getElementById("modalContent");

const modalClose =
    document.getElementById("modalClose");


function openProject(id) {

    const project =
        projects.find(item => item.id === id);

    if (!project) return;


    const techHTML =
        project.technologies
            .map(tech => `
                <span>
                    <i class="${tech.icon}"></i>
                    ${tech.name}
                </span>
            `)
            .join("");


    const featuresHTML =
        project.features
            .map(item => `<li>${item}</li>`)
            .join("");


    const requirementsHTML =
        project.requirements
            .map(item => `<li>${item}</li>`)
            .join("");


    modalContent.innerHTML = `

        <div class="modal-hero">

            <span class="modal-label">
                PROJETO ${project.number} · ${project.status.toUpperCase()}
            </span>

            <h2>
                ${project.title}
            </h2>

            <p>
                ${project.shortDescription}
            </p>


            <div class="modal-links">

                ${
                    project.github
                        ? `
                            <a
                                href="${project.github}"
                                target="_blank"
                                class="modal-link"
                                onclick="event.stopPropagation()"
                            >
                                <i data-lucide="github"></i>
                                Código
                                <i data-lucide="arrow-up-right"></i>
                            </a>
                        `
                        : ""
                }

                ${
                    project.live && project.live !== "#"
                        ? `
                            <a
                                href="${project.live}"
                                target="_blank"
                                class="modal-link"
                                onclick="event.stopPropagation()"
                            >
                                <i data-lucide="globe"></i>
                                Projeto
                                <i data-lucide="arrow-up-right"></i>
                            </a>
                        `
                        : ""
                }

            </div>

        </div>


        <!-- GALERIA -->

        <div class="modal-gallery">

            <div class="gallery-image">

                ${
                    project.image
                        ? `
                            <img
                                src="${project.image}"
                                alt="${project.title}"
                            >
                        `
                        : ""
                }

            </div>


            <div class="gallery-column">

                <div class="gallery-image small">

                    <!--
                        IMAGEM 2

                        Troque por:

                        assets/projeto-2.jpg
                    -->

                </div>


                <div class="gallery-image small">

                    <!--
                        IMAGEM 3

                        Troque por:

                        assets/projeto-3.jpg
                    -->

                </div>

            </div>

        </div>


        <!-- INFORMAÇÕES -->

        <div class="modal-sections">

            <section class="modal-section">

                <h3>
                    Visão geral
                </h3>

                <p>
                    ${project.overview}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Problema
                </h3>

                <p>
                    ${project.problem}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Objetivo
                </h3>

                <p>
                    ${project.objective}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Funcionalidades
                </h3>

                <ul>
                    ${featuresHTML}
                </ul>

            </section>


            <section class="modal-section">

                <h3>
                    Requisitos
                </h3>

                <ul>
                    ${requirementsHTML}
                </ul>

            </section>


            <section class="modal-section">

                <h3>
                    Arquitetura / Estrutura
                </h3>

                <p>
                    ${project.architecture}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Desafios
                </h3>

                <p>
                    ${project.challenges}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Aprendizados
                </h3>

                <p>
                    ${project.learning}
                </p>

            </section>


            <section class="modal-section full">

                <h3>
                    Tecnologias utilizadas
                </h3>

                <div class="modal-tech">
                    ${techHTML}
                </div>

            </section>

        </div>

    `;


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

    lucide.createIcons();

}


function closeProject() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeProject
);


document.querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeProject
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {
            closeProject();
        }

    }
);


/* =========================================================
   HEADER ACTIVE LINK
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            current = section.id;
        }

    });


    navLinks.forEach(link => {

        link.style.color =
            link.getAttribute("href") === `#${current}`
                ? "#f5f3f7"
                : "";

    });

});


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-grid, .project-card, .timeline-item, .education-card, .certification-feature"
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => observer.observe(element)
);