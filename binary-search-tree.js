'use strict';
class Node{
	constructor(data,left,right){
		this.data= data;
		this.left = left;
		this.right = right;
		this.count = 1;
	}
	show(){
		console.log(this.data);
	}
}

class BST{
	constructor(){
		this.root = null;
		this.numbers = 0;
	}
	insert(data){
		var node = new Node(data,null,null);
		if(this.root === null){
			this.root = node;
		}else{
			let current = this.root;
			let parent;
			while(true){
				parent = current;
				if(data < current.data){
					current = current.left;
					if(current === null){
						parent.left = node;
						break;
					}
				}else{
					current = current.right;
					if(current === null){
						parent.right = node;
						break;
					}
				}
			}
		}


	}
	inOrder(node){
		if(node !== null){
			this.inOrder(node.left);
			console.log(node.data + ' ');
			this.inOrder(node.right);
		}
	}
	preOrder(node){
		if(node !== null){
			console.log(node.data + ' ');
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	}
	postOrder(node){
		if(node !== null){
			this.postOrder(node.left);
			this.postOrder(node.right);
			console.log(node.data + ' ');
		}
	}
	levelOrder(node){
		var queue = [];
		if(node !== null){
			queue.push(node);
			while(queue.length > 0){
				let current = queue.shift();
				console.log(current.data);
				if(current.left !== null){
					queue.push(current.left);
				}
				if(current.right !== null){
					queue.push(current.right)
				}
			}
		}
	}
	remove(data){
		this.root = this.removeNode(this.root,data);
	}
	removeNode(node,data){
		if (node === null){
			return null;
		}
		if(data === node.data){
			if(node.left === null && node.right === null){
				return null;
			}
			if(node.left === null){
				return node.right;
			}
			if(node.right === null){
				return node.left;
			}
			var tempNode = this.getSmallest(node.right);
			node.data = tempNode.data;
			node.right = this.removeNode(node.right,tempNode.data);
		}else if (data < node.data){
			node.left = this.removeNode(node.left,data);
		}else{
			node.right = this.removeNode(node.right,data);	
		}
		return node;
	}
	getSmallest(node){
		if(node === null){
			return null;
		}
		var current = node;
		while(current.left !== null){
			current = current.left;
		}
		return current;
	}
	getMin(){
		if(this.root === null){
			return null;
		}
		var current = this.root;

		while(current.left !== null){
			current = current.left;
		}
		return current.data;
	}
	getMax(){
		if(this.root === null){
			return null;
		}
		var current = this.root;
		while(current.right !== null){
			current = current.right;
		}
		return current.data;
	}
	find(data){
		var current = this.root;
		while(current !== null){
			if(data === current.data){
				return current;
			}else if(data < current.data){
				current = current.left;
			}else{
				current = current.right;
			}
		}
		return null;
	}
	update(data){
		var found = this.find(data);
		if(found !== null){
			found.count ++;
		}
		return found;
	}
	getNodesLength(node){
		if(node !== null){
			this.getNodesLength(node.left);
			this.numbers++;
			this.getNodesLength(node.right);
		}
	}
	nodeNumbers(){
		this.getNodesLength(this.root);
		return this.numbers;
	}
}

var bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

console.log('Inorder traversal');
bst.inOrder(bst.root);

console.log('Preorder traversal');
bst.preOrder(bst.root);

console.log('Levelorder traversal');
bst.levelOrder(bst.root);

console.log('Get smallest data');
var min = bst.getMin();
console.log(min);

console.log('Get biggest data');
var max = bst.getMax();
console.log(max);

console.log('Find data node');
var foundNode = bst.find(99);
console.log(foundNode);

console.log('Update count');
var update = bst.update(23);
console.log(update.count);
bst.remove(45);
bst.levelOrder(bst.root);

console.log('Get numbers of node');
console.log(bst.nodeNumbers());



