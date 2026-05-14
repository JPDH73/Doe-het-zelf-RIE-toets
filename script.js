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

const questionGroupsRisk = document.querySelector("#questionGroupsRisk");
const questionGroupsCauses = document.querySelector("#questionGroupsCauses");
const questionGroupsSupplemental = document.querySelector("#questionGroupsSupplemental");
const questionGroupsRegular = document.querySelector("#questionGroupsRegular");
const questionGroupsPlan = document.querySelector("#questionGroupsPlan");
const template = document.querySelector("#questionTemplate");
const survey = document.querySelector("#survey");
const companyName = document.querySelector("#companyName");
const contactName = document.querySelector("#contactName");
const contactEmail = document.querySelector("#contactEmail");
const rieAssessorName = document.querySelector("#rieAssessorName");
const worksCouncilContact = document.querySelector("#worksCouncilContact");
const occupationalService = document.querySelector("#occupationalService");
const industry = document.querySelector("#industry");
const arboCertificates = document.querySelector("#arboCertificates");
const employees = document.querySelector("#employees");
const assessmentDate = document.querySelector("#assessmentDate");
const rieName = document.querySelector("#rieName");
const scopeDescription = document.querySelector("#scopeDescription");
const executionDescription = document.querySelector("#executionDescription");
const executionParticipantRows = document.querySelector("#executionParticipantRows");
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
const riskOverviewItems = document.querySelector("#riskOverviewItems");
const groundCausesOverviewItems = document.querySelector("#groundCausesOverviewItems");
const supplementedApplicableItems = document.querySelector("#supplementedApplicableItems");
const summaryRiskOutput = document.querySelector("#summaryRiskOutput");
const summaryGroundCausesOutput = document.querySelector("#summaryGroundCausesOutput");
const summarySupplementalOutput = document.querySelector("#summarySupplementalOutput");
const summaryQuestionOutput = document.querySelector("#summaryQuestionOutput");
const summaryPlanOutput = document.querySelector("#summaryPlanOutput");
const profileSectionContent = document.querySelector("#profileSectionContent");
const scopeSectionContent = document.querySelector("#scopeSectionContent");
const step3SectionContent = document.querySelector("#step3SectionContent");
const causesStepSectionContent = document.querySelector("#causesStepSectionContent");
const supplementalStepSectionContent = document.querySelector("#supplementalStepSectionContent");
const regularStepSectionContent = document.querySelector("#regularStepSectionContent");
const planStepSectionContent = document.querySelector("#planStepSectionContent");
const questionStatusMatrix = document.querySelector("#questionStatusMatrix");
const planStatusMatrix = document.querySelector("#planStatusMatrix");
const scoreRing = document.querySelector(".score-ring");
const copyReport = document.querySelector("#copyReport");
const toggleReportOutput = document.querySelector("#toggleReportOutput");
const generateReportPdf = document.querySelector("#generateReportPdf");
const generateWord = document.querySelector("#generateWord");
const generateSummaryPdf = document.querySelector("#generateSummaryPdf");
const generateSummaryWord = document.querySelector("#generateSummaryWord");
const resetApp = document.querySelector("#resetApp");
const resultsContent = document.querySelector("#resultsContent");
const toggleResultsContent = document.querySelector("#toggleResultsContent");
const resetModal = document.querySelector("#resetModal");
const resetModalTitle = document.querySelector("#resetModalTitle");
const resetModalMessage = document.querySelector("#resetModalMessage");
const cancelReset = document.querySelector("#cancelReset");
const confirmReset = document.querySelector("#confirmReset");
const toggleAllSections = document.querySelector("#toggleAllSections");
const toggleRiskInventoryQuestion = document.querySelector("#toggleRiskInventoryQuestion");
const toggleCauseQuestions = document.querySelector("#toggleCauseQuestions");
const toggleSupplementalQuestions = document.querySelector("#toggleSupplementalQuestions");
const toggleRegularQuestions = document.querySelector("#toggleRegularQuestions");
const togglePlanQuestions = document.querySelector("#togglePlanQuestions");
const toggleSummaryRiskOutput = document.querySelector("#toggleSummaryRiskOutput");
const toggleSummaryGroundCausesOutput = document.querySelector("#toggleSummaryGroundCausesOutput");
const toggleSummarySupplementalOutput = document.querySelector("#toggleSummarySupplementalOutput");
const toggleSummaryQuestionOutput = document.querySelector("#toggleSummaryQuestionOutput");
const toggleSummaryPlanOutput = document.querySelector("#toggleSummaryPlanOutput");
const toggleProfileSection = document.querySelector("#toggleProfileSection");
const toggleScopeSection = document.querySelector("#toggleScopeSection");
const toggleStep3Section = document.querySelector("#toggleStep3Section");
const toggleRegularStepSection = document.querySelector("#toggleRegularStepSection");
const togglePlanStepSection = document.querySelector("#togglePlanStepSection");
const draftStatus = document.querySelector("#draftStatus");
const resultsSection = document.querySelector("#resultsSection");
const wizardStepStatus = document.querySelector("#wizardStepStatus");
const wizardPrev = document.querySelector("#wizardPrev");
const wizardNext = document.querySelector("#wizardNext");
const wizardStepButtons = Array.from(document.querySelectorAll("[data-step-target]"));
const wizardPanels = Array.from(document.querySelectorAll("[data-step-panel]"));

const DRAFT_STORAGE_KEY = "rie-pretoets-local-draft-v1";
const TOTAL_WIZARD_STEPS = 8;
let currentWizardStep = 0;
let resetConfirmationStep = 1;

function getExecutionParticipantFieldName(index, field) {
  return `executionParticipant-${index}-${field}`;
}

function createExecutionParticipantRow(index, values = {}) {
  const row = document.createElement("div");
  row.className = "execution-participant-row";
  row.dataset.rowIndex = String(index);
  row.innerHTML = `
    <label class="field">
      <span>Naam</span>
      <input
        type="text"
        name="${getExecutionParticipantFieldName(index, "name")}"
        placeholder="Vul de naam van de betrokkene in"
        value="${escapeHtml(values.name || "")}"
      />
    </label>
    <label class="field">
      <span>Functie</span>
      <input
        type="text"
        name="${getExecutionParticipantFieldName(index, "role")}"
        placeholder="Vul de functie of rol in"
        value="${escapeHtml(values.role || "")}"
      />
    </label>
  `;

  const nameInput = row.querySelector(`[name="${CSS.escape(getExecutionParticipantFieldName(index, "name"))}"]`);
  nameInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    ensureExecutionParticipantTrailingRow();
    const nextRow = row.nextElementSibling;
    const nextNameField = nextRow?.querySelector('input[name*="-name"]');
    nextNameField?.focus();
  });

  return row;
}

function getExecutionParticipantData(includeEmpty = false) {
  if (!executionParticipantRows) {
    return [];
  }

  return Array.from(executionParticipantRows.querySelectorAll(".execution-participant-row"))
    .map((row) => {
      const index = row.dataset.rowIndex || "0";
      return {
        name: getPlainValue(
          row.querySelector(`[name="${CSS.escape(getExecutionParticipantFieldName(index, "name"))}"]`)?.value || ""
        ),
        role: getPlainValue(
          row.querySelector(`[name="${CSS.escape(getExecutionParticipantFieldName(index, "role"))}"]`)?.value || ""
        ),
      };
    })
    .filter((item) => includeEmpty || item.name || item.role);
}

function syncExecutionDescription() {
  if (!executionDescription) {
    return;
  }

  const lines = getExecutionParticipantData()
    .map((participant) => {
      const parts = [];
      if (participant.name) parts.push(`Naam: ${participant.name}`);
      if (participant.role) parts.push(`Functie: ${participant.role}`);
      return parts.join(" | ");
    })
    .filter(Boolean);

  executionDescription.value = lines.join("\n");
}

function ensureExecutionParticipantTrailingRow() {
  if (!executionParticipantRows) {
    return;
  }

  const rows = Array.from(executionParticipantRows.querySelectorAll(".execution-participant-row"));
  if (rows.length === 0) {
    executionParticipantRows.append(createExecutionParticipantRow(0));
    return;
  }

  const lastRowData = getExecutionParticipantData(true).at(-1);
  if (!lastRowData) {
    executionParticipantRows.append(createExecutionParticipantRow(rows.length));
    return;
  }

  if (lastRowData.name || lastRowData.role) {
    executionParticipantRows.append(createExecutionParticipantRow(rows.length));
  }
}

function resetExecutionParticipantRows(rows = [{ name: "", role: "" }]) {
  if (!executionParticipantRows) {
    return;
  }

  executionParticipantRows.textContent = "";
  rows.forEach((row, index) => executionParticipantRows.append(createExecutionParticipantRow(index, row)));
  ensureExecutionParticipantTrailingRow();
  syncExecutionDescription();
  refreshExecutionParticipantSelects();
  refreshRiskParticipantPickers();
}

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

function setPanelContentOpenForStep(step) {
  if (step === 1 && profileSectionContent) {
    profileSectionContent.hidden = false;
  }

  if (step === 2 && scopeSectionContent) {
    scopeSectionContent.hidden = false;
  }

  if (step === 3 && step3SectionContent) {
    step3SectionContent.hidden = false;
  }

  if (step === 4 && causesStepSectionContent) {
    causesStepSectionContent.hidden = false;
    for (const card of getCauseQuestionCards()) {
      card.open = true;
    }
    for (const group of document.querySelectorAll("#questionGroupsCauses .risk-group")) {
      group.open = true;
    }
  }

  if (step === 5 && supplementalStepSectionContent) {
    supplementalStepSectionContent.hidden = false;
    for (const card of getSupplementalQuestionCards()) {
      card.open = true;
    }
    for (const group of document.querySelectorAll("#questionGroupsSupplemental .risk-group")) {
      group.open = true;
    }
  }

  if (step === 6 && regularStepSectionContent) {
    regularStepSectionContent.hidden = false;
  }

  if (step === 7 && planStepSectionContent) {
    planStepSectionContent.hidden = false;
  }

  if (step === 8) {
    if (resultsContent) {
      resultsContent.hidden = false;
    }

    if (reportOutput) {
      reportOutput.hidden = false;
    }
  }
}

function updateWizardStepButtons() {
  for (const button of wizardStepButtons) {
    const step = Number(button.dataset.stepTarget || "0");
    button.classList.toggle("is-active", step === currentWizardStep);
    button.classList.toggle("is-complete", isWizardStepComplete(step));
  }
}

function updateWizardNavigation() {
  if (wizardStepStatus) {
    wizardStepStatus.textContent =
      currentWizardStep > 0
        ? `Stap ${currentWizardStep} van ${TOTAL_WIZARD_STEPS}`
        : "Kies een stap";
  }

  if (wizardPrev) {
    wizardPrev.disabled = currentWizardStep <= 1;
  }

  if (wizardNext) {
    wizardNext.disabled = currentWizardStep >= TOTAL_WIZARD_STEPS;
  }
}

function updateWizardVisibility() {
  for (const panel of wizardPanels) {
    const step = Number(panel.dataset.stepPanel || "0");
    panel.hidden = step !== currentWizardStep;
  }

  if (currentWizardStep > 0) {
    setPanelContentOpenForStep(currentWizardStep);
  }

  updatePanelSectionToggleLabels();
  updateReportToggleButtonLabel();
  updateWizardStepButtons();
  updateWizardNavigation();
  updateResultsContentToggleButtonLabel();
}

function setWizardStep(step) {
  const nextStep = Math.min(TOTAL_WIZARD_STEPS, Math.max(0, Number(step) || 0));
  currentWizardStep = nextStep;
  updateWizardVisibility();
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
    currentWizardStep,
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
      resetExecutionParticipantRows();
      updateDraftStatus("Concept wordt lokaal opgeslagen in deze browser.");
      return;
    }

    const draftState = JSON.parse(raw);
    const fields = draftState.fields || {};
    const executionRowIndexes = Object.keys(fields)
      .map((name) => {
        const match = name.match(/^executionParticipant-(\d+)-(name|role)$/);
        return match ? Number(match[1]) : null;
      })
      .filter((value) => value !== null);

    if (executionRowIndexes.length > 0) {
      const maxIndex = Math.max(...executionRowIndexes);
      resetExecutionParticipantRows(
        Array.from({ length: maxIndex + 1 }, (_, index) => ({
          name: fields[getExecutionParticipantFieldName(index, "name")] || "",
          role: fields[getExecutionParticipantFieldName(index, "role")] || "",
        }))
      );
    } else {
      resetExecutionParticipantRows();
    }

    currentWizardStep = Math.min(
      TOTAL_WIZARD_STEPS,
      Math.max(0, Number(draftState.currentWizardStep) || 0)
    );

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

    ensureExecutionParticipantTrailingRow();
    syncExecutionDescription();
    refreshExecutionParticipantSelects();
    refreshRiskParticipantPickers();

    const openDetails = new Set(draftState.openDetails || []);
    for (const detail of document.querySelectorAll("details")) {
      const key = getDetailStorageKey(detail);
      if (key && openDetails.has(key)) {
        detail.open = true;
      }
    }

    updateWizardVisibility();
    updateDraftStatus("Opgeslagen concept is teruggezet op deze computer.");
  } catch (error) {
    updateDraftStatus("Het opgeslagen concept kon niet worden teruggezet.");
  }
}

function clearAllAnswers() {
  survey.reset();

  resetExecutionParticipantRows();

  for (const input of survey.querySelectorAll('input[type="radio"]')) {
    input.checked = false;
  }

  for (const detail of document.querySelectorAll("details")) {
    detail.open = false;
  }

  if (profileSectionContent) {
    profileSectionContent.hidden = true;
  }

  if (scopeSectionContent) {
    scopeSectionContent.hidden = true;
  }

  if (step3SectionContent) {
    step3SectionContent.hidden = true;
  }

  if (causesStepSectionContent) {
    causesStepSectionContent.hidden = true;
  }

  if (supplementalStepSectionContent) {
    supplementalStepSectionContent.hidden = true;
  }

  if (regularStepSectionContent) {
    regularStepSectionContent.hidden = true;
  }

  if (planStepSectionContent) {
    planStepSectionContent.hidden = true;
  }

  if (summaryRiskOutput) {
    summaryRiskOutput.hidden = true;
  }

  if (summaryGroundCausesOutput) {
    summaryGroundCausesOutput.hidden = true;
  }

  if (summarySupplementalOutput) {
    summarySupplementalOutput.hidden = true;
  }

  if (summaryQuestionOutput) {
    summaryQuestionOutput.hidden = true;
  }

  if (summaryPlanOutput) {
    summaryPlanOutput.hidden = true;
  }

  if (resultsContent) {
    resultsContent.hidden = true;
  }

  if (reportOutput) {
    reportOutput.hidden = true;
  }

  currentWizardStep = 0;

  try {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch (error) {
    // Intentionally ignore storage errors during reset.
  }

  renderAssessment();
  updateToggleAllButtonLabel();
  updateSummarySectionToggleLabels();
  updateWizardVisibility();
  updatePanelSectionToggleLabels();
  updateReportToggleButtonLabel();
  updateDraftStatus("Concept is gewist op deze computer.");
}

function openResetModal() {
  if (!resetModal) {
    return;
  }

  resetConfirmationStep = 1;
  if (resetModalTitle) {
    resetModalTitle.textContent = "Weet u het zeker?";
  }
  if (resetModalMessage) {
    resetModalMessage.textContent = "Wilt u alle ingevulde gegevens en het opgeslagen concept wissen?";
  }
  if (cancelReset) {
    cancelReset.textContent = "Annuleren";
  }
  if (confirmReset) {
    confirmReset.textContent = "Reset bevestigen";
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

    const copy = document.createElement("span");
    copy.className = "binary-pill-copy";

    const text = document.createElement("span");
    text.className = "binary-pill-label";
    text.textContent = choice.label;

    copy.append(text);

    if (choice.detail) {
      const detail = document.createElement("span");
      detail.className = "binary-pill-detail";
      detail.textContent = choice.detail;
      copy.append(detail);
    }

    label.append(input, copy);
    wrapper.append(label);
  }

  return wrapper;
}

function createRiskColumn(questionText, fieldName, choices, itemId, helpContent = null) {
  const block = document.createElement("div");
  block.className = "risk-question-block";
  block.dataset.field = fieldName;
  block.innerHTML = `<p class="risk-question">${questionText}</p>`;

  if (helpContent?.url) {
    const helpToggle = document.createElement("details");
    helpToggle.className = "question-help-toggle";
    const summary = document.createElement("summary");
    summary.textContent = "Toelichting";
    const paragraph = document.createElement("p");
    const linkText = helpContent.text || helpContent.url;
    paragraph.innerHTML = `Raadpleeg de toelichting of wettekst via <a href="${helpContent.url}" target="_blank" rel="noopener noreferrer">${linkText}</a>.`;
    helpToggle.append(summary, paragraph);
    block.append(helpToggle);
  }

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
  if (question.id === "1-1-1") {
    return false;
  }

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
          "Een RI&E beschrijft niet alleen welke risico’s aanwezig zijn, maar ook waardoor deze risico’s ontstaan of blijven bestaan. Het gaat dus niet alleen om het zichtbare probleem, maar ook om het oorzaakspatroon daarachter. Bij elk relevant thema of risico wordt verwacht dat is nagedacht over de stap van risico naar directe oorzaak en vervolgens naar achterliggende oorzaak. De directe oorzaak is meestal wat direct zichtbaar is in de werksituatie. De achterliggende oorzaak is de onderliggende risicobron die verklaart waarom het risico aanwezig is, terugkeert of onvoldoende wordt beheerst. Daarbij kan worden gekeken naar factoren zoals techniek, inrichting van de werkplek, organisatie van het werk, planning en werkdruk, onderhoud, toezicht, kennis en instructie, communicatie, gedrag en veiligheidscultuur. Het is niet nodig om voor ieder risico een uitgebreide oorzakenanalyse uit te voeren. Wel moet uit de RI&E blijken dat niet alleen symptomen zijn benoemd, maar ook de factoren die het risico veroorzaken, versterken of in stand houden. Gedrag kan daarbij een rol spelen, maar is zelden de enige verklaring. Als medewerkers veilig of gezond werken lastig kunnen volhouden, kan daarachter ook een gebrek aan tijd, hulpmiddelen, toezicht, duidelijke instructie of een onhandige werkwijze zitten. Een voorbeeld: als in de RI&E wordt vastgesteld dat medewerkers veel en zwaar moeten tillen, en het met gezond verstand duidelijk is dat de fysieke belasting te hoog is, dan is de directe oorzaak dat materialen handmatig worden verplaatst. De achterliggende oorzaken kunnen zijn dat tilhulpmiddelen ontbreken of niet beschikbaar zijn op de plek waar het werk plaatsvindt, dat de werkvoorraad of logistiek zo is ingericht dat handmatig tillen onvermijdelijk wordt, of dat de planning te weinig ruimte laat om het werk met hulp of hulpmiddelen uit te voeren. De RI&E maakt dan zichtbaar dat het risico niet alleen ontstaat doordat medewerkers tillen, maar ook door achterliggende oorzaken in werkplekinrichting, organisatie en werkdruk. Dat betekent ook dat de analyse niet mag blijven steken bij een oppervlakkige verklaring zoals 'medewerkers moeten beter tillen'. Voorlichting over tiltechniek kan nuttig zijn, maar is bij een evident te zware tilbelasting geen passende hoofdverklaring en meestal ook geen voldoende maatregel. De RI&E moet dan laten zien waarom het vele tillen nodig is geworden en welke onderliggende factoren maken dat deze belasting blijft bestaan. Daarmee wordt voorkomen dat het risico wordt teruggebracht tot gedrag van medewerkers, terwijl de oorzaak vooral in de inrichting of organisatie van het werk ligt. Op deze manier laat de RI&E zien dat per thema is gekeken naar de onderliggende factoren die bepalend zijn voor het risico. Daardoor wordt duidelijk of een risico vooral samenhangt met bijvoorbeeld een technische tekortkoming, een organisatorisch knelpunt, onvoldoende kennis, gebrekkig toezicht, werkdruk of gedrag dat door de werksituatie wordt uitgelokt.",
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
    "1.2 Actualiteit",
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

function getParticipantPickerValues(input) {
  const raw = getPlainValue(input?.value || "");
  return raw ? raw.split(" | ").map((value) => value.trim()).filter(Boolean) : [];
}

function createParticipantPickerRow(value = "") {
  const row = document.createElement("div");
  row.className = "participant-picker-row";

  const select = document.createElement("select");
  select.className = "risk-select participant-picker-select";
  select.innerHTML = `<option value="">Kies een persoon</option>`;
  row.append(select);

  row.dataset.value = value;
  return row;
}

function updateParticipantPickerOptions(row, optionsList, selectedValue = "") {
  const select = row.querySelector(".participant-picker-select");
  if (!select) {
    return;
  }

  select.innerHTML = `<option value="">Kies een persoon</option>`;

  for (const option of optionsList) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.append(optionElement);
  }

  select.value = selectedValue && optionsList.includes(selectedValue) ? selectedValue : "";
}

function syncParticipantPickerField(field) {
  const picker = field.querySelector(".participant-picker");
  const store = field.querySelector(".participant-picker-store");
  if (!picker || !store) {
    return;
  }

  const values = Array.from(picker.querySelectorAll(".participant-picker-select"))
    .map((select) => getPlainValue(select.value))
    .filter(Boolean);

  store.value = values.join(" | ");
}

function ensureParticipantPickerTrailingRow(field) {
  const picker = field.querySelector(".participant-picker");
  if (!picker) {
    return;
  }

  const rows = Array.from(picker.querySelectorAll(".participant-picker-row"));
  const lastSelect = rows.at(-1)?.querySelector(".participant-picker-select");

  if (!lastSelect) {
    return;
  }

  if (getPlainValue(lastSelect.value) !== "") {
    const newRow = createParticipantPickerRow("");
    updateParticipantPickerOptions(newRow, getExecutionParticipantOptions(), "");
    picker.append(newRow);
  }
}

function createRiskSelectField(name, labelText, optionsList) {
  const field = document.createElement("label");
  field.className = "risk-evidence";
  field.hidden = true;

  const select = document.createElement("select");
  select.name = name;
  select.className = "risk-select";
  select.dataset.participantSelect = "true";
  select.innerHTML = `<option value="">Kies een persoon</option>`;

  for (const option of optionsList) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.append(optionElement);
  }

  const label = document.createElement("span");
  label.className = "risk-evidence-label";
  label.textContent = labelText;

  field.append(label, select);
  return field;
}

