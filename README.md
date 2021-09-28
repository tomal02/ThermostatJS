## ThermostatJS

#### Install

- went to https://github.com/jasmine/jasmine
- decided this application didn't need an npm module, and wasn't in ruby so we went with:

```
For the Jasmine browser runner:
https://github.com/jasmine/jasmine-browser.
```

- Installed the following (only need to do once for first ever tine) `npm install --save-dev jasmine-browser-runner`
- Add a new directory `/spec/support/jasmine-browser.json` and add the following code to it:

```
{
  "srcDir": "src",
  "srcFiles": [
    "**/*.?(m)js"
  ],
  "specDir": "spec",
  "specFiles": [
    "**/*[Ss]pec.?(m)js"
  ],
  "helpers": [
    "helpers/asyncAwait.js"
  ],
  "random": true
}
```

- To start server run `npx jasmine-browser-runner serve`

Emphasis on:

```
Note that when we refer to Javabuzz when we are instantiating our version of the class - we MUST add the (); at the end, like so:

javabuzz = new Javabuzz();
This is non-negotiable and Javascript WILL be pedantic about it, so please for the sake of all that is good and holy, whenever referring to a class or method, put the bloody (); after the name, or we'll never hear the end of it.
```
