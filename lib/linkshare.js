var request = require('request')
var csv = require('csv')

Affiliate = function($token) {
	this.token = $token
}

Affiliate.prototype.Report = function($params, cb ) {
    	$params.filters.token = this.token
	request({
		method: 'GET',
		url: "https://ran-reporting.rakutenmarketing.com/en/reports/"+$params.report_type+"/filters",
		qs: $params.filters,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	},function(err,res,body) {
		if (err)
			return cb(err)
                    
		csv.parse( body, function(err, data){
			if (err)
				return cb(err)
			
			if (!data.length)
				return cb({errorMessage: 'empty csv'})
			
			var $indexes = {}
			var $ret = []
			for (var $i in data) {
				if ($i === '0') {
					// skip first row
				} else {
					var $item = {}
					for (var $j in data[$i]) {
						$item[ data[0][$j] ] = data[$i][$j]
					}
					$ret.push($item)
				}
			}
			cb(null,$ret)
		})
	})
}
module.exports =  {
	Affiliate: function($token) {
		return new Affiliate($token)
	}
}

