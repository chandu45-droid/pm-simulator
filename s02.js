/* PM Simulator — scenario s02 data. Loaded before engine. */
var SC_META2 = { h1:'Rokda — a PM decision simulator', company:'Rokda', tile:'RK', tagline:'“Payments that work where the signal doesn’t.”', dashKicker:'Rokda · Metrics', onepagerLabel:'Rokda — company one-pager' };
var TIMES2 = ['9:15 AM','9:40 AM','10:05 AM','10:30 AM','10:55 AM'];

var P2 = {
  kabir:{full:'Kabir Seth', n:'Kabir Seth', r:'VP PRODUCT', a:'KS', c:'var(--ink-900)'},
  meher:{full:'Meher Chopra', n:'Meher', r:'GROWTH', a:'M', c:'#B45309'},
  arjun:{full:'Arjun Nair', n:'Arjun', r:'ENTERPRISE SALES', a:'A', c:'#6D28D9'},
  divya:{full:'Divya Kulkarni', n:'Divya', r:'SUPPORT/OPS', a:'D', c:'#BE185D'},
  neel:{full:'Neel Rao', n:'Neel', r:'DATA &amp; ANALYTICS', a:'N', c:'#0E7490'},
  kavita:{full:'Kavita Iyer', n:'Kavita', r:'FINANCE', a:'K', c:'#15803D'}
};

var NOTIFS2 = [
  {icon:'<span class="appicon" style="background:var(--ink-700)" aria-hidden="true">★</span>', src:'App Store', time:'08:41', body:'New review on Rokda: ★☆☆☆☆'},
  {icon:'<span class="appicon disc" style="background:var(--gain-700)" aria-hidden="true">DK</span>', src:'Divya Kulkarni (Support)', time:'08:54', body:'hey — got a min today? not urgent urgent, just been a rough week on the queue'},
  {icon:'<span class="appicon disc" style="background:var(--ink-900)" aria-hidden="true">KS</span>', src:'Kabir Seth (VP Product)', time:'09:00', body:'See me before 11 →'}
];

var CEO_BUBBLES2 = [
  'Morning! Hope week two’s treating you okay.',
  'Sprint planning starts at 11:00 sharp. Meher, Arjun and Divya have all pitched me their “urgent” thing for the one sprint we’ve got free this cycle — I told all three the same thing: take it to the PM, that’s literally the job now.',
  'One sprint. One call. I’m not going to make it for you — but I am going to ask you to defend it in the room at 11. Dig in before you decide.',
  'See you at 11.'
];

var ONEPAGER2 = [
  ['What','UPI payments app built for kirana merchants and their customers — QR collections, zero-MDR settlement, and small merchant working-capital tools.'],
  ['Scale','<strong>4.2M merchants</strong> onboarded · 38M monthly active consumers · ~₹9,400 Cr in monthly transaction value.'],
  ['Funding','Series C, <strong>₹640 Cr</strong> raised, closed 14 months ago.'],
  ['Why we win','Zero-MDR QR for small merchants, an app that works on 2G and weak signal, and support in the merchant’s own language.'],
  ['Users','68% of consumers are in tier-2/tier-3 towns. <strong>54% of merchants</strong> transact on Android phones priced under ₹8,000.'],
  ['You','Associate PM, Payments Reliability &amp; Merchant Experience pod. Five days in. <strong>This is your first solo prioritization call</strong> — everything before this was shadowing.']
];

var DASH_ROWS2 = function(){ return [
  ['UPI transaction success rate','94.6%','98.4%', chip('loss','down','−3.8pp','down 3.8 percentage points — worse'), true],
  ['App Store rating','3.4★','4.2★', chip('loss','down','−0.8','down 0.8 stars — worse'), false],
  ['Payment-failure support tickets','1,240/wk','310/wk', chip('loss','up','+300%','up 300 percent — worse'), false]
];};

