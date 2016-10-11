// JavaScript Document
function clean(obj)
	{  
		var id= obj.name;
   		document.getElementById(id).value="";
		document.getElementById(id).style.color="#000";
	}
	
function checkText(obj)
	{
	   //获取输入框的id值
	   var id= obj.name;
	   var str=document.getElementById(id).value;
	   var objExp=/^[a-zA-Z0-9_]{3,10}$/;
	   //判断是否为空
		if(str==""){
		  	 alert("用户名不能为空");
	    } else if(objExp.test(str)==false){
		  	 alert("用户名不合法（字母，数字与下划线组合3到10个）");
	    } 
	}
function checkPassword(obj){
		var id= obj.name;
	    var str=document.getElementById(id).type="password";
	
	}
function checkPassword2()
	{
		 var id=document.getElementById("password");
		 var id2=document.getElementById("password2");
		 var password = id.value;    
		 var password2 = id2.value;
		 if(password!=password2)
		 {
			alert("密码不一致");
			return false;
		 }
		 return true;    
	}