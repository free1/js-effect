// 获取元素 
function getByClass(oParent, sClass)
{
	// 找到网页中所有的class并存入数组
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];

	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) 
		{
			aResult.push(aEle[i]);
		}
	}

	return aResult;
}

// 主函数
window.onload = function()
{
	// 获取元素
	var oDiv = document.getElementById('playimages');
	var oBtnPrev = getByClass(oDiv, 'prev')[0];
	var oBtnNext = getByClass(oDiv, 'next')[0];
	var oMarkLeft = getByClass(oDiv, 'mark_left')[0];
	var oMarkRight = getByClass(oDiv, 'mark_right')[0];

	var oDivSmall=getByClass(oDiv, 'small_pic')[0];
	var oUlSmall=oDivSmall.getElementsByTagName('ul')[0];
	var aLiSmall=oDivSmall.getElementsByTagName('li');

	var oUlBig=getByClass(oDiv, 'big_pic')[0];
	var aLiBig=oUlBig.getElementsByTagName('li');

	// 初始化变量
	var nowZIndex = 2;
	var now = 0;

	oUlSmall.style.width = aLiSmall.length * aLiSmall[0].offsetWidth + 'px';

	// 左右按钮
	oBtnPrev.onmouseover = oMarkLeft.onmouseover = function()
	{
		startMove(oBtnPrev, 'opacity', 100);
	};
	oBtnPrev.onmouseout=oMarkLeft.onmouseout = function()
	{
		startMove(oBtnPrev, 'opacity', 0);
	};
	oBtnNext.onmouseover=oMarkRight.onmouseover = function()
	{
		startMove(oBtnNext, 'opacity', 100);
	};
	oBtnNext.onmouseout=oMarkRight.onmouseout = function()
	{
		startMove(oBtnNext, 'opacity', 0);
	};

    // 小图选择
    for(var i = 0; i < aLiSmall.length; i++)
    {
    	aLiSmall[i].index = i;
    	// 鼠标点击小图时
    	aLiSmall[i].onclick = function()
    	{
    		// 如果点击的图片是当前显示的图片
    		if(this.index == now) return;

    		now = this.index;
    		tab();
    	};

    	aLiSmall[i].onmouseover = function()
    	{
    		startMove(this, 'opacity', 100);
    	};
    	aLiSmall[i].onmouseout = function()
    	{
    		if(this.index != now)
    		{
    			startMove(this, 'opacity', 60);
    		}
    	};

    }

    // 图片切换
    function tab()
    {
    	aLiBig[now].style.zIndex = nowZIndex++;

    	// 把小图变成全部透明
    	for(var i = 0; i < aLiSmall.length; i++)
    	{
    		startMove(aLiSmall[i], 'opacity', 60);
    	}

    	// 小图被点击时透明度变成100
    	startMove(aLiSmall[now], 'opacity', 100);

    	aLiBig[now].style.height=0;
    	startMove(aLiBig[now], 'height', 320);

    	// 小图滚动切换
    	if(now == 0)
    	{	
    		// 当图片是第一张时
    		startMove(oUlSmall, 'left', 0);
    	}
    	// 当图片是最后一张时
    	else if(now == aLiSmall.length - 1)
    	{
    		startMove(oUlSmall, 'left', -(now-2)*aLiSmall[0].offsetWidth);
    	}
    	// 当图片是中间一张时
    	else
    	{
    		startMove(oUlSmall, 'left', -(now-1)*aLiSmall[0].offsetWidth);
    	}
    }

    // 点击左右图标进行图片切换
    oBtnPrev.onclick = function()
    {
    	now--;
    	if(now == -1)
    	{
    		now = aLiSmall.length-1;
    	}

    	tab();
    };

	oBtnNext.onclick=function ()
	{
		now++;
		if(now == aLiSmall.length)
		{
			now = 0;
		}

		tab();
	};

	// 设置定时器，使图片自动展示
	var timer = setInterval(oBtnNext.onclick, 2000);

	oDiv.onmouseover = function()
	{
		clearInterval(timer);
	}
	oDiv.onmouseout = function()
	{
		timer = setInterval(oBtnNext.onclick, 2000);
	}
}