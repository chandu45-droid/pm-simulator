/* PM Simulator — scenario s04 data. Loaded before engine. */
var SC_META4 = { h1:'Velugu — a PM decision simulator', company:'Velugu', tile:'VG', tagline:'“Mee bhasha, mee vinodam.”', dashKicker:'Velugu · Metrics', onepagerLabel:'Velugu — company one-pager' };
var TIMES4 = ['10:15 AM','12:00 PM','1:45 PM','3:30 PM','5:00 PM'];

var P4 = {
  divakar:{full:'Divakar Chalasani', n:'Divakar', r:'FOUNDER &amp; CEO', a:'DC', c:'var(--ink-900)'},
  meenal:{full:'Meenal Iyer', n:'Meenal', r:'MONETIZATION &amp; PRICING LEAD', a:'M', c:'#B45309'},
  karthik:{full:'Karthik Rajan', n:'Karthik', r:'CONTENT &amp; PROGRAMMING LEAD', a:'K', c:'#6D28D9'},
  lavanya:{full:'Lavanya Pillai', n:'Lavanya', r:'SUPPORT LEAD', a:'L', c:'#BE185D'},
  aditya:{full:'Aditya Krishnan', n:'Aditya', r:'DATA &amp; ANALYTICS', a:'A', c:'#0E7490'}
};

var NOTIFS4 = [
  {icon:'<span class="appicon" style="background:var(--ink-700)" aria-hidden="true">★</span>', src:'Play Store', time:'08:10', body:'New review on Velugu: ★★☆☆☆'},
  {icon:'<span class="appicon disc" style="background:var(--gain-700)" aria-hidden="true">LP</span>', src:'Lavanya Pillai (Support)', time:'08:52', body:'hey, got 10 min today? want to show you something in the cancellation queue before the sync'},
  {icon:'<span class="appicon disc" style="background:var(--ink-900)" aria-hidden="true">DC</span>', src:'Divakar Chalasani (Founder/CEO)', time:'09:20', body:'Can we talk before 5? →'}
];

var CEO_BUBBLES4 = [
  'Morning. Hoping Uttama’s six-week mark is treating you better than the subscriber count is treating me.',
  'Leadership sync is at 5 today. Whatever we say in that room is what goes into Kavach’s monthly update tomorrow — their partner reads these closely, and she’s going to see “Day-30 renewal +5pp” on one line and “net subscribers down” on another, in the same deck. I’d rather know the real answer before she asks the question.',
  'You own Uttama. I’m not going to tell you where to look — go find out if it actually worked, and come back at 5 with the real story, not the launch-week one.'
];

var ONEPAGER4 = [
  ['What','Regional-language streaming — Telugu, Tamil, Kannada and Malayalam films, originals, and live regional sports (kabaddi leagues, local cricket). Data-friendly streaming built for patchy connections.'],
  ['Scale','<strong>3.4M registered users</strong> · 980,000 monthly active · ~312,000 paid subscribers, split between <strong>Velugu Plus</strong> (₹349/quarter, all languages) and <strong>Velugu Monthly</strong> (₹99/month).'],
  ['Funding','Series B, <strong>₹96 Cr</strong>, led by Kavach Capital (fictional). ~14 months runway. Investor ask this quarter: grow ARPU without losing the tier-2/3 base that gives Velugu its moat over national streaming players.'],
  ['Why we win','Content in the language people actually speak at home, the cheapest reliable streaming quality on a budget connection, a release calendar timed to festival seasons.'],
  ['Users','68% from tier-2/3 towns across AP, Telangana, Tamil Nadu, Karnataka and Kerala. Mostly single-language households; price-sensitive; many pay via UPI autopay tied to a fixed monthly budget, not discretionary spend.'],
  ['You','Senior PM, Monetization &amp; Pricing pod. <strong>Project Uttama — the pricing-tier merger that hit 100% rollout six weeks ago — is yours.</strong> PRD goal, agreed with Growth: “reduce plan-choice confusion, push subscribers toward full-catalogue value, lift blended ARPU.”']
];

var DASH_ROWS4 = function(){ return [
  ['New signups/week','24,500','21,000', chip('gain','up','+16.7%','up 16.7 percent'), false],
  ['Day-30 renewal rate (blended)','74%','69%', chip('gain','up','+5pp','up 5 percentage points — looks better'), true],
  ['Net paid subscriber adds/week','−2,600','+1,150', chip('loss','down','flipped negative','flipped negative — worse'), false],
  ['Blended ARPU','₹211','₹179', chip('gain','up','+17.9%','up 17.9 percent'), false],
  ['Support/cancellation tickets/week','1,380','510', chip('loss','up','+170.6%','up 170.6 percent — worse'), false],
  ['Play Store rating (30-day)','3.5★','4.3★', chip('loss','down','−0.8★','down 0.8 stars — worse'), false]
];};

