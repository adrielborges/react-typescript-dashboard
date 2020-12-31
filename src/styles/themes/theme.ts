const themeLight = Boolean(localStorage.getItem('@ReactDashboard:theme'));
console.log(themeLight);

export const light = {
  colors: {
    background: '#F6F6F6',
    title: '#231F20',
    text: '#231F20',
    border_color: '#36444C',
    button_text: '#F6F6F6',
    button_Background: '#36444C',
  },
};

export const dark = {
  colors: {
    background: '#36444C',
    title: '#F6F6F6',
    text: '#F6F6F6',
    border_color: '#F6F6F6',
    button_text: '#231F20',
    button_Background: '#F6F6F6',
  },
};

export default themeLight ? light : dark;
