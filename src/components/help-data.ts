export type Article = {
  q: string
  a: string
}

export type HelpCategory = {
  id: string
  title: string
  articles: Article[]
  related: string[]
}

export const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    articles: [
      {
        q: 'What is Spektt?',
        a: `Spektt is a platform built for creatives — photographers, videographers, 3D animators, sound engineers, digital artists, and more — to share their work, compete in Showdowns, grow their audience, and get discovered. Whether you're showcasing your portfolio, entering competitions to win prizes, or finding your creative community through Clusters, Spektt is built for you.`,
      },
      {
        q: 'How do I create an account?',
        a: `Download the Spektt app from the App Store (iOS) or Google Play (Android). Open the app and tap the "Register" tab. Enter your full name, username, email address, and password, then tap to continue. You'll receive a one-time code (OTP) to your email — enter it to verify your account.

Once verified, you'll go through a short onboarding: enter your date of birth, select your creative category, and enable location for personalised content. That's it — you're in.`,
      },
      {
        q: 'Is Spektt free to use?',
        a: `Yes. Spektt is free to download and use. You can follow people, post as much as you like, join Clusters, and enter Showdowns for free — there is no upload limit on any plan. Spektt Pro is optional and adds curation features and status. See the Subscriptions & Pro section for details.`,
      },
      {
        q: 'What creative categories does Spektt support?',
        a: `Currently: Photography, Videography, 3D Animation, Sound Engineering, and Digital Artistry. You choose your primary category during onboarding and can update it anytime from your profile settings. We'll be adding more creative categories as Spektt grows. Not a creator yourself? Join as a Creative Enthusiast to discover work, vote in Showdowns and join Clusters.`,
      },
      {
        q: 'Is Spektt available in my language?',
        a: `Spektt currently supports English, French, Spanish, Portuguese, and Arabic. Change your language anytime in Settings → Language. Arabic is fully supported with right-to-left layout. We'll be adding more languages as the community grows.`,
      },
      {
        q: 'Which devices does Spektt support?',
        a: `Spektt is available on iOS and Android. We recommend keeping your OS updated to the latest version for the best experience.`,
      },
      {
        q: 'I didn\'t receive my verification code (OTP). What should I do?',
        a: `Check your spam/junk folder first. If it's not there, wait 60 seconds and tap "Resend Code." Make sure the email address you entered is correct. Still nothing? Contact support@spektt.com.`,
      },
      {
        q: 'Can I use Spektt on a tablet?',
        a: `Spektt works on Android tablets, though the experience is optimised for phones. iPad is not currently supported.`,
      },
    ],
    related: ['your-profile', 'uploads-content', 'showdowns'],
  },
  {
    id: 'your-profile',
    title: 'Your Profile',
    articles: [
      {
        q: 'What\'s on my Spektt profile?',
        a: `Your profile shows your display name, username, creative category, location, and profile photo, along with your follower/following count and total views. Below that are tabs for your content: Uploads, Spotlights, Awards, Collections, Milestones, and Bookmarks. Visitors to your profile can see your Uploads, Spotlights, and Awards tabs; Milestones and Bookmarks are visible only to you.`,
      },
      {
        q: 'How do I edit my profile?',
        a: `In your profile screen tap "Edit Profile." You can update your display name, username, profile photo, creative category, and location.`,
      },
      {
        q: 'What are Spotlights?',
        a: `Spotlights are featured posts you pin to the top of your profile — your very best work, always front and centre. Free accounts can have a limited number of Spotlights active at once; upgrade to Spektt Pro for more. Visitors to your profile can see your Spotlights.`,
      },
      {
        q: 'What are Collections?',
        a: `Collections are curated sets of saved uploads — like albums or mood boards. Save any upload (yours or someone else's) into a named collection to organise your inspiration by theme, project, or style. Collections are public by default and have a shareable link. Free accounts can have a limited number of Collections; upgrade to Spektt Pro for unlimited. Collections appear on your own profile under the Collections tab; visitors don't see that tab, but anyone you share a link with can open a public collection.`,
      },
      {
        q: 'How do I create a Collection?',
        a: `Tap the bookmark icon on any upload to open the "Save to Collection" sheet. Tap the "+" button to create a new collection — give it a name (up to 50 characters) and tap Save. The upload is added to your new collection automatically.`,
      },
      {
        q: 'How do I save an upload to a Collection?',
        a: `Tap the bookmark icon on any upload. The "Save to Collection" sheet opens — toggle any collection on or off, then tap Save. The bookmark icon fills in when an upload is saved to at least one collection.`,
      },
      {
        q: 'Can I share a Collection?',
        a: `Yes. Every public collection has a shareable link. If someone opens it without the Spektt app installed, they see a preview page with a download link; if the app is installed, the link opens the collection directly in the app.`,
      },
      {
        q: 'What are Bookmarks?',
        a: `Bookmarks let you save any Showdown for later — great for competitions you want to come back to, track, or enter before the deadline closes. Your bookmarked Showdowns live in the Bookmarks tab on your profile and are only visible to you.`,
      },
      {
        q: 'What are Awards?',
        a: `Awards are your Showdown placements — gold, silver, and bronze medals earned by finishing 1st, 2nd, or 3rd in a Showdown. Each award shows the Showdown name, category, and whether it was a global Showdown or a Cluster Showdown. Tap any award to go straight to that Showdown. Awards are visible to visitors on your profile.`,
      },
      {
        q: 'What is the Milestones tab?',
        a: `The Milestones tab shows your XP progress and all 38 badges on Spektt — both earned and unearned (with progress bars so you know how close you are). At the top you'll see your current level, tier name, total XP, and a progress bar to the next level. Tap "See All" to open the full Milestones screen. Milestones are visible on your own profile only.`,
      },
      {
        q: 'How do I follow someone?',
        a: `Go to their profile and tap "Follow." Their new posts will appear in your Following feed. You can unfollow anytime from their profile or from your Following list.`,
      },
      {
        q: 'Can I make my account private?',
        a: `Currently all Spektt profiles are public. Additional privacy settings are on the roadmap.`,
      },
      {
        q: 'How do I share my profile?',
        a: `Tap the share icon on your profile page to copy your Spektt profile link or share it directly to other apps.`,
      },
    ],
    related: ['milestones', 'showdowns', 'account-settings'],
  },
  {
    id: 'account-settings',
    title: 'Your Account & Settings',
    articles: [
      {
        q: 'How do I change my email address or password?',
        a: `Go to Settings → Account. You can update your email address and password from there. Any email change requires OTP verification.`,
      },
      {
        q: 'How do I change the app language?',
        a: `Settings → Change Language → select from English, French, Spanish, Portuguese, or Arabic. You will need to restart the app if you choose Arabic.`,
      },
      {
        q: 'How do I manage my notifications?',
        a: `Settings → Account → Notifications Settings. Toggle push notifications on or off for: follows, comments, likes, Showdown updates, Cluster activity, DMs, and more.`,
      },
      {
        q: 'How do I delete my account?',
        a: `Settings → Account → Delete Account. This starts a 30-day grace period — your account is deactivated but not erased. Log back in within 30 days to fully restore it. After 30 days, your profile, uploads, messages and Cluster memberships are permanently deleted and cannot be recovered; comments are anonymised, and a minimal account record is kept (see our Privacy Policy). Your uploads stay visible during the 30 days.`,
      },
      {
        q: 'I forgot my password. How do I reset it?',
        a: `On the login screen, tap "Forgot Password." Enter your email address — we'll send a one-time verification code (OTP) to your inbox. Enter the code on the next screen, then set your new password. Check your spam folder if the code doesn't arrive within a few minutes. The code expires after 10 minutes.`,
      },
      {
        q: 'How do I log out?',
        a: `Profile → Settings → Log Out.`,
      },
      {
        q: 'Is my data safe with Spektt?',
        a: `Yes. Your data is stored securely on Google Cloud (Firebase) infrastructure. We never sell your personal data to third parties. Full details at spektt.com/privacy.`,
      },
      {
        q: 'How do I report a bug or give feedback?',
        a: `Go to Settings → Report a Bug to open the in-app feedback form — choose Bug Report, Feature Request, Improvement, or Other, then add details and an optional screenshot. You can submit up to 4 times a week, with a 12-hour cooldown between submissions. You can also email support@spektt.com directly — we read every message and use feedback to improve the app.`,
      },
    ],
    related: ['your-profile', 'subscriptions-pro'],
  },
  {
    id: 'uploads-content',
    title: 'Uploads & Content',
    articles: [
      {
        q: 'What types of content can I upload?',
        a: `Each post supports one piece of media — a single photo or a single video, selected from your camera roll. Spektt accepts the standard formats your device uses: JPEG and PNG on Android; JPEG, PNG, and HEIC on iOS. For videos, any format your camera stores (MP4, MOV, etc.) is accepted.`,
      },
      {
        q: 'Is there a file size, resolution, or length limit?',
        a: `Photos: up to 10MB. Images below 1 megapixel are rejected as too small; between 1 and 4 megapixels you'll see a note that the image may look soft, but you can still post it. Showdown entries hold a higher bar — they need at least 4 megapixels (roughly 2000×2000px or better), so screenshots and forwarded images usually can't be entered. Videos: maximum 2 minutes and 500MB (the app compresses your video before upload). You'll see a clear message if a file doesn't meet these limits before you submit.`,
      },
      {
        q: 'How do I upload a post?',
        a: `Tap the "+" button in the bottom navigation. Choose New Upload, then select the media type (image or video) from your media library. Add a caption and optionally tag a Cluster. Tap "New Upload" to publish.`,
      },
      {
        q: 'Can I upload multiple photos or videos in one post?',
        a: `No — each post is one piece of media: one photo or one video. This keeps the feed clean and consistent.`,
      },
      {
        q: 'Can I edit or delete a post after publishing?',
        a: `You can delete a post anytime: tap the options menu on the post → Delete. Caption editing is also available via Edit Upload.`,
      },
      {
        q: 'Who can see my posts?',
        a: `All posts on Spektt are public. Your posts appear on your profile, in your followers' Following feed, and in any Cluster feed you tagged.`,
      },
      {
        q: 'What happens to my content after I upload it?',
        a: `Photos are delivered via Cloudflare Images (global CDN). Videos are encoded and streamed via Bunny.net Stream. This ensures fast loading for viewers anywhere in the world.`,
      },
      {
        q: 'My upload keeps failing. What should I do?',
        a: `Check your internet connection — uploads need a stable connection, especially for video. Try switching between WiFi and mobile data. Close and reopen the app and try again. Still failing? Contact support@spektt.com.`,
      },
      {
        q: 'Can I post content that shows other people?',
        a: `You must have consent from any identifiable person in your content before posting. Posting someone's image without consent violates our Community Guidelines.`,
      },
    ],
    related: ['getting-started', 'showdowns', 'community-guidelines'],
  },
  {
    id: 'showdowns',
    title: 'Showdowns',
    articles: [
      {
        q: 'What is a Showdown?',
        a: `A Showdown is a creative competition on Spektt. A host creates a Showdown with a brief — a theme or prompt — sets entry and voting windows, and defines how winners are chosen. Creatives submit their work, the community votes, and winners are announced.

There are two types of Showdowns: Pulse and Premium.`,
      },
      {
        q: 'What is the difference between a Pulse Showdown and a Premium Showdown?',
        a: `Pulse Showdown — 100% fan-voted. There are no judges. The community votes, and the entries with the most votes win. Prizes are XP and exclusive Showdown badges. Pulse Showdowns require a minimum of 5 entries to run.

Premium Showdown — Two-stage judging. Fans vote first to determine the top 20 entries. A panel of expert judges then scores those top 20. The final rankings combine both the fan vote and the judge scores. Winners receive real cash prizes paid to a Nigerian bank account. Premium Showdowns require a minimum of 10 entries to run and are currently open to Nigerian participants only.

The type is clearly shown on every Showdown's detail page before you enter.`,
      },
      {
        q: 'How do I find Showdowns?',
        a: `Open the Explore screen and go to the Showdowns section. You'll also see Showdowns inside any Clusters you've joined. Showdowns are labelled with their current stage (Upcoming, Open, Voting, etc.) and their type (Pulse or Premium).`,
      },
      {
        q: 'How do I enter a Showdown?',
        a: `Tap a Showdown to open its detail page. If the submission window is open, tap "Join this challenge." You'll be taken to a selection sheet where you can either submit a brand-new upload or choose an existing post from your profile. You get one entry per Showdown.`,
      },
      {
        q: 'What is the full Showdown lifecycle?',
        a: `Pulse Showdowns go through these stages:
• Upcoming — Published but submissions haven't opened yet.
• Submission — Open for entries. Submit your work before the deadline.
• Voting — Submissions closed. The community votes on entries.
• Ended — Voting complete. Final rankings published. Top 15 entries displayed.

Premium Showdowns go through these stages:
• Upcoming — Published, awaiting the submission window.
• Submission — Open for entries.
• Voting — Community votes on entries.
• Judging — Voting closed. Assigned judges score each entry (a score from 0 to 100).
• Winners Announced — Final combined scores published. Cash prize winners have 14 days to claim.
• Ended — Claim window closed. Showdown complete.

Special states (both types):
• Cancelled — The Showdown was cancelled by the host or Spektt before ending.
• Insufficient Entries — Not enough entries were submitted (minimum 5 for Pulse, 10 for Premium). The Showdown closes without a result.`,
      },
      {
        q: 'Are there restrictions on who can enter?',
        a: `Yes. Two types of restrictions apply:

Age — Users flagged as minors are not permitted to enter any Showdown.

Geography — Users in Qatar, UAE, and Saudi Arabia cannot enter any Showdown. Premium Showdowns (cash prizes) are currently open to Nigerian participants only — prize payments are made to Nigerian bank accounts. If your region is restricted, you'll see a notice on the Showdown's detail page.

Judges cannot enter Showdowns they are assigned to judge.`,
      },
      {
        q: 'Is the order of entries random? Why do I see entries in a different order than my friend?',
        a: `Yes — entry order is intentionally randomised using a deterministic shuffle. The order you see is based on a unique combination of your user ID and the Showdown ID, so every user sees a different consistent order. You'll always see the same order yourself, but it's different from what anyone else sees.

This prevents entries from creators with large followings from always appearing first and gives every entry a fair chance at visibility.`,
      },
      {
        q: 'How does voting work?',
        a: `During the Voting stage, any registered Spektt user can vote — including people who didn't enter the Showdown. You get one vote per Showdown — choose the entry you think deserves to win. You can vote in multiple Showdowns, up to a daily cap of 20 votes total across all Showdowns.

Vote counts are hidden while voting is live — you won't see how many votes any entry has until the Showdown ends. This keeps voting honest and prevents momentum bias.`,
      },
      {
        q: 'How are winners chosen in a Pulse Showdown?',
        a: `Purely by fan votes. When voting closes:
• Entries are sorted by vote count (highest first).
• If two entries have equal votes, the one submitted earlier ranks higher.

The top 15 entries are displayed in the final rankings.`,
      },
      {
        q: 'How are winners chosen in a Premium Showdown?',
        a: `In two stages:

Fan vote — The community votes to determine the top 20 entries. These become the finalists that go to the judges.

Judge scoring — A panel of expert judges gives each of those top 20 entries a score from 0 to 100.

The final ranking combines both: fan vote performance counts for 60%, judge scores count for 40%. The entry with the highest combined score wins. Top 15 are displayed in the final results.`,
      },
      {
        q: 'What prizes can I win?',
        a: `Pulse — XP bonuses and exclusive Showdown placement badges (gold, silver, bronze). These are displayed in your Awards tab.

Premium — Cash prizes for 1st, 2nd, and 3rd place. The prize amounts are shown on the Showdown detail page under the Prizes tab. XP and badges are also awarded.`,
      },
      {
        q: 'How do I claim my cash prize in a Premium Showdown?',
        a: `When a Premium Showdown reaches Winners Announced status, you'll receive a notification if you placed in the top 3. You have 14 days from that notification to submit your claim. You'll be prompted to enter your bank name, account number, and account name. A Tax ID is optional but recommended.

A 10% withholding tax applies to all cash prizes in line with Nigerian tax regulations — this is shown clearly before you confirm your claim. If you do not claim within 14 days, your prize is forfeited and cannot be recovered.`,
      },
      {
        q: 'Can I enter a Showdown inside a Cluster?',
        a: `Yes — if you're a member of that Cluster. Cluster Showdowns follow the same Pulse and Premium rules as global Showdowns but are scoped to that Cluster's members. A Cluster Showdown award appears in your Awards tab with the Cluster's name alongside the medal.`,
      },
      {
        q: 'What happens if a Showdown doesn\'t get enough entries?',
        a: `If the minimum entry count isn't reached by the time the submission window closes (5 for Pulse, 10 for Premium), the Showdown moves to an Insufficient Entries state and closes without a result. No winners are declared and no prizes are awarded.`,
      },
      {
        q: 'Can I withdraw my entry?',
        a: `Yes — while the submission window is still open. Once voting begins, entries are locked and cannot be removed.`,
      },
      {
        q: 'Who can create a Showdown?',
        a: `Global Showdowns are created and managed by Spektt. Cluster admins can create Showdowns scoped to their Cluster. If you're interested in running a Showdown for your community, contact showdowns@spektt.com.`,
      },
      {
        q: 'Can I follow an entry to see how it does?',
        a: `Yes — that's what the star on each entry is for. Tap it to save an entry while you browse, then come back after the Showdown ends to see how it placed and how many votes it got. It's also handy while voting is live, since you only get one vote and can shortlist a few favourites before deciding.

To see your saved entries, open the Showdown and switch the entry grid from All to Saved. Tapping one opens a viewer containing only your saved entries, so you can go through them without scrolling past everything else.

A few things worth knowing:

• Your saved list is private. Creators are never told that you saved their entry, and saving is not a vote — it has no effect on anyone's result.
• Saved entries stay anonymous while the Showdown is running, exactly like the rest of the entries. Authors and vote counts are revealed once it ends.
• The list stays after the Showdown ends — that's the point. The star disappears once voting is over (there's nothing left to follow), but your saved entries remain so you can check the results.
• Free accounts can save up to 5 entries per Showdown. Spektt Pro removes the limit.
• Your saved list is stored on your device, so it doesn't follow you to another phone.
• If an entry is withdrawn or removed from the Showdown, it drops out of your saved list automatically.`,
      },
      {
        q: 'I think a Showdown result was unfair. What can I do?',
        a: `If you believe there was a genuine rules violation — vote manipulation, plagiarised entry, duplicate submissions — use the report button on the entry and select the relevant reason, or email showdowns@spektt.com with details.

Disagreeing with a result, a judge's scores, or the community's votes is not grounds for a dispute. Judges make their decisions independently.`,
      },
      {
        q: 'Can an entry be disqualified from a Showdown?',
        a: `Yes. If a confirmed rules violation is found — plagiarism, vote manipulation, an ineligible entrant — Spektt moderators can disqualify the entry while the Showdown is still live. You'll be notified if your entry is disqualified, along with the reason. A disqualification can still be reversed by a moderator while the Showdown remains live, but once it ends, the result is final.`,
      },
    ],
    related: ['clusters', 'rankings-leaderboard', 'milestones'],
  },
  {
    id: 'clusters',
    title: 'Clusters',
    articles: [
      {
        q: 'What is a Cluster?',
        a: `A Cluster is a themed creative community on Spektt. Think of it as a group for a specific style, genre, or interest — "Street Photography Lagos," "UI/UX Designers," "Afrobeats Videographers." Clusters have their own feed, Showdowns, and moderation.`,
      },
      {
        q: 'How do I find and join a Cluster?',
        a: `Browse Clusters from the Explore screen. Tap a Cluster to see its description and recent activity. Tap "Join" to become a member. Joined Clusters appear in your Cluster feed.`,
      },
      {
        q: 'How do I create a Cluster?',
        a: `Tap the "+" button in the bottom navigation and select "New Cluster." Your account must be at least 7 days old, and free accounts need at least 4 uploads first. Every Spektt user — free or Pro — can create one Cluster; Spektt Pro users can create unlimited Clusters and skip the upload minimum.

If a requirement isn't met yet, the screen shows which one. Once you're eligible, fill in your Cluster name, description, category, and cover image. Once created, you're automatically the Cluster admin.`,
      },
      {
        q: 'What can a Cluster admin do?',
        a: `As a Cluster admin you can:
• Run Cluster Showdowns (Pulse and Premium)
• Remove posts that violate the Cluster rules
• Ban members from the Cluster
• Temporarily suspend members
• Appoint moderators to help manage the community
• Pin posts to the top of the Cluster feed
• Archive the Cluster
• Transfer admin rights to another member`,
      },
      {
        q: 'Can a Cluster run more than one Showdown at a time?',
        a: `No — each Cluster can have only one active Showdown running at a time (from Upcoming through to results). This keeps entries and votes from splitting across competing Showdowns in the same community. Once the current Showdown ends or is cancelled, the Cluster's admins and moderators can start a new one.`,
      },
      {
        q: 'Can I post directly to a Cluster?',
        a: `Yes. When uploading a post, tag it to a Cluster. It appears in that Cluster's feed as well as your profile.`,
      },
      {
        q: 'How do I leave a Cluster?',
        a: `Go to the Cluster page → options menu → "Leave Cluster."`,
      },
      {
        q: 'Can a Cluster be private or invite-only?',
        a: `No. All Clusters on Spektt are open — anyone can find and join them. Spektt is built to be a discoverable, open creative community.`,
      },
      {
        q: 'What happens if a Cluster becomes inactive or breaks the rules?',
        a: `Use the report button on the Cluster page or contact support@spektt.com. Spektt's platform-level moderation applies to all Clusters — we can intervene for serious violations regardless of Cluster moderation.`,
      },
    ],
    related: ['showdowns', 'community-guidelines', 'account-settings'],
  },
  {
    id: 'rankings-leaderboard',
    title: 'Rankings & Leaderboard',
    articles: [
      {
        q: 'What is the Spektt Leaderboard?',
        a: `The Leaderboard ranks all Spektt users by their total XP (experience points). It shows where you stand against the entire Spektt community and refreshes every hour.`,
      },
      {
        q: 'How is my rank calculated?',
        a: `Your rank is based on your total XP, and XP comes from what other people give your work: placing in Showdowns, votes and views from the community, and your Cluster growing. Posting more, liking or voting does not raise your rank on its own.`,
      },
      {
        q: 'Can I filter the Leaderboard?',
        a: `Yes. You can filter by time period — All Time, Monthly, or Weekly — to see who's been the most active across different windows.`,
      },
      {
        q: 'How often is the Leaderboard updated?',
        a: `Rankings refresh every hour from live activity. The Weekly board's period resets every Saturday, and the Monthly board resets on the 1st of each month — but your XP itself is tracked continuously in between.`,
      },
      {
        q: 'Can I lose rank?',
        a: `Your XP does not go down (the one exception is a disqualified Showdown entry — see "Can I lose XP?"), but your relative rank can drop if other users earn XP faster than you.`,
      },
    ],
    related: ['milestones', 'showdowns', 'getting-started'],
  },
  {
    id: 'subscriptions-pro',
    title: 'Subscriptions & Pro',
    articles: [
      {
        q: 'What is Spektt Pro?',
        a: `Spektt Pro is our optional subscription. It unlocks unlimited Spotlights and Collections, unlimited Cluster creation, unlimited showdown bookmarks and entry shortlists, an exclusive Pro badge, and a tier-scaled XP boost. Uploads are unlimited for everyone, with or without Pro.`,
      },
      {
        q: 'How much does Spektt Pro cost?',
        a: `Current pricing is shown in the app in your local currency. Go to Profile → Settings → Become a Spektt Pro to see available plans.`,
      },
      {
        q: 'How do I subscribe to Spektt Pro?',
        a: `Settings → "Become a Spektt Pro" → choose a plan — Monthly, Annual, or Lifetime. Spektt Pro is coming soon on both iOS and Android.`,
      },
      {
        q: 'Can I cancel my subscription?',
        a: `Yes, anytime. Cancel through your App Store or Google Play subscription settings. Your Pro access continues until the end of your current billing period.`,
      },
      {
        q: 'My payment failed. What should I do?',
        a: `Payments are handled by Apple or Google. Make sure your payment method is up to date in your device's payment settings. Still having trouble? Contact support@spektt.com.`,
      },
      {
        q: 'Is my payment information stored by Spektt?',
        a: `No. All payments are processed by Apple (App Store) or Google (Play Store). Spektt never stores your card or payment details.`,
      },
      {
        q: 'I was charged but didn\'t receive Pro access. What do I do?',
        a: `Fully close and reopen the app — Pro access sometimes takes a moment to activate. If it still doesn't appear, contact support@spektt.com with your receipt.`,
      },
      {
        q: 'Are refunds available?',
        a: `Refund requests are handled by Apple or Google. Spektt cannot issue refunds directly. Contact Apple Support or Google Play Support for refund requests.`,
      },
    ],
    related: ['account-settings', 'milestones'],
  },
  {
    id: 'messages',
    title: 'Messages',
    articles: [
      {
        q: 'Can I message other users on Spektt?',
        a: `Yes. Spektt has a built-in direct messaging system. To start a conversation, you send a chat request — the other person can accept or decline before any messages are exchanged.`,
      },
      {
        q: 'How do I start a conversation?',
        a: `Go to a user's profile and tap the message icon to send them a chat request. They'll receive a notification and can choose to accept or decline. Once they accept, the conversation opens and you can start messaging.`,
      },
      {
        q: 'Can I reply to a specific message in a conversation?',
        a: `Yes. Swipe right on any message to quote and reply to it directly.`,
      },
      {
        q: 'Can I send photos or videos in DMs?',
        a: `Text messaging is currently supported. Media sharing in DMs is coming in a future update.`,
      },
      {
        q: 'How do I delete a conversation?',
        a: `Open the conversation, tap the options menu in the top right, then select "Delete conversation" and confirm. This removes it from your inbox — the other person isn't notified.`,
      },
      {
        q: 'Can I block someone from messaging me?',
        a: `Yes. Go to their profile, tap the options menu, and select "Block." Blocked users cannot send you messages or see your content.`,
      },
      {
        q: 'I\'m receiving unwanted or harassing messages. What can I do?',
        a: `Block the user immediately from their profile. If messages are threatening or violate our guidelines, also report them using the report button and contact support@spektt.com.`,
      },
    ],
    related: ['community-guidelines', 'account-settings'],
  },
  {
    id: 'milestones',
    title: 'Milestones',
    articles: [
      {
        q: 'What are badges?',
        a: `Badges are recognitions for achievements and milestones on Spektt. We have 38 badges across six categories: views, votes received, votes given, Showdown wins, Cluster members and tiers. Badges are permanent once earned.`,
      },
      {
        q: 'How do I see my badges?',
        a: `Open your profile and tap the Milestones tab. Your earned badges are shown in a grid, grouped by category. Tap "See All" to open the full Milestones screen which shows every badge — earned and unearned — with progress bars.`,
      },
      {
        q: 'What are Tiers?',
        a: `Tiers are progression levels based on your XP:
• Newcomer (Level 1–5) — Just getting started
• Emerging (Level 6–12) — Growing your presence
• Rising Star (Level 13–20) — Building real momentum
• Established (Level 21–30) — A recognised part of the community
• Verified (Level 31–50) — Serious creator
• Legendary (Level 51–100) — Elite. Very few get here.

Your current tier is displayed on your profile.`,
      },
      {
        q: 'How do I earn XP?',
        a: `XP rewards what the community gives your work — not how much you post. You earn it by:
• Signing up — a one-time welcome bonus
• Entering a Showdown — XP for submitting an entry
• Placing in a Showdown — the top 15 earn XP; the top 3 earn significantly more, 1st place the most, and Premium Showdown winners more again
• Votes on your Showdown entry — XP for every vote your entry receives. Voting is anonymous, so this XP is added when the Showdown's results are published, not while voting is open
• Badges for views and votes received — reaching a milestone (for example 100 views, or 10 votes received) unlocks a badge with an XP bonus
• Growing your Cluster — if you created a Cluster, you earn XP as it reaches member milestones (up to a lifetime limit)

You don't earn XP for posting, liking, voting for others, or joining or creating a Cluster. Views and votes only count from established accounts (verified, at least a week old), and your own views and votes never count — so XP can't be faked with extra accounts.

Spektt Pro users earn a boosted XP multiplier that scales with tier — 1.25× at Newcomer and Emerging, 1.5× at Rising Star and Established, 1.75× at Verified, and 2× at Legendary.`,
      },
      {
        q: 'Can I lose XP?',
        a: `Only in one case: if a Showdown entry of yours is disqualified, the XP that entry earned from votes is removed (badges you already earned stay). Otherwise your XP never goes down. Your Leaderboard rank relative to others may still change as the community grows.`,
      },
      {
        q: 'Do badges expire?',
        a: `No. All earned badges are permanent.`,
      },
      {
        q: 'Are there rare or exclusive badges?',
        a: `Yes. Showdown win, votes-given and tier badges — and the two largest Cluster badges — are prestige-only: no XP, just the recognition. The rarest ones go to Showdown winners and users who reach the top tier (level 51+).`,
      },
      {
        q: 'Does Spektt Pro affect my XP or tier?',
        a: `Yes — Spektt Pro gives you a boosted XP multiplier that scales with your tier: 1.25× at Newcomer and Emerging, 1.5× at Rising Star and Established, 1.75× at Verified, and 2× at Legendary. The boost multiplies the XP you earn; it never changes who wins a Showdown or how votes are counted. Pro users climb faster, but the system is the same for everyone.`,
      },
    ],
    related: ['rankings-leaderboard', 'showdowns', 'your-profile'],
  },
  {
    id: 'community-guidelines',
    title: 'Community Guidelines & Safety',
    articles: [
      {
        q: 'What are the Spektt Community Guidelines?',
        a: `Spektt is a community built on respect, authenticity, and creative excellence. We prohibit:
• Hateful, discriminatory, or abusive content
• Harassment or bullying of any user
• Non-consensual use of other people's images or likeness
• Spam or artificially inflated engagement
• Copyright infringement or plagiarism
• Graphic violence or sexually explicit content
• Impersonation of other users or brands
• Cheating in Showdowns (vote manipulation, duplicate entries, coordinated voting rings)

Violations may result in content removal, account suspension, or permanent ban.`,
      },
      {
        q: 'How do I report a user or content?',
        a: `Tap the options menu on any post, comment, Showdown entry, or profile and select "Report." Choose the reason that best describes the violation. Our moderation team reviews all reports.`,
      },
      {
        q: 'How do I report a Showdown entry I believe is plagiarised?',
        a: `Use the report button on the entry and select "Intellectual Property." Provide as much detail as possible, including a link to the original work. You can also email showdowns@spektt.com directly.`,
      },
      {
        q: 'What happens after I report something?',
        a: `Our moderation team reviews every report. If we confirm a violation, we take action: removing content, issuing a warning, suspending, or banning the account.`,
      },
      {
        q: 'Can I block another user?',
        a: `Yes. Go to their profile → options menu → "Block." Blocked users cannot see your content, comment on your posts, or message you. Manage your blocked list in Settings → Blocked Users.`,
      },
      {
        q: 'My account was suspended. What do I do?',
        a: `You'll see a suspension screen explaining why when you try to log in. From that screen you can submit an in-app appeal — you get up to 2 appeal attempts per suspension, and a second attempt only unlocks if the first is declined. You can also contact support@spektt.com with your username if you'd rather reach us directly.`,
      },
      {
        q: 'I think my account was hacked. What should I do?',
        a: `Change your password immediately via "Forgot Password" on the login screen. If you can't access your account at all, contact support@spektt.com right away with your username, registered email, and any unusual activity you noticed.`,
      },
      {
        q: 'Does Spektt have human moderators?',
        a: `Yes. Spektt has both automated systems and a human moderation team that reviews reports, monitors Clusters, and oversees Showdown integrity.`,
      },
      {
        q: 'What is Spektt\'s policy on copyright?',
        a: `All content posted on Spektt must be original work you own, or content you have the legal right to post. Do not post work belonging to someone else without permission. If you believe your copyrighted work was posted without your permission, email legal@spektt.com with full details — we will act promptly.`,
      },
      {
        q: 'Can I screenshot someone else\'s Spektt content?',
        a: `Spektt content belongs to its creator. Screenshots for personal use are generally acceptable. Reproducing, redistributing, or using someone else's content commercially — without their explicit permission — is a violation of our Terms and potentially copyright law.`,
      },
    ],
    related: ['account-settings', 'uploads-content', 'showdowns'],
  },
]
