//var a="good morning";
// function greet()
// {
//     let a="good after";
//     console.log(a);
// }
// greet();
// console.log(a);
//new XMLHttpRequest()

// const request= new XMLHttpRequest();
    // const sendata = JSON.stringify({
    //     type:"teacher",
    //     language:"English"
    // })
// const url="https://restcountries.com/v3.1/all";
// request.onload = function(){
//     const data =JSON.parse(this.response);
//     data.forEach(element => {
//         console.log(element.flag)
//     });
//     //console.log(data);
// };
// request.open('POST',url);
// request.send(sendata);
// request.open('GET',url);
// request.send();


const url="https://restcountries.com/v3.1/all";
const sendata = JSON.stringify({
    type:"teacher",
    language:"English"
})

function IO(method='',url='',body='', print=(data)=>{})
{
   // let data;
    const request = new XMLHttpRequest();
    
    request.open(method, url)

    if(method==='GET'){
        request.send();
    }
    else{
        request.send(body)
    }
    
    request.onload = function(){
   // data = JSON.parse(this.responseText);
    print(JSON.parse(this.responseText));
    };

    //return data;

}

function printdata(data=[])
{
    console.log(data)
}

IO('GET', './concat.json', null, printdata);



//console.log(IO('GET', url, null, printdata));
