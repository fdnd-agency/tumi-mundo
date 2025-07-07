# CONTRIBUTING.md

Welkom bij ons project! Hieronder vind je richtlijnen voor het bijdragen aan de codebase en workflow.

---

## Branch Conventies

- Gebruik de naamgeving: `feature/[naam]` voor nieuwe features.
- Gebruik `bugfix/[naam]` voor bugfixes.
- Zorg ervoor dat de branch-naam kort en duidelijk is.

---

## Commit Richtlijnen

We gebruiken **Conventional Commits** met optionele gitmoji’s en verplicht issue-referencing. Dit helpt bij **Semantic Versioning**, changelogs en duidelijkheid.

**Structuur commit message:**  
`<type>[optional scope]: <description> [optional gitmoji] #<issue-number>`

**Voorbeelden:**
- `feat(nav): Add header animation ✨ #24`
- `fix: Correct footer link styling 🐛 #42`
- `docs(readme): Update contributing section 📚 #17`

### Allowed Commit Types

- **build:** Wijzigingen aan build-systeem of externe dependencies
- **chore:** Aanpassingen buildproces of hulpbestanden (bijv. config)
- **ci:** Wijzigingen aan CI-configuratie (bijv. GitHub Actions)
- **docs:** Aanpassingen aan documentatie (README, Wiki, Figma)
- **feat:** Nieuwe feature
- **fix:** Oplossing voor bug, style of layout issue
- **perf:** Code die performance verbetert
- **refactor:** Herstructurering zonder nieuwe feature of bugfix
- **style:** Leesbaarheid verbeteren (formatting, witregels)
- **test:** Tests toevoegen of verbeteren

### Referencing Issues

Voeg altijd het gekoppelde issue-nummer toe aan het einde: `#<issue-number>`.

### Committing Strategy

- Commit **vaak**: elke keer dat je werk wilt bewaren
- Gebruik `wip` (work in progress) als tijdelijke commits nodig zijn
- Push minimaal **één keer per dag** naar `dev`

---

## Pull Request Richtlijnen

- Duidelijke titel die de wijziging beschrijft
- Korte beschrijving van de veranderingen
- Relevante opmerkingen of uitleg toevoegen
- Screenshots of GIFs van het resultaat toevoegen
- Minimaal één teamlid reviewt de pull request

**Checklist:**
- [ ] Code is getest
- [ ] Geen ongebruikte bestanden of code
- [ ] Code volgt de conventies

---

## Code Conventies

### HTML

- Gebruik **semantische HTML** voor toegankelijkheid
- Zorg voor **herbruikbare componenten**
- Indentatie: **1 tab** per niveau
- Attributen: **dubbele aanhalingstekens**
- Gebruik ingebouwde HTML-functionaliteiten, zoals formulier-validatie

```html
<section id="about-section">
  <h2>About Us</h2>
  <p>Welcome to our website!</p>
</section>
```

### CSS

- Klassen en ID’s in **kebab-case**
- Gebruik **nesting** voor structuur
- Gebruik **CSS-variabelen** voor stijlbeheer
- Indentatie: **1 tab**
- Gebruik **container queries** voor responsive gedrag

```css
:root {
  --primary-color: #3498db;
}

.header {
  background-color: var(--primary-color);
  padding: 1rem;
}
```

### JavaScript

- Variabelen en functies in **camelCase**
- Gebruik **const** en **let**, vermijd `var`
- Voeg nuttige comments toe
- Indentatie: **1 tab**
- Gebruik **enkele aanhalingstekens**

```js
const initializeApp = () => {
  console.log('App initialized');
};

initializeApp();
```

---

## Workflow

- **Commit Early, Push Once a Day**
  - Commit regelmatig
  - Push minimaal 1x per dag
- **Samenwerken:** Vraag hulp als je vastloopt
- **Clean Code:** Schrijf leesbare en nette code
- **Engels:** Gebruik Engelse namen en termen

---
