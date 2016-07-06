Guts and main ideas from [here](https://github.com/bfattori/LogJS) are alive and well. I have changed the shape considerably though.

### biggest changes
* Add support for ES6 (webpack and plain 'ol babel)
* redesign to add ability to create multiple loggers
* probably over-done design changes

### key concepts
* builder
    * created by its own factory (fairly anemic)
    * API for building a logger instance
* logger
    * smaller interface than original implementation
    * constructor/factory based to enable multiple loggers
* appenders
    * mostly unchanged from original implementation
    * DOM appender refactored to seperate UI rendering from interaction with appender
