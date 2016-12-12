myApp
    .controller('loginController',['$scope','$location','$state',function($scope,$location,$state) {
        //获得对象
        var username1 = document.getElementById('username1');
        var password1 = document.getElementById('password1');
        var password11 = document.getElementById('password11');
        var mobile1 = document.getElementById('mobile1');
        var email1 = document.getElementById('email1');
        var number1 = document.getElementById('number1');
        var number11 = document.getElementById('number11');


        //产生随机数
        function suiji() {
            var yzm = '';
            for (var i = 0;i < 4;i++) {
                yzm += parseInt(Math.random() * 10);
            }
            number11.value = yzm;
        }
        suiji();
        setInterval(suiji,10000);

        /*
            注册验证
        */
       $('#btn1').click(function() {
           //验证用户名
           if( username1.value == '' || username1.value.length > 10 ) {
               layer.msg('用户名不能为空，且不能超过10字节');
               return false;
           }

           //验证密码
           var r = /^[a-z]+\d+/;
           if( !r.test(password1.value)  || password1.value.length > 10 || password1.value.length < 5) {
               layer.msg('密码必须由小写字母开头，不少于5位，不大于10位');
               return false;
           }

           //确认密码
           if(password11.value != password1.value) {
               layer.msg('两次密码输入不一致');
               return false;
           }

           //验证手机号
           r = /^1[345678]\d{9}$/;
           if ( !r.test(mobile1.value) ) {
               layer.msg('手机号格式不正确');
               return false;
           }

           //验证邮箱
           r = /^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/;
           if(!r.test(email1.value)) {
               layer.msg('邮箱格式不正确');
               return false;
           }

           //验证验证码
           if(number1.value != number11.value) {
               layer.msg('验证码输入不正确');
               return false;
           }

           //储存用户名密码到localStorage
           localStorage.setItem(username1.value,username1.value + ',' + password1.value);

           layer.msg('注册成功');
           $state.go('landing');





       });
    }])
    .controller('landingController',['$scope','$location',function($scope,$location) {
        //获得对象
        var username2 = document.getElementById('username2');
        var password2 = document.getElementById('password2');
        var number2 = document.getElementById('number2');
        var number22 = document.getElementById('number22');
        var btn2 = document.getElementById('btn2');

       function suijishu() {
           var x = '';
           for(var i = 0;i < 4;i ++) {
               x += parseInt(Math.random() * 10);
           }
           number22.value = x;
       }

        suijishu();

        setInterval(suijishu,10000);

        //验证用户信息
        btn2.onclick = function() {

            //获得localStorage中的用户信息
            var xinxi = localStorage.getItem(username2.value);

            if (xinxi == null) {
                layer.msg('用户名不存在');
                return false;
            }

            var y = xinxi.split(',');


            var a = y[0];//用户名

            var b = y[1];//密码


            //登录验证用户名和密码
            if (username2.value != a) {
                layer.msg('用户名不存在');
                return false;
            }

            if (password2.value != b) {
                layer.msg('密码错误');
                return false;
            }

            if (number2.value != number22.value) {
                layer.msg('验证码错误');
                return false;
            }

            layer.msg('登陆成功！');

            location.href = 'index.html';
        }



    }])
    .controller('commentController',['$scope','$location',function($scope,$location) {


    }])