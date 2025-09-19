document.addEventListener("DOMContentLoaded", () => {
    const starsEl = document.getElementById("stars");
    const searchInput = document.getElementById("search-input");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Keyboard shortcut: Ctrl/Cmd + K focuses search input
    window.addEventListener("keydown", (e) => {
        const isK = e.key && e.key.toLowerCase() === "k";
        if (isK && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });

    // Fetch GitHub star count
    const fetchStars = async () => {
        if (!starsEl) return;
        try {
            const res = await fetch("https://api.github.com/repos/thekzbn/throneUI", {
                headers: { "Accept": "application/vnd.github+json" }
            });
            if (!res.ok) throw new Error("Failed to fetch stars");
            const data = await res.json();
            const count = typeof data.stargazers_count === "number" ? data.stargazers_count : 0;
            starsEl.textContent = formatCount(count);
            starsEl.title = `${count.toLocaleString()} stars`;
        } catch (err) {
            // Keep placeholder on error
            starsEl.textContent = "—";
        }
    };

    const formatCount = (n) => {
        if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
        if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
        return String(n);
    };

    fetchStars();
    // Refresh periodically
    setInterval(fetchStars, 1000 * 60 * 5);

    // Theme toggle with persistence and icon update
    const setTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        try { localStorage.setItem("theme", theme); } catch (_) {}
        if (themeIcon) themeIcon.textContent = theme === "dark" ? "dark_mode" : "light_mode";
    };

    const initThemeFromDOM = () => {
        const attr = document.documentElement.getAttribute("data-theme");
        setTheme(attr || "dark");
    };

    initThemeFromDOM();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme") || "dark";
            const next = current === "dark" ? "light" : "dark";
            setTheme(next);
        });
    }
});


