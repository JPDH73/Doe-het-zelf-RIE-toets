const riskCatalog = [
  {
    id: "psychosociale-arbeidsbelasting",
    title: "1. Psychosociale arbeidsbelasting",
    items: [
      "Werkdruk",
      "Pesten, seksuele intimidatie, agressie en geweld",
      "Discriminatie",
      "Inhoud en organisatie van de arbeid",
    ],
  },
  {
    id: "gevaarlijke-stoffen",
    title: "2. Gevaarlijke stoffen",
    items: [
      "Gezondheidsrisico's, zoals carcinogene, mutagene, reprotoxische en sensibiliserende stoffen en procesemissies",
      "Veiligheidsrisico's, zoals brand, explosie en zware ongevallen bij opslag of gebruik",
    ],
  },
  {
    id: "biologische-agentia",
    title: "3. Biologische agentia",
    items: [
      "Micro-organismen, zoals bacterien, schimmels, virussen, parasieten, infectieuze agentia, toxinen en allergenen",
    ],
  },
  {
    id: "fysische-factoren",
    title: "4. Fysische factoren",
    items: [
      "Klimaat, zoals hoge en lage temperaturen, luchtverversing, luchtvochtigheid en tocht",
      "Straling, zoals niet-ioniserende straling, uv-straling en kunstmatige optische straling",
      "Verlichting en daglicht",
      "Schadelijk of hinderlijk geluid",
      "Trillingen en schokken",
      "Werken onder overdruk",
    ],
  },
  {
    id: "werk-en-rusttijden",
    title: "5. Werk- en rusttijden",
    items: ["Werk- en rusttijden", "Ploegendienst", "Nachtarbeid"],
  },
  {
    id: "arbeidsmiddelen-en-arbeidsplaatsen",
    title: "6. Arbeidsmiddelen en arbeidsplaatsen",
    items: [
      "Arbeidsmiddelen: geschiktheid, beschikbaarheid, bevoegd gebruik, keuringen en onderhoud",
      "Inrichting arbeidsplaatsen, zoals werkruimten, orde en netheid, beveiligingen, signalering, bewegingsruimte, werken op hoogte en noodvoorzieningen",
      "Persoonlijke beschermingsmiddelen: noodzaak, geschiktheid, keuringen en onderhoud",
    ],
  },
  {
    id: "fysieke-belasting",
    title: "7. Fysieke belasting",
    items: [
      "Fysieke onderbelasting, zoals weinig beweging en lang zitten of staan",
      "Fysieke overbelasting, zoals tillen, dragen, duwen, trekken, repeterende bewegingen en ongunstige houdingen",
      "Beeldschermwerk",
    ],
  },
  {
    id: "bijzondere-categorieen",
    title: "8. Bijzondere categorieen werknemers die mogelijk extra risico lopen",
    items: [
      "Uitzendkrachten, stagiaires, vrijwilligers, anderstaligen en andere personen of derden, zoals bezoekers en voorbijgangers",
      "Zwangeren, jeugdigen en werknemers met een beperking of gedeeltelijke arbeidsongeschiktheid",
      "Werkers die plaats- en tijdonafhankelijk werken",
    ],
  },
];

