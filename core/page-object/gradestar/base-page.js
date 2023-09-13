const enviroment = require('./env.conf').config;

class BasePage {
  /**
     * Brief description about the method intializeEnvironment()
     * @param: GradestarType
     * @description: This method find the type of Gradestar as per the required "gradestarType", then send to the respective element
     * If match not found then it returns failed
     * @return : Promise Object
     * @author: Rakesh
     */
  async intializeEnvironment (gradestarType) {
    const envData = enviroment[gradestarType];
    const username = envData.username;
    const password = envData.password;
    const gradestarPath = envData.path;
    console.log('username' + username);
    return { username, password, gradestarPath };
  }
}
module.exports = BasePage;