var INBOX2 = [
  {id:'kabir', p:P2.kabir, time:'9:00 AM', prev:'See me before 11 →',
   bubbles:CEO_BUBBLES2},
  {id:'divya', p:P2.divya, time:'8:59 AM', prev:'before you decide anything, can you look at what the queue is actually full of',
   bubbles:['Hey — not urgent urgent, just been a genuinely rough week on the queue, so bear with me if this is a bit of a ramble. Tickets are up something like 4x and it’s not spread out evenly, it’s really concentrated — a lot of it looks the same, customer says money got taken but the merchant never saw it, mostly evenings, mostly smaller towns. My team is drowning a bit honestly. I know Meher and Arjun both have asks this sprint too and I don’t want to be “the whiny one” in the room, but before anyone decides anything I really think someone needs to actually look at what’s IN the queue, not just how big it is. Happy to walk you through it if useful.']},
  {id:'meher', p:P2.meher, time:'9:05 AM', prev:'we are BLEEDING on the App Store, I have a fix ready to build—',
   bubbles:['Okay so — we are BLEEDING on the App Store, I have a fix ready to build. Rating’s down almost a full star and it happened right around when PaisaJet launched their Scratch &amp; Win rewards program. Users are LITERALLY comparing us to them in reviews. I’ve got specs ready for a rewards feature — one sprint, and I think we can turn the install-conversion numbers around before this becomes a real growth problem. This is the fire. Please don’t let this sit.']},
  {id:'arjun', p:P2.arjun, time:'9:08 AM', prev:'Saral Mart renewal is in 45 days and this is the one thing that closes it',
   bubbles:['Saral Mart renewal is in 45 days and this is the one thing that closes it. They’ve been asking for instant settlement for two quarters — T+1 doesn’t work for their store network’s cash flow and their ops head has said flat out that a competitor already offered T+0. That’s ₹4.2 Cr/year and six other enterprise accounts watching how we handle this one. I know everyone’s got their own “urgent” this week, but this one has a signature on it.']}
];

var MENU_ORDER2 = ['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10','B11','B12'];

var MENU_BY_ID2 = {
  B1:{t:'Escalate to Kabir for a snap call.', s:'He’s got five minutes before his next meeting. Ask him to just make the decision.', short:'Escalate to Kabir', skin:'call'},
  B2:{t:'Pull a success-rate cut by device and town tier.', s:'Ask Data to split this week’s number instead of taking the blended average at face value.', short:'Segment cut', skin:'chat'},
  B3:{t:'Ask Finance for a revenue breakdown by merchant segment.', s:'Get the real numbers behind SMB vs. enterprise revenue mix.', short:'Finance breakdown', skin:'chat'},
  B4:{t:'Read a sample of this week’s payment-failure tickets.', s:'Open ten real tickets from the support queue instead of the summary count.', short:'Ticket sample', skin:'dump'},
  B5:{t:'Look at PaisaJet’s app and marketing site.', s:'The Growth team keeps citing this competitor’s rewards program. See it yourself.', short:'PaisaJet’s site', skin:'dump'},
  B6:{t:'Pull Support’s SLA and staffing report.', s:'Find out how the team is actually coping with 4x ticket volume.', short:'SLA &amp; staffing', skin:'dump'},
  B7:{t:'Check the payments network’s quarterly compliance dashboard.', s:'See where Rokda actually stands against the mandated success-rate floor.', short:'Compliance dashboard', skin:'dump'},
  B8:{t:'Read a random sample of the last 50 App Store reviews.', s:'Not just the one-star headline count — what do people actually write?', short:'Review sample', skin:'dump'},
  B9:{t:'Sit in on Growth’s morning stand-up.', s:'Hear Meher’s pitch directly from the team, not secondhand.', short:'Growth’s stand-up', skin:'chat'},
  B10:{t:'Read last year’s festival-season engineering postmortem.', s:'Rokda had a rough Diwali before this one too. Find the writeup.', short:'Last year’s postmortem', skin:'dump'},
  B11:{t:'Check Saral Mart’s contract and renewal notes.', s:'Understand what the enterprise account actually needs and by when.', short:'Saral Mart notes', skin:'dump'},
  B12:{t:'Cross-reference failed transactions against merchant churn.', s:'See if merchants who hit failures are actually leaving.', short:'Churn cross-reference', skin:'chat'}
};

var FOPTS2 = [
  {id:'F1', short:'Found the segment cut', t:'“I found the segment cut — this wasn’t close.”', b:'Lay out the device/town-tier table, the compliance margin, and the churn multiplier — if you have them.'},
  {id:'F2', short:'Split the risk evenly', t:'“I split the risk evenly so nobody’s shut out.”', b:'Frame the split-sprint call as protecting all three stakeholders at once.'},
  {id:'F3', short:'Prioritized what’s visible', t:'“Meher’s right that the rating is the fire everyone can see — I prioritized what’s visible.”', b:'Lead with the loudest, most visible metric as the justification.'},
  {id:'F4', short:'Made the safest call', t:'“I didn’t have full information, so I made the safest call I could and flagged the rest for next sprint.”', b:'Admit the information gap and defer the rest to next sprint.'}
];

var BAND_TITLE2 = { A:'Trusted with week two.', B:'You got there — the long way.', C:'Chased the star rating, missed the wallet.' };

