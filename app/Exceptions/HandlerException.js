'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class HandlerException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle (error, {  }) {}
}

module.exports = HandlerException
