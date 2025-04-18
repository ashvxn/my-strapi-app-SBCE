'use strict';

/**
 * autonomous router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::autonomous.autonomous');
