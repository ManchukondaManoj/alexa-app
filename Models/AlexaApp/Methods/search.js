const AlexaStudentMarks = postgresSequelize.import("../../../Schemas/alexa_student_marks.js")
const AlexaDevices = postgresSequelize.import(`${appDir}/Schemas/alexa_devices.js`)


/**
  This method retrieves the information of student based on the alexa_device_id & name given from alexa.
  alexa_device_id & student_name must be in alexa_devices schema.
*/
module.exports = async (query) => {
    return (async () => {
        try {
          AlexaDevices.hasMany(AlexaStudentMarks, { foreignKey: 'ID', sourceKey: 'id' })
          let findDetails = await AlexaDevices.findAll({
            where:{
              student_name: query.studentName.toUpperCase(),
              alexa_device_id: query.deviceId
            },
            include:[
              {
                model: AlexaStudentMarks
              }
            ],
            raw:true
          })
          for (let detail of findDetails) {
            for (let prop of Object.keys(detail)) {
              let propArray = prop.split('.')
              detail[propArray[propArray.length - 1]] = detail[prop]
              if (propArray.length > 1)
                delete detail[prop]
              }
            }
            return findDetails
          } catch (e) {
            throw e;
          }
    })()
}