var INBOX4 = [
  {id:'divakar', p:P4.divakar, time:'9:20 AM', prev:'Can we talk before 5? →',
   bubbles:CEO_BUBBLES4},
  {id:'meenal', p:P4.meenal, time:'8:40 AM', prev:'before the sync — I want to make sure everyone remembers Uttama WORKED',
   bubbles:['Before the sync — I want to make sure everyone remembers what actually happened here. Uttama WORKED. Day-30 renewal went from 69% to 74%, ARPU is up nearly 18%, clean rollout with proper holdout testing, board sign-off, no asterisks. That’s a real, measured lift. If something else is going on with subscribers this month, I really don’t think it’s fair to point at the one thing we tested and measured properly. Let’s not walk back a real win because of a number that moved for some other reason.']},
  {id:'karthik', p:P4.karthik, time:'8:45 AM', prev:'the subscriber dip isn’t Uttama, it’s the release slate, this always dips',
   bubbles:['Okay, before everyone panics on the subscriber number — I think this is release-calendar, not Uttama. We had a big Sankranti-season theatrical tie-in driving a spike two months back, and every year after a big premiere month, engagement and renewals cool off for a few weeks while people work through the backlog. We saw a version of this same dip last year, before Uttama even existed. I’d hold off on redesigning pricing based on one month that lines up with a known content-cycle pattern.']},
  {id:'lavanya', p:P4.lavanya, time:'8:52 AM', prev:'not trying to jump the queue on this but the cancellation tickets this month are... a pattern',
   bubbles:['Hey — not trying to jump the queue with this, and I know Meenal and Karthik both have their own read on the month, so weigh this however much it’s worth. But tickets are up something like 2.7x and it’s really concentrated on two things: people saying they’re paying for languages they never watch, and people saying the new price hit their account without warning. I haven’t had time to pull it into a proper deck, my team’s just been keeping the queue from drowning. But if someone’s making a call today, I really think somebody should read the tickets themselves first, not just the category counts.']}
];

var MENU_ORDER4 = ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12'];

var MENU_BY_ID4 = {
  E1:{t:'Scan competitor pricing and promotions.', s:'StreamKatha and the other regional OTT apps — did anyone launch a cheaper plan or a big sale this month?', short:'Competitor pricing &amp; promotions', skin:'dump'},
  E2:{t:'Check exactly how the “Day-30 renewal rate” is computed.', s:'Ask Data for the literal cohort definition, not what everyone assumes it means.', short:'Renewal-rate definition', skin:'chat'},
  E3:{t:'Ask Marketing about campaign overlap.', s:'Did anything else launch the same week Project Uttama hit 100%?', short:'Campaign overlap', skin:'dump'},
  E4:{t:'Pull the renewal rate split by plan type.', s:'The legacy single-language tier vs the new merged Velugu Plus tier.', short:'Renewal split by plan', skin:'chat'},
  E5:{t:'Review the pricing rollout’s test design.', s:'Sample size, holdout, significance — was the test itself run properly?', short:'Rollout test design', skin:'dump'},
  E6:{t:'Check device and network mix.', s:'Is the drop concentrated on a particular phone type, or is it everyone?', short:'Device/network mix', skin:'chat'},
  E7:{t:'Read the raw cancellation and support tickets.', s:'Open the actual ticket text, not the category counts.', short:'Raw cancellation tickets', skin:'dump'},
  E8:{t:'Audit the price-change notification and in-app messaging.', s:'Read every screen and message yourself.', short:'Notification &amp; messaging audit', skin:'dump'},
  E9:{t:'Sit in on Meenal’s monetization readout.', s:'Hear the “Uttama worked” pitch straight from Pricing, in person.', short:'Meenal’s readout', skin:'chat'},
  E10:{t:'Check how many quarterly subscribers have hit a renewal date.', s:'Not just the ones who have.', short:'Renewal-date coverage', skin:'chat'},
  E11:{t:'Pull Support’s ticket-load and staffing report.', s:'Find out how the team is coping with the surge.', short:'Support SLA &amp; staffing', skin:'dump'},
  E12:{t:'Compare regional-language watch-time before and after the tier merge.', s:'Are people actually using what they’re now paying for?', short:'Watch-time by language', skin:'chat'}
};

var FOPTS4 = [
  {id:'F1', short:'Found the renewal-metric blind spot', t:'“I found the renewal-metric blind spot — here’s what’s actually happening to the tier-2/3 base, and what we’ve fixed.”', b:'Lay out the metric’s rolling-window definition, the 31%-vs-79% segment split, and the renewal cliff still ahead — if you have them.'},
  {id:'F2', short:'Quietly fix both', t:'“It’s a shared miss — the pricing and the measurement moved together. Let’s just quietly fix both.”', b:'Frame it as a joint, no-blame correction, handled internally without a big announcement.'},
  {id:'F3', short:'Blamed Pricing’s process gap', t:'“Pricing shipped a change on a metric that couldn’t see its own blind spot in time — this needed a second sign-off.”', b:'Position it as Meenal’s team’s process gap.'},
  {id:'F4', short:'Asked for more time', t:'“I don’t have the full picture yet — give me until after tomorrow’s update before I present conclusions.”', b:'Ask for more time before committing to a read.'}
];

var BAND_TITLE4 = { A:'Saw the cliff before it arrived.', B:'Partial credit.', C:'Read the average, not the cliff.' };

