// @ts-ignore
import favicon from './extensions/favicon.png';
// @ts-ignore
import logo from './extensions/logo.png';

export default {
  config: {
    auth: {
      logo: logo,
    },
    head: {
      favicon: favicon,
    },

    menu: {
      logo: favicon,
    },


    tutorials: false,
    notifications: { releases: false },

    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Dashboard!',
        'Auth.form.welcome.subtitle': "Log in to your account",
        'app.components.LeftMenu.navbrand.title': 'Dashboard',

      },
    },
  },

  async bootstrap() {
    document.title = 'Dashboard';
  },
};
