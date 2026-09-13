/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

    pt: {

        "nav.home": "Início",
        "nav.projects": "Projetos",
        "nav.about": "Sobre",
        "nav.experience": "Experiência",
        "nav.education": "Formação",

        "header.contact": "Vamos conversar",

        "hero.availability":
            "Aberta a oportunidades em tecnologia",

        "hero.role":
            "Engenharia de Software · Desenvolvedora Full Stack",

        "hero.description":
            "Estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento, pesquisa, automação e cloud.",

        "hero.projects":
            "Ver projetos",

        "projects.title":
            "Projetos que transformam ideias em software.",

        "projects.description":
            "Alguns dos projetos que representam minha forma de aprender, construir e resolver problemas.",

        "about.title":
            "Antes do código, existe o problema.",

        "about.p1":
            "Sou estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas. Minha trajetória combina desenvolvimento de software, pesquisa, automação e computação em nuvem.",

        "about.p2":
            "Gosto de entender como as coisas funcionam, transformar requisitos em soluções e aprender novas tecnologias construindo projetos reais.",

        "about.p3":
            "Atualmente, direciono minha formação para engenharia de software, desenvolvimento full stack, arquitetura e cloud.",

        "stack.title":
            "Ferramentas que fazem parte da minha jornada.",

        "certification.description":
            "Certificação que representa minha base em computação em nuvem, serviços AWS, segurança, arquitetura e modelo de responsabilidade compartilhada.",

        "experience.title":
            "Experiência além da sala de aula.",

        "experience.description":
            "Contextos diferentes que contribuíram para minha formação técnica e profissional.",

        "experience.job1":
            "Desenvolvedora de Software · Bolsista de Pesquisa",

        "experience.job1a":
            "Desenvolvimento e atualização de interfaces de usuário em C#.",

        "experience.job1b":
            "Implementação de visualização de dados hiperespectrais para investigação científica.",

        "experience.job1c":
            "Refatoração de módulos de UI/UX.",

        "experience.job1d":
            "Automação de fluxos de trabalho internos.",

        "experience.job2":
            "Bolsista de Pesquisa · Robótica Educacional",

        "experience.job2a":
            "Desenvolvimento de protótipo funcional de sistema robótico educacional.",

        "experience.job2b":
            "Programação de microcontroladores Arduino.",

        "experience.job2c":
            "Integração de sensores para automação.",

        "experience.job2d":
            "Documentação e apresentação técnica.",

        "experience.job3":
            "Estagiária",

        "experience.job3a":
            "Gerenciamento e manutenção de bancos de dados institucionais.",

        "experience.job3b":
            "Digitalização e indexação de documentos.",

        "experience.job3c":
            "Atendimento e resolução de problemas.",

        "education.title":
            "Formação construída em paralelo.",

        "contact.title":
            "Vamos construir algo interessante.",

        "contact.description":
            "Se quiser conhecer melhor meu trabalho, meus projetos ou trocar uma ideia sobre tecnologia, meus canais estão abertos."

    },


    en: {

        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",

        "header.contact": "Let's talk",

        "hero.availability":
            "Open to technology opportunities",

        "hero.role":
            "Software Engineering · Full Stack Developer",

        "hero.description":
            "Software Engineering and Systems Analysis student with experience in software development, research, automation and cloud computing.",

        "hero.projects":
            "View projects",

        "projects.title":
            "Projects that turn ideas into software.",

        "projects.description":
            "A selection of projects that represent how I learn, build and solve problems.",

        "about.title":
            "Before the code, there is the problem.",

        "about.p1":
            "I am a Software Engineering and Systems Analysis student. My journey combines software development, research, automation and cloud computing.",

        "about.p2":
            "I enjoy understanding how things work, turning requirements into solutions and learning new technologies by building real projects.",

        "about.p3":
            "I am currently focusing my studies on software engineering, full stack development, architecture and cloud.",

        "stack.title":
            "Tools that are part of my journey.",

        "certification.description":
            "Certification that represents my foundation in cloud computing, AWS services, security, architecture and the shared responsibility model.",

        "experience.title":
            "Experience beyond the classroom.",

        "experience.description":
            "Different contexts that contributed to my technical and professional development.",

        "experience.job1":
            "Software Developer · Research Scholar",

        "experience.job1a":
            "Development and improvement of user interfaces using C#.",

        "experience.job1b":
            "Implementation of hyperspectral data visualization for scientific investigation.",

        "experience.job1c":
            "UI/UX module refactoring.",

        "experience.job1d":
            "Automation of internal workflows.",

        "experience.job2":
            "Research Scholar · Educational Robotics",

        "experience.job2a":
            "Development of a functional educational robotics system prototype.",

        "experience.job2b":
            "Arduino microcontroller programming.",

        "experience.job2c":
            "Sensor integration for automation.",

        "experience.job2d":
            "Technical documentation and presentations.",

        "experience.job3":
            "Intern",

        "experience.job3a":
            "Management and maintenance of institutional databases.",

        "experience.job3b":
            "Document digitization and indexing.",

        "experience.job3c":
            "Customer support and problem solving.",

        "education.title":
            "Education built in parallel.",

        "contact.title":
            "Let's build something interesting.",

        "contact.description":
            "If you want to learn more about my work, projects or talk about technology, my channels are open."

    }

};


