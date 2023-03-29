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
        "total": "3318",
        "ok": "-",
        "ko": "3318"
    },
    "maxResponseTime": {
        "total": "12078",
        "ok": "-",
        "ko": "12078"
    },
    "meanResponseTime": {
        "total": "9366",
        "ok": "-",
        "ko": "9366"
    },
    "standardDeviation": {
        "total": "1548",
        "ok": "-",
        "ko": "1548"
    },
    "percentiles1": {
        "total": "9658",
        "ok": "-",
        "ko": "9658"
    },
    "percentiles2": {
        "total": "10012",
        "ok": "-",
        "ko": "10012"
    },
    "percentiles3": {
        "total": "11367",
        "ok": "-",
        "ko": "11367"
    },
    "percentiles4": {
        "total": "11417",
        "ok": "-",
        "ko": "11417"
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
        "total": "76.923",
        "ok": "-",
        "ko": "76.923"
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
        "total": "3318",
        "ok": "-",
        "ko": "3318"
    },
    "maxResponseTime": {
        "total": "12078",
        "ok": "-",
        "ko": "12078"
    },
    "meanResponseTime": {
        "total": "9366",
        "ok": "-",
        "ko": "9366"
    },
    "standardDeviation": {
        "total": "1548",
        "ok": "-",
        "ko": "1548"
    },
    "percentiles1": {
        "total": "9658",
        "ok": "-",
        "ko": "9658"
    },
    "percentiles2": {
        "total": "10012",
        "ok": "-",
        "ko": "10012"
    },
    "percentiles3": {
        "total": "11367",
        "ok": "-",
        "ko": "11367"
    },
    "percentiles4": {
        "total": "11417",
        "ok": "-",
        "ko": "11417"
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
        "total": "76.923",
        "ok": "-",
        "ko": "76.923"
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
