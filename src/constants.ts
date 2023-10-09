// Links
export const LINKS = {
    TIMEFORMAT: "https://date-fns.org/v2.30.0/docs/format",
};

// Field labels
export const LABELS = {
    VOTE_GROUP: "Vote Settings",
    VOTE_COMMENT: "Vote Comment",
    VOTE_THRESHOLD: "Action Threshold",
    VOTE_ACTIONS: "Vote Actions",
    IGNORE_OPTIONS: "Ignore Options",

    VOTE_MODE: "Vote Mode",
    VOTE_REPLY_GROUP: "Vote Reply Settings",
    VOTE_REPLY_OPTIONS: "Reply Parsing Options",
    VOTE_REPLY_UPVOTE: "Upvote Keyword",
    VOTE_REPLY_DOWNVOTE: "Downvote Keyword",

    ACTION_GROUP: "Action Settings",
    ACTION_REASON_ID: "Removal Reason ID",
    ACTION_COMMENT: "Comment",
    ACTION_REPORT: "Report Text",

    ACTION_POST_FLAIR_GROUP: "Post Flair",
    ACTION_POST_FLAIR_TEXT: "Flair Text",
    ACTION_POST_FLAIR_CSS: "Flair CSS Class",
    ACTION_POST_FLAIR_ID: "Flair Template ID",

    ACTION_AUTHOR_FLAIR_GROUP: "Author Flair",
    ACTION_AUTHOR_FLAIR_TEXT: "Flair Text",
    ACTION_AUTHOR_FLAIR_CSS: "Flair CSS Class",
    ACTION_AUTHOR_FLAIR_ID: "Flair Template ID",

    CUSTOM_DATE_GROUP: "Custom Date Placeholder Options",
    CUSTOM_DATE_TEMPLATE: "Date Format Template",
    CUSTOM_TIMEZONE: "Timezone",
    CUSTOM_LOCALE: "Locale",
};

// Help labels
export const HELP_TEXT = {
    VOTE_GROUP: "These configure how the voting system works.",
    VOTE_COMMENT: "This comment is left on every post that is created in the subreddit. It should instruct users to upvote the comment if they think the post fits the subreddit, and downvote if they think it doesn't. Supports placeholders.",
    VOTE_THRESHOLD: "This is the score that must fall below for the post to be automatically removed.",
    VOTE_ACTIONS: "These actions are performed on posts that fall below the specified vote threshold.",
    IGNORE_OPTIONS: "This setting allows you to ignore certain user or post types. Please note that if you ignore both post types, the bot will do nothing.",

    VOTE_MODE: "This setting determines how the voting system works, it can either be based on the score of the bot's comment or replies to the bots comment.",
    VOTE_REPLY_GROUP: "These settings are only used if your vote mode is set to replies.",
    VOTE_REPLY_OPTIONS: "This setting determines whether the bot only considers replies that only contain the keyword, or if it also considers replies that contain the keyword among other text.",
    VOTE_REPLY_UPVOTE: "This is the keyword that the bot uses to determine if a reply is an upvote.",
    VOTE_REPLY_DOWNVOTE: "This is the keyword that the bot uses to determine if a reply is an downvote.",

    ACTION_GROUP: "These settings let you ignore certain users and configure a removal reason.",
    ACTION_REASON_ID: "If you have a native removal reason you'd wish to apply to removed posts, you can enter its ID here. Please note that Devvit doesn't currently send the corresponding removal reason to the user, so this is only visible to mods.",
    ACTION_COMMENT: "This is left as a stickied comment on posts that are removed. Leave blank to remove silently. Supports placeholders.",
    ACTION_REPORT: "This is used as the report reason when performing a report action. Supports placeholders.",

    ACTION_POST_FLAIR_GROUP: "These settings are used to when applying a flair to post. If the post flair action is enabled and all these fields are left blank, the post flair will be cleared.",
    ACTION_POST_FLAIR_TEXT: "Supports placeholders.",

    ACTION_AUTHOR_FLAIR_GROUP: "These settings are used to when applying a user flair to the author. If the author flair action is enabled and all these fields are left blank, the author's flair will be cleared.",
    ACTION_AUTHOR_FLAIR_TEXT: "Supports placeholders.",

    CUSTOM_DATE_GROUP: "These settings let you customize the {{time_custom}} and similar placeholders. If you don't use a custom time placeholder anywhere, you can completely ignore these settings.",
    CUSTOM_DATE_TEMPLATE: `This is used by date-fns to format {{time_custom}}. See: ${LINKS.TIMEFORMAT}`,
    CUSTOM_TIMEZONE: "Timezone used for {{time_custom}}, must be a UTC offset or TZ identifier (e.g. UTC, +02:00, America/New_York, etc).",
    CUSTOM_LOCALE: "Locale used by {{time_custom}} (e.g. enUS, de, etc).",
};