var BAND_TEXT4 = {
  A:'You did the thing this scenario was built to reward: you refused to let a metric that “moved in the right direction” end the investigation. A rolling-window renewal rate can tell you the aggregate improved — it can’t tell you which segment it’s even capable of seeing yet. You checked what the metric actually measured, found which plan tier was quietly collapsing underneath it, and connected the timing (quarterly billing cycles are slow) to why nobody caught it at launch. That’s the skill that matters more than any single number: knowing that “the metric improved” and “the price change worked for everyone we charged more” are two different claims, and being willing to check both before the room stops asking.',
  B:'You picked up real signal — the ticket patterns, the subscriber decline, maybe the segment split itself — but you didn’t fully connect the metric’s blind window to the renewal cliff still ahead before you had to explain both in one sentence. That gap is common and specific: it’s easy to notice that a metric “feels too good” and much harder to prove why it’s structurally unable to see the group that matters yet, especially when the rollout process itself was clean. The instinct was sound. What separates this from the top band is discipline about the difference between “this metric moved” and “this metric can see the thing we changed” — they’re not the same claim, and this scenario was built around that gap on purpose.',
  C:'This morning is exactly how confident, well-run pricing changes go wrong in real companies: not through fraud or sloppiness, but through a metric that quietly can’t see the segment it’s supposed to be judging yet. The clock and the confident voices pushed you toward validating the win rather than interrogating it — checking the rollout’s rigor, hearing the pitch again, scanning what competitors are charging — all of which feel like diligence and none of which touch what the metric actually samples. The tell was sitting in the dashboard the whole time: a renewal rate can’t rise while net subscribers fall unless the metric and the business have stopped measuring the same population. Next time a number “wins” cleanly on a fast clock, ask the harder question first: which segment does this number actually have enough data on yet — and which one is it still waiting to see?'
};

var PICK_LINES4 = {
  E1:'A tour of what everyone else is charging. Zero information about why Velugu’s own numbers moved.',
  E2:'This is the single most decisive thing on the menu — the moment “the metric improved” stops being the end of the story and starts being the question “improved for whom, exactly?”',
  E3:'Sized part of the signup bump honestly. Doesn’t touch renewal rate, subscriber decline, or what the metric can actually see.',
  E4:'This is where the real mechanism shows up: the segment that got repriced collapsed to 31%, and it’s small enough, so far, to vanish inside a 74% blend.',
  E5:'Confirmed the rollout process was clean. That’s a real and useful fact — and a dangerous one to stop at, because it answers “was this run correctly” while quietly dodging “can this metric see the segment that matters yet.”',
  E6:'A reasonable reflex — and low-yield here, because the drop tracks a plan, not a phone. A pick spent ruling out something that was never really in question.',
  E7:'Real subscribers, in their own words, describing the mismatch and the price shock directly — days before any cohort query ran.',
  E8:'Careful and legitimate hygiene. The messaging says exactly what it does. It just doesn’t change what a single-language household is willing to pay for.',
  E9:'The same pitch you already had in writing, delivered with more conviction. Conviction isn’t a new data point.',
  E10:'This is the number that should worry the room more than today’s dashboard does: 90% of the affected segment hasn’t even reached a renewal date yet. The worst of it is scheduled, not hypothetical.',
  E11:'Confirms the surge is real and the team is stretched. Doesn’t tell you what’s generating it.',
  E12:'The hardest possible proof that subscribers aren’t getting value for the price jump: single-language watch-time share fell from 61% to 44% the moment the bundle stopped matching what they actually watch.'
};

var MISSED_CLAUSES4 = {
  E2:'exactly what the renewal-rate metric measures — when a number moves cleanly, the first question isn’t “is that real,” it’s “real across which population, and how much of it has this metric even seen yet”',
  E4:'whether the repriced segment is renewing at all — it collapsed to 31%, and a 90/10 blend is exactly what hides that inside a headline 74%',
  E7:'the raw cancellation tickets — subscribers were describing this mismatch, in plain language, for free, all month',
  E10:'how much of the affected segment has even reached a renewal date yet — and the reminder that quarterly billing cycles mean most of the damage is still scheduled, not already visible',
  E12:'whether people are actually using the extra languages they’re now paying for — the one number that turns “ARPU is up” from a headline into a question'
};

var SHARE_URL4 = 'https://chandu45-droid.github.io/pm-simulator/';

