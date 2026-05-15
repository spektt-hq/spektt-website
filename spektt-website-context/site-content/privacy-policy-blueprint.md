# Spektt — Privacy Policy Blueprint

**Effective Date**: [INSERT DATE BEFORE PUBLISHING]
**Last Updated**: [INSERT DATE BEFORE PUBLISHING]

---

Spektt ("we", "our", or "us") is operated by **Axlume Tech Limited**, a company registered in the Federal Republic of Nigeria. We are committed to protecting your privacy. This Privacy Policy explains what personal information we collect, how we use it, who we share it with, and your rights regarding your data when you use the Spektt mobile application ("App") and related services at spektt.com.

Please read this policy carefully. By creating an account or using the App, you agree to the collection and use of your information as described here.

---

## 1. Who We Are

Spektt is a creative community platform built for photographers, videographers, 3D animators, sound engineers, digital artists, and other creatives — primarily serving the Nigerian and African creative industry.

**Legal Entity**: Axlume Tech Limited
**Registration**: Corporate Affairs Commission (CAC), Federal Republic of Nigeria
**Tax Identification Number**: [INSERT TIN]

**Contact**:
- General: hello@spektt.com
- Support: support@spektt.com
- Privacy requests: legal@spektt.com (subject line: "Privacy Request")
- Website: spektt.com

---

## 2. Information We Collect

### 2.1 Information You Provide Directly

**Account & Identity**
- Full name and username (unique handle)
- Email address and password (password is hashed by Firebase Authentication — we never store it in plain text)
- Profile photo (avatar)
- Date of birth (required for age verification, Showdown eligibility, and legal compliance)
- Creative category / role (e.g., photographer, videographer, 3D animator)
- Location display text (the city or region you choose to show on your profile)
- Country and region (ISO codes — derived from your GPS location during onboarding and used for Showdown eligibility and legal compliance)

**Creative Content**
- Photos and videos you upload, including captions, descriptions, and tags
- Comments and replies you post on other users' uploads
- Collections (sets of uploads you curate on your profile)
- Spotlight selections (uploads you feature at the top of your profile)

**Contest & Showdown Participation**
- Contest entries (uploads submitted to Showdowns)
- Votes you cast on contest entries
- Judge scores (if you are assigned as a judge in a Premium Showdown)
- **Prize payment details**: If you win a cash-prize Premium Showdown and choose to claim your prize, we collect your bank name, bank account number, bank account name, and an optional Tax Identification Number solely to pay out your prize. This financial data is stored only as long as necessary to complete the payment and comply with applicable Nigerian financial and tax regulations. Cash prize claims are currently available to Nigerian participants only.

**Clusters (Community Groups)**
- Clusters you create or join
- Posts you make within a Cluster
- Your role within a Cluster (member, moderator, or admin)
- Cluster rules and descriptions you write as an admin
- Moderation actions you take as an admin or moderator (bans, suspensions, content removals)

**Direct Messages**
- The content of messages you send and receive
- The message request text (the first message sent when initiating a new conversation)
- Conversation metadata: participant identities, timestamps, read status, unread counts, and conversation status (pending / accepted / declined / blocked)
- Block and report actions taken within conversations

**Subscriptions**
- Spektt Pro subscription status (active / expired)
- Subscription start and expiry dates
- Subscription limits applied to your account (uploads, Collections, Spotlights, Clusters)
- Payment processing is handled entirely by Apple (App Store) or Google (Google Play) and RevenueCat. We never receive or store your card number, payment method, or billing address.

**Feedback & Support**
- Feedback and bug reports you submit through the App
- Messages you send to us via email (support@spektt.com or legal@spektt.com)

**Reports & Appeals**
- Reports you submit about other users, uploads, or Clusters
- The reason category and any additional detail you provide
- Appeal submissions if your account is suspended or content is removed

### 2.2 Information We Collect Automatically

**Location Data**
- **Precise GPS coordinates** (latitude and longitude) collected via your device during onboarding, with your permission. This is reverse-geocoded into a human-readable city/region/country for display on your profile. The raw coordinates are not stored — only the derived location text and ISO country code are retained.
- **Public IP address**: Your device's public IP is fetched via ipify.org at certain points (such as during onboarding and voting activity) and stored as a **SHA-256 hash** — the raw IP is never stored. The hashed value is used solely for fraud detection and vote manipulation prevention.

**Device & Technical Data**
- Device type, operating system, and OS version
- App version
- Language preference (synced to our servers to deliver communications in your language)

