const AlexaApp = require(`${appDir}/Models/AlexaApp`)

module.exports = async (req, res) => {
try {
  // console.log('REQUEST_BODY-------',JSON.stringify(req.body));
  let jsonObj = {}
  if(req.body.request.type === 'IntentRequest'){
    let requestIntentType = req.body.request.intent.name
    switch (requestIntentType) {
      case 'StudentMarks': launchStudentMarks(req, res)
        break;
      case 'StudentSubjectMarks': launchStudentSubjectMarks(req, res)
        break;
      case 'StudentGrade': launchStudentGrade(req, res)
        break;
    }
    async function launchStudentMarks(req, res){
          let studentDetails = {
            studentName: req.body.request.intent.slots.studentName.value,
            deviceId: req.body.context.System.device.deviceId,
          }
        let alexaApp = new AlexaApp()
        let findStudentDetails = await alexaApp.search(studentDetails)

        if(findStudentDetails.length){
          jsonObj = {
            "version":"1.0",
            "response": {
              "shouldEndSession": false,
              "outputSpeech": {
                "type": "SSML",
                "ssml":`<speak>Marks of ${studentDetails.studentName} are ${findStudentDetails[0].TOTAL}</speak>`
              }
            }
          }
          res.json(jsonObj)
        } else {
          jsonObj = {
            "version":"1.0",
            "response": {
              "shouldEndSession": false,
              "outputSpeech": {
                "type": "SSML",
                "ssml":`<speak>There is no student with name ${studentDetails.studentName} or might not be registered on this device. Please check</speak>`
              }
            }
          }
          res.json(jsonObj)
        }
    }
    async function launchStudentGrade(req, res){
          let studentDetails = {
            studentName: req.body.request.intent.slots.studentName.value,
            deviceId: req.body.context.System.device.deviceId,
          }
        let alexaApp = new AlexaApp()
        let findStudentDetails = await alexaApp.search(studentDetails)

        if(findStudentDetails.length){
          jsonObj = {
            "version":"1.0",
            "response": {
              "shouldEndSession": false,
              "outputSpeech": {
                "type": "SSML",
                "ssml":`<speak>Grade of ${studentDetails.studentName} is ${findStudentDetails[0].GRADE}</speak>`
              }
            }
          }
          res.json(jsonObj)
        } else {
          jsonObj = {
            "version":"1.0",
            "response": {
              "shouldEndSession": false,
              "outputSpeech": {
                "type": "SSML",
                "ssml":`<speak>There is no student with name ${studentDetails.studentName} or might not be registered on this device. Please check</speak>`
              }
            }
          }
          res.json(jsonObj)
        }
    }
    async function launchStudentSubjectMarks(req, res){
          let subjectName = req.body.request.intent.slots.subject.value.toUpperCase()
          let studentDetails = {
            studentName: req.body.request.intent.slots.studentName.value,
            deviceId: req.body.context.System.device.deviceId,
          }
        let alexaApp = new AlexaApp()
        let findStudentDetails = await alexaApp.search(studentDetails)

        if(findStudentDetails.length){
          jsonObj = {
            "version":"1.0",
            "response": {
              "shouldEndSession": false,
              "outputSpeech": {
                "type": "SSML",
                "ssml":`<speak>Marks of ${studentDetails.studentName} in ${subjectName} are ${findStudentDetails[0][subjectName]}</speak>`
              }
            }
          }
          res.json(jsonObj)
        } else {
          jsonObj = {
            "version":"1.0",
            "response": {
              "shouldEndSession": false,
              "outputSpeech": {
                "type": "SSML",
                "ssml":`<speak>There is no student with name ${studentDetails.studentName} or might not be registered on this device. Please check</speak>`
              }
            }
          }
          res.json(jsonObj)
        }
    }
  } else {
    jsonObj = {
      "version":"1.0",
      "response": {
        "shouldEndSession": false,
        "outputSpeech": {
          "type": "SSML",
          "ssml":`<speak>Hi User, Please tell whose marks or grades you want to see</speak>`
        }
      }
    }
    res.json(jsonObj)
  }
} catch(e){
  console.log('ERROR');
  console.log(e);
  console.log('ERROR');
}
}
