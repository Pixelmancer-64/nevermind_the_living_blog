(function () {
    // set up method to set theme value on window, set data attribute, and dispatch a custom event indicating the theme change
    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.body.setAttribute("data-theme", newTheme);
      window.dispatchEvent(
        new CustomEvent("themeChange", {
          detail: newTheme
        })
      );
    }
  
    // grab the saved theme
    let preferredTheme = localStorage.getItem("theme");
  
    // set up method to set the active theme to the user’s preferred theme and save that theme for persistence
    window.__setPreferredTheme = function (newTheme) {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    };
  
    // set up detection of system dark mode
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
    // set up a listener to respond to future changes of system theme
    darkModeQuery.addListener(function (event) {
      window.__setPreferredTheme(event.matches ? "dark" : "light");
    });
  
    // set active theme to saved theme, if there is one, or the system theme
    setTheme(preferredTheme || (darkModeQuery.matches ? "dark" : "light"));
  })();