**Gamification & Engagement Data**
- XP earned, current level (1–100), tier (Newcomer → Emerging → Rising Star → Established → Verified → Legendary), and earned badges
- Weekly and monthly XP totals (used for time-period leaderboard rankings)
- Total views across all your uploads
- Total votes received across all your Showdown entries
- Total votes you have cast in Showdowns
- Total Showdown wins (used to track contest win badge progress)

**Usage Data**
- Features you use and how often
- Upload performance metrics (views, likes received)
- Notification interaction (opened / dismissed)
- Session activity and last-seen timestamps

**Push Notification Tokens**
- OneSignal Player IDs (per device, for delivering push notifications). Multiple devices are supported — each device registers its own Player ID, which is linked to your account in our database. Player IDs are removed from our systems immediately upon logout or account deletion.

**Error & Crash Data**
- Crash reports and unhandled exceptions are sent to Sentry (our error monitoring provider) in production. This data includes the error type, stack trace, app version, device OS, and anonymised session context. It does not include your name, email, or message content. Sentry is disabled in development builds.

---

## 3. How We Use Your Information

| Purpose | Data Used | Legal Basis |
|---------|-----------|-------------|
| Creating and managing your account | Account data, profile info | Contract performance |
| Verifying your age for Showdown eligibility | Date of birth | Contract performance + Legal obligation |
| Delivering the creative feed and content discovery | Content, profile data, location/country | Contract performance |
| Delivering direct messages between users | Message content, metadata | Contract performance |
| Running Showdowns and paying cash prizes | Contest data, prize payment details | Contract performance |
| Determining Showdown eligibility by country | Country (ISO code) | Legal obligation |
| Fraud and vote manipulation prevention | Hashed IP, voting history, account activity | Legitimate interests |
| Safety moderation and Community Guidelines enforcement | Reports, content, message content (reported only) | Legal obligation + Legitimate interests |
| Sending push notifications and in-app notifications | Player IDs, notification preferences | Consent (withdrawable in Settings) |
| Sending transactional emails (OTP codes, alerts) | Email address | Contract performance |
| Generating leaderboards and ranking data | XP, gamification data | Legitimate interests |
| Subscription management | Subscription status, expiry date | Contract performance |
| Improving the App and fixing bugs | Crash data (Sentry), usage data | Legitimate interests |
| Complying with Nigerian financial and tax law (prize payments) | Bank details, Tax ID | Legal obligation |
| Complying with applicable data protection law (NDPA 2023) | Account data, age data | Legal obligation |

**What we do NOT do:**
- We do not sell your personal data to any third party.
- We do not read, scan, or analyse private message content for advertising, machine learning, or analytics. Message content is used solely to deliver it to the recipient and for safety enforcement when a message is reported.
- We do not use your private messages to train algorithms or personalise your feed.
- We do not share your prize payment details with any third party other than what is required to complete the payment under Nigerian law.
- We do not collect precise GPS coordinates beyond onboarding — location is captured once, geocoded, and the raw coordinates are not retained.

---

## 4. Sharing Your Information

We do not sell your personal data. We share your information only in the following circumstances:

**With other users (by design)**
- Your profile (username, avatar, creative category, follower/following counts, XP tier) is visible to all signed-in users.
- Your uploads, comments, and Cluster activity are visible according to each feature's scope (Cluster-scoped posts are only visible to Cluster members).
- Your Leaderboard rank, XP tier, and badge count are publicly visible on your profile.
- Your username appears alongside contest entries during Showdowns.

**With our service providers (data processors)**
The following third-party providers process personal data on our behalf under data processing agreements with appropriate security standards:

| Provider | Purpose | Data Processed |
|----------|---------|---------------|
| Google Firebase / Firestore | Primary database, authentication, real-time data | All user account and content data |
| Cloudflare Stream | Video hosting and HLS streaming | Videos you upload |
| Cloudflare Images | Image CDN and delivery | Photos you upload |
| Cloudinary | Legacy media hosting (existing uploads only — new uploads use Cloudflare) | Videos/photos uploaded before migration to Cloudflare |
| RevenueCat | Subscription management and purchase validation | Subscription status, expiry date, purchase date |
| OneSignal | Push notification delivery | Player IDs; notification content (including message previews if enabled) |
| Resend | Transactional email delivery | Email address, OTP codes, alert content |
| Sentry | Error and crash monitoring | Crash reports, stack traces, app/device metadata (no PII) |
| ipify.org | Public IP lookup (used for fraud detection) | Your device's public IP at the time of the request |
| Apple / Google | Payment processing for Spektt Pro | Subscription purchase data (handled entirely by Apple/Google — Spektt does not receive payment card data) |

