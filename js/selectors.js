export const $  = (q) => document.querySelector(q);
export const $$ = (q) => Array.from(document.querySelectorAll(q));
export const _ = (q) => document.getElementById(q)

export function elements() {
    return {
        category:        $("#category"),
        generationTarget:$("#generation_target"),
        assetId:         $("#asset_id"),
        brief:           $("#brief"),
        cameraMode:      $("#camera_mode"),
        angle:           $("#angle"),
        aspectRatio:     _("aspect_ratio"),
        mustInput:       $("#must_input"),
        mustList:        $("#must_list"),
        avoidInput:      $("#avoid_input"),
        avoidList:       $("#avoid_list"),
        genBtn:          $("#genBtn"),
        copyBtn:         $("#copyBtn"),
        output:          $("#output"),
        status:          $("#status"),
        addButtons:       $$(".add-btn"),
        // registry
        registrySearch:  $("#registry_search"),
        registryList:    $("#registry_list"),
        connectBtn:      $("#connectBtn"),
        saveNowBtn:      $("#saveNowBtn"),
        exportBtn:       $("#exportBtn"),
        clearBtn:        $("#clearBtn"),
        importInput:     $("#importInput"),
        fsStatus:        $("#fsStatus"),
        cameraAngle:     _("camera_angle"),
        categorySpecific: _("category_specific")
    };
}
