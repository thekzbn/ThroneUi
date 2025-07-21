# ThroneUi Foundation CSS Guide

**Make your ThroneUi components look absolutely stunning with this essential foundation layer.**

Created by thekzbn, age 15 ✨

---

## 🎯 What is ThroneUi Foundation CSS?

ThroneUi Foundation CSS is a **carefully crafted base layer** that ensures your ThroneUi components look professional, polished, and beautiful in any project. It handles typography, spacing, layout, and visual polish so your components shine.

### Why You Need This

Without proper foundation styles, even the best components can look:
- ❌ Inconsistent typography
- ❌ Poor spacing and rhythm  
- ❌ Broken responsive behavior
- ❌ Accessibility issues
- ❌ Unprofessional appearance

With ThroneUi Foundation CSS:
- ✅ Perfect typography with Inter fonts
- ✅ Consistent visual rhythm and spacing
- ✅ Responsive design that works everywhere
- ✅ Accessibility built-in
- ✅ Professional, polished appearance

---

## 🚀 Quick Setup

### Method 1: Include Before ThroneUi (Recommended)

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Amazing Project</title>
    
    <!-- 1. Foundation CSS FIRST -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/src/throne-foundation.css">
    
    <!-- 2. ThroneUi CSS SECOND -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/dist/throne-ui.min.css">
</head>
<body>
    <!-- Your content looks amazing now! -->
    <div class="container-responsive">
        <h1>This heading looks perfect</h1>
        <p>This paragraph has optimal reading width and spacing.</p>
        <button class="btn btn-primary">This button is beautifully styled</button>
    </div>
    
    <script src="https://cdn.jsdelivr.net/gh/thekzbn/throne-ui@main/dist/throne-ui.min.js"></script>
</body>
</html>
```

### Method 2: Local Development

```bash
# Download the foundation CSS
curl -O https://raw.githubusercontent.com/thekzbn/throne-ui/main/src/throne-foundation.css

# Include in your project
```

```html
<link rel="stylesheet" href="path/to/throne-foundation.css">
<link rel="stylesheet" href="path/to/throne-ui.css">
```

---

## 🎨 What You Get

### ✨ Perfect Typography

**Automatic font loading** - Inter and Inter Tight fonts are loaded automatically:

```html
<!-- These headings look amazing automatically -->
<h1>Main Heading</h1>          <!-- 2rem - 3.5rem, responsive -->
<h2>Section Heading</h2>        <!-- 1.5rem - 2.5rem, responsive -->  
<h3>Subsection</h3>             <!-- 1.25rem - 2rem, responsive -->
<p>Body text with perfect reading width</p>
```

**Typography utilities**:
```html
<p class="text-lg font-medium text-accent">Large, medium weight, gold text</p>
<p class="text-sm text-secondary">Small, muted text</p>
<h2 class="text-3xl font-bold text-center">Big, bold, centered</h2>
```

### 🎯 Spacing That Creates Visual Rhythm

**Perfect margins and padding**:
```html
<div class="mb-8">Section with bottom margin</div>
<div class="p-6 mt-4">Padded content with top margin</div>
<div class="mx-auto max-w-4xl">Centered content with max width</div>
```

**Common spacing patterns**:
```html
<!-- Hero section -->
<section class="py-20 text-center">
    <h1 class="mb-4">Hero Title</h1>
    <p class="text-xl text-secondary mb-8">Hero description</p>
    <button class="btn btn-primary">Call to Action</button>
</section>

<!-- Content section -->
<section class="py-16">
    <div class="container-responsive">
        <h2 class="text-3xl font-bold text-center mb-12">Section Title</h2>
        <div class="grid grid-3 gap-8">
            <!-- Content cards -->
        </div>
    </div>
</section>
```

### 📱 Responsive Layout System

**Flexbox utilities that just work**:
```html
<div class="flex items-center justify-between gap-4">
    <h3>Title</h3>
    <button class="btn btn-outline">Action</button>
</div>

