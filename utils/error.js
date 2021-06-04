const NOT_PERMISSON = {
  statusCode: 400,
  message: "You are not permission",
};

const CLASS_NOT_FOUND = {
  statusCode: 500,
  message: "ClASS NOT FOUND",
};

const TEACHER_NOT_FOUND = {
  statusCode: 400,
  message: "The teacher does not exist",
};

const CLASS_CREATION_FAILED = {
  statusCode: 400,
  message: "Create class failed",
};
const CLASS_CREATION_SUCCESS = {
  statusCode: 200,
  message: "Create class success",
};
const UPDATE_ACCOUNT_FAILED = {
  statusCode: 400,
  message: "Update account failed",
};

const UPDATE_ACCOUNT_SUCCESS = {
  statusCode: 200,
  message: "Update account success",
};

const NOT_A_TEACHER = {
  statusCode: 400,
  message: "You are not a teacher",
};

const SERVER_ERROR = {
  statusCode: 500,
  message: "SERVER ERROR",
};

const EMAIL_ALREADY_EXISTS = {
  statusCode: 401,
  message: "Account already exists",
};

const SAVE_ACCOUNT_FAILED = {
  statusCode: 500,
  message: "Save account failed",
};

const CREATE_ACCOUNT_SUCCESS = {
  statusCode: 200,
  message: "Create account success",
};

const CREATE_MODULE_FAILED = {
  statusCode: 500,
  message: "CREATE MODULE FAILED",
};

const CREATE_MODULE_SUCCESS = {
  statusCode: 200,
  message: "CREATE MODULE SUCCESS",
};

const CREATE_SYLLABUS_FAILED = {
  statusCode: 500,
  message: "CREATE SYLLABUS SUCCESS",
};

const CREATE_SYLLABUS_SUCCESS = {
  statusCode: 200,
  message: "CREATE SYLLABUS SUCCESS",
};

const SIGNUP_FAILED = {
  statusCode: 500,
  message: "Signup failed",
};

const LOGIN_FAILED = {
  statusCode: 400,
  message: "Wrong account or password",
};

const LOGIN_SUCCESS = {
  statusCode: 200,
  message: "Login success",
};

const LOGIN = {
  statusCode: 400,
  message: "You need login",
};

const NEED_ACTIVE = {
  statusCode: 400,
  message: "Your account needs to be activated",
};

const GET_LIST_DATA_CLASS = {
  statusCode: 200,
  message: "Your class list",
};

const GET_LIST_DATA_FAILED = {
  statusCode: 500,
  message: "GET DATA FAILED",
};

const GET_LIST_DATA_SUCCESS = {
  statusCode: 200,
  message: "GET DATA SUCCESS",
};

const UPDATE_CLASS_SUCCESS = {
  statusCode: 200,
  message: "Update class success",
};

const DELETE_CLASS_SUCCESS = {
  statusCode: 200,
  message: "Delete class success",
};

const DELETE_CLASS_FAILED = {
  statusCode: 400,
  message: "Delete class failed",
};

const DELETE_SUCCESS = {
  statusCode: 200,
  message: "Delete success",
};

const DELETE_FAILED = {
  statusCode: 400,
  message: "Delete failed",
};

const GET_LIST_CLASS_OF_TEACHER = {
  statusCode: 200,
  message: "Your class",
};

const CLASS_DETAIL = {
  statusCode: 200,
  message: "Class information",
};

const UPDATE_STATUS = (UPDATE_FAILED = {
  statusCode: 500,
  message: "Update status failed",
});

const UPLOAD_FAILED = {
  statusCode: 500,
  message: "Upload failed",
};

const NO_FILE_SELECT = {
  statusCode: 400,
  message: "No file selected",
};

const UPDATE_AVATAR_FAILED = {
  statusCode: 500,
  message: "Update avatar failed",
};

const GET_LIST_USER = {
  statusCode: 200,
  message: "List user",
};

const GET_SCORE_USER = {
  statusCode: 200,
  message: "Get score of user success",
};

const INVALID_TOKEN = {
  statusCode: 500,
  message: "Invalid token",
};

const USER_NOT_FOUND = {
  statusCode: 400,
  message: "User Not found",
};

const NONE_OF_EMAIL_VALID = {
  statusCode: 400,
  message: "None Of Email Valid",
};

const USER_ALREADY_EXIST = {
  statusCode: 400,
  message: "User already in Class",
};
const ADD_USER_SUCCESS = {
  statusCode: 200,
  message: "Add user success",
};
const NOT_A_STUDENT_OF_CLASS = {
  statusCode: 400,
  message: " Not a student of this class",
};
const DELETE_STUDENT_SUCCESS = {
  statusCode: 200,
  message: "Delete student success",
};
const DELETE_STUDENT_FAILED = {
  statusCode: 500,
  message: "Delete student failed",
};

