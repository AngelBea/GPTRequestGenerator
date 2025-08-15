import {addPill, fillSelect} from "./DOMFactory.js"
import {$, $$, _} from "./selectors.js";

export const createFormField = {
    select : function (selectPreset) {
        const idForKey = getIdForKey(selectPreset.key)
        const selectContainer = document.createElement("div")

        const labelCategory = document.createElement("label")
        labelCategory.htmlFor = idForKey
        labelCategory.innerText = selectPreset.label

        const select = document.createElement("select")
        select.id = idForKey
        select.ariaLabel = selectPreset.label
        select.dataset.pathKey = selectPreset.key
        select.dataset.dynamicFieldType = selectPreset.type

        selectContainer.appendChilds(labelCategory, select)
        fillSelect(select, selectPreset.options)

        return selectContainer
    },
    pills: function (pillsPreset) {
        const idForKey = getIdForKey(pillsPreset.key)
        const listId = `${idForKey}_list`
        const container = document.createElement("div")

        const labelCategory = document.createElement("label")
        labelCategory.htmlFor = idForKey
        labelCategory.innerText = pillsPreset.label

        const pillElement = document.createElement("div")
        pillElement.classList.add("pill-input")

        const pillInput = document.createElement("input");
        pillInput.id = idForKey
        pillInput.dataset.listId = listId
        pillInput.placeholder = pillsPreset.hint
        pillInput.dataset.pathKey = pillsPreset.key
        pillInput.dataset.dynamicFieldType = pillsPreset.type
        events.addEnterPillEvent(pillInput)

        const pillButton = document.createElement("button")
        pillButton.type = "button"
        pillButton.classList.add("add-btn")
        pillButton.inputId = idForKey
        pillInput.ariaLabel = `Add to ${pillsPreset.label}`
        pillButton.innerText = "+"
        pillButton.dataset.inputId = idForKey
        events.addPillButtonEvent(pillButton)

        const list = document.createElement("div")
        list.id = listId
        list.classList.add("pill-container")
        list.ariaLive = "polite"

        pillElement.appendChilds(pillInput, pillButton)
        container.appendChilds(labelCategory, pillElement, list)

        return container;
    },
    text: function(textPreset){
        const idForKey = getIdForKey(textPreset.key)
        const listId = `${idForKey}_list`
        const container = document.createElement("div")

        const labelCategory = document.createElement("label")
        labelCategory.htmlFor = idForKey
        labelCategory.innerText = textPreset.label

        const input = document.createElement("input")
        input.id = idForKey
        input.placeholder = textPreset.placeholder
        input.dataset.pathKey = textPreset.key
        input.dataset.dynamicFieldType = textPreset.type


        container.appendChilds(labelCategory, input)

        return container;
    },
    number: function (numberPreset) {
        const idForKey = getIdForKey(numberPreset.key)
        const listId = `${idForKey}_list`
        const container = document.createElement("div")

        const labelCategory = document.createElement("label")
        labelCategory.htmlFor = idForKey
        labelCategory.innerText = numberPreset.label

        const input = document.createElement("input")
        input.type = "number"
        input.id = idForKey
        input.placeholder = numberPreset.placeholder
        input.dataset.dynamicFieldType = numberPreset.type
        input.dataset.pathKey = numberPreset.key

        container.appendChilds(labelCategory, input)

        return container;
    },
    multi_select: function (multiSelectPreset) {

    }
}
const readValues = {
    select: function (select) {
        return select.value
    },
    pills: function (inputPillElement) {
        const id = inputPillElement.dataset.listId
        const pills = Array.from(_(id).querySelectorAll(".pill .pill-text"))
        return pills ? pills.map((n) => n.textContent.trim()).filter(Boolean) : [];
    },
    text: function (text) {
        return text.value.trim()
    },
    number: function (number) {
        return number.value
    },
    multi_select: function (multiSelect) {}
}
export function setAllDataForSpecificField(obj){
    const categorySpecificFields = $$("[data-path-key]")

    categorySpecificFields.forEach(field => {
        obj.setDeepDataFromField(field)
    })
}

Object.defineProperty(Object.prototype, "setDeepDataFromField", {
    value: function(element) {
        const pathKey = element.dataset.pathKey;
        const typeKey = element.dataset.dynamicFieldType;
        if (!pathKey || !typeKey) return;

        const reader = readValues[typeKey];
        if (!reader) return;

        const parts = pathKey.split(".");
        const last = parts.pop();
        let cur = this;
        for (const k of parts) {
            if (typeof cur[k] !== "object" || cur[k] === null) cur[k] = {};
            cur = cur[k];
        }
        cur[last] = reader(element);
    },
    enumerable: false
});

HTMLElement.prototype.appendChilds = function(...elementChilds){
    elementChilds.forEach( child => {
        this.appendChild(child)
    })
}

function getIdForKey(presetKey){
    return presetKey.replace(".", "_")
}

const events = {
    addEnterPillEvent: function (element) {
        element.addEventListener("keydown", (e) => {
            if (e.key === "Enter") { e.preventDefault(); addPill(e.target); }
        });
    },
    addPillButtonEvent: function (element) {
        element.addEventListener("click", (e) => {
            addPill(_(e.target.dataset.inputId));
        })
    }
}
