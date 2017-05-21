// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyChO-pANcs3NWnIK7fIN1X2RgQbq-x_QoA",
    authDomain: "acs-website-be108.firebaseapp.com",
    databaseURL: "https://acs-website-be108.firebaseio.com",
    projectId: "acs-website-be108",
    storageBucket: "acs-website-be108.appspot.com",
    messagingSenderId: "946942397190"
  }
};
