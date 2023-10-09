import {Devvit} from "@devvit/public-api";
import {checkVotesJob} from "./handlers/jobs.js";
import {HELP_TEXT, LABELS, DEFAULTS, OPTIONS} from "./constants.js";
import {onAppChanged, onCommentCreate} from "./handlers/triggers.js";
import {validateCustomDateformat, validateCustomLocale, validateCustomTimezone, validateFinite, validateInteger, validateMultiple, validateNegative, validateNumber} from "devvit-helpers";

// Enable any Devvit features you might need.
Devvit.configure({
    redditAPI: true,
    kvStore: true,
});

// Set up the configuration field presented to the user for each installation (subreddit) of the app.
Devvit.addSettings([
    {
        type: "group",
        label: LABELS.VOTE_GROUP,
        helpText: HELP_TEXT.VOTE_GROUP,
        fields: [
            {
                type: "paragraph",
                name: "voteComment",
                defaultValue: DEFAULTS.VOTE_COMMENT,
                label: LABELS.VOTE_COMMENT,
                helpText: HELP_TEXT.VOTE_COMMENT,
            },
            {
                type: "number",
                name: "voteThreshold",
                defaultValue: DEFAULTS.VOTE_THRESHOLD,
                label: LABELS.VOTE_THRESHOLD,
                helpText: HELP_TEXT.VOTE_THRESHOLD,
                onValidate: async (event, context) => validateMultiple([validateNumber, validateFinite, validateInteger, validateNegative], event, context),
            },
            {
                type: "select",
                name: "thresholdActions",
                label: LABELS.VOTE_ACTIONS,
                helpText: HELP_TEXT.VOTE_ACTIONS,
                defaultValue: DEFAULTS.VOTE_ACTIONS,
                options: OPTIONS.VOTE_ACTIONS,
                multiSelect: true,
            },
            {
                type: "select",
                name: "voteMode",
                defaultValue: DEFAULTS.VOTE_MODE,
                label: LABELS.VOTE_MODE,
                helpText: HELP_TEXT.VOTE_MODE,
                options: OPTIONS.VOTE_MODE,
            },
            {
                type: "group",
                label: LABELS.VOTE_REPLY_GROUP,
                helpText: HELP_TEXT.VOTE_REPLY_GROUP,
                fields: [
                    {
                        type: "select",
                        name: "voteReplyOptions",
                        defaultValue: DEFAULTS.VOTE_REPLY_OPTIONS,
                        label: LABELS.VOTE_REPLY_OPTIONS,
                        helpText: HELP_TEXT.VOTE_REPLY_OPTIONS,
                        options: OPTIONS.VOTE_REPLY_OPTIONS,
                    },
                    {
                        type: "string",
                        name: "voteReplyUpvote",
                        defaultValue: DEFAULTS.VOTE_REPLY_UPVOTE,
                        label: LABELS.VOTE_REPLY_UPVOTE,
                        helpText: HELP_TEXT.VOTE_REPLY_UPVOTE,
                    },
                    {
                        type: "string",
                        name: "voteReplyDownvote",
                        defaultValue: DEFAULTS.VOTE_REPLY_DOWNVOTE,
                        label: LABELS.VOTE_REPLY_DOWNVOTE,
                        helpText: HELP_TEXT.VOTE_REPLY_DOWNVOTE,
                    },
                ],
            },
        ],
    },
    {
        type: "group",
        label: LABELS.ACTION_GROUP,
        helpText: HELP_TEXT.ACTION_GROUP,
        fields: [
            {
                type: "string",
                name: "removalReasonId",
                label: LABELS.ACTION_REASON_ID,
                helpText: HELP_TEXT.ACTION_REASON_ID,
            },
            {
                type: "paragraph",
                name: "removalComment",
                defaultValue: DEFAULTS.ACTION_COMMENT,
                label: LABELS.ACTION_COMMENT,
                helpText: HELP_TEXT.ACTION_COMMENT,
            },
            {
                type: "string",
                name: "reportReason",
                label: LABELS.ACTION_REPORT,
                helpText: HELP_TEXT.ACTION_REPORT,
                defaultValue: DEFAULTS.ACTION_REPORT,
            },
            {
                type: "group",
                label: LABELS.ACTION_POST_FLAIR_GROUP,
                helpText: HELP_TEXT.ACTION_POST_FLAIR_GROUP,
                fields: [
                    {
                        type: "string",
                        name: "postFlairText",
                        label: LABELS.ACTION_POST_FLAIR_TEXT,
                        helpText: HELP_TEXT.ACTION_POST_FLAIR_TEXT,
                    },
                    {
                        type: "string",
                        name: "postFlairCss",
                        label: LABELS.ACTION_POST_FLAIR_CSS,
                    },
                    {
                        type: "string",
                        name: "postFlairId",
                        label: LABELS.ACTION_POST_FLAIR_ID,
                    },
                ],
            },
            {
                type: "group",
                label: LABELS.ACTION_AUTHOR_FLAIR_GROUP,
                helpText: HELP_TEXT.ACTION_AUTHOR_FLAIR_GROUP,
                fields: [
                    {
                        type: "string",
                        name: "authorFlairText",
                        label: LABELS.ACTION_AUTHOR_FLAIR_TEXT,
                        helpText: HELP_TEXT.ACTION_AUTHOR_FLAIR_TEXT,
                    },
                    {
                        type: "string",
                        name: "authorFlairCss",
                        label: LABELS.ACTION_AUTHOR_FLAIR_CSS,
                    },
                    {
                        type: "string",
                        name: "authorFlairId",
                        label: LABELS.ACTION_AUTHOR_FLAIR_ID,
                    },
                ],
            },
        ],
    },
    {
        type: "group",
        label: LABELS.CUSTOM_DATE_GROUP,
        helpText: HELP_TEXT.CUSTOM_DATE_GROUP,
        fields: [
            {
                type: "string",
                name: "customTimeformat",
                defaultValue: DEFAULTS.CUSTOM_DATE_TEMPLATE,
                label: LABELS.CUSTOM_DATE_TEMPLATE,
                helpText: HELP_TEXT.CUSTOM_DATE_TEMPLATE,
                onValidate: validateCustomDateformat,
            },
            {
                type: "string",
                name: "customTimezone",
                defaultValue: DEFAULTS.CUSTOM_TIMEZONE,
                label: LABELS.CUSTOM_TIMEZONE,
                helpText: HELP_TEXT.CUSTOM_TIMEZONE,
                onValidate: validateCustomTimezone,
            },
            {
                type: "string",
                name: "customLocale",
                defaultValue: DEFAULTS.CUSTOM_LOCALE,
                label: LABELS.CUSTOM_LOCALE,
                helpText: HELP_TEXT.CUSTOM_LOCALE,
                onValidate: validateCustomLocale,
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
