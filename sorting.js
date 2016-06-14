'use strict';
class CArray{
	constructor(numElements){
		this.numElements = numElements;
		this.dataStore = [];
		this.pos = 0;
		for(let i = 0; i < numElements; i++){
			this.dataStore[i] = i;
		}
	}
	insert(element){
		this.dataStore[pos++] = element;
	}
	clear(){
		for(let i; i < this.dataStore.length; i++){
			this.dataStore[i] = 0;
		}
	}
	setData(){
		for(let i = 0; i < this.dataStore.length; i++){
			this.dataStore[i] = Math.floor(Math.random()*(this.numElements+1));
		}
	}
	toString(){
		var resStr = '';
		for(let i = 0; i<this.dataStore.length; i++){
			resStr += ' '+this.dataStore[i];
			if(i>0 && i%10 == 0){
				resStr += '\n';
			}
		}
		return resStr;
	}
	swap(arr,index1,index2){
		var temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	}
	bubbleSort(){
		for(let i = 0; i < this.dataStore.length-1; i++){
			let flag = false;
			for(let k = 0; k < this.dataStore.length-i; k++){
				if(this.dataStore[k] > this.dataStore[k+1]){
					this.swap(this.dataStore,k,k+1);
					flag = true;
				}
			}
			if(!flag){
				break;
			}
		}
	}
}
var arr = new CArray(10);
arr.setData();
console.log(arr.dataStore);
console.log(arr.toString());
arr.bubbleSort();
console.log(arr.toString());
