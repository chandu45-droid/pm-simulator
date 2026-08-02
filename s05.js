/* PM Simulator — scenario s05 data (finale). Loaded before engine. */
var SC_META5 = { h1:'Turant — a PM decision simulator', company:'Turant', tile:'TR', tagline:'“Turant mangao, turant paao.”', dashKicker:'Turant · Metrics', onepagerLabel:'Turant — company one-pager' };
var TIMES5 = ['10:10 AM','10:45 AM','11:20 AM','11:55 AM','12:30 PM'];

var P5 = {
  ishaan:{full:'Ishaan Verma', n:'Ishaan Verma', r:'FOUNDER &amp; CEO', a:'IV', c:'var(--ink-900)'},
  meher:{full:'Meher Kaur', n:'Meher', r:'SUPPORT LEAD', a:'M', c:'#BE185D'},
  devraj:{full:'Devraj Nair', n:'Devraj', r:'VP ENGINEERING', a:'D', c:'#6D28D9'},
  nisha:{full:'Nisha Bhatt', n:'Nisha', r:'HEAD OF COMMUNICATIONS', a:'N', c:'#B45309'},
  priyank:{full:'Priyank Oza', n:'Priyank', r:'SECURITY ENGINEERING', a:'P', c:'#0E7490'},
  ananya:{full:'Ananya Krishnan', n:'Ananya', r:'LEGAL', a:'A', c:'#15803D'},
  kavya:{full:'Kavya Suresh', n:'Kavya', r:'INDEPENDENT SECURITY RESEARCHER', a:'K', c:'#57534E'},
  radhika:{full:'Radhika', n:'Radhika', r:'NABHA CAPITAL', a:'R', c:'#1D4ED8'}
};

var NOTIFS5 = [
  {icon:'<span class="appicon" style="background:var(--ink-700)" aria-hidden="true">★</span>', src:'Play Store', time:'09:12', body:'New review on Turant: ★☆☆☆☆ “my address and phone number are visible to strangers?!”'},
  {icon:'<span class="appicon disc" style="background:var(--gain-700)" aria-hidden="true">MK</span>', src:'Meher Kaur (Support)', time:'09:40', body:'our ticket queue just tripled in 20 minutes, can you look at this before the call'},
  {icon:'<span class="appicon disc" style="background:var(--ink-900)" aria-hidden="true">IV</span>', src:'Ishaan Verma (Founder/CEO)', time:'10:05', body:'Need you in a room before Nabha calls. Now. →'}
];

var CEO_BUBBLES5 = [
  'Morning — not really, anymore. A security researcher just posted a thread with screenshots of other people’s orders — names, addresses, phone numbers — and it’s doing real numbers on X right now. Nabha’s diligence lead already texted me asking if we’re “aware of the Turant leak.”',
  'Term sheet signs tomorrow. I’ve got Radhika from Nabha on a call at 12:30 and I am not walking into that call guessing. I need to know what actually happened — not what Twitter thinks happened, not whatever answer gets me off this call fastest. What leaked, how much, and what we’re doing about it.',
  'You own this system. Nobody in that room will understand it better than you do by 12:30. Go find out. I’ll see you there with whatever you’ve got.'
];

var ONEPAGER5 = [
  ['What','10-minute delivery of groceries and daily essentials via a dark-store network. Hyperlocal catalogue tuned per pincode, built for patchy tier-2 connections.'],
  ['Scale','<strong>6.2M registered users</strong> · 2.1M monthly active · 85 dark stores across 14 cities · well over 125,000 orders/day across all markets.'],
  ['Funding','Series C, <strong>₹410 Cr</strong>, led by Nabha Capital (fictional). Term sheet signing scheduled for tomorrow. Investor ask this round: prove Turant can scale dark-store density into tier-2 without burning the trust that got it here.'],
  ['Why we win','The fastest reliable delivery window in tier-2 towns larger players haven’t built dark-store density in yet; a single delivery address per account, tied to phone-number login, that most users never change.'],
  ['Users','Repeat daily-essentials buyers running the same weekly grocery order — for most accounts, phone number plus delivery address is effectively a household’s real-world identity.'],
  ['You','Senior PM, Trust &amp; Platform. <strong>You own the order-tracking and account system the researcher’s thread is about.</strong>']
];

var DASH_ROWS5 = function(){ return [
  ['X/Twitter mentions of “Turant” (rolling 3hr)','41,000','~800', chip('loss','up','spiked','spiked — much worse'), false],
  ['App Store rating (7-day)','2.1★','4.2★', chip('loss','down','−2.1★','down 2.1 stars — worse'), false],
  ['Uninstalls today','38,000','~1,200/day avg', chip('loss','up','~31x normal','up sharply — worse'), false],
  ['Support tickets (last 3hr)','2,240','~90/3hr avg', chip('loss','up','~25x normal','up sharply — worse'), false],
  ['Series C term sheet','Signing scheduled tomorrow','—', chip('flat','','at risk','term sheet signing at risk'), false],
  ['DPDP breach-notification clock','Started ~90 min ago','—', chip('flat','','clock running','breach-notification clock running'), false]
];};

