import {getPillValues, setStatus} from "./DOMFactory.js";
import {stylePresets} from "./presets.js";
import {elements} from "./selectors.js";
import {setAllDataForSpecificField} from "./DynamicForm.js";

function generateJSONByCategory(category){

}
function generateJSON() {
    const category = document.getElementById("category").value;
    const output = {
        asset_id: document.getElementById("asset_id").value.trim(),
        category,
        generation_target: document.getElementById("generation_target").value,
        brief: document.getElementById("brief").value.trim(),
        constraints: {
            must_include: getPillValues("must"),
            avoid: getPillValues("avoid"),
        },
        shot_setup: {
            camera_mode: elements().cameraMode.value,
            camera_angle: elements().cameraAngle.value,
            aspect_ratio: elements().aspectRatio.value
        },
        style_preset_details: stylePresets[category],
    };
    setAllDataForSpecificField(output)
    document.getElementById("output").value = JSON.stringify(output, null, 2);
    document.getElementById("copyBtn").disabled = !document.getElementById("output").value.trim();
    setStatus("JSON generado.", true);
}

async function copyJSON() {
    const text = elements().output?.value || "";
    if (!text) return setStatus("No hay JSON que copiar.", false);
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            const ta = elements().output;
            ta.removeAttribute("readonly");
            ta.select();
            document.execCommand("copy");
            ta.setAttribute("readonly", "readonly");
            window.getSelection().removeAllRanges();
        }
        setStatus("Copiado al portapapeles.", true);
    } catch (e) {
        console.error(e);
        setStatus("Fallo al copiar. Copia manualmente.", false);
    }
}

export{
    copyJSON, generateJSON
}
