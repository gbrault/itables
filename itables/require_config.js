if (typeof require !== 'undefined')
    require.config({
        paths: {
            jquery: 'https://code.jquery.com/jquery-3.5.1.min',
            datatables: 'https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min',
        }
    });
var jq = "jquery";
var dt = "datatables";
require([jq], function(jqr){
    require([dt], function(dtr){
        jqr(document).on( 'init.dt', function ( e, settings ) {
                    var api = new jqr.fn.dataTable.Api( settings );
                    console.log( 'New DataTable created:', api.table().node() );
        } );
    });
});
