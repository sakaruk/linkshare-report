# Linkshare report
Rakuten Linkshare Affiliate Network Reports.

    //Loading the modules
    var $token = "token"
	var RakutenAffiliate = require('./lib/linkshare').Affiliate($token)


    //Getting the report
	RakutenAffiliate.Report({
		report_type : 'individual-item-report',
		filters : {
		    start_date: '2016-07-12', 
		    end_date: '2016-07-13', 
		    include_summary : 'N',
		    tz : 'Europe/London',
		    date_type : 'transaction',
		    network : 1
		}
	}, function(err,data) {
		console.log(err,data)
	})
	
# Filters
Check the filters and report_type values from https://cli.linksynergy.com/cli/publisher/reports/reporting.php and checking the link on the api tag
