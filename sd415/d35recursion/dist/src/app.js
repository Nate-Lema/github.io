// import { type } from "os"
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
console.log(fibonacci(10));
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// Recursive version to print the values of the linked list
function outputList(node) {
    if (node) {
        console.log(node.value);
        outputList(node.next);
    }
    return "1 2 3 4 printed to console";
}
console.log(outputList(list));
// Iterative version to print the values of the linked list
function outputListLoop(node) {
    let result = "";
    while (node) {
        result += node.value + " ";
        console.log(node.value);
        node = node.next;
    }
    return "1 2 3 4 printed to console";
}
console.log(outputListLoop(list));
// Recursive version to print the values of the linked list in reverse
function reverseList(node) {
    if (node) {
        reverseList(node.next);
        console.log(node.value);
    }
    return "4 3 2 1 printed to console";
}
console.log(reverseList(list));
// Iterative version to print the values of the linked list in reverse
function reverseListLoop(node) {
    let values = [];
    while (node) {
        values.unshift(node.value);
        node = node.next;
    }
    console.log(values.join(" "));
    return "4 3 2 1 printed to console";
}
console.log(reverseListLoop(list));
function sumTreeValues(binaryTree) {
    if (!binaryTree) {
        return 0;
    }
    return binaryTree.value + sumTreeValues(binaryTree.left) + sumTreeValues(binaryTree.right);
}
const tn3 = { value: 3, left: null, right: null };
const tn5 = { value: 5, left: null, right: null };
const tn4 = { value: 4, left: null, right: null };
const tn2 = { value: 2, left: tn4, right: tn5 };
const binaryTree = { value: 1, left: tn2, right: tn3 };
console.log(sumTreeValues(binaryTree));
export {};
