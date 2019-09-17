
var correct = 0;
var wrong = 0;
var unAnswered = 0;
var timeLeft = 0;

function startGame(){
var questions = [{
   question: 'Who is Luke Skywalkers dad?',
   answers:["Obi-wan","Darth Maul","Anakin","Yoda"],
   correctAnswer: 'Anakin'
   }, {
   question: 'Who killed Mace Windu?',
   answers:['Jango-Fet' , 'Jaba the Hutt' , 'Count Dooku' , 'Darth Vader'],
   correctAnswer: 'Darth Vader'
   }, {
   question: 'What planet does Yoda go into excile on?',
   answers:['Taatoie' , 'Degaboth' , 'Corasont' , 'YavinIV'],
   correctAnswer: 'Degaboth'
   },{
      question: 'Who killed the first Sith in a thousand years?',
      answers:['Qui-Gon Jinn' , 'Yoda' , 'Luke Skywalker' , 'Obi-wan'],
      correctAnswer: 'Obi-wan'
   }, {
      question: 'What was the name of Darth Vaders flag ship?',
      answers:['Eclipse' , 'The Executor' , 'The vigilance' , 'The Devastator'],
      correctAnswer: 'The Executor'
      }];

$('#start').on('click',function(){
  
   for(var i =0; i < questions.length; i++){
      $('#subwrapper').append('<br><br><h2>' + questions[i].question+ '</h2>');
      for(var j = 0; j < questions[i].answers.length; j++){
         
         $('#subwrapper').append("<input id='radioCss' type='radio' name='question-"+ i +"' value='"+questions[i].answers[j]+"' >"+questions[i].answers[j]);
       console.log(questions[i].answers[j]);
      }
   }
})
}

function endOfGame(){
   
   for(var k = 0; k < questions.length; k++){
      var rabioButtons = document.getElementsByName('questions-'+ k);
      for(var a = 0; a < rabioButtons.length; a++){
      if (radioButtons[a].checked){
      if(radioButtons[a].value == answers[k]){
      correct++
      } else{
      wrong++
      }
      }
      }}

     unAnswered =  questions.length - (wrong + right);
        
   }
 
 
   $('#submit').on('click', function(){ 
      endOfGame();
      return unAnswered;
       
     })
startGame();



