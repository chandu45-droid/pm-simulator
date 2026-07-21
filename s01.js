/* PM Simulator — scenario s01 data. Loaded before engine. */
var SC_META = { h1:'NukkadEats — a PM decision simulator', company:'NukkadEats', tile:'NE', tagline:'“Apne shehar ka apna app.”', dashKicker:'NukkadEats · Metrics', onepagerLabel:'NukkadEats — company one-pager' };
var TIMES = ['9:10 AM','9:35 AM','10:00 AM','10:25 AM','10:45 AM'];

var P = {
  anurag:{full:'Anurag Bansal', n:'Anurag Bansal', r:'CEO', a:'AB', c:'var(--ink-900)'},
  riya:{full:'Riya', n:'Riya', r:'ANALYTICS', a:'R', c:'#0E7490'},
  dhruv:{full:'Dhruv Malhotra', n:'Dhruv', r:'ENG LEAD', a:'D', c:'#6D28D9'},
  farheen:{full:'Farheen Khan', n:'Farheen', r:'SUPPORT', a:'F', c:'#BE185D'},
  priya:{full:'Priya Nair', n:'Priya', r:'GROWTH', a:'P', c:'#B45309'}
};

var NOTIFS = [
  {icon:'<span class="appicon" style="background:var(--gain-700)" aria-hidden="true">▷</span>', src:'PlayStore Console', time:'07:58', body:'Your app rating dropped to 3.9 ★ (7-day). 214 new reviews.'},
  {icon:'<span class="appicon" style="background:var(--ink-700)" aria-hidden="true">#</span>', src:'#support-warroom', time:'08:12', body:'Farheen: ticket queue at 1,800+, need 2 more agents on shift today 🙏'},
  {icon:'<span class="appicon disc" style="background:var(--ink-900)" aria-hidden="true">AB</span>', src:'Anurag Bansal (CEO)', time:'09:04', body:'Seen the dashboard?'}
];

var CEO_BUBBLES = [
  'Seen the dashboard?',
  'Orders gir gaye. 17% down over the weekend. But revenue is UP? I don’t understand what I’m looking at.',
  'Board call is at 11:00. Aditya from Saral will be on it. I need a clean story by 10:45 — what happened, why, and what we’re doing. Not a jargon deck. A story.',
  'You shipped checkout Friday na? Start there. Or don’t. You’re the PM — figure out what actually happened. 10:45.'
];

var ONEPAGER = [
  ['What','Food delivery for India’s tier-2/3 cities. HQ: <strong>Indore</strong>. Live in 9 cities — Indore, Bhopal, Gwalior, Jabalpur, Ujjain, Kanpur, Raipur, Bilaspur, Nagpur.'],
  ['Scale','~<strong>48,000 orders/day</strong> (weekends), ~11,400 restaurant partners, 190 employees.'],
  ['Funding','Series A, <strong>₹50 cr</strong>, led by <strong>Saral Ventures</strong> (fictional). 14 months of runway. Board pressure this quarter: <strong>improve contribution margin</strong>.'],
  ['Why we win where the big apps don’t bother','lower fees, Hindi-first app, tiny-order friendliness, and <strong>Cash on Delivery everywhere</strong> — our tier-3 users call us “cash waala app”. ~<strong>65% of orders are COD</strong>.'],
  ['Users','<strong>96% Android</strong>, heavily ₹8–15k phones. Peak = 7:30–10:30 PM. Payment culture: UPI growing, but cash is trust — especially for first orders and small orders.'],
  ['You','Senior PM (the only PM). Joined 8 months ago. You own the ordering funnel. <strong>Project Rocket — the checkout revamp that shipped Friday 6:30 PM — is yours.</strong> The PRD goal, agreed with growth and the CFO: <em>“reduce checkout steps 5 → 2, nudge prepaid adoption, improve margin per order.”</em>']
];

