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
      console.log(`Did you know, ${student.name} received a perfect score on ${subject}?`);
    }
  }
  
  
  class Student extends Person{
    constructor(attrStud){
      super(attrStud);
      this.previousBackground = attrStud.previousBackground;
      this.className = attrStud.className;
      this.listsSubjects = attrStud.listsSubjects;  
    }
    PRAssignment(){
      console.log(`${student} has submitted a PR for ${subject}!`);
    }
    sprintChallenge(){
      return `${student} has begun sprint challenge on ${subject}`;
    }
  }
  
  class ProjectManager extends Instructor{
    constructor(attrPM){
      super(attrPM);
      this.gradClassName = attrPM.gradClassName;
      this.favInstructor = attrPM.favInstructor;  
    }
    standUp(channel){
      console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(){
      console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
  }
  
  
  const instructShalini = new Instructor({
  //from person
    name: 'Shalini',
    age: 50,
    location: 'North Dakota',
  //from instructor
    specialty: 'Education',
    favLanguage: 'Fortran',
    catchPhrase: 'I rode dinosaurs to kindergarten!',
  });
  
  const instructVijay = new Instructor({
  //from person
    name: 'Vijay',
    age: 39,
    location: 'New York',
  //from instructor
    specialty: 'Ribbon Dancing',
    favLanguage: 'Sign',
    catchPhrase: 'Can you sign with all the colors of the wind?',
  });
  
  const menteeAaron = new Student({
    //from Person
    name:'Aaron',
    age:19,
    location:'Missouri',
    //from Instructor
    previousBackground:'fisherman',
    className:'Intro to stuff',
    listsSubjects: {
      sub1:'ti-83plus basics',
      sub2:'reading menus',
      sub3:'econ for people who don\'t know how to econ good',
    },
  });
  
  const menteeJake = new Student({
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
  });
  
  const projmgrRoman = new ProjectManager({
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
      
  const projmgrEd = new ProjectManager({
    //from Person
    name:'Ed',
    age:63,
    location:'Rhode Island',
    //from Instructor
    previousBackground:'Lumberjack',
    className:'Minuets',
    listsSubjects: {
      sub1:'preheating an oven',
      sub2:'snakes and ladders',
      sub3:'competitive crochet',
    },
    //from Student
    gradClassName:'tritons',
    favInstructor:'Shalini',
  });
  
  
  console.log(instructShalini.name);
  console.log(instructVijay.catchPhrase);
  console.log(menteeJake.location);
  console.log(menteeAaron.listsSubjects);
  console.log(projmgrRoman.demo('basket weaving'));
  
    //things that don't work
    // .sprintChallege
    // .grade
    // .standup
    // .debugsCode
    // .PRAssignment
    // .standUp