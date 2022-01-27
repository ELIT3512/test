let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
 let obj = JSON.parse(text);
 console.log(obj);