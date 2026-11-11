---
title: "Connecting YouTube to AI Recaps: What We See and Don't"
description: "Linking YouTube lets AI Recaps read your subscription list and Google email, nothing more. Here's what we keep, for how long, and how to remove it all."
pubDate: "2026-11-11"
tags: ["youtube", "subscriptions", "privacy", "how it works", "transparency"]
author: "AI Recaps"
image:
  src: "/blog/airecaps-connect-youtube-hero.webp"
  alt: "A brass house key on a ring and a phone lying face down on an oak table, next to a cup of tea and a small succulent in a terracotta pot by a sunlit window"
---

When AI Recaps asks you to connect YouTube, it's fair to wonder what you're handing over. A Google permission screen doesn't say much, and "access to your YouTube account" can sound like a lot.

So here's what actually happens, based on what the app does, not on what a permission screen could allow in theory.

## Why Connect at All

You don't have to. You can sign in, search for channels by name and build a [summary schedule](/blog/picking-your-summary-schedule) without ever linking YouTube. Connecting is a separate step from signing in, even if you signed in with Google.

What connecting saves you is typing. If you follow 80 channels, finding each one by search gets old fast. Once YouTube is linked, you pick from the channels you already subscribe to. The Summarize page also shows a "From your subscriptions" list of recent uploads, so you can tap one and get a summary without pasting a link.

## What We Ask Google For

When you tap Connect YouTube, Google asks you to approve read-only access to your YouTube account, plus your Google email address.

Read-only is the narrowest permission YouTube offers that includes your subscriptions, so the wording on Google's screen is broader than what we use. With it, AI Recaps reads one thing: the list of channels you subscribe to. For each channel that's the ID, name, description and thumbnail.

It doesn't read your watch history, playlists, likes, comments or private videos. And because the access is read-only, it can't upload, edit, delete or subscribe to anything on your account.

The recent uploads in "From your subscriptions" come from those channels' public video feeds, the same ones anyone can see. Nothing about your personal viewing goes into them.

## What We Keep, and for How Long

- **Your connection.** The tokens that let us read your subscription list are encrypted and kept only while YouTube stays connected. We also keep your Google email so the Account page can show which account is linked.
- **Your subscription list.** A cached copy for up to 6 hours, so we don't ask YouTube again every time you open the channel picker.
- **Recent uploads.** A cached list for up to 30 minutes.
- **Channels you add to a schedule.** Saved with that schedule until you change or delete it. That's your choice in AI Recaps, not a copy of your YouTube account.

Expired cache data is cleaned out daily, even if you never open the app again.

## How to Disconnect

Go to **Account**, find the **YouTube** card and tap **Disconnect**.

Two things happen. First, AI Recaps tells Google to revoke its access, so the permission is gone on Google's side too. Then it deletes the stored tokens, your Google account ID and email, and the cached subscriptions and uploads. Channels already on your schedule stay there, so your summaries keep coming.

You can also revoke access from your Google Account's security settings instead. The next time AI Recaps tries to use the connection, Google tells us it's been revoked, and we delete the same data then.

## Deleting Your Account

If you want to leave altogether, go to **Account**, tap **Delete account** at the bottom, type DELETE and confirm. It works the same on iOS, Android and airecaps.com, and it happens right away, with no grace period.

That removes your profile, your summaries, schedules and podcast shows, and it disconnects YouTube the same way the Disconnect button does. A web subscription is cancelled on the spot. One thing we can't do for you: App Store and Google Play subscriptions have to be cancelled in the store, so do that first or they'll keep renewing.

If you can't sign in, the [delete account page](https://airecaps.com/delete-account) explains how to ask us to do it by email.

## The Short Version

Connecting YouTube gives AI Recaps your subscription list so you can pick channels instead of searching for them. Apart from your Google email, that's all it reads. It's cached for hours rather than kept, and one button takes it all back.

[Connect your subscriptions on AI Recaps](https://airecaps.com) and turn the channels you already follow into summaries.
