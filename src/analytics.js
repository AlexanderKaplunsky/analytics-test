// src/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize('G-6LT81TJZG6', {
        testMode: true
    }); // Встав свій Measurement ID
};

export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category, action, label) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
