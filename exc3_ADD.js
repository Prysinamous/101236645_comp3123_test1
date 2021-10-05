// Question 3: Robertha Alvarez 101236645 USING ES6 DOCUMENTATION too
//create a Logs directory, if it does not exist
// o change the current process to the new Logs directory
// o create 10 log files and write some text into the file
// o output the files names to console

let fs = require('fs');
if(fs.existsSync("Logs"))
{
//do nothing
}
else
{
    fs.mkdirSync("Logs"); //if it does not exist make direc for it called Logs
}
process.chdir("Logs");
// above i am using inbuilt application programming interface of the process
// module which is used to change the current working directory.
//// this changes the current process to the new Logs directory

for(let i = 0; i < 10; i++)  //creating the log files needed from 0-9
{
    //the log will be called this and the i is the current number so it goes fro, 0-9
    let number = i;
    let log = "log "+ i + ".txt";


    fs.writeFile(log, 'robertha log', (error) =>
        //using writeFile to make a log text with log data inside
    {
        try
        {
            // this is just filler to make the catch below work!
        }
        catch (error) // incase there is an
        {
            console.error(error);

        }
    });
     console.log(log);
}