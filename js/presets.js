// ===== STYLE PRESETS — Techno-Mystic with Recognizable Earth Elements =====
export const stylePresets = {
    Environment: {
        motif: "Techno-mystic European contemporary: luminous sacred symbols, geometric overlays, and real holographic projections seamlessly integrated into recognizable architecture and street-level elements (trash cans, benches, lights, signage).",
        color_palette_core:
            "Vibrant, high-contrast palette; warm bases (ochres, terracotta, sandy tones) with turquoise skies; muted purples in shadows.",
        color_accents:
            "Ritual neon (teal, magenta, lime) for runes, overlays, holographic projections, and interactive points; used sparingly for focus.",
        materials:
            "Matte, hand-painted surfaces with hologram overlays; exaggerated but readable wear; stone, concrete, brick, ceramic tile, glass, semi-transparent holographic panels.",
        lighting:
            "Bright cel-shaded with 2–3 tone ramps; sharp color separation; strong rim light on silhouettes; no realistic PBR gloss.",
        weather_fx:
            "Stylized dust, cartoon clouds, Niagara light motes and scanning streaks; holographic rain lines if applicable.",
        mood_tone:
            "Adventurous yet familiar; light pop-culture humor; high-tech mysticism layered over everyday life.",
        shader_style: "Toon ramp shader with bold outlines; minimal gloss; hologram light layers on world surfaces.",
        references: [
            "Borderlands environments",
            "Fortnite stylized worlds",
            "Ratchet & Clank planets",
            "Real Mediterranean architecture (tiled roofs, shutters, plazas)"
        ],
        earth_anchors: [
            "Real street signage (European typography, traffic color codes, arrows) overlaid with FARM Vision light layers",
            "Urban furniture: streetlamps, benches, trash bins, crosswalks — each with subtle holographic enhancements",
            "Local building materials: exposed concrete, brick, limestone, ceramic tile",
            "Recognizable vegetation: Mediterranean pines, olive trees, plane trees",
            "Languages in signage: es-ES/pt-PT/fr-FR; avoid fictional alphabets except in luminous overlays",
            "Human-scale proportions: sidewalks, curbs, railings",
            "Holún iconography layered as holograms, not replacing real-world texture"
        ]
    },

    Character: {
        motif:
            "Cartoonish silhouettes with real cultural markers (European urban clothing, PPE, safety vests) ‘infused’ with light devices/insignia and personal hologram accessories.",
        body_shape_language:
            "Readable, chunky forms; stylized anatomy; slightly oversized props for clarity.",
        color_palette_core:
            "Earthy/urban base (grays, work blues, ochres) with faction light accents (teal, magenta, lime).",
        materials:
            "Fabric, leather, ABS plastic, painted metal; all matte, hand-painted; bold outlines; occasional holographic detail layers.",
        lighting: "Cel-shade with 2–3 tone ramps; colored rim light; hologram glow on gear elements.",
        proportions:
            "Slightly larger head, expressive hands; gear slightly oversized for readability.",
        face_expression: "Expressive cartoon style; clean linework.",
        shader_style: "Cel shader with outlines; holographic emissive layers; no realistic subsurface scattering.",
        mood_tone: "Approachable, cheeky; competent; subtle humor.",
        references: [
            "Borderlands characters",
            "Overwatch heroes",
            "Dofus humor style",
            "European street fashion / technical workwear"
        ],
        earth_anchors: [
            "Recognizable clothing: hoodies, parkas, safety boots, trekking backpacks",
            "Patches and badges with real text in es-ES/fr-FR",
            "Real civil/industrial gear: walkie-talkies, harnesses, helmets, reflective vests with holographic glow strips",
            "Visible stitching/seams: stylized zippers, marked seams",
            "Contemporary hairstyles and accessories (glasses, masks, earplugs) with light-based enhancements"
        ]
    },

    Prop: {
        motif:
            "Everyday objects ‘touched’ by FARM Vision: holographic layers, data runes, geometric seals — still recognizable as real-world tools, trash cans, lights, and signage.",
        color_palette_core:
            "Industrial/safety colors (construction yellow, orange, electric blue) with faction light accents.",
        materials:
            "ABS plastic, rubber, painted metal, wood; matte textures with hand-painted highlights; cartoon scratches; hologram display surfaces.",
        silhouette:
            "Bold, readable shapes; asymmetry allowed for personality.",
        lighting: "High-contrast cel-shaded; rim light; holographic emissive glow.",
        wear_damage: "Exaggerated chips and scratches but kept clean/readable.",
        shader_style: "Toon ramp with minimal gloss; integrated hologram layer.",
        mood_tone: "Playfully utilitarian: ‘miracle tools’ but recognizable.",
        references: [
            "Borderlands loot crates",
            "Team Fortress 2 props",
            "Contemporary European tools/equipment"
        ],
        earth_anchors: [
            "CE/EU compliance stickers with holographic seal",
            "Labels with stylized QR/barcodes glowing faintly",
            "Realistic fasteners and closures (allen, torx, buckles) with light hints",
            "Standard connectors (Schuko/Type-C variants, hoses, couplings)",
            "Measurements in mm/cm; metric numerical UI projected as light"
        ]
    },

    UI: {
        motif:
            "Diegetic HUD as ‘condensed light’ over recognizable interfaces (reticles, metro maps, European signage) with holographic distortion.",
        overall_look:
            "Clean cel-shaded; low-emission holograms; geometric, readable typography.",
        shape_language:
            "Rounded rectangles, concentric circles, hex grids; sub-layers with DIN-style technical grids.",
        color_palette_core:
            "Teal/turquoise, warm orange, signal yellow; magenta/lime accents sparingly.",
        typography:
            "Geometric sans with tabular numbers; bold weights for headers; default es-ES language.",
        iconography:
            "Thick pictograms (2–3px lines) inspired by signage/ISO; flat with light rim.",
        shader_style: "Toon ramp with outline; very low bloom; holographic noise pattern.",
        effects:
            "Soft scan lines, micro-parallax; subtle ‘glitch’ effect on sync errors; holographic distortion around edges.",
        mood_tone: "Clear, playful, never blocking legibility.",
        references: [
            "European metro systems (map/wayfinding)",
            "EU road signage",
            "Borderlands UI / Dofus rhythm"
        ],
        earth_anchors: [
            "Metric units (km, m, ºC)",
            "Simplified ISO icons (exit, info, hazard) with holographic line effect",
            "Real localized text (no lorem ipsum); default es-ES",
            "Safety palettes (yellow/black, red stop, blue info)"
        ]
    },
    Farmie: {
        "motif": "Techno-mystic creature design that fuses light-born glyph tech with earthly familiarity; quirky, ironic Dofus-like mob energy plus Digimon-style tech-organic fusion; asymmetrical, toyetic, and combat-readable.",
        "body_shape_language": "Highly stylized, asymmetrical, and personality-driven silhouettes; body parts may exaggerate scale, texture, or function to emphasize role and lore.",
        "color_palette_core": "Biome-anchored base tones (urban grays, sunbaked ochres, rust reds, coastal blues) with saturated, high-contrast Type accents (electric cyan, molten orange, deep violet, radiant gold) placed to guide focus.",
        "materials": "Hand-painted matte textures with visible brush strokes; bold edge highlights; patchwork wear and repairs; selective metal/crystal inserts for techno-mystic flair.",
        "lighting": "Flat cel-shading with 2–3 tone ramps; colored rim light keyed to Type accent; clean graphic shadows (no photo-soft gradients).",
        "shader_style": "Toon ramp with strong outlines; layered emissive masks for glyphs/circuits/runes; no photoreal materials; stylized specular only on metal/crystal.",
        "mood_tone": "Quirky and playful with an undercurrent of mystical power; looks at home in a lighthearted yet dangerous world.",
        "earth_anchors": [
            "Anatomy or structure hints from real-world fauna or objects (paws, hinged plates, lantern-like pods, street-sign shapes)",
            "Occasional scale cues via familiar props in frame (bench, streetlamp, doorway)"
        ],
        "references": [
            "Dofus monsters for comedic exaggeration and playful menace",
            "Digimon for tech-organic hybrids and layered detailing",
            "Borderlands-style irreverence for tone"
        ]
    }
};