var DASH_ROWS = function(){ return [
  ['Orders','79,600','96,000', chip('loss','down','−17.1%','down 17.1 percent — worse'), true],
  ['Net revenue','₹60.8 L','₹57.9 L', chip('gain','up','+5.0%','up 5 percent — better'), true],
  ['GMV','₹2.87 cr','₹2.82 cr', chip('gain','up','+1.5%','up 1.5 percent — better'), false],
  ['Average order value','₹360','₹294', chip('gain','up','+22.4%','up 22.4 percent — better'), false],
  ['Checkout abandonment','31.4%','24.0%', chip('loss','up','+31% rel','up 31 percent relative — worse'), false],
  ['Support tickets','1,840','590', chip('loss','up','+212%','up 212 percent — worse'), false],
  ['Play Store rating (7-day)','3.9 ★','4.4 ★', chip('loss','down','3.9★','down to 3.9 stars — worse'), false]
];};

var INBOX = [
  {id:'anurag', p:P.anurag, time:'9:04 AM', prev:'Seen the dashboard?',
   bubbles:CEO_BUBBLES},
  {id:'dhruv', p:P.dhruv, time:'9:07 AM', prev:'Saw the dashboard. Before anyone starts a witch-hunt: there are no production issues.',
   bubbles:['Saw the dashboard. Before anyone starts a witch-hunt: <strong>there are no production issues.</strong> All services green all weekend. p99 latency normal. Checkout API error rate 0.02%. Payment success rate for attempted transactions is actually UP.',
   'Rocket deployed clean. Whatever this is, <strong>it’s not an engineering problem.</strong> If someone tells the board “the release broke something”, I’d like to see the stack trace first.']},
  {id:'farheen', p:P.farheen, time:'9:09 AM', prev:'Queue is at 1,840, normal weekend is ~590.',
   bubbles:['Queue is at 1,840, normal weekend is ~590. It’s a mixed bag — refunds, where-is-my-order, lots of payment confusion, some angry Play Store stuff. Agents are saying the payment ones feel different from usual but honestly I haven’t had time to read tickets myself, I’ve been staffing since 7 AM. If you need patterns, someone has to actually sit and read them. I have two agents off sick. Send help or chai. 🙏']},
  {id:'priya', p:P.priya, time:'9:14 AM', prev:'Okay before we panic — I think the tracking is broken.',
   bubbles:['Okay before we panic — <strong>I think the tracking is broken.</strong> Rocket replaced the whole checkout flow, which means new analytics events. Remember March? We “lost” 20% of orders for two days and it was a broken event. This smells exactly the same.',
   'Meanwhile the actual signal is GOOD: cashback banner CTR 9.4%, AOV +22%, revenue +5%. My honest read: <strong>Rocket is working and our dashboards aren’t.</strong> I’d tell the board revenue is up and we’re validating a data issue. Let’s not set ourselves on fire over a number we haven’t verified.']}
];

var MENU_ORDER = ['A6','A2','A9','A4','A1','A12','A7','A3','A10','A11','A5','A8'];

var MENU_BY_ID = {
  A1:{t:'Pull the payment-method split.', s:'Ask analytics for orders by payment method, weekend vs baseline.', short:'Payment-method split', skin:'chat'},
  A2:{t:'Read the actual complaints.', s:'Open the raw support ticket texts, not the category counts.', short:'Raw complaints', skin:'dump'},
  A3:{t:'Ask engineering what <em>exactly</em> shipped.', s:'Not “any issues?” — the full release diff, in plain words.', short:'What exactly shipped', skin:'chat'},
  A4:{t:'Check Android vs iOS.', s:'Split the order drop by platform.', short:'Android vs iOS', skin:'chat'},
  A5:{t:'City-wise damage report.', s:'Order change per city, with each city’s payment mix.', short:'City-wise damage', skin:'chat'},
  A6:{t:'Call the CEO back first.', s:'Get ahead of it — ask him what the board actually needs to hear.', short:'Call with Anurag', skin:'call'},
  A7:{t:'New vs returning users.', s:'Is this hitting loyal users or new ones?', short:'New vs returning', skin:'chat'},
  A8:{t:'Audit the tracking.', s:'Growth thinks the new checkout broke analytics events. Verify the numbers are even real.', short:'Tracking audit', skin:'chat'},
  A9:{t:'Check crash &amp; ANR dashboards.', s:'Maybe the app is just breaking on some devices.', short:'Crash dashboards', skin:'dump'},
  A10:{t:'Scan promos &amp; competitors.', s:'Did marketing change anything? Did a rival launch an offer this weekend?', short:'Promos &amp; competitors', skin:'chat'},
  A11:{t:'Order-size histogram.', s:'Which basket sizes disappeared — small carts or big carts?', short:'Order-size histogram', skin:'chat'},
  A12:{t:'Ping the city ops WhatsApp group.', s:'The ground team always knows something HQ doesn’t.', short:'Ops WhatsApp group', skin:'ops'}
};