var BAND_TEXT2 = {
  A:'You didn’t just land on the right call — you could show your work, in the room, on the spot. That’s the actual skill here, and it’s not “being right.” Plenty of people get lucky on a coin-flip prioritization call. What you did was different: you found the cut that nobody had bothered to make, you noticed the same bug wearing three different costumes, and you walked into a room full of louder, more confident people and out-quieted them with a table. That’s the job. First weeks like this are how a VP decides whether your second month gets bigger calls or smaller ones.',
  B:'You picked up real signal, and somewhere along the way it nudged you toward the right shape of an answer — but you didn’t quite connect all of it before you had to defend it out loud. That gap matters more than it looks like it should: being right without being able to show why is nearly indistinguishable, in the room, from being lucky. The good news is the instinct was sound. The fix isn’t “dig harder” in some vague sense — it’s noticing which specific piece of evidence turns a hunch into a case, and going and getting that piece before the clock runs out.',
  C:'This is a very common first-week trap, and it’s worth naming precisely: the loudest, most confident stakeholder in the room is not automatically the one holding the real signal. The App Store rating was a symptom dressed up as a cause, and it was the easiest story to believe because someone told it to you with total conviction, twice. The actual answer was sitting in a support queue nobody glamorous was fighting to own. Next time: when a metric is loud, ask what’s underneath it before you ask who’s loudest about it.'
};

var PICK_LINES2 = {
  B1:'A five-minute conversation that cost you a quarter of your investigation budget and told you nothing you didn’t already know: it’s your call.',
  B2:'This is the single most decisive thing on the menu — the moment the blended dashboard number stops hiding the real story.',
  B3:'Useful context for sizing Arjun’s ask. Doesn’t tell you what to do about it.',
  B4:'Ten real merchant voices, and not one of them mentions rewards. Hard to unsee once you’ve read it.',
  B5:'A well-produced tour of a competitor’s marketing page. Zero information about Rokda.',
  B6:'Confirms the support team is drowning. Doesn’t tell you why.',
  B7:'This is where “someday” gets a date on it. The margin is thinner than the headline number.',
  B8:'A real, if noisy, signal — the failure theme is the plurality, but it takes a careful read to see that.',
  B9:'The same pitch you already had in writing, delivered louder. No new numbers came with the volume.',
  B10:'The bug isn’t new. It was scoped, then cut, twice. This explains why it’s still here.',
  B11:'Sizes the enterprise ask honestly — and if you read closely, even Saral Mart isn’t fully insulated from the reliability problem.',
  B12:'This is the line that turns “a support headache” into “a revenue problem.” Five times the churn rate isn’t a rounding error.'
};

var MISSED_CLAUSES2 = {
  B2:'the segment cut showing which users are actually failing — tier-2/3 Android during festival-peak hours, buried inside a blended dashboard average',
  B4:'the ticket sample showing what customers actually say — ten real merchant voices, and not one mentions rewards',
  B7:'the compliance dashboard showing how little margin is left before the payments network’s success-rate floor',
  B10:'last year’s postmortem showing this isn’t new — the fix was scoped and cut twice before this festival season',
  B12:'the churn data tying failures to real revenue loss — a 5x churn multiplier hiding inside a support-ticket count'
};

var SHARE_URL2 = 'https://chandu45-droid.github.io/pm-simulator/';

