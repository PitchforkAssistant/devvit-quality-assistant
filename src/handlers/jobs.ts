import {Context, ScheduledJobEvent} from "@devvit/public-api";

export async function checkVotesJob (event: ScheduledJobEvent, context: Context) {
    console.log(`checkVotesJob ran at ${new Date().toISOString()}\nevent:\n${JSON.stringify(event)}\ncontext:\n${JSON.stringify(context)}`);
}
