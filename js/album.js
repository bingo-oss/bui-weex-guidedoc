/**
 * @author liyueqing
 */
(function($){
	var CLS_SELECTED = "album-carousel-thumb-selected", 
	    CLS_HIDE = "hide", 
		PX = "px";
	
	jQuery.Album = function(config){
		this.setting = {
			// 大图片显示区域
			root: $("#album-image-md"),
			// 大图片
			image: $("#album-image"),
			// 大图片的标题
			title: $("#album-image-ft"),
			btnDownload: $("#album-download"),
			// 大图片区域的导航块
			navBlock: $("#album-image-nav"),
			// 查看上一张图片按钮
			btnPrev: $("#album-image-btn-prev"),
			// 查看下一张图片按钮
			btnNext: $("#album-image-btn-next"),
			// 大图片显示区域的左侧
			prevBlock:  $("#album-image-nav-left-block"),
			// 大图片显示区域的右侧
			nextBlock:  $("#album-image-nav-right-block"),
			// 大图片切换时的loading图片
			overlay: $("#album-image-loading-overlay"),
			// 图片缩略图 Carousel 对象
			Carousel: new jQuery.Carousel({
				root: '#album-carousel',
				carousel: '#album-carousel-list',
				pages: {
					prev: '#album-carousel-btn-prev',
					next: '#album-carousel-btn-next'
				},
				direction: 'H'
			}),
			// 当前显示图片在缩略图的中索引值
			curIndex: 0,
			// 大图片显示区域的最大宽度
			maxWidth: 1000,
			// 大图片显示区域的最高宽度
			maxHeight: 1200
		};
		
		// 合并用户配置项和默认配置项
		$.extend(this.setting, config);

		// 上一个选中的缩略图
		this.selectedItem = null;
		// 当前选中的缩略图
		this.currentItem = null;
		// 图片是否正在加载切换
		this.isloading = false;
		
		// 初始化对象方法
		this.init();
		
		return this;
	};
	
	jQuery.Album.prototype = {
		/**
		 * 初始化方法
		 * @method init
		 */
		init: function(){
			// 选中缩略图
			// 改变图片
			// 绑定相册程序各个DOM节点的事件处理函数
			this.select().change().bindEvent();
			
			return this;
		},
		/**
		 * 更新大图片和图片说明
		 * @method change
		 */
		change: function(){
			var Album = this,
			currentItem = Album.currentItem, 
			image = Album.getImage(),
			title = Album.getTitle(),
			overlay = Album.getOverlay(), 
			btnDownload = Album.getBtnDownload(),
			src = currentItem.find("a:first").attr("href"), 
			alt = currentItem.find("img:first").attr("alt"), 
			percent = 0, 
			preloader = new Image();
			
			// 开始显示loading
			overlay.removeClass(CLS_HIDE);
			this.isloading = true;
			
			// 必须使用 preloader 来实现图片的load事件
			// preloader = new Image() 创建一个新的Image对象
			// 给 preloader 设置加载图片的路径
			preloader.src = src;			
			// 之后就可以开始使用load事件，获得新的图片的实际尺寸
			// img标签是一个替换元素，我们不能在一开始就获得图片的实际大小
			// 必须是图片下载(load)完成后，才能获得实际大小
			$(preloader).load(function(evt){
				var width = preloader.width, 
				    height = preloader.height,
					maxWidth = Album.getMaxWidth(),
					maxHeight = Album.getMaxHeight();
				
				// 获得图片的宽/高的比率
				percent = width / height;
				
				// 根据图片实际大小，等比缩放图片
				// 图片的宽度大于 maxWidth
				if (width > maxWidth) {
					// 图片按照最大宽度显示（缩放）
					// 图片的高度在maxHeight以内
					width = maxWidth;
					height = width / percent;
					
					// 按最大宽度缩放后，图片的高度仍超过maxHeight
					// 这是要图片应该是一个纵向高度比较长的图片
					if (height > maxHeight) {
						// 这里要将之前的最大宽度再按图片的长宽比来缩小
						// 这时的图片是高度等于maxHeight的
						// 而宽度是小于maxWidth的缩略图
						percent = maxHeight / height;
						width = width * percent;
						height = maxHeight;
					}
				}
				else {
					// 图片的原始宽度小于等于maxWidth
					if (width <= maxWidth) {
						// 高度超过maxHeight，再等比调整图片高度
						if (height > maxHeight) {
						    percent = maxHeight / height;
							width = width * percent;
							height = maxHeight;
						}
					}
				}
				
				// 图片缩放和调整显示位置
				image.animate({
					"width": width + PX,
					"height": height + PX,
					"margin-left": -(width / 2) + PX,
					"margin-top": -(height / 2) + PX
				}, 500, function(){
					// 更新图片路径和图片alt属性
					image.attr({
						"src": src,
						"alt": alt
					});
					// 更新图片说明文字
					title.html(alt);
					// 更新下载图片的链接路径
					btnDownload.attr("href", src);
					
					// 隐藏loading图片的遮罩层
					overlay.addClass(CLS_HIDE);
					Album.isloading = false;
				});
			});
			
			return this;
		},
		/**
		 * 选中缩略图
		 * @method select
		 */
		select: function(){
			var selectedItem = this.selectedItem,
			    currentItem = null,
				items = this.getItems(),
				curIndex = this.getCurrentIndex();
			
			// 如果有上次选中的图片，则去掉它的选中样式
			if (selectedItem) {
				selectedItem.removeClass(CLS_SELECTED);
			}
			// 给当前选中缩略图添加选中样式
			currentItem = this.currentItem = $(items[curIndex]);
			currentItem.addClass(CLS_SELECTED);
			
			// 现在选中的图片就是上次选中的图片了
			this.selectedItem = currentItem;
			
			return this;
		},
		/**
		 * 显示上一张图片
		 * @method prev
		 */
		prev: function(){
			// 当前缩略图的索引值减1
			this.setCurrentIndex(this.getCurrentIndex() - 1);
			
			// 移动到第一张以后
			if (this.getCurrentIndex() < 0) {
				// 循环到最后一张图片，并且滚动缩略图
				this.setCurrentIndex(this.getLength() - 1).prevGroup();
			}
			else {
				// 不是第一张图片
				if (this.getCurrentIndex() > 0) {
					// 移动到缩略图当前显示区域索引值最小的一张图片之前，这时候需要移动缩略图区域到上一组图片
					if (this.getCurrentIndex() < this.getCurrentPage() * this.getItemsPrePage()) {
						this.prevGroup();
					}
				}
			}
			
			this.select().change();
			
			return this;
		},
		/**
		 * 显示下一张图片
		 * @method next
		 */
		next: function(){
			// 当前缩略图的索引值+1
			this.setCurrentIndex(this.getCurrentIndex() + 1);
			
			// 移动到最后一张以后
			if (this.getCurrentIndex() > this.getLength() - 1) {
				// 循环显示第一张图片，并且滚动缩略图
				this.setCurrentIndex(0).nextGroup();
			}
			else {
				// 不是最后一张图片
				if (this.getCurrentPage() < this.getMaxPages()) {
					// 移动到缩略图当前显示区域索引值最大的一张图片之后，这时候需要移动缩略图区域到下一组图片
					if (this.getCurrentIndex() > ((this.getCurrentPage() + 1) * this.getItemsPrePage()) - 1) {
						this.nextGroup();
					}
				}
			}
			
			this.select().change();
			
			return this;
		},
		prevGroup: function(){
			var Carousel = this.getCarousel();
			
			Carousel.prev();
			
			return this;
		},
		nextGroup: function(){
			var Carousel = this.getCarousel();
			
			Carousel.next();
			
			return this;
			
		},
		/**
		 * 给相册的各个DOM节点绑定事件处理函数
		 */
		bindEvent: function(){
			var Album = this, 
			    root = Album.getRoot(), 
				navBlock = Album.getNavBlock(),
				prevBlock = Album.getPrevBlock(),
				nextBlock = Album.getNextBlock(),
				btnPrev = Album.getBtnPrev(),
				btnNext = Album.getBtnNext(),
				items = Album.getItems();
			
			// 鼠标放到大图图片区域显示上下翻页按钮 
			root.hover(function(){
				navBlock.removeClass(CLS_HIDE);
			}, function(){
				navBlock.addClass(CLS_HIDE);
			});
			
			// 鼠标点击图片左边区域，查看上一张图片
			prevBlock.click(function(evt){
				Album.prev();
				
				evt.preventDefault();
				evt.stopPropagation();
			});
			
			// 鼠标点击图片右边区域，查看下一张图片
			nextBlock.click(function(evt){
				Album.next();
				
				evt.preventDefault();
				evt.stopPropagation();
			});
			
			// 鼠标点击上一张按钮，查看上一张图片
			btnPrev.click(function(evt){
				Album.prev();
				
				evt.preventDefault();
				evt.stopPropagation();
			});
			
			// 鼠标点击下一张按钮，查看下一张图片
			btnNext.click(function(evt){
				Album.next();
				
				evt.preventDefault();
				evt.stopPropagation();
			});
			
			// 鼠标点击每张缩略图，查看选中图片
			// TODO: 是否需要使用delegate来优化一下
			items.each(function(i, item){
				$(item).click(function(evt){
					if (!$(this).hasClass(CLS_SELECTED) && !Album.isLoading) {
						Album.setCurrentIndex(i).select().change();
					}
					evt.preventDefault();
					evt.stopPropagation();
				});
			});
			
			return this;
		},
		getRoot: function(){
			return $(this.setting.root);
		},
		getImage: function(){
			return $(this.setting.image);
		},
		getTitle: function(){
			return $(this.setting.title);
		},
		getBtnDownload: function(){
			return $(this.setting.btnDownload);
		},
		getNavBlock: function(){
			return $(this.setting.navBlock);
		},
		getPrevBlock: function(){
			return $(this.setting.prevBlock);
		},
		getNextBlock: function(){
			return $(this.setting.nextBlock);
		},
		getBtnPrev: function(){
			return $(this.setting.btnPrev);
		},
		getBtnNext: function(){
			return $(this.setting.btnNext);
		},
		getOverlay: function(){
			return $(this.setting.overlay);
		},
		getCarousel: function(){
			return this.setting.Carousel;
		},
		getCurrentPage: function(){
			var Carousel = this.getCarousel();
			 
			return Carousel.setting.curPage;
		},
		setCurrentPage: function(page){
			var Carousel = this.getCarousel();
			
			Carousel.setting.curPage = page;
			
			return this;
		},
		getMaxPages: function(){
			var Carousel = this.getCarousel();
			
			return Carousel.setting.maxPages;
		},
		getItemsPrePage: function(){
			var Carousel = this.getCarousel();
			
			return Carousel.setting.itemsPrePage;
		},
		/**
		 * 获得相册的所有缩略图
		 */
		getItems: function(){
			return this.getSamples();
		},
		/**
		 * getItems 的别名
		 */
		getSamples: function(){
			var Carousel = this.getCarousel();
			
			return Carousel.setting.items;
		},
		getLength: function(){
			return this.getItems().length;
		},
		getCurrentIndex: function(){
			return this.setting.curIndex;
		},
		/**
		 * 设置显示图片在缩略图中的索引值
		 * @method setCurrentIndex
		 * @param {Object} i - 索引值
		 */
		setCurrentIndex: function(i){
			this.setting.curIndex = i;
			
			return this;
		},
		getMaxWidth: function(){
			return this.setting.maxWidth;
		},
		getMaxHeight: function(){
			return this.setting.maxHeight;
		}
	};
})(jQuery);	