function revealBody4(id, idx){
  var t1 = TIMES4[idx+1];
  switch(id){
  case 'E1':
    return '<div class="dumpcard"><div class="dumphead">streamkatha.in · competitor site</div><div class="dumpbody">'+
      '<div class="ticket">A “Sankranti Special” banner, 35% off annual plans, a countdown timer. One other regional app is running a similar seasonal offer.</div>'+
      '</div></div>'+
      '<div class="marginnote">Nothing here is new, nothing is timed to Uttama’s rollout, and none of it explains why Velugu’s own renewal and subscriber numbers moved. It’s a real market, just not this month’s story. No new information about Velugu. One pick spent.</div>';
  case 'E2':
    return groupHTML(P4.aditya, 'replies with the metric’s literal definition', [
      '<code>Day-30 renewal rate</code> = (subscribers who successfully renew) ÷ (subscribers whose billing date falls inside the rolling 30-day window). It says nothing about a subscriber’s plan — only about whether their billing date happened to land in the window.',
      '<strong>Velugu Monthly</strong> subscribers hit a billing date every 30 days, so they refill this window constantly — roughly 90% of everyone measured since rollout is a monthly-plan subscriber. <strong>Velugu Plus</strong> (the merged, price-hiked quarterly tier) only puts a subscriber through a billing date once every ~90 days — so only about 10% of the people counted in this metric so far are even on the tier whose price actually changed.',
      'Aditya’s note: “We didn’t A/B test a price change. We measured a metric that’s structurally 90% blind to the segment we changed the price for.”'
    ]);
  case 'E3':
    return '<div class="dumpcard"><div class="dumphead">#marketing · Slack thread</div><div class="dumpbody">'+
      '<div class="ticket">Marketing: Yes — a “Refer &amp; Save” Sankranti push went live the same week as Uttama’s 100% rollout. Coincidence of timing, not a coordinated test.</div>'+
      '<div class="ticket">Referral signups are running ~10% of total signups since launch, versus ~4% before the campaign — so roughly 1,470 of the +3,500/week signup increase traces to the referral push, not the pricing change. A handful of those accounts look like duplicate-discount farming, flagged separately, low volume.</div>'+
      '</div></div>'+
      '<div class="marginnote">It explains part of the signup number. It says nothing about why paying subscribers are renewing less, or where.</div>';
  case 'E4':
    return groupHTML(P4.aditya, 'pulled the split', [
      'Pulled the split, for subscribers who’ve actually reached a renewal date since rollout:',
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Renewal rate by plan type since rollout</caption><thead><tr><th scope="col">Segment</th><th scope="col" class="r">Renewal rate (since rollout)</th></tr></thead><tbody>'+
      '<tr><td>Velugu Monthly (₹99/month, price unchanged)</td><td class="num">79%</td></tr>'+
      '<tr><td>Velugu Plus (formerly Mono, now ₹349/quarter — up from ₹149)</td><td class="num hero">31%</td></tr>'+
      '<tr><td>Blended (≈90% monthly weight, ≈10% Plus weight)</td><td class="num">74.2% ≈ 74% — this is the dashboard number</td></tr>'+
      '</tbody></table></div>',
      'Aditya’s note: “When we blend a segment that’s fine with a segment that’s collapsing, and the collapsing one is only 10% of the sample so far, the average looks great. It won’t stay that way — the Plus subscribers who haven’t hit their renewal date yet are still coming.”'
    ]);
  case 'E5':
    return '<div class="dumpcard"><div class="dumphead">Aditya (Data) + Meenal (Pricing) · joint reply</div><div class="dumpbody">'+
      '<div class="ticket">Nothing wrong with the rollout process. Proper holdout cohort, no sample-ratio mismatch, clean lift on Day-30 renewal, reviewed and signed off before 100% rollout. By every standard pricing-test checklist, this was run correctly.</div>'+
      '</div></div>'+
      '<div class="marginnote">The test was run correctly. It just correctly measured a metric that structurally couldn’t see the segment that mattered yet — and rigor on the “how” says nothing about the “what.” If you stop here, this becomes the reassurance you take to the 5 PM sync.</div>';
  case 'E6':
    return groupHTML(P4.aditya, t1, [
      'Cancellation shape is nearly identical across Android and iOS, and across budget vs premium phones. No device-specific clustering. Whatever this is, it isn’t a connectivity or device problem — it’s hitting a specific plan, not a specific phone.'
    ]);
  case 'E7':
    return '<div class="dumpcard"><div class="dumphead">cancellation &amp; support tickets · this week · unedited</div><div class="dumpbody">'+
      ticketB('“I only watch Telugu movies. Why am I paying ₹349 now for three languages I never open? My old plan was ₹149.”','— Kadapa')+
      ticketB('“The auto-debit took ₹349 from my account without warning. I thought it was a mistake — I signed up for the cheap Tamil-only plan.”','— Madurai')+
      ticketB('“I don’t need Kannada or Malayalam content, I never use it. Please give me back the single-language option or I’m cancelling.”','— Mysuru')+
      ticketB('“This is more than double what I was paying. I’m on a fixed budget, this app is not affordable anymore for content I don’t even watch fully.”','— Warangal')+
      '<div class="ticket">Six more, same shape: forced onto a multi-language plan they don’t use, or auto-debited at the new price without realizing until it hit their bank statement.</div>'+
      '</div></div>'+
      '<div class="marginnote">None of the ten mention a competitor or a content complaint. All ten describe either being forced into languages they don’t watch, or a price jump they didn’t see coming.</div>';
  case 'E8':
    return '<div class="dumpcard"><div class="dumphead">price-change notification &amp; in-app messaging · screen-by-screen read</div><div class="dumpbody">'+
      '<div class="ticket">Copy is clear — “Your plan is now Velugu Plus — all languages, one price,” with the new amount stated plainly before the first debit. No hidden text, no dark patterns. One minor nit: the “Manage plan” link is one tap deeper than it should be, flagged to design.</div>'+
      '</div></div>'+
      '<div class="marginnote">Nothing here explains the numbers. The messaging says what it does; it just doesn’t change what a single-language household actually wants to pay for.</div>';
  case 'E9':
    return groupHTML(P4.meenal, 'live, in the leadership sync walkthrough', [
      '“Uttama WORKED. Day-30 renewal up five points, blended ARPU up nearly 18%, clean rollout, board already signed off. If subscribers are down, that’s a content-slate thing or a seasonal thing — it is not a pricing problem. I’d hate for one confusing month to make us second-guess a lift the data was completely clear on.”'
    ]) + '<div class="marginnote">It’s the same claim that’s in her message in your inbox, delivered with more conviction and zero new numbers. No new information. One pick spent.</div>';
  case 'E10':
    return groupHTML(P4.aditya, t1, [
      'Of all Velugu Plus (quarterly) subscribers, only about 10% have reached a renewal date since rollout six weeks ago — the rest are still inside their first 90-day cycle at the old price they signed up under, or haven’t hit their first Uttama-era renewal yet.',
      'The remaining ~90% will hit their renewal over the next 60–75 days. If the 31% renewal rate observed so far holds, projected quarterly-tier losses will roughly triple over the coming quarter — a cliff that hasn’t shown up in the topline yet purely because most of the affected base hasn’t reached the metric’s measurement point.',
      'Aditya’s note: “This is the part that should worry the room more than today’s dashboard does. The worst of it hasn’t arrived. It’s scheduled.”'
    ]);
  case 'E11':
    return '<div class="dumpcard"><div class="dumphead">support · SLA &amp; staffing · this week</div><div class="dumpbody">'+
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Support SLA and staffing summary</caption><tbody>'+
      '<tr><td>Ticket volume</td><td class="num hero">1,380/week (2.7x baseline)</td></tr>'+
      '<tr><td>Avg response time</td><td class="num">4 hrs → 17 hrs</td></tr>'+
      '<tr><td>Agents on leave this week</td><td class="num">2</td></tr>'+
      '</tbody></table></div></div></div>'+
      '<div class="marginnote">Lavanya’s manager note: “We’re triaging, not solving. Whatever’s generating this needs to stop at the source — we can’t out-hire our way through it.”</div>';
  case 'E12':
    return groupHTML(P4.aditya, t1, [
      'Watch-time share by household language-preference, tier-2/3 markets:',
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Single-language watch-time share, before/after tier merge</caption><thead><tr><th scope="col">Period</th><th scope="col" class="r">Single-language watch-time share</th></tr></thead><tbody>'+
      '<tr><td>Baseline (pre-rollout)</td><td class="num">61%</td></tr>'+
      '<tr><td>Since rollout</td><td class="num hero">44%</td></tr>'+
      '</tbody></table></div>',
      'Aditya’s note: “Single-language households aren’t suddenly watching less television. They’re watching the same amount, on a plan that now bundles content they never asked for and mostly still don’t touch. They notice the price jump. They don’t notice any new value — because for them, there isn’t any.”'
    ]);
  }
  return '';
}

