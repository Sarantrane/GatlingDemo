var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1688",
        "ok": "1688",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1394",
        "ok": "1394",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "295",
        "ok": "295",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1394",
        "ok": "1394",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1541",
        "ok": "1541",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1659",
        "ok": "1659",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1682",
        "ok": "1682",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
    }
},
contents: {
"req_t00-home-e4c56": {
        type: "REQUEST",
        name: "T00_Home",
path: "T00_Home",
pathFormatted: "req_t00-home-e4c56",
stats: {
    "name": "T00_Home",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1099",
        "ok": "1099",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.167",
        "ok": "0.167",
        "ko": "-"
    }
}
    },"req_t00-home-redire-fd58a": {
        type: "REQUEST",
        name: "T00_Home Redirect 1",
path: "T00_Home Redirect 1",
pathFormatted: "req_t00-home-redire-fd58a",
stats: {
    "name": "T00_Home Redirect 1",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1688",
        "ok": "1688",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1688",
        "ok": "1688",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1688",
        "ok": "1688",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1688",
        "ok": "1688",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1688",
        "ok": "1688",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1688",
        "ok": "1688",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1688",
        "ok": "1688",
        "ko": "-"
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
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.167",
        "ok": "0.167",
        "ko": "-"
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
