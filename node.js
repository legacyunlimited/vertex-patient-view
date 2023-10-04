import express from 'express'
import fs from 'fs'

const app = express();
const port = 3002

app.use(express.static("."));

app.listen(port, function() {
    console.log(`App started on port number ${port}`)
});

function savePatientData(patientJSON){
    fs.writeFileSync(patientJSON.MRN + ".json",JSON.stringify(patientJSON, null, 4));
    let allPatientData = [];
    if (fs.existsSync('patients.json')) {
        allPatientData = JSON.parse(fs.readFileSync('patients.json', 'utf8'));
    }

    allPatientData.push(patientJSON);
    fs.writeFileSync('patients.json', JSON.stringify(allPatientData, null, 4));
}
function getMRN(callback){
    let returnedMRN = "199999";
    //This is a dummy function! Eventually this will be hooked up to Kendell's Lamda!
    callback(returnedMRN);  
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
    let alcoholScore = 0;
    let prescriptionDrugScore = 0;
    let illegalDrugScore = 0;
    let tobaccoScore = 0;
    let foodInsecurity = "low";
    let housingInsecurity = "low";
    let transportationInaccessibility = "low";
    let interpersonalSafetyRisk = "low";
    let suicideRisk = "low";
    let depressionRisk = "low";
    let emotionalDistress = "low";
    let substanceUse = "low";
    
    //Compute Numerical Scores
    if (qData.question1 === "No") foodSecurityScore += 3;
    if (qData.question2 === "Yes") foodSecurityScore += 1;
    if (qData.question3 === "Yes") foodSecurityScore += 1;
    if (qData.question4 === "No") housingSecurityScore += 4;
    if (qData.question5 === "No") housingSecurityScore += 2;
    if (qData.question6 === "Yes") housingSecurityScore += 1;
    if (qData.question7 === "Yes") housingSecurityScore += 1;
    if (qData.question8 === "No") transportationScore += 2;
    if (qData.question9 === "Yes") transportationScore += 1;
    if (qData.question10 === "No") interpersonalSafetyScore += 4;
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
    if (qData.question21 === "Once or Twice") alcoholScore += 1;
    if (qData.question21 === "Monthly") alcoholScore += 2;
    if (qData.question21 === "Weekly") alcoholScore += 3;
    if (qData.question21 === "Daily or Almost Daily") alcoholScore += 4;
    if (qData.question22 === "Once or Twice") prescriptionDrugScore += 1;
    if (qData.question22 === "Monthly") prescriptionDrugScore += 2;
    if (qData.question22 === "Weekly") prescriptionDrugScore += 3;
    if (qData.question22 === "Daily or Almost Daily") prescriptionDrugScore += 4;
    if (qData.question23 === "Once or Twice") illegalDrugScore += 1;
    if (qData.question23 === "Monthly") illegalDrugScore += 2;
    if (qData.question23 === "Weekly") illegalDrugScore += 3;
    if (qData.question23 === "Daily or Almost Daily") illegalDrugScore += 4;
    if (qData.question24 === "Once or Twice") tobaccoScore += 1;
    if (qData.question24 === "Monthly") tobaccoScore += 2;
    if (qData.question24 === "Weekly") tobaccoScore += 3;
    if (qData.question24 === "Daily or Almost Daily") tobaccoScore += 4;

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
    if (stressScore < 2) emotionalDistress = "low";
    if (stressScore === 2) emotionalDistress = "medium";
    if (stressScore === 3) emotionalDistress = "high";
    if (stressScore >= 4) emotionalDistress = "imminent";

    let highestSubstanceScore = Math.max(alcoholScore, prescriptionDrugScore, illegalDrugScore, tobaccoScore)
    if (highestSubstanceScore < 2) substanceUse = "low";
    if (highestSubstanceScore === 2) substanceUse = "medium";
    if (highestSubstanceScore === 3) substanceUse = "high";
    if (highestSubstanceScore > 3) substanceUse = "imminent";
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
        console.log("savePatientData is being called")
        savePatientData(patientData);
    });
}

app.get("/", function(req,res) {
    res.sendFile("index.html");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req,res)=> {
    let questionnaireData = req.body;
    console.log(questionnaireData);

    if(req.body.command == "computeRiskScores"){
        console.log("Questionnaire requested the backend computeRiskScores");
        buildPatientJSON(questionnaireData);
    }else{
        console.log("Questionnaire sent the backend a post command that it did not recognize");
    }
    res.status(204).send();
    
});