let currentLanguage = "pt";


function updateLanguage() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.dataset.i18n;

            if (translations[currentLanguage][key]) {

                element.textContent =
                    translations[currentLanguage][key];

            }

        });


    const languageToggle =
        document.getElementById("languageToggle");

    if (currentLanguage === "pt") {

        languageToggle.innerHTML =
            `<span class="lang-active">PT</span> / EN`;

        document.documentElement.lang = "pt-BR";

    } else {

        languageToggle.innerHTML =
            `PT / <span class="lang-active">EN</span>`;

        document.documentElement.lang = "en";

    }

}


document
    .getElementById("languageToggle")
    .addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "pt"
                ? "en"
                : "pt";

        updateLanguage();

    });


/* =========================================================
   PROJECT DATABASE
========================================================= */

/*

    É AQUI QUE VOCÊ VAI EDITAR SEUS PROJETOS.

    image:
    coloque o caminho da imagem.

    github:
    coloque o link do GitHub.

    live:
    coloque o link do projeto publicado.

*/

const projects = [

    {

        id: "dna",

        number: "01",

        category: "FULL STACK · E-COMMERCE",

        title: "DNA Jeans",

        description:
            "E-commerce de jeanswear pensado para unir experiência digital, tecnologia e personalização.",

        icon:
            "fa-solid fa-shirt",

        image:
            "",

        github:
            "https://github.com/juliaDemartini",

        live:
            "#",

        technologies: [

            {
                name: "C#",
                icon: "devicon-csharp-plain colored"
            },

            {
                name: "React",
                icon: "devicon-react-original colored"
            },

            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            },

            {
                name: "SQL",
                icon: "devicon-mysql-plain colored"
            }

        ],

        overview:
            "Projeto de e-commerce de jeanswear desenvolvido com foco em experiência de usuário, organização de produto e possibilidades de personalização.",

        problem:
            "Como criar uma experiência de compra digital que vá além de uma vitrine tradicional e ajude o usuário a encontrar uma peça adequada às suas necessidades?",

        solution:
            "A proposta combina catálogo, experiência visual, seleção de variações e uma arquitetura preparada para recursos de personalização.",

        features: [

            "Catálogo de produtos",

            "Variações de produtos",

            "Página detalhada do produto",

            "Experiência responsiva",

            "Fluxo de compra",

            "Estrutura preparada para provador virtual",

            "Integração com API"

        ],

        requirements: [

            "Interface responsiva",

            "Separação entre frontend e backend",

            "Persistência de dados",

            "Organização de componentes",

            "Validação de dados",

            "Experiência consistente em diferentes dispositivos"

        ],

        architecture:
            "Frontend estruturado por componentes e comunicação com API responsável pela lógica e persistência das informações.",

        methods:
            "Desenvolvimento incremental, organização por funcionalidades, testes manuais dos fluxos e preocupação com experiência do usuário."

    },


    {

        id: "foodexpress",

        number: "02",

        category: "WEB · FULL STACK",

        title: "FoodExpress",

        description:
            "Aplicação web desenvolvida para explorar fluxos de pedidos e experiências digitais.",

        icon:
            "fa-solid fa-burger",

        image:
            "",

        github:
            "https://github.com/juliaDemartini/FoodExpress",

        live:
            "https://juliademartini.github.io/foodexpress/",

        technologies: [

            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            },

            {
                name: "HTML",
                icon: "devicon-html5-plain colored"
            },

            {
                name: "CSS",
                icon: "devicon-css3-plain colored"
            }

        ],

        overview:
            "Projeto desenvolvido para praticar construção de interfaces web, organização de dados e fluxos de interação.",

        problem:
            "Como representar de forma simples e intuitiva um fluxo digital de seleção e pedido?",

        solution:
            "A aplicação organiza produtos, informações e ações em uma interface responsiva e orientada ao fluxo do usuário.",

        features: [

            "Catálogo",

            "Cards de produtos",

            "Interações de usuário",

            "Layout responsivo",

            "Organização de componentes"

        ],

        requirements: [

            "HTML semântico",

            "CSS responsivo",

            "JavaScript para interações",

            "Boa organização visual"

        ],

        architecture:
            "Aplicação web estruturada em HTML, CSS e JavaScript, com separação das responsabilidades de apresentação e interação.",

        methods:
            "Construção incremental da interface e validação dos principais fluxos de interação."

    },


    {

        id: "valoreco",

        number: "03",

        category: "IOT · AUTOMATION",

        title: "ValorEco",

        description:
            "Conceito de sistema inteligente de reciclagem que conecta hardware, automação e recompensas.",

        icon:
            "fa-solid fa-recycle",

        image:
            "",

        github:
            "https://github.com/juliaDemartini/ValorEco",

        live:
            "#",

        technologies: [

            {
                name: "Arduino",
                icon: "devicon-arduino-plain colored"
            },

            {
                name: "C++",
                icon: "devicon-cplusplus-plain colored"
            }

        ],

        overview:
            "Projeto que explora a integração entre software, hardware e automação para incentivar práticas sustentáveis.",

        problem:
            "Como utilizar tecnologia para tornar processos de reciclagem mais interativos e incentivar a participação das pessoas?",

        solution:
            "O conceito utiliza sensores e automação para identificar interações e associá-las a um sistema de recompensas.",

        features: [

            "Sensores",

            "Microcontrolador",

            "Automação",

            "Sistema de recompensa",

            "Integração hardware/software"

        ],

        requirements: [

            "Arduino",

            "Sensores compatíveis",

            "Lógica de controle",

            "Comunicação entre componentes"

        ],

        architecture:
            "Sistema baseado em microcontrolador conectado a sensores responsáveis pela captura das interações.",

        methods:
            "Prototipação, experimentação com hardware e desenvolvimento incremental."

    },


    {

        id: "pontomusical",

        number: "04",

        category: "WEB DEVELOPMENT",

        title: "Ponto Musical",

        description:
            "Projeto web desenvolvido para explorar apresentação de conteúdo, navegação e experiência de usuário.",

        icon:
            "fa-solid fa-music",

        image:
            "",

        github:
            "https://github.com/juliaDemartini",

        live:
            "https://juliademartini.github.io/pontomusical/",

        technologies: [

            {
                name: "HTML",
                icon: "devicon-html5-plain colored"
            },

            {
                name: "CSS",
                icon: "devicon-css3-plain colored"
            },

            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            }

        ],

        overview:
            "Aplicação web desenvolvida para praticar construção de interfaces e organização de conteúdo.",

        problem:
            "Como estruturar uma experiência web simples, clara e visualmente consistente?",

        solution:
            "O projeto utiliza uma arquitetura de interface focada em navegação clara, hierarquia visual e responsividade.",

        features: [

            "Navegação",

            "Conteúdo estruturado",

            "Interface responsiva",

            "Interações JavaScript"

        ],

        requirements: [

            "HTML semântico",

            "CSS responsivo",

            "JavaScript",

            "Compatibilidade com dispositivos móveis"

        ],

        architecture:
            "Aplicação frontend organizada em estrutura semântica, estilos responsivos e scripts de interação.",

        methods:
            "Desenvolvimento incremental e revisão visual das interfaces."

    }

];