**With law enforcement or regulators**
We may disclose your information if required by law, court order, or governmental authority, or if we believe in good faith that disclosure is necessary to protect our rights, prevent fraud, or protect the safety of our users.

**In connection with a business transfer**
If Axlume Tech Limited is acquired, merged, or transfers its assets, your data may be transferred to the acquiring entity. We will notify you before your data becomes subject to a different privacy policy.

---

## 5. Direct Messaging

### 5.1 How Messaging Works
Spektt includes a direct messaging (DM) feature. To start a conversation, you must send a message request that the recipient must accept before a full conversation can begin. This protects all users from unsolicited contact.

### 5.2 What We Store
- The full content of messages you send and receive
- The request message text (the first message used to initiate a conversation)
- Conversation metadata: participant identities, timestamps, read status, unread counts, and conversation status (pending / accepted / declined / blocked)
- Block and report actions taken within conversations

### 5.3 Who Can Read Your Messages
Your messages are accessible only to:
- You and the other participant in the conversation
- Authorised Spektt safety moderators, **only** when a message has been reported by a participant

We do not proactively read or scan private conversations. Moderator access is logged internally for audit purposes.

### 5.4 Push Notification Previews
If you have enabled push notifications, a short preview of new messages is included in the notification payload delivered through OneSignal. You can disable message preview notifications in your device Settings or in the App's Notification Settings to prevent message content from being transmitted through the notification system.

### 5.5 Anti-Spam Protection
To prevent harassment, a user whose message request you decline cannot contact you again for 30 days. This declined-request record is automatically purged after the 30-day cooldown expires. Users you block cannot message you at all.

### 5.6 Message Deletion
- **Delete a single message**: Long-press the message → "Delete." The message is replaced with "This message was deleted" for both participants and is permanently purged from our servers within 30 days.
- **Delete a conversation**: Tap the conversation options → "Delete Conversation." It is removed from your view immediately and permanently deleted from our servers within 30 days.

### 5.7 Minor Users
Users identified as minors may have restricted access to direct messaging to protect younger users from unsolicited contact. Age determination is based on the date of birth you provide during account setup.

---

## 6. Clusters (Community Groups)

When you join or create a Cluster, we collect and store your membership record, role, and join date. Posts you make within a Cluster are visible to all Cluster members. If you are banned from a Cluster, your membership record and ban reason are retained for moderation purposes.

If you are a Cluster admin, your username appears publicly as the administrator. Admin inactivity is monitored — after 30 days of inactivity you receive a warning notification; after 45 days, ownership is automatically transferred to the most senior moderator or longest-tenured member to protect the community you built.

Moderation actions taken within Clusters (bans, suspensions, content removals) are logged in an immutable audit trail, including the moderator's username, the reason, and the timestamp.

---

## 7. Showdowns and Prize Payments

Spektt hosts creative Showdowns — both Pulse (fan-voted, badge rewards) and Premium (fan votes + judge scores, cash prizes).

- **Entry data**: Your Showdown entry (the uploaded work, your username) is visible to all participants during the Showdown. Vote counts are hidden until the Showdown ends.
- **Judging**: If you are assigned as a judge, your individual scores are private until results are announced.
- **Results**: Winner usernames and placement are publicly announced. Your bank details and Tax ID are never publicly disclosed.
- **Prize claims**: If you win a cash prize in a Premium Showdown, you have 14 days to submit your claim. You must provide your bank name, account number, and account name. A Tax ID is optional but recommended. A **10% withholding tax** is deducted in line with Nigerian tax regulations before payment. Cash prize payments are currently available to Nigerian bank account holders only.
- **Forfeiture**: Unclaimed prizes are forfeited after 14 days. Forfeited prize records are retained for internal accounting.
- **Retention**: Prize payment details (bank info) are retained for the period required by Nigerian financial regulations after the payment is processed, regardless of account deletion.

---

## 8. Children's Privacy

Spektt is intended for users aged **13 and above**. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has created an account, we will delete that account and its associated data promptly.

For users aged 13–17 (minors), additional restrictions apply:
- Minors cannot enter any Showdown (Pulse or Premium)
- Direct messaging may be restricted for minor users
- Cash prize participation requires the user to not be flagged as a minor

