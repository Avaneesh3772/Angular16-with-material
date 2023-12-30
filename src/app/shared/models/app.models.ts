export class UserInfoModel {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
  ) { }
}

export class UserPersonalInfo {
  constructor(
    public employeeNumber: number,
    public firstname: string,
    public lastname: string,
    public roles: string[],
  ) { }
}

/* export const UserPersonalInfo = {
  "employeeNumber": 339803934,
  "firstname": "Avaneesh",
  "lastname": "Mishra",
  "roles": ["dashboard", "templates", "admin", "rolemanagement", "restatement"]
} */