const questions = [
  {
    id: "1-1-1",
    category: "1.1 Toetsen op volledigheid",
    title:
      "Zijn alle hoofd- en deelrisico's die van toepassing zijn op de organisatie beschreven in de RI&E, inclusief de achterliggende grondoorzaken of een verantwoording waarom dit niet is gedaan?",
    help:
      "Doorloop per hoofd- en deelrisico eerst of het van toepassing is. Alleen voor toepasselijke risico's verschijnen de vervolgvragen over beschrijving, verantwoording en achterliggende grondoorzaken.",
    severity: 3,
    type: "risk-inventory",
  },
  {
    id: "1-1-2",
    category: "1.1 Toetsen op volledigheid",
    title:
      "Is gebruik gemaakt van gegevens van verzuimanalyses om inzicht te krijgen in de arbeidsgerelateerde oorzaken van het verzuim?",
    severity: 2,
  },
  {
    id: "1-1-3",
    category: "1.1 Toetsen op volledigheid",
    title:
      "Zijn de inzichten van de bedrijfsarts en van andere deskundigen die de werkgever inschakelt voor het verzuim- en arbeidsomstandighedenbeleid meegenomen in de RI&E?",
    severity: 2,
  },
  {
    id: "1-1-4",
    category: "1.1 Toetsen op volledigheid",
    title: "Zijn de inzichten van de werknemers meegenomen in de RI&E?",
    severity: 2,
  },
  {
    id: "1-1-5",
    category: "1.1 Toetsen op volledigheid",
    title: "Is gebruik gemaakt van de inzichten van de preventiemedewerkers?",
    severity: 2,
  },
  {
    id: "1-1-6",
    category: "1.1 Toetsen op volledigheid",
    title: "Zijn de analyses van arbeidsgezondheidskundige onderzoeken gebruikt in de RI&E?",
    severity: 2,
  },
  {
    id: "1-1-7",
    category: "1.1 Toetsen op volledigheid",
    title:
      "Zijn ongevallenregistraties aanwezig en geanalyseerd op de achterliggende grondoorzaken en zijn die verwerkt in de RI&E?",
    severity: 2,
  },
  {
    id: "1-1-8",
    category: "1.1 Toetsen op volledigheid",
    title: "Zijn de taken van de preventiemedewerker ingevuld en uitgevoerd?",
    severity: 2,
  },
  {
    id: "1-1-9",
    category: "1.1 Toetsen op volledigheid",
    title:
      "Is beschreven hoeveel preventiemedewerkers nodig zijn om de taken uit te voeren en wat de benodigde kennis en capaciteit is voor het uitvoeren van de taken?",
    severity: 2,
  },
  {
    id: "1-1-10",
    category: "1.1 Toetsen op volledigheid",
    title:
      "Is beschreven welke arbeidsgezondheidskundige onderzoeken nodig zijn, wat de inhoud en de frequentie is?",
    severity: 2,
  },
  {
    id: "1-1-11",
    category: "1.1 Toetsen op volledigheid",
    title: "Is het arbobeleid beschreven en operationeel?",
    severity: 3,
  },
  {
    id: "1-1-12",
    category: "1.1 Toetsen op volledigheid",
    title: "Is de organisatie van de bedrijfshulpverlening (BHV) beschreven en operationeel?",
    severity: 3,
  },
  {
    id: "1-1-13",
    category: "1.1 Toetsen op volledigheid",
    title: "Zijn de risicobeperkende maatregelen met betrekking tot de aanwezige risico's beschreven?",
    severity: 3,
  },
  {
    id: "1-1-14",
    category: "1.1 Toetsen op volledigheid",
    title:
      "Zijn de risicobeperkende maatregelen getoetst aan de arbeidshygienische principes en het daarbij te hanteren redelijkerwijsbeginsel?",
    severity: 3,
  },
  {
    id: "1-1-15",
    category: "1.1 Toetsen op volledigheid",
    title:
      "Is bepaald of nadere verdiepende RI&E's en/of aanvullende metingen nodig zijn om de blootstelling aan bepaalde arbeidsbelastende factoren en de daarmee samenhangende risico's vast te stellen?",
    severity: 3,
  },
  {
    id: "1-2",
    category: "1.2 Actualiteit",
    title: "Is de RI&E actueel en is de actualiteit geborgd?",
    severity: 3,
  },
  {
    id: "1-3",
    category: "1.3 Actuele inzichten",
    title:
      "Voldoet de RI&E aan de actuele inzichten, gebaseerd op de stand van de wetenschap en de professionele dienstverlening?",
    severity: 3,
  },
  {
    id: "1-3b",
    category: "1.3 Actuele inzichten",
    title:
      "Zijn de maatregelen uit de arbocatalogus meegenomen bij het opstellen van de RI&E?",
    severity: 2,
  },
  {
    id: "1-4-1",
    category: "1.4 Toetsen op betrouwbaarheid",
    title:
      "Zijn de blootstellingen aan de risico's representatief in beeld gebracht, zonder over- of onderschatting?",
    severity: 3,
  },
  {
    id: "1-4-2",
    category: "1.4 Toetsen op betrouwbaarheid",
    title: "Zijn de blootstellingen met gevalideerde methodes onderzocht en in kaart gebracht?",
    severity: 3,
  },
  {
    id: "1-4-3",
    category: "1.4 Toetsen op betrouwbaarheid",
    title:
      "Is de evaluatie van de blootstelling aan de risico's correct uitgevoerd en is deze vergeleken met relevante wettelijke en wetenschappelijk onderbouwde grenswaarden?",
    severity: 3,
  },
  {
    id: "2-1",
    category: "2. Plan van aanpak",
    title:
      "Zijn maatregelen voorgesteld om de gevaren weg te nemen of om de risico's op het gebied van veiligheid en gezondheid zoveel mogelijk te beperken?",
    severity: 3,
  },
  {
    id: "2-2",
    category: "2. Plan van aanpak",
    title:
      "Is bij de voorstellen voor risicobeperkende maatregelen rekening gehouden met de arbeidshygienische strategie?",
    severity: 3,
  },
  {
    id: "2-3",
    category: "2. Plan van aanpak",
    title:
      "Als in het plan van aanpak bij de voorgestelde maatregelen is afgeweken van de arbeidshygienische strategie, is dit dan gemotiveerd?",
    severity: 2,
  },
  {
    id: "2-4",
    category: "2. Plan van aanpak",
    title: "Is beschreven hoe de maatregelen worden geimplementeerd?",
    severity: 2,
  },
  {
    id: "2-5",
    category: "2. Plan van aanpak",
    title: "Is de effectiviteit van de maatregelen ingeschat?",
    severity: 2,
  },
  {
    id: "2-6",
    category: "2. Plan van aanpak",
    title: "Is rekening gehouden met ongewenste consequenties van maatregelen?",
    severity: 2,
  },
  {
    id: "2-7",
    category: "2. Plan van aanpak",
    title:
      "Is de juiste prioritering van maatregelen voorgesteld op basis van de weging van de grootte van de risico's?",
    severity: 3,
  },
  {
    id: "2-8",
    category: "2. Plan van aanpak",
    title: "Is het plan van aanpak concreet en realistisch (SMART)?",
    severity: 2,
  },
  {
    id: "2-9",
    category: "2. Plan van aanpak",
    title:
      "Hebben de door de werkgever aangewezen personen (actiehouders) voldoende bevoegdheid om de voorgestelde maatregelen uit het plan van aanpak uit te voeren?",
    severity: 3,
  },
  {
    id: "3-1",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 1.36 Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie voor jeugdigen?",
    severity: 2,
  },
  {
    id: "3-2",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 1.41 Arbobesluit: risico-inventarisatie en -evaluatie voor zwangere medewerkers en medewerkers tijdens de lactatie?",
    severity: 2,
  },
  {
    id: "3-3",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 4.97 Arbobesluit: biologische agentia in diergeneeskunde en gezondheidszorg?",
    severity: 2,
  },
  {
    id: "3-4",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 5.3 Arbobesluit: beperken gevaren en risico-inventarisatie en -evaluatie voor fysieke belasting?",
    severity: 2,
  },
  {
    id: "3-5",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 5.9 Arbobesluit: risico-inventarisatie en -evaluatie voor beeldschermwerk?",
    severity: 2,
  },
  {
    id: "3-6",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 6.7 Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen en meten van geluid?",
    severity: 2,
  },
  {
    id: "3-7",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 6.8 Arbobesluit: maatregelen ter voorkoming of beperking van de blootstelling aan geluid?",
    severity: 2,
  },
  {
    id: "3-8",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 6.11b Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen en meten van mechanische trillingen?",
    severity: 2,
  },
  {
    id: "3-9",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 6.11c Arbobesluit: voorkomen of beperken van schadelijke trillingen?",
    severity: 2,
  },
  {
    id: "3-10",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 6.12d Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen, meten en berekenen van optische straling?",
    severity: 2,
  },
  {
    id: "3-11",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 6.12e Arbobesluit: maatregelen ter voorkoming of beperking van de blootstelling aan optische straling?",
    severity: 2,
  },
  {
    id: "3-12",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 6.12k Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen, meten en berekenen van elektromagnetische velden?",
    severity: 2,
  },
  {
    id: "3-13",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 6.12l Arbobesluit: maatregelen ter voorkoming of beperking van de blootstelling aan elektromagnetische velden?",
    severity: 2,
  },
  {
    id: "3-14",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 7.3 Arbobesluit: geschiktheid van arbeidsmiddelen?",
    severity: 2,
  },
  {
    id: "3-15",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 7.23 Arbobesluit: algemene eisen voor tijdelijke werkzaamheden op hoogte en beschikbaarheid van arbeidsmiddelen?",
    severity: 2,
  },
  {
    id: "3-16",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 7.23c Arbobesluit: specifieke bepalingen voor het gebruik van toegangs- en positioneringstechnieken met lijnen?",
    severity: 2,
  },
  {
    id: "3-17",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 7.23d Arbobesluit: toepassing van werkbakken en werkplatforms?",
    severity: 2,
  },
  {
    id: "3-18",
    category: "3. Nadere RI&E-voorschriften",
    title:
      "Is invulling gegeven aan artikel 8.2 Arbobesluit: keuze van persoonlijke beschermingsmiddelen?",
    severity: 2,
  },
];

