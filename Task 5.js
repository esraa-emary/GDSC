/*
("[1] Return the last element in an array.");
("[2] Calculator (+,-,/,*).");
("[3] print every element in an array.");
("[4] Know if parameter is undefined or not.");
*/
{
    let par1,par2,par3;
    par1 = prompt("Please enter first number:");
    par2 = prompt("Please enter the operation:");
    par3 = prompt("Please enter first number:");
    if(par2 == '+')
        console.log(`${par1} + ${par3} = ${par1+par3}`);
    else if(par2 == '-')
        console.log(`${par1} - ${par3} = ${par1-par3}`);
    else if(par2 == '/')
        console.log(`${par1} / ${par3} = ${par1/par3}`);
    else if(par2 == '*')
        console.log(`${par1} * ${par3} = ${par1*par3}`);
}

{
    let arr = [];
    arr = [1,2,3,4,5,6];
    for (let i = 1; i <= size; i++) {
        console.log(`element number ${i} is ${arr[i-1]}`);  
    }
}

{
    let par = prompt("Please enter any thing:");
    if (typeof par == undefined)
        console.log(`Parameter ${par} is undefined`);
    else 
        console.log(`Parameter ${par} is typeof par`);
}
