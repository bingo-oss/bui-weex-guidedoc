/**
 * @author liyueqing
 */
jQuery.Carousel = function(config){
	this.setting = {
		root: null,
		related: null,
		relatedlist: null,
		relateditems: null,
		carousel: null,
	    pages: {
			prevBlock: null,
			nextBlock: null,
			prev: null,
			next: null,
			current: null,
			total: null
		},
	    timer: null,
		curPage: 0,
		maxPages: 0,
		speed: 1000,
		item: 'li',
		items: null,
		itemsPrePage: 0,
		itemsPreStep: 0,
		direction: 'V',
		auto: false	,
		isButtonsOut: false
	};
	
	$.extend(this.setting, config);
	
	this.init();
	
	return this;
};

jQuery.Carousel.prototype = {
	init: function(){
		var Carousel = this,
			setting = Carousel.setting,		
		    direction = setting.direction.toUpperCase(),
		    carousel = setting.carousel,
			carouselWidth = 0,
			pages = setting.pages,
			next = pages.next,
			prev = pages.prev,
			related = setting.related,
			relatedlist = setting.relatedlist,
			current = pages.current,
			total = pages.total,			
			maxPages = 0;
			
		this.deleteItems();
		setting.items = $(carousel).find(setting.item);
		if (!setting.itemsPreStep) {
			setting.itemsPrePage = $(carousel).parent().width() / $(setting.items[0]).width();
			maxPages = setting.maxPages = Math.ceil($(setting.items).length / setting.itemsPrePage);
		}
		else{
			if (setting.itemsPreStep > 0) {
				if ($(setting.items).length < setting.itemsPrePage) {
					maxPages = setting.maxPages = 1;
				}
				else{
					maxPages = setting.maxPages = 1 + Math.ceil(($(setting.items).length - setting.itemsPrePage)/setting.itemsPreStep);
				}
			}
		}
		
		if (maxPages < 2) {
			$(next).addClass('hide');
			$(prev).addClass('hide');
		}
		
		if(direction==='H'){
			$(carousel).css('width', ($(setting.items[0]).width() * setting.items.length) + 'px');
		}
		
		if(related && relatedlist){
		    setting.relateditems = $(relatedlist).find('li');
		}
		
		if (current) {
			$(current).html(setting.curPage + 1);
		}
		if (total) {
			$(total).html(maxPages);
		}
		
		this.bind();

		if(setting.auto){
			 setting.timer = setTimeout(function(){
		         Carousel.auto.call(Carousel);
		     },4000); 
		}
		
		return this;
	},
	bind: function(){
		var Carousel = this,
		    setting = this.setting,
			root = $(setting.root),
			related = setting.related,
			relateditems = setting.relateditems,
			pages = setting.pages,
			prevBlock = pages.prevBlock,
			nextBlock = pages.nextBlock,
 		    btnNext = $(root.find(pages.next)[0]),
			btnPrev = $(root.find(pages.prev)[0]),
			clearTimer = function(evt){
				if (setting.timer) {
					clearTimeout(setting.timer);
					setting.timer = null;
				}
			},
            setTimer = function(evt){
                setting.timer = setTimeout(function(){
                    Carousel.auto.call(Carousel);
                }, 4000);
            };

		if (setting.auto) {
			$(root).mouseover(clearTimer);
			$(root).mouseout(setTimer);
			
			if (setting.isButtonsOut) {
				btnNext.mouseover(clearTimer);
				btnNext.mouseout(setTimer);
				
				btnPrev.mouseover(clearTimer);
				btnPrev.mouseout(setTimer);
			}
		}
		
		if (prevBlock && nextBlock) {
			root.mouseover(function(){
				$(btnPrev).removeClass('hide');
				$(btnNext).removeClass('hide');
			});
			root.mouseout(function(){
				$(btnPrev).addClass('hide');
				$(btnNext).addClass('hide');
			});
			
			$(prevBlock).click(function(evt){
				Carousel.prev.call(Carousel);
				
				evt.preventDefault();
				evt.stopPropagation();
			});
			$(nextBlock).click(function(evt){
				Carousel.next.call(Carousel);
				
				evt.preventDefault();
				evt.stopPropagation();
			});
		}
		
		$(btnPrev).click(function(evt){
			Carousel.prev.call(Carousel);
			
			evt.preventDefault();
			evt.stopPropagation();
		});
		
		$(btnNext).click(function(evt){
			Carousel.next.call(Carousel);
			
			evt.preventDefault();
			evt.stopPropagation();
		});
		
		if(related){
			$(relateditems).hover(function(evt){
				$(this).addClass('hover');
			},function(evt){
				$(this).removeClass('hover');
			});
			
			$('#lnk-back-beginning').click(function(evt){
			    setting.curPage = 0;
			
			    Carousel.current.call(Carousel, setting.curPage);
				$(related).addClass('hide');
				
				evt.preventDefault();
				evt.stopPropagation();
			});
		}
		
		return this;	
	},
	next: function(){
		var setting = this.setting,
		    pages = setting.pages,
			related = setting.related,
			current = pages.current,
			total = pages.total,			
			maxPages = setting.maxPages;
		
		setting.curPage += 1;
		if (setting.curPage === maxPages) {
			if (!related) {
				setting.curPage = 0;
			}
		}
		
		if (related) {
			if (setting.curPage === maxPages) {
				$(related).removeClass('hide');
			}
			else {
				this.current(setting.curPage);
			}
		}
		else {
			this.current(setting.curPage);
		}
		
		return this;
	},
	prev: function(){
		var setting = this.setting,
		    pages = setting.pages,	
			current = pages.current,
			total = pages.total,			
			maxPages = setting.maxPages;
			
		setting.curPage -= 1;
		if (setting.curPage < 0) {
			setting.curPage = maxPages - 1;
		}
		this.current(setting.curPage);
		
		return this;
	},
	current: function(index){
		var carousel = this,
			setting = this.setting,
		    pages = setting.pages,
			current = pages.current,
			total = pages.total,
			maxPages = setting.maxPages;			

		if (current) {
			$(current).html(setting.curPage + 1);
		}
		if (total) {
			$(total).html(maxPages);
		}
		
		this.move(setting.curPage);
		
		return this;
	},
	move: function(index){
		var setting = this.setting, 
		    direction = setting.direction, 
			carousel = $(setting.carousel); 
		
		if (direction.toUpperCase() === 'H') {
			property = 'left';
			scrollValue = setting.itemsPreStep ? (setting.itemsPreStep * $(setting.items[0]).width()) * index : (setting.itemsPrePage ? (setting.itemsPrePage * $(setting.items[0]).width()) * index : $(setting.root).width() * index);
			
			carousel.animate({
				'left': '-' + scrollValue + 'px'
			}, setting.speed);
		}
		else {
			if (direction.toUpperCase() === 'V') {
				scrollValue = setting.itemsPreStep ? (setting.itemsPreStep * $(setting.items[0]).height()) * index : $(setting.root).height() * index;
				carousel.animate({
					'top': '-' + scrollValue + 'px'
				}, setting.speed);
			}
		}
		
		return this;
	},
	deleteItems: function(){
		var listPhotos = $(this.setting.carousel).find('img');
		
		if (listPhotos.length === 0) {
			return false;
		}
		listPhotos.each(function(i, img){
			if ($(img).attr('src').indexOf('.jpg') === -1) {
				$(img).parent().remove();
			}
		});

		return this;
	},
	auto: function(){
		var Carousel = this,
			setting = this.setting;

		 if(setting.timer){
		   clearTimeout(setting.timer);
		   setting.timer = null;
		}
         
		 if(setting.maxPages<2){
		    return false;
		 }
		
		setting.curPage += 1;
		if(setting.curPage===setting.maxPages){
	        setting.curPage = 0;
	    }

		this.current(setting.curPage);

        setting.timer = setTimeout(function(){
		    Carousel.auto.call(Carousel);
		},4000);

		return this;
	}
};

jQuery.carousels = function(){
	var carousels = [], i = 0, len = arguments.length;
	
	for (; i < len; i += 1) {
		carousels[i] = new jQuery.Carousel(arguments[i]);
	}
	
	return carousels;
};
