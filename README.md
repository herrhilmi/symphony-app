# My Symphony App

My Symphony App is a sample application based on Angular, demonstrating the creation of a simple EntityRenderer in Symphony. For more details please refer to Symphony documentation: 
* https://extension-api.symphony.com/docs

## Prerequisites

* Have `node` and `npm` installed.
* Have port 4200 available as we'll run the application on this port.
* If you are planning to use Chrome to run the app, you will need to first enable the #allow-insecure-localhost flag in Chrome. To do this, go to chrome://flags and enable the setting called "Allow invalid certificates for resources loaded from localhost". 

## Install dependencies

Clone this repo and `cd` into the directory, run these commands

```
npm i
```

## Run the project

```
npm run start
```
or 
```
ng serve
```

* Ensure the sample app is running by visiting https://localhost:4200/home

## Bundle the app

* Visit this url: 
    * https://<YOUR_COMPANY_POD>.symphony.com/client/index.html?bundle=https://localhost:4200/assets/bundle.json
* Accept the "Warning: Unauthorized App(s)" dialog
* Click on the "Applications > App Store" entry in your left nav to install My Symphony App

## Common Mistakes
* Front must be served over https.
* app-id within the bundle.json file must match the code. 