const ATTENDANCE_DONE = {
  statusCode: 200,
  message: "Attendance success",
};

const POINT_DONE = {
  statusCode: 200,
  message: "Point success",
};

const CHANGE_STATUS_DONE = {
  statusCode: 200,
  message: "Change status student success",
};

const ACCOUNT_NOT_FOUND = {
  statusCode: 400,
  message: "Account not found",
};
const ACCOUNT_MUST_BE_STUDENT = {
  statusCode: 400,
  message: "ACCOUNT_MUST_BE_STUDENT",
};

const CHECK_EMAIL = {
  statusCode: 200,
  message: "Check email",
};

const TRANSACTION_SUCCESS = {
  statusCode: 200,
  message: "Transaction success",
};

const TRANSACTION_FAILED = {
  statusCode: 400,
  message: "Transaction failed, check money input",
};

const UPDATE_SUCCESS = {
  statusCode: 200,
  message: "UPDATE SUCCESS",
};

const INVALID_INPUT = {
  statusCode: 500,
  message: "Invalid Input",
};

const CREATE_LESSON_FAILED = {
  statusCode: 500,
  message: "Save lesson failed",
};

const CREATE_LESSON_SUCCESS = {
  statusCode: 200,
  message: "Create lesson success",
};

const SEND_EMAIL_SUCCESS = {
  statusCode: 200,
  message: "Send success",
};

const SEND_EMAIL_FAILED = {
  statusCode: 400,
  message: "Send failed",
};

const GET_LIST_TEACHER = {
  statusCode: 200,
  message: "get list teacher success",
};
const BLOCK_USER = {
  statusCode: 400,
  message: "account blocked",
};
const CREATE_FAILED = {
  statusCode: 500,
  message: "CREATE FAILED",
};
const CREATE_SUCCESS = {
  statusCode: 200,
  message: "CREATE SUCCESS",
};
const QUESTION_EXAM_FAILED = {
  statusCode: 500,
  message: "THE NUMBER OF QUESTIONS MUST BE GREATER THAN 0",
};
const CLASS_EXAM_FAILED = {
  statusCode: 500,
  message: "THE NUMBER OF STUDENT MUST BE GREATER THAN 0",
};
const INPUT_FAILED = {
  statusCode: 500,
  message: "THE INPUT DATA NOT VALIDATE",
};
module.exports = {
  TRANSACTION_SUCCESS,
  CHANGE_STATUS_DONE,
  TRANSACTION_FAILED,
  CHECK_EMAIL,
  ACCOUNT_NOT_FOUND,
  LOGIN,
  INVALID_TOKEN,
  NOT_PERMISSON,
  GET_LIST_USER,
  SERVER_ERROR,
  CLASS_NOT_FOUND,
  TEACHER_NOT_FOUND,
  CLASS_CREATION_FAILED,
  CLASS_CREATION_SUCCESS,
  UPDATE_ACCOUNT_FAILED,
  UPDATE_CLASS_SUCCESS,
  NOT_A_TEACHER,
  EMAIL_ALREADY_EXISTS,
  SAVE_ACCOUNT_FAILED,
  CREATE_ACCOUNT_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  NEED_ACTIVE,
  GET_LIST_DATA_CLASS,
  GET_LIST_DATA_FAILED,
  UPDATE_CLASS_SUCCESS,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_FAILED,
  GET_LIST_CLASS_OF_TEACHER,
  CLASS_DETAIL,
  UPDATE_STATUS,
  UPDATE_FAILED,
  UPDATE_SUCCESS,
  UPLOAD_FAILED,
  NO_FILE_SELECT,
  UPDATE_AVATAR_FAILED,
  USER_ALREADY_EXIST,
  USER_NOT_FOUND,
  ADD_USER_SUCCESS,
  NOT_A_STUDENT_OF_CLASS,
  ACCOUNT_MUST_BE_STUDENT,
  DELETE_STUDENT_FAILED,
  DELETE_STUDENT_SUCCESS,
  ATTENDANCE_DONE,
  NONE_OF_EMAIL_VALID,
  CREATE_LESSON_FAILED,
  CREATE_LESSON_SUCCESS,
  INVALID_INPUT,
  GET_LIST_DATA_SUCCESS,
  DELETE_FAILED,
  DELETE_SUCCESS,
  CREATE_MODULE_SUCCESS,
  CREATE_MODULE_FAILED,
  CREATE_SYLLABUS_SUCCESS,
  CREATE_SYLLABUS_FAILED,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILED,
  POINT_DONE,
  GET_SCORE_USER,
  GET_LIST_TEACHER,
  BLOCK_USER,
  CREATE_FAILED,
  CREATE_SUCCESS,
  QUESTION_EXAM_FAILED,
  CLASS_EXAM_FAILED,
  INPUT_FAILED,
};
