# AI Developer Guidelines: @lenalena_crochet Project Catalog

## 1. Project Purpose
**Goal:** A static, beautifully designed online catalog showcasing completed crochet projects by @lenalena_crochet, organized into four main categories.
**Target Workflow:** I will provide the AI with a new crochet project's details (Category, Name, Description, Time, Price, and Image). The AI will automatically format this into a new project block and insert it into the correct category page.

## 2. File Structure & Naming Rules
When modifying the site, strictly follow this folder structure:
* `index.html` - The main homepage showcasing the 4 main categories.
* `assets/css/style.css` - The global stylesheet.
* `assets/images/` - Folder for all crochet project images.
* `categories/` - The folder containing the scrollable catalog pages:
  * `wearables.html`
  * `accessories.html`
  * `plushies.html`
  * `keychains-charms.html`

## 3. Overall Style & Design Vibe
* **Color Palette:** Pastel colors, strictly dominated by pastel blues (e.g., background `#F0F8FF`, with pastel blue UI accents). 
* **Typography:** Clean, soft, and readable (e.g., 'Quicksand', 'Nunito', or system sans-serif).
* **Vibe:** Crafty, gentle, and organized. Use soft rounded corners for images and containers.

## 4. Page Structure & Formatting Guidelines

### A. The Homepage (`index.html`)
* **Header:** Must prominently display the title: `@lenalena_crochet Project`.
* **Main Content:** A grid of 4 clickable category images representing: Wearables, Accessories, Plushies, and Keychains & Charms. Clicking an image routes to the respective file in the `/categories/` folder.
* **Global Footer:** Fixed at the absolute bottom-left corner of the browser window, display the text: `(by @lenalena_crochet)`.

### B. Category Catalog Pages (`categories/*.html`)
Each category page is a scrollable feed of projects. 
1. **Category Header:** A title at the top indicating the current category.
2. **Project Blocks:** Every project is a two-column flexbox/grid row containing:
   * **Left:** The picture of the crochet project.
   * **Right:** The project details:
     * `<h2>` [Name of the project]
     * `<p>` **Description:** [Description]
     * `<p>` **Estimated production time:** [Time]
     * `<p>` **Price:** [Price in NTD]
3. **Spacing:** There must be a clear vertical gap (margin) between each project block.
4. **Bottom Navigation & Footer Layout:** 
   * Provide ample whitespace below the very last project.
   * **Back Button:** Placed at the bottom left of the scrolling container to return to `index.html`. 
   * **Global Footer:** The `(by @lenalena_crochet)` text must remain pinned to the *absolute most bottom-left corner* of the screen. The Back button should sit just above or to the right of this fixed text so they do not overlap.

## 5. Strict AI Execution Rules for Adding New Content
Whenever I prompt the AI to "Add a new crochet project", the AI MUST execute the following steps in order:
1. **Verify Data:** Check if I provided the Category, Name, Description, Time, Price in NTD, and Image filename.
2. **Locate Target File:** Identify the correct file in the `/categories/` folder based on my input.
3. **Append Content:** Generate the HTML block for the new project (Image left, Text right) and insert it at the top of the project list inside that category file.
4. **Preserve Layout:** Do not touch the footer or Back button placement at the bottom of the document.
5. **CSS Consistency:** Do not write inline styles. Rely on `../assets/css/style.css`.