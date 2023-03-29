var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "123",
        "ko": "877"
    },
    "minResponseTime": {
        "total": "5456",
        "ok": "15506",
        "ko": "5456"
    },
    "maxResponseTime": {
        "total": "57701",
        "ok": "57701",
        "ko": "16981"
    },
    "meanResponseTime": {
        "total": "18465",
        "ok": "39044",
        "ko": "15579"
    },
    "standardDeviation": {
        "total": "8627",
        "ok": "10886",
        "ko": "717"
    },
    "percentiles1": {
        "total": "15772",
        "ok": "41249",
        "ko": "15738"
    },
    "percentiles2": {
        "total": "16056",
        "ok": "46777",
        "ko": "15946"
    },
    "percentiles3": {
        "total": "43363",
        "ok": "53833",
        "ko": "16170"
    },
    "percentiles4": {
        "total": "53481",
        "ok": "55980",
        "ko": "16734"
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
    "count": 123,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 877,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.241",
        "ok": "2.121",
        "ko": "15.121"
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
        "ok": "123",
        "ko": "877"
    },
    "minResponseTime": {
        "total": "5456",
        "ok": "15506",
        "ko": "5456"
    },
    "maxResponseTime": {
        "total": "57701",
        "ok": "57701",
        "ko": "16981"
    },
    "meanResponseTime": {
        "total": "18465",
        "ok": "39044",
        "ko": "15579"
    },
    "standardDeviation": {
        "total": "8627",
        "ok": "10886",
        "ko": "717"
    },
    "percentiles1": {
        "total": "15772",
        "ok": "41249",
        "ko": "15738"
    },
    "percentiles2": {
        "total": "16056",
        "ok": "46777",
        "ko": "15946"
    },
    "percentiles3": {
        "total": "43363",
        "ok": "53833",
        "ko": "16170"
    },
    "percentiles4": {
        "total": "53481",
        "ok": "55980",
        "ko": "16734"
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
    "count": 123,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 877,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "17.241",
        "ok": "2.121",
        "ko": "15.121"
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
