'use strict';

/**
 * eoa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::eoa.eoa');
