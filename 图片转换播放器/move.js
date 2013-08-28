// 解决浏览器兼容问题
function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else 
	{
		return getComputedStyle(obj, false)[name];
	}
}

// 运动框架(适用于常见元素运动)
function startMove(obj, attr, iTarget)
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function()
	{
		var cur = 0;

		// 判断属性是“透明”还是其他变化的情况
		if(attr == 'opacity')
		{
			cur = Math.round(parseFloat(getStyle(obj, attr))*100);
		}
		else
		{
			cur = parseInt(getStyle(obj, attr));
		}

		// 控制div变化速度的变量
		var speed = (iTarget-cur)/6;
		// 判断速度是否大于0，大于向上舍入，否则向下舍入
		speed = speed>0?Math.ceil(speed):Math.floor(speed);

		// 如果变化的数值等于传入的数值就关闭定时器，否则继续变化
		if(cur == iTarget)
		{
			clearInterval(obj.timer);
		}
		else
		{
			// 判断属性是“透明”还是其他变化的情况
			if(attr == 'opacity')
			{
				obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity = (cur+speed)/100;

				document.getElementById('txt1').value = obj.style.opacity;
			}
			else
			{
				obj.style[attr] = cur+speed+'px';
			}
		}

	},30);
}