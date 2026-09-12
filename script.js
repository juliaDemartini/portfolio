const root=document.documentElement;
const themeToggle=document.getElementById("themeToggle");
const langToggle=document.getElementById("langToggle");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.querySelector(".nav-links");

const translations={
  pt:{
    "nav.about":"Sobre","nav.experience":"Experiência","nav.projects":"Projetos","nav.skills":"Skills","nav.education":"Formação","nav.contact":"Contato",
    "hero.subtitle":"Full Stack Development · UI/UX · Cloud · Automation",
    "hero.description":"Construo aplicações e soluções digitais combinando desenvolvimento de software, experiência do usuário e tecnologia.",
    "hero.projects":"Ver projetos ↗","hero.experience":"Conhecer minha experiência",
    "labels.about":"SOBRE MIM","labels.experience":"EXPERIÊNCIA","labels.projects":"SELECTED WORK","labels.skills":"SKILLS","labels.education":"EDUCATION",
    "about.title":"Tecnologia com<br><em>propósito.</em>",
    "about.p1":"Sou estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas, com experiência prática em desenvolvimento de software, pesquisa científica, interfaces, automação e tecnologia aplicada.",
    "about.p2":"Minha trajetória combina desenvolvimento de sistemas, pesquisa, robótica educacional, dados e experiência do usuário.",
    "about.p3":"Tenho interesse em construir produtos digitais que sejam tecnicamente sólidos, úteis e intuitivos.",
    "experience.title":"Onde tecnologia<br>encontra <em>problemas reais.</em>",
    "projects.title":"Ideias transformadas<br>em <em>produtos.</em>"
  },
  en:{
    "nav.about":"About","nav.experience":"Experience","nav.projects":"Projects","nav.skills":"Skills","nav.education":"Education","nav.contact":"Contact",
    "hero.subtitle":"Full Stack Development · UI/UX · Cloud · Automation",
    "hero.description":"I build digital applications and solutions combining software development, user experience and technology.",
    "hero.projects":"View projects ↗","hero.experience":"See my experience",
    "labels.about":"ABOUT ME","labels.experience":"EXPERIENCE","labels.projects":"SELECTED WORK","labels.skills":"SKILLS","labels.education":"EDUCATION",
    "about.title":"Technology with<br><em>purpose.</em>",
    "about.p1":"I am a Software Engineering and Systems Analysis student with hands-on experience in software development, scientific research, interfaces, automation and applied technology.",
    "about.p2":"My journey combines systems development, research, educational robotics, data and user experience.",
    "about.p3":"I am interested in building digital products that are technically solid, useful and intuitive.",
    "experience.title":"Where technology<br>meets <em>real problems.</em>",
    "projects.title":"Ideas turned<br>into <em>products.</em>"
  }
};

let lang=localStorage.getItem("julia-lang")||"pt";
let theme=localStorage.getItem("julia-theme")||"light";
root.dataset.theme=theme;
langToggle.textContent=lang==="pt"?"EN":"PT";

function applyLang(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key]) el.innerHTML=translations[lang][key];
  });
  document.documentElement.lang=lang==="pt"?"pt-BR":"en";
  langToggle.textContent=lang==="pt"?"EN":"PT";
  localStorage.setItem("julia-lang",lang);
}
langToggle.addEventListener("click",()=>{lang=lang==="pt"?"en":"pt";applyLang()});
themeToggle.addEventListener("click",()=>{
  theme=theme==="light"?"dark":"light";
  root.dataset.theme=theme;
  localStorage.setItem("julia-theme",theme);
});

menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

document.querySelectorAll(".experience-head").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const item=btn.closest(".experience-item");
    const active=item.classList.contains("active");
    document.querySelectorAll(".experience-item").forEach(i=>{i.classList.remove("active");i.querySelector("button").setAttribute("aria-expanded","false")});
    if(!active){item.classList.add("active");btn.setAttribute("aria-expanded","true")}
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const modal=document.getElementById("caseModal");
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelectorAll(".case-btn").forEach(btn=>btn.addEventListener("click",()=>{modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}));
document.querySelector(".modal-close").addEventListener("click",closeModal);
document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

applyLang();
