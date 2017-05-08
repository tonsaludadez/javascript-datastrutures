function LinkedList(){
	this.length = 0;
	this.head = null;

	LinkedList.prototype.add = function(val){
		var node = {
			value: val,
			next: null
		}

		//console.log(node.value);
		if(!this.head){
			this.head = node;
			//console.log(this.head);
		}

		else{
			cur = this.head;
			while(cur.next){
				cur = cur.next;
			}
			cur.next = node;
		}

		this.length++;
	}

	LinkedList.prototype.remove = function(val){
		if(this.head.value == val){
			this.head = this.head.next;
			this.length--;
		}
		else{
			var temp = this.head;
			while(temp){
				if(temp.next != null){
					if(temp.next.value == val){
						temp.next = temp.next.next;
						this.length--;
						break;
					}
					temp = temp.next;
				}
			}	
		}
	}

	LinkedList.prototype.clear = function(){
		this.head = null;
		this.length = 0;
	}

	LinkedList.prototype.contains = function(val){
		var temp = this.head;
		while(temp){
			if(temp.value == val){
				return true;
			}
			temp = temp.next;
		}
		return false;
	}

	LinkedList.prototype.items = function(){
		var list = [];
		var temp = this.head;
		while(temp){
			list.push(temp.value);
			temp = temp.next;
		}

		return list;
	}
}

