

	var vue=new Vue({
		el:'#app',
		data:{
			wei:'这是一条wei数据',
			show:true,
			xun:[{
				zhang:'文轩'
			},{
				zhang:'文谦'
			},{
				zhang:'文莹'
			}]
		},
		methods:{
			qian:function(){
				this.wei=this.wei.split('').reverse().join('')
			}
		}
	})	
	vue.show=false

