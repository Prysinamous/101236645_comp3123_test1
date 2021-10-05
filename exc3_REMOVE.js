// Question 3: Robertha Alvarez 101236645 USING ES6 DOCUMENTATION too
// remove all the files from the Logs directory, if exists
// o output the file names to delete
// o remove the Logs directory

let fs = require('fs');
let path = require('path');

let trycatch = () =>
{
    try
    {// this is just filler to make the catch below work!
    }
    catch (error) // incase there is an
    {
        console.error(error);
    }
}

if(fs.existsSync("Logs"))//if it does exist (like if the path recognizes that exists then)
{

    fs.readdir("Logs", (err, files) =>
    {

        for (const i of files)
            //ES6 (new) use for...of to iterate over the values in an iterable ie. array, string
        {
            let pathtofile = path.join("Logs", i);

            fs.unlink(pathtofile, err =>//To delete a file with the File System module, use the fs.unlink() method.
            {
                trycatch(); // just incase errors
            });

            console.log(`delete files...${i}`);
        }

        fs.rmdirSync("Logs"); //this is to remove the directory of logs we

    });

         trycatch(); //just incase errors

}