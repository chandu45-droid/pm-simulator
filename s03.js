/* PM Simulator — scenario s03 data. Loaded before engine. */
var SC_META3 = { h1:'GyanSetu — a PM decision simulator', company:'GyanSetu', tile:'GS', tagline:'“Sapna sarkari naukri ka.”', dashKicker:'GyanSetu · Metrics', onepagerLabel:'GyanSetu — company one-pager' };
var TIMES3 = ['9:15 AM','11:00 AM','12:45 PM','2:30 PM','4:00 PM'];

var P3 = {
  saurabh:{full:'Saurabh Mehta', n:'Saurabh', r:'FOUNDER &amp; CEO', a:'SM', c:'var(--ink-900)'},
  neha:{full:'Neha Kapoor', n:'Neha', r:'GROWTH &amp; ACTIVATION LEAD', a:'N', c:'#B45309'},
  vikram:{full:'Vikram Oberoi', n:'Vikram', r:'REVENUE &amp; RENEWALS LEAD', a:'V', c:'#6D28D9'},
  ayesha:{full:'Ayesha Sheikh', n:'Ayesha', r:'SUPPORT LEAD', a:'A', c:'#BE185D'},
  rohan:{full:'Rohan Verma', n:'Rohan', r:'DATA &amp; ANALYTICS', a:'R', c:'#0E7490'}
};

var NOTIFS3 = [
  {icon:'<span class="appicon" style="background:var(--ink-700)" aria-hidden="true">★</span>', src:'Play Store', time:'08:20', body:'New review on GyanSetu: ★★☆☆☆'},
  {icon:'<span class="appicon disc" style="background:var(--gain-700)" aria-hidden="true">AS</span>', src:'Ayesha Sheikh (Support)', time:'08:47', body:'hey, got 10 min today? want to show you something in the queue before you get pulled into review prep'},
  {icon:'<span class="appicon disc" style="background:var(--ink-900)" aria-hidden="true">SM</span>', src:'Saurabh Mehta (Founder/CEO)', time:'09:05', body:'Can we talk before 4? →'}
];

var CEO_BUBBLES3 = [
  'Morning. Hope Sprint’s one-month mark is treating you better than the renewals dashboard is treating me.',
  'Growth review is at 4 today. Whatever we say in that room is what goes into Prospera’s pre-read tomorrow morning — their analyst is sharp, and she’s going to see “Day-1 activation +38%” on one line and “30-day retention down” on another, in the same deck. I don’t want to find out what she asks about it before I know the answer myself.',
  'You own Sprint. I’m not going to tell you what to look at — go find out if it worked, and come back at 4 with the real story, not the launch-week one.'
];

var ONEPAGER3 = [
  ['What','Exam-prep app for government-job aspirants — SSC, Bank PO/Clerk, Railways, State PSC. Video lessons, mock test series, live doubt-clearing classes, bilingual (Hindi + English) content.'],
  ['Scale','<strong>2.1M registered users</strong> · 640K monthly active · ~54,000 paid subscribers on Test Series Pro (₹1,499/quarter).'],
  ['Funding','Series A, <strong>₹38 Cr</strong>, led by Prospera Capital (fictional). ~16 months runway. Investor pressure this quarter: efficient growth — paid conversion and retention, not just top-of-funnel.'],
  ['Why we win','Cheaper than local coaching institutes, works on 2G, daily live classes timed around aspirants’ jobs and commutes (6 AM / 8 PM slots).'],
  ['Users','71% on budget Android phones. Many are first-generation app users in their family, price-sensitive, and preparing against a fixed exam date — time on the wrong content is not a small cost to them.'],
  ['You','Senior PM, Activation &amp; Onboarding pod. <strong>Project Sprint — the onboarding revamp that A/B-tested and shipped to 100% four weeks ago — is yours.</strong> PRD goal, agreed with Growth: “cut onboarding friction, get a new user into a lesson within 30 seconds, lift Day-1 activation.”']
];

var DASH_ROWS3 = function(){ return [
  ['Day-1 “activation” (started first lesson)','84%','61%', chip('gain','up','+23pp','up 23 percentage points — looks better'), true],
  ['7-day free → paid conversion','4.8%','6.9%', chip('loss','down','−30.4%','down 30.4 percent — worse'), false],
  ['30-day subscriber retention','61%','72%', chip('loss','down','−15.3%','down 15.3 percent — worse'), false]
];};

