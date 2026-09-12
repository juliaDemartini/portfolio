/* =========================================================
   DADOS DOS PROJETOS
========================================================= */

const projects = {

    dna: {

        number: "01",

        category: "FULL STACK · E-COMMERCE",

        title: "DNA Jeanswear",

        subtitle:
            "Experiência de e-commerce desenvolvida com foco em tecnologia, personalização e experiência de compra.",

        context:
            "Projeto de e-commerce de jeanswear criado para explorar uma experiência de compra mais tecnológica, mantendo uma interface simples, elegante e funcional. A proposta envolve organização de catálogo, escolha de variações e recursos de personalização.",

        objective:
            "Construir uma experiência de compra que conecte desenvolvimento de software, UX e recursos tecnológicos, criando uma aplicação que possa evoluir para uma solução completa de comércio eletrônico.",

        problem:
            "Como criar uma experiência de e-commerce que seja simples para o usuário, mas que também consiga incorporar recursos tecnológicos e personalização?",

        features: [

            {
                icon: "fa-shirt",
                title: "Catálogo de produtos",
                description:
                    "Organização dos produtos, categorias, informações e variações."
            },

            {
                icon: "fa-palette",
                title: "Variações",
                description:
                    "Possibilidade de selecionar diferentes versões do produto."
            },

            {
                icon: "fa-mobile-screen",
                title: "Experiência responsiva",
                description:
                    "Interface pensada para diferentes tamanhos de tela."
            },

            {
                icon: "fa-user",
                title: "Experiência personalizada",
                description:
                    "Estrutura preparada para recursos de personalização e recomendação."
            }

        ],

        functionalRequirements: [

            "Visualizar produtos disponíveis.",

            "Visualizar detalhes de cada produto.",

            "Selecionar variações.",

            "Adicionar produtos ao carrinho.",

            "Navegar entre diferentes categorias.",

            "Acessar informações detalhadas do produto."

        ],

        nonFunctionalRequirements: [

            "Interface responsiva.",

            "Boa usabilidade.",

            "Código organizado e modular.",

            "Boa performance de carregamento.",

            "Arquitetura preparada para evolução."

        ],

        stack: [

            "C#",
            "REST API",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "GitHub"

        ],

        process:
            "O projeto foi estruturado a partir da definição da experiência que o usuário deveria ter. A partir disso, foram organizados os componentes da interface, fluxo de navegação, estrutura dos produtos e integração entre frontend e backend.",

        challenges:
            "Um dos principais desafios foi equilibrar a identidade visual com a necessidade de manter a interface clara e funcional, além de pensar na aplicação como um produto que pode crescer tecnicamente.",

        learning:
            "O projeto ajudou a aprofundar conhecimentos sobre desenvolvimento de interfaces, organização de componentes, experiência do usuário e integração entre diferentes camadas de uma aplicação.",

        images: [

            "assets/projeto-dna/01.png",

            "assets/projeto-dna/02.png",

            "assets/projeto-dna/03.png"

        ],

        github:
            "https://github.com/juliaDemartini",

        demo:
            "#"

    },


    foodexpress: {

        number: "02",

        category: "WEB APPLICATION",

        title: "FoodExpress",

        subtitle:
            "Aplicação web desenvolvida para explorar desenvolvimento de software e experiência de usuário.",

        context:
            "Projeto desenvolvido como aplicação prática para trabalhar conceitos de desenvolvimento web, organização de interface e fluxo de usuário.",

        objective:
            "Construir uma aplicação funcional utilizando conceitos de desenvolvimento web e organização de componentes.",

        problem:
            "Como transformar uma necessidade de negócio em uma aplicação web simples, organizada e funcional?",

        features: [

            {
                icon: "fa-burger",
                title: "Catálogo",
                description:
                    "Visualização organizada dos produtos disponíveis."
            },

            {
                icon: "fa-cart-shopping",
                title: "Carrinho",
                description:
                    "Estrutura para seleção e organização dos itens."
            },

            {
                icon: "fa-mobile-screen",
                title: "Responsividade",
                description:
                    "Interface adaptável para diferentes dispositivos."
            },

            {
                icon: "fa-code",
                title: "Integração",
                description:
                    "Estrutura preparada para integração com APIs."
            }

        ],

        functionalRequirements: [

            "Visualizar produtos.",

            "Selecionar itens.",

            "Gerenciar itens selecionados.",

            "Visualizar informações do produto."

        ],

        nonFunctionalRequirements: [

            "Interface responsiva.",

            "Código organizado.",

            "Boa usabilidade.",

            "Manutenibilidade."

        ],

        stack: [

            "JavaScript",
            "HTML",
            "CSS",
            "API",
            "Git",
            "GitHub"

        ],

        process:
            "O desenvolvimento foi dividido entre estruturação da interface, implementação das interações e organização do código.",

        challenges:
            "Organizar a aplicação de forma que os componentes e funcionalidades pudessem evoluir sem comprometer a experiência do usuário.",

        learning:
            "A experiência contribuiu para consolidar fundamentos de desenvolvimento web e organização de aplicações.",

        images: [

            "assets/foodexpress/01.png",
            "assets/foodexpress/02.png",
            "assets/foodexpress/03.png"

        ],

        github:
            "https://github.com/juliaDemartini",

        demo:
            "#"

    },


    valoreco: {

        number: "03",

        category: "IOT · HARDWARE · SOFTWARE",

        title: "ValorEco",

        subtitle:
            "Conceito de solução de reciclagem inteligente conectando hardware, sensores e software.",

        context:
            "Projeto pensado para utilizar tecnologia como ferramenta de incentivo à reciclagem e conscientização ambiental.",

        objective:
            "Criar uma solução que conectasse um dispositivo físico a uma aplicação, permitindo transformar ações de reciclagem em uma experiência tecnológica.",

        problem:
            "Como utilizar tecnologia e automação para incentivar comportamentos sustentáveis?",

        features: [

            {
                icon: "fa-microchip",
                title: "Sensores",
                description:
                    "Utilização de sensores para identificar eventos no dispositivo."
            },

            {
                icon: "fa-recycle",
                title: "Reciclagem",
                description:
                    "Conceito direcionado ao descarte consciente."
            },

            {
                icon: "fa-trophy",
                title: "Recompensas",
                description:
                    "Sistema pensado para incentivar a participação."
            },

            {
                icon: "fa-diagram-project",
                title: "Integração",
                description:
                    "Conexão entre hardware e software."
            }

        ],

        functionalRequirements: [

            "Detectar eventos utilizando sensores.",

            "Processar informações do dispositivo.",

            "Registrar interações.",

            "Apresentar informações ao usuário."

        ],

        nonFunctionalRequirements: [

            "Confiabilidade.",

            "Baixo consumo.",

            "Facilidade de manutenção.",

            "Integração entre componentes."

        ],

        stack: [

            "Arduino",
            "C/C++",
            "Sensores",
            "IoT",
            "Software"

        ],

        process:
            "O projeto começou pela definição do problema e posteriormente passou pela prototipação do dispositivo, integração dos componentes e estruturação da solução.",

        challenges:
            "Integrar componentes físicos e software mantendo uma comunicação consistente entre as diferentes partes da solução.",

        learning:
            "O projeto proporcionou experiência prática com prototipação, eletrônica, sensores e pensamento sistêmico.",

        images: [

            "assets/valoreco/01.png",
            "assets/valoreco/02.png",
            "assets/valoreco/03.png"

        ],

        github:
            "https://github.com/juliaDemartini",

        demo:
            "#"

    },


    storyfox: {

        number: "04",

        category: "SAAS · AI · AUTOMATION",

        title: "StoryFox",

        subtitle:
            "Conceito de SaaS para automação de conteúdo, gestão de interações e suporte utilizando inteligência artificial.",

        context:
            "Projeto criado a partir da necessidade de centralizar tarefas relacionadas à produção de conteúdo e interação com clientes.",

        objective:
            "Estruturar uma plataforma capaz de automatizar processos repetitivos e oferecer ferramentas para criação e gerenciamento de conteúdo.",

        problem:
            "Como reduzir tarefas repetitivas de criação e atendimento sem perder organização e controle?",

        features: [

            {
                icon: "fa-wand-magic-sparkles",
                title: "Geração de conteúdo",
                description:
                    "Estrutura para criação de conteúdos utilizando IA."
            },

            {
                icon: "fa-comments",
                title: "Automação",
                description:
                    "Automação de interações e respostas."
            },

            {
                icon: "fa-chart-line",
                title: "Relatórios",
                description:
                    "Estrutura para acompanhamento de resultados."
            },

            {
                icon: "fa-filter",
                title: "Filtros",
                description:
                    "Organização das informações e interações."
            }

        ],

        functionalRequirements: [

            "Criar conteúdos.",

            "Gerenciar interações.",

            "Organizar informações.",

            "Visualizar relatórios.",

            "Gerenciar diferentes fluxos."

        ],

        nonFunctionalRequirements: [

            "Escalabilidade.",

            "Segurança.",

            "Usabilidade.",

            "Manutenibilidade."

        ],

        stack: [

            "Node.js",
            "Firebase",
            "JavaScript",
            "AI",
            "REST API"

        ],

        process:
            "A solução foi pensada inicialmente como um produto SaaS, começando pela identificação das principais dores do usuário, definição das funcionalidades e estruturação da arquitetura.",

        challenges:
            "Transformar diferentes necessidades de automação em funcionalidades que pudessem coexistir dentro de uma mesma plataforma.",

        learning:
            "O projeto ampliou a visão sobre desenvolvimento de produtos, arquitetura de sistemas, automação e aplicação de inteligência artificial.",

        images: [

            "assets/storyfox/01.png",
            "assets/storyfox/02.png",
            "assets/storyfox/03.png"

        ],

        github:
            "https://github.com/juliaDemartini",

        demo:
            "#"

    }

};