var ORIENT_HTML4 = '<p>It’s Wednesday, 10:05 AM — the metric your team is celebrating is up, and the subscriber count under it is not. You’re the Senior PM at <strong>Velugu</strong>, a regional-language streaming app for South India’s Telugu, Tamil, Kannada and Malayalam audiences. Six weeks ago your team shipped “Project Uttama,” a pricing overhaul that lifted Day-30 renewal rate and ARPU in a clean, board-approved rollout. Today those two numbers are still up. Net subscribers are not. Leadership syncs at 5:00 PM, and tomorrow morning’s Kavach Capital update carries the same slide.</p>';
var TRUTH_HTML4 = '<div class="dsec"><div class="kicker">What was actually true</div>'+
    '<p>Project Uttama changed one thing — how much Velugu charges, and for what bundle — and the metric the team used to judge it had a blind spot built into its own definition, not in the pricing logic itself.</p>'+
    '<p>The metric was <strong>Day-30 renewal rate</strong>, computed as (subscribers who renew) ÷ (subscribers whose billing date falls inside a rolling 30-day window). That definition has nothing to do with which plan a subscriber is on — only with whether their billing date happens to land in the window being measured. Velugu Monthly subscribers cycle every 30 days, so they refill that window constantly; Velugu Plus (the merged, price-hiked quarterly tier) only puts someone through a billing date once every ~90 days. Six weeks after rollout, only about 10% of everyone counted in the metric so far is even on the tier whose price changed. The other 90% is the unaffected monthly segment, whose renewal rate genuinely ticked up slightly for unrelated content reasons. Blend a fine 79% with a collapsing 31% at a 90/10 weight and you get roughly 74% — a number that looks like a win because the segment doing badly is still a small fraction of who’s been measured, not because it’s actually doing well.</p>'+
    '<p>The segment that <em>is</em> being measured tells the real story: subscribers on Velugu Plus are largely single-language households who never wanted the other three languages, watched roughly the same amount of content as before, and got charged more than double for it. Their renewal rate collapsed from ~84% to 31%. And because quarterly billing cycles are slow, most of that segment hasn’t even reached a renewal date yet — the cliff Velugu is looking at is mostly still ahead, arriving in scheduled waves over the next two to three months, not a one-time shock that already happened.</p>'+
    '<p>Neither confident voice in the room was lying. Meenal wasn’t lying — the rollout really was tested with a proper holdout, really did show a clean lift, really did raise ARPU. She was <strong>confidently right about the wrong question</strong>: rigorous rollout testing answered “did the blended number improve,” not “does this metric have visibility into the segment we actually changed.” Karthik wasn’t lying either — release-calendar dips are a real, previously observed pattern at Velugu. He was <strong>confidently incomplete</strong>: a real seasonal effect may exist, and it wasn’t sized against a pricing mismatch sitting in the same window, so it absorbed blame that belonged to the plan structure. Lavanya was holding the real signal the whole time, buried under an apology for bothering anyone with it: the tickets, read in subscribers’ own words, described the mismatch for free, days before anyone ran a single cohort query.</p></div>';
var FOOTER_HTML4 = '<footer class="sitefooter">Velugu, StreamKatha and Kavach Capital are fictional. Inspired by patterns common in Indian regional-OTT pricing and subscription practice; no real incident is depicted.<br>Built in India · A structured-debrief simulator — no AI grades your words.</footer>';
var PTS4 = {E2:3,E4:3,E7:3,E10:3,E12:3,E3:1,E6:1,E8:1,E11:1,E1:0,E5:0,E9:0};