var INBOX3 = [
  {id:'saurabh', p:P3.saurabh, time:'9:05 AM', prev:'Can we talk before 4? →',
   bubbles:CEO_BUBBLES3},
  {id:'neha', p:P3.neha, time:'8:50 AM', prev:'before the review — I want to make sure everyone remembers Sprint WON, clean and significant',
   bubbles:['Before the review — I want to make sure everyone remembers what actually happened here. Sprint WON. Day-1 activation went from 60% to 85% in a clean, properly powered A/B test, p&lt;0.001, no asterisks. That’s not a soft result, that’s about as clear as experimentation gets. If something else is going on with renewals this month, I really don’t think it’s fair to point at the one thing we tested and measured properly. Let’s not throw out a real win because of a number that moved for some other reason.']},
  {id:'vikram', p:P3.vikram, time:'8:55 AM', prev:'renewals dip isn’t Sprint, it’s the SSC calendar, this happens every year',
   bubbles:['Okay, before everyone panics on the renewals number — I think this is seasonal, not Sprint. SSC CGL’s exam date got pushed back a few weeks this cycle, and every year when a big exam date moves, motivation dips and so does conversion. We saw a version of this same dip last year around the same time, before Sprint even existed. I’d hold off on redesigning anything based on one month that lines up with a known seasonal pattern.']},
  {id:'ayesha', p:P3.ayesha, time:'8:58 AM', prev:'not trying to jump the queue on this but the tickets this month are... a pattern, not noise',
   bubbles:['Hey — not trying to jump the queue with this, and I know Neha and Vikram both have their own read on the month, so feel free to weigh this however much it’s worth. But tickets are up something like 4x and it’s not spread out evenly — it’s really concentrated, and it’s two things over and over: people saying the course doesn’t match what they signed up for, and people saying a lesson shows as “completed” when they know for a fact they never watched it. I haven’t had time to pull it into a proper deck, my team’s just been keeping the queue from drowning. But if someone’s making a call today, I really think somebody should read the tickets themselves first, not just the category counts.']}
];

var MENU_ORDER3 = ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12'];

var MENU_BY_ID3 = {
  C1:{t:'Scan competitor pricing and offers.', s:'TestBazaar and the other exam-prep apps — did anyone undercut us this month?', short:'Competitor pricing', skin:'dump'},
  C2:{t:'Check exactly what fires the “activation” event.', s:'Ask Data for the event’s literal definition, not what everyone assumes it means.', short:'Activation event definition', skin:'chat'},
  C3:{t:'Ask Marketing about campaign overlap.', s:'Did anything else launch the same week as Sprint’s full rollout?', short:'Campaign overlap', skin:'chat'},
  C4:{t:'Cross-check recommended course against stated target exam.', s:'Pull how often the app’s course recommendation actually matches what the user said they’re preparing for.', short:'Course-match cross-reference', skin:'chat'},
  C5:{t:'Review the A/B test’s statistical rigor.', s:'Sample size, significance, randomization — was the test itself run properly?', short:'A/B test rigor', skin:'chat'},
  C6:{t:'Check device and network mix.', s:'Is the drop concentrated on 2G phones, or is it everyone?', short:'Device/network mix', skin:'chat'},
  C7:{t:'Read the raw support and refund tickets.', s:'Open the actual ticket text, not the category counts.', short:'Raw support tickets', skin:'dump'},
  C8:{t:'Audit the onboarding screen copy.', s:'Read every label and button on the new flow yourself.', short:'Onboarding copy audit', skin:'dump'},
  C9:{t:'Sit in on Neha’s growth review walkthrough.', s:'Hear the activation-lift pitch straight from Growth, in person.', short:'Neha’s walkthrough', skin:'chat'},
  C10:{t:'Pull 7-day conversion and 30-day retention, new flow vs old.', s:'Not just Day-1 activation — what happens after.', short:'7-day/30-day cohort', skin:'chat'},
  C11:{t:'Pull Support’s ticket-load and staffing report.', s:'Find out how the team is coping with the surge.', short:'Support SLA &amp; staffing', skin:'dump'},
  C12:{t:'Check how much of the “started” lesson users actually watched.', s:'Activation says “started.” Find out if anyone actually watched.', short:'Watch-depth check', skin:'chat'}
};

var FOPTS3 = [
  {id:'F1', short:'Found the instrumentation trap', t:'“I found the instrumentation trap — here’s what actually happened, and what we’ve fixed.”', b:'Lay out the event-definition change, the 78% course-mismatch rate, and the matched-vs-mismatched conversion split — if you have them.'},
  {id:'F2', short:'Quietly fix both', t:'“It’s a shared miss — the flow and the metric changed together. Let’s just quietly fix both.”', b:'Frame it as a joint, no-blame correction, handled internally without a big announcement.'},
  {id:'F3', short:'Blamed Growth’s process gap', t:'“Growth shipped a flow on a metric they redefined without flagging it — this needed a second sign-off.”', b:'Position it as Neha’s team’s process gap.'},
  {id:'F4', short:'Asked for more time', t:'“I don’t have the full picture yet — give me until after Friday’s update before I present conclusions.”', b:'Ask for more time before committing to a read.'}
];

var BAND_TITLE3 = { A:'Passed the real test.', B:'Partial credit.', C:'Marked the wrong answer right.' };