/* =========================================================
   PROJECT CARDS
========================================================= */

const projectsGrid =
    document.getElementById("projectsGrid");


function renderProjects() {

    projectsGrid.innerHTML = "";

    projects.forEach(project => {

        const card =
            document.createElement("article");

        card.className = "project-card";

        let imageContent;

        if (project.image) {

            imageContent =
                `<img src="${project.image}"
                      alt="${project.title}">`;

        } else {

            imageContent = `

                <div class="project-image-placeholder">

                    <div class="project-placeholder-content">

                        <i class="${project.icon}"></i>

                        <span>
                            ADICIONE SUA IMAGEM
                        </span>

                    </div>

                </div>

            `;

        }


        const technologies =
            project.technologies
                .map(tech => `

                    <span>

                        <i class="${tech.icon}"></i>

                        ${tech.name}

                    </span>

                `)
                .join("");


        card.innerHTML = `

            <div class="project-image">

                ${imageContent}

                <div class="project-number">
                    ${project.number}
                </div>

                <div class="project-open">
                    ↗
                </div>

            </div>


            <div class="project-info">

                <div class="project-category">
                    ${project.category}
                </div>

                <div class="project-info-top">

                    <div>

                        <h3>
                            ${project.title}
                        </h3>

                        <p>
                            ${project.description}
                        </p>

                    </div>

                </div>


                <div class="project-tech">

                    ${technologies}

                </div>

            </div>

        `;


        card.addEventListener("click", () => {

            openProject(project);

        });


        projectsGrid.appendChild(card);

    });

}