var FOPTS = [
  {id:'F1', short:'Honest, with a plan', t:'Honest, with a plan.', b:'Tell it straight: what we shipped, what it did to whom, what we’ve done about it, and what we’ll watch this week. Own it as the PM.'},
  {id:'F2', short:'Lead with the revenue', t:'Lead with the revenue.', b:'Frame it as the optimization working: revenue +5%, AOV +22%, orders dip is transitional as users adapt to the new flow.'},
  {id:'F3', short:'Point at engineering', t:'Point at engineering.', b:'The release changed more than was agreed in review — position it as an implementation deviation engineering should have flagged.'},
  {id:'F4', short:'Ask for time', t:'Ask for time.', b:'Tell the board you’ll have a full analysis in 48 hours, and ask to keep today’s discussion short.'}
];

var BAND_TITLE = { A:'Board-ready.', B:'Getting there.', C:'Burned by the dashboard.' };

var BAND_TEXT = {
  A:'You did the thing this scenario was built to reward: you let the <em>shape</em> of the metrics choose your questions. Orders down while AOV rises isn’t a mystery — it’s a signature. It says the lost orders weren’t average orders, and the fastest way to find out whose they were was to cut the data along the lines India actually splits along: how people pay, where they live, how much a dinner costs. You found the story, acted on the cause rather than the symptom, and told it straight. One habit to bank from this morning: notice how much time the confident voices almost cost you. Nobody lied to you today. Everyone told you their truth. The PM’s job was knowing that ‘all services are green’ and ‘the product is fine’ are different sentences.',
  B:'You got real signal this morning — but you paid retail for it. Some of your picks were sound instincts that don’t discriminate between stories: knowing <em>who</em> is hurt (returning users, Android users) feels like progress, but three different root causes would produce that same answer, so the pick can’t separate them. The sharpest cuts — payment method, city-wise COD share, basket size, the complaints in the users’ own words — each pointed at the cause almost alone. The senior-PM habit to build: before spending a pick, ask ‘what would this look like if my top two hypotheses were true — would it look <em>different</em>?’ If both hypotheses produce the same chart, the pick isn’t a test, it’s motion. You were never far from the answer. The gap between you and “Board-ready” this morning was pick discipline, not intelligence.',
  C:'This morning got you — and it got you the way real Mondays get real PMs: through urgency and confidence. The clock pushed you toward action that <em>felt</em> like investigation (calling the CEO, pinging ops, chasing the crash graph), and the confident voices in your inbox handed you ready-made stories that fit the deadline. But notice what the dashboard was showing all along: orders down 17% while AOV rose 22% <em>cannot</em> be an outage, a crash bug, or broken tracking — those failures don’t select for small baskets. The metric shape already ruled out the loud theories before your first pick. That’s the discipline to take away: when numbers conflict, don’t ask ‘which number is wrong?’ first — ask ‘what single story makes all four true at once?’ Then pick the one query that would kill that story. Run this scenario again and spend your four picks like they cost money. In the real job, they do.'
};

