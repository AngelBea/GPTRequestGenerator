import {
    aspectRatios,
    cameraAngles,
    cameraModesByCategory,
    categoryFormFieldsPreset,
    stylePresets,
    targetsByCategory
} from "./presets.js";
import {$, _, elements} from "./selectors.js";
import {createFormField} from "./DynamicForm.js";

HTMLSelectElement.prototype.addOption = function(value, label) {
    const option = document.createElement("option")
    option.value = value;
    option.label = label
    this.appendChild(option)
}
function setStatus(msg, ok = true) {
    const el = elements().status;
    if (!el) return;
    el.textContent = msg;
    el.style.color = ok ? "#7fffd4" : "#ff8a80";
    clearTimeout(setStatus._t);
    setStatus._t = setTimeout(() => (el.textContent = ""), 3000);
}

function loadCategoriesByStylePreset(){
    Object.keys(stylePresets).forEach(categoryLabel => {
        console.log(categoryLabel)
        const categoryInput = elements().category
        console.log(categoryInput)
        categoryInput.addOption(categoryLabel, categoryLabel)
    })
}

function loadTargetsForCategory(category) {
    fillSelect(elements().generationTarget, targetsByCategory[category])
}

function fillSelect(select, values) {
    if (!select) return;
    select.innerHTML = "";
    for (const value of values) {
        select.addOption(value, value.replace(/_/g, " "))
    }
}

function loadCameraOptionsForCategory(category) {
    fillSelect(elements().cameraMode, cameraModesByCategory[category] || []);
}

function loadAngles(category) {
    fillSelect(elements().cameraAngle, cameraAngles[category]);
}

function loadAspectRatios() {
    fillSelect(elements().aspectRatio, aspectRatios);
}

// ===== PILLS =====
function addPill(target) {
    const list = _(target.dataset.listId);
    if (!target || !list) return;

    const value = target.value.trim();
    if (!value){
        target.classList.add("input-error");
        setTimeout(() => target.classList.remove("input-error"), 600);
        setStatus(`El campo ${target === "must" ? "Must Include" : "Avoid"} está vacío.`, false);
        return;
    }

    list.appendChild(createPill(value));

    target.value = "";
    target.focus();
}

function createPill(value){
    const pill = document.createElement("div");
    pill.className = "pill";

    const textNode = document.createElement("span");
    textNode.className = "pill-text";
    textNode.textContent = value;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pill-remove";
    btn.setAttribute("aria-label", "Eliminar");
    btn.textContent = "×";
    btn.addEventListener("click", () => pill.remove());

    pill.appendChild(textNode);
    pill.appendChild(btn);

    return pill
}

function getPillValues(target) {
    const container = target === "must" ? elements().mustList : elements().avoidList;
    if (!container) return [];
    return container.querySelectorAll(".pill .pill-text")
        ? Array.from(container.querySelectorAll(".pill .pill-text")).map((n) => n.textContent.trim()).filter(Boolean)
        : [];
}

function loadCustomInputs(category){
    elements().categorySpecific.innerHTML = ""
    categoryFormFieldsPreset[category].forEach(preset => {
        createElementByInputPresent(preset)
    })
}

function createElementByInputPresent(preset){
    const type = preset.type
    const field = createFormField[type](preset)
    elements().categorySpecific.appendChild(field);
}

export {
    getPillValues, addPill, loadAspectRatios, loadAngles,
    setStatus, loadTargetsForCategory, loadCameraOptionsForCategory,
    loadCategoriesByStylePreset, fillSelect, loadCustomInputs
}


