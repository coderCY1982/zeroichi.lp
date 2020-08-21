/*ハンバーガーメニューを開閉させる命令*/
    $(function() {
        var $header = $('#header');
        $('.nav-btn').click(function(){
            $header.toggleClass('open');
        });
    });
