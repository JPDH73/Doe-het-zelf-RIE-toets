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
      "Micro-organismen, zoals bacteriën, schimmels, virussen, parasieten, infectieuze agentia, toxinen en allergenen",
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
    title: "8. Bijzondere categorieën werknemers die mogelijk extra risico lopen",
    items: [
      "Uitzendkrachten",
      "Stagiaires",
      "Vrijwilligers",
      "Anderstaligen",
      "Andere personen of derden, zoals bezoekers en voorbijgangers",
      "Zwangeren",
      "Jeugdigen",
      "Werknemers met een beperking of gedeeltelijke arbeidsongeschiktheid",
      "Werkers die plaats- en tijdonafhankelijk werken",
    ],
  },
];

const questions = [
  {
    id: "1-1-1",
    category: "1.1 Volledigheid",
    title:
      "Zijn alle hoofd- en deelrisico's die van toepassing zijn op de organisatie beschreven in de RI&E, inclusief de achterliggende grondoorzaken of een verantwoording waarom dit niet is gedaan?",
    help:
      "Doorloop per hoofd- en deelrisico eerst of het van toepassing is. Alleen voor toepasselijke risico's verschijnen de vervolgvragen over beschrijving, verantwoording en achterliggende grondoorzaken.",
    severity: 3,
    type: "risk-inventory",
  },
  {
    id: "1-1-2",
    category: "1.1 Volledigheid",
    title:
      "Is gebruik gemaakt van gegevens van verzuimanalyses om inzicht te krijgen in de arbeidsgerelateerde oorzaken van het verzuim?",
    severity: 2,
  },
  {
    id: "1-1-3",
    category: "1.1 Volledigheid",
    title:
      "Zijn de inzichten van de bedrijfsarts en van andere deskundigen die de werkgever inschakelt voor het verzuim- en arbeidsomstandighedenbeleid meegenomen in de RI&E?",
    severity: 2,
  },
  {
    id: "1-1-4",
    category: "1.1 Volledigheid",
    title: "Zijn de inzichten van de werknemers meegenomen in de RI&E?",
    severity: 2,
  },
  {
    id: "1-1-5",
    category: "1.1 Volledigheid",
    title: "Is gebruik gemaakt van de inzichten van de preventiemedewerkers?",
    severity: 2,
  },
  {
    id: "1-1-6",
    category: "1.1 Volledigheid",
    title: "Zijn de analyses van arbeidsgezondheidskundige onderzoeken gebruikt in de RI&E?",
    severity: 2,
  },
  {
    id: "1-1-7",
    category: "1.1 Volledigheid",
    title:
      "Zijn ongevallenregistraties aanwezig en geanalyseerd op de achterliggende grondoorzaken en zijn die verwerkt in de RI&E?",
    severity: 2,
  },
  {
    id: "1-1-8",
    category: "1.1 Volledigheid",
    title: "Zijn de taken van de preventiemedewerker ingevuld en uitgevoerd?",
    severity: 2,
  },
  {
    id: "1-1-9",
    category: "1.1 Volledigheid",
    title:
      "Is beschreven hoeveel preventiemedewerkers nodig zijn om de taken uit te voeren en wat de benodigde kennis en capaciteit is voor het uitvoeren van de taken?",
    severity: 2,
  },
  {
    id: "1-1-10",
    category: "1.1 Volledigheid",
    title:
      "Is beschreven welke arbeidsgezondheidskundige onderzoeken nodig zijn, wat de inhoud en de frequentie is?",
    severity: 2,
  },
  {
    id: "1-1-11",
    category: "1.1 Volledigheid",
    title: "Is het arbobeleid beschreven en operationeel?",
    severity: 3,
  },
  {
    id: "1-1-12",
    category: "1.1 Volledigheid",
    title: "Is de organisatie van de bedrijfshulpverlening (BHV) beschreven en operationeel?",
    severity: 3,
  },
  {
    id: "1-1-13",
    category: "1.1 Volledigheid",
    title: "Zijn de risicobeperkende maatregelen met betrekking tot de aanwezige risico's beschreven?",
    severity: 3,
  },
  {
    id: "1-1-14",
    category: "1.1 Volledigheid",
    title:
      "Zijn de risicobeperkende maatregelen getoetst aan de arbeidshygiënische principes en het daarbij te hanteren redelijkerwijsbeginsel?",
    severity: 3,
  },
  {
    id: "1-1-15",
    category: "1.1 Volledigheid",
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
    id: "1-3b",
    category: "1.3 Actuele inzichten",
    title:
      "Zijn de maatregelen uit de arbocatalogus meegenomen bij het opstellen van de RI&E?",
    severity: 2,
  },
  {
    id: "1-4-1",
    category: "1.4 Betrouwbaarheid",
    title:
      "Zijn de blootstellingen aan de risico's representatief in beeld gebracht, zonder over- of onderschatting?",
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
      "Is bij de voorstellen voor risicobeperkende maatregelen rekening gehouden met de arbeidshygiënische strategie?",
    severity: 3,
  },
  {
    id: "2-3",
    category: "2. Plan van aanpak",
    title:
      "Als in het plan van aanpak bij de voorgestelde maatregelen is afgeweken van de arbeidshygiënische strategie, is dit dan gemotiveerd?",
    severity: 2,
  },
  {
    id: "2-4",
    category: "2. Plan van aanpak",
    title: "Is beschreven hoe de maatregelen worden geïmplementeerd?",
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
];

const options = [
  {
    value: "yes",
    label: "Ja",
    score: 0,
    detail: "",
  },
  {
    value: "partial",
    label: "Deels",
    score: 1,
    detail: "",
  },
  {
    value: "no",
    label: "Nee",
    score: 2,
    detail: "",
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
    label: "Ja",
    score: 0,
    detail: "",
  },
  {
    value: "no",
    label: "Nee",
    score: 2,
    detail: "",
  },
  {
    value: "na",
    label: "Niet van toepassing",
    score: 0,
    detail: "",
  },
];

const yesNoOptions = [
  {
    value: "yes",
    label: "Ja",
    score: 0,
    detail: "",
  },
  {
    value: "no",
    label: "Nee",
    score: 2,
    detail: "",
  },
];

const yesNoNaOptions = [
  {
    value: "yes",
    label: "Ja",
    score: 0,
    detail: "",
  },
  {
    value: "no",
    label: "Nee",
    score: 2,
    detail: "",
  },
  {
    value: "na",
    label: "Niet van toepassing",
    score: null,
    detail: "",
  },
];

const simpleCompletenessOptions = [
  {
    value: "yes",
    label: "Ja",
    score: 0,
    detail: "",
  },
  {
    value: "partial",
    label: "Deels",
    score: 1,
    detail: "",
  },
  {
    value: "no",
    label: "Nee",
    score: 2,
    detail: "",
  },
];

const questionGroups = document.querySelector("#questionGroups");
const template = document.querySelector("#questionTemplate");
const survey = document.querySelector("#survey");
const companyName = document.querySelector("#companyName");
const contactName = document.querySelector("#contactName");
const worksCouncilContact = document.querySelector("#worksCouncilContact");
const occupationalService = document.querySelector("#occupationalService");
const industry = document.querySelector("#industry");
const arboCertificates = document.querySelector("#arboCertificates");
const employees = document.querySelector("#employees");
const assessmentDate = document.querySelector("#assessmentDate");
const rieName = document.querySelector("#rieName");
const scopeDescription = document.querySelector("#scopeDescription");
const executionDescription = document.querySelector("#executionDescription");
const rieDate = document.querySelector("#rieDate");
const rieDocuments = document.querySelector("#rieDocuments");
const statusBadge = document.querySelector("#statusBadge");
const scoreValue = document.querySelector("#scoreValue");
const progressValue = document.querySelector("#progressValue");
const riskLevel = document.querySelector("#riskLevel");
const criticalCount = document.querySelector("#criticalCount");
const priorityList = document.querySelector("#priorityList");
const summaryText = document.querySelector("#summaryText");
const reportOutput = document.querySelector("#reportOutput");
const applicableItems = document.querySelector("#applicableItems");
const describedApplicableItems = document.querySelector("#describedApplicableItems");
const supplementedApplicableItems = document.querySelector("#supplementedApplicableItems");
const notDescribedApplicableItems = document.querySelector("#notDescribedApplicableItems");
const notApplicableItems = document.querySelector("#notApplicableItems");
const questionStatusMatrix = document.querySelector("#questionStatusMatrix");
const planStatusMatrix = document.querySelector("#planStatusMatrix");
const scoreRing = document.querySelector(".score-ring");
const copyReport = document.querySelector("#copyReport");
const generatePdf = document.querySelector("#generatePdf");
const generateWord = document.querySelector("#generateWord");
const generateSummaryWord = document.querySelector("#generateSummaryWord");
const resetApp = document.querySelector("#resetApp");
const resetModal = document.querySelector("#resetModal");
const cancelReset = document.querySelector("#cancelReset");
const confirmReset = document.querySelector("#confirmReset");
const toggleAllSections = document.querySelector("#toggleAllSections");
const draftStatus = document.querySelector("#draftStatus");

const DRAFT_STORAGE_KEY = "rie-pretoets-local-draft-v1";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "en")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDetailStorageKey(detail) {
  if (detail.classList.contains("question-card")) {
    return `question:${detail.dataset.questionId || ""}`;
  }

  if (detail.classList.contains("question-help-toggle")) {
    return `help:${detail.closest(".question-card")?.dataset.questionId || ""}`;
  }

  if (detail.classList.contains("risk-group")) {
    return `risk-group:${detail.querySelector(".risk-group-title")?.textContent || ""}`;
  }

  return "";
}

function updateDraftStatus(message) {
  if (!draftStatus) {
    return;
  }

  draftStatus.textContent = message;
}

function collectDraftState() {
  const fields = {};

  for (const element of survey.querySelectorAll("input[name], textarea[name], select[name]")) {
    if (!element.name) {
      continue;
    }

    if (element.type === "radio") {
      if (element.checked) {
        fields[element.name] = element.value;
      }
      continue;
    }

    if (element.type === "checkbox") {
      fields[element.name] = element.checked;
      continue;
    }

    fields[element.name] = element.value;
  }

  const openDetails = Array.from(document.querySelectorAll("details"))
    .filter((detail) => detail.open)
    .map(getDetailStorageKey)
    .filter(Boolean);

  return {
    fields,
    openDetails,
    savedAt: new Date().toISOString(),
  };
}

function saveDraftToLocalStorage() {
  try {
    const draftState = collectDraftState();
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draftState));
    updateDraftStatus("Concept wordt lokaal opgeslagen in deze browser.");
  } catch (error) {
    updateDraftStatus("Lokaal opslaan is in deze browser niet beschikbaar.");
  }
}

function restoreDraftFromLocalStorage() {
  try {
    const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) {
      updateDraftStatus("Concept wordt lokaal opgeslagen in deze browser.");
      return;
    }

    const draftState = JSON.parse(raw);
    const fields = draftState.fields || {};

    for (const [name, value] of Object.entries(fields)) {
      const field = survey.querySelector(`[name="${CSS.escape(name)}"]`);
      if (!field) {
        continue;
      }

      if (field.type === "radio") {
        const radio = survey.querySelector(
          `input[type="radio"][name="${CSS.escape(name)}"][value="${CSS.escape(String(value))}"]`
        );
        if (radio) {
          radio.checked = true;
        }
        continue;
      }

      if (field.type === "checkbox") {
        field.checked = Boolean(value);
        continue;
      }

      field.value = value;
    }

    const openDetails = new Set(draftState.openDetails || []);
    for (const detail of document.querySelectorAll("details")) {
      const key = getDetailStorageKey(detail);
      if (key && openDetails.has(key)) {
        detail.open = true;
      }
    }

    updateDraftStatus("Opgeslagen concept is teruggezet op deze computer.");
  } catch (error) {
    updateDraftStatus("Het opgeslagen concept kon niet worden teruggezet.");
  }
}