const options = [
  {
    value: "yes",
    label: "Ja, op orde",
    score: 0,
    detail: "Er is een aantoonbare aanpak aanwezig.",
  },
  {
    value: "partial",
    label: "Deels",
    score: 1,
    detail: "Er is iets geregeld, maar niet volledig of niet aantoonbaar.",
  },
  {
    value: "no",
    label: "Nee",
    score: 2,
    detail: "Dit ontbreekt of is onvoldoende geborgd.",
  },
];

const optionalOptions = [
  ...options,
  {
    value: "na",
    label: "Niet van toepassing",
    score: 0,
    detail: "Dit onderwerp speelt hier niet of nauwelijks.",
  },
];

const requirementsOptions = [
  {
    value: "yes",
    label: "Ja, op orde",
    score: 0,
    detail: "Er is een aantoonbare aanpak aanwezig.",
  },
  {
    value: "no",
    label: "Nee",
    score: 2,
    detail: "Dit ontbreekt of is onvoldoende geborgd.",
  },
  {
    value: "na",
    label: "Niet van toepassing",
    score: 0,
    detail: "Dit onderwerp speelt hier niet of nauwelijks.",
  },
];

const yesNoOptions = [
  {
    value: "yes",
    label: "Ja, op orde",
    score: 0,
    detail: "Er is een aantoonbare aanpak aanwezig.",
  },
  {
    value: "no",
    label: "Nee",
    score: 2,
    detail: "Dit ontbreekt of is onvoldoende geborgd.",
  },
];

