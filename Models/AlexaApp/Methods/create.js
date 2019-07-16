// const AlexaStudentDetails = postgresSequelize.import(`${appDir}/Schemas/alexa_student_marks.js`)
const AlexaStudentDetails = postgresSequelize.import(`${appDir}/Schemas/alexa_devices.js`)

module.exports = async () => {
    return (async () => {
        try {
          let studentMarks = [
            {
              student_name: 'NAVIN'
            },
            {
              student_name: 'SRINI'
            },
            {
              student_name: 'RAMU'
            },
            {
              student_name: 'HARRY'
            },
            {
              student_name: 'NICK'
            }
          ]
            let dataObj = studentMarks.map((obj, index) => {
              return {
                ...obj,
                alexa_device_id: "amzn1.ask.device.AFSSNVH6QRKNAWUTYA2AZCFN3T2M32P5ZWWTC26JERLY24VL6X7FCEH2BTKWH6FLMA6IBVCU33WUX6BVJETPOGX32YZKKV3L5QR2AQZOBUPJWFGJTYFDPNUYWGNLQ27JSO5BPORUIKDRTJDAYAFEUJON62PULWY2WIYNEKHSRXXHTAKQRWDCG",
                id: 12 + index
              }
            })
            console.log(dataObj);
            let findDetails = await AlexaStudentDetails.bulkCreate(dataObj)
        } catch (e) {
          throw e;
        }
    })()
}
