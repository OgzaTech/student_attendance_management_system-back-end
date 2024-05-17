'use strict';

/**
 * lessons-scheduler service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lessons-scheduler.lessons-scheduler');
