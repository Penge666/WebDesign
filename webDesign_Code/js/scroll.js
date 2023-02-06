/**
 * 滚动组件的实现
 * @param {Object} $
 */
(function($){
	/**
	 * 实现滚动方法
	 * @param {Object} options
	 */
	$.fn.beginScroll = function(options){
		//默认配置
		var defaults = {
			speed:40,  //滚动速度,值越大速度越慢
			rowHeight:24 //每行的高度
		};
		//对象赋值
		var opts = $.extend({}, defaults, options),intId = [];
		
		function marquee(obj, step){	
			obj.find("ul").animate({marginTop: '-=1'},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}
	
	/**
	  * 数据表格
	  * @param {Object} options
	  */
	$.fn.initScroll = function(options){
		
			$.each(options,function(index,item){			
				$('.kgo-croll-body').append('<li><a></a></li>')				
				for(var key in item){					
					var span_dom = $('.kgo-scroll-head').find("div[name='"+key+"']").clone();
					span_dom.text(item[key]);
					$('.kgo-croll-body').find('li:last-child>a').append(span_dom);
				}				
			});
		
	}
	/**
	 * 行点击事件
	 * @param {Object} callback
	 */
	$.fn.rowOnclick = function(callback){
		
		$('.kgo-scroll-sty>ul>li').bind('click',function(){
			var scroll_obj = {};
			$(this).find('div').each(function(index,item){
				scroll_obj[$(this).attr('name')]=$(this).text();
			});
			
			callback(scroll_obj);
		});
	}
	/**
	 * 偶数行样式
	 * @param {Object} styleName
	 */
	$.fn.addClassForEven = function(styleName){		
		$('.kgo-scroll-sty>ul>li:even').addClass(styleName);
	}
	/**
	 * 奇数行样式
	 * @param {Object} styleName
	 */
	$.fn.addClassForOdd = function(styleName){		
		$('.kgo-scroll-sty>ul>li:odd').addClass(styleName);
	}
	/**
	 * 访问样式
	 * @param {Object} styleName
	 */
	$.fn.addClassForHover = function(styleName){		
		$('.kgo-scroll-sty>ul>li').hover(function(){
			$('.kgo-scroll-sty>ul>li').each(function(){
				$(this).removeClass(styleName);
			});
			$(this).addClass(styleName);
		});
		$('.kgo-scroll-sty>ul>li').mouseleave(function(){
			$(this).removeClass(styleName);
		});
		
	}


})(jQuery);