var DECISION_INFORMED_IDS4 = ['E2','E4','E10'];

var DECISION_OPTIONS4 = {
  D1: {short:'Full rollback', t:'Full rollback to the old plan structure.', b:'“Undo Project Uttama entirely — bring back Velugu Mono at ₹149/quarter exactly as it was, keep Velugu Plus available as an optional upgrade at ₹349.”'},
  D2: {
    default: {short:'Reprice on instinct', t:'Reprice on instinct.', b:'“Something about forcing everyone onto Plus feels like the problem. Bring back a cheaper single-language tier and hope that fixes it.”'},
    informed: {short:'Reprice for the segment, fix the metric too', t:'Reprice the merged tier for the affected segment; fix the metric too.', b:'“Reintroduce a single-language plan at ₹199/quarter — not the old ₹149, not the forced ₹349 — keep Velugu Plus as an explicit upgrade choice, and report renewal rate by plan-cohort going forward instead of blended.”'}
  },
  D3: {short:'Redefine the metric only', t:'Redefine the metric only, leave pricing unchanged.', b:'“Fix how we report renewal — by plan-cohort, not blended — but don’t touch Velugu Plus pricing yet.”'},
  D4: {short:'Launch a win-back discount', t:'Leave pricing alone; launch a win-back discount.', b:'“Don’t touch Uttama. Offer at-risk Velugu Plus subscribers one more cycle at ₹149 to win back non-renewals.”'},
  D5: {short:'Re-run the pricing study from scratch', t:'Declare the rollout’s test invalid; re-run the pricing study from scratch.', b:'“Treat Uttama’s original rollout signal as unreliable. Pause and re-run a full pricing study before deciding anything.”'}
};

var DECISION_CONSEQUENCE4 = {
  D1: function(){
    return '<p>Live within a week — billing needs to re-provision the old SKU. Velugu Plus (formerly Mono) renewal rate among the previously hiked segment recovers to ~80% within two cycles; blended ARPU gives back essentially all of its gain, drifting back toward ₹182. Net subscriber adds turn positive again by week six. But you’ve also thrown away the genuinely good part of Uttama — a real slice of multi-language households (~8% of Plus adopters) liked the bundle and is unhappy to see the option pulled. Meenal is publicly frustrated: “We rolled back a working ARPU lever because a metric measured the wrong window, not because the pricing itself was wrong for everyone.”</p>'+
      cqBubble(SC().cast.divakar, '“Rollback was the safe move for today. But is there a version of this that keeps the upside without the customers who never asked for it?”');
  },
  D2: {
    informed: function(){
      return '<p>Live within ~10 days (billing plus comms). Single-language subscribers’ renewal rate recovers to ~72% — a real improvement, though ₹199 doesn’t fully return to the old 84% since it’s still an increase from ₹149, but nowhere near the 31% collapse. Blended ARPU settles around ₹198 — still up from the ₹179 baseline, because a meaningful slice of subscribers genuinely does choose to upgrade to Plus once it’s an honest choice rather than a forced default. Within six weeks: net subscriber adds turn positive, tickets fall by more than half, and the new plan-cohort reporting means the next pricing change can’t hide a segment collapse behind a blended average the way this one did. The fix works because it keeps what was genuinely earning and repairs only what was forced.</p>'+
        cqBubble(SC().cast.meenal, '“The bundle wasn’t wrong for everyone — it was wrong as the only option. I read the aggregate lift and didn’t look underneath it. Thanks for catching this before Kavach’s call.”');
    },
    default: function(){
      return '<p>The same broad move, taken without the segment or renewal-cliff evidence behind it. It happens to mostly work — a cheaper single-language tier does recover most of the collapse — but without the cliff math you set the reintroduced price on a guess (₹129, closer to a full giveaway than a considered fix) and you don’t touch the blended-metric definition, so the exact same masking is set up to hide the next pricing change too. Outcomes converge with the informed path on subscriber recovery by week eight, but ARPU recovers less — real upgrade revenue is left on the table — and the measurement blind spot ships forward, unfixed, into whatever comes next.</p>';
    }
  },
  D3: function(){
    return '<p>The dashboard gets honest fast — reported quarterly-segment renewal rate drops overnight from a hidden ~31% (inside a comforting 74% blend) to a headline number everyone can see, an uncomfortable number, and Divakar appreciates the transparency. But the underlying mismatch is untouched: the collapse keeps recurring every renewal cycle, ARPU keeps eroding as the cliff arrives on schedule, tickets keep coming. You’ve fixed the instrument without repricing the product. Within a month someone asks the obvious next question — “the number’s honest now, so why haven’t we changed anything?” — and you’re back in the same room with less patience than you started with.</p>';
  },
  D4: function(){
    return '<p>The discount recovers roughly a third of the quarter’s expected quarterly-tier losses — a real, visible bump that looks good in tomorrow’s update. But the mismatch keeps feeding the exact same cliff into next quarter’s cohort, so the coupon quietly becomes something Meenal’s team now has to budget for every renewal cycle just to hold the subscriber base steady.</p>'+
      cqBubble(SC().cast.divakar, '“We’re discounting our way around a price we set ourselves. That’s not a win-back, that’s an admission.”');
  },
  D5: function(){
    return '<p>Costly and slow. A fresh pricing study needs its own holdout cohort, pushing any real fix out by a full quarter — during which Velugu Plus stays priced at ₹349 for everyone and keeps mismatching single-language subscribers every renewal cycle. When the re-run study finally reports, it reproduces the exact same paper lift and the exact same underlying collapse, because nothing about the plan structure or the metric changed in between. You spent a quarter of continued losses to re-confirm what an afternoon with the renewal-cohort data could have told you today.</p>';
  }
};

