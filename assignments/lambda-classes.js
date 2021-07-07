class Person{
    constructor(attr){
      this.name = attr.name;
      this.age = attr.age;
      this.location = attr.location;
    }
    phrase(){
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }
  
  class Instructor extends Person{
    constructor(attrInstruc){
      super(attrInstruc);
      this.specialty = attrInstruc.specialty;
      this.favLanguage = attrInstruc.favLanguage;
      this.catchPhrase = attrInstruc.catchPhrase;
    }
    demo(subject){
      console.log(`Today, we are learning about ${subject}!`);
    }
    grade(student,subject){
      console.log(`Did you know, ${student} received a perfect score on ${subject}?`);
    }
  }
  
  
  class Student extends Person{
    constructor(attrStud){
      super(attrStud);
      this.previousBackground = attrStud.previousBackground;
      this.className = attrStud.className;
      this.listsSubjects = attrStud.listsSubjects; 
      this.subject = attrStud.subject; 
    }
    PRAssignment(){
      return `${this.name} has submitted a PR for ${this.subject}!`;
    }
    sprintChallenge(){
      return `${this.name} has begun sprint challenge on ${this.subject}`;
    }
  }
  
  class ProjectManager extends Instructor{
    constructor(attrPM){
      super(attrPM);
      this.gradClassName = attrPM.gradClassName;
      this.favInstructor = attrPM.favInstructor;  
    }
    standUp(channel){
      return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(){
      console.log(`${this.name} debugs ${student.name}'s code on ${student.subject}`);
    }
  }
  
  
  
  
  const instruct = new Instructor({
  //from person
    name: 'Vijay',
    age: 39,
    location: 'New York',
  //from instructor
    specialty: 'Ribbon Dancing',
    favLanguage: 'Sign',
    catchPhrase: 'Can you sign with all the colors of the wind?',
  });
  
  
  
  const student = new Student({
    //from Person
    name:'Jake',
    age:20,
    location:'Arizona',
    //from Instructor
    previousBackground:'dumpster diver',
    className:'Home Economics',
    listsSubjects: {
      sub1:'where is the paper map',
      sub2:'is is supposed to be a cold soup',
      sub3:'hatchet sharpening',
    },
    subject:'HTML'
  });
  
  const projmgr = new ProjectManager({
    //from Person
    name:'Roman',
    age:36,
    location:'Florida',
    //from Instructor
    previousBackground:'Uber driver',
    className:'Basic things',
    listsSubjects: {
      sub1:'origami for masters',
      sub2:'good cursive',
      sub3:'go outside and play a sport',
    },
    //from Student
    gradClassName:'bumblebees',
    favInstructor:'Vijay',
  });
      
  
  
  
  console.log(instruct.name);
  console.log(instruct.catchPhrase);
  console.log(student.location);
  console.log(student.listsSubjects);
  console.log(projmgr.demo('basket weaving'));
  console.log(instruct.grade(student.name,'geography'));
  console.log(student.PRAssignment());
  console.log(projmgr.debugsCode());
  console.log(student.sprintChallenge());
  console.log(projmgr.standUp('bumblebeeChamps!!'));
  

  
  