//this is to demonstrate the time complexity of O(n)

const groceries = ["sugar", "milk","bread","chicken","paneer"];

class MyGroceries {
  
  search_for_item = (groceries, item) => {

    for(let i=0; i<groceries.length; i++){

      if (groceries[i] === item){

        return `found ${item}; it is at the ${i} position`;
      }
    }
    return `${item} not found!`
  }

}


const obj1 = new MyGroceries();
let output = obj1.search_for_item(groceries,"bread");
console.log(output)