const questionGroups = document.querySelector("#questionGroups");
const template = document.querySelector("#questionTemplate");
const survey = document.querySelector("#survey");
const companyName = document.querySelector("#companyName");
const contactName = document.querySelector("#contactName");
const industry = document.querySelector("#industry");
const employees = document.querySelector("#employees");
const assessmentDate = document.querySelector("#assessmentDate");
const statusBadge = document.querySelector("#statusBadge");
const scoreValue = document.querySelector("#scoreValue");
const progressValue = document.querySelector("#progressValue");
const riskLevel = document.querySelector("#riskLevel");
const criticalCount = document.querySelector("#criticalCount");
const priorityList = document.querySelector("#priorityList");
const summaryText = document.querySelector("#summaryText");
const reportOutput = document.querySelector("#reportOutput");
const scoreRing = document.querySelector(".score-ring");
const copyReport = document.querySelector("#copyReport");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "en")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createBinaryOptions(name, choices, selectedValue) {
  const wrapper = document.createElement("div");
  wrapper.className = "binary-options";

  for (const choice of choices) {
    const label = document.createElement("label");
    label.className = "binary-pill";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = choice.value;
    input.checked = selectedValue === choice.value;

    const text = document.createElement("span");
    text.textContent = choice.label;

    label.append(input, text);
    wrapper.append(label);
  }

  return wrapper;
}

function createRiskColumn(questionText, fieldName, choices, itemId) {
  const block = document.createElement("div");
  block.className = "risk-question-block";
  block.dataset.field = fieldName;
  block.innerHTML = `<p class="risk-question">${questionText}</p>`;
  block.append(createBinaryOptions(`risk-${itemId}-${fieldName}`, choices, null));
  return block;
}

function requiresEvidenceWithoutNA(question) {
  return [
    "1.1 Toetsen op volledigheid",
    "1.3 Actuele inzichten",
    "1.4 Toetsen op betrouwbaarheid",
    "2. Plan van aanpak",
  ].includes(question.category);
}

function requiresEvidenceField(question) {
  return [
    "1.1 Toetsen op volledigheid",
    "1.3 Actuele inzichten",
    "1.4 Toetsen op betrouwbaarheid",
    "2. Plan van aanpak",
    "3. Nadere RI&E-voorschriften",
  ].includes(question.category);
}

function getDefaultHelpText(question) {
  if (question.category === "2. Plan van aanpak") {
    return "Beoordeel of dit onderdeel aantoonbaar is uitgewerkt binnen het plan van aanpak.";
  }

  if (question.category === "3. Nadere RI&E-voorschriften") {
    return "Beoordeel of dit nadere RI&E-voorschrift, voor zover van toepassing, aantoonbaar is uitgewerkt binnen de RI&E.";
  }

  return "Beoordeel of dit onderdeel aantoonbaar is uitgewerkt binnen de RI&E.";
}

function getQuestionOptions(question) {
  if (question.category === "3. Nadere RI&E-voorschriften") {
    return requirementsOptions;
  }

  if (question.category === "1.3 Actuele inzichten") {
    return yesNoOptions;
  }

  if (question.category === "1.2 Actualiteit") {
    return options;
  }

  if (requiresEvidenceWithoutNA(question)) {
    return options;
  }

  return optionalOptions;
}

function createEvidenceField(name) {
  const evidence = document.createElement("label");
  evidence.className = "risk-evidence";
  evidence.innerHTML = `
    <span class="risk-evidence-label">Controleerbaar bewijs of toelichting</span>
    <textarea
      class="risk-note"
      name="${name}"
      placeholder="Omschrijf hier wat het controleerbare bewijs is, of waarom dit niet van toepassing is of niet is opgenomen, op een manier die toetsbaar en navolgbaar is."
    ></textarea>
  `;

  return evidence;
}