var INBOX5 = [
  {id:'ishaan', p:P5.ishaan, time:'10:05 AM', prev:'Need you in a room before Nabha calls. Now. →',
   bubbles:CEO_BUBBLES5},
  {id:'nisha', p:P5.nisha, time:'9:58 AM', prev:'before the call — I want everyone aligned on the line: no financial data was exposed, issue identified and resolved',
   bubbles:['Before the call — I want everyone aligned on the line: no financial data was exposed, the issue is identified and resolved. That’s true, and I think leaning into it now, quickly, is what actually protects us here. If we hedge or go quiet, Twitter fills in the blank for us, and their version will be worse than ours.']},
  {id:'devraj', p:P5.devraj, time:'10:02 AM', prev:'I don’t want us to overreact before the call, this looks like one researcher and six screenshots to me',
   bubbles:['I don’t want us to overreact before the call. From what I’ve seen, this is one researcher who tested a handful of order IDs by hand and posted six screenshots — that’s a real bug, and we patched the auth check within forty minutes of her tweet. I’d be careful about assuming this is bigger than what’s actually on the thread until someone shows me evidence it is.']},
  {id:'meher', p:P5.meher, time:'10:04 AM', prev:'sorry to add to the pile, but there’s a small pattern in the tickets that isn’t just fear',
   bubbles:['Sorry to add to the pile before the call, I know everyone’s underwater — tickets are past 2,000 and climbing and my team is just trying to keep the queue from collapsing. Most of it is fear, which is fine, we can handle fear. But there’s a small pattern in there, maybe a dozen tickets, that isn’t fear — people describing calls that reference their actual recent order. I haven’t had time to write it up properly. I just don’t want it to get lost under the bigger number.']}
];

var MENU_ORDER5 = ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','G11','G12'];

var MENU_BY_ID5 = {
  G1:{t:'Read the viral thread on X.', s:'Every screenshot, every reply, every quote-tweet.', short:'The viral thread', skin:'dump', group:'data'},
  G2:{t:'Pull the vulnerable endpoint’s code and check its auth logic with Engineering.', s:'What does this endpoint actually expose — and what does it not?', short:'Endpoint code &amp; auth logic', skin:'chat', group:'systems', ripple:{who:'devraj', text:'“the fix is simple, forty minutes tops. I just want to understand the blast radius first.”'}},
  G3:{t:'Check today’s App Store rating and uninstall numbers.', s:'How bad does this look from the outside, right now?', short:'App Store rating &amp; uninstalls', skin:'dump', group:'data'},
  G4:{t:'Ask Security to pull the access logs for anomalous request patterns.', s:'Before the researcher’s post — what was already happening?', short:'Anomalous access-log patterns', skin:'chat', group:'systems', ripple:{who:'priyank', text:'“running the count now — give me a minute, this might be bigger than the thread.”'}},
  G5:{t:'Sit in on the Comms Lead’s crisis-statement pitch.', s:'Hear the proposed line straight from Nisha, in person.', short:'Comms’ crisis-statement pitch', skin:'chat', group:'people'},
  G6:{t:'Pull Support’s ticket volume and pattern since the thread went viral.', s:'Not just the count — what are people actually saying?', short:'Support ticket volume &amp; pattern', skin:'dump', group:'data', ripple:{who:'meher', text:'“these aren’t random. people are describing their exact orders.”'}},
  G7:{t:'DM the security researcher directly.', s:'Ask what she actually found — and how she found it.', short:'DM the researcher', skin:'chat', group:'people'},
  G8:{t:'Audit the endpoint’s rate-limiting and monitoring/alerting setup.', s:'How would anyone even know if this were still happening?', short:'Rate-limiting &amp; alerting audit', skin:'dump', group:'systems'},
  G9:{t:'Ask Legal to check the funding term sheet’s material-adverse-change clause.', s:'Does a security incident put tomorrow’s signing at risk?', short:'Term sheet MAC clause', skin:'chat', group:'people'},
  G10:{t:'Ask Legal to walk through exactly what India’s data-protection law requires here, and by when.', s:'What’s the real clock, and who actually has to be told?', short:'DPDP notification requirements', skin:'chat', group:'people'},
  G11:{t:'Look into the specific account whose order got screenshotted.', s:'Who is she, and what does she say happened?', short:'The screenshotted account', skin:'dump', group:'data'},
  G12:{t:'Ask Security to trace where the anomalous scraping traffic is actually coming from.', s:'If it isn’t the researcher, who is it?', short:'Trace the scraping traffic', skin:'chat', group:'systems'}
};

var FOPTS5 = [
  {id:'F1', short:'Laid out the real picture', t:'“I know exactly what was exposed, how much, and what we’ve already done about it — here’s the real picture.”', b:'Lay out the mechanism, the confirmed data fields, the scrape scope from logs, and the DPDP notification already underway — if you have them.'},
  {id:'F2', short:'Framed it as a shared, quiet fix', t:'“It’s a shared gap between product and security — we’re fixing both, quietly, together.”', b:'Frame it as a joint, no-blame correction, handled internally without a big public statement.'},
  {id:'F3', short:'Blamed Engineering’s process gap', t:'“Engineering shipped a refactor without an auth check — that’s a review-process gap on their side, and we’re addressing it.”', b:'Position it as Engineering’s process failure.'},
  {id:'F4', short:'Asked for more time', t:'“I need the rest of today before I give you a number I’d stake this on.”', b:'Ask for more time before committing to a read.'}
];

var BAND_TITLE5 = { A:'Found the scrape under the screenshots.', B:'Saw enough to worry, not enough to prove it.', C:'Reacted to the screenshots, missed the scrape.' };

