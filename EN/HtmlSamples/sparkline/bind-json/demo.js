$(function () {
$.ig.loader({
            scriptPath: "http://staging.igniteui.local/13-1/IgniteUI/js/",
            cssPath: "http://staging.igniteui.local/13-1/IgniteUI/css/",
            resources: "igSparkline"
        });

        $.ig.loader(function () {

            $("#sparkline").igSparkline({
                dataSource: northwindInvoices,
                height: "100px",
                width: "300px",
                valueMemberPath: 'ExtendedPrice',
                labelMemberPath: 'OrderDate'
            });

        });
});