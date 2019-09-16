$('#start').on('click',function(){
   for(var i =0; i < questions.length; i++){
      $('#subwrapper').apend('<h2>' + questions[i].question+ '</h2>');\
      for(var j = 0; j < questions[i].answers.length; i++){
         $('#subwrapper').apend('<input type="radio" name="question-" + i + ')
      }
   }
})

var questions = [{
   question: 'Who is Luke Skywalkers dad?',
   answers:['Obi-wan , Darth Maul , Anakin , Yoda'],
   correctAnswer: 'Anakin'
   }, {
   question: 'Who killed Mace Windu?',
   answers:['Jango-Fet , Jaba the Hutt , Count Dooku , Darth Vader'],
   correctAnswer: 'Darth Vader'
   }, {
   question: 'What planet does Yoda go into excile on?',
   answers:['Taatoie , Degaboth , Corasont , YavinIV'],
   correctAnswer: 'Degaboth'
   }];



































































































var questions=["Who is Luke Skywalkers father?","", "What planet does Yoda go into excile on?"];
var choices=["Obi-wan , Darth Maul , Anakin , Yoda","Jango-Fet , Jaba the Hutt , Count Dooku , Darth Vader","Taatoie , Degaboth , Corasont , YavinIV"];
var answers=["Anakin","Darth Vader","Degaboth"];
var choicelist;


//var addToDiv="<form>";
// Loop through each question in our array and make up the multiple choice form for that question
//for(var i=0;i<questions.length;i++){
   //addToDiv=addToDiv+"<br><br>";
//addToDiv+=questions[i]+"<br>";
//var choicelist=choices[i].split(", ");
//for(var c=0;c<choicelist.length;c++){
//addToDiv+="<input type='radio' name="+i+" value="+choicelist[c]+">"+choicelist[c];
//addToDiv+="<input type='hidden' name=Answer For "+i+" value="+answers[i]+">";
//}

// This displays the right answer on the screen..**********************************
//document.getElementById("questionDiv").innerHTML=addToDiv;
//}
// Now that we are done creating multiple choice questions, create a Submit button and close the form tag
//document.getElementById("questionDiv").append="<BR><BR><input type='Submit'></form>";
//
//*********************************************************************************************
//*********************************************************************************************
//*********************************************************************************************


// var trivia = [{
//      questions:{
//          q1: 'Who is Luke Skywalkers Father?',
//          q2: 'Who killed Mace Windu?'
//      },
//      choices:{
//          q1: ['Obi-Wan', 'Darth Sidious', 'Darth maul', 'Anakin'],
//          q2: ['Darth Vader', 'Darth Malgus', 'Master Yoda', 'Captn Rex']
//      },
//      answers:{
//          q1: 'Anakin',
//          q2: 'Darth Vader'
//      }
//     }]

// console.log(trivia.questions.q1);
// console.log(trivia.choices.q1);
// console.log(trivia.answers.q1);
// console.log(trivia.questions.q2);
// console.log(trivia.choices.q2[2]);














































// var trivia = {
//      questions:{
//          q1: 'Who is Luke Skywalkers Father?',
//          q2: 'Who killed Mace Windu?'
//      },
//      choices:{
//          q1: ['Obi-Wan', 'Darth Sidious', 'Darth maul', 'Anakin'],
//          q2: ['Darth Vader', 'Darth Malgus', 'Master Yoda', 'Captn Rex']
//      },
//      answers:{
//          q1: 'Anakin',
//          q2: 'Darth Vader'
//      }
//     }

// console.log(trivia.questions.q1);
// console.log(trivia.choices.q1);
// console.log(trivia.answers.q1);
// console.log(trivia.questions.q2);
// console.log(trivia.choices.q2[2]);