Age determination is made based on the date of birth entered during account setup. If you believe a child under 13 has created an account, contact us at legal@spektt.com.

---

## 9. Your Rights

To exercise any of the rights below, contact us at legal@spektt.com with the subject line "Privacy Request."

### 9.1 Right to Access
You can request a copy of the personal data we hold about you.

### 9.2 Right to Correction
You can update most of your profile information directly within the App (Profile → Edit Profile or Settings). For data you cannot edit in-app, contact us.

### 9.3 Right to Deletion (Account Deletion)
You can delete your account at any time from **Settings → Delete Account**.

**How deletion works:**

1. **Grace period**: When you request deletion, your account is immediately locked and scheduled for permanent deletion in **30 days**. You will be logged out.
2. **Cancellation window**: If you log back in within 30 days, you can cancel the deletion and restore your account fully.
3. **Permanent deletion (after 30 days)**:
   - Profile information (name, username, email, avatar) is permanently erased
   - Uploads (photos and videos) are permanently deleted from our servers and Cloudflare CDN
   - Comments are anonymised — the text is erased but reply thread structure is preserved
   - Direct message conversations are deleted
   - Cluster memberships are removed
   - Following / follower relationships are removed
   - Firebase Authentication credentials are permanently deleted
   - A minimal ghost record (user ID only, no PII) is retained solely to preserve the integrity of audit logs and award records

Prize payment details are retained for as long as required by Nigerian financial regulations after payment, regardless of account deletion.

### 9.4 Right to Opt Out
- **Push notifications**: Disable in your device settings or in-app Notification Settings
- **Leaderboard participation**: Contact us to exclude your profile from public leaderboards
- **Analytics / crash reporting**: Sentry captures anonymised crash data only; contact us if you have concerns

### 9.5 Nigerian Users (NDPA 2023 / NDPR)
Under the Nigeria Data Protection Act 2023 and the NDPR, you have the right to:
- Know what personal data we hold about you
- Correct inaccurate data
- Request deletion of your data (see Section 9.3)
- Withdraw consent where consent is the legal basis
- Lodge a complaint with the Nigeria Data Protection Commission (NDPC) at ndpc.gov.ng

### 9.6 Other African and International Users (GDPR and equivalents)
If you are located in the European Economic Area or a jurisdiction with equivalent data protection law, you additionally have the right to data portability and to lodge a complaint with your local supervisory authority.

---

## 10. Data Retention

| Data Type | Retention Period |
|-----------|-----------------|
| Account profile data | Until account deletion (permanently erased after 30-day grace period) |
| Uploads (photos / videos) | Until deleted by you, or on account deletion |
| Comments | Anonymised ("[deleted]") on account deletion — thread structure preserved indefinitely |
| Direct messages | Until you delete them or your account is deleted |
| Deleted message content | Permanently purged within 30 days of deletion |
| Prize payment details (bank info) | Retained as required by Nigerian financial regulations (minimum 7 years) after payment |
| Contest entries (ended Showdowns) | Retained indefinitely as competition history |
| Gamification data (XP, badges, level) | Retained until account deletion |
| Moderation logs and reports | Retained indefinitely (audit trail integrity) |
| Appeals | Retained indefinitely (audit trail) |
| Push notification tokens (OneSignal Player IDs) | Cleared immediately on logout or account deletion |
| Declined message request data | Purged 30 days after the request was declined |
| Hashed IP address | Retained for the duration of the account |
| Crash data (Sentry) | Retained per Sentry's data retention policy (90 days by default) |

---

## 11. Data Security

We implement industry-standard security measures to protect your personal data:

- All data is stored in Google Firestore with strict security rules — clients can only read and write data they are explicitly authorised to access
- Passwords are handled entirely by Firebase Authentication and are never stored in plain text by Spektt
- API keys, Cloudflare tokens, RevenueCat keys, and other credentials are stored as server-side environment variables via EAS Secrets and are never exposed in the compiled App
- Media files are served through Cloudflare's CDN, which provides DDoS protection and encrypted delivery (HTTPS/TLS)
- Admin and moderator actions are logged in an immutable audit trail in Firestore
- IP addresses used for fraud detection are stored only as SHA-256 hashes — the raw IP is never persisted

No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security.

---

## 12. International Data Transfers

