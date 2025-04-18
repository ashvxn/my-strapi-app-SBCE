'use strict';

/**
 * autonomous controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::autonomous.autonomous');