// Default values
export const DEFAULTS = {
    VOTE_COMMENT: "Upvote this comment if you think this post fits /r/{{subreddit}} and downvote this comment if you think it does not. If this comment reaches {{vote_threshold}}, this post will be automatically removed.",
    VOTE_THRESHOLD: -5,
    VOTE_ACTIONS: ["thresholdRemove", "thresholdLock", "thresholdPostFlair", "thresholdComment", "thresholdReportComment", "thresholdSetRemovalReason"],
    IGNORE_OPTIONS: ["ignoreModerators", "ignoreContributors", "ignoreAdmins"],

    VOTE_MODE: ["modeScore"],
    VOTE_REPLY_OPTIONS: ["onlyKeyword"],
    VOTE_REPLY_UPVOTE: "!upvote",
    VOTE_REPLY_DOWNVOTE: "!downvote",

    ACTION_COMMENT: "Hi /u/{{author}}! Thanks for posting to /r/{{subreddit}}. Unfortunately, [your {{kind}}]({{permalink}}) was removed for the following reason:\n\n* Other users voted that your post did not meet subreddit standards.\n\nIf you have questions about this, please [contact our mods via moderator mail](https://www.reddit.com/message/compose?to=/r/{{subreddit}}) rather than replying here. Thank you!",
    ACTION_REPORT: "Quality Vote Below Threshold",

    CUSTOM_DATE_TEMPLATE: "yyyy-MM-dd hh-mm-ss",
    CUSTOM_TIMEZONE: "UTC",
    CUSTOM_LOCALE: "enUS",
};

export const ERRORS = {
};

export const OPTIONS = {
    VOTE_ACTIONS: [
        {
            label: "Remove Post",
            value: "thresholdRemove",
        },
        {
            label: "Lock Post",
            value: "thresholdLock",
        },
        {
            label: "Remove Vote Comment",
            value: "thresholdRemoveVoteComment",
        },
        {
            label: "Set Removal Reason",
            value: "thresholdSetRemovalReason",
        },
        {
            label: "Add Comment",
            value: "thresholdComment",
        },
        {
            label: "Report Post",
            value: "thresholdReportPost",
        },
        {
            label: "Report Comment",
            value: "thresholdReportComment",
        },
        {
            label: "Set Post Flair",
            value: "thresholdPostFlair",
        },
        {
            label: "Set Author Flair",
            value: "thresholdAuthorFlair",
        },
    ],
    VOTE_MODE: [
        {
            label: "Score",
            value: "modeScore",
        },
        {
            label: "Replies",
            value: "modeReplies",
        },
    ],
    VOTE_REPLY_OPTIONS: [
        {
            label: "Only Keyword",
            value: "onlyKeyword",
        },
        {
            label: "Contains Keyword",
            value: "containsKeyword",
        },
    ],
    IGNORE_OPTIONS: [
        {
            label: "Ignore Text Posts",
            value: "ignoreTextPosts",
        },
        {
            label: "Ignore Link Posts",
            value: "ignoreLinkPosts",
        },
        {
            label: "Ignore Moderators",
            value: "ignoreModerators",
        },
        {
            label: "Ignore Contributors",
            value: "ignoreContributors",
        },
        {
            label: "Ignore Admins",
            value: "ignoreAdmins",
        },
    ],
};