var BAND_TEXT3 = {
  A:'You did the thing this scenario was built to reward: you refused to let a statistically significant result end the investigation. A clean A/B test tells you the experiment was run correctly — it can’t tell you the finish line was drawn in the right place. You checked what the event actually measured, found where the recommendation logic silently broke, and connected both to the same root cause instead of treating them as two separate mysteries. That’s the skill that matters more than any single number: knowing that “the test won” and “the thing we shipped worked” are two different sentences, and being willing to check both.',
  B:'You picked up real signal — the ticket patterns, the conversion cliff, maybe the mismatch itself — but you didn’t fully connect the metric problem to the funnel problem before you had to explain both in one sentence. That gap is common and specific: it’s easy to notice that a number “feels wrong” and much harder to prove which number is wrong and why, especially when the wrong one is dressed up in a p-value. The instinct was sound. What separates this from the top band is discipline about the difference between “this test was valid” and “this metric measures the right thing” — they’re not the same claim, and this scenario was built around that gap on purpose.',
  C:'This morning is exactly how confident, well-run experiments go wrong in real companies: not through fraud or sloppiness, but through a metric that quietly stopped meaning what everyone assumed it meant. The clock and the confident voices pushed you toward validating the win rather than interrogating it — checking the test’s rigor, hearing the pitch again, scanning what competitors are doing — all of which feel like diligence and none of which touch what the event actually counts. The tell was sitting in the dashboard the whole time: a metric can’t jump 23 points while the business underneath it gets worse unless the metric and the business stopped measuring the same thing. Next time a test “wins” cleanly, ask the harder question first: what, exactly, does this number count — and would it have counted the same thing a month ago?'
};

var PICK_LINES3 = {
  C1:'A tour of what everyone else is charging. Zero information about why GyanSetu’s own numbers moved.',
  C2:'This is the single most decisive thing on the menu — the moment “the test won” stops being the end of the story and starts being the question.',
  C3:'Sized part of the signup bump honestly. Doesn’t touch conversion, retention, or what the activation event actually counts.',
  C4:'This is where the real mechanism shows up: matched users convert better than the old flow ever did. The fast entry wasn’t the problem — what happened right after it was.',
  C5:'Confirmed the test was run cleanly. That’s a real and useful fact — and a dangerous one to stop at, because it answers “was this valid” while quietly dodging “was this the right thing to measure.”',
  C6:'A reasonable reflex in a 2G-heavy market — and low-yield here, because the drop showed up on every network equally. A pick spent ruling out something that was never really in question.',
  C7:'Real users, in their own words, describing both halves of the twist — the wrong course and the “completed” lesson nobody watched — days before any query ran.',
  C8:'Careful and legitimate hygiene. The flow says exactly what it does. It just doesn’t do what a specific-exam aspirant needs.',
  C9:'The same pitch you already had in writing, delivered with more conviction. Conviction isn’t a new data point.',
  C10:'This is the number that should have existed before the rollout decision, not after it — and it explains why nobody had it: the test ran 14 days, and 30-day retention needs 30.',
  C11:'Confirms the surge is real and the team is stretched. Doesn’t tell you what’s generating it.',
  C12:'The hardest possible proof that “activation” stopped meaning what it used to: 61% of Sprint’s “starts” didn’t make it past ten seconds.'
};

var MISSED_CLAUSES3 = {
  C2:'exactly what fires the activation event — when a metric jumps 23 points, the first question isn’t “is that real,” it’s “real compared to what definition”',
  C4:'whether the recommended course actually matches what the user asked for — the fallback logic broke silently, and 78% of users walked straight into it',
  C7:'the raw ticket text — users were describing this root cause, in plain language, for free, all month',
  C10:'conversion and retention broken out new-flow vs old — and the reminder that the original test structurally couldn’t have shown you this in 14 days',
  C12:'how much of a “started” lesson users actually watched — the one number that turns “activation is up” from a headline into a question'
};

var SHARE_URL3 = 'https://chandu45-droid.github.io/pm-simulator/';