function renderRiskInventory(container) {
  const inventory = document.createElement("div");
  inventory.className = "risk-inventory";

  const intro = document.createElement("div");
  intro.className = "risk-intro";
  intro.innerHTML = `
    <strong>Doorloop per hoofd- en deelrisico dezelfde beslisroute.</strong>
    <p>
      Eerst bepaal je of het risico van toepassing is. Alleen als het risico van toepassing is,
      volgt de vraag of het is beschreven in de RI&E. Daarna toon ik afhankelijk van je antwoord
      de vraag over verantwoording of de inventarisatie van achterliggende grondoorzaken.
    </p>
  `;
  inventory.append(intro);

  for (const group of riskCatalog) {
    const groupCard = document.createElement("details");
    groupCard.className = "risk-group";
    groupCard.open = true;

    const summary = document.createElement("summary");
    summary.className = "risk-group-toggle";

    const summaryCopy = document.createElement("div");

    const title = document.createElement("h4");
    title.className = "risk-group-title";
    title.textContent = group.title;

    const count = document.createElement("span");
    count.className = "risk-group-count";
    count.textContent = `${group.items.length} deelrisico's`;

    summaryCopy.append(title, count);

    const chevron = document.createElement("span");
    chevron.className = "risk-group-chevron";
    chevron.textContent = "⌄";

    summary.append(summaryCopy, chevron);
    groupCard.append(summary);

    const content = document.createElement("div");
    content.className = "risk-group-content";

    const head = document.createElement("div");
    head.className = "risk-table-head";
    head.innerHTML = `
      <div>Hoofd- of deelrisico</div>
      <div>Van toepassing?</div>
      <div>Beschreven in RI&E?</div>
      <div>Waarom niet beschreven?</div>
      <div>Grondoorzaken geinventariseerd?</div>
      <div>Bewijs / toelichting</div>
    `;
    content.append(head);

    for (const itemLabel of group.items) {
      const itemId = `${group.id}-${slugify(itemLabel)}`;
      const item = document.createElement("article");
      item.className = "risk-item";
      item.dataset.itemId = itemId;

      const header = document.createElement("div");
      header.className = "risk-item-header";

      const label = document.createElement("p");
      label.className = "risk-item-label";
      label.textContent = itemLabel;
      header.append(label);
      const sub = document.createElement("p");
      sub.className = "risk-item-sub";
      sub.textContent =
        "Doorloop dit risico van links naar rechts en voeg eventueel bewijs of opmerkingen toe.";
      header.append(sub);
      item.append(header);

      const applicability = createRiskColumn(
        "Is dit hoofd- of deelrisico van toepassing op de organisatie?",
        "applicable",
        [
          { value: "yes", label: "Van toepassing" },
          { value: "no", label: "Niet van toepassing" },
        ],
        itemId
      );
      item.append(applicability);

      const described = createRiskColumn(
        "Indien van toepassing: is het risico beschreven in de RI&E?",
        "described",
        [
          { value: "yes", label: "Ja" },
          { value: "no", label: "Nee" },
        ],
        itemId
      );
      described.classList.add("conditional-block");
      described.dataset.when = "applicable-yes";
      item.append(described);

      const whyNot = createRiskColumn(
        "Indien nee: heeft de organisatie verantwoord waarom het risico niet is beschreven in de RI&E?",
        "justified",
        [
          { value: "yes", label: "Ja" },
          { value: "no", label: "Nee" },
        ],
        itemId
      );
      whyNot.classList.add("conditional-block");
      whyNot.dataset.when = "described-no";
      item.append(whyNot);

      const causes = createRiskColumn(
        "Indien ja: zijn de achterliggende grondoorzaken in de RI&E geinventariseerd?",
        "causes",
        [
          { value: "yes", label: "Ja" },
          { value: "no", label: "Nee" },
        ],
        itemId
      );
      causes.classList.add("conditional-block");
      causes.dataset.when = "described-yes";
      item.append(causes);

      const evidence = createEvidenceField(`risk-${itemId}-note`);
      item.append(evidence);

      content.append(item);
    }

    groupCard.append(content);
    inventory.append(groupCard);
  }

  container.append(inventory);
}

