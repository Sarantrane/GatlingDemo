var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "10633",
        "ok": "-",
        "ko": "10633"
    },
    "maxResponseTime": {
        "total": "14923",
        "ok": "-",
        "ko": "14923"
    },
    "meanResponseTime": {
        "total": "12946",
        "ok": "-",
        "ko": "12946"
    },
    "standardDeviation": {
        "total": "1056",
        "ok": "-",
        "ko": "1056"
    },
    "percentiles1": {
        "total": "13050",
        "ok": "-",
        "ko": "13050"
    },
    "percentiles2": {
        "total": "13798",
        "ok": "-",
        "ko": "13798"
    },
    "percentiles3": {
        "total": "14610",
        "ok": "-",
        "ko": "14610"
    },
    "percentiles4": {
        "total": "14867",
        "ok": "-",
        "ko": "14867"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "-",
        "ko": "58.824"
    }
},
contents: {
"req_get-ed-6f379": {
        type: "REQUEST",
        name: "get Ed",
path: "get Ed",
pathFormatted: "req_get-ed-6f379",
stats: {
    "name": "get Ed",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "10633",
        "ok": "-",
        "ko": "10633"
    },
    "maxResponseTime": {
        "total": "14923",
        "ok": "-",
        "ko": "14923"
    },
    "meanResponseTime": {
        "total": "12946",
        "ok": "-",
        "ko": "12946"
    },
    "standardDeviation": {
        "total": "1056",
        "ok": "-",
        "ko": "1056"
    },
    "percentiles1": {
        "total": "13050",
        "ok": "-",
        "ko": "13050"
    },
    "percentiles2": {
        "total": "13798",
        "ok": "-",
        "ko": "13798"
    },
    "percentiles3": {
        "total": "14610",
        "ok": "-",
        "ko": "14610"
    },
    "percentiles4": {
        "total": "14867",
        "ok": "-",
        "ko": "14867"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "-",
        "ko": "58.824"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
