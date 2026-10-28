// Gabisile Medical Facility

const CATEGORIES = [
  "Everyday care",
  "Mother & Child",
  "Tests & screening",
  "Pre-Employment Medicals & PDP",
  "IV drips",
];
const SERVICES = [
  [
    "Everyday care",
    "General patient assessment & treatment",
    "Feeling off and not sure why? Start here. The nurse takes your history, examines you and treats what can be treated on the day. Adults, pensioners and children are all welcome.",
    "Bring any medication you're taking.",
  ],
  [
    "Everyday care",
    "STI consultation and treatment",
    "Private. No lecture. You're examined, tested where needed and treated, and we'll talk about getting your partner treated too.",
    "Everything you say stays in the room.",
  ],
  [
    "Everyday care",
    "Wound care",
    "Cuts, burns, ulcers and wounds that just won't close. We clean and dress them properly, then show you how to look after the dressing at home.",
    "",
  ],
  [
    "Everyday care",
    "Ear irrigation & ear infections",
    "Blocked ears from wax, or an ear that's sore, itchy or leaking. The nurse looks inside first. Wax gets flushed out gently with warm water when it's safe, and the relief is usually instant. If it's an infection, we treat that too, with medication when you need it.",
    "Employers can refer staff for this too.",
  ],
  [
    "Everyday care",
    "Vitamin B injection",
    "A quick shot in the arm. People usually ask for it when they're run down. It takes a few minutes.",
    "",
  ],
  [
    "Mother & Child",
    "Antenatal care",
    "Your first visit is the long one: your history, your blood pressure, the basic checks and a plan for the months ahead. Follow-up visits are shorter and track how you and the baby are doing.",
    "There's a sonographer in the same building for scans.",
  ],
  [
    "Mother & Child",
    "Baby wellness check",
    "Weight, length, head size, feeding and milestones. Bring your questions, however small they feel.",
    "Bring the Road to Health booklet.",
  ],
  [
    "Mother & Child",
    "Immunisations",
    "Childhood vaccines given by a nurse, with the record updated on the spot.",
    "Message us first to check the vaccine you need is in stock.",
  ],
  [
    "Mother & Child",
    "Family planning",
    "Pill, injection or something longer lasting. We talk through what fits your life and help you start or carry on with your method.",
    "",
  ],
  [
    "Mother & Child",
    "Implanon removal",
    "The implant in your arm comes out through a tiny cut, under local anaesthetic. A few minutes, a small dressing, and you're done.",
    "",
  ],
  [
    "Mother & Child",
    "Loop removal",
    "Removal of your IUD, the loop. It's usually quick. If you still want contraception, we can talk about the next method at the same visit.",
    "",
  ],
  [
    "Mother & Child",
    "Pap smear",
    "A screening test that picks up changes in the cervix early, long before they become a problem. A few uncomfortable minutes. Worth it.",
    "We'll tell you when to expect your result.",
  ],
  [
    "Mother & Child",
    "Pregnancy test",
    "A urine test with an answer in minutes. Whatever it says, you can talk through what comes next.",
    "",
  ],
  [
    "Tests & screening",
    "Blood pressure test",
    "Cuff on, a couple of minutes, done. If your numbers are high we explain what they mean and what to do about them.",
    "",
  ],
  [
    "Tests & screening",
    "Blood glucose test",
    "A finger prick that shows your sugar level right away. Useful if diabetes runs in the family, or you've been unusually thirsty and tired.",
    "",
  ],
  [
    "Tests & screening",
    "Cholesterol test",
    "A quick blood test. We explain the number and what, if anything, needs to change.",
    "",
  ],
  [
    "Tests & screening",
    "HB test",
    "Checks your haemoglobin from a small blood sample. It tells us whether you might be anaemic.",
    "",
  ],
  [
    "Tests & screening",
    "HIV test and counselling",
    "A rapid test with proper counselling before and after. Confidential. If you need treatment, we link you to care.",
    "",
  ],
  [
    "Tests & screening",
    "Malaria test",
    "A rapid blood test. Do it if you have a fever after travelling to a malaria area.",
    "Don't wait on this one.",
  ],
  [
    "Pre-Employment Medicals & PDP",
    "Pre-employment and medical surveillance",
    "The medical your employer asks for before you start, and the routine checks for staff already on the job. Employers can send whole teams through.",
    "Ask your employer which form they need completed.",
  ],
  [
    "Pre-Employment Medicals & PDP",
    "PDP medical",
    "The medical examination for your professional driving permit.",
    "Bring your ID and the form.",
  ],
  [
    "IV drips",
    "Glow Drip",
    "Fluids and vitamins chosen with your skin in mind. Ask what's in the bag. We'll show you.",
    "Given only after the nurse has checked you.",
  ],
  [
    "IV drips",
    "Immune Booster Drip",
    "A vitamin drip people book when they feel run down. It supports you. It doesn't replace sleep, food or medicine.",
    "Given only after the nurse has checked you.",
  ],
  [
    "IV drips",
    "Detox Drip",
    "Fluids and vitamins for when you feel sluggish. Your liver and kidneys do the real work, and good hydration helps them.",
    "Given only after the nurse has checked you.",
  ],
  [
    "IV drips",
    "Hangover Drip",
    "Fluids and vitamins after a heavy night. Come in, sit back, rehydrate.",
    "Given only after the nurse has checked you.",
  ],
];
const WHATSAPP = "https://wa.me/27663526383?text=";
const $ = (id) => document.getElementById(id);
const arrow =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h16M14 6l6 6-6 6"/></svg>';
let active = "All";

