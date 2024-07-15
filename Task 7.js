/*
("What do you want to do ?");
("[1] Countdown timer.");
("[2] Manage an inventory of items");
("[3] Reverse an array.");
("[4] Largest number in an array.");
*/

{
    let seconds = 20;
    for (let i = seconds; i >= 0; i--) {
        console.log(`still ${i} seconds`);
    }
    console.log();
}

{
    let inventory = [
        {
            id: "number 1",
            name: "item1",
        },
        {
            id: "number 2",
            name: "item2",
        },
        {
            id: "number 3",
            name: "item3",
        },
    ];
    
    function manageInventory(operation, data) {
        if (operation === "remove") {
            inventory.pop();
            inventory.forEach((item, index) => {
                console.log(`Item ${index + 1}: ID = ${item.id}, Name = ${item.name}`);
            });
        } else if (operation === "update") {
            let itemToUpdate = inventory.find(item => item.id === data.id);
            if (itemToUpdate) {
                itemToUpdate.name = data.name;
                console.log(`Updated Item: ID = ${itemToUpdate.id}, Name = ${itemToUpdate.name}`);
            }
        } else if (operation === "add") {
            inventory.push(data);
            inventory.forEach((item, index) => {
                console.log(`Item ${index + 1}: ID = ${item.id}, Name = ${item.name}`);
            });
        }
    }
    
    manageInventory("remove");
    manageInventory("add", { id: "number 4", name: "item4" });
    manageInventory("update", { id: "number 2", name: "updatedItem2" });
    console.log();
}

{
    let arr = [1,2,3,4,5,6,7,8,9];
    let arr2 = [];
    for (let i = arr.length-1; i >=0; i--) {
        arr2.push(arr[i]);
    }
    for (let i = 0; i< arr2.length;i++) {
        console.log(`element number ${i} in reverse order is ${arr2[i]}`);
    }
    console.log();
}

{
    let arr = [1,2,3,9,7,22,35,15];
    // let Largest = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > max)
    //         max = arr[i];
    // }
    const Largest = arr.reduce((max, current) => {
        return current > max ? current : max;
    }, arr[0]);
    console.log(`Largest number in an array is ${Largest}`);
}
