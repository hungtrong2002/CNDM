$(document).ready(function(){
    var totalQuantity = 0;

    $('.check-btn').change(function(){
        var isChecked = $(this).is(':checked');
        var parent = $(this).closest('.form-group');
        var productName = parent.find('.product-name').text();
        var price = parseFloat(parent.find('.product-price').text());
        var count = parseInt(parent.find('.count').text());
        var productTotal = price * count;

        if (isChecked) {
            totalQuantity += productTotal;
            // Thêm sản phẩm vào phần chi tiết đơn hàng
            var orderItem = '<div class="order-col">';
            orderItem += '<div>' + productName + '</div>';
            orderItem += '<div>$' + productTotal.toFixed(2) + '</div>';
            orderItem += '</div>';
            $('.order-products').append(orderItem);
        } else {
            totalQuantity -= productTotal;
            // Xóa sản phẩm khỏi phần chi tiết đơn hàng nếu cần
            $('.order-products').find('div:contains(' + productName + ')').remove();
        }

        $('.order-total').text('$' + totalQuantity.toFixed(2));
    });

    $('.increment').click(function(){
        var countElement = $(this).siblings('.count');
        var count = parseInt(countElement.text());
        count++;
        countElement.text(count);
    });

    $('.decrement').click(function(){
        var countElement = $(this).siblings('.count');
        var count = parseInt(countElement.text());
        if (count > 1) {
            count--;
            countElement.text(count);
        }
    });
});