function createRiskParticipantPickerField(name, labelText) {
  const field = document.createElement("label");
  field.className = "risk-evidence";
  field.hidden = true;

  const label = document.createElement("span");
  label.className = "risk-evidence-label";
  label.textContent = labelText;

  const picker = document.createElement("div");
  picker.className = "participant-picker";

  const store = document.createElement("input");
  store.type = "hidden";
  store.name = name;
  store.className = "participant-picker-store";

  const initialRow = createParticipantPickerRow("");
  updateParticipantPickerOptions(initialRow, getExecutionParticipantOptions(), "");
  picker.append(initialRow);

  picker.addEventListener("change", () => {
    syncParticipantPickerField(field);
    ensureParticipantPickerTrailingRow(field);
  });

  field.append(label, picker, store);
  return field;
}

function createRiskMethodHelp() {
  const helpToggle = document.createElement("details");
  helpToggle.className = "question-help-toggle";
  helpToggle.hidden = true;
  helpToggle.dataset.methodHelp = "true";

  const summary = document.createElement("summary");
  summary.textContent = "Toelichting";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Beschrijf hier welke onderzoeksmethode, beoordelingswijze of verdiepende analyse is gebruikt om dit risico te inventariseren. Afhankelijk van het onderwerp kunnen verschillende methoden zijn toegepast, zoals interviews, werkplekobservaties, metingen, dossieronderzoek, trendanalyses of taakgerichte beoordelingen.";

  helpToggle.append(summary, paragraph);
  return helpToggle;
}

function createInlineHelpToggle(content) {
  const helpToggle = document.createElement("details");
  helpToggle.className = "question-help-toggle";

  const summary = document.createElement("summary");
  summary.textContent = "Toelichting";

  const body = document.createElement("div");
  const paragraph = document.createElement("p");
  paragraph.textContent = content;
  body.append(paragraph);

  helpToggle.append(summary, body);
  return helpToggle;
}

const groundCauseNoReasonOptions = [
  {
    value: "systematiek",
    label: "Niet opgenomen in de gehanteerde beoordelingssystematiek",
    detail:
      "De gebruikte methode of werkwijze voorzag niet expliciet in het beoordelen van basisrisicofactoren of achterliggende grondoorzaken.",
  },
  {
    value: "niet-relevant",
    label: "Niet relevant voor dit deelrisico",
    detail:
      "Voor dit deelrisico zijn geen relevante basisrisicofactoren of grondoorzaken van toepassing, omdat het risico voldoende direct en specifiek kan worden beoordeeld.",
  },
  {
    value: "anders",
    label: "Andere reden",
    detail:
      "Er is een andere reden waarom basisrisicofactoren of grondoorzaken niet zijn meegenomen.",
  },
];

function getGroundCauseNoReasonLabel(value) {
  return groundCauseNoReasonOptions.find((option) => option.value === value)?.label || "";
}

const supplementalNoReasonOptions = [
  {
    value: "niet-noodzakelijk",
    label: "Niet noodzakelijk gezien aard en omvang van het risico",
    detail:
      "De aard, hoeveelheid, frequentie of blootstellingsduur is zodanig beperkt dat een nadere inventarisatie of aanvullende beoordeling voor dit deelrisico niet proportioneel of noodzakelijk is.",
  },
  {
    value: "niet-onderkend",
    label: "Niet onderkend binnen de beoordeling",
    detail:
      "De mogelijke verplichting tot nadere inventarisatie of toepassing van aanvullende voorschriften is tijdens de beoordeling niet als zodanig herkend of meegenomen.",
  },
  {
    value: "anders",
    label: "Andere reden",
    detail:
      "Er is een andere reden waarom geen invulling is gegeven aan nadere inventarisatieverplichtingen of aanvullende voorschriften.",
  },
];

function getSupplementalNoReasonLabel(value) {
  return supplementalNoReasonOptions.find((option) => option.value === value)?.label || "";
}

function createGroundCauseNoReasonField(itemId) {
  const field = document.createElement("div");
  field.className = "risk-evidence";
  field.hidden = true;
  field.dataset.groundCauseNoReasonField = "true";

  const label = document.createElement("span");
  label.className = "risk-evidence-label";
  label.textContent = "Waarom zijn de grondoorzaken niet meegenomen?";

  const options = createBinaryOptions(
    `risk-${itemId}-causes-no-reason`,
    groundCauseNoReasonOptions,
    null
  );
  options.classList.add("binary-options-stacked");

  const noteField = createEvidenceField(
    `risk-${itemId}-causes-no-note`,
    "Licht hier toe wat de andere reden is waarom basisrisicofactoren of grondoorzaken niet zijn meegenomen."
  );
  noteField.hidden = true;
  noteField.dataset.groundCauseNoReasonNote = "true";

  options.addEventListener("change", () => {
    const selected = getAnswerValue(`risk-${itemId}-causes-no-reason`);
    noteField.hidden = selected !== "anders";
  });

  field.append(label, options, noteField);
  return field;
}

function createSupplementalNoReasonField(itemId, configKey) {
  const field = document.createElement("div");
  field.className = "risk-evidence";
  field.hidden = true;
  field.dataset.supplementalNoReasonField = "true";

  const label = document.createElement("span");
  label.className = "risk-evidence-label";
  label.textContent = "Waarom is geen invulling gegeven aan de nadere voorschriften?";

  const options = createBinaryOptions(
    `risk-${itemId}-${configKey}-no-reason`,
    supplementalNoReasonOptions,
    null
  );
  options.classList.add("binary-options-stacked");

  const noteField = createEvidenceField(
    `risk-${itemId}-${configKey}-note`,
    "Licht hier toe wat de andere reden is waarom geen invulling is gegeven aan nadere inventarisatieverplichtingen of aanvullende voorschriften."
  );
  noteField.hidden = true;
  noteField.dataset.supplementalNoReasonNote = "true";

  options.addEventListener("change", () => {
    const selected = getAnswerValue(`risk-${itemId}-${configKey}-no-reason`);
    noteField.hidden = selected !== "anders";
  });

  field.append(label, options, noteField);
  return field;
}

function formatThemeQuestionLabel(title) {
  const withoutNumber = title.replace(/^\d+\.\s*/, "");
  return withoutNumber.charAt(0).toLowerCase() + withoutNumber.slice(1);
}

function getRiskItemHelpText(itemLabel) {
  const helpTexts = {
    Werkdruk:
      "Dit deelrisico gaat over belasting door werkhoeveelheid, werktempo, deadlines en de mate waarin medewerkers voldoende regelmogelijkheden hebben. Werkdruk wordt een arbeidsrisico wanneer de belasting structureel hoger is dan wat gezond en veilig uitvoerbaar is binnen de beschikbare tijd, middelen en ondersteuning.",
    "Pesten, seksuele intimidatie, agressie en geweld":
      "Dit deelrisico gaat over ongewenst gedrag dat kan leiden tot psychische schade, sociale onveiligheid of uitval. Het kan gaan om gedrag van collega’s, leidinggevenden, klanten, cliënten, patiënten, leerlingen of andere derden waarmee medewerkers in het werk te maken hebben.",
    Discriminatie:
      "Dit deelrisico gaat over ongelijke behandeling, uitsluiting of benadeling op bijvoorbeeld afkomst, geslacht, leeftijd, geloof, beperking of seksuele gerichtheid. Discriminatie kan leiden tot psychische belasting, onveiligheid, verstoorde samenwerking en een aantasting van gezond en veilig werken.",
    "Inhoud en organisatie van de arbeid":
      "Dit deelrisico gaat over de manier waarop werk is ingericht, verdeeld en aangestuurd. Denk aan autonomie, taakeisen, rolonduidelijkheid, monotone arbeid, onvoldoende afwisseling of een onlogische organisatie van werkzaamheden die kan leiden tot overbelasting of verminderde inzetbaarheid.",
    "Gezondheidsrisico's, zoals carcinogene, mutagene, reprotoxische en sensibiliserende stoffen en procesemissies":
      "Dit deelrisico gaat over blootstelling aan stoffen die schadelijk kunnen zijn voor de gezondheid via inademing, huidcontact of inslikken. Het kan gaan om acute effecten, maar ook om langetermijneffecten zoals allergieën, longaandoeningen, kanker of effecten op de voortplanting.",
    "Veiligheidsrisico's, zoals brand, explosie en zware ongevallen bij opslag of gebruik":
      "Dit deelrisico gaat over situaties waarin gevaarlijke stoffen kunnen leiden tot brand, explosie, plotselinge vrijkomst of andere zware incidenten. Daarbij spelen opslag, gebruik, menging, ontbranding, ventilatie en beheersing van procesomstandigheden een belangrijke rol.",
    "Micro-organismen, zoals bacteriën, schimmels, virussen, parasieten, infectieuze agentia, toxinen en allergenen":
      "Dit deelrisico gaat over blootstelling aan biologische agentia die infecties, allergische reacties of toxische effecten kunnen veroorzaken. Relevantie ontstaat vooral wanneer medewerkers werken met mensen, dieren, afval, water, voeding, laboratoria of verontreinigde omgevingen.",
    "Klimaat, zoals hoge en lage temperaturen, luchtverversing, luchtvochtigheid en tocht":
      "Dit deelrisico gaat over belasting door warmte, koude, tocht, luchtvochtigheid en ventilatie. Onvoldoende beheersing van het klimaat kan leiden tot hinder, verminderde belastbaarheid, gezondheidsklachten en onveilig functioneren.",
    "Straling, zoals niet-ioniserende straling, uv-straling en kunstmatige optische straling":
      "Dit deelrisico gaat over blootstelling aan verschillende vormen van straling die schadelijk kunnen zijn voor huid, ogen of andere lichaamsfuncties. Relevantie ontstaat bijvoorbeeld bij lassen, uv-bronnen, lasers, elektromagnetische velden of andere installaties die straling genereren.",
    "Verlichting en daglicht":
      "Dit deelrisico gaat over de kwaliteit en beschikbaarheid van kunstlicht en daglicht op de werkplek. Onvoldoende of ongunstige verlichting kan leiden tot vermoeidheid, fouten, oogklachten, onveilige situaties en een verminderde kwaliteit van het werk.",
    "Schadelijk of hinderlijk geluid":
      "Dit deelrisico gaat over blootstelling aan geluid dat schadelijk kan zijn voor het gehoor of hinder kan veroorzaken in het werk. Naast blijvende gehoorschade kan geluid ook leiden tot concentratieverlies, vermoeidheid, stress en verminderde veiligheid.",
    "Trillingen en schokken":
      "Dit deelrisico gaat over mechanische trillingen en schokken die via handgereedschap, voertuigen, machines of werkvloeren op het lichaam worden overgedragen. Dit kan leiden tot klachten aan rug, gewrichten, zenuwen of bloedvaten en vraagt om beoordeling van duur, intensiteit en blootstellingsfrequentie.",
    "Werken onder overdruk":
      "Dit deelrisico gaat over werkzaamheden in omstandigheden met verhoogde omgevingsdruk, zoals bij duikarbeid of andere overdruksituaties. Door de specifieke fysiologische belasting en veiligheidsrisico’s gelden hierbij bijzondere eisen aan beoordeling, uitvoering en deskundigheid.",
    "Werk- en rusttijden":
      "Dit deelrisico gaat over de spreiding en duur van werktijden en rustmomenten. Onvoldoende hersteltijd of ongunstige werktijden kunnen leiden tot vermoeidheid, fouten, gezondheidsklachten en een verhoogde kans op ongevallen.",
    Ploegendienst:
      "Dit deelrisico gaat over arbeid in wisselende diensten, waarbij het bioritme en het herstel van medewerkers onder druk kunnen komen te staan. Ploegendienst kan effect hebben op slaap, alertheid, gezondheid, sociale belasting en duurzame inzetbaarheid.",
    Nachtarbeid:
      "Dit deelrisico gaat over werken in de nacht, wat een extra belasting vormt voor slaap, herstel en biologische ritmes. Nachtarbeid kan leiden tot vermoeidheid, concentratieverlies, gezondheidsrisico’s en een grotere kans op fouten of incidenten.",
    "Arbeidsmiddelen: geschiktheid, beschikbaarheid, bevoegd gebruik, keuringen en onderhoud":
      "Dit deelrisico gaat over de vraag of arbeidsmiddelen geschikt, veilig en beschikbaar zijn voor het werk en of ze op de juiste manier worden gebruikt, onderhouden en gekeurd. Risico’s ontstaan wanneer middelen ondeugdelijk zijn, verkeerd worden gebruikt of niet passend zijn voor de taak of gebruiker.",
    "Inrichting arbeidsplaatsen, zoals werkruimten, orde en netheid, beveiligingen, signalering, bewegingsruimte, werken op hoogte en noodvoorzieningen":
      "Dit deelrisico gaat over de fysieke inrichting en veiligheid van de arbeidsplaats. Daarbij gaat het onder meer om ruimte, toegankelijkheid, orde en netheid, valgevaar, afschermingen, signalering en de aanwezigheid en bruikbaarheid van noodvoorzieningen.",
    "Persoonlijke beschermingsmiddelen: noodzaak, geschiktheid, keuringen en onderhoud":
      "Dit deelrisico gaat over het gebruik van persoonlijke beschermingsmiddelen wanneer risico’s niet voldoende op een andere manier kunnen worden beheerst. Belangrijk is of PBM’s echt nodig zijn, passend zijn voor het risico, goed worden gebruikt en in goede staat verkeren.",
    "Fysieke onderbelasting, zoals weinig beweging en lang zitten of staan":
      "Dit deelrisico gaat over te weinig afwisseling of beweging in het werk, bijvoorbeeld door langdurig zitten of stilstaan. Ook onderbelasting kan leiden tot gezondheidsklachten, verminderde belastbaarheid en een verhoogd risico op musculoskeletale problemen.",
    "Fysieke overbelasting, zoals tillen, dragen, duwen, trekken, repeterende bewegingen en ongunstige houdingen":
      "Dit deelrisico gaat over lichamelijke belasting die te zwaar, te langdurig of te eenzijdig is. Relevantie ontstaat bij handmatig verplaatsen van lasten, repeterend werk of werkhoudingen die kunnen leiden tot klachten aan rug, nek, schouders, armen of benen.",
    Beeldschermwerk:
      "Dit deelrisico gaat over belasting door langdurig of ongunstig beeldschermwerk. Daarbij spelen onder meer werkhouding, duur van het werk, afwisseling, visuele belasting en de inrichting van de werkplek een rol.",
    Uitzendkrachten:
      "Dit deelrisico gaat over extra kwetsbaarheden van uitzendkrachten, bijvoorbeeld door beperkte inwerktijd, minder kennis van het bedrijf of onduidelijkheid over instructies en verantwoordelijkheden. In de RI&E moet blijken of deze groep voldoende is meegenomen.",
    Stagiaires:
      "Dit deelrisico gaat over medewerkers in opleiding die vaak minder ervaring hebben en daardoor extra kwetsbaar kunnen zijn voor arbeidsrisico’s. Relevantie ontstaat vooral wanneer begeleiding, instructie of toezicht onvoldoende zijn afgestemd op hun leer- en ervaringsniveau.",
    Vrijwilligers:
      "Dit deelrisico gaat over personen die werkzaamheden verrichten zonder reguliere arbeidsovereenkomst, maar wel met blootstelling aan arbeidsrisico’s. Ook voor vrijwilligers moet worden beoordeeld welke risico’s voor hen relevant zijn en hoe die worden beheerst.",
    Anderstaligen:
      "Dit deelrisico gaat over medewerkers die instructies, waarschuwingen of procedures mogelijk niet volledig begrijpen door taalbarrières. Dit kan directe gevolgen hebben voor veilig gedrag, naleving van werkinstructies en de effectiviteit van communicatie op de werkvloer.",
    "Andere personen of derden, zoals bezoekers en voorbijgangers":
      "Dit deelrisico gaat over personen die geen medewerker zijn, maar wel geraakt kunnen worden door de werkzaamheden van de organisatie. Denk aan bezoekers, klanten, omstanders of voorbijgangers die risico lopen door verkeer, machines, stoffen of andere bedrijfsactiviteiten.",
    Zwangeren:
      "Dit deelrisico gaat over extra risico’s voor zwangere medewerkers en medewerkers tijdens de lactatie. Daarbij moet worden beoordeeld of blootstellingen, werkdruk, fysieke belasting, werktijden of andere factoren aanvullende bescherming of aanpassing van het werk vragen.",
    Jeugdigen:
      "Dit deelrisico gaat over extra risico’s voor jonge medewerkers, die door leeftijd, ontwikkeling of beperkte ervaring kwetsbaarder kunnen zijn. Voor jeugdigen gelden bovendien specifieke wettelijke regels en beperkingen voor bepaalde werkzaamheden en blootstellingen.",
    "Werknemers met een beperking of gedeeltelijke arbeidsongeschiktheid":
      "Dit deelrisico gaat over medewerkers voor wie de standaard inrichting van werk, werkplek of organisatie niet vanzelfsprekend passend is. Het is van belang te beoordelen of aanvullende voorzieningen, aanpassingen of organisatorische maatregelen nodig zijn om gezond en veilig te kunnen werken.",
    "Werkers die plaats- en tijdonafhankelijk werken":
      "Dit deelrisico gaat over medewerkers die buiten de gebruikelijke werkplek of werktijden werken, bijvoorbeeld thuis, onderweg of op wisselende locaties. Daarbij kunnen risico’s ontstaan rond ergonomie, werk-privébalans, bereikbaarheid, sociale isolatie en toezicht op veilig werken.",
  };

  return helpTexts[itemLabel] || "";
}

