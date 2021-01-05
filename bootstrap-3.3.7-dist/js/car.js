$(function () {
    function totalAll() {
        //  console.log($('.select').prop('checked'));

        $('.select').each(function (i, e) {
            console.log($(e).prop('checked'));
            if ($(e).prop('checked') == true) {

                var totalPrice = 0;
                $.each($('.sum'), function (i, e) {

                    // console.log($(e).text().substr(1));
                    totalPrice = totalPrice + parseFloat($(e).text().substr(1));

                });
                $('.totalPrice').text(totalPrice);
                var totalNumber = 0;
                $.each($(".number"), function (i, e) {
                    //console.log($(e).val());
                    totalNumber = totalNumber + parseInt($(e).val());

                });
                $('.totalnum').text(totalNumber);
                console.log(totalNumber);

            }


        });


    }

    $('.select_all').click(function () {
        //$(this).prop('checked') 返回全选框的状态 true or false

        $('.select').prop('checked', $(this).prop('checked'));
        $('.select_all').prop('checked', $(this).prop('checked'));
        totalAll()
    });


    $('.select').click(function () {
        console.log($('.select'));//$选择出来是一个伪数组的对象  包含了很多属性
        if ($('.select:checked').length == $('.select').length) {
            $('.select_all').prop('checked', true)
        }
        else {
            $('.select_all').prop('checked', false)
        }
        totalAll()
    });
    var num;

    $('.increse').click(function () {



        num = $(this).siblings('.number').val();
        //h获取文本框的默认值
        num++;
        $(this).siblings('.number').val(num);//按下后增加文本框的值
        var p = $(this).parents().siblings('.price').text().substr(1);//.parents()寻找所有父亲 （）里可带父亲名字
        var total = (p * num).toFixed(2);//保留2位小数   substr(1)返回字符串从下标1开始后的数据
        //  console.log(total);
        $(this).siblings('.sum').html("￥" + total);
        //console.log('价格是' + $(this).siblings('.sum').text().substr(1));

        totalAll();
        // console.log('价格是' + totalSum);

    });
    $('.decrese').click(function () {


        if (num == 1) {
            return false;
        }
        num = $(this).siblings('.number').val();
        num--;
        $(this).siblings('.number').val(num);
        var p = $(this).parent().parent().siblings('.price').text().substr(1);
        var total = (p * num).toFixed(2);//保留2位小数
        //  console.log(total);
        $(this).siblings('.sum').html("￥" + total);
        totalAll();



    });
    $('.number').change(function () {
        var changeNum = $(this).val();
        var changePrice = changeNum * ($(this).parents('.p-num').siblings('.price').text().substr(1));
        $(this).siblings('.sum').html("￥" + changePrice.toFixed(2));

        totalAll();
    });
    $(".delete").click(function () {

        $(this).parents('li').remove();
        totalAll();

    });


})

