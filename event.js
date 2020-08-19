const eventEmitter = require("events");

class Logger extends eventEmitter {
  log(msg) {
    this.emit("message", { msg });
  }
}

module.exports = Logger;
