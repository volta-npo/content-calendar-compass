export const config = {
  "number": 21,
  "slug": "content-calendar-compass",
  "title": "Content Calendar Compass",
  "category": "Marketing & Content",
  "tagline": "A local-business content calendar that starts from real events, inventory, seasons, and community moments.",
  "persona": "Marketing students managing social accounts.",
  "gap": "Generic content calendars produce generic posts. Local businesses need community-grounded planning.",
  "niche": "Hyperlocal organic marketing for small businesses.",
  "metric": "posts tied to real local moments",
  "modules": [
    "Community event prompts",
    "Seasonal campaign board",
    "Owner voice notes",
    "Publishing checklist"
  ],
  "theme": {
    "accent": "#db2777",
    "accent2": "#f9a8d4",
    "emoji": "\ud83d\udce3",
    "metricLabel": "Content readiness",
    "workflow": [
      "Capture owner voice",
      "Generate channel-ready assets",
      "Review for local fit",
      "Export approved content"
    ],
    "privacy": "Do not publish quotes, photos, or testimonials without explicit owner/client approval."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "community-event-prompts",
      "label": "Community event prompts",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify community event prompts with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "seasonal-campaign-board",
      "label": "Seasonal campaign board",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify seasonal campaign board with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "owner-voice-notes",
      "label": "Owner voice notes",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify owner voice notes with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "publishing-checklist",
      "label": "Publishing checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify publishing checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Content Calendar Compass and capture baseline evidence.",
      "Complete the community event prompts workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Oak & Olive Cafe",
    "chapter": "Dallas",
    "studentLead": "Volta Student Lead",
    "notes": "Neighborhood marketing project with owner-approved content assets. Content Calendar Compass sample.",
    "evidencePrefix": "Content Calendar Compass",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
