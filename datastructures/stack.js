function Stack(){
	this.length = 0;
	this.stack = [];

	Stack.prototype.push = function(val){
		this.stack.push(val);
		this.length++;;
	}

	Stack.prototype.pop = function(){
		if(this.length == 0){
			return null;
		}
		else{
			var popped = this.stack.pop();
			this.length--;;
			return popped;
		}
	}

	Stack.prototype.peek = function(val){
		return this.stack[this.length - 1];
	}

	Stack.prototype.items = function(){
		return this.stack;
	}


}