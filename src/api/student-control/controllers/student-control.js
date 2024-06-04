'use strict';

const AddStudentControlUseCase = require("../../../domain/use-cases/stundent-control/AddStudentControlUseCase");
const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::student-control.student-control', ({strapi}) => ({
  async create(ctx) {
    let cardId = null;
    if (ctx.request.body && ctx.request.body.data) cardId = ctx.request.body.data.cardId;

    let addStudentControlUseCase = new AddStudentControlUseCase();
    return await addStudentControlUseCase.execute(cardId);
  }
}));