function revealBody2(id, idx){
  var t1 = TIMES2[idx+1];
  switch(id){
  case 'B1':
    return '<div class="card" style="padding:var(--sp-4)">'+
      '<div class="callhead">'+SVG.phone+'Call — Kabir Seth <span class="dur">0:38</span></div>'+
      '<div class="sysline">He looks up from his laptop.</div>'+
      '<div class="callline"><strong>Kabir:</strong> “You’re asking me to make the call you’re supposed to walk into the room with at 11. That’s not me being difficult — that’s the job. Go find out what’s actually going on and come back with a recommendation. I’ll back it either way, as long as it’s yours.”</div>'+
      '<div class="sysline">Call ended · '+t1+'</div>'+
      '<div class="callline">No new information. One pick spent.</div></div>';
  case 'B2':
    return groupHTML(P2.neel, 'replies in 10 min', [
      'Ran the cut. It was never on the default dashboard:',
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Success rate by device and town tier</caption><thead><tr><th scope="col">Segment</th><th scope="col" class="r">Share</th><th scope="col" class="r">Success rate</th><th scope="col" class="r">Failed txns</th></tr></thead><tbody>'+
      '<tr><td>Tier-1, iOS</td><td class="num">12%</td><td class="num">99.1%</td><td class="num">~7,700</td></tr>'+
      '<tr><td>Tier-1, Android</td><td class="num">25%</td><td class="num">98.2%</td><td class="num">~32,000</td></tr>'+
      '<tr><td>Tier-2/3, off-peak</td><td class="num">35%</td><td class="num">95.0%</td><td class="num">~124,000</td></tr>'+
      '<tr><td>Tier-2/3, festival-peak (6–11 PM)</td><td class="num hero">28%</td><td class="num hero">89.0%</td><td class="num hero">~219,000</td></tr>'+
      '</tbody></table></div>',
      'The blended 94.6% you see on the dashboard is hiding this. Whatever’s happening, it’s concentrated on budget Android in tier-2/3, and it gets dramatically worse during peak evening hours. That’s not a rewards problem.'
    ]);
  case 'B3':
    return groupHTML(P2.kavita, t1, [
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Share of monthly revenue by segment</caption><thead><tr><th scope="col">Segment</th><th scope="col" class="r">Share of revenue</th></tr></thead><tbody>'+
      '<tr><td>SMB / kirana merchants</td><td class="num hero">71%</td></tr>'+
      '<tr><td>Enterprise accounts (Saral Mart + 6 others)</td><td class="num">29%</td></tr>'+
      '</tbody></table></div>',
      'Enterprise is a smaller slice but it’s concentrated — Saral Mart alone is about a third of that 29%. Losing them would sting, but it wouldn’t sink the quarter.'
    ]);
  case 'B4':
    return '<div class="dumpcard"><div class="dumphead">payment-failure tickets · this week · unedited</div><div class="dumpbody">'+
      ticketB('“Customer paid ₹340 for groceries. Amount got deducted from his account but never came into my Rokda balance. Third time this week. I am losing trust in this app now.”','— Ramesh, Kirana Store, Indore')+
      ticketB('“App just hung for 40 seconds during evening rush and then showed failed, but money was taken. Had to refund from my own pocket to keep the customer happy.”','— Sunita, General Store, Bhopal')+
      ticketB('“Every evening after 7 it becomes unusable. Mornings are fine.”','— Anwar, Mobile Recharge Shop, Kanpur')+
      '<div class="ticket">Seven more, same shape: budget-phone customers, evening hours, “debited but not confirmed,” concentrated in smaller towns.</div>'+
      '</div></div>'+
      '<div class="marginnote">None of the ten mention rewards, cashback, or missing features. All ten mention money being taken without the transaction landing.</div>';
  case 'B5':
    return '<div class="dumpcard"><div class="dumphead">paisajet.in · competitor site</div><div class="dumpbody">'+
      '<div class="ticket">Bright banners, a “Scratch &amp; Win” rewards wheel, a countdown timer for a cashback mega-sale. Their App Store rating is 4.4★.</div>'+
      '</div></div>'+
      '<div class="marginnote">It looks flashy. It tells you nothing about why Rokda’s rating actually dropped — you’d need Rokda’s own review text for that, not a competitor’s marketing page. No new information about Rokda. One pick spent.</div>';
  case 'B6':
    return '<div class="dumpcard"><div class="dumphead">support · SLA &amp; staffing · this week</div><div class="dumpbody">'+
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Support SLA and staffing summary</caption><tbody>'+
      '<tr><td>Ticket volume</td><td class="num hero">4x baseline</td></tr>'+
      '<tr><td>Avg response time</td><td class="num">6 hrs → 22 hrs</td></tr>'+
      '<tr><td>Agents flagging burnout</td><td class="num">2</td></tr>'+
      '</tbody></table></div></div></div>'+
      '<div class="marginnote">Divya’s manager note: “We are triaging, not solving. Whatever’s generating this volume needs to stop at the source — we can’t out-hire our way through a bug.”</div>';
  case 'B7':
    return '<div class="dumpcard"><div class="dumphead">payments network · quarterly compliance</div><div class="dumpbody">'+
      '<div class="ticket">The payments network requires every participating app to hold a <strong>≥95% quarterly average success rate</strong>, or transaction routing gets deprioritized for the following quarter — a real throughput hit, not a warning letter.</div>'+
      '<div class="ticket">Quarter-to-date (10 of 13 weeks): <strong class="num">97.1%</strong> blended average. Still comfortably above the floor — for now.</div>'+
      '</div></div>'+
      '<div class="marginnote">Ops’s attached note: “Margin is thinner than the headline number suggests. This week’s dip is smaller than what we’re projecting for the Republic Day sale in six weeks — roughly double Diwali’s traffic. If the same tier-2/3 evening pattern repeats at that scale unaddressed, our modeling puts the quarter average at 95.8%. That clears the floor, barely — and ‘barely’ assumes nothing else moves. One more bad week and it doesn’t.”</div>';
  case 'B8':
    return '<div class="dumpcard"><div class="dumphead">App Store · last 50 reviews · tagged by theme</div><div class="dumpbody">'+
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Review sample tagged by theme</caption><tbody>'+
      '<tr><td>Failed / “money deducted, not received”</td><td class="num hero">21 (42%)</td></tr>'+
      '<tr><td>Unfavourable vs. competitor rewards/cashback</td><td class="num">8 (16%)</td></tr>'+
      '<tr><td>Generic low-effort (“bad app”, “worst”)</td><td class="num">21 (42%)</td></tr>'+
      '</tbody></table></div></div></div>'+
      '<div class="marginnote">The failure theme is the largest single bucket — but it’s not the whole picture, and the generic 42% could be read either way if you’re not careful.</div>';
  case 'B9':
    return groupHTML(P2.meher, 'live, in the stand-up', [
      '“Our rating cratered right when PaisaJet launched their rewards wheel. Users are leaving reviews comparing us directly to them. If we ship Scratch &amp; Win this sprint we can turn the App Store number around before it tanks our install conversion completely. This is a growth emergency.”'
    ]) + '<div class="marginnote">It’s the same claim that’s in her message in your inbox, delivered with more urgency and no new numbers. No new information. One pick spent.</div>';
  case 'B10':
    return '<div class="dumpcard"><div class="dumphead">engineering postmortem · filed 8 months ago</div><div class="dumpbody">'+
      '<div class="ticket">“Success rate dipped on low-end Android during peak evening load — root cause traced to the payment-retry/reconciliation path timing out under high concurrency + weak network, producing ‘debited, not confirmed’ failures. Applied a stopgap retry-interval patch (ships in v4.2). This is NOT a root-cause fix. Flagged for a proper reconciliation-layer rework before next festival season.”</div>'+
      '</div></div>'+
      '<div class="marginnote">A comment thread below: the rework was scoped, then cut from two sprint plans in a row during the Series C fundraise crunch. Last update, 5 months ago: “Still open. Revisit before Diwali.” Diwali came and went.</div>';
  case 'B11':
    return '<div class="dumpcard"><div class="dumphead">Saral Mart · contract &amp; renewal notes</div><div class="dumpbody">'+
      '<div class="ticket">Contract value: ₹4.2 Cr/year. Renewal due in 45 days. Saral Mart’s stated ask: move from T+1 to instant (T+0) settlement, citing cash-flow needs across their store network.</div>'+
      '</div></div>'+
      '<div class="marginnote">Buried in the account notes, dated last week: “Saral Mart’s ops head also mentioned a handful of their tier-2 store managers reporting failed customer payments this festival season — didn’t sound like their main concern, but flagging it.” Their main ask is settlement speed, not reliability — but they’re not entirely insulated from the same problem either.</div>';
  case 'B12':
    return groupHTML(P2.neel, t1, [
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">30-day churn to a competitor QR</caption><thead><tr><th scope="col"></th><th scope="col" class="r">30-day churn</th></tr></thead><tbody>'+
      '<tr><td>Merchants with 0–1 failed transactions</td><td class="num">1.8%</td></tr>'+
      '<tr><td>Merchants with 2+ failed transactions</td><td class="num hero">9.4% (≈5.2x)</td></tr>'+
      '</tbody></table></div>',
      'An estimated ~38,000 merchants hit 2+ failures this week, almost all inside the tier-2/3 festival-peak segment. This isn’t just a support-cost problem. It’s a merchant-retention problem, and merchant retention is the business.'
    ]);
  }
  return '';
}

