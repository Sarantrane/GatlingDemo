var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2923",
        "ok": "2923",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6767",
        "ok": "6767",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4821",
        "ok": "4821",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1486",
        "ok": "1486",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5997",
        "ok": "5997",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6040",
        "ok": "6040",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6738",
        "ok": "6738",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6742",
        "ok": "6742",
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
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "14.286",
        "ko": "-"
    }
},
contents: {
"req_get-userdetails-5fc47": {
        type: "REQUEST",
        name: "get Userdetails Request",
path: "get Userdetails Request",
pathFormatted: "req_get-userdetails-5fc47",
stats: {
    "name": "get Userdetails Request",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2923",
        "ok": "2923",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6767",
        "ok": "6767",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4821",
        "ok": "4821",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1486",
        "ok": "1486",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5997",
        "ok": "5997",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6040",
        "ok": "6040",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6738",
        "ok": "6738",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6742",
        "ok": "6742",
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
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "14.286",
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