var PICK_LINES = {
  A1:'the single fastest kill-shot in the menu. One query, and the ‘17% down but revenue up’ paradox collapsed into ‘COD −54%’.',
  A2:'You read the tickets. PMs who read raw complaints hear the root cause in the users’ own grammar — ‘Where did the COD option go’ was the whole incident in one line, an hour before any query.',
  A3:'You asked what <em>actually shipped</em>, not whether it ‘went fine’ — the question that separates the release notes from the release. It also surfaced the Thursday-night design change nobody flagged.',
  A5:'The city cut was the scenario’s most elegant clue: damage tracking COD share almost perfectly, city by city. That’s not correlation-hunting — that’s letting geography testify.',
  A11:'The basket histogram explained the AOV ‘gain’ honestly: you didn’t get richer customers, you lost the poorer orders. The +22% was survivorship, plus users padding to ₹349.',
  A4:'Android vs iOS was a reasonable reflex in a 96%-Android market — and that’s exactly why it was low-yield: with iOS at 4%, the split could barely say anything. A pick spent confirming the obvious.',
  A7:'New vs returning told you <em>who</em> is bleeding, not <em>why</em> — three different root causes would all hit returning users first. Real signal, but it doesn’t discriminate between stories.',
  A8:'Auditing the tracking was the responsible answer to Priya’s confident theory — it killed a wrong story cleanly. Worth something. But note the order of operations: the metric shape (orders down, AOV up, complaints up) already made ‘broken tracking’ near-impossible. Complaints don’t spike when only the <em>dashboard</em> is wrong.',
  A6:'Calling the CEO back felt like stakeholder management; it was actually asking the person with the least information to reassure you. He said it himself: <em>you’re my context.</em> Twenty-five minutes, zero bits.',
  A9:'The crash dashboard is where this scenario buried its best trap: a <em>real</em> regression that explains nothing. 2,900 menu-screen sessions can’t produce 16,400 missing orders — the arithmetic vetoes the story even though the graph is genuinely red. Always size the suspect against the crime.',
  A12:'The ops WhatsApp group gave you what ground chatter always gives during an incident: urgency, rumor, and a ‘must be server down’ theory. Ground truth matters — but during a two-hour clock, unstructured heat is the most expensive thing you can read.',
  A10:'Ruling out promos and competitors was hygiene — a real cause-elimination, cheap confidence. It also quietly showed you Priya’s lens: her instrument for ‘is Rocket working’ was banner CTR. Everyone’s dashboard flatters their own work.'
};

var MISSED_CLAUSES = {
  A1:'the payment-method split — when a checkout release coincides with an order collapse, how users <em>pay</em> is the first axis to cut, especially in a business built on cash',
  A2:'the raw complaint texts — 1,840 users were describing the root cause verbatim all weekend, in Hindi, for free',
  A3:'the exact release contents — ‘no production issues’ and ‘nothing changed’ can both be true while the product change itself is the incident',
  A5:'the city split — in tier-2/3 India, geography is a proxy for payment culture, and this damage had a map',
  A11:'the basket histogram — the one chart that explains an AOV <em>rise</em> during an order collapse without flattering it'
};

var SHARE_URL = 'https://chandu45-droid.github.io/pm-simulator/';