function renderQuestions() {
  for (const question of questions) {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".question-card");
    const category = fragment.querySelector(".question-category");
    const title = fragment.querySelector(".question-title");
    const help = fragment.querySelector(".question-help");
    const optionGroup = fragment.querySelector(".question-options");

    card.dataset.questionId = question.id;
    category.textContent = question.category;
    title.textContent = question.title;
    help.textContent = question.help || getDefaultHelpText(question);

    if (question.type === "risk-inventory") {
      card.classList.add("question-card-wide");
      renderRiskInventory(optionGroup);
    } else {
      const questionOptions = getQuestionOptions(question);

      for (const option of questionOptions) {
        const label = document.createElement("label");
        label.className = "option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = question.id;
        input.value = option.value;

        const text = document.createElement("div");
        text.innerHTML = `<strong>${option.label}</strong><br><span>${option.detail}</span>`;

        label.append(input, text);
        optionGroup.append(label);
      }

      if (requiresEvidenceField(question)) {
        optionGroup.append(createEvidenceField(`question-${question.id}-note`));
      }
    }

    questionGroups.append(fragment);
  }
}

function getAnswerValue(questionId) {
  const selected = survey.querySelector(`input[name="${questionId}"]:checked`);
  return selected ? selected.value : null;
}

function getRiskItemState(groupId, groupTitle, itemLabel) {
  const itemId = `${groupId}-${slugify(itemLabel)}`;
  const applicable = getAnswerValue(`risk-${itemId}-applicable`);
  const described = getAnswerValue(`risk-${itemId}-described`);
  const justified = getAnswerValue(`risk-${itemId}-justified`);
  const causes = getAnswerValue(`risk-${itemId}-causes`);
  const note = survey.querySelector(`[name="risk-${itemId}-note"]`)?.value.trim() || "";

  let complete = false;
  let score = null;
  let issue = null;

  if (applicable === "no") {
    complete = true;
    score = 0;
  } else if (applicable === "yes" && described === "yes" && causes !== null) {
    complete = true;
    score = causes === "yes" ? 0 : 2;

    if (causes === "no") {
      issue = {
        category: "1.1 Hoofd- en deelrisico's",
        title: itemLabel,
        answer: "no",
        severity: 3,
        weightedScore: 6,
        note: "Het risico is wel beschreven, maar de achterliggende grondoorzaken zijn niet geinventariseerd.",
        evidence: note,
      };
    }
  } else if (applicable === "yes" && described === "no" && justified !== null) {
    complete = true;
    score = justified === "yes" ? 1 : 2;

    issue = {
      category: "1.1 Hoofd- en deelrisico's",
      title: itemLabel,
      answer: justified === "yes" ? "partial" : "no",
      severity: justified === "yes" ? 2 : 3,
      weightedScore: justified === "yes" ? 2 : 6,
      note:
        justified === "yes"
          ? "Het risico is niet beschreven in de RI&E, maar de organisatie heeft dit wel verantwoord."
          : "Het risico is van toepassing, niet beschreven in de RI&E en niet verantwoord.",
      evidence: note,
    };
  }

  return {
    groupTitle,
    itemLabel,
    applicable,
    described,
    justified,
    causes,
    note,
    complete,
    score,
    issue,
  };
}

function getRiskInventoryResult(question) {
  const items = riskCatalog.flatMap((group) =>
    group.items.map((itemLabel) => getRiskItemState(group.id, group.title, itemLabel))
  );

  const completed = items.filter((item) => item.complete);
  const scored = completed.filter((item) => item.score !== null);
  const issues = scored.map((item) => item.issue).filter(Boolean);
  const averageScore =
    scored.length > 0
      ? scored.reduce((sum, item) => sum + item.score, 0) / scored.length
      : null;

  return {
    ...question,
    answer: completed.length === items.length ? "complete" : completed.length > 0 ? "partial" : null,
    answerScore: averageScore,
    weightedScore: averageScore === null ? null : averageScore * question.severity,
    totalUnits: items.length,
    progressUnits: completed.length,
    issues,
    inventorySummary: `${completed.length} van ${items.length} hoofd- en deelrisico's zijn beoordeeld.`,
  };
}

function getQuestionResult(question) {
  if (question.type === "risk-inventory") {
    return getRiskInventoryResult(question);
  }

  const selectedValue = getAnswerValue(question.id);
  const questionOptions = getQuestionOptions(question);
  const selectedOption = questionOptions.find((option) => option.value === selectedValue);
  const note = survey.querySelector(`[name="question-${question.id}-note"]`)?.value.trim() || "";
  const answerScore = selectedOption ? selectedOption.score : null;

  return {
    ...question,
    answer: selectedValue,
    answerScore,
    weightedScore: answerScore === null ? null : answerScore * question.severity,
    totalUnits: 1,
    progressUnits: selectedValue === null ? 0 : 1,
    issues:
      selectedValue === "no" || selectedValue === "partial"
        ? [
            {
              category: question.category,
              title: question.title,
              answer: selectedValue,
              severity: question.severity,
              weightedScore: answerScore === null ? 0 : answerScore * question.severity,
              evidence: note,
            },
          ]
        : [],
  };
}

