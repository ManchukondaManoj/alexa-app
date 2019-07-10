const AlexaStudentDetails = postgresSequelize.import(`${appDir}/Schemas/alexa_student_marks.js`)

module.exports = async () => {
    return (async () => {
        try {
          let studentMarks = [
            {
              ENGLISH: 50,
              MATHS:55,
              SCIENCE: 60,
              GRADE: "B"
            },
            {
              ENGLISH: 55,
              MATHS:60,
              SCIENCE: 70,
              GRADE: "A"
            },
            {
              ENGLISH: 65,
              MATHS:65,
              SCIENCE: 70,
              GRADE: "A"
            },
            {
              ENGLISH: 65,
              MATHS:65,
              SCIENCE: 75,
              GRADE: "A"
            },
            {
              ENGLISH: 65,
              MATHS:70,
              SCIENCE: 80,
              GRADE: "A"
            },
          ]
            let dataObj = studentMarks.map((obj, index) => {
              return {
                ...obj,
                ID: index+1,
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
