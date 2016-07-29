/**
 * Created by zb on 2016/7/29.
 */
$(function () {
    //alert($(':radio').size());
    //alert($(':radio[name=sex]').eq(1).val());
    $('form').submit(function () {
        alert('已提交！');
    });
    $('input').change(function () {
        alert('文本改变！');
    });
    $('input').dblclick(function () {
        alert('双击');

    });
});