var BAND_TEXT5 = {
  A:'You did the thing this scenario was built to reward: you refused to let six viral screenshots define the size of the problem. A researcher’s proof-of-concept and a nineteen-day silent scrape can share the same vulnerability and be completely different emergencies — one is contained and embarrassing, the other is a data set that’s probably already for sale. You pulled the access logs, found the pattern the researcher never claimed to have run, and understood that the six examples everyone was staring at were the least of it. That’s the skill this whole day was testing: knowing that “here’s proof it’s broken” and “here’s how much damage is already done” are two different questions — and that the log file answers the second one, not the thread.',
  B:'You picked up real signal — the ticket pattern, maybe the researcher’s own account of what she tested, maybe a first look at the logs — but you didn’t fully connect the size of the silent scrape to the credibility of what you said in the room. That gap is specific and common: it’s easy to sense that six screenshots can’t be the whole story, much harder to prove exactly how much bigger the real number is before someone asks you to defend it out loud. The instinct was sound. What separates this from the top band is having the evidence chain finished — the log pattern, the scale, the likely destination — before you’re the one holding the phone.',
  C:'This is exactly how a real incident gets worse under time pressure: not through anyone lying, but through a room full of confident, partially-true answers to the wrong question. Reading the viral thread, sitting in on the reassuring pitch, checking whether the term sheet protects the round — all of it feels like responding to a crisis, and none of it touches the number that actually mattered: how much of the database is already gone, and to whom. The tell was sitting in the access logs the whole time, unread, while the six screenshots did all the talking. Next time a breach looks “contained” because the public evidence is small, ask the harder question first: what’s the difference between what got shown and what got taken — and has anyone actually checked?'
};

var PICK_LINES5 = {
  G1:'A tour of the loudest reactions to a problem you still haven’t measured. Zero information about what actually happened.',
  G2:'Confirms the mechanism and, just as important, what it doesn’t touch — no payment data, no passwords. The rumor and the reality split apart right here.',
  G3:'Confirms the PR damage is real and happening fast. Doesn’t tell you what was actually accessed or by whom.',
  G4:'This is where the real incident lives: a single automated client had already pulled 2.1 million of 2.4 million orders across nineteen days, invisible until someone finally looked.',
  G5:'The same reassuring line you already had in writing, delivered with more urgency. Urgency isn’t a new data point.',
  G6:'Real, and an early warning — a dozen tickets describing calls that reference exact recent orders. Small sample, but it’s the first sign the scrape isn’t just theoretical.',
  G7:'Confirms the six screenshots were a manually-tested proof-of-concept, not a scrape — and that Security sat on her responsible-disclosure email for four days before this went public.',
  G8:'Explains how a nineteen-day, 1,400-requests-a-minute scrape generated zero internal alerts. Doesn’t tell you what’s already happened as a result.',
  G9:'Useful and narrow: the round isn’t contractually hostage to this bug alone. Says nothing about what leaked or what the law requires you to do about it.',
  G10:'Turns a vague fear of “the regulator” into an actual clock and an actual population to notify — and ties the legal deadline directly to the same investigation the incident itself demands.',
  G11:'Confirms one real, embarrassing, high-visibility case. Tells you nothing about the other 2.1 million records nobody’s screenshotting.',
  G12:'The hardest evidence on the menu: the scraping traffic’s origin matches infrastructure previously linked to bulk data resale. This isn’t a curious researcher. It has the signature of a sale already in motion.'
};

var MISSED_CLAUSES5 = {
  G2:'exactly what the vulnerable endpoint does and doesn’t expose — the difference between “no financial data” and “no data at all” is the difference between a bad week and a false sense of security',
  G4:'the access logs, which is the one place the real scale of this was ever going to show up — six public screenshots were never going to be the whole number',
  G7:'what the researcher actually did versus what everyone assumed she did — and that Security had her disclosure email for four days before any of this went public',
  G10:'exactly what the law requires and by when — the legal deadline and the technical investigation are the same clock, and this scenario ran out on both if you never checked',
  G12:'where the scraping traffic actually came from — the detail that turns “this might leak someday” into “this has almost certainly already been sold”'
};

var SHARE_URL5 = 'https://chandu45-droid.github.io/pm-simulator/';