function getGroundCauseItemHelpText(itemLabel) {
  const sharedVulnerableGroupsText =
    "Voorbeeld van directe oorzaak: deze groepen lopen extra risico omdat zij minder bekend zijn met het werk, de taal, de locatie of de regels. Voorbeeld van achterliggende oorzaken: introductie en instructie zijn te algemeen, informatie wordt niet afgestemd op taal of ervaring, toezicht is onduidelijk belegd of derden worden niet meegenomen in de risicoanalyse van het werkproces. De achterliggende oorzaak ligt dan in onboarding, communicatie, regie en afstemming met andere partijen.";
  const sharedSpecialProtectionText =
    "Voorbeeld van directe oorzaak: het werk sluit onvoldoende aan bij hun belastbaarheid of wettelijke beschermingsbehoefte. Voorbeeld van achterliggende oorzaken: de organisatie herkent bijzondere risico’s niet tijdig, individuele aanpassing is afhankelijk van ad-hoc overleg, leidinggevenden weten niet welke beperkingen of verboden gelden, of er is geen proces om werk tijdelijk aan te passen. De achterliggende oorzaak ligt dan in signalering, maatwerkproces, kennis en HR-/arboborging.";

  const helpTexts = {
    Werkdruk:
      "Voorbeeld van directe oorzaak: medewerkers hebben structureel te veel werk binnen de beschikbare tijd. Voorbeeld van achterliggende oorzaken: de personele bezetting sluit niet aan op het werkaanbod, prioriteiten zijn onvoldoende duidelijk, verstoringen worden niet beheerst of er is te weinig regelruimte om het werk zelf te organiseren. Het oorzaakspatroon ligt dan vooral in planning, sturing, taakverdeling en organisatie van het werk.",
    "Pesten, seksuele intimidatie, agressie en geweld":
      "Voorbeeld van directe oorzaak: medewerkers worden geconfronteerd met grensoverschrijdend gedrag van collega’s, leidinggevenden, klanten, cliënten of derden. Voorbeeld van achterliggende oorzaken: er is onvoldoende normstelling, meldingen worden niet consequent opgevolgd, leidinggevenden spreken gedrag niet zichtbaar aan of teams hebben een cultuur waarin ongewenst gedrag wordt gebagatelliseerd. De onderliggende risicobron ligt dan niet alleen bij de dader of het incident, maar ook bij sociale veiligheid, leiderschap en meldcultuur.",
    Discriminatie:
      "Voorbeeld van directe oorzaak: medewerkers ervaren ongelijke behandeling of uitsluiting. Voorbeeld van achterliggende oorzaken: selectie, beoordeling, roostering of taakverdeling zijn onvoldoende transparant, leidinggevenden herkennen signalen niet of er ontbreekt een veilige route om discriminatie te melden. De achterliggende oorzaak ligt dan in organisatie, cultuur, besluitvorming en toezicht op gelijke behandeling.",
    "Inhoud en organisatie van de arbeid":
      "Voorbeeld van directe oorzaak: werk is onduidelijk, eenzijdig, emotioneel belastend of slecht georganiseerd. Voorbeeld van achterliggende oorzaken: rollen, verantwoordelijkheden en bevoegdheden zijn onvoldoende helder, functies zijn te smal of juist te breed ingericht, of medewerkers hebben weinig invloed op tempo, volgorde en werkwijze. De achterliggende oorzaak ligt dan in functieontwerp, taakverdeling en aansturing.",
    "Gezondheidsrisico's, zoals carcinogene, mutagene, reprotoxische en sensibiliserende stoffen en procesemissies":
      "Voorbeeld van directe oorzaak: medewerkers worden blootgesteld aan dampen, stof, nevel, procesemissies of huidcontact met schadelijke stoffen. Voorbeeld van achterliggende oorzaken: stoffen worden ingekocht zonder arbobeoordeling, substitutie is niet onderzocht, bronafzuiging ontbreekt of onderhoud van beheersmaatregelen is niet geborgd. De onderliggende risicobron ligt dan vaak in inkoop, techniek, stoffenmanagement en borging.",
    "Veiligheidsrisico's, zoals brand, explosie en zware ongevallen bij opslag of gebruik":
      "Voorbeeld van directe oorzaak: er is kans op brand, explosie, ongewenste reacties of gevaarlijke opslag. Voorbeeld van achterliggende oorzaken: opslagvoorzieningen zijn historisch gegroeid, hoeveelheden worden niet bewaakt, incompatibele stoffen staan bij elkaar of verantwoordelijkheden voor opslag, etikettering en inspectie zijn onduidelijk. De achterliggende oorzaken liggen dan in organisatie, ontwerp van opslag, toezicht en beheer.",
    "Micro-organismen, zoals bacteriën, schimmels, virussen, parasieten, infectieuze agentia, toxinen en allergenen":
      "Voorbeeld van directe oorzaak: medewerkers kunnen in contact komen met bacteriën, virussen, schimmels, parasieten, toxinen of allergenen. Voorbeeld van achterliggende oorzaken: schoon/vuil-routes zijn onduidelijk, hygiënevoorzieningen staan niet op de juiste plek, vaccinatiebeleid ontbreekt of incidenten zoals prik-, snij- of spataccidenten worden niet geanalyseerd. De achterliggende oorzaak ligt dan in werkproces, inrichting, hygiënebeleid en borging.",
    "Klimaat, zoals hoge en lage temperaturen, luchtverversing, luchtvochtigheid en tocht":
      "Voorbeeld van directe oorzaak: medewerkers werken bij te hoge of lage temperatuur, tocht, onvoldoende ventilatie of ongunstige luchtvochtigheid. Voorbeeld van achterliggende oorzaken: het gebouw of klimaatsysteem past niet bij het werkproces, onderhoud en klachtenopvolging zijn onvoldoende geregeld of productie-eisen wegen zwaarder dan comfort en herstel. Het oorzaakspatroon ligt dan in techniek, gebouwbeheer, onderhoud en organisatorische keuzes.",
    "Straling, zoals niet-ioniserende straling, uv-straling en kunstmatige optische straling":
      "Voorbeeld van directe oorzaak: medewerkers worden blootgesteld aan bijvoorbeeld uv, laser, elektromagnetische velden of optische straling. Voorbeeld van achterliggende oorzaken: bronnen zijn onvoldoende geïnventariseerd, afscherming ontbreekt, werkafstanden en blootstellingsduur zijn niet beoordeeld of medewerkers weten niet wanneer blootstelling schadelijk kan zijn. De achterliggende oorzaken liggen dan in risicobeoordeling, technisch ontwerp, kennis en toezicht. Let op: ioniserende straling valt buiten deze arbokerndeskundige scope en vereist een stralingsdeskundige.",
    "Verlichting en daglicht":
      "Voorbeeld van directe oorzaak: werkplekken zijn te donker, verblindend, contrastrijk of ongeschikt voor nauwkeurig werk. Voorbeeld van achterliggende oorzaken: de verlichting is niet afgestemd op de taak, werkplekken zijn later anders gebruikt dan oorspronkelijk ontworpen, onderhoud of vervanging van armaturen blijft achter of klachten worden niet systematisch opgevolgd. De achterliggende oorzaak ligt dan in werkplekinrichting, ontwerpbeheer en onderhoud.",
    "Schadelijk of hinderlijk geluid":
      "Voorbeeld van directe oorzaak: medewerkers worden blootgesteld aan hoge geluidsniveaus of hinderlijk omgevingsgeluid. Voorbeeld van achterliggende oorzaken: geluid is onvoldoende bij de bron aangepakt, machines zijn gekozen zonder geluidscriterium, ruimten versterken geluid of beheersing is afhankelijk gemaakt van gehoorbescherming. De onderliggende risicobron ligt dan in techniek, inkoop, werkplekinrichting en toepassing van de arbeidshygiënische strategie.",
    "Trillingen en schokken":
      "Voorbeeld van directe oorzaak: medewerkers gebruiken trillend handgereedschap of rijden op voertuigen met lichaamstrillingen. Voorbeeld van achterliggende oorzaken: gereedschap of voertuigen zijn niet geselecteerd op lage trillingsbelasting, onderhoud is onvoldoende, taakroulatie ontbreekt of de planning leidt tot lange ononderbroken blootstelling. De achterliggende oorzaken liggen dan in inkoop, onderhoud, planning en werkorganisatie.",
    "Werken onder overdruk":
      "Voorbeeld van directe oorzaak: medewerkers werken onder verhoogde druk, bijvoorbeeld bij duikarbeid of caisson-/tunnelwerk. Voorbeeld van achterliggende oorzaken: de blootstelling wordt onvoldoende vooraf gepland, medische geschiktheid en deskundige begeleiding zijn niet goed geborgd, procedures zijn onvoldoende bekend of afwijkingen worden onvoldoende beheerst. De achterliggende oorzaken liggen dan in specialistische voorbereiding, competentie, toezicht en noodorganisatie.",
    "Werk- en rusttijden":
      "Voorbeeld van directe oorzaak: medewerkers maken lange dagen, krijgen onvoldoende rust of werken structureel buiten gezonde roosters. Voorbeeld van achterliggende oorzaken: de bezetting is krap, piekbelasting wordt opgelost met overwerk, roosters worden vooral op continuïteit gestuurd en minder op herstel, of leidinggevenden hebben onvoldoende zicht op feitelijke werktijden. De achterliggende oorzaak ligt dan in capaciteitsplanning, roostering en sturing.",
    Ploegendienst:
      "Voorbeeld van directe oorzaak: medewerkers werken in wisselende diensten met verstoring van herstel en privéleven. Voorbeeld van achterliggende oorzaken: roosters zijn niet ontworpen volgens gezonde roosterprincipes, wisselingen zijn te snel of onvoorspelbaar, herstelmomenten zijn onvoldoende of medewerkers hebben weinig invloed op roosters. De onderliggende risicobron ligt dan in roosterontwerp, planning en participatie.",
    Nachtarbeid:
      "Voorbeeld van directe oorzaak: medewerkers werken ’s nachts met verhoogde vermoeidheid en veiligheids- of gezondheidsrisico’s. Voorbeeld van achterliggende oorzaken: nachtwerk wordt ingezet zonder kritische beoordeling of het noodzakelijk is, taken met hoge concentratie worden niet aangepast, rust en herstel zijn onvoldoende geborgd of signalen van vermoeidheid worden niet geregistreerd. De achterliggende oorzaken liggen dan in werkorganisatie, taakplanning en gezondheidsbewaking.",
    "Arbeidsmiddelen: geschiktheid, beschikbaarheid, bevoegd gebruik, keuringen en onderhoud":
      "Voorbeeld van directe oorzaak: machines, gereedschappen of installaties zijn niet geschikt, niet gekeurd, slecht onderhouden of worden onbevoegd gebruikt. Voorbeeld van achterliggende oorzaken: aanschaf, keuring en onderhoud zijn versnipperd belegd, wijzigingen aan machines worden niet opnieuw beoordeeld, gebruikersinstructies ontbreken of productieprikkels maken onveilig gebruik aantrekkelijk. De achterliggende oorzaak ligt dan in assetmanagement, techniek, bevoegdheden en toezicht.",
    "Inrichting arbeidsplaatsen, zoals werkruimten, orde en netheid, beveiligingen, signalering, bewegingsruimte, werken op hoogte en noodvoorzieningen":
      "Voorbeeld van directe oorzaak: werkplekken zijn onoverzichtelijk, krap, rommelig, onveilig ingericht of vluchtwegen/noodvoorzieningen zijn onvoldoende bruikbaar. Voorbeeld van achterliggende oorzaken: de ruimte is meegegroeid met het werk zonder herontwerp, orde en netheid zijn niet structureel belegd, logistieke stromen kruisen elkaar of noodvoorzieningen worden wel geplaatst maar niet beheerd en geoefend. De onderliggende risicobron ligt dan in werkplekontwerp, logistiek, beheer en BHV-borging.",
    "Persoonlijke beschermingsmiddelen: noodzaak, geschiktheid, keuringen en onderhoud":
      "Voorbeeld van directe oorzaak: PBM worden niet gebruikt, zijn niet passend of worden niet onderhouden. Voorbeeld van achterliggende oorzaken: PBM zijn gekozen zonder gebruikersbetrokkenheid, bron- of collectieve maatregelen zijn onvoldoende onderzocht, beschikbaarheid is niet geregeld of toezicht en vervanging ontbreken. De achterliggende oorzaak is dan vaak niet 'medewerkers willen niet', maar selectie, beschikbaarheid, comfort, onderhoud, toezicht en te veel afhankelijkheid van individueel gedrag.",
    "Fysieke onderbelasting, zoals weinig beweging en lang zitten of staan":
      "Voorbeeld van directe oorzaak: medewerkers zitten of staan langdurig en bewegen weinig. Voorbeeld van achterliggende oorzaken: het werk is zo ingericht dat bewegen niet logisch of nodig is, pauzes zijn informeel maar niet geborgd, systemen dwingen langdurig beeldschermwerk af of productienormen ontmoedigen afwisseling. De achterliggende oorzaak ligt dan in taakontwerp, werkplekorganisatie en cultuur rond pauzes en herstel.",
    "Fysieke overbelasting, zoals tillen, dragen, duwen, trekken, repeterende bewegingen en ongunstige houdingen":
      "Voorbeeld van directe oorzaak: medewerkers tillen, dragen, duwen, trekken of werken langdurig in ongunstige houdingen. Voorbeeld van achterliggende oorzaken: bij evident zwaar of veelvuldig tillen is de directe oorzaak dat lasten handmatig worden verplaatst. De achterliggende oorzaken kunnen zijn dat hulpmiddelen ontbreken, niet beschikbaar zijn op de werkplek, de logistiek handmatig tillen afdwingt of de planning geen ruimte geeft om hulp of hulpmiddelen te gebruiken. De analyse mag dan niet blijven steken bij 'medewerkers moeten beter tillen'; het oorzaakspatroon ligt vooral in werkplekinrichting, logistiek en organisatie.",
    Beeldschermwerk:
      "Voorbeeld van directe oorzaak: medewerkers werken langdurig aan beeldschermen met statische houding, hoge visuele belasting of weinig afwisseling. Voorbeeld van achterliggende oorzaken: werkplekken zijn onvoldoende instelbaar, medewerkers werken met meerdere systemen of hoge taakeisen, pauzes en taakafwisseling zijn niet ingebouwd of thuiswerkplekken zijn niet meegenomen in de beoordeling. De achterliggende oorzaak ligt dan in werkplekinrichting, software-/procesontwerp, werkorganisatie en hybride werken.",
    Uitzendkrachten: sharedVulnerableGroupsText,
    Stagiaires: sharedVulnerableGroupsText,
    Vrijwilligers: sharedVulnerableGroupsText,
    Anderstaligen: sharedVulnerableGroupsText,
    "Andere personen of derden, zoals bezoekers en voorbijgangers": sharedVulnerableGroupsText,
    Zwangeren: sharedSpecialProtectionText,
    Jeugdigen: sharedSpecialProtectionText,
    "Werknemers met een beperking of gedeeltelijke arbeidsongeschiktheid": sharedSpecialProtectionText,
    "Werkers die plaats- en tijdonafhankelijk werken":
      "Voorbeeld van directe oorzaak: medewerkers werken thuis, onderweg of op wisselende locaties met risico’s rond ergonomie, werkdruk, bereikbaarheid of sociale isolatie. Voorbeeld van achterliggende oorzaken: er is onvoldoende zicht op feitelijke arbeidsomstandigheden buiten de vaste werkplek, verwachtingen over bereikbaarheid zijn onduidelijk, thuiswerkplekken zijn niet beoordeeld of leidinggevenden sturen vooral op output zonder aandacht voor herstel en grenzen. De achterliggende oorzaak ligt dan in beleid, leidinggeven op afstand, werkafspraken en borging van hybride werken.",
  };

  return helpTexts[itemLabel] || "";
}

function getExecutionParticipantOptions() {
  return getExecutionParticipantData()
    .map((participant) => {
      if (participant.name && participant.role) {
        return `${participant.name} (${participant.role})`;
      }

      return participant.name || participant.role || "";
    })
    .filter(Boolean);
}

function refreshExecutionParticipantSelects() {
  const options = getExecutionParticipantOptions();

  for (const select of document.querySelectorAll('select[data-participant-select="true"]')) {
    const previousValue = select.value;
    select.innerHTML = `<option value="">Kies een persoon</option>`;

    for (const option of options) {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      select.append(optionElement);
    }

    if (options.includes(previousValue)) {
      select.value = previousValue;
    }
  }
}

function refreshRiskParticipantPickers() {
  const participantOptions = getExecutionParticipantOptions();

  for (const field of document.querySelectorAll(".risk-evidence")) {
    const picker = field.querySelector(".participant-picker");
    const store = field.querySelector(".participant-picker-store");
    if (!picker || !store) {
      continue;
    }

    const values = getParticipantPickerValues(store);
    picker.textContent = "";

    const selectedValues = values.length > 0 ? values : [""];
    for (const value of selectedValues) {
      const row = createParticipantPickerRow(value);
      updateParticipantPickerOptions(row, participantOptions, value);
      picker.append(row);
    }

    ensureParticipantPickerTrailingRow(field);
    syncParticipantPickerField(field);
  }
}

function getRiskGroupState(groupId) {
  return {
    applicable: getAnswerValue(`risk-group-${groupId}-applicable`),
    note:
      survey.querySelector(`[name="risk-group-${groupId}-applicable-note"]`)?.value.trim() || "",
  };
}

