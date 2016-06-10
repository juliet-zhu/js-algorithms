'use strict';
class Node{
	constructor(data,left,right){
		this.data= data;
		this.left = left;
		this.right = right;
	}
	show(){
		console.log(this.data);
	}
}

class BST{
	constructor(){
		this.root = null;
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
	remove(){}
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