function revealBody5(id, idx){
  var t1 = TIMES5[idx+1];
  switch(id){
  case 'G1':
    return '<div class="dumpcard"><div class="dumphead">X / Twitter · viral thread</div><div class="dumpbody">'+
      '<div class="ticket">The thread has 41,000 likes and climbing. Six screenshots of other people’s orders — names, addresses, phone numbers. Replies range from panicked to gleeful (“lol love this for them”) to a couple of minor influencers filming “is my data safe” reaction videos. Someone’s already made a meme.</div>'+
      '</div></div>'+
      '<div class="marginnote">None of it tells you what actually happened, how much data moved, or whether it’s still moving. It’s the loudest room in the building and the least informative one. No new information about Turant’s systems. One pick spent.</div>';
  case 'G2':
    return groupHTML(P5.priyank, 'pulls up the code with you', [
      '<code>GET /api/order/track/{orderId}</code> returns the order’s customer name, phone number, delivery address, item list, and dark-store ID — with no check that the requester is logged in as, or authorized for, that order. Any sequential order ID returns a full record.',
      'What it does <strong>not</strong> return: payment details (card data never touches Turant’s own servers — it’s tokenized at PayLoop, the payment processor) or login credentials (a separate, hashed auth service this endpoint has no access to).',
      'Priyank’s note: “Whatever this is, it isn’t a financial-data breach and it isn’t a credential breach. It’s ‘anyone can read anyone’s name, phone number and home address by changing a number in a URL.’ That’s bad enough on its own — it doesn’t need to be dressed up as worse than it is, and it doesn’t need to be dressed down as smaller than it is either.”'
    ]);
  case 'G3':
    return '<div class="dumpcard"><div class="dumphead">App Store · today’s numbers</div><div class="dumpbody">'+
      '<div class="ticket">App Store rating (7-day): 2.1★, down from 4.2★ yesterday. 38,000 uninstalls logged since 9 AM against a normal daily average of ~1,200.</div>'+
      '</div></div>'+
      '<div class="marginnote">The damage is real and it’s happening in public. It doesn’t tell you what was actually accessed, by whom, or for how long — only that people are reacting fast to what they’ve already seen on Twitter.</div>';
  case 'G4':
    return groupHTML(P5.priyank, 'pulled the access logs', [
      'Pulled the access logs back to when this endpoint’s current version shipped — 19 days ago, an unreviewed side effect of a live-tracking redesign that dropped the ownership check nobody caught in review.',
      'One client — a single automated source, not the researcher — has been sequentially requesting order IDs at a steady pace for all 19 days: roughly 1,400 requests a minute, nearly continuous. It has successfully returned records for approximately <strong>2.1 million of the 2.4 million orders</strong> placed since the endpoint went live — about 87% of everyone who ordered from Turant in that window.',
      'Priyank’s note: “The six screenshots on Twitter aren’t the exposure. They’re a tourist who found the unlocked door after someone else had already been living in the house for nineteen days.”'
    ]);
  case 'G5':
    return groupHTML(P5.nisha, 'live and confident', [
      '“Here’s the line — ‘no financial data was exposed, the issue has been identified and resolved.’ It’s true, it’s calm, and it gets ahead of the cycle before the investor call. I’d rather we say something in the next twenty minutes than let Twitter finish the sentence for us.”'
    ]) + '<div class="marginnote">A reasonable instinct and zero new data — the same claim you could already infer from the thread itself, delivered with more urgency. No new information. One pick spent.</div>';
  case 'G6':
    return '<div class="dumpcard"><div class="dumphead">support tickets · last 3 hours</div><div class="dumpbody">'+
      ticketB('“is my data out there? I just want to know if I should be worried.”','— typical fear ticket, one of hundreds')+
      ticketB('“Your order of atta and milk, ₹640, delivered yesterday — we need to verify your payment.” Got a call like this an hour ago and I never gave anyone my number for this.','— one of ~12 similar reports')+
      '</div></div>'+
      '<div class="marginnote">Ticket volume is up from ~90/3hr to 2,240 in the last three hours. Most describe fear. A smaller group — around a dozen so far — describe something more concrete, which reads like an early data-driven scam attempt, not a coincidence. Real, and worrying. It doesn’t tell you the scale of what’s actually out there.</div>';
  case 'G7':
    return groupHTML(P5.kavya, 'replying to your DM', [
      '“I found it by watching the app’s own network calls — nothing exotic. I manually tested about 18 order IDs to confirm the pattern held, screenshotted six for the thread, and stopped. I did not scrape your database — that’s not the kind of testing I do, and I don’t have the infrastructure to run something like that for 19 days straight even if I wanted to.',
      'I emailed security@turant.in four days ago with a standard responsible-disclosure report and a stated grace period. I got an auto-reply, then silence. I posted publicly today because the grace period lapsed — not because I wanted the noise.”'
    ]) + '<div class="marginnote">Confirms the visible six-screenshot thread is a proof-of-concept, not the real exposure — and that Security had her report, unactioned, four days before this became public.</div>';
  case 'G8':
    return '<div class="dumpcard"><div class="dumphead">rate-limiting &amp; monitoring audit</div><div class="dumpbody">'+
      '<div class="ticket">The endpoint has no rate limiting and no anomaly alerting configured — a sustained, obviously non-human request pattern at 1,400/min for 19 days generated zero internal alerts. Monitoring exists for payment and login systems; this endpoint was added post-launch and never onboarded to it.</div>'+
      '</div></div>'+
      '<div class="marginnote">Explains how a 19-day scrape went unnoticed. Doesn’t tell you what’s already happened as a result of it.</div>';
  case 'G9':
    return groupHTML(P5.ananya, 'on the term sheet', [
      '“I checked. There’s no data-breach-specific material-adverse-change carve-out in Nabha’s draft — it’s the standard broad-language kind, and a single security incident, disclosed and handled competently, doesn’t automatically trigger it. Nothing here gives them a contractual exit on this alone.”'
    ]) + '<div class="marginnote">Useful to know the round isn’t legally hostage to this bug by itself. It says nothing about what actually leaked, how much, or what the law requires you to do about it. If you stop here, this becomes the reassurance you take into the 12:30 call.</div>';
  case 'G10':
    return groupHTML(P5.ananya, t1, [
      '“Under the DPDP Act, a ‘personal data breach’ is broad — unauthorized access to personal data, full stop, regardless of whether it’s ‘sensitive’ in the way people assume. Name, phone number and address all qualify. Our outside counsel’s read is that once a breach is confirmed, we’re required to notify the Data Protection Board and affected individuals without unreasonable delay — our own internal target for that has always been 72 hours from confirmation, not from when the story went public, and not tied to tomorrow’s signing.',
      'The number that matters for the filing isn’t the six people on Twitter, and it isn’t ‘all 6.2 million users’ as a defensive over-notification either — it’s whoever the logs actually show was accessed. Get me that number and I can start the notification today.”',
      'Ananya’s note: “The investigation and the legal obligation are the same task, not two separate ones. Whoever scopes the breach accurately is also the one who keeps us inside our own deadline.”'
    ]);
  case 'G11':
    return '<div class="dumpcard"><div class="dumphead">the screenshotted account</div><div class="dumpbody">'+
      '<div class="ticket">The most-quoted screenshot belongs to a mid-tier Bengaluru food YouTuber (140K subscribers), who confirms in a reply that yes, that’s her real order, her real address, and she’s furious. She’s since posted a follow-up video.</div>'+
      '</div></div>'+
      '<div class="marginnote">It’s real, embarrassing, and driving a meaningful share of the thread’s reach. It’s also one account — it tells you nothing about the other 2.1 million.</div>';
  case 'G12':
    return groupHTML(P5.priyank, 'tracing the scraping traffic’s origin', [
      'The requests all originate from a hosting block registered to a commercial data-aggregation provider — the same infrastructure flagged last year by two other Indian companies’ security teams after their own customer databases turned up for sale on data-broker channels. It isn’t the researcher’s infrastructure, and the request pattern (steady, 24/7, zero variation) doesn’t match a curious individual or a rival’s engineering team running a one-off test.',
      'Priyank’s note: “This has the signature of a professional bulk-data operation, not a prank. Operations like this typically package and sell what they’ve collected within days of finishing a pull — which means the realistic assumption isn’t ‘this might leak eventually.’ It’s that it most likely already has, and we’re finding out about our own breach from a screenshot instead of from whoever’s holding the data.”'
    ]);
  }
  return '';
}

