const fs=require('fs');


fs.writeFile("hey.txt","zcnihidfpo",function(err){
    if(err) console.log("error");
    else console.log("done");
})

fs.appendFile("hey.txt","eesalacupnamde",function(err){
    if(err) console.log("error");
    else console.log("done");
})

fs.rename("hey.txt","bye.txt",function(err){
    if(err) console.log("error");
    else console.log("done");
})

// fs.unlink("hey.txt",function(err){
//     if(err) con sole.log("error");
//     else console.log("done");
// })