function revealBody3(id, idx){
  var t1 = TIMES3[idx+1];
  switch(id){
  case 'C1':
    return '<div class="dumpcard"><div class="dumphead">testbazaar.in · competitor site</div><div class="dumpbody">'+
      '<div class="ticket">A “Mega Diwali Sale” banner, 40% off annual plans, a countdown timer. Two other exam-prep apps have similar seasonal offers running.</div>'+
      '</div></div>'+
      '<div class="marginnote">Nothing here is new, nothing is timed to Sprint’s rollout, and none of it explains why GyanSetu’s own numbers moved. It’s a real market, just not this month’s story. No new information about GyanSetu. One pick spent.</div>';
  case 'C2':
    return groupHTML(P3.rohan, 'replies with the event schema', [
      '<code>lesson_started</code> fires client-side the moment the video player component mounts and begins buffering — not after any watch threshold, not after a tap.',
      'In the old flow, that same event only fired after a user (a) completed the diagnostic test, (b) landed on their matched course page, and (c) manually tapped “Start Lesson 1” — three deliberate actions.',
      'In Sprint, the recommended lesson autoplays on the onboarding screen itself. The player component mounts within ~2 seconds of signup, before the user has done anything at all.',
      'Rohan’s note: “We didn’t A/B test onboarding. We accidentally A/B tested two different definitions of the same event name.”'
    ]);
  case 'C3':
    return '<div class="dumpcard"><div class="dumphead">#marketing · Slack thread</div><div class="dumpbody">'+
      '<div class="ticket">Marketing: Yes — “Refer a Dost,” ₹100 off for both sides, went live the same week as Sprint’s 100% rollout. Coincidence of timing, not a coordinated test.</div>'+
      '<div class="ticket">Referral signups are running ~9% of total signups since launch, versus ~4% before the campaign — so roughly a third of the +6,000/week signup increase traces to the referral push, not the onboarding change. A handful of those accounts look like discount-farming duplicates, flagged separately, low volume.</div>'+
      '</div></div>'+
      '<div class="marginnote">It explains part of the signup number. It says nothing about why paying users are converting or renewing less.</div>';
  case 'C4':
    return groupHTML(P3.rohan, 'pulled the cross-tab', [
      'At signup, users state their target exam (SSC / Bank / Railway / State PSC / Other). The old flow used the diagnostic test plus this answer to pick a course. Sprint skips the diagnostic — and it turns out the recommendation engine’s no-diagnostic fallback was never properly wired. It silently defaults almost everyone into the same course: “SSC CGL Tier-1 Foundation.”',
      '<strong>78% of Sprint users land in a course that doesn’t match their stated exam.</strong> And the split by match matters a lot:',
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">7-day conversion by course match</caption><thead><tr><th scope="col">Segment</th><th scope="col" class="r">7-day conversion</th></tr></thead><tbody>'+
      '<tr><td>Course matches stated exam</td><td class="num hero">10.0%</td></tr>'+
      '<tr><td>Course does not match</td><td class="num">3.3%</td></tr>'+
      '<tr><td>Blended (78% mismatched)</td><td class="num">4.8% — this is the dashboard number</td></tr>'+
      '</tbody></table></div>',
      'Rohan’s note: “When the match is right, Sprint actually converts BETTER than the old flow ever did. The fast entry point isn’t the problem. What happens after signup is.”'
    ]);
  case 'C5':
    return '<div class="dumpcard"><div class="dumphead">Rohan (Data) + Neha (Growth) · joint reply</div><div class="dumpbody">'+
      '<div class="ticket">Nothing wrong with the methodology. 50/50 split, ~80,000 users per arm, ran 14 days, no sample-ratio mismatch (49.8% / 50.2%), activation lift 60% → 85% at p&lt;0.001. By every standard experimentation checklist, this was a clean, well-powered test.</div>'+
      '</div></div>'+
      '<div class="marginnote">The test was run correctly. It just correctly measured the wrong thing — and rigor on the “how” says nothing about the “what.” If you stop here, this becomes the reassurance you take to the 4 PM review.</div>';
  case 'C6':
    return groupHTML(P3.rohan, t1, [
      'Drop-off shape is nearly identical on 2G/3G vs 4G/WiFi, and across price tiers of phone. No device-specific clustering. Whatever this is, it isn’t a connectivity problem — it’s hitting everyone who signs up, regardless of network.'
    ]);
  case 'C7':
    return '<div class="dumpcard"><div class="dumphead">support &amp; refund tickets · this week · unedited</div><div class="dumpbody">'+
      ticketB('“I signed up for Railway exam prep but the app only shows me SSC CGL topics. This is not what I asked for. Please change my course or refund.”','— Kanpur')+
      ticketB('“The first video started playing on its own before I even chose anything. I closed the app within a few seconds. Today it shows as ‘completed’ in my progress — I never watched it.”','— Muzaffarpur')+
      ticketB('“Wasted my 7-day trial on the wrong syllabus. I don’t have time to waste, my exam is in 3 months.”','— Jaipur')+
      ticketB('“Where is the placement test? Last time I used this app it asked me questions first and then gave me the right course. Now it just throws me into something.”','— Gorakhpur')+
      '<div class="ticket">Six more, same shape: wrong course for the stated exam, or a lesson marked “completed” that nobody actually watched.</div>'+
      '</div></div>'+
      '<div class="marginnote">None of the ten mention pricing or a competitor. All ten describe either a mismatched course or a “completed” status they didn’t earn.</div>';
  case 'C8':
    return '<div class="dumpcard"><div class="dumphead">onboarding flow · screen-by-screen copy read</div><div class="dumpbody">'+
      '<div class="ticket">Copy is clear — “Start Learning,” a one-line note that a course has been picked “based on your goal.” No confusing text, no dark patterns. One minor nit: the “Continue” button’s contrast is slightly low against the background, flagged to design.</div>'+
      '</div></div>'+
      '<div class="marginnote">Nothing here explains the numbers. The flow says what it does; it just doesn’t do what a user preparing for a specific exam needs it to.</div>';
  case 'C9':
    return groupHTML(P3.neha, 'live, in the growth review walkthrough', [
      '“Sprint WON. 60% to 85% activation, statistically significant, clean test, no asterisks. If renewals are down, that’s a renewals-team problem or a seasonal thing — it is not an onboarding problem. I’d hate for one confusing month to make us second-guess a result the data was completely clear on.”'
    ]) + '<div class="marginnote">It’s the same claim that’s in her message in your inbox, delivered with more conviction and zero new numbers. No new information. One pick spent.</div>';
  case 'C10':
    return groupHTML(P3.rohan, t1, [
      'Company-wide, since 100% rollout: 7-day conversion 4.8% (down from 6.9%), 30-day retention 61% (down from 72%). Both have been falling since the exact week Sprint went live and haven’t recovered.',
      'One more thing worth saying plainly: the original A/B test ran for 14 days. Thirty-day retention cannot report a number in a 14-day window — it structurally could not have shown up before the go/no-go call got made. The team shipped on the one metric that could report fast, and the two metrics that actually pay the bills never got a chance to vote.'
    ]);
  case 'C11':
    return '<div class="dumpcard"><div class="dumphead">support · SLA &amp; staffing · this week</div><div class="dumpbody">'+
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Support SLA and staffing summary</caption><tbody>'+
      '<tr><td>Ticket volume</td><td class="num hero">980/week (2.3x baseline)</td></tr>'+
      '<tr><td>Avg response time</td><td class="num">5 hrs → 19 hrs</td></tr>'+
      '<tr><td>Agents on leave this week</td><td class="num">2</td></tr>'+
      '</tbody></table></div></div></div>'+
      '<div class="marginnote">Ayesha’s manager note: “We’re triaging, not solving. Whatever’s generating this needs to stop at the source — we can’t out-hire our way through it.”</div>';
  case 'C12':
    return groupHTML(P3.rohan, t1, [
      'Of users whose <code>lesson_started</code> event fired — pulled watch-depth on the same session:',
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Watch-depth by flow</caption><thead><tr><th scope="col">Flow</th><th scope="col" class="r">Watched ≥50%</th><th scope="col" class="r">Watched &lt;10 seconds</th></tr></thead><tbody>'+
      '<tr><td>Old flow (diagnostic-first)</td><td class="num">88%</td><td class="num">4%</td></tr>'+
      '<tr><td>Sprint (autoplay)</td><td class="num hero">19%</td><td class="num hero">61%</td></tr>'+
      '</tbody></table></div>',
      'Rohan’s note: “In the old flow, ‘started’ mostly meant someone chose to press play. In Sprint, ‘started’ mostly means the video buffered before the user did anything at all. Same event name. Different thing being measured.”'
    ]);
  }
  return '';
}

