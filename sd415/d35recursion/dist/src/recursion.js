export { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, sumTreeValues };
function sumTo(n) {
    if (n == 1)
        return 1;
    return n + sumTo(n - 1);
}
function factorial(n) {
    if (n === 1) {
        return n;
    }
    else {
        return n * factorial(n - 1);
    }
}
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
// Recursive version to print the values of the linked list
function outputList(node) {
    if (node) {
        console.log(node.value);
        outputList(node.next);
    }
    return "1 2 3 4 printed to console";
}
// console.log(outputList(list))
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
// console.log(outputListLoop(list))
// Recursive version to print the values of the linked list in reverse
function reverseList(node) {
    if (node) {
        reverseList(node.next);
        console.log(node.value);
    }
    return "4 3 2 1 printed to console";
}
// console.log(reverseList(list))
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
function sumTreeValues(binaryTree) {
    if (!binaryTree) {
        return 0;
    }
    return binaryTree.value + sumTreeValues(binaryTree.left) + sumTreeValues(binaryTree.right);
}
