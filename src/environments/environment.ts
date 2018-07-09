// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDW5LPzUvc9O336O8FvfdD96fVlRdMnXLI',
    authDomain: 'grandes-ligas-cloud.firebaseapp.com',
    databaseURL: 'https://grandes-ligas-cloud.firebaseio.com',
    projectId: 'grandes-ligas-cloud',
    storageBucket: 'grandes-ligas-cloud.appspot.com',
    messagingSenderId: '71280722795'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
