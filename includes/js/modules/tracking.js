export const Hotjar = (eventName) => {
    if (typeof hj !== 'undefined') {
        hj('event', eventName);
    }
};