var ORIENT_HTML3 = '<p>It’s Thursday, 9:12 AM — the number everyone celebrated a month ago is still up, and the business underneath it is still down. You’re the Senior PM at <strong>GyanSetu</strong>, an exam-prep app for India’s government-job aspirants. Four weeks ago your team shipped “Project Sprint” — a faster onboarding flow that won its A/B test on Day-1 activation, clean and statistically significant. Growth review is at 4:00 PM, and today’s numbers go straight into Friday’s investor pre-read.</p>';
var TRUTH_HTML3 = '<div class="dsec"><div class="kicker">What was actually true</div>'+
    '<p>Project Sprint changed one thing — how a new user reaches their first lesson — and that single change quietly did two different jobs at once, only one of which was intended.</p>'+
    '<p>The first job: it redefined what “activation” measures. In the old flow, <code>lesson_started</code> fired only after a user finished a diagnostic test, got placed into a matched course, and chose to tap play — three deliberate actions. In Sprint, a lesson autoplays the moment onboarding finishes, so the same event fires the instant the video player loads, whether or not anyone watches a single second. Watch-depth data confirms it starkly: 88% of “activated” users in the old flow watched at least half the video; in Sprint, only 19% did, and 61% watched less than ten seconds. The 60%-to-85% lift the team celebrated was mostly a redefinition of the finish line, not a change in behavior.</p>'+
    '<p>The second job — the one that actually explains the falling business metrics — is that skipping the diagnostic broke the course-recommendation engine’s fallback logic. Without a diagnostic result to route on, 78% of new users get silently defaulted into the same generic course regardless of what exam they told the app they’re preparing for. Mismatched users convert at 3.3%; correctly matched users convert at 10.0% — genuinely better than the old flow’s 6.9% baseline. The fast entry point was never the problem. What happened to users after that fast entry — dumped into the wrong syllabus with a fixed exam date bearing down on them — is what drove conversion, retention, and support tickets in the direction they moved.</p>'+
    '<p class="closer">Both mechanisms trace to one root cause.</p>'+
    '<p>And both were invisible at launch for the same reason: the original A/B test ran 14 days, measuring only Day-1 activation, and 30-day retention structurally cannot report a number inside a 14-day window. The team didn’t ignore the metrics that mattered — those metrics never got the chance to vote before the rollout decision was made.</p>'+
    '<p>Neha wasn’t lying — the test really was clean, really was significant, really did show 60% to 85%. She was <strong>confidently right about the wrong question</strong>: rigorous experimentation answered “did the event fire more often,” not “did users learn anything or stay.” Vikram wasn’t lying either — SSC’s exam date really did move, and seasonal dips are a real pattern at GyanSetu. He was <strong>confidently incomplete</strong>: a real seasonal effect existed, and it wasn’t sized against a root cause hiding in the same month, so it absorbed blame that belonged to the funnel. Ayesha was holding the real signal the whole time, buried under an apology for bothering anyone with it: the tickets, read in the users’ own words, described both halves of the twist for free, days before anyone ran a single query.</p></div>';
