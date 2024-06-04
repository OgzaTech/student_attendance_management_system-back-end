const ErrorMessages = require('../../../utils/enums/ErrorMessages');
const {errors} = require('@strapi/utils');
const {NotFoundError, ApplicationError} = errors;
const LessonsSchedulerRepository = require('../../../data/repositories/lessons-scheduler/LessonsSchedulerRepository');
const StudentControlRepository = require('../../../data/repositories/student-control/StudentControlRepository');

module.exports = class AddStudentControlUseCase {
  constructor() {
    this.studentControlRepository = new StudentControlRepository();
    this.lessonsSchedulerRepository = new LessonsSchedulerRepository();
  }

  async execute(cardId) {
    if (!cardId) throw new NotFoundError(ErrorMessages.CARD_ID_CANNOT_BE_EMPTY);
    if(isNaN(Number(cardId))) throw new ApplicationError(ErrorMessages.CARD_ID_MUST_BE_A_NUMBER);
    let startDate = new Date().toISOString();
    let lessonScheduler = await this.lessonsSchedulerRepository.getOneByCardIdAndDate(cardId, startDate);
    if (!lessonScheduler) throw new NotFoundError(ErrorMessages.LESSON_NOT_FOUND);

    return await this.studentControlRepository.create(startDate, lessonScheduler.id);
  }
}