/* =========================================================
   ELEMENTOS
========================================================= */

const modal = document.getElementById("caseModal");

const closeButton = document.getElementById("caseClose");

const projectButtons =
    document.querySelectorAll(".project-open");


/* =========================================================
   ELEMENTOS DO CASE
========================================================= */

const caseTitle =
    document.getElementById("caseTitle");

const caseCategory =
    document.getElementById("caseCategory");

const caseSubtitle =
    document.getElementById("caseSubtitle");

const caseNumber =
    document.getElementById("caseNumber");

const caseContext =
    document.getElementById("caseContext");

const caseObjective =
    document.getElementById("caseObjective");

const caseProblem =
    document.getElementById("caseProblem");

const caseProcess =
    document.getElementById("caseProcess");

const caseChallenges =
    document.getElementById("caseChallenges");

const caseLearning =
    document.getElementById("caseLearning");

const caseFeatures =
    document.getElementById("caseFeatures");

const functionalRequirements =
    document.getElementById("functionalRequirements");

const nonFunctionalRequirements =
    document.getElementById("nonFunctionalRequirements");

const caseStack =
    document.getElementById("caseStack");

const caseGithub =
    document.getElementById("caseGithub");

const caseDemo =
    document.getElementById("caseDemo");


/* =========================================================
   ABRIR PROJETO
========================================================= */

projectButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card =
            this.closest(".project-card");

        const projectId =
            card.dataset.project;

        openProject(projectId);

    });

});


/* =========================================================
   FUNÇÃO PRINCIPAL
========================================================= */

function openProject(projectId) {

    const project =
        projects[projectId];

    if (!project) return;


    /* TEXTO */

    caseTitle.textContent =
        project.title;

    caseCategory.textContent =
        project.category;

    caseSubtitle.textContent =
        project.subtitle;

    caseNumber.textContent =
        project.number;

    caseContext.textContent =
        project.context;

    caseObjective.textContent =
        project.objective;

    caseProblem.textContent =
        project.problem;

    caseProcess.textContent =
        project.process;

    caseChallenges.textContent =
        project.challenges;

    caseLearning.textContent =
        project.learning;


    /* =====================================================
       FUNCIONALIDADES
    ====================================================== */

    caseFeatures.innerHTML = "";

    project.features.forEach(feature => {

        const element =
            document.createElement("div");

        element.className = "feature";

        element.innerHTML = `

            <div class="feature-icon">

                <i class="fa-solid ${feature.icon}"></i>

            </div>

            <h4>
                ${feature.title}
            </h4>

            <p>
                ${feature.description}
            </p>

        `;

        caseFeatures.appendChild(element);

    });


    /* =====================================================
       REQUISITOS FUNCIONAIS
    ====================================================== */

    functionalRequirements.innerHTML = "";

    project.functionalRequirements.forEach(requirement => {

        const li =
            document.createElement("li");

        li.textContent =
            requirement;

        functionalRequirements.appendChild(li);

    });


    /* =====================================================
       REQUISITOS NÃO FUNCIONAIS
    ====================================================== */

    nonFunctionalRequirements.innerHTML = "";

    project.nonFunctionalRequirements.forEach(requirement => {

        const li =
            document.createElement("li");

        li.textContent =
            requirement;

        nonFunctionalRequirements.appendChild(li);

    });


    /* =====================================================
       STACK
    ====================================================== */

    caseStack.innerHTML = "";

    project.stack.forEach(technology => {

        const element =
            document.createElement("span");

        element.className =
            "stack-item";

        element.textContent =
            technology;

        caseStack.appendChild(element);

    });


    /* =====================================================
       LINKS
    ====================================================== */

    caseGithub.href =
        project.github;

    caseDemo.href =
        project.demo;


    /* =====================================================
       IMAGENS
    ====================================================== */

    setupCaseImage(
        "caseImage1",
        project.images[0]
    );

    setupCaseImage(
        "caseImage2",
        project.images[1]
    );

    setupCaseImage(
        "caseImage3",
        project.images[2]
    );


    /* =====================================================
       MODAL
    ====================================================== */

    modal.classList.add("active");

    document.body.classList.add("modal-open");

    modal.scrollTop = 0;

}


/* =========================================================
   IMAGENS
========================================================= */

function setupCaseImage(
    elementId,
    imagePath
) {

    const image =
        document.getElementById(elementId);

    if (!image) return;


    image.src = imagePath;


    image.onload = function () {

        image.style.display =
            "block";

        const placeholder =
            image.parentElement.querySelector(
                ".gallery-placeholder"
            );

        if (placeholder) {

            placeholder.style.display =
                "none";

        }

    };


    image.onerror = function () {

        image.style.display =
            "none";

    };

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function closeModal() {

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


closeButton.addEventListener(
    "click",
    closeModal
);


/* =========================================================
   CLICAR FORA
========================================================= */

modal
    .querySelector(".case-overlay")
    .addEventListener(
        "click",
        closeModal
    );


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   NAVBAR — ACTIVE LINK
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            if (
                window.scrollY >=
                sectionTop - 200
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }
);