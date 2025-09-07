function AddLearnerPercents(learner, submissions, assignments){
    for(let submission of submissions){
        const assignmentId=submission["assignment_id"];
        console.log(assignmentId+" id")
        if(submission["learner_id"]==learner["id"]) {
            let score=submission["submission"]["score"];
           
            for(let assignment of assignments){
                if(assignment["id"]==assignmentId){
                    const learnerData=FindLearner(submissions, learner)["submission"];
                    const onTime=WasSubmittedOnTime(learnerData, assignment);
                    console.log(assignment);
                    if(!onTime)
                        score=score-assignment["points_possible"]/10;
                   learner[assignmentId]=score/assignment["points_possible"];
                   break;
                }
            }
        }
    }
   
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