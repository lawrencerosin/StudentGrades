
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Write an If Else-If Else Statement",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};
function FindLearner(learners, learner){
  for(let current of learners){
    if(current["learner_id"]==learner["id"])
      return current;
  }
}
function FindAssignment(assignments, learner){
  for(let assignment of assignments){
    if(learner["assignment_id"]==assignment["id"])
      return assignment
  }

}
function WasSubmittedOnTime(learner, assignment){
  const submittedDate=learner["submitted_at"].split("-");
  const dueDate=assignment["due_at"].split("-");
  for(let position=0; position<submittedDate.length; position++){
    if(ParseNumber(submittedDate[position])<ParseNumber(dueDate[position]))
      return true;
    else if(ParseNumber(submittedDate[position])>ParseNumber(dueDate[position]))
      return false;
  }//If it was submitted exactly on the due date, it was submitted right on time
  return true;
}
// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];
function GetLearners(groups){
  const learners=[];
  for(let group of groups){
    let exists=false;
    for(let learner of learners){
      if(learner["id"]==group["learner_id"]){
        exists=true;
        break;
      }
    }
    if(!exists)
       learners.push({"id":group["learner_id"]});
  }
  return learners;
}
function getLearnerData(course, ag, submissions) {
  let info=[];
  
  const assignments=ag["assignments"];
  if(ag["course_id"]==course["id"]){
      const learners=GetLearners(submissions);
      for(let position=0; position<learners.length; position++){
        
        AddLearnerPercents(learners[position],  submissions, assignments)
          learners[position]["avg"]=CalculateLearnerAverage(learners[position]["id"], submissions, assignments);
        
      }
      return learners;
    
  }
  else 
     throw "Assignments are not for this course.";
  // here, we would process this data to achieve the desired result.
  /*const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];
 */
 
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
