export const themeConfig = {
    // If true, visitors can change the theme using the floating picker.
    // If false, only the 'defaultTheme' applied in code will be used.
    allowUserCustomization: true,

    // The default theme ID (corresponds to the data-theme attribute in globals.css)
    // Options: 'default', 'corporate', 'nature', 'tech', 'modern', 'trust', 'creative', 'elegant', 'vibrant', 'warm'
    defaultTheme: 'default',

    // Animation Configuration
    animations: {
        enable: true, // Master switch for scroll animations
        defaultEffect: 'fade-up' as 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in',
        defaultDuration: 0.9,
    },

    // Header Configuration
    header: {
        stickyStyle: 'primary' as 'dark' | 'white' | 'primary', // 'dark' for dark charcoal, 'white' for white, 'primary' for corporate blue
    },

    // Footer Configuration
    footer: {
        style: 'dark' as 'dark' | 'primary' | 'secondary',
    }
};
