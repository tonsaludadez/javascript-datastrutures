function Queue(){
	this.length = 0;
	this.queue = [];

	this.enqueue = function(val){
		this.queue.push(val);
		this.length++;
	}

	this.dequeue = function(){
		if(this.length == 0){
			return null;
		}

		else{
			var dequequed = this.queue.shift();
			this.length--;
			return dequequed;
		}
	}

	this.peek = function(){
		return this.queue[0];
	}

	this.items = function(){
		return this.queue;
	}
}