var FOOTER_HTML3 = '<footer class="sitefooter">GyanSetu, TestBazaar and Prospera Capital are fictional. Inspired by patterns, not incidents.<br>Built in India · A structured-debrief simulator — no AI grades your words.</footer>';
var PTS3 = {C2:3,C4:3,C7:3,C10:3,C12:3,C3:1,C6:1,C8:1,C11:1,C1:0,C5:0,C9:0};

var DECISION_INFORMED_IDS3 = ['C2','C4','C10'];

var DECISION_OPTIONS3 = {
  D1: {short:'Full rollback', t:'Full rollback to the old onboarding.', b:'“Revert Sprint entirely — bring back the diagnostic-first flow, no autoplay. Figure out the rest later.”'},
  D2: {
    default: {short:'Reinstate diagnostic, on instinct', t:'Reinstate the diagnostic, on instinct.', b:'“Something about skipping the diagnostic feels like the issue. Bring it back and hope that’s the fix.”'},
    informed: {short:'Reinstate diagnostic, keep speed', t:'Reinstate the diagnostic, keep the fast entry point.', b:'“Keep Sprint’s speed, but don’t let a lesson autoplay until the user has been correctly matched. Rebuild the diagnostic as a short, 5-question version instead of the old 3-minute one.”'}
  },
  D3: {short:'Redefine the metric only', t:'Redefine the metric only, leave the flow unchanged.', b:'“Fix what ‘activation’ measures so it reflects real watch-through. Don’t touch the onboarding flow itself yet.”'},
  D4: {short:'Launch a win-back discount', t:'Leave the product alone; launch a win-back discount.', b:'“Don’t touch Sprint. Send a ₹300-off renewal coupon to the affected cohort to recover conversion this cycle.”'},
  D5: {short:'Re-run the test from scratch', t:'Declare the test result invalid; re-run the whole experiment from scratch.', b:'“Treat Sprint’s original A/B result as unreliable. Pause the rollout question and re-run the test properly.”'}
};

var DECISION_CONSEQUENCE3 = {
  D1: function(){
    return '<p>Live within a day. Activation drops back to ~61% within a week — expected, and honestly fine, since it was never real engagement to begin with. 7-day conversion recovers to ~7.6% by week three, 30-day retention climbs back toward 70% by week six. But you’ve also given up the genuinely good part of Sprint — sub-30-second time-to-first-lesson, which real usability sessions (never contradicted by anything you found) showed users liked. Neha is publicly annoyed: “We reverted five weeks of work because a metric was named badly, not because the flow was bad.”</p>'+
      cqBubble(SC().cast.saurabh, '“Rollback was right for right now. But what do we bring back, and how will we know it’s safe?”');
  },
  D2: {
    informed: function(){
      return '<p>Live within a week. Time-to-first-lesson stays under 90 seconds — genuinely faster than the old flow, just no longer blind. Within three weeks: 7-day conversion climbs to 7.4%, 30-day retention to 72%, and Day-1 activation — now measuring actual watch-through, honestly defined — settles at 68%, still above the old 61% baseline, because the shorter diagnostic really does help. Ticket volume halves by week four. The fix works because it keeps what was earning and repairs only what was broken.</p>'+
        cqBubble(SC().cast.neha, '“The fast entry wasn’t the problem. I optimized for the wrong finish line. My bad — and thanks for catching it before Friday.”');
    },
    default: function(){
      return '<p>The same action, taken without the mismatch or instrumentation evidence behind it. It happens to be right — the diagnostic goes back, mismatch drops. But without knowing why it worked, you also reflexively push a rushed redefinition of the activation event that undercounts real engagement for two weeks — a new instrumentation wobble, this time in the opposite direction, that muddies the numbers and forces a second correction. Outcomes converge with the informed path by week five, but you spend an extra week explaining a second data hiccup you created yourself.</p>';
    }
  },
  D3: function(){
    return '<p>The dashboard gets honest fast — activation drops overnight from 84% to a true 21%, an uncomfortable number but a real one, and Saurabh appreciates the honesty. But the underlying course mismatch is untouched: 7-day conversion stays at ~4.8%, 30-day retention stays depressed, tickets keep coming. You’ve fixed the instrument without treating the patient. Within two weeks someone asks the obvious next question — “activation’s honest now, so why is it still bad?” — and you’re back investigating the same funnel with less goodwill than you started with.</p>';
  },
  D4: function(){
    return '<p>The coupon recovers about a third of the conversion gap for one billing cycle — a real, visible bump that looks good in Friday’s update. But the mismatch keeps feeding new users into the wrong course every single day, so the next cohort shows the same drop, and the coupon quietly becomes something Vikram’s team now expects to run monthly just to hold the line.</p>'+
      cqBubble(SC().cast.saurabh, '“We’re paying people to convert despite a funnel that’s still broken. That’s not a strategy, that’s a subsidy.”');
  },
  D5: function(){
    return '<p>Costly and slow. A fresh 2-week test needs a new cohort, pushing any real fix out by roughly a month — during which the current flow stays live at 100% and keeps mismatching new users daily. When the re-run finally reports, it reproduces the exact same activation lift and the exact same downstream conversion drop, because nothing about the flow or the metric changed in between. You spent a month of continued damage to re-confirm what an afternoon of reading logs could have told you today.</p>';
  }
};

