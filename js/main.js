var app = new Vue({
	el:'.wrapper',
	data:{
		letters:'',
		all:[],
		convert:[]
	},
	methods:{
		order: function () { // reorder numbers or letters
		  this.all = this.letters.split('').sort().join('')
	    },
	    key: function(){ // save data to array 
	    	this.all = this.letters.split("")	    	
	    }
	}
})