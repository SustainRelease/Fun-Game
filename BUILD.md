

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
```

then run
```
>> webpack
```

This will build all our code starting from one entry point that uses other javascript modules.

Module such as the Act module  like the module for __act__: that is _the functions that are modifying the DOM_