var DECISION_PTS3 = {D1:3, D2:{informed:5, default:1}, D3:2, D4:1, D5:0};

var FRAMING_CONSEQUENCE3 = {
  F1: {
    informed: function(){
      return '<p>You lay out the event-definition change, the 78% course-mismatch rate, and the matched-vs-mismatched conversion split in under a minute. The room moves on to the next agenda item, which is what a clear diagnosis earns you.</p>'+
        cqBubble(SC().cast.saurabh, '“That’s not spin, that’s a diagnosis. Prospera’s analyst will ask sharper questions than I do — send me this exact paragraph tonight.”');
    },
    default: function(){
      return '<p>You say the line, but you don’t have the mechanism ready. Saurabh presses: which flow, which cohort — show me. You can’t.</p>'+
        cqBubble(SC().cast.saurabh, '“Then what you’ve got is a theory with confident phrasing. Get me the numbers before the pre-read goes out, not after.”');
    }
  },
  F2: function(){ return '<p>Frame it as a joint, no-blame correction, handled internally without a big announcement.</p>'+
    cqBubble(SC().cast.saurabh, '“Quiet is fine internally. It’s not fine in a pre-read whose last line reads ‘retention down 15%.’ Someone outside this building is going to ask why — ‘we’re handling it quietly’ isn’t an answer for Prospera’s analyst, even if it’s the right instinct for the team.”'); },
  F3: function(){ return '<p>Position it as Growth’s team’s process gap.</p>'+
    cqBubble(SC().cast.saurabh, '“Maybe. But Neha didn’t invent that event name alone, and the review that approved Sprint had your name on it too. Pointing at one desk looks better to you in this room than it’ll look to me tomorrow.”')+
    '<p class="closer">By the next sprint, Neha’s replies to your PRDs get noticeably more formal.</p>'; },
  F4: function(){ return '<p>Ask for more time before committing to a read.</p>'+
    cqBubble(SC().cast.saurabh, '“Friday’s update goes out with or without your conclusions. I can write ‘still investigating’ myself — I was hoping I wouldn’t have to.”')+
    '<p class="closer">He absorbs the awkward line in the deck at his own expense, and the meeting after this meeting is about why his PM had a full day and came back with a request for more of it.</p>'; }
};

var FRAMING_MOD3 = {F1:{informed:3, default:0}, F2:1, F3:-2, F4:-1};

var DECISION_LINE3 = {
  D1: 'Full rollback stopped the bleeding and gave back the one part of Sprint that was genuinely good — the fast entry point was never the problem, and now it’s gone too.',
  D2: {
    informed: 'The highest-skill move on the menu, and only available because you’d earned it: keep the speed, fix the placement. Evidence is what turns “revert everything” into “repair the one broken part.”',
    default: 'The right instinct, taken without the evidence to aim it — and the lack of aim cost you a second, self-inflicted data wobble on the way to the same outcome.'
  },
  D3: 'Fixing the metric without fixing the funnel makes the dashboard honest and the business unchanged. Honesty about a broken thing isn’t the same as repairing it.',
  D4: 'A coupon treats the symptom at the site of the pain, and it works — for one billing cycle. The mismatch keeps generating the same gap every month until something structural changes.',
  D5: 'Re-running a test that was already run correctly, to answer a question the first test never actually asked, cost a month of continued damage for a result you could already predict.'
};

var FRAMING_LINE3 = {
  F1: {
    informed: 'You didn’t just have the right read — you could defend it cold, with the mechanism attached, in under a minute. That’s what makes a diagnosis land instead of just a guess.',
    default: 'The right instinct, stated without the numbers to back it, is indistinguishable from a lucky guess in the room — and it won’t survive an analyst’s second question.'
  },
  F2: 'Quiet and collaborative internally, and read as under-explaining externally — a pre-read with a number moving 15 points needs a reason attached, not a promise to handle it.',
  F3: 'Naming Growth’s process gap wasn’t wrong on the facts. It landed as blame anyway, and blame in a room with your own sign-off on the same launch travels back to you.',
  F4: 'Asking for more time is a legitimate move — it just isn’t free, and the person who absorbs the cost of your extra day is the one who vouched for you in the deck.'
};

