export const domain = {
    "kind": "content-calendar",
    "title": "Content Calendar Compass",
    "purpose": "A purpose-built content calendar interface for a local-business content calendar that starts from real events, inventory, seasons, and community moments.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Content plan",
    "metricLabels": [
        "Localness Score",
        "Approval Coverage",
        "Cadence Health"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Oak & Olive Cafe",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "posts tied to real local moments",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "start-date",
            "label": "Start date",
            "type": "date",
            "sample": "2026-03-10",
            "placeholder": "Enter start date"
        },
        {
            "id": "deadline-date",
            "label": "Deadline date",
            "type": "date",
            "sample": "2026-04-15",
            "placeholder": "Enter deadline date"
        },
        {
            "id": "cadence-days",
            "label": "Cadence days",
            "type": "number",
            "sample": 7,
            "placeholder": "Enter cadence days"
        },
        {
            "id": "review-buffer-days",
            "label": "Review buffer days",
            "type": "number",
            "sample": 3,
            "placeholder": "Enter review buffer days"
        }
    ],
    "rows": [
        "Client voice profile complete",
        "Local events entered",
        "Seasonal hooks entered",
        "Inventory/promos entered",
        "30/60/90 day calendar generated",
        "CTA variants generated",
        "Owner approvals tracked",
        "CSV calendar exported"
    ],
    "artifacts": [
        "30-day calendar",
        "Post briefs",
        "CSV posting plan"
    ],
    "checks": [
        "Every post needs date/channel/local hook/CTA",
        "Owner approval before publish",
        "No unapproved claims/photos"
    ],
    "sampleClient": "Oak & Olive Cafe"
};
//# sourceMappingURL=domain.js.map