<div class="flex flex-col md:flex-row gap-6">
    <div class="flex-1">Main content</div>
    <div class="w-64">Sidebar</div>
</div>
```

**Responsive containers**:
```html
<div class="container-responsive">
    <!-- Automatically responsive padding and max-width -->
    <h1>Content that looks great on all devices</h1>
</div>
```

### ✨ Visual Polish & Interactions

**Smooth transitions and hover effects**:
```html
<div class="transition-all hover-lift cursor-pointer">
    <!-- Smooth hover animation -->
</div>

<button class="btn btn-primary transition-colors">
    <!-- Smooth color transitions -->
</button>
```

---

## 📖 Complete Usage Examples

### 🏠 Landing Page Structure

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazing Landing Page</title>
    <link rel="stylesheet" href="throne-foundation.css">
    <link rel="stylesheet" href="throne-ui.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container-responsive flex items-center justify-between">
            <a href="#" class="navbar-brand text-xl font-bold">Brand</a>
            <div class="navbar-nav">
                <a href="#" class="navbar-link">Home</a>
                <a href="#" class="navbar-link">About</a>
                <a href="#" class="navbar-link">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero py-20 text-center">
        <div class="container-responsive">
            <h1 class="text-5xl font-bold mb-6">
                Build Amazing Things
            </h1>
            <p class="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                Create beautiful, minimalist interfaces with ThroneUi's 
                3-color design system and copy-paste components.
            </p>
            <div class="flex gap-4 justify-center">
                <button class="btn btn-primary">Get Started</button>
                <button class="btn btn-outline">Learn More</button>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
        <div class="container-responsive">
            <h2 class="text-3xl font-bold text-center mb-12">
                Why Choose ThroneUi?
            </h2>
            <div class="grid grid-3 gap-8">
                <div class="text-center">
                    <div class="text-4xl text-accent mb-4">🎨</div>
                    <h3 class="text-xl font-semibold mb-3">3-Color Design</h3>
                    <p class="text-secondary">
                        Constraints breed creativity. Build stunning interfaces 
                        with just gold, black, and white.
                    </p>
                </div>
                <div class="text-center">
                    <div class="text-4xl text-accent mb-4">⚡</div>
                    <h3 class="text-xl font-semibold mb-3">Copy & Paste</h3>
                    <p class="text-secondary">
                        Every component is ready to use. Just copy from our 
                        demo and paste into your project.
                    </p>
                </div>
                <div class="text-center">
                    <div class="text-4xl text-accent mb-4">🚀</div>
                    <h3 class="text-xl font-semibold mb-3">Vanilla JS</h3>
                    <p class="text-secondary">
                        No frameworks, no build tools. Pure HTML, CSS, and 
                        JavaScript that works everywhere.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 text-center">
        <div class="container-responsive">
            <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p class="text-lg text-secondary mb-8">
                Join thousands of developers building with ThroneUi
            </p>
            <button class="btn btn-primary btn-lg">
                Start Building Now
            </button>
        </div>
    </section>

    <script src="throne-ui.js"></script>
</body>
</html>
```

### 📝 Blog Post Layout

```html
<article class="py-16">
    <div class="container-responsive max-w-4xl">
        <!-- Article Header -->
        <header class="text-center mb-12">
            <h1 class="text-4xl font-bold mb-4">
                How to Build Better Interfaces
            </h1>
            <p class="text-lg text-secondary mb-6">
                A guide to minimalist design principles
            </p>
            <div class="flex items-center justify-center gap-4 text-sm text-secondary">
                <span>March 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
            </div>
        </header>

        <!-- Article Content -->
        <div class="prose">
            <p class="text-lg mb-6">
                Great design isn't about adding more—it's about removing everything 
                that doesn't serve a purpose. In this article, we'll explore how 
                constraints can actually make you more creative.
            </p>

            <h2 class="text-2xl font-semibold mt-12 mb-6">
                The Power of Constraints
            </h2>
            
            <p class="mb-6">
                When you limit yourself to just three colors, something magical 
                happens. You stop relying on color to solve design problems and 
                start using typography, spacing, and hierarchy instead.
            </p>

            <blockquote class="border-l-4 border-accent pl-6 italic text-lg my-8">
                "Constraints breed creativity. When you have fewer options, 
                you make better decisions."
            </blockquote>

            <h3 class="text-xl font-semibold mt-10 mb-4">
                Practical Tips
            </h3>
            
            <ul class="mb-6">
                <li>Use spacing to create visual separation, not borders</li>
                <li>Leverage typography scale for hierarchy</li>
                <li>Make hover effects subtle and purposeful</li>
                <li>Test on mobile devices early and often</li>
            </ul>
        </div>
    </div>
</article>
```