function revealBody(id, idx){
  var t1 = TIMES[idx+1];
  switch(id){
  case 'A1':
    return groupHTML(P.riya, 'replies in 4 min', [
      'Ran it. Weekend orders by payment method vs 4-wk avg:',
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Weekend orders by payment method vs 4-week average</caption><thead><tr><th scope="col">Method</th><th scope="col" class="r">This weekend</th><th scope="col" class="r">Baseline</th><th scope="col" class="r">Change</th></tr></thead><tbody>'+
      '<tr><td>COD</td><td class="num hero">28,800</td><td class="num">62,400</td><td class="dcell">'+chip('loss','down','−53.8%','down 53.8 percent — worse')+'</td></tr>'+
      '<tr><td>UPI (PayZing + others)</td><td class="num hero">44,300</td><td class="num">26,900</td><td class="dcell">'+chip('gain','up','+64.7%','up 64.7 percent')+'</td></tr>'+
      '<tr><td>Cards/wallets</td><td class="num">6,500</td><td class="num">6,700</td><td class="dcell"><span class="chip flat"><span>−3.0%</span></span></td></tr>'+
      '</tbody></table></div>',
      'COD fell off a cliff. Prepaid is UP a lot — some of that looks like COD users who switched, but nowhere near enough to cover the gap. Whatever happened, it happened to cash users specifically.'
    ]);
  case 'A2':
    return '<div class="dumpcard"><div class="dumphead">support-tickets · newest first · unedited</div><div class="dumpbody">'+
      ticketB('“Where did the COD option go?? I wanted to order with cash, the option is just not there. Searched for 20 minutes.”','— Gwalior, Sat 8:41 PM')+
      ticketB('“Have you people removed cash on delivery? Without even telling us?? Nobody in my house pays online.”','— Jabalpur, Sat 9:12 PM')+
      ticketB('“After the update the app only shows UPI. I stay in a hostel, cash is the only thing that works here. Ordered from Bhukkad instead.”','— Kanpur, Sun 1:30 PM')+
      ticketB('“Payment went through but the order never confirmed, and the money got deducted”','— Bhopal, Sun 2:15 PM')+
      ticketB('Play Store, <span class="star1">1★</span>: “Removed cash on delivery without telling anyone. Was using this app for 2 years. Uninstall.”','')+
      '</div></div>'+
      groupHTML(P.farheen, t1, ['category tagging says “payment issues” +480%. A few genuine UPI pending-payment cases in there too (the deducted-money one) but the flood is people who can’t find COD.']);
  case 'A3':
    return groupHTML(P.dhruv, t1, [
      'Full contents of Rocket v2.4.0, plain words, as requested:<ol>'+
      '<li>Checkout compressed from 5 steps to 2 screens. As per PRD.</li>'+
      '<li>Payment screen: <strong>UPI is pre-selected by default</strong> (PayZing partnership). Cards/wallets listed below it. <strong>COD moved into a collapsed section — “More payment options” — below the fold.</strong> One scroll + one tap to expand.</li>'+
      '<li>UPI cashback banner: ₹40 back on orders ≥ ₹349, funded by PayZing.</li>'+
      '<li>“Add ₹X more for free delivery” nudge on the cart screen.</li>'+
      '<li>Rollout: <strong>100% of users, all cities, Friday 6:30 PM.</strong> No staged rollout, no kill-switch per city. Checkout layout is server-config though — <strong>we can revert layout in ~30 min</strong> without a Play Store release.</li></ol>',
      'Before you ask — the COD placement matches the Figma. Ketan updated the design Thursday night after the margin discussion with growth; “Other options” became a collapsed section. It was in the build you approved. <strong>Nothing is broken. It’s all working as designed.</strong>'
    ]);
  case 'A4':
    return groupHTML(P.riya, t1, ['Android is 96% of our orders, so this split won’t say much, but here: Android orders −17.3%, iOS −12.4%. Both down, same shape. Doesn’t look device-specific — no OS-version cluster either. Whatever this is, it’s hitting everyone who opens the app.']);
  case 'A5':
    var A5R = [['Bilaspur','81%','−28%'],['Gwalior','78%','−26%'],['Ujjain','76%','−25%'],['Jabalpur','74%','−24%'],['Kanpur','71%','−22%'],['Raipur','66%','−18%'],['Bhopal','63%','−16%'],['Nagpur','57%','−13%'],['Indore','52%','−9%']];
    var rows5 = '';
    for (var i5=0;i5<A5R.length;i5++) rows5 += '<tr><td>'+A5R[i5][0]+'</td><td class="num">'+A5R[i5][1]+'</td><td class="num">'+A5R[i5][2]+'</td></tr>';
    return groupHTML(P.riya, t1, [
      'This one’s interesting. Order change per city, next to each city’s COD share:',
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Order change per city with COD share</caption><thead><tr><th scope="col">City</th><th scope="col" class="r">COD share</th><th scope="col" class="r">Orders</th></tr></thead><tbody>'+rows5+'</tbody></table></div>',
      'The two columns line up almost perfectly. The more cash-dependent the city, the worse the damage. Indore looks “fine” on the ops floor because HQ is here — but Indore is our <em>least</em> COD city.'
    ]);
  case 'A6':
    return '<div class="card" style="padding:var(--sp-4)">'+
      '<div class="callhead">'+SVG.phone+'Call — Anurag Bansal <span class="dur">0:41</span></div>'+
      '<div class="sysline">He picks up on the first ring.</div>'+
      '<div class="callline"><strong>Anurag:</strong> “Tell me you have it.”</div>'+
      '<div class="callline"><strong>You:</strong> “I wanted to align on what the board needs—”</div>'+
      '<div class="callline"><strong>Anurag:</strong> “The board needs to know why orders dropped 17% three weeks after we told them growth is our only job. I don’t have context to give you — <em>you’re</em> my context. I have Aditya pre-reads till 10:40. Use your time on the data, not on me.”</div>'+
      '<div class="callline">He hangs up.</div>'+
      '<div class="sysline">Call ended · '+t1+'</div>'+
      '<div class="callline">You’ve learned nothing you didn’t already know.</div></div>';
  case 'A7':
    return groupHTML(P.riya, t1, ['Returning users (3+ orders/month) −21%. New users −4%. So it’s our loyal base that’s vanishing, not a top-of-funnel problem. Consistent with… honestly, lots of stories — a price change, a competitor offer, an app change they hate. Tells you who’s hurt, not what’s hurting them.']);
  case 'A8':
    return groupHTML(P.riya, t1, [
      'Did the reconciliation Priya asked about. Compared our order events against the <strong>restaurant-partner accepted-orders count</strong> — completely separate system, old pipeline, untouched by Rocket. They match within 0.4%, same as always.',
      'The numbers are real. The drop is real. Whatever Priya remembers from March, this isn’t that.'
    ]);
  case 'A9':
    return '<div class="dumpcard"><div class="dumphead">crash-analytics · 7-day summary</div><div class="dumpbody">'+
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Crash dashboard summary</caption><tbody>'+
      '<tr><td>Crash-free sessions</td><td class="num">99.1% → 98.7%</td><td>since Friday</td></tr>'+
      '<tr><td>New crash cluster</td><td class="num">~2,900</td><td>sessions affected</td></tr>'+
      '</tbody></table></div>'+
      '<div class="sysline">ImageLoader OOM · menu screen · Android 10 devices</div></div></div>'+
      '<div class="marginnote">A real crash, up since the release… but 2,900 sessions can’t explain 16,400 missing orders — and it’s on the menu screen, not checkout. If you stop here, this becomes the story you take to the board.</div>';
  case 'A10':
    return groupHTML(P.priya, t1, ['Nothing changed on our side — no price changes, no coupon expiry, festival calendar is empty, and I checked Bhukkad and the big apps in all 9 cities: no new offers this weekend. Only new thing live is the Rocket cashback banner and that’s <em>performing</em> — 9.4% CTR. Whatever this is, it isn’t marketing.']);
  case 'A11':
    return groupHTML(P.riya, t1, [
      'Basket-size split, weekend vs baseline:',
      '<div class="tablewrap"><table class="metrics mini"><caption class="vh">Basket-size split, weekend vs baseline</caption><thead><tr><th scope="col">Basket</th><th scope="col" class="r">Change</th></tr></thead><tbody>'+
      '<tr><td>Under ₹200</td><td class="dcell">'+chip('loss','down','−58%','down 58 percent — worse')+'</td></tr>'+
      '<tr><td>₹200–₹349</td><td class="dcell">'+chip('loss','down','−11%','down 11 percent')+'</td></tr>'+
      '<tr><td>₹350+</td><td class="dcell">'+chip('gain','up','+19%','up 19 percent')+'</td></tr>'+
      '</tbody></table></div>',
      'The small orders are gone. The ₹120 single-thali, chai-samosa, hostel-dinner orders — that whole layer vanished. Big baskets actually GREW (the ₹349 cashback threshold is right there in the data — look at the pile-up at ₹350–₹380). <strong>This is why AOV is up 22%. We didn’t get richer customers. We lost the poorer orders.</strong>'
    ]);
  case 'A12':
    var b12 = TIMES[idx];
    var mm12 = function(n){ return addMin(b12, n).replace(' AM','').replace(' PM',''); };
    return '<div class="opscard"><div class="opshead"><div class="ot">NE Ops – All Cities</div><div class="op">47 participants</div></div>'+
      opsB('Sandeep (Ops, Jabalpur)','#0E7490',mm12(2),'Does anyone at HQ know what is going on? Restaurant partners saying orders have halved')+
      opsB('Manoj (Ops, Gwalior)','#B45309',mm12(4),'Same. The Rajwada Foods owner asked if the app has shut down')+
      opsB('Sandeep','#0E7490',mm12(7),'One partner said a customer told him <em>app is down in Jabalpur</em> 🤔')+
      opsB('Manoj','#B45309',mm12(9),'Must be server down. Someone tell eng')+
      opsB('Sandeep','#0E7490',mm12(12),'<span class="mention">@you</span> sir please check, everyone is asking')+
      '</div>'+
      '<div class="marginnote">Lots of heat, zero data. The “app is down” rumor is customers describing their own confusion — the app was up all weekend. Twenty minutes gone.</div>';
  }
  return '';
}