var ORIENT_HTML2 = '<p>It’s Monday, 9:02 AM — your first Monday running a call of your own. Five days ago you joined <strong>Rokda</strong> — UPI payments built for kirana counters and tier-2/3 India. Three team leads have each pitched your VP Product their “urgent” feature for the team’s one free sprint, and he’s told all three of them the same thing: take it to the new PM.</p>';
var TRUTH_HTML2 = '<div class="dsec"><div class="kicker">What was actually true</div>'+
    '<p>There was one root cause behind all three metrics, and it wasn’t rewards and it wasn’t settlement speed. Rokda’s payment retry-and-reconciliation logic doesn’t handle timeout-and-retry cleanly on budget Android phones under weak network — and it fails at a much higher rate during high-concurrency evening hours. That combination is exactly what tier-2/3 festival-season traffic produces: more transactions, on cheaper phones, on weaker networks, concentrated in the evening. The result is “debited, not confirmed” failures — money leaves the customer’s account and never lands in the merchant’s balance.</p>'+
    '<p>That single bug shows up three separate times on the Monday dashboard wearing three different costumes. It’s the App Store rating drop — the actual review text is dominated by failed-payment complaints, not missing-feature complaints. It’s the support ticket surge — the queue is full of the exact same pattern, just with an English support form around it. And it’s the merchant churn risk — kirana owners who eat a failed transaction twice in a week are five times more likely to walk to a competitor’s QR sticker, and merchant trust is the actual product Rokda sells.</p>'+
    '<p class="closer">It also wasn’t new.</p>'+
    '<p>Last year’s festival season produced the same pattern at smaller scale, got a stopgap patch instead of a real fix, and got quietly deprioritized twice during a fundraise crunch. This is a very ordinary way for real companies to end up back in the same fire a year later — not because nobody knew, but because the fix that would have prevented it never felt as urgent as the thing directly in front of someone that quarter.</p>'+
    '<p>Meher wasn’t lying — the rating really did drop, and PaisaJet’s rewards program really is flashier. She was <strong>confidently wrong</strong>: she read a correlation as causation, without ever reading the review text underneath the star count. Arjun wasn’t lying either — Saral Mart’s renewal really is real revenue on a real clock. He was <strong>confidently incomplete</strong>: his ask was legitimate on its own terms, but blind to the fact that the same reliability problem was quietly nibbling at his own account. Divya was the only one holding the actual signal, and she undersold it — burying the real clue inside an apology for bothering you. The correct answer is often the quietest voice in the room, wrapped in hedging, sitting under two louder and more confident ones.</p></div>';