function s03Dims(picks, decision, framing, sc){
  function clamp(v){ return Math.max(1, Math.min(5, v)); }
  function has(id){ return picks.indexOf(id)>=0; }
  function count(ids){ var n=0; for (var i=0;i<ids.length;i++) if (has(ids[i])) n++; return n; }
  var SHARP = ['C2','C4','C7','C10','C12'];
  var TRAPS = ['C1','C5','C9'];
  var d2informed = decision==='D2' && sc.informed;
  var logical = clamp(1 + (has('C2')?1:0) + (has('C4')?1:0) + (has('C10')?1:0) + (decision==='D2'?1:0));
  var data = clamp(1 + Math.min(count(SHARP),4));
  var assumption = clamp(3 - count(TRAPS) + ((has('C2')||has('C5'))?1:0));
  var risk = clamp(1 + (has('C10')?2:0) + (has('C7')?1:0) + (decision==='D2'?1:0));
  var prioritization = decision==='D2' ? (d2informed?5:3) : decision==='D1' ? 4 : decision==='D3' ? 3 : decision==='D4' ? 2 : 1;
  var stakeholder = framing==='F1' ? (sc.informed?5:3) : framing==='F2' ? 4 : framing==='F4' ? 2 : framing==='F3' ? 1 : 1;
  var empathy = clamp(2 + (has('C7')?1:0) + (has('C12')?1:0) + (decision==='D2'?1:0));
  var biz = clamp(1 + (has('C4')?1:0) + (has('C10')?1:0) + (d2informed?2:0) + (decision==='D2' && !d2informed?1:0));
  var integrityFires = has('C5') && decision==='D5';
  var comm = clamp((framing==='F1' ? (sc.informed?5:3) : framing==='F2' ? 3 : framing==='F3' ? 2 : framing==='F4' ? 2 : 1) - (integrityFires?1:0));
  return [logical, data, assumption, risk, prioritization, stakeholder, empathy, biz, comm];
}

/* Registry facade — engine reads scenarios through this. */
window.PMSIM = window.PMSIM || { scenarios: {} };
window.PMSIM.scenarios['s03'] = {
  id: 's03',
  title: SC_META3.h1,
  company: SC_META3.company,
  tagline: SC_META3.tagline,
  tile: SC_META3.tile,
  dashKicker: SC_META3.dashKicker,
  onepagerLabel: SC_META3.onepagerLabel,
  times: TIMES3,
  cast: P3,
  ceoKey: 'saurabh',
  dashTitle: 'The Thursday dashboard',
  statusBarLabel: 'GyanSetuOS',
  lockHint: 'Tap the message from Saurabh ↑',
  beginBarText: '4:00 PM — Saurabh’s chat pops up',
  orientHead: 'It’s Thursday, 9:12 AM.',
  clock: { day: 'Thursday', orientTime: '9:12 AM', lockStart: '08:20', lockReveal: '09:05', chatTime: '9:05 AM', deadline: 'until 4:00 PM' },
  decisionPrompt: "In the conference room in five. What's the read?",
  chat: { channel: 'gyansetu-hq', avatars: [{ t: 'N', bg: '#B45309' }, { t: 'V', bg: '#6D28D9' }, { t: 'A', bg: '#BE185D' }] },
  cabin: {
    sceneline: '4:00 PM · Growth review',
    narration: 'Saurabh sets his phone face-down on the table.',
    pullquote: '“Prospera’s pre-read goes out tomorrow morning. Their analyst is going to see ‘Day-1 activation +38%’ on one line and ‘retention down’ on another, in the same deck, and she reads decks like this for a living. Give me the sentence that explains both.”',
    pqBy: 'Saurabh Mehta · Founder &amp; CEO'
  },
  notifs: NOTIFS3,
  ceoBubbles: CEO_BUBBLES3,
  onepager: ONEPAGER3,
  dashRows: DASH_ROWS3,
  dash: {
    metricsCaption: 'Since-rollout metrics vs pre-rollout baseline',
    metricsHeaders: ['Since rollout (4-wk avg)', 'Baseline (pre-rollout)'],
    sub: 'Since Sprint hit 100% rollout (4-wk avg) · vs pre-rollout baseline (4-wk avg)',
    trend: {
      ariaLabel: 'Since-rollout trend',
      columns: [],
      note: '— activation jumped the week Sprint hit 100% rollout and has held ever since. Conversion started falling the same week and hasn’t recovered. This summary view isn’t cut by course match or actual watch-through.'
    }
  },
  inbox: INBOX3,
  menu: { order: MENU_ORDER3, byId: MENU_BY_ID3 },
  fopts: FOPTS3,
  pts: PTS3,
  dims: s03Dims,
  decision: { informedIds: DECISION_INFORMED_IDS3, informedThreshold: 2, options: DECISION_OPTIONS3, consequence: DECISION_CONSEQUENCE3, pts: DECISION_PTS3 },
  framing: { consequence: FRAMING_CONSEQUENCE3, mod: FRAMING_MOD3 },
  debrief: {
    bands: { title: BAND_TITLE3, text: BAND_TEXT3 },
    pickLines: PICK_LINES3,
    missedClauses: MISSED_CLAUSES3,
    orientHtml: ORIENT_HTML3,
    truthHtml: TRUTH_HTML3,
    footerHtml: FOOTER_HTML3,
    decisionLine: DECISION_LINE3,
    framingLine: FRAMING_LINE3,
    integrity: {
      pick: 'C5',
      decision: 'D5',
      text: function(pt){
        return 'One more thing, said plainly, because a mentor should: you personally confirmed the original test was statistically rigorous, and then recommended re-running it as if the result itself were unreliable. That’s not a data mistake — the test was fine and you knew it. The rigorous thing to question wasn’t the test. It was the metric.';
      }
    }
  },
  share: { url: SHARE_URL3, line: 'One tense Thursday at an edtech startup — a winning A/B test, a losing renewals number, no clean story yet.' },
  revealBody: revealBody3
};
