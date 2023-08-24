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
    let scores = []
    for (let i = 0; i < results.length; i++) {
        let score = 0
        let result = results[i]
            if (result.question1 === true) score +=3
            if (result.question2 === true) score +=1
            if (result.question3 === true) score +=1
            if (result.question4 === true) score +=4
            if (result.question5 === true) score +=2
            if (result.question6 === true) score +=1
            if (result.question7 === true) score +=1
            if (result.question8 === true) score +=2
            if (result.question9 === true) score +=1
            if (result.question10 === true) score +=4
            if (result.question11 === true) score +=2
            if (result.question12 === true) score +=1
            if (result.question13 === true) score +=5
            if (result.question14 === true) score +=1
            if (result.question15 === true) score +=1
            if (result.question16 === true) score +=1
            if (result.question17 === true) score +=1
            if (result.question18aa === "Several days") score +=1 // Change equivelancy check based on actual data
            if (result.question18ab === "More than half the days") score +=2
            if (result.question18ac === "Nearly every day") score +=3
            if (result.question18ba === "Several days") score +=1 
            if (result.question18bb === "More than half the days") score +=2
            if (result.question18bc === "Nearly every day") score +=3
            if (result.question19a === "A little bit") score+=1
            if (result.question19b === "Somewhat") score+=2
            if (result.question19c === "Quite a bit") score+=3
            if (result.question19d === "Very much") score+=4
            if (result.question20aa === "Once or Twice") score +=1  // For naming convention, might be better to count the questions w/ same number as another one (18b -> 19, 20b -> 21))
            if (result.question20ab === "Monthly") score +=2
            if (result.question20ac === "Weekly") score +=3
            if (result.question20ad === "Daily or Almost Daily") score +=4
            if (result.question20ba === "Once or Twice") score +=1
            if (result.question20bb === "Monthly") score +=2
            if (result.question20bc === "Weekly") score +=3
            if (result.question20bd === "Daily or Almost Daily") score +=4
            if (result.question20ca === "Once or Twice") score +=1
            if (result.question20cb === "Monthly") score +=2
            if (result.question20cc === "Weekly") score +=3
            if (result.question20cd === "Daily or Almost Daily") score +=4
            if (result.question20da === "Once or Twice") score +=1
            if (result.question20db === "Monthly") score +=2
            if (result.question20dc === "Weekly") score +=3
            if (result.question20dd === "Daily or Almost Daily") score +=3
        scores.push(score)
        }
    console.log(scores)
});

app.post("/", (req)=> {
    req.body.command()
    }
);


// If we need to identify medium/high/imminent risk for each category
// Create variable for each category, assigned 0 by default
// Add to that value whenever the results are checked
// Same idea for the grouped categories like 18 and 20