function GetLearnerPercent(learner, assignment, submissions, assignments){
    for(let submission of submissions){
        if(submission["learner_id"]==learner["id"]&&submission["assignment_id"]==assignment["id"]){
            let perfectScore
            for(let position=0; position<assignments.length; position++){
                if(assignments[position]["id"]==assignment["id"]){
                    perfectScore=assignments[position]["points_possible"]
                    //No need to be in the loop anymore
                    break
                }
            }
            console.log("submission score "+submission["submission"]["score"])
            return submission["submission"]["score"]/perfectScore
        }
           
    }
    //If the student didn't submit the assignment, he/she got a 0
    return 0
}
function CalculateLearnerAverage(id, submissions, assignments){
    let totalScore=0
    let totalPossiblePoints=0
    for(let submission of submissions){
       
        if(submission["learner_id"]===id){
            
            totalScore+=submission["submission"]["score"]
            let possiblePoints
           
            for(let position=0; position<assignments.length; position++){
                if(assignments[position]["id"]==submission["assignment_id"]){
                    possiblePoints=assignments[position]["points_possible"]
                    break
                }
            }
            totalPossiblePoints+=possiblePoints
        }
    }
    
    return totalScore/totalPossiblePoints
}
function ParseNumber(text){
    let number=0;
    for(let position=0; position<text.length; position++){
        const digit=text[position]%16;
        number=number*10+digit;
    }
    return number;
}