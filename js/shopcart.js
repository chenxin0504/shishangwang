// 创建模块
var myApp = angular.module('myApp',[]);

// 创建控制器
myApp.controller('cartController', ['$scope', function($scope) {

	// 写死数据模型
	$scope.data = [
		{
			id:1000,
			name:'卫衣',
			quantity:4,
			price:110
		},
		{
			id:1001,
			name:'毛衫',
			quantity:2,
			price:132
		},
		{
			id:1002,
			name:'休闲裤',
			quantity:4,
			price:129
		},
		{
			id:1003,
			name:'牛仔裤',
			quantity:5,
			price:99
		},
		{
			id:1004,
			name:'棉服',
			quantity:1,
			price:456
		},
		{
			id:1005,
			name:'毛呢大衣',
			quantity:2,
			price:423
		},
		{
			id:1006,
			name:'运动裤',
			quantity:3,
			price:100
		},
		{
			id:1007,
			name:'袜子',
			quantity:9,
			price:20
		}
	];

	/*
		计算总数量
	*/
	$scope.getQty = function() {

		var totalQty = 0;//总数量

		// angularjs自带的遍历语句
		angular.forEach($scope.data,function(item){
			totalQty += parseInt(item.quantity); //转换为数字累加
		});

		return totalQty;
	}

	/*
		计算总价格
	*/
	$scope.getTotalPrice = function() {

		var totalPrice = 0;

		// angularjs自带的遍历语句
		angular.forEach($scope.data,function(item){
			totalPrice += parseInt(item.quantity) * item.price; //累加数量*单价
		});

		return totalPrice;
	}

	/*
		修改数量
	*/
	$scope.updateQty = function(index,val) {

		// 判断是否小于等于0
		if ( parseInt($scope.data[index].quantity) + val <= 0) {
			if ( confirm('是否删除此商品') ) {
				$scope.data.splice(index,1);				
			}

			return;
		}

		// 判断是否大于10
		if ( parseInt($scope.data[index].quantity) + val > 10) {			
			layer.alert('购买数量不能超过10个!', {
				    skin: 'layui-layer-molv' //样式类名
				    ,closeBtn: 0
			});
			return;
		}

		// 更新数量
		$scope.data[index].quantity = parseInt($scope.data[index].quantity) + val;
	}

	/*
		检测data中数量的变化
	*/
	$scope.$watch('data',function(newVal,oldVal) {

		// 遍历数组进行数据合法性检查
		angular.forEach($scope.data,function(item,index) {			

			// 判断是否为空，非数字，带小数点
			if ( !item.quantity || isNaN(item.quantity) || item.quantity.toString().indexOf('.') != -1) {				
				item.quantity = oldVal[index].quantity; //修改为之前的值
			}

			//判断是否小于等于0或者大于10
			if ( parseInt(item.quantity) <= 0 || parseInt(item.quantity) > 10 ) {
				alert('数量只能是1~10之间');
				item.quantity = oldVal[index].quantity; //修改为之前的值
			}

		});

	},true);

	/*
		移除商品
	*/
	$scope.del = function(index) {

		$scope.data.splice(index,1);
		
	}
	
}]);