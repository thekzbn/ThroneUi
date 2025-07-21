# ThroneUi

Ultra-minimalist HTML UI library with strict 3-color design system. Built with vanilla HTML, CSS, and JavaScript.

## Design Philosophy

ThroneUi is built on the principle that **constraints breed creativity**. By limiting ourselves to just 3 colors and eliminating visual noise, we create interfaces that are both beautiful and purposeful.

### Core Principles

- **3 Colors Maximum**: Gold (#d6ad60), Black (#000), White (#fff)
- **No Shadows**: Clean, flat design with no drop shadows or box shadows
- **Strategic Borders**: Minimal 1px borders ONLY where absolutely necessary
- **Vanilla-First**: Pure HTML, CSS, and JavaScript only
- **Typography-Driven**: Visual hierarchy through scale, weight, and spacing

## Quick Start

### CDN (Recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/throne-ui@main/dist/throne-ui.min.css">
<script src="https://cdn.jsdelivr.net/gh/yourusername/throne-ui@main/dist/throne-ui.min.js"></script>
```

### Download

1. Download the latest release
2. Include the CSS and JS files in your project:

```html
<link rel="stylesheet" href="path/to/throne-ui.css">
<script src="path/to/throne-ui.js"></script>
```

### Local Development

```bash
git clone https://github.com/yourusername/throne-ui.git
cd throne-ui
npm start
```

## Color System

```css
:root {
  --gold: #d6ad60;
  --white: #fff;
  --black: #000;
  
  /* Light mode */
  --bg-color: var(--white);
  --text-color: var(--black);
  --accent-color: var(--gold);
  --text-secondary: #666;  /* Muted black only */
}

[data-theme="dark"] {
  --bg-color: var(--black);
  --text-color: var(--white);
  --accent-color: var(--gold);
  --text-secondary: #999;  /* Muted white only */
}
```

## Components

### Hero Section

```html
<section class="hero">
  <h1 class="hero-title">Your Title</h1>
  <p class="hero-subtitle">Accent subtitle</p>
  <p class="hero-description">Description text</p>
</section>
```

### Buttons

```html
<!-- Primary button -->
<button class="btn btn-primary">Primary Action</button>

<!-- Link button -->
<button class="btn btn-link">Secondary Action</button>

<!-- Icon button -->
<button class="btn btn-icon">
  <span class="material-icons">favorite</span>
  With Icon
</button>
```

### Cards

```html
<!-- Project card (no borders) -->
<div class="card card-project">
  <h3 class="card-title">Project Title</h3>
  <div class="card-subtitle">Subtitle</div>
  <p class="card-description">Description text</p>
</div>

<!-- Certification card (with border - exception) -->
<div class="card card-cert">
  <h3 class="card-title">Certification</h3>
  <div class="card-subtitle">Authority</div>
  <p class="card-description">Details</p>
</div>
```

### Navigation

```html
<nav class="nav">
  <a href="#" class="nav-brand">Brand</a>
  <ul class="nav-links">
    <li><a href="#" class="nav-link active">Home</a></li>
    <li><a href="#" class="nav-link">About</a></li>
  </ul>
  <button class="theme-toggle">🌙</button>
</nav>
```

### Forms (Borders Allowed - Exception)

```html
<form>
  <div class="form-group">
    <label class="form-label" for="input">Label</label>
    <input type="text" id="input" class="form-input" placeholder="Placeholder">
  </div>
  <div class="form-group">
    <label class="form-label" for="textarea">Message</label>
    <textarea id="textarea" class="form-textarea"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">2023 - Present</div>
    <h3 class="timeline-title">Position</h3>
    <div class="timeline-company">Company</div>
    <p class="timeline-description">Description</p>
  </div>
</div>
```

### Grid System

```html
<!-- 2-column grid -->
<div class="grid grid-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 3-column grid -->
<div class="grid grid-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Profile Images (Borders Allowed - Exception)

```html
<div class="profile-image">
  <img src="avatar.jpg" alt="Profile" width="80" height="80">
</div>
```

## JavaScript API

### Theme Management

```javascript
// Toggle theme
window.throneUI.toggleTheme();

// Set specific theme
window.throneUI.setTheme('dark'); // or 'light'
```

### Component Creation

```javascript
// Create button
const button = ThroneUI.createButton('Click me', 'btn-primary', () => {
  alert('Clicked!');
});

// Create card
const card = ThroneUI.createCard('Title', 'Subtitle', 'Description', 'card-project');

// Create form group
const formGroup = ThroneUI.createFormGroup('Email', 'email', 'Enter email', true);

// Create timeline
const timeline = ThroneUI.createTimeline([
  {
    date: '2023 - Present',
    title: 'Senior Developer',
    company: 'TechCorp',
    description: 'Leading development initiatives.'
  }
]);

// Create grid
const grid = ThroneUI.createGrid(['Item 1', 'Item 2', 'Item 3'], 3);
```

### Animations

```javascript
// Fade in element
ThroneUI.fadeIn(element, 300);

// Slide up element
ThroneUI.slideUp(element, 300);

// Smooth scroll to element
ThroneUI.smoothScrollTo('section-id');
```

## Utility Classes

### Spacing

- `mb-1`, `mb-2`, `mb-3`, `mb-4` - Margin bottom
- `mt-1`, `mt-2`, `mt-3`, `mt-4` - Margin top
- `p-1`, `p-2`, `p-3`, `p-4` - Padding

### Typography

- `text-large`, `text-small`, `text-xs` - Text sizes
- `text-secondary`, `text-accent` - Text colors
- `text-center`, `text-left`, `text-right` - Text alignment

### Layout

- `flex`, `flex-col` - Flexbox
- `items-center`, `justify-center`, `justify-between` - Flex alignment
- `gap-1`, `gap-2`, `gap-3`, `gap-4` - Gap spacing
- `container` - Max-width container with padding

## Design Constraints

### ✅ Allowed

- 3 colors: Gold (#d6ad60), Black (#000), White (#fff)
- Muted variants: #666 (light mode), #999 (dark mode)
- Form input borders
- Profile image borders (3px solid gold)
- Certification card borders (1px solid muted)
- Color transitions
- `translateY(-2px)` hover effects
- Typography hierarchy
- Generous spacing

### ❌ Forbidden

- Any shadows (box-shadow, text-shadow, drop-shadow)
- Additional colors beyond the 3-color system
- Borders on most elements (except the 3 exceptions)
- Gradients
- Complex animations
- Decorative elements
- Border separators between grid items
- Visual noise or unnecessary decoration

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (following the design constraints)
4. Test your changes
5. Submit a pull request

## License

MIT License. See [LICENSE](LICENSE) for details.

## Philosophy

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry

ThroneUi embodies this philosophy by showing how powerful simplicity can be when executed with precision and intention. Every element serves a clear purpose, every color choice is deliberate, and every constraint pushes us toward better design decisions.

The library proves that you don't need dozens of colors, complex shadows, or decorative elements to create beautiful, functional interfaces. Sometimes, the most elegant solution is the simplest one.
