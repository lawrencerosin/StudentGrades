function GetLearnerPercent(learner, assignment){
    for(let submission of LearnerSubmissions){
        if(submission["learner_id"]==learner["id"]&&submission["assignment_id"]==assignment["id"])
            return submission["submissions"]["score"]/submission["id"]
    }
    //If the student didn't submit the assignment, he/she got a 0
    return 0
}
function CalculateLearnerAverage(id){
    let totalScore=0
    let totalPossiblePoints=0
    for(let submission of LearnerSubmissions){
       
        if(submission["learner_id"]===id){
            
            totalScore+=submission["submission"]["score"]
            let possiblePoints
           
            for(let position=0; position<assignments.length; position++){
                if(assignments[position]["id"]===submission["assignment_id"]){
                    possiblePoints=assignments[position]["points_possible"]
                    break
                }
            }
            totalPossiblePoints+=possiblePoints
        }
    }
    return totalScore/totalPossiblePoints
}