var ORIENT_HTML = '<p>You’re the Senior PM at <strong>NukkadEats</strong> — a food-delivery startup fighting for tier-2 India. On Friday your team shipped a new checkout. This morning the numbers make no sense, support is drowning, and the board meets at 11:00.</p>';
var TRUTH_HTML = '<div class="dsec"><div class="kicker">What was actually true</div>'+
    '<p>The metrics were never in conflict — they were one story wearing four masks. Rocket buried Cash on Delivery behind a collapsed section. NukkadEats’ core users — small-cart, high-frequency, tier-3, cash-first — hit the payment screen, didn’t find their payment method, and left: <strong class="num">orders −17%, abandonment +31%</strong>. The users who remained were the prepaid-comfortable, bigger-basket minority, now padding carts to reach a ₹349 cashback: <strong class="num">AOV +22%</strong>. Fewer, richer orders with lower COD handling cost: <strong class="num">revenue +5%</strong>. Engineering said ‘nothing is broken’ and was right — every service was green. The product was working exactly as designed.</p>'+
    '<p class="closer">The design was the incident.</p>'+
    '<p>The two loudest voices in your inbox were both confidently wrong: Dhruv’s ‘not an engineering problem’ was true in a way that pointed away from the release, and Priya’s ‘tracking is broken’ was a memory of a previous incident, not evidence about this one. The crash uptick and the ‘Jabalpur is down’ rumor were real noise — the kind that eats investigation time on every real incident. A dashboard is four numbers; the truth was in the splits: by payment method, by city, by basket size, and in the words of the users themselves.</p></div>';
