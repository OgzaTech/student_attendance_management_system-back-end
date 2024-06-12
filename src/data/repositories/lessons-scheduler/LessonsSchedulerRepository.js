const ErrorMessages = require('../../../utils/enums/ErrorMessages');
const {errors} = require('@strapi/utils');
const {ApplicationError} = errors;

module.exports = class LessonSchedulerRepository {
  async getOneByCardIdAndDate(cardId, date) {
    try {
      let data = await strapi.db.query('api::user-lesson.user-lesson').findOne({
        where: {
          student: {
            card_id: cardId
          },
          /*lesson: {
            lessons_scheduler: {
              $and: [{
                start_time: {$lte: date}
              }, {
                finish_time: {$gte: date}
              }],
            }
          }*/
        }, populate: ['lesson.lessons_scheduler']
      });
      if (!data || !data.lesson || !data.lesson.lessons_scheduler) return null;
      return data.lesson.lessons_scheduler;
    } catch (err) {
      throw new ApplicationError(ErrorMessages.SOMETHING_WENT_WRONG);
    }
  }
}