### 🛒 Product Card Grid

```html
<section class="py-16">
    <div class="container-responsive">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Products</h2>
        
        <div class="grid grid-auto-fit gap-6" style="--min-width: 300px;">
            <!-- Product Card 1 -->
            <div class="card hover-lift transition-all cursor-pointer">
                <img src="product1.jpg" alt="Product 1" class="w-full h-48 object-cover mb-4">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">Amazing Product</h3>
                    <p class="text-secondary mb-4">
                        This product will change your life with its amazing features 
                        and beautiful design.
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-accent">$99</span>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>

            <!-- Product Card 2 -->
            <div class="card hover-lift transition-all cursor-pointer">
                <img src="product2.jpg" alt="Product 2" class="w-full h-48 object-cover mb-4">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">Incredible Item</h3>
                    <p class="text-secondary mb-4">
                        You won't believe how good this item is. It's simply 
                        incredible in every way.
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-accent">$149</span>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>

            <!-- More cards... -->
        </div>
    </div>
</section>
```

---

## 🎨 Utility Classes Reference

### Typography
```css
/* Sizes */
.text-xs      /* 0.75rem */
.text-sm      /* 0.875rem */
.text-base    /* 1rem */
.text-lg      /* 1.125rem */
.text-xl      /* 1.25rem */
.text-2xl     /* 1.5rem */
.text-3xl     /* 1.875rem */
.text-4xl     /* 2.25rem */
.text-5xl     /* 3rem */

/* Weights */
.font-light     /* 300 */
.font-normal    /* 400 */
.font-medium    /* 500 */
.font-semibold  /* 600 */
.font-bold      /* 700 */
.font-extrabold /* 800 */

/* Colors */
.text-primary    /* Main text color */
.text-secondary  /* Muted text color */
.text-accent     /* Gold accent color */
.text-muted      /* Extra muted text */

/* Alignment */
.text-left
.text-center
.text-right
.text-justify
```

### Spacing
```css
/* Margins (0.25rem increments) */
.m-0, .m-1, .m-2, .m-3, .m-4, .m-5, .m-6, .m-8, .m-10, .m-12, .m-16, .m-20

/* Margin directions */
.mt-4  /* margin-top */
.mb-4  /* margin-bottom */
.ml-4  /* margin-left */
.mr-4  /* margin-right */
.mx-auto /* margin: 0 auto */

/* Padding */
.p-0, .p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-8, .p-10, .p-12

/* Padding directions */
.pt-4  /* padding-top */
.pb-4  /* padding-bottom */
```

### Layout
```css
/* Display */
.flex, .inline-flex, .block, .inline, .inline-block, .hidden

/* Flexbox */
.flex-col, .flex-row, .flex-wrap, .flex-nowrap
.items-center, .items-start, .items-end, .items-stretch
.justify-center, .justify-between, .justify-around, .justify-evenly
.gap-1, .gap-2, .gap-3, .gap-4, .gap-5, .gap-6, .gap-8, .gap-10

/* Width */
.w-full, .w-auto, .w-fit, .w-screen
.max-w-xs, .max-w-sm, .max-w-md, .max-w-lg, .max-w-xl
.max-w-2xl, .max-w-3xl, .max-w-4xl, .max-w-5xl, .max-w-6xl, .max-w-7xl
```