function open(i) {
  const [c, t, b, n] = SERVICES[i];
  $("d-cat").textContent = c;
  $("d-title").textContent = t;
  $("d-body").textContent = b;
  $("d-note").textContent = n;
  $("d-note").hidden = !n;
  $("d-book").href =
    WHATSAPP + encodeURIComponent("Hi Gabisile Medical, I'd like to book: " + t + ".");
  $("dlg").showModal();
}
function draw() {
  $("index").innerHTML = SERVICES.map((s, i) =>
    s[0] === "IV drips" || (active !== "All" && s[0] !== active)
      ? ""
      : `<button class="row" data-i="${i}" aria-haspopup="dialog"><span><small>${s[0]}</small><h3>${s[1]}</h3></span><span class="more"><span>Learn more</span><b>${arrow}</b></span></button>`,
  ).join("");
}
$("chips").innerHTML = ["All", ...CATEGORIES.slice(0, 4)]
  .map((c) => `<button class="chip" type="button" aria-pressed="${c === active}">${c}</button>`)
  .join("");
$("chips").addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  active = b.textContent;
  [...$("chips").children].forEach((x) => x.setAttribute("aria-pressed", x === b));
  draw();
});
$("index").addEventListener("click", (e) => {
  const r = e.target.closest(".row");
  if (r) open(+r.dataset.i);
});
$("driplist").innerHTML = SERVICES.map((s, i) =>
  s[0] !== "IV drips"
    ? ""
    : `<button class="drip" data-i="${i}" aria-haspopup="dialog"><h3>${s[1]}</h3><span>Learn more</span></button>`,
).join("");
$("driplist").addEventListener("click", (e) => {
  const r = e.target.closest(".drip");
  if (r) open(+r.dataset.i);
});
$("d-close").addEventListener("click", () => $("dlg").close());
$("dlg").addEventListener("click", (e) => {
  if (e.target === $("dlg")) $("dlg").close();
});
draw();

$("f-service").innerHTML =
  '<option value="">Not sure yet</option>' +
  SERVICES.map((s) => `<option>${s[1]}</option>`).join("");
function link() {
  const n = $("f-name").value.trim(),
    s = $("f-service").value,
    d = pick.day,
    t = pick.time;
  let m = "Hi Gabisile Medical, I'd like to book a visit.";
  if (n) m += "\nName: " + n;
  m += "\nService: " + (s || "Not sure yet");
  m += "\nPreferred day: " + d;
  m += "\nTime of day: " + t;
  $("walink").href = WHATSAPP + encodeURIComponent(m);
}
$("bookform").addEventListener("input", link);
const pick = { day: "Any day", time: "Morning" };
function choose(group, key) {
  group.addEventListener("click", (e) => {
    const b = e.target.closest(".opt");
    if (!b || b.disabled) return;
    group.querySelectorAll(".opt").forEach((x) => x.setAttribute("aria-pressed", x === b));
    pick[key] = b.textContent;
    if (key === "day") {
      const sat = pick.day === "Sat",
        aft = [...$("f-time").querySelectorAll(".opt")].find((x) => x.textContent === "Afternoon");
      aft.disabled = sat;
      $("sat-hint").hidden = !sat;
      if (sat && pick.time === "Afternoon") {
        $("f-time").querySelector(".opt").click();
      }
    }
    link();
  });
}
choose($("f-day"), "day");
choose($("f-time"), "time");
$("bookform").addEventListener("submit", (e) => e.preventDefault());
link();

// Mobile menu
const hd = document.querySelector("header");
$("menu").addEventListener("click", () => {
  const o = hd.classList.toggle("open");
  $("menu").setAttribute("aria-expanded", o);
  $("menu").setAttribute("aria-label", o ? "Close menu" : "Open menu");
});
$("mainnav").addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    hd.classList.remove("open");
    $("menu").setAttribute("aria-expanded", "false");
  }
});

// Active nav link on scroll
const navLinks = [...document.querySelectorAll(".links a:not(.btn)")];
const spy = new IntersectionObserver(
  (es) =>
    es.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id),
        );
      }
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
["nurse", "services", "drips", "employers", "visit"].forEach((id) => {
  const el = $(id);
  if (el) spy.observe(el);
});

const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
// Scroll reveal
if (!calm && "IntersectionObserver" in window) {
  const items = document.querySelectorAll(
    ".head,.frame,.letter,.step,.drip,.iv-ph,.iv-copy,.work .copy,.work .ph,.pair div,.facts > div,form",
  );
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.remove("pre");
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.12 },
  );
  items.forEach((el, i) => {
    const r = el.getBoundingClientRect();
    if (r.top > innerHeight) {
      el.classList.add("rv", "pre");
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    }
  });
  // Stat counters
  const nums = document.querySelectorAll(".stats b[data-n]");
  const co = new IntersectionObserver(
    (es) =>
      es.forEach((en) => {
        if (!en.isIntersecting) return;
        co.unobserve(en.target);
        const el = en.target,
          end = +el.dataset.n,
          t0 = performance.now();
        (function tick(t) {
          const p = Math.min(1, (t - t0) / 1400);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      }),
    { threshold: 0.6 },
  );
  nums.forEach((n) => co.observe(n));
  // Hero portrait tilt (desktop only)
  const pt = document.querySelector(".portrait");
  if (matchMedia("(pointer:fine)").matches) {
    pt.addEventListener("pointermove", (e) => {
      const r = pt.getBoundingClientRect();
      pt.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 8 + "deg");
      pt.style.setProperty("--rx", (0.5 - (e.clientY - r.top) / r.height) * 8 + "deg");
    });
    pt.addEventListener("pointerleave", () => {
      pt.style.setProperty("--rx", "0deg");
      pt.style.setProperty("--ry", "0deg");
    });
  }
}