// ===== TARGETS DISPONIBLES POR CATEGORÍA =====
export const targetsByCategory = {
    Environment: [
        "concept_art",
        "key_art",
        "moodboard",
        "blockout_overlay",
        "orthographic_set",
        "paintover",
        "level_flythrough",
        "lighting_study",
        "before_after_variant",
    ],
    Character: [
        "concept_art",
        "model_sheet",
        "turnaround",
        "orthographic_set",
        "expression_sheet",
        "pose_sheet",
        "combat_action_pose",
        "costume_variant_lineup",
        "silhouette_exploration",
    ],
    Prop: [
        "concept_art",
        "orthographic_set",
        "exploded_view",
        "variant_lineup",
        "decal_sheet",
        "material_callout_sheet",
        "scale_reference_sheet",
    ],
    UI: [
        "hud_mockup",
        "widget_sheet",
        "icon_set",
        "state_matrix",
        "flow_wireframe",
        "animation_prototype",
        "layout_variants",
    ],
    Farmie: [
        "concept_art",
        "model_sheet",
        "turnaround",
        "orthographic_set",
        "pose_sheet",
        "silhouette_exploration",
        "evolution_lineup",
        "variant_lineup",
        "biome_integration_sheet",
        "callout_sheet",
        "material_swatches_sheet",
        "scale_reference_sheet",
        "expression_or_attitude_sheet",
        "action_pose_sheet",
        "moodboard"
    ]
};

