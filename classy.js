
class userDAO {
  constructor(getAuth) {
    this.getAuth = getAuth;
  }
  getUsersRecord() {
    return this.getAuth.listUsers().then((result) => {
      return result.users;
    });
  }
  getUserRecord(uid) {
    return this.getAuth.getUser(uid).then((userRecord) => {
      return userRecord;
    });
  }
  updateUserRecord(uid, data) {
    return this.getAuth.updateUser(uid, data).then((userRecord) => {
      return userRecord;
    });
  }
  deleteUserRecord(uid) {
    return this.getAuth.deleteUser(uid).then(() => {
      return "User deleted";
    });
  }
  setCustomeClaims(uid, claims) {
    return this.getAuth.setCustomUserClaims(uid, claims).then(() => {
      return "Custom claims set";
    });
  }
}
export { userDAO };