Spektt is operated by Axlume Tech Limited in Nigeria. Your data is primarily stored on Google Firebase / Firestore servers, which may be located in the United States or European Union depending on Firebase's infrastructure. Cloudflare's CDN distributes media globally. OneSignal, Resend, RevenueCat, and Sentry also process data on servers outside Nigeria.

By using the App, you consent to the transfer of your information to these servers, which may be in countries with different data protection laws than your own. Where required by law, we implement appropriate safeguards for such transfers.

---

## 13. Legal Basis for Processing (NDPA 2023 / GDPR)

| Processing Activity | Legal Basis |
|--------------------|-------------|
| Creating and maintaining your account | Contract performance |
| Delivering messages between users | Contract performance |
| Publishing uploads and content | Contract performance |
| Processing Showdown entries and paying prizes | Contract performance |
| Determining Showdown eligibility by country/age | Contract performance + Legal obligation |
| Safety moderation (reports, bans, suspensions) | Legal obligation + Legitimate interests |
| Preventing fraud and vote manipulation | Legitimate interests |
| Sending push notifications | Consent (withdrawable at any time in Settings) |
| Sending transactional emails (OTP, alerts) | Contract performance |
| Generating leaderboards and gamification rankings | Legitimate interests |
| Retaining prize payment details for tax compliance | Legal obligation (Nigerian financial regulations) |
| Retaining audit logs and moderation records | Legal obligation |
| Crash and error monitoring (Sentry) | Legitimate interests |

---

## 14. Third-Party Links

The App may contain links to external websites (e.g., Community Guidelines, Help Centre, Terms of Service on spektt.com). This Privacy Policy applies only to the Spektt App and the spektt.com website. We are not responsible for the privacy practices of third-party websites.

---

## 15. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. When we make material changes, we will:
- Update the "Last Updated" date at the top of this document
- Post the updated policy at spektt.com/privacy
- Where required by law, notify you via in-app notification or email

Your continued use of the App after the updated policy is posted constitutes your acceptance of the changes.

---

## 16. Contact Us

If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at:

**Email**: legal@spektt.com (subject: "Privacy Request")
**Website**: spektt.com/contact
**Company**: Axlume Tech Limited, Federal Republic of Nigeria

For Nigerian users, you may also contact the **Nigeria Data Protection Commission (NDPC)** at ndpc.gov.ng if you believe your rights under the Nigeria Data Protection Act 2023 have been violated.

---

## Appendix A — App Store Privacy Nutrition Label (Apple App Store Connect)

When submitting to the App Store, declare the following data categories:

| Data Type | Category | Linked to User | Used to Track |
|-----------|----------|---------------|---------------|
| Email address | Contact Info | ✅ Yes | ❌ No |
| Name | Contact Info | ✅ Yes | ❌ No |
| Phone number | Contact Info | ❌ Not collected | — |
| Photos / Videos | User Content | ✅ Yes | ❌ No |
| Messages | User Content | ✅ Yes | ❌ No |
| Gameplay / Activity (XP, badges, votes) | Usage Data | ✅ Yes | ❌ No |
| User ID | Identifiers | ✅ Yes | ❌ No |
| Device ID | Identifiers | ✅ Yes | ❌ No |
| Purchase history | Financial Info | ❌ Not collected by Spektt | — |
| Payment info (prize claims only) | Financial Info | ✅ Yes | ❌ No |
| Coarse location | Location | ✅ Yes (country/region) | ❌ No |
| Precise location | Location | ✅ Yes (onboarding only, not retained) | ❌ No |
| Crash data | Diagnostics | ✅ Yes (via Sentry, anonymised) | ❌ No |

---

## Appendix B — Google Play Data Safety Form

| Category | Data Type | Collected | Shared | Required / Optional |
|----------|-----------|-----------|--------|---------------------|
| Personal info | Name, Email, Date of birth | ✅ | ❌ | Required |
| Financial info | Bank details (prize winners only) | ✅ | ❌ | Optional (prize claim) |
| Location | Approximate location (country/region) | ✅ | ❌ | Optional (onboarding) |
| Photos and videos | User-uploaded media | ✅ | ❌ | Optional |
| Messages | DM content | ✅ | ❌ | Optional |
| App activity | Interactions, XP, gamification | ✅ | ❌ | Required |
| App info and performance | Crash logs (Sentry) | ✅ | ✅ (Sentry) | Required |
| Device or other IDs | Device ID | ✅ | ❌ | Required |

Data is encrypted in transit: ✅ Yes
Users can request deletion: ✅ Yes (Settings → Delete Account, or email legal@spektt.com)