var DECISION_PTS4 = {D1:3, D2:{informed:5, default:1}, D3:2, D4:1, D5:0};

var FRAMING_CONSEQUENCE4 = {
  F1: {
    informed: function(){
      return '<p>You lay out the metric’s rolling-window definition, the 31%-vs-79% segment split, and the renewal cliff still ahead in under a minute. The room moves on to the next agenda item, which is what a clear diagnosis earns you.</p>'+
        cqBubble(SC().cast.divakar, '“That’s not spin, that’s a diagnosis. Kavach’s partner will ask sharper questions than I do — send me this exact paragraph tonight.”');
    },
    default: function(){
      return '<p>You say the line, but you don’t have the mechanism ready. Divakar presses: which segment, which billing window — show me. You can’t.</p>'+
        cqBubble(SC().cast.divakar, '“Then what you’ve got is a theory with confident phrasing. Get me the numbers before tomorrow’s update goes out, not after.”');
    }
  },
  F2: function(){ return '<p>Frame it as a joint, no-blame correction, handled internally without a big announcement.</p>'+
    cqBubble(SC().cast.divakar, '“Quiet is fine internally. It’s not fine in an update whose last line reads ‘net subscribers down.’ Someone outside this building is going to ask why — ‘we’re handling it quietly’ isn’t an answer for Kavach’s partner, even if it’s the right instinct for the team.”'); },
  F3: function(){ return '<p>Position it as Meenal’s team’s process gap.</p>'+
    cqBubble(SC().cast.divakar, '“Maybe. But Meenal didn’t define that renewal metric alone, and the rollout review that approved Uttama had your name on it too. Pointing at one desk looks better to you in this room than it’ll look to me tomorrow.”')+
    '<p class="closer">By the next sprint, Meenal’s replies to your PRDs get noticeably more formal.</p>'; },
  F4: function(){ return '<p>Ask for more time before committing to a read.</p>'+
    cqBubble(SC().cast.divakar, '“Tomorrow’s update goes out with or without your conclusions. I can write ‘still investigating’ myself — I was hoping I wouldn’t have to.”')+
    '<p class="closer">He absorbs the awkward line in the deck at his own expense, and the meeting after this meeting is about why his PM had a full day and came back with a request for more of it.</p>'; }
};

var FRAMING_MOD4 = {F1:{informed:3, default:0}, F2:1, F3:-2, F4:-1};

var DECISION_LINE4 = {
  D1: 'Full rollback stopped the bleeding and gave back the one part of Uttama that was genuinely earning — a real slice of multi-language households liked the bundle, and now that option is gone for them too.',
  D2: {
    informed: 'The highest-skill move on the menu, and only available because you’d earned it: keep the ARPU upside, fix the segment that got forced. Evidence is what turns “revert everything” into “reprice the one thing that was actually broken.”',
    default: 'The right instinct, taken without the evidence to price it precisely — and the lack of precision cost you real ARPU on the way to roughly the same subscriber outcome.'
  },
  D3: 'Fixing the metric without fixing the price makes the dashboard honest and the business unchanged. Honesty about a broken thing isn’t the same as repairing it.',
  D4: 'A discount treats the symptom at the site of the pain, and it works — for one billing cycle. The mismatch keeps generating the same gap every quarter until something structural changes.',
  D5: 'Re-running a rollout that was already run correctly, to answer a question the metric was never built to ask, costs a quarter of continued losses for a result you could already predict.'
};

var FRAMING_LINE4 = {
  F1: {
    informed: 'You didn’t just have the right read — you could defend it cold, with the mechanism attached, in under a minute. That’s what makes a diagnosis land instead of just a guess.',
    default: 'The right instinct, stated without the numbers to back it, is indistinguishable from a lucky guess in the room — and it won’t survive an investor’s second question.'
  },
  F2: 'Quiet and collaborative internally, and read as under-explaining externally — an update with subscribers moving the wrong way needs a reason attached, not a promise to handle it.',
  F3: 'Naming Pricing’s process gap wasn’t wrong on the facts. It landed as blame anyway, and blame in a room with your own sign-off on the same rollout travels back to you.',
  F4: 'Asking for more time is a legitimate move — it just isn’t free, and the person who absorbs the cost of your extra day is the one who vouched for you in the deck.'
};