var FOOTER_HTML = '<footer class="sitefooter">NukkadEats, PayZing, Bhukkad and Saral Ventures are fictional. Inspired by patterns, not incidents.<br>Built in India · A structured-debrief simulator — no AI grades your words.</footer>';
var PTS = {A1:3,A2:3,A3:3,A5:3,A11:3,A4:1,A7:1,A8:1,A10:1,A6:0,A9:0,A12:0};

/* Registry facade — P3 will switch the engine to read scenarios through this. */
window.PMSIM = window.PMSIM || { scenarios: {} };
window.PMSIM.scenarios['s01'] = {
  id: 's01',
  title: SC_META.h1,
  company: SC_META.company,
  tagline: SC_META.tagline,
  tile: SC_META.tile,
  dashKicker: SC_META.dashKicker,
  onepagerLabel: SC_META.onepagerLabel,
  times: TIMES,
  cast: P,
  notifs: NOTIFS,
  ceoBubbles: CEO_BUBBLES,
  onepager: ONEPAGER,
  dashRows: DASH_ROWS,
  inbox: INBOX,
  menu: { order: MENU_ORDER, byId: MENU_BY_ID },
  fopts: FOPTS,
  pts: PTS,
  debrief: {
    bands: { title: BAND_TITLE, text: BAND_TEXT },
    pickLines: PICK_LINES,
    missedClauses: MISSED_CLAUSES,
    orientHtml: ORIENT_HTML,
    truthHtml: TRUTH_HTML,
    footerHtml: FOOTER_HTML
  },
  share: { url: SHARE_URL },
  revealBody: revealBody
};