var ORIENT_HTML5 = '<p>Six screenshots of other people’s orders are going viral. Your Series C term sheet signs tomorrow.</p>'+
  '<p>You’re the Senior PM who owns order tracking at <strong>Turant</strong> — a 10-minute grocery delivery app across India’s tier-1 and tier-2 cities. A security researcher just posted proof that anyone can view another customer’s name, phone number and home address by changing a number in a URL. It’s trending. Your app rating is cratering. And in a couple of hours you’re in a call with the lead investor on a funding round that closes tomorrow.</p>'+
  '<p>You have until 12:30 PM to find out what actually happened — not what the six screenshots show, not what makes the next phone call easier — before you’re the one explaining it.</p>';
var TRUTH_HTML5 = '<div class="dsec"><div class="kicker">What was actually true</div>'+
    '<p>The vulnerability itself was simple and real: <code>GET /api/order/track/{orderId}</code> returned a customer’s name, phone number, delivery address and order contents to anyone who asked for that order ID — no login, no ownership check. It shipped 19 days ago as an unreviewed side effect of a live-tracking redesign. It never touched payment data (tokenized at a separate processor) or passwords (a separate, hashed auth store) — so the frightened rumor that card numbers were exposed was never true, and the person who said so with confidence, Nisha, was right about that piece of it.</p>'+
    '<p>What made this the deep end wasn’t the bug — IDOR-class vulnerabilities are a known, common failure mode, and this one was patchable within the hour once someone looked. What made it dangerous was the gap between what was visible and what had actually happened. The viral thread showed six screenshots, gathered by an independent researcher who manually tested about eighteen order IDs, found the pattern, and — after security@turant.in sat on her responsible-disclosure email for four days — posted publicly rather than escalate a second time into silence. Read only the thread, and this looks like a contained proof-of-concept: one careful researcher, six examples, patched and over.</p>'+
    '<p>The access logs told a different story. A single automated client, running continuously for the full 19 days the endpoint had been live, had already pulled records for roughly 2.1 million of the 2.4 million orders placed in that window — 87% of everyone who used Turant since the bug shipped. No rate limit and no anomaly alert caught it, because the endpoint had never been onboarded to the monitoring built for payment and login systems. And the traffic’s origin — a hosting block previously linked to bulk personal-data resale — meant this almost certainly wasn’t curiosity. It had the signature of a professional operation, the kind that typically packages and sells what it collects within days of finishing a pull. The realistic read wasn’t “this might leak.” It was that it most likely already had, three weeks before anyone in the building knew to look.</p>'+
    '<p>Devraj wasn’t lying — he genuinely hadn’t looked at the logs yet, and “one researcher, six screenshots, patched in forty minutes” was a plausible, comforting story that happened to be true about the visible ten percent of the incident and silent about the other ninety. Nisha wasn’t lying either — “no financial data was exposed” was accurate as far as it went, and saying it fast is a defensible comms instinct in most crises. What both of them were doing was answering the question the room was already asking — is this the disaster Twitter says it is — instead of the question that actually mattered: how much of this has already left the building, and who’s holding it now. Meher’s ticket pattern was the first real, if small, evidence that the answer was “more than a handful” — a dozen customers describing calls that referenced their exact recent orders, days before anyone connected it to a scrape instead of a coincidence.</p></div>';
var FOOTER_HTML5 = '<footer class="sitefooter">Turant, Nabha Capital and PayLoop are fictional. Inspired by patterns common in Indian quick-commerce operations and IDOR-class API vulnerabilities generally; no real incident is depicted.<br>Built in India · A structured-debrief simulator — no AI grades your words.</footer>';
var PTS5 = {G2:3,G4:3,G7:3,G10:3,G12:3,G3:1,G6:1,G8:1,G11:1,G1:0,G5:0,G9:0};

