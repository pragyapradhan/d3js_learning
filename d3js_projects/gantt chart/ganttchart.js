var tasks = [
{"startDate":new Date("Jan 02 2018"),"endDate":new Date("Feb 09 2018"),"taskName":"Gift Registry / QA","status":"SUCCEEDED"},
{"startDate":new Date("Feb 10 2018"),"endDate":new Date("March 09 2018"),"taskName":"Requirement  Elicitation","status":"FAILED"},
{"startDate":new Date("March 10 2018"),"endDate":new Date("Apr 09 2018"),"taskName":"Migration","status":"RUNNING"},
{"startDate":new Date("Apr 10 2018"),"endDate":new Date("May 09 2018"),"taskName":"Image Patch up","status":"KILLED"}
];

var taskStatus = {
    "SUCCEEDED" : "bar",
    "FAILED" : "bar-failed",
    "RUNNING" : "bar-running",
    "KILLED" : "bar-killed"
};

var taskNames = [ "Requirement  Elicitation", "Migration", "Image Patch up", "Adjustment of Display Mode", "Gift Registry / QA", "Delta Push /QA","Last Delta Push/Disable Catgories mentioned in Scope", "Post GO LIVE Support" ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

// var format = "%H:%M";
var format = "%D %MMM";
var timeDomainString = "1day";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format).height(450).width(800);


// gantt.timeDomainMode("fixed");
// changeTimeDomain(timeDomainString);

gantt(tasks);

function changeTimeDomain(timeDomainString) {
    this.timeDomainString = timeDomainString;
    switch (timeDomainString) {
    case "1 week":
	format = "%Y:%M:%D";
	gantt.timeDomain([ d3.time.day.offset(getEndDate(), -1), getEndDate() ]);
	break;
    case "1 month":
	format = "%Y:%M:%D";
	gantt.timeDomain([ d3.time.day.offset(getEndDate(), -3), getEndDate() ]);
	break;

    case "6hr":
	format = "%H:%M";
	gantt.timeDomain([ d3.time.day.offset(getEndDate(), -6), getEndDate() ]);
	break;

    case "6 month ":
	format = "%Y:%M:%D";
	gantt.timeDomain([ d3.time.day.offset(getEndDate(), -1), getEndDate() ]);
	break;

    case "1 Year":
	format = "%Y:%M:%D";
	gantt.timeDomain([ d3.time.day.offset(getEndDate(), -7), getEndDate() ]);
	break;
    default:
	format = "%M:%D"

    }
    gantt.tickFormat(format);
    gantt.redraw(tasks);
}

function getEndDate() {
    var lastEndDate = Date.now();
    if (tasks.length > 0) {
	lastEndDate = tasks[tasks.length - 1].endDate;
    }

    return lastEndDate;
}

function addTask() {
    console.log('add task');
    var lastEndDate = getEndDate();
    var taskStatusKeys = Object.keys(taskStatus);
    var taskStatusName = taskStatusKeys[Math.floor(Math.random() * taskStatusKeys.length)];
    var taskName = taskNames[Math.floor(Math.random() * taskNames.length)];

    tasks.push({
	"startDate" : d3.time.day.offset(lastEndDate, Math.ceil(1 * Math.random())),
	"endDate" : d3.time.day.offset(lastEndDate, (Math.ceil(Math.random() * 3)) + 1),
	"taskName" : taskName,
	"status" : taskStatusName
    });

    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
};

function removeTask() {
    tasks.pop();
    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
};