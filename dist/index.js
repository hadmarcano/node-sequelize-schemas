'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoleModel = exports.UserModel = exports.SuperB2bModel = exports.StatusCaseModel = exports.QuestionModel = exports.QuestionClasificationModel = exports.PublicDocumentModel = exports.PrivateDocumentModel = exports.PrivateDocumentTypeModel = exports.PeopleModel = exports.OtherPeopleModel = exports.MessageModel = exports.LogComplaintModel = exports.InternalDocumentModel = exports.FormClasificationModel = exports.FormComplaintModel = exports.ComplaintModel = exports.ComplaintUserModel = exports.ComplaintActionModel = exports.ClasificationModel = exports.ClasificationComplaintModel = exports.BusinessModel = exports.BussinessUserModel = exports.BranchOfficeModel = exports.AreaCompanyModel = exports.AnswerModel = exports.ActionCloseModel = exports.AddressModel = void 0;

var _require = require('dotenv'),
    config = _require.config;

var debug = require('debug');

var setupDatabase = require('./lib/db');

var setupAddressModel = require('./models/address');

var setupActionCloseModel = require('./models/action_close');

var setupAnswerModel = require('./models/answer');

var setupAreaCompanyModel = require('./models/area_company');

var setupBranchOfficeModel = require('./models/branch_office');

var setupBusinessUserModel = require('./models/business_user');

var setupBussinessModel = require('./models/business');

var setupClasificationComplaintModel = require('./models/clasification_complaint');

var setupClasificationModel = require('./models/clasification');

var setupComplaintActionModel = require('./models/complaint_action');

var setupComplaintUserModel = require('./models/complaint_user');

var setupComplaintModel = require('./models/complaint');

var setupFormClasificationModel = require('./models/form_clasification');

var setupFormComplaintModel = require('./models/form_complaint');

var setupInternalDocumentModel = require('./models/internal_document');

var setupLogComplaintModel = require('./models/log_complaint');

var setupMessageModel = require('./models/message');

var setupOtherPeopleModel = require('./models/other_people');

var setupPeopleModel = require('./models/people');

var setupPrivateDocumentTypeModel = require('./models/private_document_type');

var setupPrivateDocumentModel = require('./models/private_document');

var setupPublicDocumentModel = require('./models/public_document');

var setupQuestionClasificationModel = require('./models/question_clasification');

var setupQuestionModel = require('./models/question');

var setupStatusCaseModel = require('./models/status_case');

var setupSuperB2bModel = require('./models/super_b2b');

var setupUserModel = require('./models/user');

var setupRoleModel = require('./models/role');

config();
var consoleLog = debug('debugging:sequelize');
var logging;
var dbForceSync = process.env.DB_FORCE_SYNC === 'true';

if (process.env.NODE_ENV === 'production') {
  logging = false;
} else {
  logging = function logging(log) {
    return consoleLog(log);
  };
}

var configSequelize = {
  database: process.env.DB_NAME || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || '',
  dialect: process.env.DB_DIALECT || '',
  dialectOptions: {
    collate: 'utf8_general_ci',
    bigNumberStrings: true,
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  },
  port: process.env.DB_PORT || 5432,
  logging: logging
};
var sequelize = setupDatabase(configSequelize); // Models ...

var AddressModel = setupAddressModel(configSequelize);
exports.AddressModel = AddressModel;
var ActionCloseModel = setupActionCloseModel(configSequelize);
exports.ActionCloseModel = ActionCloseModel;
var AnswerModel = setupAnswerModel(configSequelize);
exports.AnswerModel = AnswerModel;
var AreaCompanyModel = setupAreaCompanyModel(configSequelize);
exports.AreaCompanyModel = AreaCompanyModel;
var BranchOfficeModel = setupBranchOfficeModel(configSequelize);
exports.BranchOfficeModel = BranchOfficeModel;
var BussinessUserModel = setupBusinessUserModel(configSequelize);
exports.BussinessUserModel = BussinessUserModel;
var BusinessModel = setupBussinessModel(configSequelize);
exports.BusinessModel = BusinessModel;
var ClasificationComplaintModel = setupClasificationComplaintModel(configSequelize);
exports.ClasificationComplaintModel = ClasificationComplaintModel;
var ClasificationModel = setupClasificationModel(configSequelize);
exports.ClasificationModel = ClasificationModel;
var ComplaintActionModel = setupComplaintActionModel(configSequelize);
exports.ComplaintActionModel = ComplaintActionModel;
var ComplaintUserModel = setupComplaintUserModel(configSequelize);
exports.ComplaintUserModel = ComplaintUserModel;
var ComplaintModel = setupComplaintModel(configSequelize);
exports.ComplaintModel = ComplaintModel;
var FormComplaintModel = setupFormComplaintModel(configSequelize);
exports.FormComplaintModel = FormComplaintModel;
var FormClasificationModel = setupFormClasificationModel(configSequelize);
exports.FormClasificationModel = FormClasificationModel;
var InternalDocumentModel = setupInternalDocumentModel(configSequelize);
exports.InternalDocumentModel = InternalDocumentModel;
var LogComplaintModel = setupLogComplaintModel(configSequelize);
exports.LogComplaintModel = LogComplaintModel;
var MessageModel = setupMessageModel(configSequelize);
exports.MessageModel = MessageModel;
var OtherPeopleModel = setupOtherPeopleModel(configSequelize);
exports.OtherPeopleModel = OtherPeopleModel;
var PeopleModel = setupPeopleModel(configSequelize);
exports.PeopleModel = PeopleModel;
var PrivateDocumentTypeModel = setupPrivateDocumentTypeModel(configSequelize);
exports.PrivateDocumentTypeModel = PrivateDocumentTypeModel;
var PrivateDocumentModel = setupPrivateDocumentModel(configSequelize);
exports.PrivateDocumentModel = PrivateDocumentModel;
var PublicDocumentModel = setupPublicDocumentModel(configSequelize);
exports.PublicDocumentModel = PublicDocumentModel;
var QuestionClasificationModel = setupQuestionClasificationModel(configSequelize);
exports.QuestionClasificationModel = QuestionClasificationModel;
var QuestionModel = setupQuestionModel(configSequelize);
exports.QuestionModel = QuestionModel;
var StatusCaseModel = setupStatusCaseModel(configSequelize);
exports.StatusCaseModel = StatusCaseModel;
var SuperB2bModel = setupSuperB2bModel(configSequelize);
exports.SuperB2bModel = SuperB2bModel;
var UserModel = setupUserModel(configSequelize);
exports.UserModel = UserModel;
var RoleModel = setupRoleModel(configSequelize);
exports.RoleModel = RoleModel;
sequelize.authenticate().then(function (res) {
  consoleLog("Connection has been established successfully. ".concat(res));
  sequelize.sync({
    force: dbForceSync
  });
})["catch"](function (err) {
  consoleLog("Unable to connect to the database: ".concat(err));
});