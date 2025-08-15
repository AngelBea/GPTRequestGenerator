import {_, elements} from "./selectors.js";
import {
    addPill,
    loadAngles,
    loadAspectRatios,
    loadCameraOptionsForCategory,
    loadCategoriesByStylePreset,
    loadCustomInputs,
    loadTargetsForCategory
} from "./DOMFactory.js";
import {copyJSON, generateJSON} from "./JSONUtils.js";

window.addEventListener("DOMContentLoaded", () => {
    loadCategoriesByStylePreset()
    loadTargetsForCategory(elements().category.value);
    const currentCategory = elements().category;

    currentCategory.addEventListener("change", (e) =>{
        loadTargetsForCategory(e.target.value);
        loadCustomInputs(e.target.value);
    });
    elements().genBtn.addEventListener("click", generateJSON);
    elements().copyBtn.addEventListener("click", copyJSON);

    elements().addButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            addPill(_(e.target.dataset.inputId));
        })
    });

    elements().mustInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); addPill(e.target); }
    });
    elements().avoidInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); addPill(e.target); }
    });

    loadCameraOptionsForCategory(currentCategory.value);
    loadAngles(currentCategory.value);
    loadAspectRatios();

    document.getElementById("category").addEventListener("change", (e) => {
        loadTargetsForCategory(e.target.value);
        loadCameraOptionsForCategory(e.target.value);
    });
});
