$(document).ready(function () {
    $('#calculateBtn').click(function () {
        const startDate = new Date($('#startDate').val());
        const endDate = new Date($('#endDate').val());

        if (startDate > endDate) {
            $('#result').html('<p>End date must be greater than start date.</p>');
        } else {
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

            $('#result').html('<p>Date Interval: ' + daysDiff + ' days</p>');
        }
    });
});