var FOOTER_HTML2 = '<footer class="sitefooter">Rokda, PaisaJet and Saral Mart are fictional. Inspired by patterns, not incidents.<br>Built in India · A structured-debrief simulator — no AI grades your words.</footer>';
var PTS2 = {B2:3,B4:3,B7:3,B10:3,B12:3,B3:1,B6:1,B8:1,B11:1,B1:0,B5:0,B9:0};

var DECISION_INFORMED_IDS2 = ['B2','B7','B12'];

var DECISION_OPTIONS2 = {
  D1: {short:'Ship rewards', t:'Ship Meher’s “Scratch &amp; Win” rewards feature.', b:'“Let’s fix what’s visible. Full sprint on rewards — I want the App Store number moving by next week.”'},
  D2: {short:'Ship instant settlement', t:'Ship Arjun’s “Instant Settlement” for Saral Mart.', b:'“Enterprise is real revenue on a real clock. Full sprint on instant settlement — we protect the Saral Mart renewal.”'},
  D3: {short:'Ship reliability fix', t:'Ship Divya’s reliability/reconciliation fix.', b:'“We fix the retry-and-reconciliation path for low-end Android under load. Full sprint. Everything else waits.”'},
  D4: {short:'Split the sprint', t:'Split the sprint three ways.', b:'“Let’s give each team something. Reliability gets the lead share, rewards and settlement get a scoped-down slice each.”'},
  D5: {short:'Ask for more time', t:'Ask for more time before deciding.', b:'“I don’t think I have enough information yet — can we push this to Wednesday?”'}
};

var DECISION_CONSEQUENCE2 = {
  D1: function(){
    return '<p>Rewards ships on schedule. The App Store rating ticks up to <span class="m">3.6★</span> over the next two weeks — new reviews mention the rewards wheel, but the one-star “money deducted, not received” reviews keep coming underneath it, unchanged in volume. Support tickets stay at <span class="m">~1,100/week</span>. Six weeks later, the Republic Day sale hits — same tier-2/3 evening pattern, roughly double the traffic. Success rate craters to <span class="m">88%</span> for the week. Quarter-average lands at <span class="m">94.9%</span> — under the network’s 95% floor. Rokda’s transaction routing gets deprioritized for the following quarter.</p>'+
      cqBubble(SC().cast.kabir, '“We shipped the thing people could see and missed the thing that was actually breaking.”');
  },
  D2: {
    informed: function(){
      return '<p>Instant settlement ships. Saral Mart renews. You knew, going in, that the reliability clock was ticking and made a calculated bet that the enterprise deal was the more time-boxed fire. It was a defensible read of one real constraint against another — but the bet didn’t fully pay off: over the next six weeks, tier-2/3 churn continues at the elevated rate, and the Republic Day sale still pushes the quarter average under the compliance floor. Routing gets deprioritized anyway, right as Saral Mart’s stores hit their own festival rush.</p>'+
        cqBubble(SC().cast.kabir, '“You saw the risk and chose revenue. I get the logic. The market didn’t wait for us to be right about the order.”');
    },
    default: function(){
      return '<p>Instant settlement ships. Saral Mart renews — a real, visible win in week two. But you didn’t know how close the compliance floor was, or how bad the tier-2/3 pattern was about to get. Six weeks later the Republic Day sale blows through the same reconciliation weakness at nearly double scale, the quarter average slips under 95%, and routing gets deprioritized — including for the very enterprise accounts you were trying to protect.</p>'+
        cqBubble(SC().cast.kabir, '“This wasn’t a bet you made with your eyes open. Nobody told you the clock was this close — which is exactly why the digging matters.”');
    }
  },
  D3: function(){
    return '<p>It’s not glamorous and nobody claps in the room. Over the next three weeks, tier-2/3 evening success rate climbs from <span class="m">89%</span> to <span class="m">97.8%</span>. Support tickets fall to <span class="m">~380/week</span>. App Store rating recovers organically to <span class="m">4.0★</span> by week four — real reviews, not review-gated by a feature. The Republic Day sale six weeks later passes with success rate holding at <span class="m">97%</span>; quarter average finishes at <span class="m">97.4%</span>, well clear of the floor. Saral Mart’s renewal conversation gets pushed two weeks, which stings, but their ops head — reading the same tier-2/3 numbers you found — signs anyway, noting “at least someone’s fixing the thing that actually broke.” Meher and Arjun are both audibly unhappy in the room.</p>';
  },
  D4: function(){
    return '<p>Everyone gets a little, nobody gets enough. The reliability fix ships partially — enough to move success rate from <span class="m">94.6%</span> to <span class="m">96.1%</span>, not enough to hold under Republic Day load. Rewards ships buggy and gets pulled after complaints. Instant settlement misses its promised date, and Saral Mart’s ops head calls it “a broken promise, not a partial one.”</p>'+
      cqBubble(SC().cast.kabir, '“Splitting it felt fair in the room. It wasn’t fair to the work — none of the three teams had enough runway to actually finish.”');
  },
  D5: function(){
    return '<p>Kabir doesn’t push back angrily, but he doesn’t hide his read either: “I need a call today, not a request for more time — that’s genuinely the job now.” He reallocates the sprint himself, defaulting to Growth’s rewards feature since it’s “shovel-ready.” You spend your first sprint watching someone else make the call you were hired to make.</p>';
  }
};