var DECISION_INFORMED_IDS5 = ['G4','G10','G12'];

var DECISION_OPTIONS5 = {
  D1: {short:'Full public disclosure now', t:'Full public disclosure now, before forensics finish confirming the number.', b:'“Post a public statement now stating that a significant share of the order database was likely exposed, apologize, commit to full transparency, and let the DPDP notification follow immediately after.”'},
  D2: {
    default: {short:'Reprice the response on instinct', t:'Reprice the response on instinct.', b:'“Something about ‘patch first, then figure out who to tell’ feels right. Notify based on what’s visible and move fast.”'},
    informed: {short:'Patch, scope from logs, notify accordingly', t:'Patch, scope the real exposure from logs, notify accordingly.', b:'“The auth-check fix is already live. In parallel, use the log data to identify exactly who was affected, notify them and the Data Protection Board on that scope, and put out a statement that separates the confirmed facts — what data, roughly how many, what’s being done — from what’s still being verified.”'}
  },
  D3: {short:'Hold everything for a full audit', t:'Hold all external communication until a full external forensic audit completes.', b:'“Pause everything customer- and press-facing. Bring in an outside forensic security firm, wait for their complete findings before saying or notifying anything.”'},
  D4: {short:'Fast, reassuring statement now', t:'Fast, reassuring statement now; move on before the story gets bigger.', b:'“Release Nisha’s draft immediately: confirm the vulnerability, state clearly that no financial data or passwords were exposed, say it’s been patched, and close the loop.”'},
  D5: {short:'Loop in the investor first', t:'Loop in Nabha’s partner before finishing the notification track.', b:'“Call Radhika directly, walk her through the situation before you’ve locked the notification scope, and ask how she’d like it handled ahead of tomorrow’s signing.”'}
};

var DECISION_CONSEQUENCE5 = {
  D1: function(){
    return '<p>Radical honesty earns short-term user trust — sentiment on X shifts within hours, the “cover-up” narrative preempted. But the exact number wasn’t engineering-verified end-to-end yet when you published it, and two days later, when the confirmed figure differs from your own estimate, the correction reads publicly as “they didn’t actually know when they said it” — which costs more credibility over the following weeks than a slightly later, fully accurate disclosure would have. Nabha’s diligence lead flags the revision internally as a governance concern ahead of tomorrow’s signing, even though the instinct to disclose was the right one.</p>';
  },
  D2: {
    informed: function(){
      return '<p>Slower than a same-hour blanket statement, but the number you publish is the number that survives scrutiny — no walk-backs, no revisions, and it maps exactly to who legally must be notified. Radhika tells Ishaan afterward that the technical clarity — not the speed — is what kept the term sheet on track. The DPDP notification goes out inside your own 72-hour target, scoped to the real population, not a guess.</p>'+
        cqBubble(SC().cast.nisha, '“This is the version of ‘we handled it’ that actually holds up when someone checks.”');
    },
    default: function(){
      return '<p>You correctly sense the right shape of a response — patch, then scope, then notify — but without the log data, “scope” quietly becomes “notify the six people the researcher screenshotted,” a massive undercount of the real exposure. It happens to look clean for a day or two. When the real scrape becomes public later — a data-broker listing surfaces, or a follow-up report runs the numbers you never pulled — your notification looks like it undersold the problem badly, even though your instinct to patch-then-scope was sound.</p>';
    }
  },
  D3: function(){
    return '<p>The audit takes 12–18 days to run properly. During that time Turant says nothing publicly while the viral thread keeps circulating unanswered, the DPDP notification clock runs out unmet — “without delay” doesn’t wait for an external audit’s convenience — and, if the data-broker read is right, the scraped records are already changing hands while the company stays silent by design. Silence reads worse than an imperfect early answer, and Nabha’s counsel flags the missed notification window as a real legal exposure ahead of tomorrow.</p>';
  },
  D4: function(){
    return '<p>It works for about 36 hours — mentions taper, the rating stabilizes, tomorrow’s signing goes ahead on schedule. But it was written before anyone checked the access logs, and “issue resolved” implicitly claims the exposure was limited to the six screenshotted orders. When the scrape becomes public later, “issue resolved” from three weeks ago reads as either negligent or dishonest — and the Data Protection Board’s read on a known-but-undisclosed gap between what you said and what your own logs already showed is considerably worse than the original bug.</p>';
  },
  D5: function(){
    return '<p>It reads, for about ten minutes, like smart relationship management — until Radhika’s first question is whether the Data Protection Board’s been notified, and the honest answer is no, because that work isn’t done. Managing the investor relationship ahead of the actual incident response reads to her not as competence but as priorities in the wrong order — protecting the round before protecting the people whose data is out.</p>';
  }
};

var DECISION_PTS5 = {D1:3, D2:{informed:5, default:1}, D3:2, D4:1, D5:0};