function getGroundCausesNoneState() {
  return {
    answer: getAnswerValue("ground-causes-none"),
    note: survey.querySelector('[name="ground-causes-none-note"]')?.value.trim() || "",
  };
}

function getQuestionEvidencePlaceholder(question) {
  if (question.id === "1-1-2") {
    return "Omschrijf hier de onderbouwing waaruit blijkt dat de gegevens van verzuimanalyses om inzicht te krijgen in de arbeidsgerelateerde oorzaken van het verzuim zijn meegenomen als input bij de RI&E.";
  }

  if (question.id === "1-2-1") {
    return "Omschrijf hier dat blijkt dat dit onderdeel is uitgevoerd en hoe dit aantoonbaar is uitgewerkt in de RI&E.";
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

  if (question.category === "1.2 Actualiteit" && question.type !== "risk-inventory") {
    if (selectedValue === "yes" || selectedValue === "partial") {
      return {
        label: "Controleerbaar bewijs of toelichting",
        placeholder:
          question.id === "1-2-1"
            ? "Omschrijf hier dat blijkt dat dit onderdeel is uitgevoerd en hoe dit aantoonbaar is uitgewerkt in de RI&E."
            : "Omschrijf hier waaruit blijkt dat dit onderdeel is uitgevoerd en hoe dit aantoonbaar is uitgewerkt in de RI&E.",
      };
    }

    return {
      label: "Controleerbaar bewijs of toelichting",
      placeholder: getQuestionEvidencePlaceholder(question),
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

function getNumberedRiskItemLabel(groupId, itemLabel) {
  const group = riskCatalog.find((entry) => entry.id === groupId);
  if (!group) {
    return itemLabel;
  }

  const itemIndex = group.items.findIndex((entry) => entry === itemLabel);
  if (itemIndex < 0) {
    return itemLabel;
  }

  return `${getAlphabeticLabel(itemIndex)}. ${itemLabel}`;
}

function getSupplementalRequirementConfigs(groupId, itemLabel) {
  const configs = [];

  if (itemLabel === "Jeugdigen") {
    configs.push({
      key: "youth-article",
      prompt: "Is invulling gegeven aan Arbobesluit art. 1.36: jeugdigen?",
      helpLink:
        "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=1&afdeling=8&artikel=1.36&z=2026-04-09&g=2026-04-09",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 1.36 Arbobesluit voor jeugdigen.",
      noNote: "Voor jeugdigen is geen invulling gegeven aan artikel 1.36 Arbobesluit.",
    });
  }

  if (itemLabel === "Zwangeren") {
    configs.push({
      key: "pregnancy-article",
      prompt: "Is invulling gegeven aan Arbobesluit art. 1.40: zwangere medewerkers?",
      helpLink:
        "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=1&afdeling=9&artikel=1.41&z=2026-04-09&g=2026-04-09",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 1.41 Arbobesluit voor zwangere medewerkers en medewerkers tijdens de lactatie.",
      noNote:
        "Voor zwangere medewerkers en medewerkers tijdens de lactatie is geen invulling gegeven aan artikel 1.41 Arbobesluit.",
    });
  }

  if (groupId === "biologische-agentia") {
    configs.push({
      key: "biological-article",
      prompt: "Is invulling gegeven aan Arbobesluit art. 4.85: nadere voorschriften; biologische agentia?",
      helpLink:
        "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=4&afdeling=9&paragraaf=2&artikel=4.85&z=2026-04-09&g=2026-04-09",
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
        prompt: "Is invulling gegeven aan Arbobesluit art. 4.2; nadere voorschriften; gevaarlijke stoffen?",
        helpLink:
          "http://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=4&afdeling=1&paragraaf=2&artikel=4.2",
        placeholder:
          "Omschrijf hier op welke wijze invulling is gegeven aan dit nadere voorschrift en waar dit uit blijkt.",
        noNote:
          "Voor artikel 4.2 Arbobesluit over gevaarlijke stoffen en asbest is geen invulling gegeven.",
      },
      {
        key: "hazardous-substances-article-4-2a",
        prompt: "Is invulling gegeven aan Arbobesluit art. 4.2a, aanvullende registratie R-stoffen?",
        helpLink:
          "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=4&afdeling=1&paragraaf=2&artikel=4.2a&z=2026-04-09&g=2026-04-09",
        placeholder:
          "Omschrijf hier op welke wijze invulling is gegeven aan artikel 4.2a Arbobesluit en waar dit uit blijkt.",
        noNote:
          "Voor artikel 4.2a Arbobesluit over aanvullende registratie van gevaarlijke stoffen en reproductietoxische stoffen is geen invulling gegeven.",
      },
      {
        key: "hazardous-substances-article-4-13",
        prompt: "Is invulling gegeven aan Arbobesluit art. 4.13, nadere voorschriften, CMR-stoffen?",
        helpLink:
          "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=4&afdeling=2&paragraaf=2&artikel=4.13&z=2026-04-09&g=2026-04-09",
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
          "Is invulling gegeven aan de aanvullende voorschriften van Arbobesluit hoofdstuk 2, afdeling 2; beperking van zware ongevallen met gevaarlijke stoffen?",
        helpLink:
          "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=2&afdeling=2&z=2026-04-09&g=2026-04-09",
        placeholder:
          "Omschrijf hier op welke wijze invulling is gegeven aan hoofdstuk 2, afdeling 2 van het Arbobesluit en waar dit uit blijkt.",
        noNote:
          "Voor hoofdstuk 2, afdeling 2 van het Arbobesluit ter voorkoming en beperking van zware ongevallen met gevaarlijke stoffen is geen invulling gegeven.",
      },
      {
        key: "hazardous-substances-article-4-13",
        prompt:
          "Is invulling gegeven aan Arbobesluit art. 3.5c: nadere voorschriften; explosieveiligheidsdocument?",
        helpLink:
          "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=3&afdeling=1&paragraaf=2a&artikel=3.5c&z=2026-04-09&g=2026-04-09",
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
      prompt: "Is invulling gegeven aan Arbobesluit art. 5.3: fysieke belasting?",
      helpLink:
        "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=5&afdeling=1&artikel=5.3&z=2026-04-09&g=2026-04-09",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 5.3 Arbobesluit voor fysieke belasting.",
      noNote: "Voor fysieke belasting is geen invulling gegeven aan artikel 5.3 Arbobesluit.",
    });
  }

  if (itemLabel === "Beeldschermwerk") {
    configs.push({
      key: "screen-work-article",
      prompt: "Is invulling gegeven aan Arbobesluit art. 5.9: beeldschermwerk?",
      helpLink:
        "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=5&afdeling=2&artikel=5.9&z=2026-04-09&g=2026-04-09",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 5.9 Arbobesluit voor beeldschermwerk.",
      noNote: "Voor beeldschermwerk is geen invulling gegeven aan artikel 5.9 Arbobesluit.",
    });
  }

  if (itemLabel === "Schadelijk of hinderlijk geluid") {
    configs.push({
      key: "noise-article-6-7",
      prompt: "Is invulling gegeven aan Arbobesluit art. 6.7: nadere voorschriften; geluid.",
      helpLink:
        "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=6&afdeling=3&paragraaf=2&artikel=6.7&z=2026-04-09&g=2026-04-09",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.7 Arbobesluit voor geluid.",
      noNote: "Voor geluid is geen invulling gegeven aan artikel 6.7 Arbobesluit.",
    });
  }

  if (itemLabel === "Trillingen en schokken") {
    configs.push({
      key: "vibration-article-6-11b",
      prompt: "Is invulling gegeven aan Arbobesluit art. 6.11b: nadere voorschriften; trillingen?",
      helpLink:
        "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=6&afdeling=3a&paragraaf=2&artikel=6.11b&z=2026-04-09&g=2026-04-09",
      placeholder:
        "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.11b Arbobesluit voor trillingen.",
      noNote: "Voor trillingen is geen invulling gegeven aan artikel 6.11b Arbobesluit.",
    });
  }

  if (itemLabel === "Straling, zoals niet-ioniserende straling, uv-straling en kunstmatige optische straling") {
    configs.push(
      {
        key: "optical-radiation-article-6-12d",
        prompt: "Is invulling gegeven aan Arbobesluit art. 6.12d; optische straling?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.12d Arbobesluit voor optische straling.",
        noNote: "Voor optische straling is geen invulling gegeven aan artikel 6.12d Arbobesluit.",
      },
      {
        key: "emf-article-6-12k",
        prompt: "Is invulling gegeven aan Arbobesluit art. 6.12k: nadere voorschriften; elektromagnetische velden?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 6.12k Arbobesluit voor elektromagnetische velden.",
        noNote: "Voor elektromagnetische velden is geen invulling gegeven aan artikel 6.12k Arbobesluit.",
      }
    );
  }

  if (itemLabel === "Arbeidsmiddelen: geschiktheid, beschikbaarheid, bevoegd gebruik, keuringen en onderhoud") {
    configs.push(
      {
        key: "work-equipment-article-7-3",
        prompt: "Is invulling gegeven aan Arbobesluit art. 7.3: geschiktheid van arbeidsmiddelen?",
        helpLink:
          "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=7&afdeling=1&artikel=7.3&z=2026-04-09&g=2026-04-09",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 7.3 Arbobesluit voor arbeidsmiddelen.",
        noNote: "Voor arbeidsmiddelen is geen invulling gegeven aan artikel 7.3 Arbobesluit.",
      },
      {
        key: "work-height-article-7-23",
        prompt:
          "Is invulling gegeven aan Arbobesluit art. 7.23: algemene eisen voor tijdelijke werkzaamheden op hoogte?",
        helpLink:
          "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=7&afdeling=4&paragraaf=2b&artikel=7.23&z=2026-04-09&g=2026-04-09",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 7.23 Arbobesluit voor werkzaamheden op hoogte.",
        noNote: "Voor werkzaamheden op hoogte is geen invulling gegeven aan artikel 7.23 Arbobesluit.",
      },
      {
        key: "rope-access-article-7-23c",
        prompt: "Is invulling gegeven aan Arbobesluit art. 7.23c: werken met lijnen.",
        helpLink:
          "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=7&afdeling=4&paragraaf=2b&artikel=7.23c&z=2026-04-09&g=2026-04-09",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 7.23c Arbobesluit.",
        noNote: "Voor toegangs- en positioneringstechnieken met lijnen is geen invulling gegeven aan artikel 7.23c Arbobesluit.",
      },
      {
        key: "work-platform-article-7-23d",
        prompt: "Is invulling gegeven aan Arbobesluit art. 7.23d: werkbakken en werkplatforms?",
        placeholder:
          "Omschrijf hier waaruit blijkt dat invulling is gegeven aan artikel 7.23d Arbobesluit.",
        noNote: "Voor werkbakken en werkplatforms is geen invulling gegeven aan artikel 7.23d Arbobesluit.",
      }
    );
  }

  if (itemLabel === "Persoonlijke beschermingsmiddelen: noodzaak, geschiktheid, keuringen en onderhoud") {
    configs.push({
      key: "ppe-article-8-2",
      prompt: "Is invulling gegeven aan Arbobesluit art. 8.2: keuze van PBM?",
      helpLink:
        "https://wetten.overheid.nl/jci1.3:c:BWBR0008498&hoofdstuk=8&afdeling=1&artikel=8.2&z=2026-04-09&g=2026-04-09",
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
      Doorloop per hoofd- en deelrisico eerst of het van toepassing is, wie het risico heeft
      beoordeeld en welke methode daarbij gebruikt is.
    </p>
  `;
  intro.append(
    createInlineHelpToggle(
      "Is een risico van toepassing, dan moet het risico worden beschreven. Maar niet elk theoretisch risico is in de praktijk relevant. Wanneer een risico wordt uitgesloten, moet dit worden onderbouwd met objectieve argumenten en gebaseerd zijn op een goed inzicht in de werksituatie – in het bijzonder wanneer het risico is opgenomen in de arbocatalogus - tenzij geheel evident. Daarmee wordt voor de toetser duidelijk dat het risico bewust is afgewogen en niet over het hoofd is gezien."
    )
  );
  inventory.append(intro);

  for (const group of riskCatalog) {
    const groupCard = document.createElement("details");
    groupCard.className = "risk-group";
    groupCard.dataset.groupId = group.id;

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

    if (group.id !== "biologische-agentia") {
      const groupApplicability = document.createElement("div");
      groupApplicability.className = "risk-question-block risk-group-applicability";
      groupApplicability.dataset.groupId = group.id;

      const groupApplicabilityQuestion = document.createElement("p");
      groupApplicabilityQuestion.className = "risk-question";
      groupApplicabilityQuestion.textContent = `Is ${formatThemeQuestionLabel(group.title)} als hoofdthema van toepassing op de organisatie binnen de reikwijdte van de RI&E?`;

      const groupApplicabilityOptions = createBinaryOptions(
        `risk-group-${group.id}-applicable`,
        [
          { value: "yes", label: "Van toepassing" },
          { value: "no", label: "Niet van toepassing" },
        ],
        null
      );

      const groupApplicabilityNote = createEvidenceField(
        `risk-group-${group.id}-applicable-note`,
        "Beschrijf hier waarom dit hoofdthema niet van toepassing is binnen de organisatie of waarom dit hoofdthema buiten de scope van deze RI&E valt."
      );
      groupApplicabilityNote.hidden = true;

      groupApplicability.append(
        groupApplicabilityQuestion,
        groupApplicabilityOptions,
        groupApplicabilityNote
      );
      content.append(groupApplicability);
    }

    const head = document.createElement("div");
    head.className = "risk-table-head";
    head.innerHTML = `
      <div>Hoofd- of deelrisico</div>
      <div>Van toepassing?</div>
      <div>Beschreven in RI&E?</div>
      <div>Waarom niet beschreven?</div>
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
      const itemHelpText = getRiskItemHelpText(itemLabel);
      if (itemHelpText) {
        header.append(createInlineHelpToggle(itemHelpText));
      }
      item.append(header);

      const applicability = createRiskColumn(
        "Is dit hoofd- of deelrisico van toepassing op de organisatie binnen de reikwijdte van de RI&E?",
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
        createInlineHelpToggle(
          "Indien een risico van toepassing is, moet dit herkenbaar en inhoudelijk worden beschreven. Wanneer een deelrisico niet is beschreven of onjuist als niet van toepassing is beoordeeld, is de RI&E niet compleet. Omdat binnen één hoofdrisico meerdere deelrisico’s relevant kunnen zijn, moeten deze allemaal worden meegenomen."
        )
      );
      described.append(
        createRiskTextField(
          `risk-${itemId}-described-yes-note`,
          "Waar is dit onderdeel terug te vinden in de RI&E?",
          "Omschrijf hier waar dit onderdeel terug te vinden is in de RI&E."
        )
      );
      described.append(
        createRiskParticipantPickerField(
          `risk-${itemId}-assessor`,
          "Wie heeft dit risico beoordeeld?"
        )
      );
      described.append(
        createRiskTextField(
          `risk-${itemId}-assessment-method`,
          "Welke methode is gebruikt om het risico te inventariseren?",
          "Omschrijf hier welke methode is gebruikt om dit risico te inventariseren."
        )
      );
      described.append(createRiskMethodHelp());
      described.append(
        createRiskTextField(
          `risk-${itemId}-evaluation-method`,
          "Welke methode is gebruikt om het risico te evalueren?",
          "Omschrijf hier welke methode is gebruikt om dit risico te evalueren (voor het bepalen van de risicoklasse)."
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
      whyNot.append(
        createInlineHelpToggle(
          "Soms is bij de start van de RI&E al duidelijk dat bepaalde risico's dermate complex of omvangrijk zijn dat hiervoor een afzonderlijk RI&E-traject nodig is. Een voorbeeld hiervan kan zijn explosiegevaar. In dergelijke gevallen is het van belang dit expliciet en gemotiveerd te vermelden, met de kanttekening dat de RI&E op dat punt nog niet compleet en dus ook niet volledig is."
        )
      );
      appendRiskEvidenceField(
        whyNot,
        `risk-${itemId}-described-no-note`,
        "Onderbouw hier wat de reden is waarom dit risico niet is opgenomen in de RI&E."
      );
      item.append(whyNot);

      content.append(item);
    }

    groupCard.append(content);
    inventory.append(groupCard);
  }

  container.append(inventory);
}

function renderSupplementalRequirementsQuestion(container) {
  const card = document.createElement("details");
  card.className = "question-card question-card-wide";
  card.dataset.questionId = "supplemental-requirements";

  const summary = document.createElement("summary");
  summary.className = "question-card-toggle";
  summary.innerHTML = `
    <div class="question-summary-copy">
      <p class="question-category">1.1 Volledigheid</p>
      <h3 class="question-title">Is per deelrisico invulling gegeven aan de nadere voorschriften?</h3>
    </div>
    <span class="question-card-chevron">⌄</span>
  `;

  const body = document.createElement("div");
  body.className = "question-body";

  const copy = document.createElement("div");
  copy.className = "question-copy";
  copy.innerHTML = `
    <p class="question-help">
      Beoordeel hier per relevant deelrisico of invulling is gegeven aan de nadere voorschriften.
      Hoofdthema’s of deelrisico’s die in het risicoprofiel als niet van
      toepassing zijn beoordeeld, hoeft u hier niet verder in te vullen.
    </p>
  `;
  copy.append(
    createInlineHelpToggle(
      "Voor bepaalde risico’s gelden, naast de algemene RI&E-verplichting, aanvullende wettelijke eisen met betrekking tot inventarisatie, beoordeling en documentatie. Deze zijn opgenomen in bijlage 2: Nadere of aanvullende RI&E-voorschriften uit het Arbeidsomstandighedenbesluit (AB) en de Arbeidsomstandighedenregeling (AR). Daarnaast kunnen, afhankelijk van de sector, ook aanvullende eisen voortvloeien uit brancheafspraken, arbocatalogus of specifieke cao-bepalingen."
    )
  );

  const optionGroup = document.createElement("div");
  optionGroup.className = "question-options";

  const inventory = document.createElement("div");
  inventory.className = "risk-inventory";

  for (const group of riskCatalog) {
    const groupCard = document.createElement("details");
    groupCard.className = "risk-group supplemental-group";
    groupCard.dataset.groupId = group.id;

    const groupSummary = document.createElement("summary");
    groupSummary.className = "risk-group-toggle";

    const summaryCopy = document.createElement("div");
    const title = document.createElement("h4");
    title.className = "risk-group-title";
    title.textContent = group.title;
    summaryCopy.append(title);

    const chevron = document.createElement("span");
    chevron.className = "risk-group-chevron";
    chevron.textContent = "⌄";

    groupSummary.append(summaryCopy, chevron);
    groupCard.append(groupSummary);

    const content = document.createElement("div");
    content.className = "risk-group-content";

    const statusNote = document.createElement("p");
    statusNote.className = "risk-group-disabled-note";
    statusNote.hidden = true;
    content.append(statusNote);

    for (const [itemIndex, itemLabel] of group.items.entries()) {
      const itemId = `${group.id}-${slugify(itemLabel)}`;
      const configs = getSupplementalRequirementConfigs(group.id, itemLabel);
      if (configs.length === 0) {
        continue;
      }

      const item = document.createElement("article");
      item.className = "risk-item supplemental-item";
      item.dataset.itemId = itemId;
      item.dataset.groupId = group.id;
      item.dataset.itemLabel = itemLabel;
      item.hidden = true;

      const header = document.createElement("div");
      header.className = "risk-item-header";

      const label = document.createElement("p");
      label.className = "risk-item-label";
      label.textContent = `${getAlphabeticLabel(itemIndex)}. ${itemLabel}`;
      header.append(label);

      const sub = document.createElement("p");
      sub.className = "risk-item-sub";
      sub.textContent = "Beoordeel hier of invulling is gegeven aan de toepasselijke nadere voorschriften.";
      header.append(sub);
      item.append(header);

      for (const config of configs) {
        const supplementalBlock = createRiskColumn(
          config.prompt,
          config.key,
          [
            { value: "yes", label: "Ja" },
            { value: "no", label: "Nee" },
          ],
          itemId,
          config.helpLink ? { url: config.helpLink, text: config.helpLink } : null
        );
        const noteField = appendRiskEvidenceField(
          supplementalBlock,
          `risk-${itemId}-${config.key}-note`,
          config.placeholder
        );
        noteField.dataset.supplementalNoteField = "true";
        supplementalBlock.append(createSupplementalNoReasonField(itemId, config.key));
        item.append(supplementalBlock);
      }

      content.append(item);
    }

    groupCard.append(content);
    inventory.append(groupCard);
  }

  optionGroup.append(inventory);
  body.append(copy, optionGroup);
  card.append(summary, body);
  container.append(card);
}

function renderGroundCausesQuestion(container) {
  const card = document.createElement("details");
  card.className = "question-card question-card-wide";
  card.dataset.questionId = "ground-causes";

  const summary = document.createElement("summary");
  summary.className = "question-card-toggle";
  summary.innerHTML = `
    <div class="question-summary-copy">
      <p class="question-category">1.1 Volledigheid</p>
      <h3 class="question-title">Zijn per relevant deelrisico de grondoorzaken in de RI&amp;E geïnventariseerd?</h3>
    </div>
    <span class="question-card-chevron">⌄</span>
  `;

  const body = document.createElement("div");
  body.className = "question-body";

  const copy = document.createElement("div");
  copy.className = "question-copy";
  copy.innerHTML = `
    <p class="question-help">
      Beoordeel per hoofd- en deelrisico of de grondoorzaken in de RI&amp;E zijn geïnventariseerd.
      Deze stap is alleen relevant voor deelrisico’s die in het risicoprofiel als van toepassing en
      beschreven zijn aangemerkt.
    </p>
  `;
  copy.append(
    createInlineHelpToggle(
      "Een RI&E beschrijft niet alleen welke risico’s aanwezig zijn, maar ook waardoor deze risico’s ontstaan of blijven bestaan. Het gaat dus niet alleen om het zichtbare probleem, maar ook om het oorzaakspatroon daarachter. Bij elk relevant thema of risico wordt verwacht dat is nagedacht over de stap van risico naar directe oorzaak en vervolgens naar achterliggende oorzaak. De directe oorzaak is meestal wat direct zichtbaar is in de werksituatie. De achterliggende oorzaak is de onderliggende risicobron die verklaart waarom het risico aanwezig is, terugkeert of onvoldoende wordt beheerst. Daarbij kan worden gekeken naar factoren zoals techniek, inrichting van de werkplek, organisatie van het werk, planning en werkdruk, onderhoud, toezicht, kennis en instructie, communicatie, gedrag en veiligheidscultuur. Het is niet nodig om voor ieder risico een uitgebreide oorzakenanalyse uit te voeren. Wel moet uit de RI&E blijken dat niet alleen symptomen zijn benoemd, maar ook de factoren die het risico veroorzaken, versterken of in stand houden. Gedrag kan daarbij een rol spelen, maar is zelden de enige verklaring. Als medewerkers veilig of gezond werken lastig kunnen volhouden, kan daarachter ook een gebrek aan tijd, hulpmiddelen, toezicht, duidelijke instructie of een onhandige werkwijze zitten. Een voorbeeld: als in de RI&E wordt vastgesteld dat medewerkers veel en zwaar moeten tillen, en het met gezond verstand duidelijk is dat de fysieke belasting te hoog is, dan is de directe oorzaak dat materialen handmatig worden verplaatst. De achterliggende oorzaken kunnen zijn dat tilhulpmiddelen ontbreken of niet beschikbaar zijn op de plek waar het werk plaatsvindt, dat de werkvoorraad of logistiek zo is ingericht dat handmatig tillen onvermijdelijk wordt, of dat de planning te weinig ruimte laat om het werk met hulp of hulpmiddelen uit te voeren. De RI&E maakt dan zichtbaar dat het risico niet alleen ontstaat doordat medewerkers tillen, maar ook door achterliggende oorzaken in werkplekinrichting, organisatie en werkdruk. Dat betekent ook dat de analyse niet mag blijven steken bij een oppervlakkige verklaring zoals 'medewerkers moeten beter tillen'. Voorlichting over tiltechniek kan nuttig zijn, maar is bij een evident te zware tilbelasting geen passende hoofdverklaring en meestal ook geen voldoende maatregel. De RI&E moet dan laten zien waarom het vele tillen nodig is geworden en welke onderliggende factoren maken dat deze belasting blijft bestaan. Daarmee wordt voorkomen dat het risico wordt teruggebracht tot gedrag van medewerkers, terwijl de oorzaak vooral in de inrichting of organisatie van het werk ligt. Op deze manier laat de RI&E zien dat per thema is gekeken naar de onderliggende factoren die bepalend zijn voor het risico. Daardoor wordt duidelijk of een risico vooral samenhangt met bijvoorbeeld een technische tekortkoming, een organisatorisch knelpunt, onvoldoende kennis, gebrekkig toezicht, werkdruk of gedrag dat door de werksituatie wordt uitgelokt."
    )
  );

  const optionGroup = document.createElement("div");
  optionGroup.className = "question-options";

  const inventory = document.createElement("div");
  inventory.className = "risk-inventory";

  const generalBlock = document.createElement("div");
  generalBlock.className = "risk-intro";
  generalBlock.innerHTML = `
    <strong>Algemene keuze grondoorzaken</strong>
    <p>
      Geef hieronder aan als op geen van de relevante deelrisico’s grondoorzaken zijn benoemd. Dan
      hoeft u de afzonderlijke deelrisico’s in deze stap niet meer één voor één in te vullen.
    </p>
  `;

  const generalOptions = createBinaryOptions(
    "ground-causes-none",
    [
      { value: "yes", label: "Op geen van de relevante deelrisico's zijn grondoorzaken benoemd" },
    ],
    null
  );
  generalOptions.classList.add("binary-options-stacked");
  generalBlock.append(generalOptions);

  const generalNote = createEvidenceField(
    "ground-causes-none-note",
    "Licht hier toe waarom op geen van de relevante deelrisico's grondoorzaken zijn benoemd."
  );
  generalNote.hidden = true;
  generalBlock.append(generalNote);
  inventory.append(generalBlock);

  for (const group of riskCatalog) {
    const groupCard = document.createElement("details");
    groupCard.className = "risk-group cause-group";
    groupCard.dataset.groupId = group.id;

    const groupSummary = document.createElement("summary");
    groupSummary.className = "risk-group-toggle";

    const summaryCopy = document.createElement("div");
    const title = document.createElement("h4");
    title.className = "risk-group-title";
    title.textContent = group.title;
    summaryCopy.append(title);

    const chevron = document.createElement("span");
    chevron.className = "risk-group-chevron";
    chevron.textContent = "⌄";

    groupSummary.append(summaryCopy, chevron);
    groupCard.append(groupSummary);

    const content = document.createElement("div");
    content.className = "risk-group-content";

    const statusNote = document.createElement("p");
    statusNote.className = "risk-group-disabled-note";
    statusNote.hidden = true;
    content.append(statusNote);

    for (const [itemIndex, itemLabel] of group.items.entries()) {
      const itemId = `${group.id}-${slugify(itemLabel)}`;
      const item = document.createElement("article");
      item.className = "risk-item cause-item";
      item.dataset.itemId = itemId;
      item.dataset.groupId = group.id;
      item.dataset.itemLabel = itemLabel;
      item.hidden = true;

      const header = document.createElement("div");
      header.className = "risk-item-header";

      const label = document.createElement("p");
      label.className = "risk-item-label";
      label.textContent = `${getAlphabeticLabel(itemIndex)}. ${itemLabel}`;
      header.append(label);

      const sub = document.createElement("p");
      sub.className = "risk-item-sub";
      sub.textContent = "Beoordeel hier of de grondoorzaken van dit deelrisico in de RI&E zijn geïnventariseerd.";
      header.append(sub);
      const groundCauseHelpText = getGroundCauseItemHelpText(itemLabel);
      if (groundCauseHelpText) {
        header.append(createInlineHelpToggle(groundCauseHelpText));
      }
      item.append(header);

      const causes = createRiskColumn(
        "Zijn de grondoorzaken van dit risico in de RI&E geïnventariseerd?",
        "causes",
        [
          { value: "yes", label: "Ja" },
          { value: "no", label: "Nee" },
        ],
        itemId
      );
      appendRiskEvidenceField(
        causes,
        `risk-${itemId}-causes-yes-note`,
        "Beschrijf hier waaruit blijkt dat de grondoorzaken van dit risico zijn geïnventariseerd."
      );
      causes.append(createGroundCauseNoReasonField(itemId));
      item.append(causes);

      content.append(item);
    }

    groupCard.append(content);
    inventory.append(groupCard);
  }

  optionGroup.append(inventory);
  body.append(copy, optionGroup);
  card.append(summary, body);
  container.append(card);
}

function renderQuestions() {
  if (questionGroupsRisk) {
    questionGroupsRisk.textContent = "";
  }

  if (questionGroupsCauses) {
    questionGroupsCauses.textContent = "";
  }

  if (questionGroupsSupplemental) {
    questionGroupsSupplemental.textContent = "";
  }

  if (questionGroupsRegular) {
    questionGroupsRegular.textContent = "";
  }

  if (questionGroupsPlan) {
    questionGroupsPlan.textContent = "";
  }

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

    let targetGroup = questionGroupsRegular;

    if (question.id === "1-1-1") {
      targetGroup = questionGroupsRisk;
    } else if (question.id.startsWith("2-")) {
      targetGroup = questionGroupsPlan;
    }

    targetGroup?.append(fragment);
  }

  if (questionGroupsCauses) {
    renderGroundCausesQuestion(questionGroupsCauses);
  }

  if (questionGroupsSupplemental) {
    renderSupplementalRequirementsQuestion(questionGroupsSupplemental);
  }
}

function getAnswerValue(questionId) {
  const selected = survey.querySelector(`input[name="${questionId}"]:checked`);
  return selected ? selected.value : null;
}

function getRiskItemState(groupId, groupTitle, itemLabel) {
  const itemId = `${groupId}-${slugify(itemLabel)}`;
  const groupState = getRiskGroupState(groupId);
  const globalCausesState = getGroundCausesNoneState();
  const itemApplicable = getAnswerValue(`risk-${itemId}-applicable`);
  const applicable = groupState.applicable === "no" ? "no" : itemApplicable;
  const described = getAnswerValue(`risk-${itemId}-described`);
  const justified = getAnswerValue(`risk-${itemId}-justified`);
  const rawCauses = getAnswerValue(`risk-${itemId}-causes`);
  const causes =
    applicable === "yes" && described === "yes" && globalCausesState.answer === "yes"
      ? "no"
      : rawCauses;
  const supplementalConfigs = getSupplementalRequirementConfigs(groupId, itemLabel);
  const supplementalAnswers = Object.fromEntries(
    supplementalConfigs.map((config) => [config.key, getAnswerValue(`risk-${itemId}-${config.key}`)])
  );
  const applicabilityNote =
    groupState.applicable === "no"
      ? groupState.note
      : survey.querySelector(`[name="risk-${itemId}-applicable-note"]`)?.value.trim() || "";
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
  const causesNoReason = getAnswerValue(`risk-${itemId}-causes-no-reason`);
  const causesNoNote =
    globalCausesState.answer === "yes"
      ? globalCausesState.note
      : survey.querySelector(`[name="risk-${itemId}-causes-no-note"]`)?.value.trim() || "";
  const supplementalNotes = Object.fromEntries(
    supplementalConfigs.map((config) => [
      config.key,
      survey.querySelector(`[name="risk-${itemId}-${config.key}-note"]`)?.value.trim() || "",
    ])
  );
  const supplementalNoReasons = Object.fromEntries(
    supplementalConfigs.map((config) => [
      config.key,
      getAnswerValue(`risk-${itemId}-${config.key}-no-reason`),
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
    causesNoReason,
    causesNoNote,
    supplementalNotes,
    supplementalNoReasons,
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

function isNamedFieldFilled(name) {
  return getPlainValue(survey.querySelector(`[name="${CSS.escape(name)}"]`)?.value || "") !== "";
}

function areSectionFieldsFilled(container) {
  if (!container) {
    return false;
  }

  const fields = Array.from(container.querySelectorAll("input[name], textarea[name], select[name]")).filter(
    (field) => field.type !== "radio" && field.type !== "checkbox"
  );

  return fields.length > 0 && fields.every((field) => getPlainValue(field.value) !== "");
}

function isScopeStepComplete() {
  if (!rieName.value || !scopeDescription.value || !rieDate.value || !rieDocuments.value) {
    return false;
  }

  const participants = getExecutionParticipantData();
  if (participants.length === 0) {
    return false;
  }

  return participants.every((participant) => participant.name && participant.role && participant.method);
}

function isRiskProfileStepComplete() {
  for (const group of riskCatalog) {
    const hasGroupApplicability = group.id !== "biologische-agentia";
    const groupState = getRiskGroupState(group.id);

    if (hasGroupApplicability) {
      if (!groupState.applicable) {
        return false;
      }

      if (groupState.applicable === "no") {
        if (!groupState.note) {
          return false;
        }
        continue;
      }
    }

    for (const itemLabel of group.items) {
      const item = getRiskItemState(group.id, group.title, itemLabel);

      if (!item.applicable) {
        return false;
      }

      if (item.applicable === "no") {
        if (!item.applicabilityNote) {
          return false;
        }
        continue;
      }

      if (!item.described) {
        return false;
      }

      if (item.described === "yes") {
        if (!item.describedYesNote || !item.assessorNote || !item.assessmentMethodNote || !item.evaluationMethodNote) {
          return false;
        }
      }

      if (item.described === "no") {
        if (!item.justified || !item.describedNoNote) {
          return false;
        }
      }
    }
  }

  return true;
}

function getRelevantGroundCauseItems() {
  return riskCatalog.flatMap((group) =>
    group.items
      .map((itemLabel) => getRiskItemState(group.id, group.title, itemLabel))
      .filter((item) => item.applicable === "yes" && item.described === "yes")
  );
}

function isGroundCausesStepComplete() {
  const noneState = getGroundCausesNoneState();
  if (noneState.answer === "yes") {
    return noneState.note !== "";
  }

  const items = getRelevantGroundCauseItems();
  if (items.length === 0) {
    return false;
  }

  return items.every((item) => {
    if (!item.causes) {
      return false;
    }

    if (item.causes === "yes") {
      return item.causesYesNote !== "";
    }

    if (item.causes === "no") {
      if (!item.causesNoReason) {
        return false;
      }

      if (item.causesNoReason === "anders") {
        return item.causesNoNote !== "";
      }

      return true;
    }

    return false;
  });
}

function getRelevantSupplementalConfigs() {
  return riskCatalog.flatMap((group) =>
    group.items.flatMap((itemLabel) => {
      const item = getRiskItemState(group.id, group.title, itemLabel);
      if (!(item.applicable === "yes" && item.described === "yes")) {
        return [];
      }

      return getSupplementalRequirementConfigs(group.id, itemLabel).map((config) => ({
        item,
        config,
      }));
    })
  );
}

function isSupplementalStepComplete() {
  const entries = getRelevantSupplementalConfigs();
  if (entries.length === 0) {
    return false;
  }

  return entries.every(({ item, config }) => {
    const answer = item.supplementalAnswers?.[config.key];
    const note = item.supplementalNotes?.[config.key] || "";
    const noReason = item.supplementalNoReasons?.[config.key] || null;

    if (!answer) {
      return false;
    }

    if (answer === "yes") {
      return note !== "";
    }

    if (answer === "no") {
      if (!noReason) {
        return false;
      }

      if (noReason === "anders") {
        return note !== "";
      }

      return true;
    }

    return false;
  });
}

function isQuestionSetComplete(questionSet) {
  if (questionSet.length === 0) {
    return false;
  }

  return questionSet.every((question) => {
    const answer = getAnswerValue(question.id);
    if (!answer) {
      return false;
    }

    if (!shouldShowQuestionEvidence(question, answer)) {
      return true;
    }

    return isNamedFieldFilled(`question-${question.id}-note`);
  });
}

function isWizardStepComplete(step) {
  if (step === 1) {
    return areSectionFieldsFilled(profileSectionContent);
  }

  if (step === 2) {
    return isScopeStepComplete();
  }

  if (step === 3) {
    return isRiskProfileStepComplete();
  }

  if (step === 4) {
    return isGroundCausesStepComplete();
  }

  if (step === 5) {
    return isSupplementalStepComplete();
  }

  if (step === 6) {
    return isQuestionSetComplete(
      questions.filter((question) => question.id !== "1-1-1" && question.id.startsWith("1-"))
    );
  }

  if (step === 7) {
    return isQuestionSetComplete(questions.filter((question) => question.id.startsWith("2-")));
  }

  if (step === 8) {
    return [1, 2, 3, 4, 5, 6, 7].every((stepNumber) => isWizardStepComplete(stepNumber));
  }

  return false;
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
  const contact = rieAssessorName?.value.trim() || contactName.value.trim();
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

function formatReportLabel(label) {
  return label.trim().endsWith("?") ? label : `${label}:`;
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
  const lines = ["Uitkomst risicoprofiel", ""];

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
        item.causesNoReason ||
        item.causesNoNote ||
        Object.values(item.supplementalAnswers || {}).some(Boolean) ||
        Object.values(item.supplementalNotes || {}).some(Boolean);

      if (!hasAnyData) {
        continue;
      }

      groupLines.push(`${item.groupTitle} - ${getNumberedRiskItemLabel(group.id, item.itemLabel)}`);

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

      if (item.causesNoReason) {
        groupLines.push(
          `Reden waarom de grondoorzaken niet zijn meegenomen: ${getGroundCauseNoReasonLabel(item.causesNoReason)}`
        );
      }
      if (item.causesNoReason === "anders" && item.causesNoNote) {
        groupLines.push(`Toelichting andere reden: ${item.causesNoNote}`);
      }

      for (const config of supplementalConfigs) {
        const answer = item.supplementalAnswers?.[config.key];
        const note = item.supplementalNotes?.[config.key];
        const noReason = item.supplementalNoReasons?.[config.key];

        if (answer) {
          groupLines.push(`${config.prompt} ${getPlainOptionLabel(requirementsOptions, answer)}`);
        }

        if (answer === "no" && noReason) {
          groupLines.push(
            `Reden waarom geen invulling is gegeven: ${getSupplementalNoReasonLabel(noReason)}`
          );
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

function buildRelevantRegularQuestionReportLines(sectionTitle, items) {
  const lines = [sectionTitle, ""];
  let hasContent = false;

  for (const question of items) {
    const answer = getAnswerValue(question.id);
    const note = getPlainValue(
      survey.querySelector(`[name="question-${question.id}-note"]`)?.value || ""
    );

    if (!answer && !note) {
      continue;
    }

    const evidenceConfig = getQuestionEvidenceConfig(question, answer);
    hasContent = true;
    lines.push(getDisplayQuestionTitle(question));
    lines.push(`Antwoord: ${getPlainOptionLabel(getQuestionOptions(question), answer)}`);

    if (note) {
      lines.push(`${formatReportLabel(evidenceConfig.label || "Controleerbaar bewijs of toelichting")} ${note}`);
    }

    lines.push("");
  }

  return hasContent ? lines : [];
}

function buildRelevantRiskInventoryReportLines() {
  const lines = ["Uitwerking vraag 1.1.1", ""];
  let hasContent = false;
  const addQuestionAnswer = (targetLines, questionText, answerText) => {
    if (!questionText || !answerText) {
      return;
    }

    targetLines.push(questionText);
    targetLines.push(`Antwoord: ${answerText}`);
  };

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
        item.causesNoReason ||
        item.causesNoNote ||
        Object.values(item.supplementalAnswers || {}).some(Boolean) ||
        Object.values(item.supplementalNotes || {}).some(Boolean);

      if (!hasAnyData) {
        continue;
      }

      hasContent = true;
      groupLines.push(group.title);
      groupLines.push(`${item.groupTitle} - ${getNumberedRiskItemLabel(group.id, item.itemLabel)}`);

      if (item.applicable) {
        addQuestionAnswer(
          groupLines,
          "Is het risico van toepassing?",
          getPlainOptionLabel(yesNoOptions, item.applicable)
        );
      }

      if (item.applicable === "no") {
        if (item.applicabilityNote) {
          addQuestionAnswer(
            groupLines,
            "Indien niet van toepassing: toelichting",
            item.applicabilityNote
          );
        }
      }

      if (item.applicable === "yes") {
        if (item.described) {
          addQuestionAnswer(
            groupLines,
            "Is het risico beschreven in de RI&E?",
            getPlainOptionLabel(yesNoOptions, item.described)
          );
        }

        if (item.described === "yes") {
          if (item.describedYesNote) {
            addQuestionAnswer(
              groupLines,
              "Waar is dit onderdeel terug te vinden in de RI&E?",
              item.describedYesNote
            );
          }
          if (item.assessorNote) {
            addQuestionAnswer(groupLines, "Wie heeft dit risico beoordeeld?", item.assessorNote);
          }
          if (item.assessmentMethodNote) {
            addQuestionAnswer(
              groupLines,
              "Welke methode is gebruikt om het risico te inventariseren?",
              item.assessmentMethodNote
            );
          }
          if (item.evaluationMethodNote) {
            addQuestionAnswer(
              groupLines,
              "Welke methode is gebruikt om het risico te evalueren?",
              item.evaluationMethodNote
            );
          }
          if (item.causes) {
            addQuestionAnswer(
              groupLines,
              "Zijn de grondoorzaken van dit risico in de RI&E geïnventariseerd?",
              getPlainOptionLabel(yesNoOptions, item.causes)
            );
          }
          if (item.causes === "yes" && item.causesYesNote) {
            addQuestionAnswer(
              groupLines,
              "Waaruit blijkt dat de grondoorzaken zijn geïnventariseerd?",
              item.causesYesNote
            );
          }
          if (item.causes === "no") {
            if (item.causesNoReason) {
              addQuestionAnswer(
                groupLines,
                "Reden waarom de grondoorzaken niet zijn meegenomen",
                getGroundCauseNoReasonLabel(item.causesNoReason)
              );
            }
            if (item.causesNoReason === "anders" && item.causesNoNote) {
              addQuestionAnswer(groupLines, "Toelichting andere reden", item.causesNoNote);
            }
          }

          for (const config of supplementalConfigs) {
            const answer = item.supplementalAnswers?.[config.key];
            const note = item.supplementalNotes?.[config.key];
            const noReason = item.supplementalNoReasons?.[config.key];
            if (!answer && !note) {
              continue;
            }
            addQuestionAnswer(
              groupLines,
              config.prompt,
              getPlainOptionLabel(requirementsOptions, answer)
            );
            if (answer === "no" && noReason) {
              addQuestionAnswer(
                groupLines,
                "Reden waarom geen invulling is gegeven",
                getSupplementalNoReasonLabel(noReason)
              );
            }
            if (note) {
              addQuestionAnswer(groupLines, "Waaruit blijkt dat er invulling aan gegeven is?", note);
            }
          }
        }

        if (item.described === "no") {
          if (item.justified) {
            addQuestionAnswer(
              groupLines,
              "Kunt u verantwoorden waarom het risico niet beschreven is in de RI&E?",
              getPlainOptionLabel(yesNoOptions, item.justified)
            );
          }
          if (item.describedNoNote) {
            addQuestionAnswer(groupLines, "Reden waarom dit risico niet is opgenomen", item.describedNoNote);
          }
        }
      }

      groupLines.push("");
    }

    if (groupLines.length > 0) {
      lines.push(...groupLines);
    }
  }

  return hasContent ? lines : [];
}

function buildRelevantReportPdfText() {
  const assessment = computeAssessment();
  const lines = [
    "RI&E toetsklaar-rapport",
    `Gegenereerd op ${new Intl.DateTimeFormat("nl-NL", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Amsterdam",
    }).format(new Date())}`,
    "",
    "Bedrijfsprofiel",
    `Bedrijfsnaam: ${getPlainValue(companyName.value)}`,
    `Contactpersoon: ${getPlainValue(contactName.value)}`,
    `E-mailadres contactpersoon: ${getPlainValue(contactEmail?.value || "")}`,
    `Naam invuller RI&E-toets: ${getPlainValue(rieAssessorName?.value || "")}`,
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
    "Documenten die behoren tot de te toetsen RI&E:",
    getPlainValue(rieDocuments.value),
    "",
  ];

  const riskLines = buildRelevantRiskInventoryReportLines();
  const regularLines = buildRelevantRegularQuestionReportLines(
    "Uitkomst RI&E-kwaliteit",
    [
      ...getQuestionStatusItems().filter((question) => question.category === "1.1 Volledigheid"),
      ...getQuestionStatusItems().filter(
        (question) =>
          question.category === "1.2 Actualiteit" ||
          question.category === "1.3 Actuele inzichten" ||
          question.category === "1.4 Betrouwbaarheid"
      ),
    ]
  );
  const planLines = buildRelevantRegularQuestionReportLines(
    "Uitkomsten plan van aanpak",
    getPlanStatusItems()
  );

  if (riskLines.length > 0) {
    lines.push(...riskLines);
  }
  if (regularLines.length > 0) {
    lines.push(...regularLines);
  }
  if (planLines.length > 0) {
    lines.push(...planLines);
  }

  return lines.join("\n");
}

function buildReport(assessment) {
  const lines = [
    "Samenvatting",
    `Invulgraad: ${assessment.progress}%`,
    "",
    "Bedrijfsprofiel",
    `Bedrijfsnaam: ${getPlainValue(companyName.value)}`,
    `Contactpersoon: ${getPlainValue(contactName.value)}`,
    `E-mailadres contactpersoon: ${getPlainValue(contactEmail?.value || "")}`,
    `Naam invuller RI&E-toets: ${getPlainValue(rieAssessorName?.value || "")}`,
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
      "Uitkomst RI&E-kwaliteit",
      getQuestionStatusItems()
    ),
    ...buildRegularQuestionReportLines("Uitkomsten plan van aanpak", getPlanStatusItems()),
  ];

  return lines.join("\n");
}

function buildReportPreviewHtml(reportText) {
  const headingLines = new Set([
    "RI&E toetsklaar-rapport",
    "Samenvatting",
    "Bedrijfsprofiel",
    "Afbakening en documentgegevens van de RI&E",
    "Uitwerking vraag 1.1.1",
    "Uitkomst RI&E-kwaliteit",
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

function buildWordDocumentFromText(documentTitle, reportText, extraHeadingLines = []) {
  const riskGroupHeadings = new Set(riskCatalog.map((group) => group.title));
  const headingLines = new Set([
    documentTitle,
    "Bedrijfsprofiel",
    "Afbakening en documentgegevens van de RI&E",
    "Uitwerking vraag 1.1.1",
    "Uitkomst RI&E-kwaliteit",
    "Uitkomsten plan van aanpak",
    "UITKOMSTEN EN RAPPORTEN",
    "Uitkomst risicoprofiel",
    "Uitkomst grondoorzaken",
    "Uitkomst nadere voorschriften",
    "Uitkomst volledigheid",
    "Uitkomst actualiteit",
    "Uitkomst betrouwbaarheid",
    ...riskGroupHeadings,
    ...extraHeadingLines,
  ]);

  const lines = reportText.split("\n");
  const content = [];
  let currentCard = null;

  const flushCard = () => {
    if (!currentCard) {
      return;
    }

    const rowsHtml = currentCard.rows
      .map((row) => {
        if (row.type === "bullet") {
          return `<div class="word-row word-row-bullet"><div class="word-row-value">${escapeHtml(row.text).replace(/\n/g, "<br>")}</div></div>`;
        }

        const normalizedLabel =
          row.label === "Vraag"
            ? "VRAAG"
            : row.label === "Antwoord"
              ? "ANTWOORD"
              : escapeHtml(row.label);

        return `
          <div class="word-row">
            <div class="word-row-inline">
              <span class="word-row-label">${normalizedLabel}</span>
              <span class="word-row-value-inline">${escapeHtml(row.value || "Niet ingevuld").replace(/\n/g, "<br>")}</span>
            </div>
          </div>
        `;
      })
      .join("");

    content.push(`
      <article class="word-card${currentCard.title ? "" : " word-card-compact"}">
        ${currentCard.title ? `<h3 class="word-card-title">${escapeHtml(currentCard.title)}</h3>` : ""}
        ${rowsHtml}
      </article>
    `);

    currentCard = null;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (index === 0) {
      content.push(`<h1 class="word-title">${escapeHtml(trimmed)}</h1>`);
      continue;
    }

    if (!trimmed) {
      flushCard();
      continue;
    }

    if (/^Gegenereerd op /.test(trimmed)) {
      flushCard();
      content.push(`<p class="word-meta">${escapeHtml(trimmed)}</p>`);
      continue;
    }

    if (headingLines.has(trimmed) || (/^[A-Z0-9&.\-\s]+$/.test(trimmed) && trimmed.length <= 40)) {
      flushCard();
      if (riskGroupHeadings.has(trimmed)) {
        content.push('<div class="word-page-break"></div>');
      }
      content.push(`<h2 class="word-heading">${escapeHtml(trimmed)}</h2>`);
      continue;
    }

    if (trimmed.startsWith("• ")) {
      if (!currentCard) {
        currentCard = { title: "", rows: [] };
      }
      currentCard.rows.push({ type: "bullet", text: trimmed.replace(/^•\s*/, "") });
      continue;
    }

    const labelMatch = trimmed.match(/^([^:\n]{1,160}):\s*(.*)$/);
    if (labelMatch) {
      if (!currentCard) {
        currentCard = { title: "", rows: [] };
      }
      currentCard.rows.push({
        type: "label",
        label: labelMatch[1],
        value: labelMatch[2],
      });
      continue;
    }

    const isQuestionLine =
      trimmed.endsWith("?") ||
      trimmed.startsWith("Is invulling gegeven aan ") ||
      trimmed.startsWith("Reden waarom ") ||
      trimmed.startsWith("Indien niet van toepassing");

    if (isQuestionLine) {
      if (!currentCard) {
        currentCard = { title: "", rows: [] };
      }
      currentCard.rows.push({
        type: "label",
        label: "Vraag",
        value: trimmed,
      });
      continue;
    }

    if (currentCard?.rows.length) {
      const lastRow = currentCard.rows[currentCard.rows.length - 1];
      if (lastRow.type === "label") {
        lastRow.value = lastRow.value ? `${lastRow.value}\n${trimmed}` : trimmed;
      } else if (lastRow.type === "bullet") {
        lastRow.text = `${lastRow.text}\n${trimmed}`;
      }
      continue;
    }

    if (currentCard?.title) {
      currentCard.rows.push({
        type: "label",
        label: "Antwoord",
        value: trimmed,
      });
      continue;
    }

    flushCard();
    currentCard = { title: trimmed, rows: [] };
  }

  flushCard();

  return `
    <!doctype html>
    <html lang="nl">
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(documentTitle)}</title>
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
            line-height: 1.45;
          }

          .word-page {
            max-width: none;
            margin: 0 auto;
            padding: 0 0 24px;
            background: #ffffff;
          }

          .word-title {
            margin: 0 0 8px;
            font-size: 18pt;
          }

          .word-meta {
            margin: 0 0 18px;
            color: #5b6472;
            font-size: 9pt;
            line-height: 1.35;
            border-bottom: 1px solid #c8ced6;
            padding-bottom: 10px;
          }

          .word-heading {
            margin: 18px 0 8px;
            font-size: 14pt;
            color: #16324f;
          }

          .word-card {
            margin: 0 0 12px;
            padding: 12px 14px;
            border: 1px solid #d7dee8;
            border-radius: 10px;
            background: #fbfcfe;
            break-inside: avoid;
          }

          .word-card-compact {
            padding-top: 10px;
          }

          .word-card-title {
            margin: 0 0 8px;
            font-size: 11pt;
            line-height: 1.35;
            color: #13263d;
          }

          .word-row {
            margin-top: 8px;
          }

          .word-row:first-child {
            margin-top: 0;
          }

          .word-row-inline {
            display: flex;
            align-items: flex-start;
            gap: 10px;
          }

          .word-row-label {
            font-size: 8pt;
            font-weight: 700;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #516173;
            min-width: 78px;
            flex: 0 0 78px;
          }

          .word-row-value {
            font-size: 9pt;
            line-height: 1.5;
            color: #172033;
          }

          .word-row-value-inline {
            font-size: 9pt;
            line-height: 1.5;
            color: #172033;
            flex: 1 1 auto;
          }

          .word-row-bullet {
            padding-left: 14px;
            position: relative;
          }

          .word-row-bullet::before {
            content: "•";
            position: absolute;
            left: 0;
            top: 0;
            color: #2f6f5e;
          }

          .word-spacer {
            margin: 0;
            min-height: 10px;
            line-height: 1;
          }

          .word-page-break {
            display: block;
            height: 0;
            margin: 0;
            break-before: page;
            page-break-before: always;
          }
        </style>
      </head>
      <body>
        <main class="word-page">
          ${content.join("")}
        </main>
      </body>
    </html>
  `;
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
    ["E-mailadres contactpersoon", contactEmail?.value || ""],
    ["Naam invuller RI&E-toets", rieAssessorName?.value || ""],
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
              <p class="report-line"><strong>${escapeHtml(
                label
              )}:</strong><br>${formatOptionalValue(value)}</p>
            `;
          }

          return `
            <p class="report-line"><strong>${escapeHtml(
              label
            )}:</strong> ${formatOptionalValue(value)}</p>
          `;
        }
      )
      .join("");

  return `
    <section class="report-section">
      <p style="margin: 0 0 12pt; font-size: 9pt;"><br></p>
      <h2 style="margin: 6pt 0 6pt; font-size: 12pt;">Bedrijfsprofiel</h2>
      <div class="report-block">
        ${renderRows(profileRows)}
      </div>
    </section>
    <section class="report-section">
      <p style="margin: 0 0 12pt; font-size: 9pt;"><br></p>
      <h2 style="margin: 6pt 0 6pt; font-size: 12pt;">Afbakening en documentgegevens van de RI&E</h2>
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
  const articleMatch = prompt.match(
    /((?:Arbobesluit\s+art\.|AB\s+artikel|artikel)\s*[0-9a-z.]+|AB\s+[0-9a-z.]+)/i
  );
  if (articleMatch) {
    return `${riskLabel} - ${articleMatch[1]}`;
  }

  const chapterMatch = prompt.match(
    /((?:Arbobesluit|AB)?\s*hoofdstuk\s+\d+,\s*afdeling\s+\d+(?:\s+van het Arbobesluit)?)/i
  );
  if (chapterMatch) {
    return `${riskLabel} - ${chapterMatch[1].trim()}`;
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
  const summaryData = collectApplicabilitySummaryData(assessment, {
    formatRiskLabel: getShortRiskSummaryLabel,
    formatSupplementalLabel: getShortSupplementalSummaryLabel,
  });
  const supplementalStatusItems = collectSupplementalStatusSummaryData();

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
      <h2 style="margin: 0 0 8px; font-size: 9pt;">Uitkomsten en rapporten</h2>
      <div class="report-subsection">
        <h3 style="margin: 10px 0 6px; font-size: 9pt;">Uitkomst risicoprofiel</h3>
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
        <h3 style="margin: 10px 0 6px; font-size: 9pt;">Uitkomst RI&E-kwaliteit</h3>
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
              const noReason = item.supplementalNoReasons?.[config.key] || null;

              return `
                <li style="margin-top: 6px; line-height: 1.3; font-size: 9pt;">
                  <strong>${escapeHtml(config.prompt)}</strong><br>
                  Antwoord: ${escapeHtml(getOptionLabel(requirementsOptions, answer))}<br>
                  ${
                    answer === "no" && noReason
                      ? `Reden waarom geen invulling is gegeven: ${escapeHtml(getSupplementalNoReasonLabel(noReason))}<br>`
                      : ""
                  }
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
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Reden waarom de grondoorzaken niet zijn meegenomen:</strong> ${formatOptionalValue(getGroundCauseNoReasonLabel(item.causesNoReason))}</p>
                <p class="report-line" style="margin: 2px 0 0; line-height: 1.3; font-size: 9pt;"><strong>Toelichting andere reden:</strong> ${formatOptionalValue(item.causesNoReason === "anders" ? item.causesNoNote : "")}</p>
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

function getRelevantRegularQuestionReportSection(title, items) {
  const questionBlocks = items
    .map((question) => {
      const answer = getAnswerValue(question.id);
      const note = survey.querySelector(`[name="question-${question.id}-note"]`)?.value || "";
      const normalizedNote = getPlainValue(note);

      if (!answer && !normalizedNote) {
        return "";
      }

      const evidenceConfig = getQuestionEvidenceConfig(question, answer);

      return `
        <article class="report-question">
          <h3 style="margin: 6pt 0 6pt; font-size: 9pt;">${escapeHtml(getDisplayQuestionTitle(question))}</h3>
          <p class="report-line"><strong>Antwoord:</strong> ${escapeHtml(
            getOptionLabel(getQuestionOptions(question), answer)
          )}</p>
          ${
            normalizedNote
              ? `<p class="report-line"><strong>${escapeHtml(
                  evidenceConfig.label || "Controleerbaar bewijs of toelichting"
                )}${(evidenceConfig.label || "Controleerbaar bewijs of toelichting").trim().endsWith("?") ? "" : ":"}</strong> ${formatOptionalValue(note)}</p>`
              : ""
          }
        </article>
      `;
    })
    .filter(Boolean)
    .join("");

  if (!questionBlocks) {
    return "";
  }

  return `
    ${getWordPageBreakHtml()}
    <section class="report-section">
      <h2 style="margin: 6pt 0 6pt; font-size: 14pt;">${escapeHtml(title)}</h2>
      ${questionBlocks}
    </section>
  `;
}

function getRelevantRiskInventoryReportHtml() {
  const groupsHtml = riskCatalog
    .map((group, index) => {
      const itemHtml = group.items
        .map((itemLabel) => {
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
            item.causesNoReason ||
            item.causesNoNote ||
            Object.values(item.supplementalAnswers || {}).some(Boolean) ||
            Object.values(item.supplementalNotes || {}).some(Boolean);

          if (!hasAnyData) {
            return "";
          }

          const lines = [];

          if (item.applicable) {
            lines.push(
              `<p class="report-line"><strong>Van toepassing:</strong> ${escapeHtml(
                getOptionLabel(yesNoOptions, item.applicable)
              )}</p>`
            );
          }

          if (item.applicable === "no") {
            if (item.applicabilityNote) {
              lines.push(
                `<p class="report-line"><strong>Toelichting niet van toepassing:</strong> ${formatOptionalValue(
                  item.applicabilityNote
                )}</p>`
              );
            }
          }

          if (item.applicable === "yes") {
            if (item.described) {
              lines.push(
                `<p class="report-line"><strong>Is het risico beschreven in de RI&E?</strong> ${escapeHtml(
                  getOptionLabel(yesNoOptions, item.described)
                )}</p>`
              );
            }

            if (item.described === "yes") {
              if (item.assessorNote) {
                lines.push(
                  `<p class="report-line"><strong>Wie heeft dit risico beoordeeld?</strong> ${formatOptionalValue(
                    item.assessorNote
                  )}</p>`
                );
              }

              if (item.assessmentMethodNote) {
                lines.push(
                  `<p class="report-line"><strong>Welke methode is gebruikt om het risico te inventariseren?</strong> ${formatOptionalValue(
                    item.assessmentMethodNote
                  )}</p>`
                );
              }

              if (item.evaluationMethodNote) {
                lines.push(
                  `<p class="report-line"><strong>Welke methode is gebruikt om het risico te evalueren?</strong> ${formatOptionalValue(
                    item.evaluationMethodNote
                  )}</p>`
                );
              }

              if (item.describedYesNote) {
                lines.push(
                  `<p class="report-line"><strong>Waar is dit onderdeel terug te vinden in de RI&E?</strong> ${formatOptionalValue(
                    item.describedYesNote
                  )}</p>`
                );
              }

              if (item.causes) {
                lines.push(
                  `<p class="report-line"><strong>Zijn de grondoorzaken van dit risico in de RI&E geïnventariseerd?</strong> ${escapeHtml(
                    getOptionLabel(yesNoOptions, item.causes)
                  )}</p>`
                );
              }

              if (item.causes === "yes" && item.causesYesNote) {
                lines.push(
                  `<p class="report-line"><strong>Waaruit blijkt dat de grondoorzaken zijn geïnventariseerd?:</strong> ${formatOptionalValue(
                    item.causesYesNote
                  )}</p>`
                );
              }

              if (item.causes === "no") {
                if (item.causesNoReason) {
                  lines.push(
                    `<p class="report-line"><strong>Reden waarom de grondoorzaken niet zijn meegenomen:</strong> ${formatOptionalValue(
                      getGroundCauseNoReasonLabel(item.causesNoReason)
                    )}</p>`
                  );
                }

                if (item.causesNoReason === "anders" && item.causesNoNote) {
                  lines.push(
                    `<p class="report-line"><strong>Toelichting andere reden:</strong> ${formatOptionalValue(
                      item.causesNoNote
                    )}</p>`
                  );
                }
              }

              const supplementalHtml = supplementalConfigs
                .map((config) => {
                  const answer = item.supplementalAnswers?.[config.key];
                  const note = item.supplementalNotes?.[config.key] || "";
                  const noReason = item.supplementalNoReasons?.[config.key] || null;
                  const normalizedNote = getPlainValue(note);

                  if (!answer && !normalizedNote && !noReason) {
                    return "";
                  }

                  return `
                    <li>
                      <strong>${escapeHtml(config.prompt)}</strong><br>
                      Antwoord: ${escapeHtml(getOptionLabel(requirementsOptions, answer))}
                      ${
                        answer === "no" && noReason
                          ? `<br>Reden waarom geen invulling is gegeven: ${escapeHtml(getSupplementalNoReasonLabel(noReason))}`
                          : ""
                      }
                      ${
                        normalizedNote
                          ? `<br>Toelichting: ${formatOptionalValue(note)}`
                          : ""
                      }
                    </li>
                  `;
                })
                .filter(Boolean)
                .join("");

              if (supplementalHtml) {
                lines.push(`
                  <div class="report-subsection">
                    <strong class="report-subheading">Nadere voorschriften</strong>
                    <ul class="report-list">${supplementalHtml}</ul>
                  </div>
                `);
              }
            }

            if (item.described === "no") {
              if (item.justified) {
                lines.push(
                  `<p class="report-line"><strong>Kunt u verantwoorden waarom het risico niet beschreven is in de RI&E?</strong> ${escapeHtml(
                    getOptionLabel(yesNoOptions, item.justified)
                  )}</p>`
                );
              }

              if (item.describedNoNote) {
                lines.push(
                  `<p class="report-line"><strong>Reden waarom dit risico niet is opgenomen:</strong> ${formatOptionalValue(
                    item.describedNoNote
                  )}</p>`
                );
              }
            }
          }

          if (lines.length === 0) {
            return "";
          }

          return `
            <article class="report-risk-item">
              <h3 style="margin: 18pt 0 6pt; font-size: 11pt;">${escapeHtml(item.groupTitle)} - ${escapeHtml(
                getNumberedRiskItemLabel(group.id, item.itemLabel)
              )}</h3>
              ${lines.join("")}
            </article>
          `;
        })
        .filter(Boolean)
        .join("");

      if (!itemHtml) {
        return "";
      }

      return `
        ${index > 0 ? getWordPageBreakHtml() : ""}
        <section class="report-section report-risk-group">
          <h2 style="margin: 6pt 0 6pt; font-size: 13pt;">${escapeHtml(group.title)}</h2>
          ${itemHtml}
        </section>
      `;
    })
    .filter(Boolean)
    .join("");

  if (!groupsHtml) {
    return "";
  }

  return `
    ${getWordPageBreakHtml()}
    <section class="report-section">
      <h2 style="margin: 6pt 0 6pt; font-size: 14pt;">Uitwerking vraag 1.1.1</h2>
      ${groupsHtml}
    </section>
  `;
}

function buildPrintableReportHtml() {
  return buildWordDocumentFromText("RI&E toetsklaar-rapport", buildRelevantReportPdfText());
}

function buildSummaryWordHtml() {
  return buildWordDocumentFromText("RI&E toetsklaar-samenvatting", buildSummaryPdfText(), [
    "Uitkomsten plan van aanpak",
  ]);
}

function buildSummaryPdfHtml() {
  const printScript = `
    <script>
      window.addEventListener("load", () => {
        window.setTimeout(() => {
          window.print();
        }, 150);

        window.addEventListener("afterprint", () => {
          window.close();
        });
      });
    </script>
  `;

  return buildSummaryWordHtml().replace("</body>", `${printScript}</body>`);
}

function buildPrintableReportPdfHtml() {
  const printScript = `
    <script>
      window.addEventListener("load", () => {
        window.setTimeout(() => {
          window.print();
        }, 150);

        window.addEventListener("afterprint", () => {
          window.close();
        });
      });
    </script>
  `;

  return buildPrintableReportHtml().replace("</body>", `${printScript}</body>`);
}

function buildSummaryPdfText() {
  const assessment = computeAssessment();
  const generatedAt = new Intl.DateTimeFormat("nl-NL", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Amsterdam",
  }).format(new Date());
  const riskStatusItems = collectRiskProfileStatusSummaryData();
  const groundCauseStatusItems = collectGroundCausesStatusSummaryData();
  const supplementalStatusItems = collectSupplementalStatusSummaryData();

  const lines = [
    "RI&E toetsklaar-samenvatting",
    `Gegenereerd op ${generatedAt}`,
    "",
    "Bedrijfsprofiel",
    `Bedrijfsnaam: ${getPlainValue(companyName.value)}`,
    `Contactpersoon: ${getPlainValue(contactName.value)}`,
    `E-mailadres contactpersoon: ${getPlainValue(contactEmail?.value || "")}`,
    `Naam invuller RI&E-toets: ${getPlainValue(rieAssessorName?.value || "")}`,
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
    "Documenten die behoren tot de te toetsen RI&E:",
    getPlainValue(rieDocuments.value),
    "",
    "UITKOMSTEN EN RAPPORTEN",
    "",
    "Uitkomst risicoprofiel",
    ...(riskStatusItems.length
      ? riskStatusItems.map((item) => `• ${item.label} - ${item.status.label}`)
      : ["• Nog geen hoofd- en deelrisico's beoordeeld."]),
    "",
    "Uitkomst grondoorzaken",
    ...(groundCauseStatusItems.length
      ? groundCauseStatusItems.map((item) => `• ${item.label} - ${item.status.label}`)
      : ["• Nog geen relevante grondoorzaken beoordeeld."]),
    "",
    "Uitkomst nadere voorschriften",
    ...(supplementalStatusItems.length
      ? supplementalStatusItems.map((item) => `• ${item.label} - ${item.status.label}`)
      : ["• Nog geen relevante nadere voorschriften."]),
    "",
    "Uitkomst RI&E-kwaliteit",
  ];

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
    lines.push("", group.title);
    for (const question of group.items) {
      const presentation = getStatusPresentation(getAnswerValue(question.id));
      lines.push(getDisplayQuestionTitle(question));
      lines.push(presentation.label);
    }
  }

  lines.push("", "Uitkomsten plan van aanpak");
  for (const question of getPlanStatusItems()) {
    const presentation = getStatusPresentation(getAnswerValue(question.id));
    lines.push(getDisplayQuestionTitle(question));
    lines.push(presentation.label);
  }

  return lines.join("\n");
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

function openPrintHtmlDocument(html) {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const printWindow = window.open(url, "_blank");

  if (!printWindow) {
    URL.revokeObjectURL(url);
    window.alert("Het afdrukvenster kon niet worden geopend. Controleer of pop-ups zijn toegestaan.");
    return;
  }

  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
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

function wrapPdfLine(line, maxLength = 72) {
  if (!line.trim()) {
    return [""];
  }

  const words = line.split(/\s+/);
  const wrapped = [];
  let current = "";

  for (const word of words) {
    if (word.length > maxLength) {
      if (current) {
        wrapped.push(current);
        current = "";
      }

      let remaining = word;
      while (remaining.length > maxLength) {
        wrapped.push(remaining.slice(0, maxLength));
        remaining = remaining.slice(maxLength);
      }

      current = remaining;
      continue;
    }

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

function generateRelevantReportPdf() {
  openPrintHtmlDocument(buildPrintableReportPdfHtml());
}

function generateWordReport() {
  const html = buildPrintableReportHtml();
  const blob = new Blob([html], {
    type: "application/msword;charset=utf-8",
  });
  downloadBlob(blob, `RI&E toetsklaar-rapport.doc`);
}

function generateSummaryWordReport() {
  const html = buildSummaryWordHtml();
  const blob = new Blob([html], {
    type: "application/msword;charset=utf-8",
  });
  downloadBlob(blob, `RI&E toetsklaar-samenvatting.doc`);
}

function generateSummaryPdfReport() {
  openPrintHtmlDocument(buildSummaryPdfHtml());
}

function updateScoreRing(readiness) {
  const degrees = Math.round((readiness / 100) * 360);
  scoreRing.style.background = `
    radial-gradient(circle at center, #fffaf4 58%, transparent 59%),
    conic-gradient(var(--accent) ${degrees}deg, rgba(15, 118, 110, 0.14) ${degrees}deg)
  `;
}

function updateRiskInventoryVisibility() {
  const riskItems = document.querySelectorAll(".risk-item:not(.cause-item)");
  const riskGroups = document.querySelectorAll(".risk-group:not(.cause-group)");

  for (const groupCard of riskGroups) {
    const groupId = groupCard.dataset.groupId || "";
    const groupState = getRiskGroupState(groupId);
    const applicabilityBlock = groupCard.querySelector(".risk-group-applicability");
    const noteField = applicabilityBlock?.querySelector(".risk-evidence");
    const itemCards = groupCard.querySelectorAll(".risk-item");

    groupCard.classList.toggle("is-disabled", groupState.applicable === "no");

    if (noteField) {
      noteField.hidden = groupState.applicable !== "no";
    }

    for (const itemCard of itemCards) {
      itemCard.hidden = groupState.applicable === "no";
    }
  }

  for (const item of riskItems) {
    const itemId = item.dataset.itemId;
    const applicable = getAnswerValue(`risk-${itemId}-applicable`);
    const described = getAnswerValue(`risk-${itemId}-described`);
    const applicabilityBlock = item.querySelector('[data-field="applicable"]');
    const describedBlock = item.querySelector('[data-field="described"]');
    const whyNotBlock = item.querySelector('[data-field="justified"]');

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
      const methodHelp = describedBlock?.querySelector('[data-method-help="true"]');
      if (methodHelp) {
        methodHelp.hidden = false;
      }
    } else if (applicable === "yes" && described === "no") {
      const whyNotField = whyNotBlock?.querySelector(".risk-evidence");
      const justified = getAnswerValue(`risk-${itemId}-justified`);
      if (whyNotField && justified === "yes") {
        whyNotField.hidden = false;
      }
      const methodHelp = describedBlock?.querySelector('[data-method-help="true"]');
      if (methodHelp) {
        methodHelp.hidden = true;
      }
    } else {
      const methodHelp = describedBlock?.querySelector('[data-method-help="true"]');
      if (methodHelp) {
        methodHelp.hidden = true;
      }
    }

    const plainItemLabel = item.dataset.itemLabel || "";
    const groupId = item.dataset.groupId || "";

    for (const config of getSupplementalRequirementConfigs(groupId, plainItemLabel)) {
      const block = item.querySelector(`[data-field="${config.key}"]`);
      const value = getAnswerValue(`risk-${itemId}-${config.key}`);
      const regularField = block?.querySelector('[data-supplemental-note-field="true"]');
      const noReasonField = block?.querySelector('[data-supplemental-no-reason-field="true"]');
      const note = regularField?.querySelector(".risk-note");

      if (regularField) {
        regularField.hidden = value !== "yes";
      }

      if (noReasonField) {
        noReasonField.hidden = value !== "no";
        const selectedReason = getAnswerValue(`risk-${itemId}-${config.key}-no-reason`);
        const extraNoteField = noReasonField.querySelector('[data-supplemental-no-reason-note="true"]');
        if (extraNoteField) {
          extraNoteField.hidden = selectedReason !== "anders";
        }
      }

      if (note && value === "yes") {
        if (value === "yes") {
          note.placeholder =
            "Omschrijf hier op welke wijze invulling is gegeven aan dit nadere voorschrift en waar dit uit blijkt.";
        }
      }
    }
  }
}

function updateGroundCauseVisibility() {
  const groupCards = document.querySelectorAll(".cause-group");
  const noneState = getGroundCausesNoneState();
  const generalNoteField = questionGroupsCauses?.querySelector('[name="ground-causes-none-note"]')?.closest(
    ".risk-evidence"
  );

  if (generalNoteField) {
    generalNoteField.hidden = noneState.answer !== "yes";
  }

  for (const groupCard of groupCards) {
    const groupId = groupCard.dataset.groupId || "";
    const groupState = getRiskGroupState(groupId);
    const statusNote = groupCard.querySelector(".risk-group-disabled-note");
    let visibleCount = 0;

    if (groupState.applicable === "no") {
      groupCard.hidden = true;
      continue;
    }

    groupCard.hidden = false;

    const disableInputs = noneState.answer === "yes";

    if (disableInputs) {
      groupCard.classList.add("is-disabled");
      if (statusNote) {
        statusNote.hidden = false;
        statusNote.textContent =
          "Voor deze stap is algemeen aangegeven dat op geen van de relevante deelrisico’s grondoorzaken zijn benoemd.";
      }
    } else {
      groupCard.classList.remove("is-disabled");
      if (statusNote) {
        statusNote.hidden = true;
        statusNote.textContent = "";
      }
    }

    for (const item of groupCard.querySelectorAll(".cause-item")) {
      const itemId = item.dataset.itemId;
      const applicable = getAnswerValue(`risk-${itemId}-applicable`);
      const described = getAnswerValue(`risk-${itemId}-described`);
      const causes = getAnswerValue(`risk-${itemId}-causes`);
      const causesBlock = item.querySelector('[data-field="causes"]');

      const visible = applicable === "yes" && described === "yes";
      item.hidden = !visible;

      if (!visible) {
        continue;
      }

      visibleCount += 1;

      for (const control of item.querySelectorAll("input, textarea")) {
        control.disabled = disableInputs;
      }

      const causesFields = causesBlock?.querySelectorAll(".risk-evidence") || [];
      for (const field of causesFields) {
        field.hidden = true;
      }

      if (disableInputs) {
        continue;
      }

      if (causes === "yes" && causesFields[0]) {
        causesFields[0].hidden = false;
      }

      if (causes === "no" && causesFields[1]) {
        causesFields[1].hidden = false;
        const selectedReason = getAnswerValue(`risk-${itemId}-causes-no-reason`);
        const extraNoteField = causesFields[1].querySelector('[data-ground-cause-no-reason-note="true"]');
        if (extraNoteField) {
          extraNoteField.hidden = selectedReason !== "anders";
        }
      }
    }

    groupCard.hidden = visibleCount === 0;
  }
}

function updateSupplementalVisibility() {
  const groupCards = document.querySelectorAll(".supplemental-group");

  for (const groupCard of groupCards) {
    const groupId = groupCard.dataset.groupId || "";
    const groupState = getRiskGroupState(groupId);
    const statusNote = groupCard.querySelector(".risk-group-disabled-note");
    let visibleCount = 0;

    if (groupState.applicable === "no") {
      groupCard.hidden = true;
      continue;
    }

    groupCard.hidden = false;
    groupCard.classList.remove("is-disabled");
    if (statusNote) {
      statusNote.hidden = true;
      statusNote.textContent = "";
    }

    for (const item of groupCard.querySelectorAll(".supplemental-item")) {
      const itemId = item.dataset.itemId;
      const applicable = getAnswerValue(`risk-${itemId}-applicable`);
      const described = getAnswerValue(`risk-${itemId}-described`);
      const configs = getSupplementalRequirementConfigs(groupId, item.dataset.itemLabel || "");
      const visible = applicable === "yes" && described === "yes" && configs.length > 0;

      item.hidden = !visible;
      if (!visible) {
        continue;
      }

      visibleCount += 1;
    }

    groupCard.hidden = visibleCount === 0;
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
  updateGroundCauseVisibility();
  updateSupplementalVisibility();
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
    const reportText = buildRelevantReportPdfText();
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
  heading.textContent = "Uitkomsten plan van aanpak";
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
  const summaryGroupPrefix =
    groupPrefix === "Bijzondere categorieën werknemers die mogelijk extra risico lopen"
      ? "Bijzondere categorieën werknemers"
      : groupPrefix;
  const itemLabel = item.itemLabel.trim();
  const groupConfig = riskCatalog.find((group) => group.id === item.groupId);
  const itemIndex = groupConfig?.items.findIndex((label) => label === item.itemLabel) ?? -1;
  const itemLetter = itemIndex >= 0 ? String.fromCharCode(97 + itemIndex) : "";
  const withNumbering = (shortLabel) =>
    itemLetter
      ? `${groupNumber}. ${summaryGroupPrefix} - ${itemLetter}. ${shortLabel}`
      : `${groupNumber}. ${summaryGroupPrefix}`;

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
      "Werknemers met een beperking",
    ],
    [
      "Andere personen of derden, zoals bezoekers en voorbijgangers",
      "Andere personen of derden",
    ],
  ]);

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

  if (groupPrefix === "Bijzondere categorieën werknemers die mogelijk extra risico lopen") {
    return withNumbering(itemLabel);
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

function collectSupplementalStatusSummaryData() {
  return riskCatalog
    .flatMap((group) =>
      group.items.flatMap((itemLabel) => {
        const item = getRiskItemState(group.id, group.title, itemLabel);
        if (!(item.applicable === "yes" && item.described === "yes")) {
          return [];
        }

        const riskLabel = getShortRiskSummaryLabel(item);
        return getSupplementalRequirementConfigs(group.id, itemLabel).map((config) => {
          const answer = item.supplementalAnswers?.[config.key] || null;
          const noReason = item.supplementalNoReasons?.[config.key] || null;
          let status = "nog niet beantwoord";

          if (answer === "yes") {
            status = "meegenomen";
          } else if (answer === "no") {
            if (noReason === "niet-noodzakelijk") {
              status = "niet noodzakelijk";
            } else if (noReason === "niet-onderkend") {
              status = "niet onderkend";
            } else if (noReason === "anders") {
              status = "afwijkend gemotiveerd";
            } else {
              status = "niet meegenomen";
            }
          }

          return `${getShortSupplementalSummaryLabel(riskLabel, config.prompt, item)} - ${status}`;
        });
      })
    )
    .filter(Boolean);
}

function collectGroundCausesStatusSummaryData() {
  return riskCatalog
    .flatMap((group) =>
      group.items.flatMap((itemLabel) => {
        const item = getRiskItemState(group.id, group.title, itemLabel);
        if (!(item.applicable === "yes" && item.described === "yes")) {
          return [];
        }

        let status = { label: "nog niet beantwoord", className: "status-chip-empty" };

        if (item.causes === "yes") {
          status = { label: "benoemd", className: "status-chip-yes" };
        } else if (item.causes === "no") {
          if (item.causesNoReason === "systematiek") {
            status = { label: "niet opgenomen", className: "status-chip-no" };
          } else if (item.causesNoReason === "niet-relevant") {
            status = { label: "niet relevant", className: "status-chip-yes" };
          } else if (item.causesNoReason === "anders") {
            status = { label: "afwijkend gemotiveerd", className: "status-chip-partial" };
          } else {
            status = { label: "niet benoemd", className: "status-chip-no" };
          }
        }

        return [
          {
            label: getShortRiskSummaryLabel(item),
            status,
          },
        ];
      })
    )
    .filter(Boolean);
}

function collectRiskProfileStatusSummaryData() {
  return riskCatalog
    .flatMap((group) =>
      group.items.map((itemLabel) => {
        const item = getRiskItemState(group.id, group.title, itemLabel);
        const label = getShortRiskSummaryLabel(item);

        if (item.applicable === "yes" && item.described === "yes") {
          return {
            label,
            status: { label: "beschreven", className: "status-chip-yes" },
          };
        }

        if (item.applicable === "yes" && item.described === "no") {
          return {
            label,
            status: { label: "niet beschreven", className: "status-chip-no" },
          };
        }

        if (item.applicable === "no") {
          return {
            label,
            status: { label: "niet van toepassing", className: "status-chip-empty" },
          };
        }

        return null;
      })
    )
    .filter(Boolean);
}

function renderResultStatusList(target, items, emptyText, groupPrefixSelector) {
  if (!target) {
    return;
  }

  target.innerHTML = "";

  if (items.length === 0) {
    const entry = document.createElement("div");
    entry.className = "result-status-card result-status-card-empty";
    entry.textContent = emptyText;
    target.append(entry);
    return;
  }

  let previousGroupPrefix = "";

  for (const item of items) {
    const entry = document.createElement("div");
    entry.className = "result-status-card";
    const groupPrefix = groupPrefixSelector(item.label);
    if (previousGroupPrefix && groupPrefix !== previousGroupPrefix) {
      entry.classList.add("result-status-card-group-start");
    }

    const text = document.createElement("span");
    text.className = "result-list-text";
    text.textContent = item.label;

    const chip = document.createElement("span");
    chip.className = `status-chip ${item.status.className}`;
    chip.textContent = item.status.label;

    entry.append(text, chip);
    target.append(entry);
    previousGroupPrefix = groupPrefix;
  }
}

function renderApplicabilityLists(assessment) {
  if (
    !riskOverviewItems ||
    !groundCausesOverviewItems ||
    !supplementedApplicableItems
  ) {
    return;
  }

  riskOverviewItems.innerHTML = "";
  groundCausesOverviewItems.innerHTML = "";
  supplementedApplicableItems.innerHTML = "";

  const overviewItems = collectRiskProfileStatusSummaryData();

  renderResultStatusList(
    riskOverviewItems,
    overviewItems,
    "Nog geen hoofd- en deelrisico's beoordeeld.",
    (label) => label.split(" - ")[0] || ""
  );

  const groundCauseOverviewItems = collectGroundCausesStatusSummaryData();

  renderResultStatusList(
    groundCausesOverviewItems,
    groundCauseOverviewItems,
    "Nog geen relevante grondoorzaken beoordeeld.",
    (label) => label.split(" - ")[0] || ""
  );

  const supplementalOverviewItems = riskCatalog
    .flatMap((group) =>
      group.items.flatMap((itemLabel) => {
        const item = getRiskItemState(group.id, group.title, itemLabel);
        if (!(item.applicable === "yes" && item.described === "yes")) {
          return [];
        }

        const riskLabel = getShortRiskSummaryLabel(item);
        return getSupplementalRequirementConfigs(group.id, itemLabel).map((config) => {
          const answer = item.supplementalAnswers?.[config.key] || null;
          const noReason = item.supplementalNoReasons?.[config.key] || null;
          let status = { label: "nog niet beantwoord", className: "status-chip-empty" };

          if (answer === "yes") {
            status = { label: "meegenomen", className: "status-chip-yes" };
          } else if (answer === "no") {
            if (noReason === "niet-noodzakelijk") {
              status = { label: "niet noodzakelijk", className: "status-chip-yes" };
            } else if (noReason === "niet-onderkend") {
              status = { label: "niet onderkend", className: "status-chip-no" };
            } else if (noReason === "anders") {
              status = { label: "afwijkend gemotiveerd", className: "status-chip-partial" };
            } else {
              status = { label: "niet meegenomen", className: "status-chip-no" };
            }
          }

          return {
            label: getShortSupplementalSummaryLabel(riskLabel, config.prompt, item),
            status,
          };
        });
      })
    )
    .filter(Boolean);

  renderResultStatusList(
    supplementedApplicableItems,
    supplementalOverviewItems,
    "Nog geen relevante nadere voorschriften.",
    (label) => label.split(" - ").slice(0, 2).join(" - ") || label
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

function getRiskInventoryQuestionCard() {
  return document.querySelector('.question-card[data-question-id="1-1-1"]');
}

function getRiskInventoryExpandableSections() {
  const card = getRiskInventoryQuestionCard();
  const groups = Array.from(document.querySelectorAll("#questionGroupsRisk .risk-group"));
  return [card, ...groups].filter(Boolean);
}

function getCauseQuestionCards() {
  return Array.from(document.querySelectorAll('.question-card[data-question-id="ground-causes"]'));
}

function getSupplementalQuestionCards() {
  return Array.from(
    document.querySelectorAll('.question-card[data-question-id="supplemental-requirements"]')
  );
}

function getRegularQuestionCards() {
  return Array.from(document.querySelectorAll(".question-card")).filter((card) => {
    const questionId = card.dataset.questionId || "";
    return questionId !== "1-1-1" && questionId.startsWith("1-");
  });
}

function getPlanQuestionCards() {
  return Array.from(document.querySelectorAll(".question-card")).filter((card) => {
    const questionId = card.dataset.questionId || "";
    return questionId.startsWith("2-");
  });
}

function updateSectionToggleButtonLabel(button, cards, openLabel, closeLabel) {
  if (!button || cards.length === 0) {
    return;
  }

  const allOpen = cards.every((card) => card.open);
  button.setAttribute("aria-expanded", allOpen ? "true" : "false");
  const label = button.querySelector(".summary-toggle-label");
  if (label) {
    label.textContent = allOpen ? closeLabel : openLabel;
  } else {
    button.textContent = allOpen ? closeLabel : openLabel;
  }
}

function toggleQuestionCardCollection(cards) {
  if (cards.length === 0) {
    return;
  }

  const allOpen = cards.every((card) => card.open);
  for (const card of cards) {
    card.open = !allOpen;
  }
}

function updateToggleAllButtonLabel() {
  if (!toggleAllSections) {
    return;
  }

  const sections = getExpandableSections();
  const allOpen = sections.length > 0 && sections.every((section) => section.open);
  toggleAllSections.textContent = allOpen ? "Klap alles dicht" : "Klap alles open";
}

function updateQuestionSectionToggleLabels() {
  updateSectionToggleButtonLabel(
    toggleRiskInventoryQuestion,
    getRiskInventoryExpandableSections(),
    "Alle vragen uitklappen",
    "Alle vragen inklappen"
  );
  updateSectionToggleButtonLabel(
    toggleCauseQuestions,
    getCauseQuestionCards(),
    "Alle vragen uitklappen",
    "Alle vragen inklappen"
  );
  updateSectionToggleButtonLabel(
    toggleSupplementalQuestions,
    getSupplementalQuestionCards(),
    "Alle vragen uitklappen",
    "Alle vragen inklappen"
  );
  updateSectionToggleButtonLabel(
    toggleRegularQuestions,
    getRegularQuestionCards(),
    "Alle vragen uitklappen",
    "Alle vragen inklappen"
  );
  updateSectionToggleButtonLabel(
    togglePlanQuestions,
    getPlanQuestionCards(),
    "Alle vragen uitklappen",
    "Alle vragen inklappen"
  );
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

function toggleRiskInventoryQuestionCard() {
  const cards = getRiskInventoryExpandableSections();
  if (cards.length === 0) {
    return;
  }

  toggleQuestionCardCollection(cards);
  updateQuestionSectionToggleLabels();
}

function toggleRegularQuestionSection() {
  toggleQuestionCardCollection(getRegularQuestionCards());
  updateQuestionSectionToggleLabels();
}

function toggleCauseQuestionSection() {
  toggleQuestionCardCollection(getCauseQuestionCards());
  updateQuestionSectionToggleLabels();
}

function toggleSupplementalQuestionSection() {
  toggleQuestionCardCollection(getSupplementalQuestionCards());
  updateQuestionSectionToggleLabels();
}

function togglePlanQuestionSection() {
  toggleQuestionCardCollection(getPlanQuestionCards());
  updateQuestionSectionToggleLabels();
}

function updateSummarySectionToggleButtonLabel(button, target) {
  if (!button || !target) {
    return;
  }

  const expanded = !target.hidden;
  button.setAttribute("aria-expanded", expanded ? "true" : "false");
  const label = button.querySelector(".summary-toggle-label");
  if (label) {
    label.textContent = expanded ? "Inklappen" : "Uitklappen";
  }
}

function updateSummarySectionToggleLabels() {
  updateSummarySectionToggleButtonLabel(toggleSummaryRiskOutput, summaryRiskOutput);
  updateSummarySectionToggleButtonLabel(toggleSummaryGroundCausesOutput, summaryGroundCausesOutput);
  updateSummarySectionToggleButtonLabel(toggleSummarySupplementalOutput, summarySupplementalOutput);
  updateSummarySectionToggleButtonLabel(toggleSummaryQuestionOutput, summaryQuestionOutput);
  updateSummarySectionToggleButtonLabel(toggleSummaryPlanOutput, summaryPlanOutput);
}

function updatePanelSectionToggleLabels() {
  updateSummarySectionToggleButtonLabel(toggleProfileSection, profileSectionContent);
  updateSummarySectionToggleButtonLabel(toggleScopeSection, scopeSectionContent);
  updateSummarySectionToggleButtonLabel(toggleStep3Section, step3SectionContent);
  updateSummarySectionToggleButtonLabel(toggleRegularStepSection, regularStepSectionContent);
  updateSummarySectionToggleButtonLabel(togglePlanStepSection, planStepSectionContent);
}

function toggleSummarySection(target, button) {
  if (!target) {
    return;
  }

  target.hidden = !target.hidden;
  updateSummarySectionToggleButtonLabel(button, target);
}

function updateReportToggleButtonLabel() {
  if (!toggleReportOutput || !reportOutput) {
    return;
  }

  const expanded = !reportOutput.hidden;
  toggleReportOutput.setAttribute("aria-expanded", expanded ? "true" : "false");
  const label = toggleReportOutput.querySelector(".summary-toggle-label");
  if (label) {
    label.textContent = expanded ? "Inklappen" : "Uitklappen";
  } else {
    toggleReportOutput.textContent = expanded ? "Inklappen" : "Uitklappen";
  }
}

function updateResultsContentToggleButtonLabel() {
  if (!toggleResultsContent || !resultsContent) {
    return;
  }

  const expanded = !resultsContent.hidden;
  toggleResultsContent.setAttribute("aria-expanded", expanded ? "true" : "false");
  const description = expanded ? "Uitkomsten inklappen" : "Uitkomsten uitklappen";
  toggleResultsContent.setAttribute("aria-label", description);
  toggleResultsContent.setAttribute("title", description);
}

function toggleResultsContentVisibility() {
  if (!resultsContent) {
    return;
  }

  resultsContent.hidden = !resultsContent.hidden;
  updateResultsContentToggleButtonLabel();
}

function toggleReportOutputVisibility() {
  if (!reportOutput) {
    return;
  }

  reportOutput.hidden = !reportOutput.hidden;
  updateReportToggleButtonLabel();
}

function goToPreviousWizardStep() {
  if (currentWizardStep <= 1) {
    return;
  }

  setWizardStep(currentWizardStep - 1);
  saveDraftToLocalStorage();
}

function goToNextWizardStep() {
  if (currentWizardStep >= TOTAL_WIZARD_STEPS) {
    return;
  }

  setWizardStep(currentWizardStep === 0 ? 1 : currentWizardStep + 1);
  saveDraftToLocalStorage();
}

renderQuestions();
resetExecutionParticipantRows();
restoreDraftFromLocalStorage();
renderAssessment();
updateWizardVisibility();
updateToggleAllButtonLabel();
updateQuestionSectionToggleLabels();
updateSummarySectionToggleLabels();
updatePanelSectionToggleLabels();
updateReportToggleButtonLabel();
updateResultsContentToggleButtonLabel();

survey.addEventListener("change", () => {
  renderAssessment();
  saveDraftToLocalStorage();
});
survey.addEventListener("input", () => {
  renderAssessment();
  saveDraftToLocalStorage();
});
executionParticipantRows?.addEventListener("input", () => {
  ensureExecutionParticipantTrailingRow();
  syncExecutionDescription();
  refreshExecutionParticipantSelects();
  refreshRiskParticipantPickers();
});
copyReport.addEventListener("click", copyReportToClipboard);
toggleReportOutput?.addEventListener("click", toggleReportOutputVisibility);
generateReportPdf?.addEventListener("click", generateRelevantReportPdf);
generateWord?.addEventListener("click", generateWordReport);
generateSummaryPdf?.addEventListener("click", generateSummaryPdfReport);
generateSummaryWord?.addEventListener("click", generateSummaryWordReport);
resetApp?.addEventListener("click", handleResetClick);
toggleResultsContent?.addEventListener("click", toggleResultsContentVisibility);
toggleRiskInventoryQuestion?.addEventListener("click", toggleRiskInventoryQuestionCard);
toggleCauseQuestions?.addEventListener("click", toggleCauseQuestionSection);
toggleSupplementalQuestions?.addEventListener("click", toggleSupplementalQuestionSection);
toggleRegularQuestions?.addEventListener("click", toggleRegularQuestionSection);
togglePlanQuestions?.addEventListener("click", togglePlanQuestionSection);
wizardPrev?.addEventListener("click", goToPreviousWizardStep);
wizardNext?.addEventListener("click", goToNextWizardStep);
for (const button of wizardStepButtons) {
  button.addEventListener("click", () => {
    const targetStep = Number(button.dataset.stepTarget || "1");
    setWizardStep(currentWizardStep === targetStep ? 0 : targetStep);
    saveDraftToLocalStorage();
  });
}
toggleSummaryRiskOutput?.addEventListener("click", () =>
  toggleSummarySection(summaryRiskOutput, toggleSummaryRiskOutput)
);
toggleSummaryGroundCausesOutput?.addEventListener("click", () =>
  toggleSummarySection(summaryGroundCausesOutput, toggleSummaryGroundCausesOutput)
);
toggleSummarySupplementalOutput?.addEventListener("click", () =>
  toggleSummarySection(summarySupplementalOutput, toggleSummarySupplementalOutput)
);
toggleSummaryQuestionOutput?.addEventListener("click", () =>
  toggleSummarySection(summaryQuestionOutput, toggleSummaryQuestionOutput)
);
toggleSummaryPlanOutput?.addEventListener("click", () =>
  toggleSummarySection(summaryPlanOutput, toggleSummaryPlanOutput)
);
toggleProfileSection?.addEventListener("click", () =>
  toggleSummarySection(profileSectionContent, toggleProfileSection)
);
toggleScopeSection?.addEventListener("click", () =>
  toggleSummarySection(scopeSectionContent, toggleScopeSection)
);
toggleStep3Section?.addEventListener("click", () =>
  toggleSummarySection(step3SectionContent, toggleStep3Section)
);
toggleRegularStepSection?.addEventListener("click", () =>
  toggleSummarySection(regularStepSectionContent, toggleRegularStepSection)
);
togglePlanStepSection?.addEventListener("click", () =>
  toggleSummarySection(planStepSectionContent, togglePlanStepSection)
);
cancelReset?.addEventListener("click", (event) => {
  event.preventDefault();
  closeResetModal();
});
confirmReset?.addEventListener("click", (event) => {
  event.preventDefault();
  if (resetConfirmationStep === 1) {
    resetConfirmationStep = 2;
    if (resetModalTitle) {
      resetModalTitle.textContent = "Weet u het zeker?";
    }
    if (resetModalMessage) {
      resetModalMessage.textContent = "Weet u het zeker?";
    }
    if (cancelReset) {
      cancelReset.textContent = "Nee";
    }
    if (confirmReset) {
      confirmReset.textContent = "Ja";
    }
    return;
  }
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
    updateQuestionSectionToggleLabels();
    saveDraftToLocalStorage();
  },
  true
);
