new Vue({
	el:'#container',
	data:{
		items:[]
	},
	methods:{
		resetList:function(){
			this.items=[]
		},
		addList:function(){
			var text = this.newList.trim();
			if(text){
				this.items.push({ text:text,style:'Done' });
				this.newList=''
			}
		},
		del:function(index){
			this.items.splice(index,1)
		},
		done:function(index){			
			if(this.items[index].style == 'Done'){
				this.items[index].style = 'ToDo'
			}
			else{
				this.items[index].style = 'Done'
			}
		}
	}
});