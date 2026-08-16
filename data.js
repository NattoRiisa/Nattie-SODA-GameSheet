//  Character sheet data to easily edit, and is easily accessible.

//  Sheet data - Main info
const character = {
    name: "Nattie",
    title: "Enlightened Artist",
    level: 9,

    hp: 30,
    maxHp: 30,

    im: 30,
    maxIm: 30,

    tp: 0,
    maxTp: 77,

    atk: 4,
    def: 0,
    dice: "D3",

    mind: 20,
    body: 20,
    soul: 49,
    basicAttack: {
        type: "Melee",
        speed: "Fast",
        description: "Nattie starts attacking you with her hands. Her fingers can cause many courses of pain."
    },
};

//  Sheet data - Creations
const creations = [
    {
        name: "Example Creation",
        type: "Bane",
        cost: "+1",
        description: "x happens.",
        used: true
    },
    {
        name: "Example Creation",
        type: "Bane",
        cost: "+1",
        description: "x happens.",
        used: true
    }
]

//  Sheet data - Skills/Banes
const abilities = [
    {
        name: "butt slapping",
        type: "Skill",
        cost: "-1",
        description: "it slaps your butt.",
        used: true
    },

    {
        name: "powerful ii",
        type: "Skill",
        cost: "-20",
        description: "increase 2 atk.",
        used: true
    },

    {
        name: "Example Bane",
        type: "Bane",
        cost: "+1",
        description: "Something bad happens."
    }
];

const skills = abilities.filter(ability => ability.type === "Skill");
const banes = abilities.filter(ability => ability.type === "Bane");


document.getElementById("character-name").textContent = character.name;
document.getElementById("character-title").textContent =
    `${character.title} - Level ${character.level}`;

document.getElementById("hp").textContent =
    `${character.hp}/${character.maxHp}`;

document.getElementById("im").textContent =
    `${character.im}/${character.maxIm}`;

document.getElementById("tp").textContent =
    `${character.tp}/${character.maxTp}`;

document.getElementById("atk").textContent = character.atk;
document.getElementById("def").textContent = character.def;
document.getElementById("dice").textContent = character.dice;

document.getElementById("mind").textContent = character.mind;
document.getElementById("body").textContent = character.body;
document.getElementById("soul").textContent = character.soul;

document.getElementById("creativity").textContent = Math.floor(character.mind / 2);
document.getElementById("technology").textContent = Math.floor(character.mind / 2);
document.getElementById("knowledge").textContent = Math.floor(character.mind / 2);

document.getElementById("strength").textContent = Math.floor(character.body / 2);
document.getElementById("dexterity").textContent = Math.floor(character.body / 2);
document.getElementById("stealth").textContent = Math.floor(character.body / 2);

document.getElementById("charisma").textContent = Math.floor(character.soul / 2);
document.getElementById("perception").textContent = Math.floor(character.soul / 2);
document.getElementById("willpower").textContent = Math.floor(character.soul / 2);

document.getElementById("basic-attack-type").textContent =
    character.basicAttack.type;

document.getElementById("basic-attack-speed").textContent =
    character.basicAttack.speed;

document.getElementById("basic-attack-description").textContent =
    character.basicAttack.description;

document.getElementById("basic-attack-damage").textContent =
    `(${character.atk} + 2) [${character.dice}]`;

const skillsContainer = document.getElementById("skills");
const baneContainer = document.getElementById("banes");

skills.forEach(skill => {

    const skillElement = document.createElement("div");

    skillElement.innerHTML = `
        <h3>${skill.name} <span>(${skill.cost} TP)</span></h3>
        <p>${skill.description}</p>
    `;
    skillsContainer.appendChild(skillElement);
});

banes.forEach(bane => {

    const baneElement = document.createElement("div");

    baneElement.innerHTML = `
        <h3>${bane.name} <span>(${bane.cost} IM)</span></h3>
        <p>${bane.description}</p>
    `;
    baneContainer.appendChild(baneElement);
});