const AlexaStudentDetails = postgresSequelize.import(`${appDir}/Schemas/alexa_student_marks.js`)

module.exports = async () => {
    return (async () => {
        try {
          let studentMarks = [
            {
              ENGLISH: 62,
              MATHS:63,
              SCIENCE: 64,
              GRADE: "A"
            },
            {
              ENGLISH: 74,
              MATHS:36,
              SCIENCE: 80,
              GRADE: "A"
            },
            {
              ENGLISH: 55,
              MATHS:57,
              SCIENCE: 56,
              GRADE: "B"
            },
            {
              ENGLISH: 80,
              MATHS:85,
              SCIENCE: 90,
              GRADE: "A"
            },
            {
              ENGLISH: 65,
              MATHS:70,
              SCIENCE: 75,
              GRADE: "A"
            }
          ]
            let dataObj = studentMarks.map((obj, index) => {
              return {
                ...obj,
                ID: 11 + index,
                TOTAL: obj.MATHS + obj.ENGLISH + obj.SCIENCE
              }
            })
            console.log(dataObj);
            let findDetails = await AlexaStudentDetails.bulkCreate(dataObj)
        } catch (e) {
          throw e;
        }
    })()
}
