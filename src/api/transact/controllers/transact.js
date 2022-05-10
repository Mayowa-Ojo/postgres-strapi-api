'use strict';

/**
 *  transact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::transact.transact');
