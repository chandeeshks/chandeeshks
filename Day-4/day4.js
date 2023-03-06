// Question 1. How to compare two JSON have the same property without order?
//    a. let ob1={name:"person1", age:5};
//    b. et ob2={age:5, name:"person1"};
   
//    Answer: We use == operator to compare given two JSON.
        let ob1={name:"person1", age:5};
        let ob2={age:5, name:"person1"};
        if(ob1==ob2){
            console.log("true");
        }
        else{
        console.log("false");
        }
   //output:false


// Question 2. Use XMLHTTP to display all the country flags in the console.
               //2 ways to get data from server
   //1way is   
   var url="https://restcountries.com/v3.1/all";
   const request=new XMLHttpRequest();
   request.onload=function(){
    const data=JSON.parse(this.responseText);
    data.forEach(element => {
        console.log(`Region-${element.region},Subregion-${element.subregion},Population-${element.population},countryName-${element.name["common"]}`);
    });

   };
   request.open("GET",url);
   request.send();
  //output: get all country flag data
  //2way is
  var URL="https://restcountries.com/v3.1/all";
  function IO(method='', URL='', print=(data)=>{})
  {
       const REQUEST= new XMLHttpRequest();
       REQUEST.open(method,URL)
       REQUEST.onload = function(){
       print(JSON.parse(this.response));
      }
      REQUEST.send();
  }
  function printdata(data=[])
  {
    const data1=data;
    data1.forEach(element =>{
        console.log(element.flag);
    });
  }
IO('GET',URL,printdata)
  //OUTPUT: get all country flag data



//Question 3. Use XMLHTTP to display all the countryName, regions,sub-regions,populations.
    //Answer:
   var url="https://restcountries.com/v3.1/all";
   const request=new XMLHttpRequest();
   request.onload=function(){
    const data=JSON.parse(this.responseText);
    data.forEach(element => {
        console.log(`Region-${element.region},Subregion-${element.subregion},Population-${element.population},countryName-${element.name["common"]}`);
    });

   };
   request.open("GET",url);
   request.send();
//OUTPUT: get all the countryName, regions,sub-regions,populations data from server



/*
  Here I declared url as the var for re-declare to see all the questions,if I declared const as the url variablename it throws an error.
*/