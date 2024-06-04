const ErrorMessages = require('../../../utils/enums/ErrorMessages');
const {errors} = require('@strapi/utils');
const {ApplicationError} = errors;

module.exports = class LessonSchedulerRepository {
  async create(startDate, lessonSchedulerId) {
    try {
      return await strapi.db.query('api::student-control.student-control').create({
        data: {
          start: startDate, lessons_scheduler: lessonSchedulerId, publishedAt: new Date().toISOString()
        }
      });
    } catch (err) {
      throw new ApplicationError(ErrorMessages.SOMETHING_WENT_WRONG);
    }
  }
}
