# throne ui

ultra-minimalist html ui library with strict 3-color design system. built with vanilla html, css, and javascript.

**created by thekzbn, age 15**

## design philosophy

throne ui is built on the principle that **constraints breed creativity**. by limiting ourselves to just 3 colors and eliminating visual noise, we create interfaces that are both beautiful and purposeful.

### core principles

- **3 colors maximum**: gold (#d6ad60), black (#000), white (#fff)
- **no shadows**: clean, flat design with no drop shadows or box shadows
- **strategic borders**: minimal 1px borders only where absolutely necessary
- **vanilla-first**: pure html, css, and javascript only
- **typography-driven**: visual hierarchy through scale, weight, and spacing

## features

- ✨ **75+ components** - comprehensive ui library
- 🚀 **spa routing** - single page application with vanilla js
- 🎨 **strict design system** - 3 colors, no shadows, minimal borders
- 📱 **fully responsive** - mobile-first design
- ♿ **accessible** - semantic html and proper aria labels
- 🔧 **zero dependencies** - no frameworks, no build tools required
- 🌙 **dark/light themes** - automatic theme switching
- ⚡ **performant** - lightweight and fast

## quick start

### cdn (recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/dist/throne-ui.min.css">
<script src="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/dist/throne-ui.min.js"></script>
```

### download

1. download the latest release
2. include the css and js files in your project:

```html
<link rel="stylesheet" href="path/to/throne-ui.css">
<script src="path/to/throne-ui.js"></script>
```

### local development

```bash
git clone https://github.com/thekzbn/throne-ui.git
cd throne-ui
python3 -m http.server 8000
```

## color system

```css
:root {
  --gold: #d6ad60;
  --white: #fff;
  --black: #000;
  
  /* light mode */
  --bg-color: var(--white);
  --text-color: var(--black);
  --accent-color: var(--gold);
  --text-secondary: #666;
}

[data-theme="dark"] {
  --bg-color: var(--black);
  --text-color: var(--white);
  --accent-color: var(--gold);
  --text-secondary: #999;
}
```

## component categories

### layout & grid (12 components)
- containers (sm, normal, fluid)
- css grid systems (1-6 columns, auto-fit, masonry)
- flexbox utilities
- section layouts

### buttons & actions (8 components)
- button variants (primary, secondary, outline, ghost, link)
- button sizes (sm, normal, lg, xl)
- special buttons (circle, square, wide, block)
- button groups (horizontal, vertical)

### forms & inputs (10 components)
- input types (text, email, password, textarea, select)
- checkboxes and radio buttons
- input sizes and layouts
- validation states
- form groups and inline forms

### cards & content (9 components)
- card variants (basic, bordered, compact, side, image-top)
- certification cards (with borders - exception)
- timeline (vertical and horizontal)
- avatars (5 sizes, online status, groups, square variant)

### navigation (7 components)
- breadcrumbs
- tabs (regular and pill style)
- pagination
- dropdown menus
- menu lists

### feedback & overlays (11 components)
- alerts (info, success, warning, error, dismissible)
- modals with backdrop
- drawers (left and right)
- tooltips (4 positions)
- accordion
- toast notifications

### data display (9 components)
- badges and chips
- progress bars (3 sizes)
- spinners (3 sizes)
- skeleton loaders
- tables (hover, striped, bordered, responsive)

### utilities (15+ utilities)
- spacing (margins, padding)
- typography (sizes, weights, alignment, colors)
- display and position utilities
- width, height, and opacity utilities
- flexbox and grid utilities

## spa routing

throne ui includes a built-in spa routing system using vanilla javascript:

```javascript
// register routes
throneUI.registerRoute('/', () => {
  console.log('home page loaded');
});

// navigate programmatically
throneUI.navigateTo('/about');

// html structure
<div class="route" data-route-path="/">
  <h1>home page</h1>
</div>

<a href="#" data-route="/about">go to about</a>
```

### spa features
- client-side routing with history api
- smooth page transitions
- deep linking support
- browser back/forward button support
- no page reloads

## javascript api

### theme management

```javascript
// toggle theme
window.throneUI.toggleTheme();

// set specific theme
window.throneUI.setTheme('dark'); // or 'light'
```

### component creation

```javascript
// create components programmatically
const button = ThroneUI.createButton('click me', 'btn-primary');
const card = ThroneUI.createCard('title', 'subtitle', 'description');
const avatar = ThroneUI.createAvatar('image.jpg', 'alt text', 'avatar-lg');
const table = ThroneUI.createTable(['col1', 'col2'], [['data1', 'data2']]);
const timeline = ThroneUI.createTimeline([
  { date: '2024', title: 'event', content: 'description' }
]);
```

### animations

```javascript
// smooth animations
ThroneUI.fadeIn(element, 300);
ThroneUI.slideUp(element, 300);
ThroneUI.slideDown(element, 300);
ThroneUI.slideLeft(element, 300);
ThroneUI.slideRight(element, 300);
ThroneUI.scaleIn(element, 300);
```

### utilities

```javascript
// storage utilities
ThroneUI.setStorage('key', value);
const value = ThroneUI.getStorage('key', defaultValue);

// toast notifications
ThroneUI.showToast('message', 3000);

// scroll utilities
ThroneUI.smoothScrollTo('element-id');
const inView = ThroneUI.isInViewport(element);

// performance utilities
const debouncedFn = ThroneUI.debounce(fn, 300);
const throttledFn = ThroneUI.throttle(fn, 100);
```

## design constraints

### ✅ allowed

- 3 colors: gold (#d6ad60), black (#000), white (#fff)
- muted variants: #666 (light mode), #999 (dark mode)
- form input borders (exception)
- avatar borders (exception - 3px solid gold)
- certification card borders (exception - 1px solid muted)
- color transitions
- `translatey(-2px)` hover effects
- typography hierarchy
- generous spacing

### ❌ forbidden

- any shadows (box-shadow, text-shadow, drop-shadow)
- additional colors beyond the 3-color system
- borders on most elements (except the 3 exceptions)
- gradients
- complex animations
- decorative elements
- border separators between grid items
- visual noise or unnecessary decoration

## browser support

- chrome 60+
- firefox 55+
- safari 12+
- edge 79+

## about thekzbn

i'm a 15-year-old developer passionate about minimalist design and clean code. i started coding at 13 and believe that great design comes from what you leave out, not what you add.

throne ui represents my philosophy that constraints breed creativity. every component is intentionally limited to prove that you don't need complex frameworks or dozens of colors to create something beautiful and functional.

### my approach
- focus on vanilla technologies because they're timeless
- frameworks come and go, but html, css, and javascript are forever
- prove that you don't need complex tooling to create great ui
- show that limitations can lead to more creative solutions

## philosophy

> "perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - antoine de saint-exupéry

throne ui embodies this philosophy by showing how powerful simplicity can be when executed with precision and intention. every element serves a clear purpose, every color choice is deliberate, and every constraint pushes us toward better design decisions.

the library proves that you don't need dozens of colors, complex shadows, or decorative elements to create beautiful, functional interfaces. sometimes, the most elegant solution is the simplest one.

## contributing

1. fork the repository
2. create a feature branch
3. make your changes (following the design constraints)
4. test your changes
5. submit a pull request

please ensure all contributions follow the strict design constraints:
- maintain the 3-color system
- no shadows anywhere
- borders only where explicitly allowed
- keep the minimalist aesthetic

## license

mit license. see [license](license) for details.

---

**built with ❤️ by thekzbn at age 15**