function computeAssessment() {
  const results = questions.map(getQuestionResult);
  const totalUnits = results.reduce((sum, result) => sum + result.totalUnits, 0);
  const answeredUnits = results.reduce((sum, result) => sum + result.progressUnits, 0);
  const relevant = results.filter((result) => result.answer !== "na");
  const relevantAnswered = relevant.filter((result) => result.answer !== null);

  const maxRiskPoints = relevant.reduce((sum, result) => sum + result.severity * 2, 0);
  const actualRiskPoints = relevantAnswered.reduce(
    (sum, result) => sum + (result.weightedScore ?? 0),
    0
  );

  const progress = Math.round((answeredUnits / Math.max(totalUnits, 1)) * 100);
  const baseReadiness = Math.max(
    0,
    Math.round(100 - (actualRiskPoints / Math.max(maxRiskPoints, 1)) * 100)
  );
  const readiness = Math.round(baseReadiness * (progress / 100));

  const allIssues = results
    .flatMap((result) => result.issues || [])
    .sort((left, right) => (right.weightedScore ?? 0) - (left.weightedScore ?? 0));

  const criticalItems = allIssues.filter(
    (result) => result.answer === "no" && result.severity >= 3
  );

  const improvementItems = allIssues.slice(0, 6);

  return {
    results,
    progress,
    readiness,
    criticalItems,
    improvementItems,
  };
}

function describeRisk(readiness, criticalItems) {
  if (readiness === 0) {
    return {
      label: "Nog onvolledig",
      badgeClass: "badge-warn",
      badgeText: "Vul verder in",
    };
  }

  if (criticalItems.length >= 3 || readiness < 45) {
    return {
      label: "Hoog risico",
      badgeClass: "badge-danger",
      badgeText: "Direct oppakken",
    };
  }

  if (criticalItems.length > 0 || readiness < 75) {
    return {
      label: "Middel risico",
      badgeClass: "badge-warn",
      badgeText: "Verbeterpunten",
    };
  }

  return {
    label: "Laag tot beheerst",
    badgeClass: "badge-good",
    badgeText: "Redelijk op orde",
  };
}

function buildPriorityMessage(item) {
  if (item.evidence) {
    return `${item.note || "Toelichting aanwezig."} Bewijs of notitie: ${item.evidence}`;
  }

  if (item.note) {
    return item.note;
  }

  if (item.answer === "no") {
    return "Geen aantoonbare borging aanwezig; dit onderwerp vraagt directe opvolging.";
  }

  return "Er is al iets geregeld, maar verdere concretisering of bewijsvoering is nodig.";
}

function buildSummary(assessment) {
  const company = companyName.value.trim() || "Deze organisatie";
  const contact = contactName.value.trim();
  const brancheText = industry.value.trim()
    ? ` De opgegeven branche is ${industry.value.trim()}.`
    : "";
  const dateText = assessmentDate.value
    ? ` De vragenlijst is ingevuld op ${assessmentDate.value}.`
    : "";
  const risk = describeRisk(assessment.readiness, assessment.criticalItems);
  const riskInventory = assessment.results.find((result) => result.id === "1-1-1");

  const intro = `${company} heeft ${assessment.progress}% van de pre-toets ingevuld. De huidige voorlopige beoordeling is ${risk.label.toLowerCase()}.`;
  const critical =
    assessment.criticalItems.length > 0
      ? ` Er zijn ${assessment.criticalItems.length} kritieke aandachtspunten met hoge urgentie gesignaleerd.`
      : " Er zijn op dit moment geen direct kritieke punten binnen de beantwoorde vragen.";
  const owner = contact ? ` De vragenlijst is ingevuld door ${contact}.` : "";
  const completeness =
    assessment.progress < 100
      ? " De uitkomst blijft voorlopig totdat alle relevante onderwerpen zijn beantwoord."
      : "";
  const inventoryText = riskInventory ? ` ${riskInventory.inventorySummary}` : "";

  return `${intro}${critical}${inventoryText}${brancheText}${owner}${dateText}${completeness}`;
}