// Camera mode options by category
export const cameraModesByCategory = {
    Environment: [
        "wide",
        "mid",
        "close_up",
        "macro",
        "three_quarter",
        "isometric_3_4",
        "orthographic",
        "establishing",
        "low_angle_hero",
        "high_angle_overview",
        "top_down"
    ],
    Character: [
        "full_body",
        "mid_body",
        "portrait",
        "three_quarter",
        "isometric_3_4",
        "orthographic",
        "close_up",
        "low_angle_hero",
        "high_angle_overview",
        "top_down",
        "dynamic_action",
        "profile_side",
        "front_view",
        "rear_view"
    ],
    Farmie: [
        "full_body",
        "mid_body",
        "close_up",
        "low_angle_hero",
        "high_angle_overview",
        "top_down",
        "dynamic_action",
        "profile_side",
        "isometric_3_4",
        "front_view",
        "rear_view"
    ],
    Prop: [
        "isometric",
        "isometric_3_4",
        "three_quarter",
        "front_view",
        "rear_view",
        "orthographic",
        "macro",
        "close_up",
        "high_angle_overview",
        "top_down",
        "profile_side"
    ],
    UI: [
        "screen_mockup",
        "widget_closeup",
        "icon_grid",
        "flow_overview",
        "close_up"
    ]
};

// Shot angle options by category
export const cameraAngles = {
    Environment: [
        "eye_level",
        "low_angle",
        "high_angle",
        "top_down",
        "bird_eye",
        "worm_eye",
        "dutch_tilt",
        "panoramic_sweep"     // implied wide sweep; use sparingly
    ],
    Character: [
        "eye_level",
        "low_angle_hero",
        "high_angle_overview",
        "top_down",
        "over_the_shoulder",
        "three_quarter_angle",
        "profile_side_angle",
        "dutch_tilt"
    ],
    Farmie: [
        "eye_level",
        "low_angle_hero",
        "high_angle_overview",
        "top_down",
        "three_quarter_angle",
        "profile_side_angle",
        "dutch_tilt",
        "worm_eye"            // for imposing bosses/creatures
    ],
    Prop: [
        "eye_level",
        "three_quarter_angle",
        "front_orthogonal",
        "side_orthogonal",
        "top_down",
        "macro_oblique"       // slight oblique for detail readability
    ],
    UI: [
        "screen_front",
        "screen_three_quarter",
        "top_down_board",     // for flows/diagrams
        "tilt_parallax"       // subtle tilt to imply depth
    ]
};

