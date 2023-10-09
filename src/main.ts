import {Devvit} from "@devvit/public-api";
import {checkVotesJob} from "./handlers/jobs.js";
import {HELP_TEXTS, LABELS} from "./constants.js";
import {onAppChanged, onCommentCreate} from "./handlers/triggers.js";

// Enable any Devvit features you might need.
Devvit.configure({
    redditAPI: true,
    kvStore: true,
});

// Set up the configuration field presented to the user for each installation (subreddit) of the app.
Devvit.addSettings([
    {
        type: "group",
        label: LABELS.GROUP,
        helpText: HELP_TEXTS.GROUP,
        fields: [
            {
                type: "string",
                name: "shortText",
                label: LABELS.SHORT_TEXT,
                helpText: HELP_TEXTS.SHORT_TEXT,
            },
            {
                type: "paragraph",
                name: "longText",
                label: LABELS.LONG_TEXT,
                helpText: HELP_TEXTS.LONG_TEXT,
            },
        ],
    },
]);

Devvit.addSchedulerJob({
    name: "checkVotesJob",
    onRun: checkVotesJob,
});

Devvit.addTrigger({
    events: ["AppInstall", "AppUpgrade"],
    onEvent: onAppChanged,
});

Devvit.addTrigger({
    event: "CommentCreate",
    onEvent: onCommentCreate,
});

export default Devvit;
