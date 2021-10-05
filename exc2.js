// Question 2: Robertha Alvarez 101236645 USING ES6 DOCUMENTATION too

// Given the script file callbacks.js, write a script that does the following:
// to Create a method resolvedPromise that is similar to delayedSuccess and resolves a
// message after a timeout of 500ms.
// to Create a method rejectedPromise that is similar to delayedException and rejects an
// error message after a timeout of 500ms.
// to Call both promises separately and handle the resolved and reject results and then output
//to the console

let resolvedPromise = () =>
{
    let promise1= new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            resolve({'message': 'resolved promise!'});
        }, 500);

    })
    return promise1
}

let rejectedPromise = () =>
{
    let promise2= new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            reject({'error': 'rejected promise!'});
        }, 500);

    })
    return promise2
}


async function ResolRejec()
{
    try
    {
        let result = await resolvedPromise();
        console.log(result);

        let result2 = await rejectedPromise();
        console.log(result2);
    }
    catch(error)
    {
        console.log(error);
    }
}

ResolRejec();