/* =========================================================
   PROJECT MODAL
========================================================= */

const modal =
    document.getElementById("projectModal");

const modalContent =
    document.getElementById("modalContent");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");


function openProject(project) {

    const technologyHTML =
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


    let galleryHTML;

    if (project.image) {

        galleryHTML = `

            <div class="modal-gallery-item large">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

            </div>

            <div class="modal-gallery-item">

                <div class="modal-image-placeholder">
                    ADICIONE AQUI OUTRA IMAGEM DO PROJETO
                </div>

            </div>

            <div class="modal-gallery-item">

                <div class="modal-image-placeholder">
                    ADICIONE AQUI OUTRA IMAGEM DO PROJETO
                </div>

            </div>

        `;

    } else {

        galleryHTML = `

            <div class="modal-gallery-item large">

                <div class="modal-image-placeholder">

                    <div>

                        <strong>
                            IMAGEM PRINCIPAL
                        </strong>

                        <br><br>

                        Coloque aqui um screenshot
                        principal do projeto.

                    </div>

                </div>

            </div>


            <div class="modal-gallery-item">

                <div class="modal-image-placeholder">

                    Screenshot 02

                </div>

            </div>


            <div class="modal-gallery-item">

                <div class="modal-image-placeholder">

                    Screenshot 03

                </div>

            </div>

        `;

    }


    modalContent.innerHTML = `

        <div class="modal-project-hero">

            <div class="modal-project-category">

                ${project.category}

            </div>

            <h2>
                ${project.title}
            </h2>

            <p>
                ${project.overview}
            </p>


            <div class="modal-project-actions">

                <a
                    href="${project.github}"
                    target="_blank"
                    class="modal-link"
                >

                    <i class="fa-brands fa-github"></i>

                    GitHub

                    ↗

                </a>


                ${
                    project.live !== "#"
                    ?
                    `
                    <a
                        href="${project.live}"
                        target="_blank"
                        class="modal-link"
                    >

                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        Ver projeto

                        ↗

                    </a>
                    `
                    :
                    ""
                }

            </div>

        </div>


        <div class="modal-gallery">

            ${galleryHTML}

        </div>


        <div class="modal-project-body">

            <div class="detail-grid">


                <div class="detail-block">

                    <h3>
                        O problema
                    </h3>

                    <p>
                        ${project.problem}
                    </p>

                </div>


                <div class="detail-block">

                    <h3>
                        A solução
                    </h3>

                    <p>
                        ${project.solution}
                    </p>

                </div>


                <div class="detail-block">

                    <h3>
                        Funcionalidades
                    </h3>

                    <ul>

                        ${featuresHTML}

                    </ul>

                </div>


                <div class="detail-block">

                    <h3>
                        Requisitos
                    </h3>

                    <ul>

                        ${requirementsHTML}

                    </ul>

                </div>


                <div class="detail-block">

                    <h3>
                        Estrutura / Arquitetura
                    </h3>

                    <p>
                        ${project.architecture}
                    </p>

                </div>


                <div class="detail-block">

                    <h3>
                        Métodos e desenvolvimento
                    </h3>

                    <p>
                        ${project.methods}
                    </p>

                </div>


                <div class="detail-block">

                    <h3>
                        Tecnologias
                    </h3>

                    <div class="detail-tech">

                        ${technologyHTML}

                    </div>

                </div>


            </div>

        </div>

    `;


    modal.classList.add("active");

    document.body.classList.add("modal-open");

    modal.scrollTop = 0;

}


function closeProject() {

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


modalClose.addEventListener(
    "click",
    closeProject
);


modalOverlay.addEventListener(
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
   INIT
========================================================= */

renderProjects();

updateLanguage();


/* =========================================================
   HEADER SCROLL
========================================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background =
            "rgba(8,9,13,.88)";

    } else {

        header.style.background =
            "linear-gradient(to bottom, rgba(8,9,13,.96), rgba(8,9,13,.72), transparent)";

    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .timeline-item, .course-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: .08
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});

/* =========================================================
   MOBILE MENU TOGGLE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("active");
        
        // Troca o ícone de barras para 'X' (fechar) e vice-versa
        const icon = menuToggle.querySelector("i");
        if (navigation.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // Fecha o menu ao clicar em qualquer link da navegação
    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });
}