var DECISION_PTS2 = {D1:0, D2:{informed:2, default:1}, D3:5, D4:1, D5:0};

var FRAMING_CONSEQUENCE2 = {
  F1: {
    informed: function(){
      return '<p>You lay out the device/town-tier table, the compliance margin, and the churn multiplier in under a minute. Kabir nods slowly. “That’s not a hunch, that’s a case.” The room goes quiet in the good way.</p>';
    },
    default: function(){
      return '<p>You say the line, but you don’t have the numbers behind it. Kabir presses: “Show me the cut.” You can’t. “Then this is a guess with confident phrasing. Bring the data next time, even when the guess turns out right.”</p>';
    }
  },
  F2: function(){ return '<p>Kabir: “Diplomatic. I’m just not sure it’s a decision — feels more like avoiding one out loud.”</p>'; },
  F3: function(){ return '<p>Kabir: “The rating’s a symptom, not a cause. Optics-first is how you end up fixing the thermometer instead of the fever.”</p>'; },
  F4: function(){ return '<p>Kabir: “In week two, that reads less like caution and more like not wanting to own the call. Own it — even the wrong version of it.”</p>'; }
};

var FRAMING_MOD2 = {F1:{informed:3, default:0}, F2:1, F3:0, F4:-2};

var DECISION_LINE2 = {
  D1: 'You fixed the number people could see and left the number driving it untouched. It came back bigger.',
  D2: {
    informed: 'A real, weighed trade-off against a real deadline. It didn’t land, but it wasn’t reckless — it was a bet made with the odds visible.',
    default: 'A real win in week two, made without knowing how close the real deadline actually was. That’s the part worth fixing, not the choice itself.'
  },
  D3: 'Not the loud choice. The right one. The room noticed which is which within a month.',
  D4: 'Fair in the room, unfair to the work — three half-finished things instead of one finished thing.',
  D5: 'Asking for more time in week two, on your first solo call, reads as avoidance even when it’s caution.'
};

var FRAMING_LINE2 = {
  F1: {
    informed: 'You didn’t just have the right answer — you could defend it cold, with numbers, in under a minute. That’s what makes a recommendation land.',
    default: 'The right words, without the evidence to back them, is a coin flip that happened to land well. It won’t always.'
  },
  F2: 'Diplomatic, and read as avoidance of ownership — even when the underlying call was sound.',
  F3: 'Optics-first framing, out loud, in the room where the actual root cause had already been found or was still sitting unexamined either way.',
  F4: 'Hedging a first solo call doesn’t read as humility in week two. It reads as not wanting your name on the outcome.'
};

