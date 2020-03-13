# Indecision React Application
Indecision is an react fundamenal application.

### Install babel cli
```
npm install -g babel-cli@6.26.0
```

### Help command babel
```
bable --help
```

### Install Babel preset and react preset
```
npm install babel-preset-react@6.24.1 babel-preset-env@1.7.0 --save-dev
```
### Compile file through babel
This output transpile file inside public/scripts folder.
```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

### run live server
```
live-server public
```
