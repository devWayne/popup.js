function popup(template,options) {

	var default_options = {
			overlayCls: 'popup-overlay',
			closable: true,
			zIndex: 999,
			size: {
				x: 'auto',
				y: 'auto'
			},
		},
		overlayExist = false,
		opts = $.extend(opts, default_options, options);

	this.overlay = $('<div/>', {
			'class': overlayCls
		});
	this.overlayExist=false;

	var WinLoacal = {

		returnWinHeight: function() {
			//reference: http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
			return window.innerHeight || document.documentElement.clientHeight;
		},
		returnWinWidth: function() {
			return window.innerWidth || document.documentElement.clientWidth;
		},
		reposeOverlay: function() {
			overlay.css('top', (document.documentElement.scrollTop + document.body.scrollTop));
		},
		resizeOverlay: function() {
			overlay.css('height', returnWinHeight());
		}

	}

	var create = function(tmpl) {
		var win = $('<div>',{'class','popup'}),
			close=$('<div/>',{'class','close'});
		close.appendTo(win);
		tmpl && tmpl.appendTo(win);
		win.css({
			'z-index': opts.zIndex,
			'width': opts.width,
			'height': opts.height
		})
		return win;
	}

	create(template);
	overlay.attr("style", "top: 0px; left: 0px; width: 100%; background-color: #000; z-index: 99; zoom: 1; opacity: 0.2;filter: alpha(opacity=20);position: fixed; _position:absolute;");

}


popup.prototype.open = function() {
	this.overlayExist?this.overlay.hide():this.overlay.show();
}

popup.prototype.close = function() {
	this.overlayExist?this.overlay.hide():this.overlay.show();
}