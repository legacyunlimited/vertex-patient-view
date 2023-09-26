import express from 'express'
import fs from 'fs'

const app = express();
const port = 3001

app.use(express.static("."));

app.listen(port, function() {
    console.log(`App started on port number ${port}`)
});

function savePatientData(patientJSON){
    fs.writeFileSync(patientJSON.MRN+".json",JSON.stringify(patientJSON));
}
function getMRN(callback){
    return "199999";
    //This is a dummy function! Eventually this will be hooked up to Kendell's Lamda!
    callback();
}

function buildPatientJSON(qData){    
    //Initialize Score Varibles
    let foodSecurityScore = 0;
    let housingSecurityScore = 0;
    let transportationScore = 0;
    let interpersonalSafetyScore = 0;
    let suicideScore = 0;
    let depressionScore = 0;
    let stressScore = 0;
    let substanceScore = 0;
    let foodInsecurity = "low";
    let housingInsecurity = "low";
    let transportationInaccessibility = "low";
    let interpersonalSafetyRisk = "low";
    let suicideRisk = "low";
    let depressionRisk = "low";
    let emotionalDistress = "low";
    let substanceUse = "low";
    
    //Compute Numerical Scores
    if (qData.question1 === "Yes") foodSecurityScore += 3;
    if (qData.question2 === "Yes") foodSecurityScore += 1;
    if (qData.question3 === "Yes") foodSecurityScore += 1;
    if (qData.question4 === "Yes") housingSecurityScore += 4;
    if (qData.question5 === "Yes") housingSecurityScore += 2;
    if (qData.question6 === "Yes") housingSecurityScore += 1;
    if (qData.question7 === "Yes") housingSecurityScore += 1;
    if (qData.question8 === "Yes") transportationScore += 2;
    if (qData.question9 === "Yes") transportationScore += 1;
    if (qData.question10 === "Yes") interpersonalSafetyScore += 4;
    if (qData.question11 === "Yes") interpersonalSafetyScore += 2;
    if (qData.question12 === "Yes") interpersonalSafetyScore += 1;
    if (qData.question13 === "Yes") suicideScore += 5;
    if (qData.question14 === "Yes") suicideScore += 1;
    if (qData.question15 === "Yes") suicideScore += 1;
    if (qData.question16 === "Yes") suicideScore += 1;
    if (qData.question17 === "Yes") suicideScore += 1;
    if (qData.question18 === "Several days") depressionScore += 1;
    if (qData.question18 === "More than half the days") depressionScore += 2;
    if (qData.question18 === "Nearly every day") depressionScore += 3;
    if (qData.question19 === "Several days") depressionScore += 1;
    if (qData.question19 === "More than half the days") depressionScore += 2;
    if (qData.question19 === "Nearly every day") depressionScore += 3;
    if (qData.question20 === "A little bit") stressScore += 1;
    if (qData.question20 === "Somewhat") stressScore += 2;
    if (qData.question20 === "Quite a bit") stressScore += 3;
    if (qData.question20 === "Very much") stressScore += 4;
    if (qData.question21 === "Once or Twice") substanceScore += 1;
    if (qData.question21 === "Monthly") substanceScore += 2;
    if (qData.question21 === "Weekly") substanceScore += 3;
    if (qData.question21 === "Daily or Almost Daily") substanceScore += 4;
    if (qData.question22 === "Once or Twice") substanceScore += 1;
    if (qData.question22 === "Monthly") substanceScore += 2;
    if (qData.question22 === "Weekly") substanceScore += 3;
    if (qData.question22 === "Daily or Almost Daily") substanceScore += 4;
    if (qData.question23 === "Once or Twice") substanceScore += 1;
    if (qData.question23 === "Monthly") substanceScore += 2;
    if (qData.question23 === "Weekly") substanceScore += 3;
    if (qData.question23 === "Daily or Almost Daily") substanceScore += 4;
    if (qData.question24 === "Once or Twice") substanceScore += 1;
    if (qData.question24 === "Monthly") substanceScore += 2;
    if (qData.question24 === "Weekly") substanceScore += 3;
    if (qData.question24 === "Daily or Almost Daily") substanceScore += 4;

    //Translate Numerical Risk Scores into Verbal Risk Values
    if (foodSecurityScore === 1) foodInsecurity = "medium";
    if (foodSecurityScore === 2) foodInsecurity = "high";
    if (foodSecurityScore > 2) foodInsecurity = "imminent";
    if (housingSecurityScore === 1) housingInsecurity = "medium";
    if (housingSecurityScore > 1 && housingSecurityScore < 4) housingInsecurity = "high";
    if (housingSecurityScore >= 4) housingInsecurity = "imminent";
    if (transportationScore === 1) transportationInaccessibility = "medium";
    if (transportationScore >= 2) transportationInaccessibility = "imminent";
    if (interpersonalSafetyScore === 1) interpersonalSafetyRisk = "medium";
    if (interpersonalSafetyScore > 1 && interpersonalSafetyScore < 4) interpersonalSafetyRisk = "high";
    if (interpersonalSafetyScore >= 4) interpersonalSafetyRisk = "imminent";
    if (suicideScore < 5) suicideRisk = "high"; 
    if (suicideScore >= 5) suicideRisk = "high"; 
    if (depressionScore >= 3) depressionRisk = "high";
    if (stressScore < 2) emotionalDistress = "low"
    if (stressScore === 2) emotionalDistress = "medium"
    if (stressScore === 3) emotionalDistress = "high"
    if (stressScore >= 4) emotionalDistress = "imminent"
    //Assemble patient Data JSON
    let patientData = {
        MRN: null,
        name: qData.name,
        riskFactors: {
           foodInsecurity: foodInsecurity,
           housingInsecurity: housingInsecurity,
           transportationInaccessibility:  transportationInaccessibility,
           interpersonalSafetyRisk: interpersonalSafetyRisk,
           suicideRisk: suicideRisk,
           depressionRisk: depressionRisk,
           emotionalDistress: emotionalDistress,
           substanceUse: substanceUse
        },
        questionnaireResponses: qData
    }

    getMRN((returnedMRN)=>{
        patientData.MRN = returnedMRN;
        savePatientData(patientData);
    });
}

// patient submit questionaire, save name and score
// scores +patient name and MRN stored in a JSON file, sent to server Kendall is working on
app.get("/", function(req,res) {
    res.sendFile("index.html");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req,res)=> {
    var questionierData = req.body;
    console.log(questionierData);

    if(req.body.command == "computeRiskScores"){
        console.log("Questioneer requested the backend computeRiskScores");
        buildPatientJSON(questionierData);
    }else{
        console.log("Questioneer send the backend a post command that it did not recognize");
    }
    res.status(204).send();
    
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
        "q18a": "",
        "q18b": "",
        "q19": "",
        "q20a": "",
        "q20b": "",
        "q20c": "",
        "q20d": ""
    }
};
*/
