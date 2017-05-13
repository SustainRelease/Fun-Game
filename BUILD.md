

### Synopsis

we want to build
- a single javascript file that comprises
  - All the external dependencies
  - All the internal modules
  - All styles

To do this in a single step we use [__webpack__](http://webpack.github.io/docs/tutorials/getting-started/)


## Setup

install webpack globally
```sh
>> npm install -g webpack
>> npm install --dev
```

then run
```
>> webpack
```

or to have continuous building.
```
>> webpack --progress --colors --watch
```


This will build all our code starting from one entry point(src/MainScript.js) that uses other javascript modules.

Module such as the Act module  like the module for __act__: that is _the functions that are modifying the DOM_
