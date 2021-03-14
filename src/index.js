'use strict';
const { config } =  require('dotenv');
const debug =  require('debug');
const setupDatabase =  require('./lib/db');

const setupAddressModel =require('./models/address');
const setupActionCloseModel = require('./models/action_close');
const setupAnswerModel = require('./models/answer');
const setupAreaCompanyModel = require('./models/area_company');
const setupBranchOfficeModel = require('./models/branch_office');
const setupBusinessUserModel = require('./models/business_user');
const setupBussinessModel = require('./models/business');
const setupClasificationComplaintModel = require('./models/clasification_complaint');
const setupClasificationModel = require('./models/clasification');
const setupComplaintActionModel = require('./models/complaint_action');
const setupComplaintUserModel = require('./models/complaint_user');
const setupComplaintModel = require('./models/complaint');
const setupFormClasificationModel = require('./models/form_clasification');
const setupFormComplaintModel = require('./models/form_complaint');
const setupInternalDocumentModel = require('./models/internal_document');
const setupLogComplaintModel = require('./models/log_complaint');
const setupMessageModel = require('./models/message');
const setupOtherPeopleModel = require('./models/other_people');
const setupPeopleModel = require('./models/people');
const setupPrivateDocumentTypeModel = require('./models/private_document_type');
const setupPrivateDocumentModel = require('./models/private_document');
const setupPublicDocumentModel = require('./models/public_document');
const setupQuestionClasificationModel = require('./models/question_clasification');
const setupQuestionModel = require('./models/question');
const setupStatusCaseModel = require('./models/status_case');
const setupSuperB2bModel = require('./models/super_b2b');
const setupUserModel = require('./models/user');
const setupRoleModel = require('./models/role');




config();

const consoleLog = debug('debugging:sequelize');

let logging;

const dbForceSync = process.env.DB_FORCE_SYNC === 'true';

if (process.env.NODE_ENV === 'production') {
  logging = false;
} else {
  logging = (log) => consoleLog(log);
}

const configSequelize = {
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
  logging
};


const sequelize = setupDatabase(configSequelize);

// Models ...
const AddressModel = setupAddressModel(configSequelize);
const ActionCloseModel = setupActionCloseModel(configSequelize);
const AnswerModel = setupAnswerModel(configSequelize);
const AreaCompanyModel = setupAreaCompanyModel(configSequelize);
const BranchOfficeModel = setupBranchOfficeModel(configSequelize);
const BussinessUserModel = setupBusinessUserModel(configSequelize);
const BusinessModel = setupBussinessModel(configSequelize);
const ClasificationComplaintModel = setupClasificationComplaintModel(configSequelize);
const ClasificationModel = setupClasificationModel(configSequelize);
const ComplaintActionModel = setupComplaintActionModel(configSequelize);
const ComplaintUserModel = setupComplaintUserModel(configSequelize);
const ComplaintModel = setupComplaintModel(configSequelize);
const FormComplaintModel = setupFormComplaintModel(configSequelize);
const FormClasificationModel = setupFormClasificationModel(configSequelize);
const InternalDocumentModel = setupInternalDocumentModel(configSequelize);
const LogComplaintModel = setupLogComplaintModel(configSequelize);
const MessageModel = setupMessageModel(configSequelize);
const OtherPeopleModel = setupOtherPeopleModel(configSequelize);
const PeopleModel = setupPeopleModel(configSequelize);
const PrivateDocumentTypeModel = setupPrivateDocumentTypeModel(configSequelize);
const PrivateDocumentModel = setupPrivateDocumentModel(configSequelize);
const PublicDocumentModel = setupPublicDocumentModel(configSequelize);
const QuestionClasificationModel = setupQuestionClasificationModel(configSequelize);
const QuestionModel = setupQuestionModel(configSequelize);
const StatusCaseModel = setupStatusCaseModel(configSequelize);
const SuperB2bModel = setupSuperB2bModel(configSequelize);
const UserModel = setupUserModel(configSequelize);
const RoleModel = setupRoleModel(configSequelize);




sequelize.authenticate()
  .then((res) => {
    consoleLog(`Connection has been established successfully. ${res}`);
    sequelize.sync({ force: dbForceSync });
  })
  .catch((err) => {
    consoleLog(`Unable to connect to the database: ${err}`);
  });



/**
 * Relation one to many 1:N - Business:Area_Company
 *
 * hasMany
 * One Business has many Area
 * belongsTo
 * One Area belong to Business
 */
const BusinessAreaRelationOptions = {
  foreignKey: {
    name: 'fk_business',
    unique: true,
    onDelete: 'SET NULL'
  }
};
AreaCompanyModel.hasOne(BusinessModel, BusinessAreaRelationOptions);
BusinessModel.belongsTo(AreaCompanyModel, BusinessAreaRelationOptions);



  export {
    AddressModel,
    ActionCloseModel,
    AnswerModel,
    AreaCompanyModel,
    BranchOfficeModel,
    BussinessUserModel,
    BusinessModel,
    ClasificationComplaintModel,
    ClasificationModel,
    ComplaintActionModel,
    ComplaintUserModel,
    ComplaintModel,
    FormComplaintModel,
    FormClasificationModel,
    InternalDocumentModel,
    LogComplaintModel,
    MessageModel,
    OtherPeopleModel,
    PeopleModel,
    PrivateDocumentTypeModel,
    PrivateDocumentModel,
    PublicDocumentModel,
    QuestionClasificationModel,
    QuestionModel,
    StatusCaseModel,
    SuperB2bModel,
    UserModel,
    RoleModel
  };
  