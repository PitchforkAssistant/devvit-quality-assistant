import {AppInstall, AppUpgrade, PostCreate, CommentCreate} from "@devvit/protos";
import {TriggerContext, OnTriggerEvent} from "@devvit/public-api";
import {onAnyTriggerConsoleLog, startSingletonJob} from "devvit-helpers";

// Post Triggers
export async function onPostCreate (event: OnTriggerEvent<PostCreate>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

// Comment Triggers
export async function onCommentCreate (event: OnTriggerEvent<CommentCreate>, context: TriggerContext) {
    return onAnyTriggerConsoleLog(event, context);
}

// Setup Scheduler
export async function onAppChanged (event: OnTriggerEvent<AppInstall | AppUpgrade>, context: TriggerContext) {
    console.log(`onAppChanged\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
    try {
        await startSingletonJob(context.scheduler, "checkVotesJob", "* * * * *", {});
    } catch (e) {
        console.error("Failed to schedule checkVotesJob", e);
        throw e;
    }
}