function s04Dims(picks, decision, framing, sc){
  function clamp(v){ return Math.max(1, Math.min(5, v)); }
  function has(id){ return picks.indexOf(id)>=0; }
  function count(ids){ var n=0; for (var i=0;i<ids.length;i++) if (has(ids[i])) n++; return n; }
  var SHARP = ['E2','E4','E7','E10','E12'];
  var TRAPS = ['E1','E5','E9'];
  var d2informed = decision==='D2' && sc.informed;
  var logical = clamp(1 + (has('E2')?1:0) + (has('E4')?1:0) + (has('E10')?1:0) + (decision==='D2'?1:0));
  var data = clamp(1 + Math.min(count(SHARP),4));
  var assumption = clamp(3 - count(TRAPS) + ((has('E2')||has('E5'))?1:0));
  var risk = clamp(1 + (has('E10')?2:0) + (has('E7')?1:0) + (decision==='D2'?1:0));
  var prioritization = decision==='D2' ? (d2informed?5:3) : decision==='D1' ? 4 : decision==='D3' ? 3 : decision==='D4' ? 2 : 1;
  var stakeholder = framing==='F1' ? (sc.informed?5:3) : framing==='F2' ? 4 : framing==='F4' ? 2 : framing==='F3' ? 1 : 1;
  var empathy = clamp(2 + (has('E7')?1:0) + (has('E12')?1:0) + (decision==='D2'?1:0));
  var biz = clamp(1 + (has('E4')?1:0) + (has('E10')?1:0) + (d2informed?2:0) + (decision==='D2' && !d2informed?1:0));
  var integrityFires = has('E5') && decision==='D5';
  var comm = clamp((framing==='F1' ? (sc.informed?5:3) : framing==='F2' ? 3 : framing==='F3' ? 2 : framing==='F4' ? 2 : 1) - (integrityFires?1:0));
  return [logical, data, assumption, risk, prioritization, stakeholder, empathy, biz, comm];
}

/* Registry facade — engine reads scenarios through this. */
window.PMSIM = window.PMSIM || { scenarios: {} };
window.PMSIM.scenarios['s04'] = {
  id: 's04',
  title: SC_META4.h1,
  company: SC_META4.company,
  tagline: SC_META4.tagline,
  tile: SC_META4.tile,
  dashKicker: SC_META4.dashKicker,
  onepagerLabel: SC_META4.onepagerLabel,
  times: TIMES4,
  cast: P4,
  ceoKey: 'divakar',
  dashTitle: 'The Wednesday dashboard',
  statusBarLabel: 'VeluguOS',
  lockHint: 'Tap the message from Divakar ↑',
  beginBarText: '5:00 PM — Divakar’s chat pops up',
  orientHead: 'It’s Wednesday, 10:05 AM.',
  clock: { day: 'Wednesday', orientTime: '10:05 AM', lockStart: '08:10', lockReveal: '09:20', chatTime: '9:20 AM', deadline: 'until 5:00 PM' },
  decisionPrompt: "In the meeting room in five. What's the read?",
  chat: { channel: 'velugu-hq', avatars: [{ t: 'M', bg: '#B45309' }, { t: 'K', bg: '#6D28D9' }, { t: 'L', bg: '#BE185D' }] },
  cabin: {
    sceneline: '5:00 PM · Leadership sync',
    narration: 'Divakar sets his phone face-down on the table.',
    pullquote: '“Kavach’s monthly update goes out tomorrow morning. Their partner is going to see ‘Day-30 renewal +5pp’ on one line and ‘net subscribers down’ on another, in the same deck, and she reads decks like this for a living. Give me the sentence that explains both.”',
    pqBy: 'Divakar Chalasani · Founder &amp; CEO'
  },
  notifs: NOTIFS4,
  ceoBubbles: CEO_BUBBLES4,
  onepager: ONEPAGER4,
  dashRows: DASH_ROWS4,
  dash: {
    metricsCaption: 'Since-rollout metrics (6-wk avg) vs pre-rollout baseline',
    metricsHeaders: ['Since rollout (6-wk avg)', 'Baseline (pre-rollout)'],
    sub: 'Since Project Uttama hit 100% rollout (6-wk avg) · vs pre-rollout baseline (6-wk avg)',
    trend: {
      ariaLabel: 'Since-rollout trend',
      columns: [],
      note: '— renewal rate climbed the week Uttama hit 100% rollout and has held ever since. Net subscriber adds flipped negative the same week and haven’t recovered. This summary view isn’t cut by plan tier or renewal-cohort coverage.'
    }
  },
  inbox: INBOX4,
  menu: { order: MENU_ORDER4, byId: MENU_BY_ID4 },
  fopts: FOPTS4,
  pts: PTS4,
  dims: s04Dims,
  decision: { informedIds: DECISION_INFORMED_IDS4, informedThreshold: 2, options: DECISION_OPTIONS4, consequence: DECISION_CONSEQUENCE4, pts: DECISION_PTS4 },
  framing: { consequence: FRAMING_CONSEQUENCE4, mod: FRAMING_MOD4 },
  debrief: {
    bands: { title: BAND_TITLE4, text: BAND_TEXT4 },
    pickLines: PICK_LINES4,
    missedClauses: MISSED_CLAUSES4,
    orientHtml: ORIENT_HTML4,
    truthHtml: TRUTH_HTML4,
    footerHtml: FOOTER_HTML4,
    decisionLine: DECISION_LINE4,
    framingLine: FRAMING_LINE4,
    integrity: {
      pick: 'E5',
      decision: 'D5',
      text: function(pt){
        return 'One more thing, said plainly, because a mentor should: you personally confirmed the rollout’s testing process was clean, and then recommended re-running it as if the result itself were unreliable. That’s not a data mistake — the test was fine and you knew it. The rigorous thing to question wasn’t the test. It was whether the metric it reported on could see the segment that mattered.';
      }
    }
  },
  share: { url: SHARE_URL4, line: 'One tense Wednesday at a regional-OTT startup — the renewal rate is up, the subscriber count under it is not.' },
  revealBody: revealBody4
};