function clearAllAnswers() {
  survey.reset();

  for (const input of survey.querySelectorAll('input[type="radio"]')) {
    input.checked = false;
  }

  for (const detail of document.querySelectorAll("details")) {
    detail.open = false;
  }

  try {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch (error) {
    // Intentionally ignore storage errors during reset.
  }

  renderAssessment();
  updateToggleAllButtonLabel();
  updateDraftStatus("Concept is gewist op deze computer.");
}

function openResetModal() {
  if (!resetModal) {
    return;
  }

  resetModal.classList.add("is-open");
  resetModal.setAttribute("aria-hidden", "false");
}

function closeResetModal() {
  if (!resetModal) {
    return;
  }

  resetModal.classList.remove("is-open");
  resetModal.setAttribute("aria-hidden", "true");
}

function handleResetClick(event) {
  event?.preventDefault();
  openResetModal();
}

function makeRadioToggleable(input) {
  input.addEventListener("pointerdown", () => {
    input.dataset.wasChecked = input.checked ? "true" : "false";
  });

  input.addEventListener("click", () => {
    if (input.dataset.wasChecked !== "true") {
      return;
    }

    input.checked = false;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  });
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
    makeRadioToggleable(input);

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

function appendRiskEvidenceField(block, name, placeholderText) {
  const evidence = createEvidenceField(name, placeholderText);
  evidence.hidden = true;
  block.append(evidence);
  return evidence;
}

function requiresEvidenceWithoutNA(question) {
  return ["1.1 Volledigheid", "1.3 Actuele inzichten", "1.4 Betrouwbaarheid", "2. Plan van aanpak"].includes(
    question.category
  );
}

function hasCollapsibleHelp(question) {
  return [
    "1.1 Volledigheid",
    "1.2 Actualiteit",
    "1.3 Actuele inzichten",
    "1.4 Betrouwbaarheid",
    "2. Plan van aanpak",
  ].includes(question.category);
}

function getCollapsibleHelpText(question) {
  if (question.id === "1-1-1") {
    return [
      {
        heading: "Alle risico’s zijn geïnventariseerd: het risico is van toepassing.",
        text:
          "Is een risico van toepassing, dan moet het risico worden beschreven. Maar niet elk theoretisch risico is in de praktijk relevant. Wanneer een risico wordt uitgesloten, moet dit worden onderbouwd met objectieve argumenten en gebaseerd zijn op een goed inzicht in de werksituatie - in het bijzonder wanneer het risico is opgenomen in de arbocatalogus - tenzij geheel evident. Daarmee wordt voor de toetser duidelijk dat het risico bewust is afgewogen en niet over het hoofd is gezien.",
      },
      {
        heading: "Alle risico’s zijn geïnventariseerd: risico is beschreven.",
        text:
          "Indien een risico van toepassing is, moet dit herkenbaar en inhoudelijk worden beschreven. Wanneer een deelrisico niet is beschreven of onjuist als niet van toepassing is beoordeeld is de RI&E niet compleet. Omdat binnen één hoofdrisico meerdere deelrisico’s relevant kunnen zijn, moeten deze allemaal worden meegenomen.",
      },
      {
        heading: "Alle risico’s zijn geïnventariseerd: er is verantwoord waarom het risico niet is beschreven.",
        text:
          "Soms is bij de start van de RI&E al duidelijk dat bepaalde risico's dermate complex of omvangrijk zijn dat hiervoor een afzonderlijk RI&E-traject nodig is. Een voorbeeld hiervan kan zijn explosiegevaar. In dergelijke gevallen is het van belang dit expliciet en gemotiveerd te vermelden, met de kanttekening dat de RI&E op dat punt nog niet compleet en dus ook niet volledig is.",
      },
      {
        heading: "De grondoorzaken zijn geïnventariseerd.",
        text:
          "Een RI&E richt zich niet alleen op zichtbare risico’s of symptomen, maar gaat dieper in op de achterliggende oorzaken die maken dat risico’s blijven bestaan. Soms is het niet nodig de grondoorzaak volledig uit te diepen, in andere gevallen kan juist wel onderzoek gewenst zijn. Het expliciet benoemen van deze grondoorzaken maakt het mogelijk om maatregelen te kiezen die verder gaan dan symptoombestrijding, zoals enkel het verwijderen van een obstakel of het uitdelen van persoonlijke beschermingsmiddelen. Zo ontstaan structurele verbeteringen die risico’s daadwerkelijk terugdringen en herhaling voorkomen. Bovendien werkt het aanpakken van grondoorzaken preventief: niet alleen het vastgestelde risico wordt verminderd, maar ook andere - soms nog onzichtbare - risico’s. Dit draagt bij aan een lerende organisatie, waarin systematisch patronen worden doorbroken en veiligheidscultuur zich ontwikkelt. Het plan van aanpak kan dan gericht zijn op het achterhalen en structureel aanpakken.",
      },
      {
        heading: "Nadere of aanvullende RI&E-voorschriften zijn opgevolgd.",
        text:
          "Voor bepaalde risico’s gelden, naast de algemene RI&E-verplichting, aanvullende wettelijke eisen met betrekking tot inventarisatie, beoordeling en documentatie. Deze zijn opgenomen in bijlage 2: Nadere of aanvullende RI&E-voorschriften uit het Arbeidsomstandighedenbesluit (AB) en de Arbeidsomstandighedenregeling (AR). Daarnaast kunnen, afhankelijk van de sector, ook aanvullende eisen voortvloeien uit brancheafspraken, arbocatalogus of specifieke cao-bepalingen.",
      },
    ];
  }

  if (question.id === "1-1-2") {
    return [
      {
        text:
          "Informatie uit diagnostische verzuimgegevens en beroepsziekten geeft inzicht in de aard van arbeidsgerelateerd verzuim. Verzuiminformatie kan ook voortkomen uit branche-informatie. Deze gegevens vormen een directe aanwijzing van risico's en bieden een objectieve basis voor de start van de RI&E om gerichter veiligheids- en gezondheidsrisico's te achterhalen.",
      },
      {
        text:
          "Ter illustratie (hypothetisch voorbeeld): uit de verzuimrapportages blijkt dat er een opvallend hoge frequentie van rugklachten is bij medewerkers in de logistiek. Dan is dat een aanwijzing dat er mogelijk sprake is van fysieke overbelasting of ongunstige werkhoudingen. Deze informatie moet worden meegenomen in de RI&E en kan leiden tot een gerichte risicoanalyse op het gebied van fysieke belasting, zoals tillen, duwen, trekken of langdurig zitten op de heftruck. Op basis daarvan kunnen aanvullende observaties, metingen of werkplekbezoeken plaatsvinden.",
        emphasis: true,
      },
    ];
  }

  if (question.id === "1-1-3") {
    return "Inzichten van de bedrijfsarts en andere deskundigen (zoals arbokerndeskundigen, bedrijfsmaatschappelijk werkers en vertrouwenspersonen) zijn relevant omdat zij specifieke gezondheidsrisico's en trends kunnen identificeren die anders mogelijk over het hoofd worden gezien en kunnen bijdragen aan een betere inschatting van risico's.";
  }

  if (question.id === "1-1-4") {
    return "De RI&E moet een breed en evenwichtig beeld geven van de risico’s en moeten accuraat zijn. Het betrekken van zoveel mogelijk medewerkers bij het opstellen van de RI&E helpt om een representatief mogelijk beeld van de situatie te krijgen en de betrouwbaarheid te verhogen. Dit geldt in het bijzonder voor risico's waarbij beleving een rol speelt. De betrokkenheid van de ondernemingsraad (OR) of personeelsvertegenwoordiging (PVT) vergroot ook de betrouwbaarheid en het draagvlak van de RI&E. De OR/PVT kan waardevolle input leveren en heeft bovendien inspraak bij het vaststellen van de RI&E en het plan van aanpak, waardoor zij kan bijdragen aan verbeteringen of aanvullingen.";
  }

  if (question.id === "1-1-5") {
    return "Preventiemedewerkers zijn aangesteld om de werkgever bij te staan bij van naleving van de Arbowet. Vanuit deze taak is er doorgaans direct contact met de werkvloer, waardoor ze de dagelijkse operationele processen goed kennen. Dit stelt hen in staat om potentiële risico's te identificeren die mogelijk door het management of externe adviseurs over het hoofd worden gezien.";
  }

  if (question.id === "1-1-6") {
    return [
      {
        text:
          "Informatie uit arbeidsgezondheidskundige onderzoeken geeft inzicht in de effectiviteit van de getroffen beheersmaatregelen voor gezondheidsrisico's. Dit stelt de RI&E in staat om gericht de beheersmaatregelen te inventariseren en evalueren.",
      },
      {
        text:
          "Ter illustratie (hypothetisch voorbeeld): bij het periodiek arbeidsgezondheidskundig onderzoek blijkt dat meerdere medewerkers een aantoonbaar gehoorverlies vertonen dat niet verklaard kan worden door leeftijd. Het patroon (afwijking op 4 kHz) komt vooral voor bij medewerkers die werken met luchtaangedreven gereedschap, wat duidt op ontoereikende geluidsbeheersing of verkeerd gebruik van gehoorbescherming. Deze bevinding vormt een directe aanwijzing om binnen de RI&E het geluidrisico opnieuw te beoordelen, bron- en technische maatregelen te onderzoeken en de effectiviteit van de huidige PBM-inzet te herzien.",
        emphasis: true,
      },
    ];
  }

  if (question.id === "1-1-7") {
    return [
      {
        text:
          "Informatie uit opgetreden ongevallen of vanuit een periodieke trendanalyse van ongevallen, biedt inzicht in gemanifesteerde risico's en vormt een objectieve basis voor de RI&E om gerichte acties te ondernemen en concrete veiligheidsrisico's te achterhalen. Het geeft tevens een beeld geeft van de actualiteit van de RI&E. Uit de ongevallen- of ongevallentrendanalyse kan blijken dat bepaalde risico’s in de eerdere RI&E over het hoofd zijn gezien of onderschat, wat kan leiden tot gerichte aandacht. Ongevallengegevens kunnen ook worden verkregen uit andere bronnen, zoals branche-informatie.",
      },
      {
        text:
          "Ter illustratie (hypothetisch voorbeeld): bij de analyse van ongevallengegevens komt naar voren dat zich herhaaldelijk letselincidenten voordoen binnen een specifieke taak of afdeling, bijvoorbeeld in de vorm van snijwonden tijdens handmatige werkzaamheden. De herhaling en aard van deze incidenten duiden op een terugkerend risico dat onvoldoende wordt beheerst. Deze informatie vormt een concrete aanleiding om binnen de RI&E nader onderzoek te doen naar het betreffende werkproces, de gebruikte hulpmiddelen en werkinstructies.",
        emphasis: true,
      },
    ];
  }

  if (question.id === "1-1-8") {
    return "De preventiemedewerker heeft een drietal wettelijke taken: helpen bij het maken en uitvoeren van de RI&E, advies geven en samenwerken met de ondernemingsraad of personeelsvertegenwoordiging en externe deskundigen zoals de bedrijfsarts over veiligheidsmaatregelen, en het uitvoeren of ondersteunen van arbomaatregelen. De RI&E moet aangeven hoe deze rol ingevuld wordt. Wie de preventiemedewerker is en wat zijn of haar rol is, moet met instemming van de OR worden bepaald.";
  }

  if (question.id === "1-1-9") {
    return "Preventiemedewerkers en de deskundigen waar ze mee samenwerken moeten genoeg kennis, ervaring en middelen hebben en goed georganiseerd zijn om goed te kunnen helpen. De RI&E moet aangeven wat er gedaan moet worden om aan deze eisen te voldoen. Hoe groter de risico’s, hoe meer kennis er nodig is van de preventiemedewerker. Hoewel niet alles bekend hoeft te zijn, moet de persoon wel in staat zijn om te adviseren en samen te werken met andere experts binnen en buiten het bedrijf. Dit is vooral belangrijk als diegene genoeg kennis of middelen heeft om bepaalde problemen op te lossen. Voor een goede uitvoering van hun werk is het belangrijk dat preventiemedewerkers zelfstandig kunnen werken, zonder dat dit hun carrière of salaris nadelig beïnvloedt.";
  }

  if (question.id === "1-1-10") {
    return [
      {
        text:
          "De werkgever is verplicht een arbeidsgezondheidskundig onderzoek (AGO) aan te bieden aan medewerkers wanneer dit wettelijk vereist is of wanneer er, ondanks getroffen maatregelen, nog steeds gezondheidsrisico’s bestaan. Zo’n onderzoek is functie- en risicospecifiek, en dus niet voor iedere medewerker van toepassing. De frequentie en inhoud van het onderzoek worden mede bepaald op basis van de aard, mate en duur van de blootstelling. Zo zal een medewerker die dagelijks wordt blootgesteld aan 82 dB(A) zonder pieklawaai wellicht volstaan met gehoortest van eens per vier jaar, terwijl bij blootstelling aan 89 dB(A) met regelmatige piekgeluiden eerder een jaarlijkse gehoortest wenselijk is vanwege het verhoogde risico op gehoorschade. Het onderzoek moet daarnaast ook zinvol, betrouwbaar en op de situatie toegesneden zijn. Daarnaast mag het geen buitensporige belasting veroorzaken en moeten de voordelen duidelijk opwegen tegen eventuele nadelen voor de medewerker.",
      },
      {
        text:
          "Ter illustratie (hypothetisch voorbeeld): bij blootstelling aan asbest is het niet zinvol om standaard longfoto’s te laten maken. Ziekten zoals longkanker of mesothelioom ontstaan vaak pas 25 tot 40 jaar na de blootstelling en blijven in het begin vaak onopgemerkt zolang er geen klachten zijn. Vroeg opsporen is dan ook niet mogelijk. Onderzoeken zoals röntgenfoto’s leveren in zo’n geval weinig op, maar kunnen wél nadelen hebben. Denk aan de spanning van het onderzoek, de stress tijdens het wachten op de uitslag, en een kleine kans op schade door de straling. Daarbij geldt dat het vroeg ontdekken van mesothelioom niets verandert aan het verloop van de ziekte, omdat er helaas nog geen effectieve behandeling voor is.",
        emphasis: true,
      },
    ];
  }

  if (question.id === "1-1-11") {
    return "Het arbobeleid richt zich op het creëren van optimale arbeidsomstandigheden door te voldoen aan wet- en regelgeving en wetenschappelijke inzichten, en moet afgestemd zijn op de arbocatalogus. Hierbij moeten gevaren bij de bron worden aangepakt, waarbij collectieve beschermingsmaatregelen voorrang hebben boven individuele. De arbeidsomstandigheden moeten zoveel mogelijk worden afgestemd op de persoonlijke eigenschappen van medewerkers. Daarnaast moet er aandacht zijn voor psychosociale arbeidsbelasting en een goede verdeling van bevoegdheden en verantwoordelijkheden, waaronder de rol van de preventiemedewerker. Het beleid moet ook een goede invulling van de basiscontracten met arbodiensten of maatwerkregeling met bedrijfsartsen omvatten, zoals verzuimbegeleiding en arbeidsgezondheidskundig onderzoek (AGO). Regelmatige toetsing en aanpassing van het beleid op basis van ervaringen zijn noodzakelijk, waarbij de RI&E een belangrijke rol speelt.";
  }

  if (question.id === "1-1-12") {
    return [
      {
        text:
          "Een doeltreffende BHV-organisatie maakt integraal deel uit van het arbobeleid en waarborgt eerste hulp, brandbestrijding, beperking van ongevalgevolgen en evacuatie. De werkgever wijst daartoe één of meer opgeleide en uitgeruste Bhv’ers aan, in aantallen die passen bij de risico’s en bezetting. Medewerkers kennen de meld- en evacuatieprocedures. Het BHV-plan beschrijft hoe de bedrijfshulpverlening is georganiseerd en moet minimaal de volgende onderdelen bevatten.",
      },
      {
        text:
          "Het geeft aan welke taken en verantwoordelijkheden bhv’ers hebben bij het verlenen van eerste hulp, het bestrijden van beginnende branden, het alarmeren, evacueren en het afstemmen met externe hulpdiensten. Ook beschrijft het de alarmerings- en communicatielijnen, zoals interne meldprocedures en het gebruik van communicatiemiddelen. De evacuatie- en ontruimingsprocedure moet zijn opgenomen, inclusief vluchtroutes, verzamelplaatsen en de rolverdeling, waarbij wordt aangesloten op NEN 8112 als er een brandmeldcentrale aanwezig is. Daarnaast bevat het plan gegevens over het gebouw en de installaties, zoals plattegronden met blusmiddelen, noodverlichting en afsluiters. De BHV-bezetting, opleiding en oefenfrequentie worden vastgelegd, inclusief namen van bhv’ers en certificeringen. Het plan geeft ook een overzicht van beschikbare middelen zoals EHBO-koffers, AED’s en blusmiddelen, inclusief afspraken over onderhoud en inspectie. Tot slot is beschreven hoe incidenten worden geregistreerd, hoe nazorg plaatsvindt en op welke wijze het plan periodiek wordt geëvalueerd en geactualiseerd.",
      },
    ];
  }

  if (question.id === "1-1-13") {
    return [
      {
        text:
          "Ook de reeds genomen maatregelen ter beheersing van een risico moeten inzichtelijk worden gemaakt. De maatregelen zijn toegespitst op het daadwerkelijk beheersen van het beschreven risico, afgestemd op de aard en omvang ervan. Het geeft een duidelijk en volledig overzicht van de samenhang tussen technische, organisatorische en procedurele maatregelen, die noodzakelijk zijn om gezond en veilig werken te kunnen werken. De effectiviteit moet aannemelijk zijn op basis van deskundig inzicht of ervaring.",
      },
      {
        text:
          "Ter illustratie (hypothetisch voorbeeld): In het magazijn wordt een elektrische heftruck ingezet, die essentieel is voor de uitvoering van het werk (en is tevens hulpmiddel om fysieke belasting te beperken). Het risico op rugletsel door lichaamstrillingen tijdens het gebruik van de heftruck wordt beheerst door het realiseren van een vlakke rijvloer en het periodiek inspecteren daarvan, het uitrusten van de heftruck met een ergonomische stoel en degelijke banden die regelmatig op hun staat worden gecontroleerd, het periodiek laten keuren van de heftruck, het organiseren van werkzaamheden zodat medewerkers door roulatie maximaal vier uur aaneengesloten rijden, en het geven van voorlichting over zowel het risico als de correcte instelling van de stoel. De blootstelling is beoordeeld en valt ruim onder de actiewaarde voor dagelijkse blootstelling. De getroffen maatregelen zijn conform de richtlijnen en best practices zoals vastgelegd in de arbocatalogus.",
        emphasis: true,
      },
    ];
  }

  if (question.id === "1-1-14") {
    return [
      {
        text:
          "De gekozen maatregelen moeten passen binnen de wettelijk verplichte arbeidshygiënische strategie, ook wel bekend als het STOP-principe. Deze principe schrijft voor dat risico’s in de eerste plaats bij de bron moeten worden aangepakt (substitutie), gevolgd door collectieve Technische maatregelen, vervolgens Organisatorische oplossingen, en pas in laatste instantie door het gebruik van Persoonlijke beschermingsmiddelen. Deze volgorde is wettelijk vastgelegd en vormt de basis voor effectief en duurzaam risicobeheer. In de RI&E moet inzichtelijk worden gemaakt dat deze volgorde is gevolgd of – als daarvan is afgeweken – dat dit beargumenteerd is.",
      },
      {
        text:
          "Ter illustratie (hypothetisch voorbeeld): Dit onderscheid komt duidelijk naar voren in het voorbeeld uit 1.1.13. Het werken met een heftruck in het magazijn, is het risico op rugletsel door lichaamstrillingen beheerst door maatregelen te treffen op verschillende niveaus van de arbeidshygiënische strategie. Omdat het werk niet zonder heftruck kan worden uitgevoerd (en de heftruck tevens een hulpmiddel is om fysieke belasting te beperken), is gekozen voor een combinatie van bronaanpak, technische en organisatorische beheersing. De vlakke rijvloer, die periodiek wordt geïnspecteerd, valt onder bronaanpak omdat deze trillingen vanuit de ondergrond direct vermindert. De ergonomische stoel en de regelmatige controle van de banden zijn technische maatregelen die de overdracht van trillingen naar de bestuurder beperken. Werkroulatie, waarbij medewerkers maximaal vier uur aaneengesloten rijden, is een organisatorische maatregel die de totale blootstellingsduur verlaagt. Tot slot ontvangen alle betrokken medewerkers voorlichting over de risico’s en over de juiste stoelinstelling, wat valt onder instructie en voorlichting. Deze integrale aanpak vermindert het risico structureel, voldoet aantoonbaar aan de arbeidshygiënische strategie met inachtneming van het redelijkerwijsbeginsel en minimaliseert de afhankelijkheid van persoonlijke beschermingsmiddelen.",
        emphasis: true,
      },
    ];
  }

  if (question.id === "1-1-15") {
    return "Zie ook criterium 1.1.1 c. Er is beoordeeld of de RI&E zoals het er ligt, volstaat, of dat (specialistisch) vervolgonderzoek nodig is. Het komt vaak voor dat aanvullende verdieping of specialistisch onderzoek noodzakelijk blijkt om de aard, ernst en blootstelling aan risico’s representatief in beeld te brengen. Bij de beoordeling of aanvullend onderzoek nodig is, moet kritisch worden gekeken naar situaties waarin standaardbeoordeling tekortschiet. Denk hierbij aan blootstelling aan gevaarlijke stoffen (zoals dampen of houtstof), biologische agentia (zoals bacteriën of schimmels) of explosiegevaar (ATEX). Ook geluidsbelasting, trillingen door handgereedschap of voertuigen, blootstelling aan straling (zoals EMV, UV, röntgen) vragen vaak vervolgonderzoek. Daarnaast kan psychosociale belasting (zoals werkdruk of agressie), intensief beeldschermwerk en fysieke belasting bij tillen of duwen een reden zijn voor aanvullend specialistisch onderzoek. In al deze gevallen kunnen verdiepende analyses nodig zijn om risico’s betrouwbaar in beeld te brengen en passende beheersmaatregelen te bepalen.";
  }

  if (question.id === "1-2") {
    return [
      {
        text:
          "Een RI&E moet een actueel beeld geven van de werkelijke werksituatie en de werkzaamheden binnen een organisatie. Dat betekent dat de RI&E een actuele datum heeft die past bij de bestaande situatie, en dat bij gebruik van een instrument, zoals een branche-instrument, de meest recente versie is toegepast.",
      },
      {
        text:
          "Het is nodig om de RI&E regelmatig te controleren en bij te werken om te verzekeren dat de geïnventariseerde risico's en de bijbehorende maatregelen blijven aansluiten bij de actuele situatie. Dit kan nodig zijn wanneer werkprocessen veranderen, wanneer geplande maatregelen niet effectief blijken te zijn, of bij nieuwe wetgeving of wetenschappelijke inzichten. Om ervoor te zorgen dat de RI&E steeds actueel blijft, helpt het om een procedure te hebben die het proces van bijwerken en controleren waarborgt. Daarbij is het belangrijk te beseffen dat, als er nog vervolgonderzoek nodig is, de RI&E in brede zin niet alleen nog niet volledig is, maar ook niet actueel.",
      },
    ];
  }

  if (question.id === "1-3b") {
    return [
      {
        text:
          "Wanneer er binnen een branche een arbocatalogus beschikbaar is, kan daarin zijn vastgelegd welke maatregelen, werkwijzen of onderzoeksmethodieken als passend worden beschouwd om bepaalde arbeidsrisico’s te beheersen. Deze brancheafspraken vormen daarmee een belangrijk referentiekader voor de beoordeling van de risico’s en de gekozen beheersmaatregelen.",
      },
      {
        text:
          "Het is daarom van belang dat de RI&E en de daarop gebaseerde risicobeheersing aansluiten bij de relevante arbocatalogus. Daarbij moet worden nagegaan of de voorgeschreven of aanbevolen maatregelen en onderzoeksmethoden uit de branche daadwerkelijk zijn meegenomen, beoordeeld en waar nodig toegepast binnen de organisatie. Zo wordt geborgd dat de aanpak van arbeidsrisico’s niet alleen aansluit bij de wettelijke verplichtingen, maar ook bij de binnen de branche erkende stand van de techniek en praktijk.",
      },
    ];
  }

  if (question.id === "1-4-1") {
    return [
      {
        text:
          "Een representatieve RI&E vraagt om een methode die aansluit bij de risico’s van de branche en de organisatie. Ook moeten de relevante werkplekken, afdelingen en functies daadwerkelijk zijn bezocht en beoordeeld. De beoordeling moet plaatsvinden op een passend moment, zodat de werkzaamheden, omstandigheden en blootstellingen representatief zijn voor de normale praktijk. De RI&E mag daarbij niet hoofdzakelijk zijn gebaseerd op theoretische aannames, bureauonderzoek of de subjectieve mening van één of enkele personen.",
      },
      {
        text:
          "Daarnaast is van belang dat gebruikte onderzoeksmethoden en beoordelingsinstrumenten geschikt zijn voor het betreffende risico en de specifieke situatie. Zij moeten op de juiste wijze zijn toegepast en voldoende basis bieden om de effectiviteit van bestaande of voorgenomen maatregelen te toetsen. Dit maakt evaluatie en verificatie van de risicobeheersing mogelijk.",
      },
      {
        text:
          "De risico’s zijn representatief in beeld wanneer de beoordeling geen structurele over- of onderschatting bevat en niet uitgaat van een te gunstig beeld of uitsluitend van worstcasescenario’s. De RI&E moet daarmee een onderbouwde en evenwichtige basis vormen voor passende risicobeheersing binnen de organisatie.",
      },
    ];
  }

  if (question.id === "2-1") {
    return "De kern van het plan van aanpak is het vertalen van risico's naar concrete beheersmaatregelen, gericht op het elimineren van gevaren of het terugbrengen van restrisico’s tot een aanvaardbaar niveau. Daarbij geldt de bronaanpak als uitgangspunt, conform artikel 3 Arbowet. De maatregelen worden afgestemd op de ernst, kans en blootstelling (risicoweging), zoals ook verwoord in methoden als Kinney & Wiruth. De gekozen maatregelen moeten bovendien proportioneel zijn en passen binnen de context van de organisatie.";
  }

  if (question.id === "2-2") {
    return "De arbeidshygiënische strategie schrijft een hiërarchische volgorde van maatregelen voor: bronaanpak, collectieve technische voorzieningen, organisatorische maatregelen en pas als laatste persoonlijke beschermingsmiddelen. Dit is wettelijk verankerd (Arbowet art. 3 lid 1b, Besluit art. 4.1) en wordt gezien als het fundament voor effectief risicobeheer. Het plan van aanpak moet dit volgordeprincipe aantoonbaar volgen. Zo wordt voorkomen dat suboptimale oplossingen, zoals alleen PBM’s, gezien wordt als definitieve oplossing. Zie ook 1.1.14.";
  }

  if (question.id === "2-3") {
    return "Als in het plan van aanpak wordt afgeweken van de arbeidshygiënische strategie, bijvoorbeeld door direct PBM’s in te zetten, moet dat schriftelijk en inhoudelijk gemotiveerd worden. Toegestane afwijkingen zijn slechts verdedigbaar als de bronaanpak technisch niet haalbaar is of onevenredig zware gevolgen zou hebben (artikel 3 lid 1b Arbowet). De motivatie moet onderbouwd worden met een afweging van alternatieven, kosten/baten en impact op veiligheid en gezondheid.";
  }

  if (question.id === "2-4") {
    return "Voor een doeltreffend plan van aanpak moet niet alleen worden vermeld wat er gebeurt, maar ook hoe: verantwoordelijkheden, tijdspad, benodigde middelen en betrokken partijen. Ook hoort er een duidelijke fasering bij, eventueel gekoppeld aan project- of verbetercycli (zoals PDCA). De implementatiestrategie moet passen binnen het bredere arbobeleid van de organisatie.";
  }

  if (question.id === "2-5") {
    return "Elke maatregel moet worden beoordeeld op de verwachte risicoreductie: wordt het restrisico beheersbaar? Dit vraagt om een inschatting op basis van ervaringscijfers, normwaarden (bv. grenswaarden stoffen), en (indien van toepassing) monitoringresultaten. Met het gekozen evaluatiemodel voor de RI&E, zoals de methode van Kinney & Wiruth, kan bovendien vooraf een inschatting worden gemaakt van de verwachte risicoscore na implementatie van de maatregel. Dit helpt bij prioritering en onderbouwing van de effectiviteit.";
  }

  if (question.id === "2-6") {
    return "Goede maatregelen mogen geen nieuwe risico’s veroorzaken of de bestaande situatie verslechteren. Denk aan ergonomische nadelen, verstoring van werkprocessen, psychische belasting of belemmeringen voor BHV of vluchtroutes. In het plan van aanpak hoort een korte toets op zogeheten neveneffecten - dit voorkomt negatieve verschuiving van risico’s.";
  }

  if (question.id === "2-7") {
    return "Risicoklasse en prioriteit zijn twee afzonderlijke zaken. Bij het bepalen van de risicoklasse worden de geïnventariseerde gevaren beoordeeld op hun omvang, omdat niet alle risico's even groot zijn. Vervolgens wordt de prioriteit van maatregelen vastgesteld, waarbij een afweging wordt gemaakt op basis van verschillende criteria binnen het arbobeleid, zoals de omvang van het probleem, kosten-batenanalyse, wet- en regelgeving, uitvoerbaarheid en preventiepotentieel etc. Risicoklasse is een belangrijke weegfactor voor de prioriteitenstelling maar het betekent niet automatisch dat de grootste risico's als eerste worden aangepakt. Hoewel de risicoklasse een belangrijke rol speelt bij de prioritering, betekent dit niet automatisch dat de grootste risico's als eerste worden aangepakt. Wanneer er echter significant van wordt afgeweken, vraagt het onderbouwing.";
  }

  if (question.id === "2-8") {
    return [
      {
        text:
          "Door de SMART-criteria toe te passen op de maatregelen in het plan van aanpak, wordt de prioritering duidelijker, doelgerichter en effectiever. Dit bevordert een consistente uitvoering en optimaliseert de veiligheidsmaatregelen.",
      },
      {
        text:
          "Specifiek: elke maatregel wordt precies uitgelegd, zodat iedereen begrijpt wat er moet gebeuren en waarom. Dit voorkomt verwarring en zorgt ervoor dat iedereen weet wat de bedoeling is.",
      },
      {
        text:
          "Meetbaar: het succes van elke maatregel wordt vastgelegd met concrete meetcriteria. Hierdoor kan worden gecontroleerd of de doelstellingen zijn bereikt en wordt de voortgang zichtbaar.",
      },
      {
        text:
          "Haalbaar: de maatregelen zijn realistisch en passen binnen de beschikbare middelen en tijd. Dit houdt in dat er voldoende middelen, personeel en tijd beschikbaar moeten zijn om de maatregelen effectief uit te voeren.",
      },
      {
        text:
          "Realistisch: de maatregelen zijn afgestemd op de werkelijke situatie en omstandigheden van de organisatie. Acties moeten uitvoerbaar zijn binnen de huidige context en beschikbare middelen.",
      },
      {
        text:
          "Tijdgebonden: duidelijke deadlines worden gesteld voor de uitvoering van elke maatregel. Dit zorgt ervoor dat acties op een gestructureerde en tijdige manier worden uitgevoerd, zoals bijvoorbeeld de installatie van nieuwe veiligheidsborden binnen vier weken na goedkeuring.",
      },
    ];
  }

  if (question.id === "2-9") {
    return "De uitvoerbaarheid van het plan valt of staat bij de bevoegdheden van actiehouders. De Arbowet (art. 3 lid 3) vereist dat taken en verantwoordelijkheden duidelijk zijn verdeeld en passen bij de functie-inhoud. Actiehouders moeten tijd, middelen en mandaat hebben om maatregelen door te voeren. Zo niet, dan moet escalatie of ondersteuning zijn geregeld.";
  }

  if (hasCollapsibleHelp(question)) {
    return "Beoordeel of dit onderdeel aantoonbaar is uitgewerkt binnen de RI&E.";
  }

  return "";
}

function requiresEvidenceField(question) {
  return [
    "1.1 Volledigheid",
    "1.3 Actuele inzichten",
    "1.4 Betrouwbaarheid",
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
  if (question.id === "1-1-2") {
    return simpleCompletenessOptions;
  }

  if (question.category === "3. Nadere RI&E-voorschriften") {
    return requirementsOptions;
  }

  if (question.category === "1.3 Actuele inzichten") {
    return yesNoNaOptions;
  }

  if (question.category === "1.2 Actualiteit") {
    return options;
  }

  if (requiresEvidenceWithoutNA(question)) {
    return options;
  }

  return optionalOptions;
}

function createEvidenceField(name, placeholderText, labelText) {
  const defaultPlaceholder =
    placeholderText ||
    "Omschrijf hier de onderbouwing zo concreet dat een toetsende lezer kan volgen waarop uw oordeel is gebaseerd en hoe dit binnen de organisatie is vastgesteld.";
  const defaultLabel = labelText || "Controleerbaar bewijs of toelichting";
  const evidence = document.createElement("label");
  evidence.className = "risk-evidence";
  evidence.innerHTML = `
    <span class="risk-evidence-label" data-default-label="${defaultLabel}">${defaultLabel}</span>
    <textarea
      class="risk-note"
      name="${name}"
      data-default-placeholder="${defaultPlaceholder}"
      placeholder="${defaultPlaceholder}"
    ></textarea>
  `;

  return evidence;
}

function createRiskTextField(name, labelText, placeholderText) {
  const field = document.createElement("label");
  field.className = "risk-evidence";
  field.hidden = true;
  field.innerHTML = `
    <span class="risk-evidence-label">${labelText}</span>
    <textarea
      class="risk-note"
      name="${name}"
      placeholder="${placeholderText}"
    ></textarea>
  `;
  return field;
}

function getQuestionEvidencePlaceholder(question) {
  if (question.id === "1-1-2") {
    return "Omschrijf hier de onderbouwing waaruit blijkt dat de gegevens van verzuimanalyses om inzicht te krijgen in de arbeidsgerelateerde oorzaken van het verzuim zijn meegenomen als input bij de RI&E.";
  }

  return null;
}

function getQuestionEvidenceConfig(question, selectedValue) {
  if (question.category === "1.1 Volledigheid" && question.type !== "risk-inventory") {
    if (selectedValue === "yes") {
      return {
        label: "Controleerbaar bewijs of toelichting",
        placeholder: "Omschrijf hier waaruit blijkt dat dit onderdeel is uitgevoerd en hoe dit aantoonbaar is uitgewerkt in de RI&E.",
      };
    }

    if (selectedValue === "partial") {
      return {
        label: "Controleerbaar bewijs of toelichting",
        placeholder: "Omschrijf hier welk deel is uitgevoerd, welk deel nog ontbreekt en hoe dit aantoonbaar is uitgewerkt in de RI&E.",
      };
    }

    if (selectedValue === "no") {
      return {
        label: "Reden",
        placeholder: "Omschrijf hier waarom dit onderdeel niet is uitgevoerd of niet is meegenomen in de RI&E.",
      };
    }

    return {
      label: "Controleerbaar bewijs of toelichting",
      placeholder: getQuestionEvidencePlaceholder(question),
    };
  }

  if (question.category === "2. Plan van aanpak" && question.type !== "risk-inventory") {
    if (selectedValue === "no") {
      return {
        label: "Controleerbaar bewijs of toelichting",
        placeholder:
          "Omschrijf hier waarom dit onderdeel niet is uitgevoerd of niet is meegenomen in het plan van aanpak.",
      };
    }

    return {
      label: "Controleerbaar bewijs of toelichting",
      placeholder:
        "Omschrijf hier waaruit blijkt dat dit onderdeel is uitgevoerd en hoe dit aantoonbaar is uitgewerkt in het plan van aanpak.",
    };
  }

  return {
    label: "Controleerbaar bewijs of toelichting",
    placeholder: getQuestionEvidencePlaceholder(question),
  };
}

function shouldShowQuestionEvidence(question, selectedValue) {
  if (question.category === "1.1 Volledigheid" && question.type !== "risk-inventory") {
    return selectedValue === "yes" || selectedValue === "partial" || selectedValue === "no";
  }

  if (["1.2 Actualiteit", "1.4 Betrouwbaarheid"].includes(question.category) && question.type !== "risk-inventory") {
    return selectedValue === "yes" || selectedValue === "partial";
  }

  if (question.category === "1.3 Actuele inzichten" && question.type !== "risk-inventory") {
    return selectedValue === "yes" || selectedValue === "na";
  }

  return requiresEvidenceField(question);
}

function getDisplayQuestionTitle(question) {
  if (question.category === "1.1 Volledigheid") {
    const index = questions.filter((item) => item.category === "1.1 Volledigheid").findIndex((item) => item.id === question.id);

    if (index >= 0) {
      return `1.1.${index + 1} ${question.title}`;
    }
  }

  if (question.category === "1.2 Actualiteit") {
    const index = questions.filter((item) => item.category === "1.2 Actualiteit").findIndex((item) => item.id === question.id);

    if (index >= 0) {
      return `1.2.${index + 1} ${question.title}`;
    }
  }

  if (question.category === "1.3 Actuele inzichten") {
    const index = questions.filter((item) => item.category === "1.3 Actuele inzichten").findIndex((item) => item.id === question.id);

    if (index >= 0) {
      return `1.3.${index + 1} ${question.title}`;
    }
  }

  if (question.category === "1.4 Betrouwbaarheid") {
    const index = questions.filter((item) => item.category === "1.4 Betrouwbaarheid").findIndex((item) => item.id === question.id);

    if (index >= 0) {
      return `1.4.${index + 1} ${question.title}`;
    }
  }

  if (question.category === "2. Plan van aanpak") {
    const index = questions
      .filter((item) => item.category === "2. Plan van aanpak")
      .findIndex((item) => item.id === question.id);

    if (index >= 0) {
      return `2.${index + 1} ${question.title}`;
    }
  }

  return question.title;
}

function getAlphabeticLabel(index) {
  return String.fromCharCode(97 + index);
}

function getSupplementalRequirementConfigs(groupId, itemLabel) {
  const configs = [];

  if (itemLabel === "Jeugdigen") {
    configs.push({
      key: "youth-article",
      prompt: "Is invulling gegeven aan artikel 1.36 Arbobesluit voor jeugdigen?",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 1.36 Arbobesluit voor jeugdigen.",
      noNote: "Voor jeugdigen is geen invulling gegeven aan artikel 1.36 Arbobesluit.",
    });
  }

  if (itemLabel === "Zwangeren") {
    configs.push({
      key: "pregnancy-article",
      prompt:
        "Is invulling gegeven aan artikel 1.41 Arbobesluit voor zwangere medewerkers en medewerkers tijdens de lactatie?",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 1.41 Arbobesluit voor zwangere medewerkers en medewerkers tijdens de lactatie.",
      noNote:
        "Voor zwangere medewerkers en medewerkers tijdens de lactatie is geen invulling gegeven aan artikel 1.41 Arbobesluit.",
    });
  }

  if (groupId === "biologische-agentia") {
    configs.push({
      key: "biological-article",
      prompt:
        "Is invulling gegeven aan artikel 4.85 Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie voor biologische agentia?",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 4.85 Arbobesluit voor biologische agentia.",
      noNote: "Voor biologische agentia is geen invulling gegeven aan artikel 4.85 Arbobesluit.",
    });
  }

  if (
    groupId === "gevaarlijke-stoffen" &&
    itemLabel ===
      "Gezondheidsrisico's, zoals carcinogene, mutagene, reprotoxische en sensibiliserende stoffen en procesemissies"
  ) {
    configs.push(
      {
        key: "hazardous-substances-article-4-2",
        prompt:
          "Is invulling gegeven aan artikel 4.2 Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen van gevaarlijke stoffen en asbest?",
        placeholder:
          "Omschrijf hier op welke wijze invulling is gegeven aan dit nadere voorschrift en waar dit uit blijkt.",
        noNote:
          "Voor artikel 4.2 Arbobesluit over gevaarlijke stoffen en asbest is geen invulling gegeven.",
      },
      {
        key: "hazardous-substances-article-4-2a",
        prompt:
          "Is invulling gegeven aan artikel 4.2a Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, aanvullende registratie van gevaarlijke stoffen en reproductietoxische stoffen?",
        placeholder:
          "Omschrijf hier op welke wijze invulling is gegeven aan artikel 4.2a Arbobesluit en waar dit uit blijkt.",
        noNote:
          "Voor artikel 4.2a Arbobesluit over aanvullende registratie van gevaarlijke stoffen en reproductietoxische stoffen is geen invulling gegeven.",
      },
      {
        key: "hazardous-substances-article-4-13",
        prompt:
          "Is invulling gegeven aan artikel 4.13 Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie voor CMR-stoffen?",
        placeholder:
          "Omschrijf hier op welke wijze invulling is gegeven aan artikel 4.13 Arbobesluit en waar dit uit blijkt.",
        noNote:
          "Voor artikel 4.13 Arbobesluit over CMR-stoffen is geen invulling gegeven.",
      }
    );
  }

  if (groupId === "gevaarlijke-stoffen" && itemLabel === "Veiligheidsrisico's, zoals brand, explosie en zware ongevallen bij opslag of gebruik") {
    configs.push(
      {
        key: "hazardous-substances-article-4-2a",
        prompt:
          "Is invulling gegeven aan hoofdstuk 2, afdeling 2 van het Arbobesluit: aanvullende voorschriften risico-inventarisatie en -evaluatie ter voorkoming en beperking van zware ongevallen met gevaarlijke stoffen?",
        placeholder:
          "Omschrijf hier op welke wijze invulling is gegeven aan hoofdstuk 2, afdeling 2 van het Arbobesluit en waar dit uit blijkt.",
        noNote:
          "Voor hoofdstuk 2, afdeling 2 van het Arbobesluit ter voorkoming en beperking van zware ongevallen met gevaarlijke stoffen is geen invulling gegeven.",
      },
      {
        key: "hazardous-substances-article-4-13",
        prompt:
          "Is invulling gegeven aan artikel 3.5c Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie; explosieveiligheidsdocument?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 3.5c Arbobesluit en het explosieveiligheidsdocument.",
        noNote:
          "Voor artikel 3.5c Arbobesluit en het explosieveiligheidsdocument is geen invulling gegeven.",
      }
    );
  }

  if (itemLabel === "Fysieke overbelasting, zoals tillen, dragen, duwen, trekken, repeterende bewegingen en ongunstige houdingen") {
    configs.push({
      key: "physical-load-article",
      prompt:
        "Is invulling gegeven aan artikel 5.3 Arbobesluit: beperken gevaren en risico-inventarisatie en -evaluatie voor fysieke belasting?",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 5.3 Arbobesluit voor fysieke belasting.",
      noNote: "Voor fysieke belasting is geen invulling gegeven aan artikel 5.3 Arbobesluit.",
    });
  }

  if (itemLabel === "Beeldschermwerk") {
    configs.push({
      key: "screen-work-article",
      prompt:
        "Is invulling gegeven aan artikel 5.9 Arbobesluit: risico-inventarisatie en -evaluatie voor beeldschermwerk?",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 5.9 Arbobesluit voor beeldschermwerk.",
      noNote: "Voor beeldschermwerk is geen invulling gegeven aan artikel 5.9 Arbobesluit.",
    });
  }

  if (itemLabel === "Schadelijk of hinderlijk geluid") {
    configs.push(
      {
        key: "noise-article-6-7",
        prompt:
          "Is invulling gegeven aan artikel 6.7 Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen en meten van geluid?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.7 Arbobesluit voor geluid.",
        noNote: "Voor geluid is geen invulling gegeven aan artikel 6.7 Arbobesluit.",
      },
      {
        key: "noise-article-6-8",
        prompt:
          "Is invulling gegeven aan artikel 6.8 Arbobesluit: maatregelen ter voorkoming of beperking van de blootstelling aan geluid?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.8 Arbobesluit voor geluid.",
        noNote: "Voor geluid is geen invulling gegeven aan artikel 6.8 Arbobesluit.",
      }
    );
  }

  if (itemLabel === "Trillingen en schokken") {
    configs.push(
      {
        key: "vibration-article-6-11b",
        prompt:
          "Is invulling gegeven aan artikel 6.11b Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen en meten van mechanische trillingen?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.11b Arbobesluit voor trillingen.",
        noNote: "Voor trillingen is geen invulling gegeven aan artikel 6.11b Arbobesluit.",
      },
      {
        key: "vibration-article-6-11c",
        prompt:
          "Is invulling gegeven aan artikel 6.11c Arbobesluit: voorkomen of beperken van schadelijke trillingen?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.11c Arbobesluit voor trillingen.",
        noNote: "Voor trillingen is geen invulling gegeven aan artikel 6.11c Arbobesluit.",
      }
    );
  }

  if (itemLabel === "Straling, zoals niet-ioniserende straling, uv-straling en kunstmatige optische straling") {
    configs.push(
      {
        key: "optical-radiation-article-6-12d",
        prompt:
          "Is invulling gegeven aan artikel 6.12d Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen, meten en berekenen van optische straling?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.12d Arbobesluit voor optische straling.",
        noNote: "Voor optische straling is geen invulling gegeven aan artikel 6.12d Arbobesluit.",
      },
      {
        key: "optical-radiation-article-6-12e",
        prompt:
          "Is invulling gegeven aan artikel 6.12e Arbobesluit: maatregelen ter voorkoming of beperking van de blootstelling aan optische straling?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.12e Arbobesluit voor optische straling.",
        noNote: "Voor optische straling is geen invulling gegeven aan artikel 6.12e Arbobesluit.",
      },
      {
        key: "emf-article-6-12k",
        prompt:
          "Is invulling gegeven aan artikel 6.12k Arbobesluit: nadere voorschriften risico-inventarisatie en -evaluatie, beoordelen, meten en berekenen van elektromagnetische velden?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.12k Arbobesluit voor elektromagnetische velden.",
        noNote: "Voor elektromagnetische velden is geen invulling gegeven aan artikel 6.12k Arbobesluit.",
      },
      {
        key: "emf-article-6-12l",
        prompt:
          "Is invulling gegeven aan artikel 6.12l Arbobesluit: maatregelen ter voorkoming of beperking van de blootstelling aan elektromagnetische velden?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.12l Arbobesluit voor elektromagnetische velden.",
        noNote: "Voor elektromagnetische velden is geen invulling gegeven aan artikel 6.12l Arbobesluit.",
      }
    );
  }

  if (itemLabel === "Arbeidsmiddelen: geschiktheid, beschikbaarheid, bevoegd gebruik, keuringen en onderhoud") {
    configs.push(
      {
        key: "work-equipment-article-7-3",
        prompt:
          "Is invulling gegeven aan artikel 7.3 Arbobesluit: geschiktheid van arbeidsmiddelen?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 7.3 Arbobesluit voor arbeidsmiddelen.",
        noNote: "Voor arbeidsmiddelen is geen invulling gegeven aan artikel 7.3 Arbobesluit.",
      },
      {
        key: "work-height-article-7-23",
        prompt:
          "Is invulling gegeven aan artikel 7.23 Arbobesluit: algemene eisen voor tijdelijke werkzaamheden op hoogte en beschikbaarheid van arbeidsmiddelen?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 7.23 Arbobesluit voor werkzaamheden op hoogte.",
        noNote: "Voor werkzaamheden op hoogte is geen invulling gegeven aan artikel 7.23 Arbobesluit.",
      },
      {
        key: "rope-access-article-7-23c",
        prompt:
          "Is invulling gegeven aan artikel 7.23c Arbobesluit: specifieke bepalingen voor het gebruik van toegangs- en positioneringstechnieken met lijnen?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 7.23c Arbobesluit.",
        noNote: "Voor toegangs- en positioneringstechnieken met lijnen is geen invulling gegeven aan artikel 7.23c Arbobesluit.",
      },
      {
        key: "work-platform-article-7-23d",
        prompt:
          "Is invulling gegeven aan artikel 7.23d Arbobesluit: toepassing van werkbakken en werkplatforms?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 7.23d Arbobesluit.",
        noNote: "Voor werkbakken en werkplatforms is geen invulling gegeven aan artikel 7.23d Arbobesluit.",
      }
    );
  }

  if (itemLabel === "Persoonlijke beschermingsmiddelen: noodzaak, geschiktheid, keuringen en onderhoud") {
    configs.push({
      key: "ppe-article-8-2",
      prompt:
        "Is invulling gegeven aan artikel 8.2 Arbobesluit: keuze van persoonlijke beschermingsmiddelen?",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 8.2 Arbobesluit voor persoonlijke beschermingsmiddelen.",
      noNote: "Voor persoonlijke beschermingsmiddelen is geen invulling gegeven aan artikel 8.2 Arbobesluit.",
    });
  }

  return configs;
}

function renderRiskInventory(container) {
  const inventory = document.createElement("div");
  inventory.className = "risk-inventory";

  const intro = document.createElement("div");
  intro.className = "risk-intro";
  intro.innerHTML = `
    <strong>Doorloop per hoofd- en deelrisico dezelfde beslisroute.</strong>
    <p>
      Eerst bepaalt u of het risico van toepassing is. Alleen als het risico van toepassing is,
      volgt de vraag of het is beschreven in de RI&E. Daarna verschijnt afhankelijk van uw antwoord
      de vraag over verantwoording of de inventarisatie van achterliggende grondoorzaken.
    </p>
  `;
  inventory.append(intro);

  for (const group of riskCatalog) {
    const groupCard = document.createElement("details");
    groupCard.className = "risk-group";

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
      <div>Grondoorzaken geïnventariseerd?</div>
      <div>Bewijs / toelichting</div>
    `;
    content.append(head);

    for (const [itemIndex, itemLabel] of group.items.entries()) {
      const itemId = `${group.id}-${slugify(itemLabel)}`;
      const item = document.createElement("article");
      item.className = "risk-item";
      item.dataset.itemId = itemId;
      item.dataset.groupId = group.id;
      item.dataset.itemLabel = itemLabel;

      const header = document.createElement("div");
      header.className = "risk-item-header";

      const label = document.createElement("p");
      label.className = "risk-item-label";
      label.textContent = `${getAlphabeticLabel(itemIndex)}. ${itemLabel}`;
      header.append(label);
      const sub = document.createElement("p");
      sub.className = "risk-item-sub";
      sub.textContent = "Doorloopt dit risico en voeg eventueel bewijs of opmerkingen toe.";
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
      appendRiskEvidenceField(
        applicability,
        `risk-${itemId}-applicable-note`,
        "Beschrijf hier waarom dit risico niet van toepassing is binnen de organisatie, of waarom dit risico buiten de scope van deze RI&E valt."
      );
      item.append(applicability);

      const described = createRiskColumn(
        "Is het risico beschreven in de RI&E?",
        "described",
        [
          { value: "yes", label: "Ja" },
          { value: "no", label: "Nee" },
        ],
        itemId
      );
      described.classList.add("conditional-block");
      described.dataset.when = "applicable-yes";
      described.append(
        createRiskTextField(
          `risk-${itemId}-assessor`,
          "Wie heeft dit risico beoordeeld?",
          "Omschrijf hier wie dit risico heeft beoordeeld."
        )
      );
      described.append(
        createRiskTextField(
          `risk-${itemId}-assessment-method`,
          "Welke methode is gebruikt om het risico te inventariseren?",
          "Omschrijf hier welke methode is gebruikt om dit risico te inventariseren."
        )
      );
      described.append(
        createRiskTextField(
          `risk-${itemId}-evaluation-method`,
          "Welke methode is gebruikt om het risico te evalueren?",
          "Omschrijf hier welke methode is gebruikt om dit risico te evalueren (voor het bepalen van de risicoklasse)."
        )
      );
      described.append(
        createRiskTextField(
          `risk-${itemId}-described-yes-note`,
          "Waar is dit onderdeel terug te vinden in de RI&E?",
          "Omschrijf hier waar dit onderdeel terug te vinden is in de RI&E."
        )
      );
      item.append(described);

      const whyNot = createRiskColumn(
        "Indien nee: kunt u verantwoorden waarom het risico niet beschreven is in de RI&E?",
        "justified",
        [
          { value: "yes", label: "Ja" },
          { value: "no", label: "Nee" },
        ],
        itemId
      );
      whyNot.classList.add("conditional-block");
      whyNot.dataset.when = "described-no";
      appendRiskEvidenceField(
        whyNot,
        `risk-${itemId}-described-no-note`,
        "Onderbouw hier wat de reden is waarom dit risico niet is opgenomen in de RI&E."
      );
      item.append(whyNot);

      const causes = createRiskColumn(
        "Zijn de grondoorzaken van dit risico in de RI&E geïnventariseerd?",
        "causes",
        [
          { value: "yes", label: "Ja" },
          { value: "no", label: "Nee" },
        ],
        itemId
      );
      causes.classList.add("conditional-block");
      causes.dataset.when = "described-yes";
      appendRiskEvidenceField(
        causes,
        `risk-${itemId}-causes-yes-note`,
        "Beschrijf hier waaruit blijkt dat de grondoorzaken van dit risico zijn geïnventariseerd."
      );
      appendRiskEvidenceField(
        causes,
        `risk-${itemId}-causes-no-note`,
        "Licht hier toe waarom de grondoorzaken van dit risico niet zijn geïnventariseerd."
      );
      item.append(causes);

      for (const config of getSupplementalRequirementConfigs(group.id, itemLabel)) {
        const supplementalBlock = createRiskColumn(
          config.prompt,
          config.key,
          [
            { value: "yes", label: "Ja" },
            { value: "no", label: "Nee" },
          ],
          itemId
        );
        supplementalBlock.classList.add("conditional-block");
        supplementalBlock.dataset.when = "described-yes";
        appendRiskEvidenceField(
          supplementalBlock,
          `risk-${itemId}-${config.key}-note`,
          config.placeholder
        );
        item.append(supplementalBlock);
      }

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
    const copy = fragment.querySelector(".question-copy");
    const category = fragment.querySelector(".question-category");
    const title = fragment.querySelector(".question-title");
    const help = fragment.querySelector(".question-help");
    const optionGroup = fragment.querySelector(".question-options");

    card.dataset.questionId = question.id;
    category.textContent = question.category;
    title.textContent = getDisplayQuestionTitle(question);
    if (hasCollapsibleHelp(question)) {
      help.hidden = true;
      const helpToggle = document.createElement("details");
      helpToggle.className = "question-help-toggle";
      const summary = document.createElement("summary");
      summary.textContent = "Toelichting";

      const helpContent = getCollapsibleHelpText(question);
      const body = document.createElement("div");

      if (typeof helpContent === "string") {
        const paragraph = document.createElement("p");
        paragraph.textContent = helpContent;
        body.append(paragraph);
      } else if (Array.isArray(helpContent)) {
        for (const section of helpContent) {
          const paragraph = document.createElement("p");

          if (section.heading) {
            const heading = document.createElement("strong");
            heading.textContent = section.heading;
            paragraph.append(heading);
            body.append(paragraph);

            if (section.text) {
              const bodyParagraph = document.createElement("p");
              bodyParagraph.textContent = section.text;
              body.append(bodyParagraph);
            }

            continue;
          }

          if (section.emphasis) {
            const italic = document.createElement("em");
            italic.textContent = section.text;
            paragraph.append(italic);
          } else {
            paragraph.textContent = section.text;
          }

          body.append(paragraph);
        }
      } else {
        const intro = document.createElement("p");
        intro.textContent = helpContent.intro;

        const emphasis = document.createElement("p");
        const italic = document.createElement("em");
        italic.textContent = helpContent.emphasis;
        emphasis.append(italic);

        body.append(intro, emphasis);
      }

      helpToggle.append(summary, body);
      copy.append(helpToggle);
    } else {
      help.textContent = question.help || getDefaultHelpText(question);
    }

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
        makeRadioToggleable(input);

        const text = document.createElement("div");
        text.innerHTML = option.detail
          ? `<strong>${option.label}</strong><br><span>${option.detail}</span>`
          : `<strong>${option.label}</strong>`;

        label.append(input, text);
        optionGroup.append(label);
      }

      if (requiresEvidenceField(question)) {
        const evidenceConfig = getQuestionEvidenceConfig(question, null);
        const evidenceField = createEvidenceField(
          `question-${question.id}-note`,
          evidenceConfig.placeholder,
          evidenceConfig.label
        );
        evidenceField.hidden = !shouldShowQuestionEvidence(question, null);
        optionGroup.append(evidenceField);
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
  const supplementalConfigs = getSupplementalRequirementConfigs(groupId, itemLabel);
  const supplementalAnswers = Object.fromEntries(
    supplementalConfigs.map((config) => [config.key, getAnswerValue(`risk-${itemId}-${config.key}`)])
  );
  const applicabilityNote =
    survey.querySelector(`[name="risk-${itemId}-applicable-note"]`)?.value.trim() || "";
  const describedYesNote =
    survey.querySelector(`[name="risk-${itemId}-described-yes-note"]`)?.value.trim() || "";
  const assessorNote =
    survey.querySelector(`[name="risk-${itemId}-assessor"]`)?.value.trim() || "";
  const assessmentMethodNote =
    survey.querySelector(`[name="risk-${itemId}-assessment-method"]`)?.value.trim() || "";
  const evaluationMethodNote =
    survey.querySelector(`[name="risk-${itemId}-evaluation-method"]`)?.value.trim() || "";
  const describedNoNote =
    survey.querySelector(`[name="risk-${itemId}-described-no-note"]`)?.value.trim() || "";
  const causesYesNote =
    survey.querySelector(`[name="risk-${itemId}-causes-yes-note"]`)?.value.trim() || "";
  const causesNoNote =
    survey.querySelector(`[name="risk-${itemId}-causes-no-note"]`)?.value.trim() || "";
  const supplementalNotes = Object.fromEntries(
    supplementalConfigs.map((config) => [
      config.key,
      survey.querySelector(`[name="risk-${itemId}-${config.key}-note"]`)?.value.trim() || "",
    ])
  );

  let complete = false;
  let score = null;
  let issue = null;

  if (applicable === "no") {
    complete = true;
    score = 0;
  } else if (
    applicable === "yes" &&
    described === "yes" &&
    causes !== null &&
    supplementalConfigs.every((config) => supplementalAnswers[config.key] !== null)
  ) {
    complete = true;
    score = causes === "yes" ? 0 : 2;
    const issues = [];

    for (const config of supplementalConfigs) {
      if (supplementalAnswers[config.key] === "no") {
        issues.push({
          category: "1.1 Hoofd- en deelrisico's",
          title: itemLabel,
          answer: "no",
          severity: 2,
          weightedScore: 4,
          note: config.noNote,
          evidence:
            supplementalNotes[config.key] ||
            [describedYesNote, assessorNote, assessmentMethodNote, evaluationMethodNote]
              .filter(Boolean)
              .join(" | "),
        });
        score = Math.max(score, 1);
      }
    }

    if (causes === "no") {
      issues.push({
        category: "1.1 Hoofd- en deelrisico's",
        title: itemLabel,
        answer: "no",
        severity: 3,
        weightedScore: 6,
        note: "Het risico is wel beschreven, maar de achterliggende grondoorzaken zijn niet geïnventariseerd.",
        evidence: [describedYesNote, assessorNote, assessmentMethodNote, evaluationMethodNote, causesNoNote]
          .filter(Boolean)
          .join(" | "),
      });
    }

    issue = issues.length > 0 ? issues : null;
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
      evidence: describedNoNote,
    };
  }

  return {
    groupId,
    groupTitle,
    itemLabel,
    applicable,
    described,
    justified,
    causes,
    supplementalAnswers,
    applicabilityNote,
    describedYesNote,
    assessorNote,
    assessmentMethodNote,
    evaluationMethodNote,
    describedNoNote,
    causesYesNote,
    causesNoNote,
    supplementalNotes,
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
  const issues = scored
    .flatMap((item) => (Array.isArray(item.issue) ? item.issue : item.issue ? [item.issue] : []))
    .filter(Boolean);
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
  const rieNameText = rieName.value.trim()
    ? ` De naam of omschrijving van de RI&E is: ${rieName.value.trim()}.`
    : "";
  const scopeText = scopeDescription.value.trim()
    ? ` De beschreven reikwijdte van de RI&E is: ${scopeDescription.value.trim()}.`
    : "";
  const executionText = executionDescription.value.trim()
    ? ` De uitvoering van de RI&E is als volgt beschreven: ${executionDescription.value.trim()}.`
    : "";
  const rieDateText = rieDate.value ? ` De datum van de RI&E is ${rieDate.value}.` : "";
  const rieDocumentsText = rieDocuments.value.trim()
    ? ` De volgende documenten behoren tot de te toetsen RI&E: ${rieDocuments.value.trim()}.`
    : "";
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

  return `${intro}${critical}${inventoryText}${rieNameText}${scopeText}${executionText}${rieDateText}${rieDocumentsText}${brancheText}${owner}${dateText}${completeness}`;
}

function getPlainValue(value) {
  return typeof value === "string" ? value.trim() : value || "";
}

function getPlainOptionLabel(optionsList, value) {
  if (!value) {
    return "";
  }

  return optionsList.find((option) => option.value === value)?.label || value;
}

function buildRegularQuestionReportLines(sectionTitle, items) {
  const lines = [sectionTitle, ""];

  for (const question of items) {
    const answer = getAnswerValue(question.id);
    const note = getPlainValue(
      survey.querySelector(`[name="question-${question.id}-note"]`)?.value || ""
    );

    lines.push(getDisplayQuestionTitle(question));
    lines.push(`Antwoord: ${getPlainOptionLabel(getQuestionOptions(question), answer)}`);

    if (note) {
      lines.push(`Controleerbaar bewijs of toelichting: ${note}`);
    }

    lines.push("");
  }

  return lines;
}

function buildRiskInventoryReportLines() {
  const lines = ["Uitkomst vraag 1.1.1", ""];

  for (const group of riskCatalog) {
    const groupLines = [];

    for (const itemLabel of group.items) {
      const item = getRiskItemState(group.id, group.title, itemLabel);
      const supplementalConfigs = getSupplementalRequirementConfigs(group.id, itemLabel);

      const hasAnyData =
        item.applicable ||
        item.described ||
        item.justified ||
        item.causes ||
        item.applicabilityNote ||
        item.describedYesNote ||
        item.assessorNote ||
        item.assessmentMethodNote ||
        item.evaluationMethodNote ||
        item.describedNoNote ||
        item.causesYesNote ||
        item.causesNoNote ||
        Object.values(item.supplementalAnswers || {}).some(Boolean) ||
        Object.values(item.supplementalNotes || {}).some(Boolean);

      if (!hasAnyData) {
        continue;
      }

      groupLines.push(`${item.groupTitle} - ${item.itemLabel}`);

      if (item.applicable) {
        groupLines.push(`Van toepassing: ${getPlainOptionLabel(yesNoOptions, item.applicable)}`);
      }

      if (item.applicabilityNote) {
        groupLines.push(`Toelichting niet van toepassing: ${item.applicabilityNote}`);
      }

      if (item.described) {
        groupLines.push(
          `Is het risico beschreven in de RI&E?: ${getPlainOptionLabel(yesNoOptions, item.described)}`
        );
      }

      if (item.describedYesNote) {
        groupLines.push(`Waar is dit onderdeel terug te vinden in de RI&E?: ${item.describedYesNote}`);
      }

      if (item.assessorNote) {
        groupLines.push(`Wie heeft dit risico beoordeeld?: ${item.assessorNote}`);
      }

      if (item.assessmentMethodNote) {
        groupLines.push(
          `Welke methode is gebruikt om het risico te inventariseren?: ${item.assessmentMethodNote}`
        );
      }

      if (item.evaluationMethodNote) {
        groupLines.push(
          `Welke methode is gebruikt om het risico te evalueren?: ${item.evaluationMethodNote}`
        );
      }

      if (item.justified) {
        groupLines.push(
          `Kunt u verantwoorden waarom het risico niet beschreven is in de RI&E?: ${getPlainOptionLabel(
            yesNoOptions,
            item.justified
          )}`
        );
      }

      if (item.describedNoNote) {
        groupLines.push(`Reden waarom dit risico niet is opgenomen: ${item.describedNoNote}`);
      }

      if (item.causes) {
        groupLines.push(
          `Zijn de grondoorzaken van dit risico in de RI&E geïnventariseerd?: ${getPlainOptionLabel(
            yesNoOptions,
            item.causes
          )}`
        );
      }

      if (item.causesYesNote) {
        groupLines.push(`Waaruit blijkt dat de grondoorzaken zijn geïnventariseerd?: ${item.causesYesNote}`);
      }

      if (item.causesNoNote) {
        groupLines.push(`Waarom zijn de grondoorzaken niet geïnventariseerd?: ${item.causesNoNote}`);
      }

      for (const config of supplementalConfigs) {
        const answer = item.supplementalAnswers?.[config.key];
        const note = item.supplementalNotes?.[config.key];

        if (answer) {
          groupLines.push(`${config.prompt} ${getPlainOptionLabel(requirementsOptions, answer)}`);
        }

        if (note) {
          groupLines.push(`Toelichting: ${note}`);
        }
      }

      groupLines.push("");
    }

    if (groupLines.length > 0) {
      lines.push(...groupLines);
    }
  }

  lines.push("");
  return lines;
}

function buildReport(assessment) {
  const lines = [
    "Samenvatting",
    `Invulgraad: ${assessment.progress}%`,
    "",
    "Bedrijfsprofiel",
    `Bedrijfsnaam: ${getPlainValue(companyName.value)}`,
    `Contactpersoon: ${getPlainValue(contactName.value)}`,
    `Contactpersoon ondernemingsraad: ${getPlainValue(worksCouncilContact?.value || "")}`,
    `Arbodienst/ Bedrijfsarts: ${getPlainValue(occupationalService?.value || "")}`,
    `Branche: ${getPlainValue(industry.value)}`,
    `Arbo-certificaten: ${getPlainValue(arboCertificates?.value || "")}`,
    `Aantal medewerkers: ${getPlainValue(employees.value)}`,
    `Datum van invullen: ${getPlainValue(assessmentDate.value)}`,
    "",
    "Afbakening en documentgegevens van de RI&E",
    `Naam of omschrijving van de RI&E: ${getPlainValue(rieName.value)}`,
    `Reikwijdte van de RI&E: ${getPlainValue(scopeDescription.value)}`,
    `Uitvoering van de RI&E: ${getPlainValue(executionDescription.value)}`,
    `Datum van de RI&E: ${getPlainValue(rieDate.value)}`,
    `Documenten die behoren tot de te toetsen RI&E: ${getPlainValue(rieDocuments.value)}`,
    "",
    ...buildRiskInventoryReportLines(),
    ...buildRegularQuestionReportLines(
      "Uitkomsten vragen 1.1.2 t/m 1.4.1",
      getQuestionStatusItems()
    ),
    ...buildRegularQuestionReportLines("Uitkomsten plan van aanpak", getPlanStatusItems()),
  ];

  return lines.join("\n");
}

function buildReportPreviewHtml(reportText) {
  const headingLines = new Set([
    "Samenvatting",
    "Bedrijfsprofiel",
    "Afbakening en documentgegevens van de RI&E",
    "Uitkomst vraag 1.1.1",
    "Uitkomsten vragen 1.1.2 t/m 1.4.1",
    "Uitkomsten plan van aanpak",
  ]);

  return reportText
    .split("\n")
    .map((line) => {
      if (!line.trim()) {
        return "<p>&nbsp;</p>";
      }

      if (headingLines.has(line.trim())) {
        return `<p class="report-output-heading">${escapeHtml(line.trim())}</p>`;
      }

      const escapedLine = escapeHtml(line)
        .replace(/^([^:\n]+:)/, "<strong>$1</strong>")
        .replace(/^<strong>Antwoord:<\/strong>/, "<strong>Antwoord:</strong>");

      return `<p>${escapedLine}</p>`;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultiline(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function formatOptionalValue(value) {
  const normalized = typeof value === "string" ? value.trim() : value;
  if (!normalized) {
    return '<span class="report-muted">Niet ingevuld</span>';
  }

  return formatMultiline(normalized);
}

function getOptionLabel(optionsList, value) {
  if (!value) {
    return "Niet beantwoord";
  }

  return optionsList.find((option) => option.value === value)?.label || value;
}

function getGeneralFieldsReportHtml() {
  const profileRows = [
    ["Bedrijfsnaam", companyName.value],
    ["Contactpersoon", contactName.value],
    ["Contactpersoon ondernemingsraad", worksCouncilContact?.value || ""],
    ["Arbodienst/ Bedrijfsarts", occupationalService?.value || ""],
    ["Branche", industry.value],
    ["Arbo-certificaten", arboCertificates?.value || ""],
    ["Aantal medewerkers", employees.value],
    ["Datum van invullen", assessmentDate.value],
  ];

  const rieRows = [
    ["Naam of omschrijving van de RI&E", rieName.value],
    ["Reikwijdte van de RI&E", scopeDescription.value],
    ["Uitvoering van de RI&E", executionDescription.value],
    ["Datum van de RI&E", rieDate.value],
    ["Documenten die behoren tot de te toetsen RI&E", rieDocuments.value],
  ];

  const renderRows = (rows) =>
    rows
      .map(
        ([label, value]) => {
          if (label === "Documenten die behoren tot de te toetsen RI&E") {
            return `
              <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>${escapeHtml(
                label
              )}:</strong><br>${formatOptionalValue(value)}</p>
            `;
          }

          return `
            <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>${escapeHtml(
              label
            )}:</strong> ${formatOptionalValue(value)}</p>
          `;
        }
      )
      .join("");

  return `
    <section class="report-section">
      <h2 style="margin: 0 0 8px; font-size: 9pt;">Bedrijfsprofiel</h2>
      <div class="report-block">
        ${renderRows(profileRows)}
      </div>
    </section>
    <section class="report-section">
      <h2 style="margin: 0 0 8px; font-size: 9pt;">Afbakening en documentgegevens van de RI&E</h2>
      <div class="report-block">
        ${renderRows(rieRows)}
      </div>
    </section>
  `;
}

function getRegularQuestionReportSection(title, items) {
  const questionBlocks = items
    .map((question) => {
      const answer = getAnswerValue(question.id);
      const note = survey.querySelector(`[name="question-${question.id}-note"]`)?.value || "";

      return `
        <article class="report-question">
          <h3 style="margin: 0 0 6px; font-size: 9pt;">${escapeHtml(getDisplayQuestionTitle(question))}</h3>
          <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Antwoord:</strong> ${escapeHtml(
            getOptionLabel(getQuestionOptions(question), answer)
          )}</p>
          <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Controleerbaar bewijs of toelichting:</strong> ${formatOptionalValue(
            note
          )}</p>
        </article>
      `;
    })
    .join("");

  return `
    ${getWordPageBreakHtml()}
    <section class="report-section">
      <h2 style="margin: 0 0 8px; font-size: 9pt;">${escapeHtml(title)}</h2>
      ${questionBlocks}
    </section>
  `;
}

function getWordPageBreakHtml() {
  return '<br clear="all" style="mso-special-character: line-break; page-break-before: always;">';
}

function getShortSupplementalSummaryLabel(riskLabel, prompt) {
  const articleMatch = prompt.match(/(artikel\s+[0-9a-z.]+\s+Arbobesluit)/i);
  if (articleMatch) {
    return `${riskLabel} - ${articleMatch[1]}`;
  }

  const chapterMatch = prompt.match(/(hoofdstuk\s+\d+,\s*afdeling\s+\d+\s+van het Arbobesluit)/i);
  if (chapterMatch) {
    return `${riskLabel} - ${chapterMatch[1]}`;
  }

  return `${riskLabel} - ${prompt}`;
}

function getSummaryOutcomeReportHtml(assessment, options = {}) {
  const formatRiskLabel = options.formatRiskLabel || getShortRiskSummaryLabel;
  const formatSupplementalLabel =
    options.formatSupplementalLabel || ((riskLabel, prompt) => `${riskLabel} - ${prompt}`);
  const {
    applicable,
    describedApplicable,
    supplementedApplicable,
    notDescribedApplicable,
    notApplicable,
  } = collectApplicabilitySummaryData(assessment, {
    formatRiskLabel,
    formatSupplementalLabel,
  });

  const renderList = (items, emptyText) => {
    if (items.length === 0) {
      return `<li>${escapeHtml(emptyText)}</li>`;
    }

    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  };

  const groupedQuestions = [
    {
      title: "Uitkomst volledigheid",
      items: getQuestionStatusItems().filter((question) => question.category === "1.1 Volledigheid"),
    },
    {
      title: "Uitkomst actualiteit",
      items: getQuestionStatusItems().filter(
        (question) =>
          question.category === "1.2 Actualiteit" || question.category === "1.3 Actuele inzichten"
      ),
    },
    {
      title: "Uitkomst betrouwbaarheid",
      items: getQuestionStatusItems().filter((question) => question.category === "1.4 Betrouwbaarheid"),
    },
  ];

  const groupedQuestionHtml = groupedQuestions
    .map((group) => {
      const rows = group.items
        .map((question) => {
          const presentation = getStatusPresentation(getAnswerValue(question.id));
          return `
            <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;">
              <strong>${escapeHtml(getDisplayQuestionTitle(question))}:</strong>
              ${escapeHtml(presentation.label)}
            </p>
          `;
        })
        .join("");

      return `
        <div class="report-subsection">
          <h3 style="margin: 10px 0 6px; font-size: 9pt;">${escapeHtml(group.title)}</h3>
          ${rows}
        </div>
      `;
    })
    .join("");

  const planRows = getPlanStatusItems()
    .map((question) => {
      const presentation = getStatusPresentation(getAnswerValue(question.id));
      return `
        <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;">
          <strong>${escapeHtml(getDisplayQuestionTitle(question))}:</strong>
          ${escapeHtml(presentation.label)}
        </p>
      `;
    })
    .join("");

  return `
    ${getWordPageBreakHtml()}
    <section class="report-section">
      <h2 style="margin: 0 0 8px; font-size: 9pt;">Samenvatting uitkomst</h2>
      <div class="report-subsection">
        <h3 style="margin: 10px 0 6px; font-size: 9pt;">Uitkomst vraag 1.1.1</h3>
        <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Van toepassing</strong></p>
        <ul class="report-list">${renderList(
          applicable,
          "Nog geen onderdelen als van toepassing aangemerkt."
        )}</ul>
        <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Van toepassing en beschreven</strong></p>
        <ul class="report-list">${renderList(
          describedApplicable,
          "Nog geen onderdelen als van toepassing en beschreven aangemerkt."
        )}</ul>
        <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Van toepassing maar niet beschreven</strong></p>
        <ul class="report-list">${renderList(
          notDescribedApplicable,
          "Nog geen onderdelen als van toepassing maar niet beschreven aangemerkt."
        )}</ul>
        <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Niet van toepassing</strong></p>
        <ul class="report-list">${renderList(
          notApplicable,
          "Nog geen onderdelen als niet van toepassing aangemerkt."
        )}</ul>
        <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Nadere voorschriften met ja beantwoord</strong></p>
        <ul class="report-list">${renderList(
          supplementedApplicable,
          "Nog geen nadere voorschriften met ja beantwoord."
        )}</ul>
      </div>
      <div class="report-subsection">
        <h3 style="margin: 10px 0 6px; font-size: 9pt;">Uitkomsten vragen 1.1.2 t/m 1.4.1</h3>
        ${groupedQuestionHtml}
      </div>
      <div class="report-subsection">
        <h3 style="margin: 10px 0 6px; font-size: 9pt;">Uitkomsten plan van aanpak</h3>
        ${planRows}
      </div>
    </section>
  `;
}

function getRiskInventoryReportHtml() {
  const groupsHtml = riskCatalog
    .map((group, index) => {
      const itemHtml = group.items
        .map((itemLabel) => {
          const item = getRiskItemState(group.id, group.title, itemLabel);
          const supplementalConfigs = getSupplementalRequirementConfigs(group.id, itemLabel);
          const supplementalHtml = supplementalConfigs
            .map((config) => {
              const answer = item.supplementalAnswers?.[config.key];
              const note = item.supplementalNotes?.[config.key] || "";

              return `
                <li style="margin-top: 6px; line-height: 1.3; font-size: 9pt;">
                  <strong>${escapeHtml(config.prompt)}</strong><br>
                  Antwoord: ${escapeHtml(getOptionLabel(requirementsOptions, answer))}<br>
                  Toelichting: ${formatOptionalValue(note)}
                </li>
              `;
            })
            .join("");

          return `
            <article class="report-risk-item">
              <h4 style="margin: 0 0 6px; font-size: 9pt;">${escapeHtml(item.groupTitle)} - ${escapeHtml(item.itemLabel)}</h4>
              <div class="report-block">
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Van toepassing:</strong> ${escapeHtml(getOptionLabel(yesNoOptions, item.applicable))}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Toelichting niet van toepassing:</strong> ${formatOptionalValue(item.applicabilityNote)}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Is het risico beschreven in de RI&E?:</strong> ${escapeHtml(getOptionLabel(yesNoOptions, item.described))}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Waar is dit onderdeel terug te vinden in de RI&E?:</strong> ${formatOptionalValue(item.describedYesNote)}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Wie heeft dit risico beoordeeld?:</strong> ${formatOptionalValue(item.assessorNote)}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Welke methode is gebruikt om het risico te inventariseren?:</strong> ${formatOptionalValue(item.assessmentMethodNote)}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Welke methode is gebruikt om het risico te evalueren?:</strong> ${formatOptionalValue(item.evaluationMethodNote)}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Kunt u verantwoorden waarom het risico niet beschreven is in de RI&E?:</strong> ${escapeHtml(getOptionLabel(yesNoOptions, item.justified))}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Reden waarom dit risico niet is opgenomen:</strong> ${formatOptionalValue(item.describedNoNote)}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Zijn de grondoorzaken van dit risico in de RI&E geïnventariseerd?:</strong> ${escapeHtml(getOptionLabel(yesNoOptions, item.causes))}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Waaruit blijkt dat de grondoorzaken zijn geïnventariseerd?:</strong> ${formatOptionalValue(item.causesYesNote)}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Waarom zijn de grondoorzaken niet geïnventariseerd?:</strong> ${formatOptionalValue(item.causesNoNote)}</p>
              </div>
              ${
                supplementalHtml
                  ? `
                    <div class="report-subsection">
                      <strong style="font-size: 9pt;">Nadere voorschriften</strong>
                      <ul class="report-list">
                        ${supplementalHtml}
                      </ul>
                    </div>
                  `
                  : ""
              }
            </article>
          `;
        })
        .join("");

      return `
        ${index > 0 ? getWordPageBreakHtml() : ""}
        <section class="report-section report-risk-group">
          <h2 style="margin: 0 0 8px; font-size: 9pt;">${escapeHtml(group.title)}</h2>
          ${itemHtml}
        </section>
      `;
    })
    .join("");

  return `
    ${getWordPageBreakHtml()}
    <section class="report-section">
      <h2 style="margin: 0 0 8px; font-size: 9pt;">Uitwerking vraag 1.1.1</h2>
      ${groupsHtml}
    </section>
  `;
}

function buildPrintableReportHtml() {
  const assessment = computeAssessment();
  const generatedAt = new Intl.DateTimeFormat("nl-NL", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Amsterdam",
  }).format(new Date());

  const completenessItems = getQuestionStatusItems().filter((question) => question.category === "1.1 Volledigheid");
  const actualityItems = getQuestionStatusItems().filter(
    (question) =>
      question.category === "1.2 Actualiteit" || question.category === "1.3 Actuele inzichten"
  );
  const reliabilityItems = getQuestionStatusItems().filter((question) => question.category === "1.4 Betrouwbaarheid");
  const planItems = getPlanStatusItems();

  return `
    <!doctype html>
    <html lang="nl">
      <head>
        <meta charset="utf-8">
        <title>RI&E pre-toets rapport</title>
        <style>
          :root {
            color-scheme: light;
          }

          @page {
            margin: 2cm 1.6cm 1.8cm 1.6cm;
          }

          body {
            margin: 0;
            font-family: Verdana, Arial, sans-serif;
            color: #172033;
            background: #ffffff;
            font-size: 9pt;
            line-height: 1.3;
          }

          .report-page {
            max-width: none;
            margin: 0 auto;
            padding: 0 0 24px;
            background: #ffffff;
          }

          .report-header {
            padding-bottom: 10px;
            border-bottom: 1px solid #c8ced6;
          }

          .report-header h1 {
            margin: 0 0 6px;
            font-size: 9pt;
          }

          .report-meta {
            margin: 0;
            color: #5b6472;
            line-height: 1.35;
            font-size: 9pt;
          }

          .report-section {
            margin-top: 16px;
          }

          .report-section h2 {
            margin: 0 0 8px;
            font-size: 9pt;
          }

          .report-subsection h3 {
            margin: 10px 0 6px;
            font-size: 9pt;
          }

          .report-question,
          .report-risk-item {
            margin-top: 8px;
            padding: 6px 0 0;
            border: 0;
            border-top: 1px solid #e5e7eb;
            border-radius: 0;
            background: transparent;
            break-inside: avoid;
          }

          .report-question h3,
          .report-risk-item h4 {
            margin: 0 0 6px;
            font-size: 9pt;
          }

          .report-line,
          .report-subsection {
            margin: 2px 0 0;
            line-height: 1.3;
          }

          .report-block {
            display: block;
          }

          .report-list {
            margin: 6px 0 0;
            padding-left: 16px;
          }

          .report-list li {
            margin-top: 6px;
            line-height: 1.3;
          }

          .word-page-break {
            display: block;
            height: 0;
            margin: 0;
            break-before: page;
            page-break-before: always;
            mso-special-character: line-break;
          }

          .report-muted {
            color: #6b7280;
            font-style: italic;
          }

          @media print {
            body {
              background: #fff;
            }

            .report-page {
              max-width: none;
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <main class="report-page">
          <header class="report-header">
            <h1 style="margin: 0 0 6px; font-size: 9pt;">RI&E pre-toets rapport</h1>
            <p class="report-meta" style="margin: 0; color: #5b6472; line-height: 1.35; font-size: 9pt;">Gegenereerd op ${escapeHtml(
              generatedAt
            )}</p>
          </header>

          ${getGeneralFieldsReportHtml()}
          ${getSummaryOutcomeReportHtml(assessment)}
          ${getRiskInventoryReportHtml()}
          ${getRegularQuestionReportSection("Uitkomsten vragen 1.1.2 t/m 1.4.1", [
            ...completenessItems,
            ...actualityItems,
            ...reliabilityItems,
          ])}
          ${getRegularQuestionReportSection("Uitkomsten plan van aanpak", planItems)}
        </main>
      </body>
    </html>
  `;
}

function buildSummaryWordHtml() {
  const assessment = computeAssessment();
  const generatedAt = new Intl.DateTimeFormat("nl-NL", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Amsterdam",
  }).format(new Date());
  const emptyValue = '<span style="color: #6b7280; font-style: italic;">Niet ingevuld</span>';
  const formatFieldValue = (value) => {
    const normalized = getPlainValue(value);
    return normalized ? escapeHtml(normalized) : emptyValue;
  };

  const renderField = (label, value, indent = 0) => `
    <p style="margin: 0 0 6px ${indent}px; font: 9pt Verdana; color: #172033;"><b>${escapeHtml(
      label
    )}:</b> ${formatFieldValue(value)}</p>
  `;

  const renderListParagraphs = (items, emptyText, indentCm = 0) => {
    const values = items.length > 0 ? items : [emptyText];
    return values
      .map(
        (item) =>
          `<p style="margin: 0 0 6px 0; padding-left: ${indentCm}cm; text-indent: 0; font: 9pt Verdana; color: #172033; line-height: 1.0;">•\u00a0${escapeHtml(
            item
          )}</p>`
      )
      .join("");
  };

  const spacer = (fontSize = 11, minHeight = 13) =>
    `<p style="margin: 0; font: ${fontSize}pt Verdana; color: #172033; min-height: ${minHeight}px;"><br></p>`;

  const groupedQuestions = [
    {
      title: "Uitkomst volledigheid",
      items: getQuestionStatusItems().filter((question) => question.category === "1.1 Volledigheid"),
    },
    {
      title: "Uitkomst actualiteit",
      items: getQuestionStatusItems().filter(
        (question) =>
          question.category === "1.2 Actualiteit" || question.category === "1.3 Actuele inzichten"
      ),
    },
    {
      title: "Uitkomst betrouwbaarheid",
      items: getQuestionStatusItems().filter((question) => question.category === "1.4 Betrouwbaarheid"),
    },
  ];

  const renderQuestionGroup = (title, items, breakBefore = false) => {
    const rows = items
      .map((question) => {
        const presentation = getStatusPresentation(getAnswerValue(question.id));
        return `
          <p style="margin: 0 0 0 0; font: 9pt Verdana; color: #172033;"><b>${escapeHtml(
            getDisplayQuestionTitle(question)
          )}</b></p>
          <p style="margin: 3pt 0 4.5pt 0; font: 9pt Verdana; color: #172033; line-height: 1.0;">${escapeHtml(
            presentation.label
          )}</p>
        `;
      })
      .join("");

    return `
      ${breakBefore ? getWordPageBreakHtml() : ""}
      <p style="margin: 0; font: 12pt Verdana; color: #172033;"><u><b>${escapeHtml(
        title
      )}</b></u></p>
      ${spacer(12, 15)}
      ${rows}
      ${spacer(12, 15)}
    `;
  };

  const planRows = getPlanStatusItems()
    .map((question) => {
      const presentation = getStatusPresentation(getAnswerValue(question.id));
      return `
        <p style="margin: 0 0 0 0; font: 9pt Verdana; color: #172033;"><b>${escapeHtml(
          getDisplayQuestionTitle(question)
        )}</b></p>
        <p style="margin: 3pt 0 4.5pt 0; font: 9pt Verdana; color: #172033; line-height: 1.0;">${escapeHtml(
          presentation.label
        )}</p>
      `;
    })
    .join("");

  return `
    <!doctype html>
    <html lang="nl">
      <head>
        <meta charset="utf-8">
        <title>RI&E pre-toets samenvatting</title>
        <style>
          @page {
            margin: 2cm 1.6cm 1.8cm 1.6cm;
          }

          body {
            margin: 0;
            font-family: Verdana, Arial, sans-serif;
            color: #172033;
            background: #ffffff;
            font-size: 9pt;
            line-height: 1.3;
          }

          .report-page {
            max-width: none;
            margin: 0 auto;
            padding: 0 0 24px;
            background: #ffffff;
          }

          .report-header {
            padding-bottom: 10px;
            border-bottom: 1px solid #c8ced6;
          }

          .report-section {
            margin-top: 16px;
          }

          .report-block {
            display: block;
          }

          .report-list {
            margin: 6px 0 0;
            padding-left: 16px;
          }

          .report-list li {
            margin-top: 6px;
            line-height: 1.3;
          }

          .report-muted {
            color: #6b7280;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <main class="report-page">
          <header class="report-header">
            <h1 style="margin: 0 0 6px; font-size: 16pt;">RI&E pre-toets samenvatting</h1>
            <p style="margin: 0; color: #5b6472; line-height: 1.35; font-size: 9pt;">Gegenereerd op ${escapeHtml(
              generatedAt
            )}</p>
          </header>
          ${spacer(11, 13)}
          <p style="margin: 0; font: 14pt Verdana; color: #172033;"><b>Bedrijfsprofiel</b></p>
          ${spacer(11, 13)}
          ${renderField("Bedrijfsnaam", companyName.value)}
          ${renderField("Contactpersoon", contactName.value)}
          ${renderField("Contactpersoon ondernemingsraad", worksCouncilContact?.value || "")}
          ${renderField("Arbodienst/ Bedrijfsarts", occupationalService?.value || "")}
          ${renderField("Branche", industry.value)}
          ${renderField("Arbo-certificaten", arboCertificates?.value || "")}
          ${renderField("Aantal medewerkers", employees.value)}
          ${renderField("Datum van invullen", assessmentDate.value)}
          ${spacer(11, 13)}
          <p style="margin: 0; font: 14pt Verdana; color: #172033;"><b>Afbakening en documentgegevens van de RI&amp;E</b></p>
          ${spacer(11, 13)}
          ${renderField("Naam of omschrijving van de RI&E", rieName.value)}
          ${renderField("Reikwijdte van de RI&E", scopeDescription.value)}
          ${renderField("Uitvoering van de RI&E", executionDescription.value)}
          ${renderField("Datum van de RI&E", rieDate.value)}
          ${renderField("Documenten die behoren tot de te toetsen RI&E", rieDocuments.value)}
          ${getSummaryOutcomeReportHtml(assessment, {
            formatRiskLabel: getShortRiskSummaryLabel,
            formatSupplementalLabel: getShortSupplementalSummaryLabel,
          })
            .replace('<section class="report-section">', `${getWordPageBreakHtml()}<section class="report-section">`)
            .replace('<h2 style="margin: 0 0 8px; font-size: 9pt;">Samenvatting uitkomst</h2>', '<p style="margin: 0; font: 14pt Verdana; color: #172033;"><b>SAMENVATTING UITKOMST</b></p>')
            .replace('<h3 style="margin: 10px 0 6px; font-size: 9pt;">Uitkomst vraag 1.1.1</h3>', `${spacer(10, 12)}<p style="margin: 0; font: 14pt Verdana; color: #172033;"><b>Uitkomst vraag 1.1.1</b></p>${spacer(9, 11)}`)
            .replace('<h3 style="margin: 10px 0 6px; font-size: 9pt;">Uitkomsten vragen 1.1.2 t/m 1.4.1</h3>', `${spacer(9, 11)}${spacer(11, 13)}${getWordPageBreakHtml()}<p style="margin: 0; font: 14pt Verdana; color: #172033;"><b>Uitkomsten vragen 1.1.2 t/m 1.4.1</b></p>${spacer(9, 11)}`)
            .replace('<h3 style="margin: 10px 0 6px; font-size: 9pt;">Uitkomsten plan van aanpak</h3>', '<p style="margin: 0; font: 12pt Verdana; color: #172033;"><u><b>Uitkomsten plan van aanpak</b></u></p>')
          }
        </main>
      </body>
    </html>
  `;
}

function getReportFileBaseName() {
  const company = getPlainValue(companyName.value) || "rie-pretoets";
  const date = getPlainValue(assessmentDate.value) || new Date().toISOString().slice(0, 10);
  return `${company}-${date}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function sanitizePdfText(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, " ")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapPdfLine(line, maxLength = 92) {
  if (!line.trim()) {
    return [""];
  }

  const words = line.split(/\s+/);
  const wrapped = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxLength) {
      current = candidate;
      continue;
    }

    if (current) {
      wrapped.push(current);
    }

    current = word;
  }

  if (current) {
    wrapped.push(current);
  }

  return wrapped;
}

function buildPdfBlobFromText(reportText) {
  const pageHeight = 842;
  const topMargin = 50;
  const bottomMargin = 50;
  const lineHeight = 16;
  const maxLinesPerPage = Math.floor((pageHeight - topMargin - bottomMargin) / lineHeight);
  const lines = reportText
    .split("\n")
    .flatMap((line) => wrapPdfLine(line))
    .map((line) => sanitizePdfText(line));

  const pages = [];
  for (let index = 0; index < lines.length; index += maxLinesPerPage) {
    pages.push(lines.slice(index, index + maxLinesPerPage));
  }

  if (pages.length === 0) {
    pages.push([""]);
  }

  const objects = [];
  const totalPageObjects = pages.length * 2;
  const fontObjectNumber = 3 + totalPageObjects;
  const pageObjectNumbers = [];

  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";

  for (let pageIndex = 0; pageIndex < pages.length; pageIndex += 1) {
    const pageObjectNumber = 3 + pageIndex * 2;
    const contentObjectNumber = pageObjectNumber + 1;
    pageObjectNumbers.push(pageObjectNumber);

    const textCommands = pages[pageIndex]
      .map((line, lineIndex) => {
        if (lineIndex === 0) {
          return `BT\n/F1 11 Tf\n14 TL\n50 ${pageHeight - topMargin} Td\n(${line}) Tj`;
        }
        return `T*\n(${line}) Tj`;
      })
      .join("\n");

    const stream = `${textCommands}\nET`;
    objects[contentObjectNumber] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
    objects[pageObjectNumber] =
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontObjectNumber} 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`;
  }

  objects[2] = `<< /Type /Pages /Kids [${pageObjectNumbers.map((num) => `${num} 0 R`).join(" ")}] /Count ${pages.length} >>`;
  objects[fontObjectNumber] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (let objectNumber = 1; objectNumber < objects.length; objectNumber += 1) {
    if (!objects[objectNumber]) {
      continue;
    }

    offsets[objectNumber] = pdf.length;
    pdf += `${objectNumber} 0 obj\n${objects[objectNumber]}\nendobj\n`;
  }

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length}\n`;
  pdf += "0000000000 65535 f \n";

  for (let objectNumber = 1; objectNumber < objects.length; objectNumber += 1) {
    const offset = offsets[objectNumber] || 0;
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

function generatePdfReport() {
  const reportText = reportOutput?.dataset.rawText || "";
  const blob = buildPdfBlobFromText(reportText);
  downloadBlob(blob, `${getReportFileBaseName()}.pdf`);
}

function generateWordReport() {
  const html = buildPrintableReportHtml();
  const blob = new Blob([html], {
    type: "application/msword;charset=utf-8",
  });
  downloadBlob(blob, `${getReportFileBaseName()}.doc`);
}

function generateSummaryWordReport() {
  const html = buildSummaryWordHtml();
  const blob = new Blob([html], {
    type: "application/msword;charset=utf-8",
  });
  downloadBlob(blob, `${getReportFileBaseName()}-samenvatting.doc`);
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
    const causes = getAnswerValue(`risk-${itemId}-causes`);
    const applicabilityBlock = item.querySelector('[data-field="applicable"]');
    const describedBlock = item.querySelector('[data-field="described"]');
    const whyNotBlock = item.querySelector('[data-field="justified"]');
    const causesBlock = item.querySelector('[data-field="causes"]');

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

    const allEvidenceFields = item.querySelectorAll(".risk-evidence");
    for (const evidenceField of allEvidenceFields) {
      evidenceField.hidden = true;
    }

    if (applicable === "no") {
      const field = applicabilityBlock?.querySelector(".risk-evidence");
      if (field) {
        field.hidden = false;
      }
      continue;
    }

    if (applicable === "yes" && described === "yes") {
      const describedFields = describedBlock?.querySelectorAll(".risk-evidence");
      for (const field of describedFields || []) {
        field.hidden = false;
      }
    } else if (applicable === "yes" && described === "no") {
      const whyNotField = whyNotBlock?.querySelector(".risk-evidence");
      const justified = getAnswerValue(`risk-${itemId}-justified`);
      if (whyNotField && justified === "yes") {
        whyNotField.hidden = false;
      }
    }

    if (applicable === "yes" && described === "yes" && causesBlock) {
      const causesFields = causesBlock.querySelectorAll(".risk-evidence");

      if (causes === "yes" && causesFields[0]) {
        causesFields[0].hidden = false;
      }

      if (causes === "no" && causesFields[1]) {
        causesFields[1].hidden = false;
      }
    }

    const plainItemLabel = item.dataset.itemLabel || "";
    const groupId = item.dataset.groupId || "";

    for (const config of getSupplementalRequirementConfigs(groupId, plainItemLabel)) {
      const block = item.querySelector(`[data-field="${config.key}"]`);
      const value = getAnswerValue(`risk-${itemId}-${config.key}`);
      const field = block?.querySelector(".risk-evidence");
      const note = field?.querySelector(".risk-note");

      if (field) {
        field.hidden = value !== "yes" && value !== "no";
      }

      if (note) {
        if (value === "yes") {
          note.placeholder =
            "Omschrijf hier op welke wijze invulling is gegeven aan dit nadere voorschrift en waar dit uit blijkt.";
        }

        if (value === "no") {
          note.placeholder =
            "Omschrijf hier waarom geen invulling is gegeven aan dit nadere voorschrift.";
        }
      }
    }
  }
}

function updateQuestionEvidenceVisibility() {
  for (const question of questions) {
    if (!requiresEvidenceField(question) || question.type === "risk-inventory") {
      continue;
    }

    const evidenceField = survey.querySelector(`[name="question-${question.id}-note"]`)?.closest(".risk-evidence");
    if (!evidenceField) {
      continue;
    }

    const selectedValue = getAnswerValue(question.id);
    evidenceField.hidden = !shouldShowQuestionEvidence(question, selectedValue);
    const evidenceConfig = getQuestionEvidenceConfig(question, selectedValue);
    const evidenceLabel = evidenceField.querySelector(".risk-evidence-label");
    const evidenceNote = evidenceField.querySelector(".risk-note");

    if (evidenceLabel) {
      evidenceLabel.textContent = evidenceConfig.label;
    }

    if (evidenceNote) {
      evidenceNote.placeholder =
        evidenceConfig.placeholder || evidenceNote.dataset.defaultPlaceholder || "";
    }
  }
}

function renderAssessment() {
  updateRiskInventoryVisibility();
  updateQuestionEvidenceVisibility();

  const assessment = computeAssessment();
  const risk = describeRisk(assessment.readiness, assessment.criticalItems);

  if (scoreValue) {
    scoreValue.textContent = `${assessment.readiness}%`;
  }

  if (progressValue) {
    progressValue.textContent = `${assessment.progress}%`;
  }

  if (riskLevel) {
    riskLevel.textContent = risk.label;
  }

  if (criticalCount) {
    criticalCount.textContent = String(assessment.criticalItems.length);
  }

  if (statusBadge) {
    const badgeText =
      assessment.progress === 0
        ? "Vul verder in"
        : assessment.progress === 100
          ? "Alle vragen zijn beantwoord"
          : risk.badgeText;
    const badgeClass = assessment.progress === 100 ? "badge-good" : risk.badgeClass;

    statusBadge.textContent = badgeText;
    statusBadge.className = `badge ${badgeClass}`;
  }

  if (summaryText) {
    summaryText.textContent = buildSummary(assessment);
  }

  if (reportOutput) {
    const reportText = buildReport(assessment);
    reportOutput.dataset.rawText = reportText;
    reportOutput.innerHTML = buildReportPreviewHtml(reportText);
  }

  if (scoreRing) {
    updateScoreRing(assessment.readiness);
  }

  renderQuestionStatusMatrix();
  renderPlanStatusMatrix();
  renderApplicabilityLists(assessment);

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

function getQuestionStatusItems() {
  return questions.filter((question) => {
    if (question.type === "risk-inventory") {
      return false;
    }

    if (question.category === "1.1 Volledigheid") {
      return question.id !== "1-1-1";
    }

    return (
      question.category === "1.2 Actualiteit" ||
      question.category === "1.3 Actuele inzichten" ||
      question.category === "1.4 Betrouwbaarheid"
    );
  });
}

function getPlanStatusItems() {
  return questions.filter(
    (question) => question.type !== "risk-inventory" && question.category === "2. Plan van aanpak"
  );
}

function getStatusPresentation(answer) {
  if (answer === "yes") {
    return { label: "Ja", className: "status-chip status-chip-yes" };
  }

  if (answer === "partial") {
    return { label: "Deels", className: "status-chip status-chip-partial" };
  }

  if (answer === "no") {
    return { label: "Nee", className: "status-chip status-chip-no" };
  }

  if (answer === "na") {
    return { label: "Niet van toepassing", className: "status-chip status-chip-na" };
  }

  return { label: "Nog niet beantwoord", className: "status-chip status-chip-empty" };
}

function renderQuestionStatusMatrix() {
  if (!questionStatusMatrix) {
    return;
  }

  questionStatusMatrix.innerHTML = "";
  const groupedQuestions = [
    {
      title: "Uitkomst volledigheid",
      items: getQuestionStatusItems().filter((question) => question.category === "1.1 Volledigheid"),
    },
    {
      title: "Uitkomst actualiteit",
      items: getQuestionStatusItems().filter(
        (question) =>
          question.category === "1.2 Actualiteit" || question.category === "1.3 Actuele inzichten"
      ),
    },
    {
      title: "Uitkomst betrouwbaarheid",
      items: getQuestionStatusItems().filter((question) => question.category === "1.4 Betrouwbaarheid"),
    },
  ];

  for (const group of groupedQuestions) {
    if (group.items.length === 0) {
      continue;
    }

    const section = document.createElement("section");
    section.className = "status-matrix-group";

    const heading = document.createElement("h4");
    heading.className = "status-matrix-group-title";
    heading.textContent = group.title;
    section.append(heading);

    for (const question of group.items) {
      const row = document.createElement("article");
      row.className = "status-matrix-row";

      const title = document.createElement("p");
      title.className = "status-matrix-question";
      title.textContent = getDisplayQuestionTitle(question);

      const chip = document.createElement("span");
      const presentation = getStatusPresentation(getAnswerValue(question.id));
      chip.className = presentation.className;
      chip.textContent = presentation.label;

      row.append(title, chip);
      section.append(row);
    }

    questionStatusMatrix.append(section);
  }
}

function renderPlanStatusMatrix() {
  if (!planStatusMatrix) {
    return;
  }

  planStatusMatrix.innerHTML = "";
  const section = document.createElement("section");
  section.className = "status-matrix-group";

  const heading = document.createElement("h4");
  heading.className = "status-matrix-group-title";
  heading.textContent = "Uitkomst plan van aanpak";
  section.append(heading);

  for (const question of getPlanStatusItems()) {
    const row = document.createElement("article");
    row.className = "status-matrix-row";

    const title = document.createElement("p");
    title.className = "status-matrix-question";
    title.textContent = getDisplayQuestionTitle(question);

    const chip = document.createElement("span");
    const presentation = getStatusPresentation(getAnswerValue(question.id));
    chip.className = presentation.className;
    chip.textContent = presentation.label;

    row.append(title, chip);
    section.append(row);
  }

  planStatusMatrix.append(section);
}

function getShortRiskSummaryLabel(item) {
  const groupMatch = item.groupTitle.match(/^(\d+)\.\s*(.*)$/);
  const groupNumber = groupMatch?.[1] || "";
  const groupPrefix = groupMatch?.[2]?.trim() || item.groupTitle.trim();
  const itemLabel = item.itemLabel.trim();
  const groupConfig = riskCatalog.find((group) => group.id === item.groupId);
  const itemIndex = groupConfig?.items.findIndex((label) => label === item.itemLabel) ?? -1;
  const itemLetter = itemIndex >= 0 ? String.fromCharCode(97 + itemIndex) : "";
  const withNumbering = (shortLabel) =>
    itemLetter
      ? `${groupNumber}. ${groupPrefix} - ${itemLetter}. ${shortLabel}`
      : `${groupNumber}. ${groupPrefix}`;

  const shortItemMap = new Map([
    [
      "Gezondheidsrisico's, zoals carcinogene, mutagene, reprotoxische en sensibiliserende stoffen en procesemissies",
      "Gezondheidsrisico's",
    ],
    [
      "Veiligheidsrisico's, zoals brand, explosie en zware ongevallen bij opslag of gebruik",
      "Veiligheidsrisico's",
    ],
    [
      "Micro-organismen, zoals bacteriën, schimmels, virussen, parasieten, infectieuze agentia, toxinen en allergenen",
      "",
    ],
    [
      "Klimaat, zoals hoge en lage temperaturen, luchtverversing, luchtvochtigheid en tocht",
      "Klimaat",
    ],
    [
      "Straling, zoals niet-ioniserende straling, uv-straling en kunstmatige optische straling",
      "Straling",
    ],
    [
      "Arbeidsmiddelen: geschiktheid, beschikbaarheid, bevoegd gebruik, keuringen en onderhoud",
      "Arbeidsmiddelen",
    ],
    [
      "Inrichting arbeidsplaatsen, zoals werkruimten, orde en netheid, beveiligingen, signalering, bewegingsruimte, werken op hoogte en noodvoorzieningen",
      "Inrichting arbeidsplaatsen",
    ],
    [
      "Persoonlijke beschermingsmiddelen: noodzaak, geschiktheid, keuringen en onderhoud",
      "Arbeidsmiddelen en arbeidsplaatsen - Persoonlijke beschermingsmiddelen",
    ],
    [
      "Fysieke onderbelasting, zoals weinig beweging en lang zitten of staan",
      "Fysieke belasting - Fysieke onderbelasting",
    ],
    [
      "Fysieke overbelasting, zoals tillen, dragen, duwen, trekken, repeterende bewegingen en ongunstige houdingen",
      "Fysieke belasting - Fysieke overbelasting",
    ],
    [
      "Werknemers met een beperking of gedeeltelijke arbeidsongeschiktheid",
      "Bijzondere categorieën Werknemers met een beperking",
    ],
  ]);

  if (groupPrefix === "Bijzondere categorieën werknemers die mogelijk extra risico lopen") {
    return withNumbering(`Bijzondere categorieën ${itemLabel}`);
  }

  if (shortItemMap.has(itemLabel)) {
    const shortLabel = shortItemMap.get(itemLabel);
    if (
      shortLabel &&
      shortLabel.startsWith(`${groupPrefix} - `)
    ) {
      return itemLetter
        ? `${groupNumber}. ${shortLabel.replace(`${groupPrefix} - `, `${groupPrefix} - ${itemLetter}. `)}`
        : shortLabel;
    }
    return shortLabel ? withNumbering(shortLabel) : `${groupNumber}. ${groupPrefix}`;
  }

  return withNumbering(itemLabel);
}

function collectApplicabilitySummaryData(assessment, options = {}) {
  const applicable = [];
  const describedApplicable = [];
  const supplementedApplicable = [];
  const notDescribedApplicable = [];
  const notApplicable = [];
  const formatRiskLabel = options.formatRiskLabel || ((item) => `${item.groupTitle} - ${item.itemLabel}`);
  const formatSupplementalLabel =
    options.formatSupplementalLabel || ((riskLabel, prompt) => `${riskLabel} - ${prompt}`);

  const inventoryItems = riskCatalog.flatMap((group) =>
    group.items.map((itemLabel) => getRiskItemState(group.id, group.title, itemLabel))
  );

  for (const item of inventoryItems) {
    const label = formatRiskLabel(item);
    if (item.applicable === "yes") {
      applicable.push(label);
      if (item.described === "yes") {
        describedApplicable.push(label);
        const supplementalEntries = Object.entries(item.supplementalAnswers || {});
        for (const [key, value] of supplementalEntries) {
          if (value === "yes") {
            const config = getSupplementalRequirementConfigs(item.groupId, item.itemLabel).find(
              (entry) => entry.key === key
            );

            if (config) {
              supplementedApplicable.push(formatSupplementalLabel(label, config.prompt, item));
            }
          }
        }
      }
      if (item.described === "no") {
        notDescribedApplicable.push(label);
      }
    }
    if (item.applicable === "no") {
      notApplicable.push(label);
    }
  }

  return {
    applicable,
    describedApplicable,
    supplementedApplicable,
    notDescribedApplicable,
    notApplicable,
  };
}

function renderApplicabilityLists(assessment) {
  if (
    !applicableItems ||
    !describedApplicableItems ||
    !supplementedApplicableItems ||
    !notDescribedApplicableItems ||
    !notApplicableItems
  ) {
    return;
  }

  const {
    applicable,
    describedApplicable,
    supplementedApplicable,
    notDescribedApplicable,
    notApplicable,
  } = collectApplicabilitySummaryData(assessment);

  applicableItems.innerHTML = "";
  describedApplicableItems.innerHTML = "";
  supplementedApplicableItems.innerHTML = "";
  notDescribedApplicableItems.innerHTML = "";
  notApplicableItems.innerHTML = "";

  const renderList = (target, items, emptyText) => {
    if (items.length === 0) {
      const entry = document.createElement("li");
      entry.textContent = emptyText;
      target.append(entry);
      return;
    }

    for (const item of items) {
      const entry = document.createElement("li");
      entry.textContent = item;
      target.append(entry);
    }
  };

  renderList(applicableItems, applicable, "Nog geen onderdelen als van toepassing aangemerkt.");
  renderList(
    describedApplicableItems,
    describedApplicable,
    "Nog geen onderdelen als van toepassing en beschreven aangemerkt."
  );
  renderList(
    supplementedApplicableItems,
    supplementedApplicable,
    "Nog geen nadere voorschriften of artikelen uit het Arbobesluit met ja beantwoord."
  );
  renderList(
    notDescribedApplicableItems,
    notDescribedApplicable,
    "Nog geen onderdelen als van toepassing maar niet beschreven aangemerkt."
  );
  renderList(
    notApplicableItems,
    notApplicable,
    "Nog geen onderdelen als niet van toepassing aangemerkt."
  );
}

async function copyReportToClipboard() {
  try {
    await navigator.clipboard.writeText(reportOutput?.dataset.rawText || "");
    copyReport.textContent = "Gekopieerd";
  } catch (error) {
    copyReport.textContent = "Kopieren mislukt";
  }

  window.setTimeout(() => {
    copyReport.textContent = "Kopieer";
  }, 1800);
}

function getExpandableSections() {
  return Array.from(document.querySelectorAll("details"));
}

function updateToggleAllButtonLabel() {
  if (!toggleAllSections) {
    return;
  }

  const sections = getExpandableSections();
  const allOpen = sections.length > 0 && sections.every((section) => section.open);
  toggleAllSections.textContent = allOpen ? "Klap alles dicht" : "Klap alles open";
}

function toggleAllExpandableSections() {
  const sections = getExpandableSections();
  if (sections.length === 0) {
    return;
  }

  const allOpen = sections.every((section) => section.open);
  for (const section of sections) {
    section.open = !allOpen;
  }

  updateToggleAllButtonLabel();
}

renderQuestions();
restoreDraftFromLocalStorage();
renderAssessment();
updateToggleAllButtonLabel();

survey.addEventListener("change", () => {
  renderAssessment();
  saveDraftToLocalStorage();
});
survey.addEventListener("input", () => {
  renderAssessment();
  saveDraftToLocalStorage();
});
copyReport.addEventListener("click", copyReportToClipboard);
generatePdf?.addEventListener("click", generatePdfReport);
generateWord?.addEventListener("click", generateWordReport);
generateSummaryWord?.addEventListener("click", generateSummaryWordReport);
resetApp?.addEventListener("click", handleResetClick);
cancelReset?.addEventListener("click", (event) => {
  event.preventDefault();
  closeResetModal();
});
confirmReset?.addEventListener("click", (event) => {
  event.preventDefault();
  clearAllAnswers();
  closeResetModal();
});
resetModal?.addEventListener("click", (event) => {
  if (event.target === resetModal) {
    closeResetModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && resetModal?.classList.contains("is-open")) {
    closeResetModal();
  }
});
toggleAllSections?.addEventListener("click", toggleAllExpandableSections);
document.addEventListener(
  "toggle",
  () => {
    updateToggleAllButtonLabel();
    saveDraftToLocalStorage();
  },
  true
);
