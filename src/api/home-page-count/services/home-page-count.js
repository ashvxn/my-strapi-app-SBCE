'use strict';

/**
 * home-page-count service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-page-count.home-page-count');