function buildReport(assessment) {
  const company = companyName.value.trim() || "Onbekende organisatie";
  const contact = contactName.value.trim() || "onbekende invuller";
  const branche = industry.value.trim() || "niet opgegeven";
  const fillDate = assessmentDate.value || "niet opgegeven";
  const risk = describeRisk(assessment.readiness, assessment.criticalItems);
  const riskInventory = assessment.results.find((result) => result.id === "1-1-1");
  const topItems =
    assessment.improvementItems.length > 0
      ? assessment.improvementItems
          .map((item, index) => {
            const evidenceLine = item.evidence ? ` [Toelichting: ${item.evidence}]` : "";
            return `${index + 1}. ${item.category}: ${item.title}${evidenceLine}`;
          })
          .join("\n")
      : "Geen concrete verbeterpunten uit de ingevulde vragen.";

  return [
    `RI&E pre-toets samenvatting`,
    ``,
    `Organisatie: ${company}`,
    `Contactpersoon: ${contact}`,
    `Branche: ${branche}`,
    `Aantal medewerkers: ${employees.value}`,
    `Datum van invullen: ${fillDate}`,
    ``,
    `Invulgraad: ${assessment.progress}%`,
    `Voorlopige score: ${assessment.readiness}%`,
    `Risicoprofiel: ${risk.label}`,
    `Kritieke punten: ${assessment.criticalItems.length}`,
    riskInventory ? `Doorloop hoofd- en deelrisico's: ${riskInventory.inventorySummary}` : "",
    ``,
    `Topprioriteiten`,
    `${topItems}`,
    ``,
    `Duiding`,
    `${buildSummary(assessment)}`,
    ``,
    `Bron: Tabel 1, onderdelen 1 en 2, Staatscourant 2024, 39674 (12 december 2024).`,
    `Aanvulling vraag 1.1: hoofd- en deelrisico's zijn in deze app uitgewerkt op basis van de risicocategorieen uit tabel 2 van dezelfde publicatie.`,
    `Let op: dit is een pre-toets en geen volledige juridisch getoetste RI&E.`,
  ]
    .filter(Boolean)
    .join("\n");
}

function updateScoreRing(readiness) {
  const degrees = Math.round((readiness / 100) * 360);
  scoreRing.style.background = `
    radial-gradient(circle at center, #fffaf4 58%, transparent 59%),
    conic-gradient(var(--accent) ${degrees}deg, rgba(15, 118, 110, 0.14) ${degrees}deg)
  `;
}

function updateRiskInventoryVisibility() {
  const riskItems = document.querySelectorAll(".risk-item");

  for (const item of riskItems) {
    const itemId = item.dataset.itemId;
    const applicable = getAnswerValue(`risk-${itemId}-applicable`);
    const described = getAnswerValue(`risk-${itemId}-described`);

    for (const block of item.querySelectorAll(".conditional-block")) {
      let visible = false;

      if (block.dataset.when === "applicable-yes") {
        visible = applicable === "yes";
      }

      if (block.dataset.when === "described-no") {
        visible = applicable === "yes" && described === "no";
      }

      if (block.dataset.when === "described-yes") {
        visible = applicable === "yes" && described === "yes";
      }

      block.hidden = !visible;
    }
  }
}

function renderAssessment() {
  updateRiskInventoryVisibility();

  const assessment = computeAssessment();
  const risk = describeRisk(assessment.readiness, assessment.criticalItems);

  scoreValue.textContent = `${assessment.readiness}%`;
  progressValue.textContent = `${assessment.progress}%`;
  riskLevel.textContent = risk.label;
  criticalCount.textContent = String(assessment.criticalItems.length);
  statusBadge.textContent = risk.badgeText;
  statusBadge.className = `badge ${risk.badgeClass}`;
  summaryText.textContent = buildSummary(assessment);
  reportOutput.value = buildReport(assessment);
  updateScoreRing(assessment.readiness);

  if (!priorityList) {
    return;
  }

  priorityList.innerHTML = "";

  if (assessment.improvementItems.length === 0) {
    const item = document.createElement("li");
    item.className = "priority-item";
    item.innerHTML =
      "<strong>Nog geen prioriteiten</strong><p>Beantwoord de vragen om automatisch verbeterpunten te laten verschijnen.</p>";
    priorityList.append(item);
    return;
  }

  for (const item of assessment.improvementItems) {
    const entry = document.createElement("li");
    entry.className = "priority-item";
    entry.innerHTML = `
      <strong>${item.category}</strong>
      <p>${item.title}</p>
      <p>${buildPriorityMessage(item)}</p>
    `;
    priorityList.append(entry);
  }
}

async function copyReportToClipboard() {
  try {
    await navigator.clipboard.writeText(reportOutput.value);
    copyReport.textContent = "Gekopieerd";
  } catch (error) {
    copyReport.textContent = "Kopieren mislukt";
  }

  window.setTimeout(() => {
    copyReport.textContent = "Kopieer";
  }, 1800);
}

renderQuestions();
renderAssessment();

survey.addEventListener("change", renderAssessment);
survey.addEventListener("input", renderAssessment);
copyReport.addEventListener("click", copyReportToClipboard);
