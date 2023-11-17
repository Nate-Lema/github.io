
export   { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, TreeNode, sumTreeValues}

function sumTo(n: number): number {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

function factorial(n: number): number {
    if(n === 1){
        return n;
    }else{
        return n * factorial(n -1)
    }
}
function fibonacci(num:number):number{
    if(num <= 1){
        return num
    }else{
        return fibonacci(num -1) + fibonacci(num-2)
    }
}

type ListNode =  {
    value: number;
    next: ListNode | null;
}

// Recursive version to print the values of the linked list
function outputList(node: ListNode | null): string {
    if (node) {
        console.log(node.value);
        outputList(node.next);
    }
    return "1 2 3 4 printed to console";
}
// console.log(outputList(list))
// Iterative version to print the values of the linked list
function outputListLoop(node: ListNode): string {
    let result = "";
    while (node) {
        result += node.value + " ";
        console.log(node.value);
        node = node.next!;
    }
    return "1 2 3 4 printed to console";
}
// console.log(outputListLoop(list))
// Recursive version to print the values of the linked list in reverse
function reverseList(node: ListNode | null): string {
    if (node) {
        reverseList(node.next);
        console.log(node.value);
    }
    return "4 3 2 1 printed to console";
}
// console.log(reverseList(list))
// Iterative version to print the values of the linked list in reverse
function reverseListLoop(node: ListNode): string {
    let values: number[] = [];
    while (node) {
        values.unshift(node.value);
        node = node.next!;
    }
    console.log(values.join(" "));
    return "4 3 2 1 printed to console";
}
// console.log(reverseListLoop(list))

type TreeNode = {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
function sumTreeValues(binaryTree: TreeNode | null): number {
    if (!binaryTree) {
        return 0;
    }

    return binaryTree.value + sumTreeValues(binaryTree.left) + sumTreeValues(binaryTree.right);
}