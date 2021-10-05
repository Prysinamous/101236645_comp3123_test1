// Question 1: Robertha Alvarez 101236645
// lowerCaseWords func that takes a mixed array as input.
// that returns a promise that is resolved or rejected
// + filter the non-strings and lower case the remaining words

const lowerCaseWords = (mixedArray) =>
{
    return new Promise((resolve, reject) =>{
        if (Array.isArray(mixedArray) && mixedArray.length >=0)
        { //this above is used to check valid mixedArray type

            const stringFil = mixedArray.filter((arr) => typeof arr === "string"); // + filter the non-strings
            const lowerC = stringFil.map((filarrItems) => filarrItems.toLowerCase()); // will make it to lowercase);
            resolve(lowerC);
        }
        else
        {
            reject("Sorry this is invalid!!! no thank you try again")
        }
    });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

async function returnMix()
{
    try
    {
        let result = await lowerCaseWords(mixedArray);
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }
}

returnMix();