### Interactions
```css
/* Transitions */
.transition-all
.transition-colors
.transition-transform
.transition-opacity

/* Hover Effects */
.hover-lift:hover      /* translateY(-0.125rem) */
.hover-scale:hover     /* scale(1.02) */

/* Cursors */
.cursor-pointer
.cursor-not-allowed
.cursor-default
```

---

## 🔧 Customization

### Overriding Variables

```css
/* Add this after throne-foundation.css */
:root {
  --accent-color: #your-gold-color;
  --text-color: #your-text-color;
  --bg-color: #your-bg-color;
  --text-secondary: #your-muted-color;
}
```

### Adding Custom Styles

```css
/* Your custom styles */
.my-special-component {
  /* Your styles here */
  /* Foundation utilities still work */
}

.my-special-component h2 {
  /* Typography foundation still applies */
}
```

---

## 📱 Responsive Design

ThroneUi Foundation CSS includes responsive typography and spacing:

```html
<!-- This heading automatically scales from 2rem to 3.5rem -->
<h1>Responsive Heading</h1>

<!-- Container with responsive padding -->
<div class="container-responsive">
  <!-- 1rem padding on mobile, 1.5rem on tablet, 2rem on desktop -->
</div>
```

### Responsive Utilities

The foundation includes responsive behavior for:
- ✅ Typography scales with `clamp()`
- ✅ Container padding adjusts per breakpoint
- ✅ Images are responsive by default
- ✅ All spacing utilities work on all screen sizes

---

## ♿ Accessibility Features

Built-in accessibility enhancements:
- ✅ Focus styles using the accent color
- ✅ Proper contrast ratios
- ✅ Reduced motion support
- ✅ High contrast mode support
- ✅ Semantic HTML defaults

---

## 🎯 Best Practices

### 1. Load Foundation First
```html
<!-- ✅ Correct order -->
<link rel="stylesheet" href="throne-foundation.css">
<link rel="stylesheet" href="throne-ui.css">

<!-- ❌ Wrong order -->
<link rel="stylesheet" href="throne-ui.css">
<link rel="stylesheet" href="throne-foundation.css">
```

### 2. Use Semantic HTML
```html
<!-- ✅ Good -->
<article>
  <header>
    <h1>Article Title</h1>
    <p class="text-secondary">Article subtitle</p>
  </header>
  <main>
    <p>Article content...</p>
  </main>
</article>

<!-- ❌ Avoid -->
<div>
  <div>
    <div class="text-4xl font-bold">Article Title</div>
    <div class="text-secondary">Article subtitle</div>
  </div>
</div>
```

### 3. Combine Utilities Wisely
```html
<!-- ✅ Good combination -->
<section class="py-16">
  <div class="container-responsive">
    <h2 class="text-3xl font-bold text-center mb-12">Section Title</h2>
    <!-- content -->
  </div>
</section>

<!-- ✅ Also good -->
<div class="flex items-center justify-between gap-4 p-6">
  <h3 class="text-xl font-semibold">Title</h3>
  <button class="btn btn-primary">Action</button>
</div>
```

---

## 🚀 Performance Tips

### Font Loading Optimization
The foundation CSS uses `font-display: swap` for optimal font loading performance.

### GPU Acceleration
Use these classes for smooth animations:
```html
<div class="gpu-accelerated transition-transform hover-lift">
  <!-- Smooth, hardware-accelerated animations -->
</div>
```

### Will-Change Optimization
```html
<div class="will-change-transform">
  <!-- Optimized for transform animations -->
</div>
```

---

## 🎉 Result

With ThroneUi Foundation CSS, your components will look:

✨ **Professional** - Perfect typography and spacing  
🎨 **Consistent** - Cohesive design system throughout  
📱 **Responsive** - Beautiful on all devices  
♿ **Accessible** - Works for everyone  
⚡ **Fast** - Optimized for performance  
🔧 **Flexible** - Easy to customize and extend  

**Your ThroneUi components will look absolutely stunning!** 🎉