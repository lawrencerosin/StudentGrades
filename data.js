
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
      name: "Write an If-Else If Else Statement",
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
const assignments=AssignmentGroup["assignments"]
function FindAssignment(learner){
  for(let assignment of assignments){
    if(learner["learner_id"]==assignment["id"])
      return assignment["id"]
  }

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
function AddGrade(info, learner){
  let position=0
  while(position<info.length){
    if(info[position]["id"]===learner["learner_id"])
      break
    else 
      position++
  }
  if(position<info.length){
    const assignment=FindAssignment(LearnerSubmissions[position]["assignment_id"])
    info[position][assignment]=GetLearnerPercent(info[position], assignment)
  }
  else{
    const assignmentId=learner["assignment_id"]
   const added=
      {
        "id":learner["learner_id"]
      };
        added[assignmentId]=GetLearnerPercent(learner["learner_id"], learner["assignment_id"]);
      
      info.push(added);
  }
}
function getLearnerData(course, ag, submissions) {
  let info=[]
  
  for(let learner of LearnerSubmissions){
   
    AddGrade(info, learner)
  }
function FindAssignment(id){
    for(let assignment of assignments){
        if(assignment["id"]==id)
            return assignment
    }
}
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
  return info;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
