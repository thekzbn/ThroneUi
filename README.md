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

## how to use throne ui

### method 1: copy & paste (easiest)

1. **visit the component library**: open `index.html` in your browser
2. **browse components**: navigate to `/components` to see all available components
3. **copy the code**: click on any component page, then click the copy button
4. **paste in your project**: paste the html into your project

```html
<!-- example: copying a button -->
<button class="btn btn-primary">
    click me
</button>
```

### method 2: cdn (recommended for full projects)

add these lines to your html `<head>`:

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>my project</title>
    
    <!-- throne ui css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/dist/throne-ui.min.css">
    
    <!-- google fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- material symbols -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
</head>
<body>
    <!-- your content here -->
    <div class="container">
        <h1>hello world</h1>
        <button class="btn btn-primary">get started</button>
    </div>
    
    <!-- throne ui javascript -->
    <script src="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/dist/throne-ui.min.js"></script>
</body>
</html>
```

### method 3: download & host locally

```bash
# download the files
curl -O https://raw.githubusercontent.com/thekzbn/throne-ui/main/dist/throne-ui.min.css
curl -O https://raw.githubusercontent.com/thekzbn/throne-ui/main/dist/throne-ui.min.js

# or clone the entire repo
git clone https://github.com/thekzbn/throne-ui.git
cd throne-ui
python3 -m http.server 8000
```

then include in your html:

```html
<link rel="stylesheet" href="path/to/throne-ui.min.css">
<script src="path/to/throne-ui.min.js"></script>
```

### 🚀 quick start template

check out `examples/getting-started.html` for a complete working example that demonstrates:
- basic page structure
- common components (navbar, hero, cards, forms)
- interactive elements (modals, buttons)
- proper theme setup

this file shows you exactly how to structure a throne ui project from scratch!

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

## common usage examples

### building a simple page

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>my awesome site</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/dist/throne-ui.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
</head>
<body>
    <!-- navigation -->
    <nav class="navbar">
        <a href="#" class="navbar-brand">my site</a>
        <div class="navbar-collapse">
            <ul class="navbar-nav">
                <li><a href="#" class="navbar-link active">home</a></li>
                <li><a href="#" class="navbar-link">about</a></li>
                <li><a href="#" class="navbar-link">contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- hero section -->
    <section class="hero">
        <div class="container">
            <h1>welcome to my site</h1>
            <p class="text-xl text-accent">building amazing things with throne ui</p>
            <div class="btn-group mt-4">
                <button class="btn btn-primary">get started</button>
                <button class="btn btn-outline">learn more</button>
            </div>
        </div>
    </section>

    <!-- content -->
    <section class="section">
        <div class="container">
            <div class="grid grid-3">
                <div class="card">
                    <h3>feature one</h3>
                    <p>description of your amazing feature</p>
                </div>
                <div class="card">
                    <h3>feature two</h3>
                    <p>another cool thing you offer</p>
                </div>
                <div class="card">
                    <h3>feature three</h3>
                    <p>the third awesome feature</p>
                </div>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/dist/throne-ui.min.js"></script>
</body>
</html>
```

### creating interactive components

```html
<!-- modal example -->
<button class="btn btn-primary" onclick="window.throneUI.showModal('my-modal')">
    open modal
</button>

<div id="my-modal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title">hello world</h3>
            <button class="modal-close" onclick="window.throneUI.hideModal('my-modal')">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>
        <div class="modal-body">
            <p>this is a modal dialog!</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-outline" onclick="window.throneUI.hideModal('my-modal')">cancel</button>
            <button class="btn btn-primary">save</button>
        </div>
    </div>
</div>

<!-- tabs example -->
<div class="tabs">
    <div class="tab-nav">
        <button class="tab-button active" onclick="window.throneUI.showTab('tab1')">tab 1</button>
        <button class="tab-button" onclick="window.throneUI.showTab('tab2')">tab 2</button>
    </div>
    <div id="tab1" class="tab-pane active">
        <p>content for tab 1</p>
    </div>
    <div id="tab2" class="tab-pane">
        <p>content for tab 2</p>
    </div>
</div>

<!-- form example -->
<form class="form">
    <div class="form-group">
        <label for="email">email</label>
        <input type="email" id="email" class="form-input" placeholder="your@email.com">
    </div>
    <div class="form-group">
        <label for="message">message</label>
        <textarea id="message" class="form-textarea" placeholder="your message"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">send message</button>
</form>
```

### using the javascript api

```javascript
// theme switching
window.throneUI.toggleTheme();
window.throneUI.setTheme('dark');

// modals
window.throneUI.showModal('my-modal');
window.throneUI.hideModal('my-modal');

// alerts
window.throneUI.showAlert('success', 'operation completed!');

// programmatic component creation
const button = window.throneUI.createButton('click me', 'primary', () => {
    alert('button clicked!');
});
document.body.appendChild(button);

// spa routing (if building a single page app)
window.throneUI.navigateTo('/about');
window.throneUI.registerRoute('/contact', () => {
    console.log('contact page loaded');
});
```

## typical workflow

### for beginners (copy & paste approach)

1. **explore components**: visit the demo site and browse `/components`
2. **find what you need**: click on buttons, cards, forms, etc.
3. **copy the code**: use the copy button on each component page
4. **paste & customize**: paste into your html and modify text/content
5. **add fonts**: include Inter and Material Symbols in your `<head>`

```html
<!-- minimal setup - just add these fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
```

### for full projects (cdn approach)

1. **include throne ui**: add css/js via cdn links
2. **set up theme**: add `data-theme="light"` to your `<html>` tag
3. **use containers**: wrap content in `.container` or `.container-sm`
4. **build with components**: use navbar, hero, cards, forms, etc.
5. **add interactivity**: use the javascript api for modals, tabs, etc.

### for advanced users (local development)

1. **clone the repo**: `git clone https://github.com/thekzbn/throne-ui.git`
2. **customize**: modify `src/throne-ui.css` to fit your brand
3. **build**: run `node build.js` to generate distribution files
4. **host**: serve the files from your own cdn or server

## design constraints (important!)

when using throne ui, **follow these rules** to maintain the design philosophy:

### ✅ allowed
- **3 colors only**: gold (#d6ad60), black (#000), white (#fff)
- **borders on**: forms, profile images, certification cards
- **hover effects**: color changes, subtle `translateY(-0.125rem)` transforms
- **typography hierarchy**: different font sizes and weights

### ❌ forbidden  
- **shadows**: no `box-shadow`, `text-shadow`, or `drop-shadow`
- **borders on**: buttons, cards (except cert cards), navigation, general layout
- **extra colors**: no blues, greens, reds, etc. - stick to the 3-color system
- **complex animations**: keep it minimal and purposeful

### 💡 tips
- use **spacing** (margins/padding) instead of borders for separation
- create hierarchy with **typography** and **color contrast**
- leverage the **accent color** (gold) for important elements
- keep hover effects **subtle** - just color changes and small transforms

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
