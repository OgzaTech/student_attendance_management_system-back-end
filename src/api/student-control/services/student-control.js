'use strict';

/**
 * student-control service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-control.student-control');