const characterHumanoidPreset = [
    {
        key: "identity_reference.age_range",
        label: "Age Range",
        type: "select",
        options: ["child","teen","young_adult","adult","elder"]
    },
    {
        key: "identity_reference.body_type",
        label: "Body Type",
        type: "select",
        options: ["slim","average","athletic","heavy","stylized_exaggerated"]
    },
    {
        key: "identity_reference.hair_type",
        label: "Hair Type",
        type: "select",
        options: ["long","long-medium","medium","short","shaved"]
    },
    {
        key: "identity_reference.height_cm",
        label: "Height (cm)",
        type: "number",
        placeholder: "e.g., 145"
    },
    {
        key: "identity_reference.cultural_cues",
        label: "Cultural Cues",
        type: "select",
        options: [
            "european_urban",
            "mediterranean",
            "iberian_rural",
            "atlantic_coastal",
            "northern_european",
            "eastern_european",
            "north_african_influence",
            "latin_urban",
            "industrial_worker",
            "municipal_services",
            "academic_lab",
            "gym_military_base",
            "clergy_mutated",
            "techno_mystic_cult"
        ]
    },
    {
        key: "identity_reference.faction_or_origin",
        label: "Faction / Origin",
        type: "select",
        options: ["Holún","Retícula","Santa_Reacción","Corp_T","Independent"]
    },
    {
        key: "faction_markings.logos_or_insignia",
        label: "Faction Insignia",
        type: "pills",
        hint: "Add codes like HOL-01, RET-05, etc."
    },
    {
        key: "faction_markings.placement_rules",
        label: "Insignia Placement",
        type: "select_multi",
        options: [
            "arm_patch_left",
            "arm_patch_right",
            "shoulder_left",
            "shoulder_right",
            "chest_small",
            "chest_center",
            "back_center_large",
            "backpack_tag",
            "belt_buckle",
            "thigh_holster",
            "collar_tab",
            "cap_side",
            "helmet_front",
            "glove_backhand"
        ]
    },
    {
        key: "design_language.shape_language",
        label: "Shape Language",
        type: "select",
        options: [
            "chunky_readable",
            "angular",
            "rounded",
            "blocky",
            "elongated",
            "organic_flowing",
            "spiky",
            "geometric_patterned",
            "asymmetrical"
        ]
    },
    {
        key: "outfit_layers_reference.base",
        label: "Outfit Base",
        type: "pills",
        hint: "e.g., tshirt, hoodie, work_shirt"
    },
    {
        key: "outfit_layers_reference.mid",
        label: "Outfit Mid",
        type: "pills",
        hint: "e.g., parka, light_armor, harness"
    },
    {
        key: "outfit_layers_reference.outer",
        label: "Outfit Outer",
        type: "pills",
        hint: "e.g., coat, poncho, safety_vest"
    },
    {
        key: "outfit_layers_reference.footwear",
        label: "Footwear",
        type: "select",
        options: ["safety_boots","sneakers","trekking"]
    }
];

const farmiePreset = [
    {
        key: "taxonomy_reference.biome_affinity",
        label: "Biome Affinity",
        type: "select",
        options: ["urban","mediterranean","industrial","subterranean","coastal","highland"]
    },
    {
        key: "taxonomy_reference.temperament",
        label: "Temperament",
        type: "select",
        options: ["docile","curious","mischievous","aggressive","aloof"]
    },
    {
        key: "combat_read.class",
        label: "Type Element",
        type: "select",
        options: ["Dark","Light","Echo","Crystal","Radioactive","Code","Corrupt","Mineral","Beast","Númen"]
    },
    {
        key: "combat_read.magis_nature",
        label: "Magis Nature",
        type: "select",
        options: ["Physical","Mental","Energetic","Passive"]
    },
    {
        key: "combat_read.base_role",
        label: "Base Role",
        type: "select",
        options: ["striker","tank","controller","support"]
    },
    {
    key: "design_language.shape_language",
        label: "Shape Language",
        type: "select",
        options: [
            "rounded",            // Soft, friendly, approachable
            "angular",            // Sharp, aggressive, hostile
            "crystalline",        // Faceted, gem-like, refractive
            "segmented",          // Insectoid, mechanical, plated
            "blocky",             // Solid, stable, heavy
            "elongated",          // Tall, thin, agile
            "organic_flowing",    // Smooth curves, natural forms
            "spiky",              // Extreme aggression, danger
            "geometric_patterned",// Repetitive motifs, symmetrical
            "asymmetrical"        // Uneven, chaotic, alien
        ]
    },
    {
        key: "evolution_reference.evolution_chain",
        label: "Evolution Stages",
        type: "pills",
        hint: "Add stage labels like E0_Base, E1_Proto, E2_Final"
    }
];

export const categoryFormFieldsPreset = {
    Character: characterHumanoidPreset,
    Farmie: farmiePreset
};

export const aspectRatios = [
    "16:9", "21:9", "16:10", "4:3", "3:2", "1:1", "9:16", "4:5"
];
