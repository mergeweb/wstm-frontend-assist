function parseQueryString(url) {
            var urlParams = {};
            url.replace(
                new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                function ($0, $1, $2, $3) {
                    urlParams[$1] = $3;
                }
            );

            return urlParams;
        }

        function buildUrl(params) {
            var urlParams = "";
            var count = 1;
            for (var property in params) {
                if (params.hasOwnProperty(property) && property != 'url') {
                    if (count == 1) {
                        urlParams += "?" + property + "=" + params[property];
                    }
                    else {
                        urlParams += "&" + property + "=" + params[property];
                    }
                    count++;
                }
            }
            return params.url + urlParams;
        }

        $(function () {
            var params = parseQueryString(location.search);
            if (params.url) {
                var url = buildUrl(params);
                $('#apply').attr('href', url);
            }
        });
