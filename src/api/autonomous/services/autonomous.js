'use strict';

/**
 * autonomous service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::autonomous.autonomous');