var FRAMING_CONSEQUENCE5 = {
  F1: {
    informed: function(){
      return '<p>You lay out the mechanism, the confirmed data fields (no financial data, no passwords), the scrape scope from logs, and the DPDP notification already underway — in under a minute.</p>'+
        cqBubble(SC().cast.radhika, '“That’s the first straight answer I’ve gotten about a breach in eleven years of doing this. Send me the same paragraph in writing.”')+
        '<p class="closer">The signing proceeds.</p>';
    },
    default: function(){
      return '<p>You say the line, but you can’t back the number.</p>'+
        cqBubble(SC().cast.radhika, '“Two million — where does that come from?”')+
        '<p>You can’t answer precisely.</p>'+
        cqBubble(SC().cast.radhika, '“Then you don’t have a number, you have a headline. Get me the real one before tomorrow.”');
    }
  },
  F2: function(){ return '<p>Frame it as a joint, no-blame correction, handled internally without a big public statement.</p>'+
    cqBubble(SC().cast.radhika, '“Quiet is fine once I trust you have the number. Right now ‘quietly fixing it’ just tells me you don’t want to say the actual number out loud yet — and that’s exactly what makes a diligence team nervous two days from signing.”'); },
  F3: function(){ return '<p>Position it as Engineering’s process failure.</p>'+
    cqBubble(SC().cast.ishaan, '“Devraj’s team wrote the code. You own Trust &amp; Platform and reviewed the spec that endpoint shipped against — pointing at one desk in that room made you look careful for about ninety seconds and cost you something with Devraj that doesn’t come back easily.”')+
    '<p class="closer">Said privately, later.</p>'; },
  F4: function(){ return '<p>Ask for more time before committing to a read.</p>'+
    cqBubble(SC().cast.radhika, '“Tomorrow doesn’t move because you need today. I can go into signing with ‘still investigating’ in my own notes — I was hoping you’d give me something better than the same three words the thread already has.”'); }
};

var FRAMING_MOD5 = {F1:{informed:3, default:0}, F2:1, F3:-2, F4:-1};

var DECISION_LINE5 = {
  D1: 'Full disclosure now was honest in spirit and premature in substance — the number you published wasn’t the number the logs would later confirm, and a correction two days later cost you more credibility than a slightly later, fully accurate statement would have.',
  D2: {
    informed: 'The highest-skill move on the menu, and only available because you’d earned it: patch immediately, scope the real population from evidence, notify exactly who the law and the logs say to notify. Nothing you said needed a correction later.',
    default: 'The right shape of response, taken without the evidence to size it — so “scope it properly” quietly became “go by the six public screenshots,” which undercounts the real exposure by roughly two million records.'
  },
  D3: 'Waiting for a clean, complete, external answer sounds responsible and reads as silence — and silence past your own notification deadline is a second, self-inflicted problem sitting on top of the first one.',
  D4: 'The fast, reassuring line worked for about a day and a half. It was accurate about the six visible orders and silent about the log file nobody had checked yet — a gap that gets far more expensive the day someone else finds it first.',
  D5: 'Calling the investor before finishing the notification track reads, for about ten minutes, like relationship management. Then her first question is whether the Data Protection Board’s been notified, and the honest answer — not yet — makes the call itself the mistake.'
};

var FRAMING_LINE5 = {
  F1: {
    informed: 'You didn’t just have the right number — you could defend exactly where it came from, cold, in the room. That’s what makes a diagnosis land instead of reading as a guess with confidence attached.',
    default: 'The right instinct, said without a number behind it, doesn’t survive the first follow-up question — and an investor two days from signing asks follow-up questions for a living.'
  },
  F2: 'Framing it as a shared, quiet fix reads as competence internally and as evasion externally — “we’re handling it quietly” is exactly what someone says when they don’t want to say the actual number yet.',
  F3: 'Naming Engineering’s review gap wasn’t factually wrong. It landed as blame anyway, in a room where your own product owned the spec that endpoint shipped against — and Devraj noticed exactly whose name wasn’t in that sentence.',
  F4: 'Asking for the rest of the day is a legitimate request in most crises. This one has a legal clock and a signing date that don’t pause for it, and the person who absorbs that cost is the one who has to say “still investigating” out loud in your place.'
};

function s05Dims(picks, decision, framing, sc){
  function clamp(v){ return Math.max(1, Math.min(5, v)); }
  function has(id){ return picks.indexOf(id)>=0; }
  function count(ids){ var n=0; for (var i=0;i<ids.length;i++) if (has(ids[i])) n++; return n; }
  var SHARP = ['G2','G4','G7','G10','G12'];
  var TRAPS = ['G1','G5','G9'];
  var d2informed = decision==='D2' && sc.informed;
  var logical = clamp(1 + (has('G4')?1:0) + (has('G10')?1:0) + (has('G12')?1:0) + (decision==='D2'?1:0));
  var data = clamp(1 + Math.min(count(SHARP),4));
  var assumption = clamp(3 - count(TRAPS) + ((has('G2')||has('G7'))?1:0));
  var risk = clamp(1 + (has('G12')?2:0) + (has('G4')?1:0) + (decision==='D2'?1:0));
  var prioritization = decision==='D2' ? (d2informed?5:3) : decision==='D1' ? 4 : decision==='D3' ? 3 : decision==='D4' ? 2 : 1;
  var stakeholder = framing==='F1' ? (sc.informed?5:3) : framing==='F2' ? 4 : framing==='F4' ? 2 : framing==='F3' ? 1 : 1;
  var empathy = clamp(2 + (has('G6')?1:0) + (has('G7')?1:0) + (decision==='D2'?1:0));
  var biz = clamp(1 + (has('G4')?1:0) + (has('G10')?1:0) + (d2informed?2:0) + (decision==='D2' && !d2informed?1:0));
  var integrityFires = has('G9') && decision==='D5';
  var comm = clamp((framing==='F1' ? (sc.informed?5:3) : framing==='F2' ? 3 : framing==='F3' ? 2 : framing==='F4' ? 2 : 1) - (integrityFires?1:0));
  return [logical, data, assumption, risk, prioritization, stakeholder, empathy, biz, comm];
}

