'use strict';

/**
 * transact service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transact.transact');
