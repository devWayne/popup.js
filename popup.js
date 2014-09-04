function popup() {
	var default_options = {
			winCls: 'mbox-window',
			closeCls: 'mbox-btn-close',
			contCls: 'mbox-content',
			closable: true,
			zIndex: 2300,
			subWin: false,
			size: {
				x: 350,
				y: 'auto'
			},
			onCloseBtnClick: function() {},
			needRepose: true
		},
		overlayExist = false;

	overlay.attr("style", "top: 0px; left: 0px; width: 100%; background-color: #000; z-index: 99; zoom: 1; opacity: 0.2;filter: alpha(opacity=20);position: fixed; _position:absolute;");

    function returnWinHeight() {
        //reference: http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
        return window.innerHeight || document.documentElement.clientHeight;
    }

    function returnWinWidth() {
        return window.innerWidth || document.documentElement.clientWidth;
    }

    function reposeOverlay() {
        overlay.css('top', (document.documentElement.scrollTop + document.body.scrollTop));
    }

    function resizeOverlay() {
        overlay.css('height', returnWinHeight());
    }

    function createDialog(title, cont, btns) {
        var ret = $.create('div');
        var dtitle = title && $.create('div', {
            "class": 'DialogTitle'
        }).html(title).inject(ret);
        var dcont = cont && $.create('div', {
            "class": 'DialogContent'
        }).html(cont).inject(ret);
        var dbtns = btns && $.create('div', {
            "class": 'DialogButtons'
        }).inject(ret);
        /*
        btns = btns && D.makeArray(btns);

        btns && btns.forEach(function (e) {
        createBtn(e).inject(dbtns);
        });*/

        btns && btns.forEach(function (e) {
            e.inject(dbtns);
        });

        return {
            dialog: ret,
            title: dtitle,
            content: dcont,
            btns: dbtns
        };
    }


}