/* Registry facade — engine reads scenarios through this. */
window.PMSIM = window.PMSIM || { scenarios: {} };
window.PMSIM.scenarios['s05'] = {
  id: 's05',
  title: SC_META5.h1,
  company: SC_META5.company,
  tagline: SC_META5.tagline,
  tile: SC_META5.tile,
  dashKicker: SC_META5.dashKicker,
  onepagerLabel: SC_META5.onepagerLabel,
  times: TIMES5,
  cast: P5,
  ceoKey: 'ishaan',
  dashTitle: 'The Thursday dashboard',
  statusBarLabel: 'TurantOS',
  lockHint: 'Tap the message from Ishaan ↑',
  beginBarText: '12:30 PM — Ishaan’s chat pops up',
  orientHead: 'It’s Thursday, 10:05 AM.',
  clock: { day: 'Thursday', orientTime: '10:05 AM', lockStart: '09:12', lockReveal: '10:05', chatTime: '10:05 AM', deadline: 'until 12:30 PM' },
  decisionPrompt: "Radhika's dialling in in two minutes. What's the read?",
  pressureBeats: [
    { at: 1, src: '# turant-hq', body: 'The thread just crossed 40,000 views. Two tech reporters have quote-tweeted it.' },
    { at: 2, src: 'Support queue', body: 'Meher flags a dozen new tickets — customers describing calls that reference their exact recent orders.' },
    { at: 3, src: 'Legal', body: 'Nabha Capital’s counsel just asked, informally, whether this affects tomorrow’s signing.' }
  ],
  theories: {
    at: 2,
    prompt: 'If Ishaan asked for your gut call right now — what’s your working theory?',
    options: [
      'This is a contained proof-of-concept — one researcher, six screenshots, already patched.',
      'No financial data was exposed, so the real risk here is reputational, not data risk.',
      'The access logs likely show this has already been scraped at scale, not just glimpsed.',
      'This is mostly a PR problem — get ahead of the narrative first, investigate after.'
    ],
    rightIndex: 2,
    rightLine: 'You had it — the logs showed an automated client had already pulled roughly 87% of orders over 19 days, long before the thread went viral.',
    wrongLine: 'Not quite — the real story was in the access logs: an automated client had already pulled roughly 87% of orders over 19 days.'
  },
  openBubbles: [
    { who: 'meher', bubbles: ['support’s getting calls that reference the thread already'] },
    { who: 'priyank', bubbles: ['checking the logs now, give me a minute'] }
  ],
  chat: { channel: 'turant-hq', avatars: [{ t: 'M', bg: '#BE185D' }, { t: 'D', bg: '#6D28D9' }, { t: 'N', bg: '#B45309' }] },
  cabin: {
    sceneline: '12:30 PM · Investor call',
    narration: 'Ishaan looks up as his phone buzzes — Radhika’s call connecting in two minutes.',
    pullquote: '“Radhika’s dialling in in two minutes. She’s going to ask one question: what actually happened, and are we still the company she agreed to fund on Monday. Give me the sentence.”',
    pqBy: 'Ishaan Verma · Founder &amp; CEO'
  },
  notifs: NOTIFS5,
  ceoBubbles: CEO_BUBBLES5,
  onepager: ONEPAGER5,
  dashRows: DASH_ROWS5,
  dash: {
    metricsCaption: 'Right now vs this morning (pre-thread)',
    metricsHeaders: ['Right now', 'This morning (pre-thread)'],
    sub: 'Since the viral thread posted, ~9 AM · vs this morning’s pre-thread baseline',
    trend: {
      ariaLabel: 'Since-thread trend',
      columns: [],
      note: '— mentions and uninstalls both spiked within twenty minutes of the thread posting and haven’t slowed. The vulnerability itself has already been patched — Engineering shipped an auth-check fix by 9:35 AM. What’s still unknown is how much happened before the patch.'
    }
  },
  inbox: INBOX5,
  menu: { order: MENU_ORDER5, byId: MENU_BY_ID5 },
  fopts: FOPTS5,
  pts: PTS5,
  dims: s05Dims,
  decision: { informedIds: DECISION_INFORMED_IDS5, informedThreshold: 2, options: DECISION_OPTIONS5, consequence: DECISION_CONSEQUENCE5, pts: DECISION_PTS5 },
  framing: { consequence: FRAMING_CONSEQUENCE5, mod: FRAMING_MOD5 },
  debrief: {
    bands: { title: BAND_TITLE5, text: BAND_TEXT5 },
    pickLines: PICK_LINES5,
    missedClauses: MISSED_CLAUSES5,
    orientHtml: ORIENT_HTML5,
    truthHtml: TRUTH_HTML5,
    footerHtml: FOOTER_HTML5,
    decisionLine: DECISION_LINE5,
    framingLine: FRAMING_LINE5,
    integrity: {
      pick: 'G9',
      decision: 'D5',
      text: function(pt){
        return 'One more thing, said plainly: you checked the term sheet yourself and confirmed the round wasn’t contractually at risk from this bug alone — and then your first move anyway was to call the investor before finishing the work that actually protects the people whose data is out. That’s not a data mistake. You had the one fact that removed the excuse for putting the relationship first, and made the call first regardless.';
      }
    }
  },
  share: { url: SHARE_URL5, line: 'Six screenshots went viral. The real exposure was two million records nobody was looking at yet.' },
  revealBody: revealBody5
};