function s02Dims(picks, decision, framing, sc){
  function clamp(v){ return Math.max(1, Math.min(5, v)); }
  function has(id){ return picks.indexOf(id)>=0; }
  function count(ids){ var n=0; for (var i=0;i<ids.length;i++) if (has(ids[i])) n++; return n; }
  var SHARP = ['B2','B4','B7','B10','B12'];
  var TRAPS = ['B1','B5','B9'];
  var d2informed = decision==='D2' && sc.informed;
  var logical = clamp(1 + (has('B2')?1:0) + (has('B7')?1:0) + (has('B10')?1:0) + (decision==='D3'?1:0));
  var data = clamp(1 + Math.min(count(SHARP),4));
  var assumption = clamp(3 - count(TRAPS) + ((has('B2')||has('B4'))?1:0));
  var risk = clamp(1 + (has('B7')?2:0) + (has('B12')?1:0) + (decision==='D3'?1:0));
  var prioritization = decision==='D3' ? 5 : d2informed ? 3 : decision==='D4' ? 2 : decision==='D2' ? 2 : decision==='D1' ? 1 : 1;
  var stakeholder = framing==='F1' ? (sc.informed?5:3) : framing==='F2' ? 4 : framing==='F3' ? 2 : framing==='F4' ? 2 : 1;
  var empathy = clamp(2 + (has('B4')?1:0) + (has('B12')?1:0) + (decision==='D3'?1:0));
  var biz = clamp(1 + (has('B7')?1:0) + (has('B12')?1:0) + (decision==='D3'?2:0) + (d2informed?1:0));
  var integrityFires = has('B1') && decision==='D5';
  var comm = clamp((framing==='F1' ? (sc.informed?5:3) : framing==='F2' ? 3 : framing==='F3' ? 2 : framing==='F4' ? 2 : 1) - (integrityFires?1:0));
  return [logical, data, assumption, risk, prioritization, stakeholder, empathy, biz, comm];
}

/* Registry facade — engine reads scenarios through this. */
window.PMSIM = window.PMSIM || { scenarios: {} };
window.PMSIM.scenarios['s02'] = {
  id: 's02',
  title: SC_META2.h1,
  company: SC_META2.company,
  tagline: SC_META2.tagline,
  tile: SC_META2.tile,
  dashKicker: SC_META2.dashKicker,
  onepagerLabel: SC_META2.onepagerLabel,
  times: TIMES2,
  cast: P2,
  ceoKey: 'kabir',
  dashTitle: 'Monday dashboard',
  statusBarLabel: 'RokdaOS',
  lockHint: 'Tap the message from Kabir ↑',
  beginBarText: '10:55 AM — Kabir’s chat pops up',
  cabin: {
    sceneline: '11:05 AM · Sprint planning',
    narration: 'Kabir sets down his coffee.',
    pullquote: '“Meher, Arjun and Divya are all going to ask me why in the retro, and I’d rather you tell them than me. One sentence — what’s the call, and why?”',
    pqBy: 'Kabir Seth · VP Product'
  },
  notifs: NOTIFS2,
  ceoBubbles: CEO_BUBBLES2,
  onepager: ONEPAGER2,
  dashRows: DASH_ROWS2,
  dash: {
    metricsCaption: 'This week’s metrics vs pre-festival baseline',
    metricsHeaders: ['This week', 'Baseline (pre-festival avg)'],
    sub: 'This week (post-Diwali) · vs 4-week pre-festival avg',
    trend: {
      ariaLabel: 'This week’s trend',
      columns: [],
      note: '— the dip started the week before Diwali and hasn’t recovered. This summary view isn’t cut by device or region.'
    }
  },
  inbox: INBOX2,
  menu: { order: MENU_ORDER2, byId: MENU_BY_ID2 },
  fopts: FOPTS2,
  pts: PTS2,
  dims: s02Dims,
  decision: { informedIds: DECISION_INFORMED_IDS2, informedThreshold: 2, options: DECISION_OPTIONS2, consequence: DECISION_CONSEQUENCE2, pts: DECISION_PTS2 },
  framing: { consequence: FRAMING_CONSEQUENCE2, mod: FRAMING_MOD2 },
  debrief: {
    bands: { title: BAND_TITLE2, text: BAND_TEXT2 },
    pickLines: PICK_LINES2,
    missedClauses: MISSED_CLAUSES2,
    orientHtml: ORIENT_HTML2,
    truthHtml: TRUTH_HTML2,
    footerHtml: FOOTER_HTML2,
    decisionLine: DECISION_LINE2,
    framingLine: FRAMING_LINE2,
    integrity: {
      pick: 'B1',
      decision: 'D5',
      text: function(pt){
        return 'Worth naming directly: you asked your VP to make this call for you, and then — separately — asked for more time rather than make it yourself. That’s not indecision, that’s two different ways of avoiding the same decision. Different next time.';
      }
    }
  },
  share: { url: SHARE_URL2 },
  revealBody: revealBody2
};
