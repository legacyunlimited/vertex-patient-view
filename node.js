import express from 'express'

const app = express();
const port = 3000

app.listen(port, function() {
    console.log(`App started on port number ${port}`)
});

let results = [
    {    
    question1: true,
    question2: true,
    question3: true,
    question4: true,
    question5: true,
    question6: true,
},
{    
    question1: true,
    question2: true,
    question3: true,
    question4: true,
    question5: true,
    question6: true,
},
]

app.get("/", function(req,res) {
    res.send("Hello world")
    let foodSecurityScore = 0
    let housingSecurityScore = 0
    let transportationScore = 0
    let interpersonalSafetyScore = 0
    let suicideScore = 0
    let depressionScore = 0
    let stressScore = 0
    let substanceScore = 0
    for (let i = 0; i < results.length; i++) {
        let result = results[i]
            if (result.question1 === true) foodSecurityScore +=3
            if (result.question2 === true) foodSecurityScore +=1
            if (result.question3 === true) foodSecurityScore +=1
            if (result.question4 === true) housingSecurityScore +=4
            if (result.question5 === true) housingSecurityScore +=2
            if (result.question6 === true) housingSecurityScore +=1
            if (result.question7 === true) housingSecurityScore +=1
            if (result.question8 === true) transportationScore +=2
            if (result.question9 === true) transportationScore +=1
            if (result.question10 === true) interpersonalSafetyScore +=4
            if (result.question11 === true) interpersonalSafetyScore +=2
            if (result.question12 === true) interpersonalSafetyScore +=1
            if (result.question13 === true) suicideScore +=5
            if (result.question14 === true) suicideScore +=1
            if (result.question15 === true) suicideScore +=1
            if (result.question16 === true) suicideScore +=1
            if (result.question17 === true) suicideScore +=1
            if (result.question18aa === "Several days") depressionScore +=1 // Change equivelancy check based on actual data
            if (result.question18ab === "More than half the days") depressionScore +=2
            if (result.question18ac === "Nearly every day") depressionScore +=3
            if (result.question18ba === "Several days") depressionScore +=1 
            if (result.question18bb === "More than half the days") depressionScore +=2
            if (result.question18bc === "Nearly every day") depressionScore +=3
            if (result.question19a === "A little bit") stressScore +=1
            if (result.question19b === "Somewhat") stressScore +=2
            if (result.question19c === "Quite a bit") stressScore +=3
            if (result.question19d === "Very much") stressScore +=4
            if (result.question20aa === "Once or Twice") substanceScore +=1  // For naming convention, might be better to count the questions w/ same number as another one (18b -> 19, 20b -> 21))
            if (result.question20ab === "Monthly") substanceScore +=2
            if (result.question20ac === "Weekly") substanceScore +=3
            if (result.question20ad === "Daily or Almost Daily") substanceScore +=4
            if (result.question20ba === "Once or Twice") substanceScore +=1
            if (result.question20bb === "Monthly") substanceScore +=2
            if (result.question20bc === "Weekly") substanceScore +=3
            if (result.question20bd === "Daily or Almost Daily") substanceScore +=4
            if (result.question20ca === "Once or Twice") substanceScore +=1
            if (result.question20cb === "Monthly") substanceScore +=2
            if (result.question20cc === "Weekly") substanceScore +=3
            if (result.question20cd === "Daily or Almost Daily") substanceScore +=4
            if (result.question20da === "Once or Twice") substanceScore +=1
            if (result.question20db === "Monthly") substanceScore +=2
            if (result.question20dc === "Weekly") substanceScore +=3
            if (result.question20dd === "Daily or Almost Daily") substanceScore +=3
        }
    console.log(`${foodSecurityScore} ${housingSecurityScore} ${transportationScore} ${interpersonalSafetyScore} ${suicideScore} ${depressionScore} ${stressScore} ${substanceScore}`)
});

app.post("/", (req)=> {
    req.body.command()
    }
);