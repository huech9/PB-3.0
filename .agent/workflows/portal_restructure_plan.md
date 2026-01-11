---
description: Plan to restructure the portal workflow and implement the detailed Practice Matter Reporting feature.
---

# Portal Restructuring & Reporting Feature Plan

## Objective
To streamline the main landing page by moving the specific enquiry selection to a secondary step ("Part 2") and to implement a detailed submission form for "Report on Practice Matters" with specific fields.

## Current State
- **index.html**: Displays both the "Submit an Enquiry" button and the detailed 3-card selection section (Member, Public, Report) on the main page.
- **submission.html**: A generic form handling all types with basic fields (Name, Email, Subject, Message). It does not have specific fields for "Practice Reports".

## Proposed Changes

### 1. New Page: Enquiry Selection (Part 2)
Create a new file `enquiry_selection.html`.
- **Content**: Move the "Section 3" (The 3 Cards: Member, Public, Report) from `index.html` to this page.
- **Design**: Clean layout with a header "Select Enquiry Type" and a "Back" button.
- **Function**: This becomes the destination for the "Submit an Enquiry" button.

### 2. Update Booking/Landing Page (Part 1)
Modify `index.html`.
- **Action**: Remove the "Section 3" (The 3 Cards) entirely.
- **Link**: Update the "Submit an Enquiry" shortcut button to link to `enquiry_selection.html` instead of `submission.html`.

### 3. Enhance Submission Form (Report Feature)
Modify `submission.html`.
- **New Fields**: Add specific input fields that appear *only* when "Practice Matter Report" is selected.
    - **Issue Category** (Dropdown):
        - Local Authority (PBT)
        - Government Agency
        - Developer
        - Contractor
        - Consultant
        - Other
    - **Name of Party Against** (Text Input): Required field to specify the entity involved.
- **Logic**: Update `toggleFields()` JavaScript to show/hide these new fields based on the radio selection.

## Execution Steps
1.  **Create `enquiry_selection.html`** using the existing design components from `index.html`.
2.  **Edit `index.html`** to remove the cards and update main navigation links.
3.  **Edit `submission.html`** to add the new "Report" specific fields and conditional logic.
4.  **Verify** the flow: Home -> Enquiry Selection -> Specific Form Fields.
