import express from 'express'

const app = express();
const port = 3001

app.use(express.static("."));

app.listen(port, function() {
    console.log(`App started on port number ${port}`)
});

// Scores
let foodSecurityScore = 0
let housingSecurityScore = 0
let transportationScore = 0
let interpersonalSafetyScore = 0
let suicideScore = 0
let depressionScore = 0
let stressScore = 0
let substanceScore = 0

function computeScores(result){
    if (result.question1 === "Yes") foodSecurityScore += 3;
    if (result.question2 === "Yes") foodSecurityScore += 1;
    if (result.question3 === "Yes") foodSecurityScore += 1;
    if (result.question4 === "Yes") housingSecurityScore += 4;
    if (result.question5 === "Yes") housingSecurityScore += 2;
    if (result.question6 === "Yes") housingSecurityScore += 1;
    if (result.question7 === "Yes") housingSecurityScore += 1;
    if (result.question8 === "Yes") transportationScore += 2;
    if (result.question9 === "Yes") transportationScore += 1;
    if (result.question10 === "Yes") interpersonalSafetyScore += 4;
    if (result.question11 === "Yes") interpersonalSafetyScore += 2;
    if (result.question12 === "Yes") interpersonalSafetyScore += 1;
    if (result.question13 === "Yes") suicideScore += 5;
    if (result.question14 === "Yes") suicideScore += 1;
    if (result.question15 === "Yes") suicideScore += 1;
    if (result.question16 === "Yes") suicideScore += 1;
    if (result.question17 === "Yes") suicideScore += 1;
    if (result.question18 === "Several days") depressionScore += 1;
    if (result.question18 === "More than half the days") depressionScore += 2;
    if (result.question18 === "Nearly every day") depressionScore += 3;
    if (result.question19 === "Several days") depressionScore += 1;
    if (result.question19 === "More than half the days") depressionScore += 2;
    if (result.question19 === "Nearly every day") depressionScore += 3;
    if (result.question20 === "A little bit") stressScore += 1;
    if (result.question20 === "Somewhat") stressScore += 2;
    if (result.question20 === "Quite a bit") stressScore += 3;
    if (result.question20 === "Very much") stressScore += 4;
    if (result.question21 === "Once or Twice") substanceScore += 1;
    if (result.question21 === "Monthly") substanceScore += 2;
    if (result.question21 === "Weekly") substanceScore += 3;
    if (result.question21 === "Daily or Almost Daily") substanceScore += 4;
    if (result.question22 === "Once or Twice") substanceScore += 1;
    if (result.question22 === "Monthly") substanceScore += 2;
    if (result.question22 === "Weekly") substanceScore += 3;
    if (result.question22 === "Daily or Almost Daily") substanceScore += 4;
    if (result.question23 === "Once or Twice") substanceScore += 1;
    if (result.question23 === "Monthly") substanceScore += 2;
    if (result.question23 === "Weekly") substanceScore += 3;
    if (result.question23 === "Daily or Almost Daily") substanceScore += 4;
    if (result.question24 === "Once or Twice") substanceScore += 1;
    if (result.question24 === "Monthly") substanceScore += 2;
    if (result.question24 === "Weekly") substanceScore += 3;
    if (result.question24 === "Daily or Almost Daily") substanceScore += 4;
}



// scores +patient name and MRN stored in a JSON file, sent to server Kendall is working on
app.get("/", function(req,res) {
    res.sendFile(__dirname+"index.html");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req,res)=> {
    console.log(JSON.stringify(req.body));

    if(req.body.command == "computeRiskScores"){
        console.log("Questioneer requested the backend computeRiskScores");

    }else{
        console.log("Questioneer send the backend a post command that it did not recognize");
    }
    computeScores(req.body)
    res.json({
        foodSecurityScore,
        housingSecurityScore,
        transportationScore,
        interpersonalSafetyScore,
        suicideScore,
        depressionScore,
        stressScore,
        substanceScore
    });
});

/*
var exampleBody = {
    command: "computeRiskScores",
    data: {
        "q1": "yes",
        "q2": "",
        "q3": "",
        "q4": "",
        "q5": "",
        "q6": "",
        "q7": "",
        "q8": "",
        "q9": "",
        "q10": "",
        "q11": "",
        "q12": "",
        "q13": "",
        "q14": "",
        "q15": "",
        "q16": "",
        "q17": "",
        "q18": "",
        "q19": "",
        "q20": "",
    }
};
*/
