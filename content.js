/* ============================================================
   RSV LAB — SITE CONTENT
   ============================================================
   
   📖 HOW TO USE THIS FILE
   ------------------------------------------------------------
   
   This file holds ALL the text and links that appear on the site.
   The HTML never needs to change — this file drives everything.
   
   SYNTAX RULES (do not break these):
   ─────────────────────────────────────────────────────────────
   • Text always sits inside  "double quotes"
   • Numbers can be plain:   42  or "42"  (both work)
   • Each line ends with      a comma ,
   • Objects are wrapped in   { curly braces }
   • Lists are wrapped in     [ square brackets ]
   • The last item in a list does NOT need a comma (but it's OK)
   
   HOW TO EDIT
   ─────────────────────────────────────────────────────────────
   1. Change text between the "quotes".
   2. To add an item, copy an existing { ... } block and paste it.
   3. To remove an item, delete the whole { ... } block.
   4. To hide a section, set its array to []  (empty brackets).
   5. Save on GitHub → Cloudflare redeploys in ~30 seconds.
   
   WHAT CAN I EDIT?
   ─────────────────────────────────────────────────────────────
   • Lab name, tagline, description
   • Nav menu links
   • Every card (icon, colour, title, text, link)
   • Publications, projects, team members
   • Contact info and social links
   • Footer text
   • Everything else you see on the site
   
   ============================================================ */

const SITE = {

  /* ============================================================
     ▓▓▓  SECTION 1 — BASIC LAB INFO  ▓▓▓
     ============================================================
     
     Used in: page title, header logo, hero, footer
     
     Every field here is a plain string. Change any value and
     it updates instantly on the next page load.
     
     ------------------------------------------------------------ */

  /* The full, official name of your lab.
     Appears in: browser tab title, footer fallback. */
  labName: "RSV Lab",

  /* A shorter version used in the header logo.
     The FIRST WORD gets the orange colour, the REST gets purple.
     So "RSV Lab" renders as: <orange>RSV</orange> <purple>Lab</purple>
     
     If your name is one word (e.g. "BioLab"), the whole word
     will be orange and there will be no purple part. */
  shortName: "RSV Lab",

  /* A short tagline for the browser tab.
     Format: "Lab Name | Tagline" */
  tagline: "ML-assisted AMR Surveillance & AST Analysis",

  /* The hero title is split into two parts.
     
     part1 → appears in dark navy (regular colour)
     part2 → appears in purple (accent colour)
     
     They flow onto the same line, so write them as two halves
     of a single sentence. If part2 is "" (empty), the title
     will still work — just without the accent colour. */
  taglinePart1: "Machine Learning (ML) assisted Antimicrobial Resistance",
  taglinePart2: "Surveillance & Data Science",

  /* The paragraph under the hero title.
     Should be 1–3 sentences. Long text is fine — it wraps. */
  description: "A microbiology and bioinformatics research effort building open tools for antimicrobial susceptibility testing (AST) analysis, CLSI/EUCAST-aligned interpretation, and machine-learning-assisted AMR surveillance in Bangladesh.",

  /* The name of the lab's founder (you, or the PI).
     Used in the hero badge, footer fallback, and metadata. */
  founderName: "Kamol Das",

  /* The copyright year. Update once per year.
     Used in the footer if footer.copyright is not set. */
  year: "2026",

  /* ------------------------------------------------------------
     LOGO IMAGE
     
     Filename of the logo image (must be in the same folder
     as index.html). Recommended: 200×200 px PNG with transparent
     background, or a square PNG.
     
     • To show the logo: set to "rsvlab-logo.png"
     • To hide the logo and show text only: set to ""
     ------------------------------------------------------------ */
  logo: "rsvlab-logo.png",

  /* ============================================================
     ▓▓▓  SECTION 2 — HERO BUTTONS  ▓▓▓
     ============================================================
     
     The two buttons shown under the hero title.
     
     Each button needs:
       label → what the button says
       href  → where it goes (see below for link types)
     
     To hide a button: set its whole line to null (no quotes).
     ------------------------------------------------------------ */

  /* Primary button — filled purple. Usually the main action. */
  heroCtaPrimary: {
    label: "Explore Research",
    href:  "#research"        // jumps to the Research section
  },

  /* Secondary button — white with a border. Usually an external link. */
  heroCtaSecondary: {
    label: "View on GitHub",
    href:  "https://github.com/KamolDas"
  },
     /* ============================================================
     ▓▓▓  NOTICE BOARD  ▓▓▓
     ============================================================
     
     Small notification pills shown at the top of the hero.
     
     • update   → green pill   (latest news)
     • deadline → amber pill   (upcoming deadline)
     
     Each item has:
       label → short pill text (e.g. "Latest", "Deadline")
       text  → the message (plain text only — no HTML)
       date  → optional date suffix (appended as "— {date}")
       link  → optional URL (makes the whole pill clickable)
     
     Hide either one: set it to null.
     Hide the whole board: set topNotices: null.
     
     If both are null, the whole bar hides itself automatically.
     ------------------------------------------------------------ */
  topNotices: {
    update: {
      label: "Latest",
      text:  "RSV Lab AST Analysis Tool v2.2 released",
      date:  "Sept 2026",
      link:  "https://doi.org/10.5281/zenodo.20589848"
    },
    deadline: {
      label: "Deadline",
      text:  " application window",
      date:  "13 December 2026",
      link:  ""
    }
  },

  /* ============================================================
     ▓▓▓  SECTION 3 — HERO HIGHLIGHT CHIPS  ▓▓▓
     ============================================================
     
     The small pill-shaped chips under the hero buttons.
     Each chip = { icon, label }.
     
     • Add or remove entries freely.
     • Set to [] to hide the row entirely.
     
     icon → Font Awesome name (e.g. "fa-microscope")
            Full icon list: https://fontawesome.com/icons
     ------------------------------------------------------------ */
  heroHighlights: [
    { icon: "fa-microscope",  label: "AST & AMR Research" },
    { icon: "fa-brain",       label: "ML-assisted Surveillance" },
    { icon: "fa-code-branch", label: "Open-Source Tooling" },
    // Add more chips below this line if needed:
    // { icon: "fa-flask",    label: "Wet-Lab Verified" },
  ],

  /* ============================================================
     ▓▓▓  SECTION 4 — SOCIAL & CONTACT LINKS  ▓▓▓
     ============================================================
     
     These URLs are used in three places:
       1. Header icon row (top right)
       2. Footer links
       3. Contact section (for socials only)
     
     • Set any field to "" (empty quotes) to hide it everywhere.
     • All links open in a new tab with rel="noopener" applied
       automatically for security.
     ------------------------------------------------------------ */

  /* GitHub organisation or user URL.
     Shows a GitHub icon in the header. */
  github: "https://github.com/rsv8lab",

  /* Twitter/X profile URL. */
  twitter: "https://x.com/KDKamol",

  /* LinkedIn profile or company page URL. */
  linkedin: "https://www.linkedin.com/in/kamol-das-7a4b0b1b7/",

  /* YouTube channel URL. */
  youtube: "https://www.youtube.com/@RSVLab",

  /* Facebook page URL.
     Note: this only appears in the header icons and contact
     section — not in the social array below unless listed there. */
  facebook: "https://www.facebook.com/profile.php?id=100090153347276",

  /* Public email address.
     Clicking the email icon opens the user's mail app. */
  email: "kamol.mbio@gmail.com",

  /* ORCID researcher identifier URL.
     Shows an ORCID icon in the founder section. */
  orcid: "https://orcid.org/0009-0004-2253-7527",

  /* Phone number as plain text. Not clickable by default. */
  phone: "01775510351",

  /* The lab's full physical address as one line.
     Used in metadata and can be shown in the contact section. */
  location: "Department of Microbiology, University of Chittagong · Ramakrishna Mission, Hathazari, Chittagong, Bangladesh",

  /* ============================================================
     ▓▓▓  SECTION 5 — PARTNER LAB  ▓▓▓
     ============================================================
     
     A small purple pill link shown in the navbar.
     Ideal for a collaborating lab, parent institution, or
     partner organisation.
     
     • To hide: set partnerLabUrl to ""
     ------------------------------------------------------------ */
  partnerLabUrl:  "https://skd.rsv8lab.workers.dev",
  partnerLabText: "Eco-Bio Lab",

  /* ============================================================
     ▓▓▓  SECTION 6 — NAVIGATION MENU  ▓▓▓
     ============================================================
     
     Each line = one link in the top menu.
     
     label → what the user sees
     href  → destination:
               "#about"    → scrolls to a section (same page)
               "/page"     → goes to a sub-page (with _redirects)
               "https://…" → external site
               "mailto:…"  → opens email
     
     • Order here = order on the page.
     • To add: copy a line, change label and href.
     • To remove: delete the entire { ... }, line.
     • To hide the whole nav menu (not recommended): nav: [].
     ------------------------------------------------------------ */
  nav: [
    { label: "About",        href: "#about"        },
    { label: "Research",     href: "#research"     },
    { label: "Tools",        href: "#tools"        },
    { label: "Publications", href: "#publications" },
    { label: "Projects",     href: "#projects"     },
    { label: "Team",         href: "#team"         },
    { label: "Contact",      href: "#contact"      },
    // Add more menu items below:
    // { label: "Blog",       href: "#blog"        },
    // { label: "GitHub",     href: "https://github.com/KamolDas" },
  ],

  /* ============================================================
     ▓▓▓  SECTION 7 — HERO BADGE  ▓▓▓
     ============================================================
     
     The small pill under the hero description.
     Shows a tiny avatar + this text.
     
     Example: "Kamol Das · Microbiology, University of Chittagong"
     
     • Leave blank to hide the badge entirely.
     ------------------------------------------------------------ */
  heroBadge: "Kamol Das · Microbiology, University of Chittagong",

  /* ============================================================
     ▓▓▓  SECTION 8 — ABOUT  ▓▓▓
     ============================================================
     
     A grid of cards explaining your lab.
     
     Every card can have:
       icon   → Font Awesome icon (required)
       color  → accent colour (see palette below)
       title  → card heading (required)
       text   → card body text (required)
       image  → optional image URL above the icon
       link   → optional external link
       cta    → optional button text (only used if link exists)
     
     COLOUR PALETTE (use these strings exactly):
       "var(--primary-purple)"  → #7614DC
       "var(--primary-blue)"    → #1E90FF
       "var(--primary-orange)"  → #FF8C00
       "var(--primary-cyan)"    → #06B6D4
       "var(--primary-green)"   → #2D6A4F
       "var(--primary-red)"     → #DC2626
       "var(--primary-yellow)"  → #FFC300  (add to styles.css if needed)
       "var(--primary-gold)"    → #F59E0B  (add to styles.css if needed)
     Or any hex code: "#E11D48", "#7C3AED", etc.
     
     SECTION AUTO-HIDES IF cards: [] is empty.
     ------------------------------------------------------------ */
  about: {
    title:    "About RSV Lab",
    subtitle: "We bridge the gap between traditional microbiology and modern computational analysis, focusing on antimicrobial resistance surveillance and CLSI/EUCAST-compliant susceptibility testing.",

    cards: [
      /* ---------- Card 1: Research & Development ---------- */
      {
        icon:  "fa-microscope",       // Font Awesome icon name
        color: "var(--primary-blue)", // accent colour
        title: "Research & Development",
        text:  "Clinical microbiology, antimicrobial resistance (AMR) surveillance, and drug discovery, grounded in CLSI M100 and EUCAST breakpoint standards."
        // Optional fields (uncomment to use):
        // image: "assets/research.jpg",
        // link:  "https://example.com/research",
        // cta:   "Learn more"
      },

      /* ---------- Card 2: Bioinformatics ---------- */
      {
        icon:  "fa-laptop-code",
        color: "var(--primary-orange)",
        title: "Bioinformatics & Data Analysis",
        text:  "Python and R-based tools for AST data structuring, MDR/XDR/PDR classification, and machine learning applications in AMR data."
      },

      /* ---------- Card 3: Biotechnology ---------- */
      {
        icon:  "fa-flask",
        color: "var(--primary-purple)",
        title: "Biotechnology & Pharma",
        text:  "Applying scientific knowledge to real-world challenges in pharmaceuticals, quality control, and industrial biotechnology."
      },

      /* ---------- TEMPLATE: copy this block to add a new card ---------- */
      // {
      //   icon:  "fa-circle",
      //   color: "var(--primary-cyan)",
      //   title: "New card title",
      //   text:  "Description goes here.",
      // },
    ],
  },

  /* ============================================================
     ▓▓▓  SECTION 9 — RESEARCH  ▓▓▓
     ============================================================
     
     Same structure as About. Grid of cards.
     Each card is one research focus area.
     
     Add or remove items as needed.
     Set cards: [] to hide the entire section.
     ------------------------------------------------------------ */
  research: {
    title:    "Research Focus",
    subtitle: "Core areas of the project and PhD track.",

    cards: [
      /* ---------- Card 1 ---------- */
      {
        icon:  "fa-vial-circle-check",
        color: "var(--primary-purple)",
        title: "AST Methodology",
        text:  "Kirby-Bauer disk diffusion and MIC/broth microdilution workflows aligned to CLSI M100 and EUCAST breakpoint tables."
      },

      /* ---------- Card 2 ---------- */
      {
        icon:  "fa-shield-virus",
        color: "var(--primary-blue)",
        title: "AMR Epidemiology",
        text:  "Antimicrobial resistance patterns in ICU, hospital, and diagnostic-centre settings across Bangladesh and South Asia."
      },

      /* ---------- Card 3 ---------- */
      {
        icon:  "fa-diagram-project",
        color: "var(--primary-orange)",
        title: "Data Quality & Interoperability",
        text:  "A machine-learning-enabled framework for laboratory data quality, resistance-pattern detection, and sentinel-site interoperability."
      },

      /* ---------- Card 4 ---------- */
      {
        icon:  "fa-shield-halved",
        color: "var(--primary-purple)",
        title: "Open Science",
        text:  "Verified, source-checked breakpoint data, reproducible Python tooling, and plans for Zenodo/ORCID-linked open datasets."
      },
    ],
  },

  /* ============================================================
     ▓▓▓  SECTION 10 — TOOLS  ▓▓▓
     ============================================================
     
     Cards for software you've built.
     These usually include a link + cta to open the repo/site.
     
     If a card has a "link", a button appears automatically:
       → <a href="{link}" target="_blank"> {cta} <i>→</i> </a>
     
     If no "link" → no button appears (clean card).
     ------------------------------------------------------------ */
  tools: {
    title:    "Tools & Software",
    subtitle: "Open tooling built around the RSV Lab AST workflow.",

    cards: [
      /* ---------- Tool 1: with button ---------- */
      {
        icon:  "fa-desktop",
        color: "var(--primary-purple)",
        title: "RSV Lab Advanced AST Analysis Tool",
        text:  "A Python desktop GUI with an MDR/XDR/PDR classifier, ML clustering/detection modules, and a CLSI/EUCAST breakpoint lookup system.",
        link:  "https://github.com/KamolDas",   // opens in new tab
        cta:   "View on GitHub"                 // button text
      },

      /* ---------- Tool 2: with button ---------- */
      {
        icon:  "fa-code",
        color: "var(--primary-blue)",
        title: "rsv_formulas_library.py",
        text:  "A Python library of AST/MIC statistics and ML-metric formulas underlying the tool's statistical and methodological documentation set.",
        link:  "https://github.com/KamolDas",
        cta:   "View on GitHub"
      },

      /* ---------- Tool 3: no button (informational) ---------- */
      {
        icon:  "fa-table-list",
        color: "var(--primary-orange)",
        title: "Verified CLSI Breakpoint Table",
        text:  "A hand-checked breakpoint dataset cross-verified against CLSI M100-Ed36 (2026)."
        // No link → no button shown.
      },
      {
        icon:  "fa-desktop",
        color: "var(--primary-purple)",
        title: "RSV Laboratory Advanced AST Analysis Tool (rsv_4.6_skd) — User Manual",
        text:  "This manual provides comprehensive documentation for the RSV Laboratory Advanced AST Analysis Tool, a publication-ready software platform designed for clinical microbiology laboratories. The tool facilitates the automated interpretation of Antimicrobial Susceptibility Testing (AST) results by integrating CLSI M100 (2026) standards.",
        link:  "https://zenodo.org/records/21620688",   // opens in new tab
        cta:   "View on Zenodo"                 // button text
      },
    ],
  },

  /* ============================================================
     ▓▓▓  SECTION 11 — PUBLICATIONS  ▓▓▓
     ============================================================
     
     A stacked list (not cards). Each publication is one block.
     
     Fields per publication:
       title   → full publication title (required)
       authors → author list as plain text (required)
       journal → journal name + year (required)
       doi     → DOI URL (optional; if empty, no DOI button shows)
     
     Set items: [] to hide the section entirely.
     ------------------------------------------------------------ */
  publications: {
    title:    "Recent Research & Publications",
    subtitle: "Our latest contributions to the scientific community, available via open-access repositories.",

    items: [
      /* ---------- Publication 1 ---------- */
      {
        title:   "An Integrated Computational Framework for Antimicrobial Susceptibility Testing",
        authors: "Kamol Das et al.",
        journal: "Zenodo Preprint, 2026",
        doi:     "https://doi.org/10.5281/zenodo.20589848"
      },

      /* ---------- Publication 2 ---------- */
      {
        title:   "Machine Learning Analysis Reports for Microbial Data",
        authors: "Kamol Das et al.",
        journal: "Zenodo Dataset, 2026",
        doi:     "https://doi.org/10.5281/zenodo.21534293"
      },

      /* ---------- Publication 3 ---------- */
      {
        title:   "RSV Lab Official Logo",
        authors: "Kamol Das",
        journal: "Zenodo, 2026",
        doi:     "https://doi.org/10.5281/zenodo.19209980"
      },

      /* ---------- TEMPLATE for new publications ---------- */
      // {
      //   title:   "Publication Title",
      //   authors: "First Author et al.",
      //   journal: "Journal Name, 2027",
      //   doi:     "https://doi.org/10.xxxx/yyyy"
      // },
    ],
  },

  /* ============================================================
     ▓▓▓  SECTION 12 — PROJECTS  ▓▓▓
     ============================================================
     
     A grid of project cards WITH filter tabs at the top.
     
     HOW FILTERS WORK:
       Each card has a "category" field.
       Each filter has a "key" field.
       Clicking a filter shows only cards whose category matches.
     
     Standard categories in this template:
       "all"      → show everything (built-in)
       "lab"      → official RSV Lab repos
       "personal" → founder's personal repos
     
     Add or remove filter keys and categories freely — as long
     as the key names match.
     ------------------------------------------------------------ */
  projects: {
    title:    "Our Projects",
    subtitle: "Open-source tools and research repositories developed by RSV Lab and its founder.",

    /* -------- Filter buttons (top of section) -------- */
    filters: [
      { key: "all",      label: "All" },              // shows every card
      { key: "lab",      label: "RSV Lab Repos" },    // category === "lab"
      { key: "personal", label: "Founder's Repos" },  // category === "personal"
      // Add more filter keys if you add new categories below:
      // { key: "collab",  label: "Collaborations" },
    ],

    /* -------- Project cards -------- */
    cards: [
      /* ---------- Lab project 1 ---------- */
      {
        category: "lab",                       // must match a filter key
        icon:     "fa-robot",
        color:    "var(--primary-blue)",
        title:    "RSVLab-ASTLearn",
        text:     "AST machine learning toolkit for predicting antimicrobial susceptibility.",
        link:     "https://github.com/rsv8lab/RSVLab-ASTLearn"
      },

      /* ---------- Lab project 2 ---------- */
      {
        category: "lab",
        icon:     "fa-dna",
        color:    "var(--primary-orange)",
        title:    "RSVLab-Bioinformatics",
        text:     "DNA/RNA sequence analysis tools for genomic research.",
        link:     "https://github.com/rsv8lab/RSVLab-Bioinformatics"
      },

      /* ---------- Lab project 3 ---------- */
      {
        category: "lab",
        icon:     "fa-database",
        color:    "var(--primary-purple)",
        title:    "RSVLab-DNAStore",
        text:     "RSV algorithm DNA-computing framework for data storage.",
        link:     "https://github.com/rsv8lab/RSVLab-DNAStore"
      },

      /* ---------- Lab project 4 ---------- */
      {
        category: "lab",
        icon:     "fa-bacteria",
        color:    "var(--primary-blue)",
        title:    "RSVLab-Microbiology",
        text:     "CLSI, EUCAST, MPN, drug development & discovery, and AST reference databases.",
        link:     "https://github.com/rsv8lab/RSVLab-Microbiology"
      },

      /* ---------- Personal project 1 ---------- */
      {
        category: "personal",
        icon:     "fa-flask",
        color:    "var(--primary-orange)",
        title:    "AST-Tool",
        text:     "Python workflow for 2×2, 3×3, and 4×4 AST matrix agreement analysis.",
        link:     "https://github.com/KamolDas/AST-Tool"
      },

      /* ---------- Personal project 2 ---------- */
      {
        category: "personal",
        icon:     "fa-code",
        color:    "var(--primary-purple)",
        title:    "DNA-sequence-for-data-store",
        text:     "DNA-as-string and Unicode-text-based approaches for data storage.",
        link:     "https://github.com/KamolDas/DNA-sequence-for-data-store"
      },

      /* ---------- Personal project 3 ---------- */
      {
        category: "personal",
        icon:     "fa-terminal",
        color:    "var(--primary-blue)",
        title:    "C-basic",
        text:     "Basic C programming practice and examples.",
        link:     "https://github.com/KamolDas/C-basic"
      },

      /* ---------- TEMPLATE for new projects ---------- */
      // {
      //   category: "lab",                // or "personal", or your custom key
      //   icon:     "fa-code",
      //   color:    "var(--primary-purple)",
      //   title:    "Project Name",
      //   text:     "Short description.",
      //   link:     "https://github.com/…"
      // },
    ],
  },

  /* ============================================================
     ▓▓▓  SECTION 13 — TEAM / FOUNDER  ▓▓▓
     ============================================================
     
     Two parts:
       1. Founder profile (single person block, always shown)
       2. Additional team members (optional grid, hidden if empty)
     
     If team.members is [], the member grid hides automatically.
     ------------------------------------------------------------ */
  team: {
    title: "Meet the Founder",

    /* -------- Founder profile -------- */
    name:   "Kamol Das",
    role:   "Founder & Principal Investigator",
    bio:    "MS student, Department of Microbiology, University of Chittagong, Bangladesh. Works at the intersection of AMR surveillance, clinical microbiology, and computational tools for AST analysis.",

    /* Avatar image URL.
       If left empty "" → generates an initials avatar automatically.
       Recommended: 400×400 px square image. */
    avatar: "https://github.com/KamolDas.png",

    /* ORCID link (shows an ORCID icon). */
    orcid: "https://orcid.org/0009-0004-2253-7527",
       
    /* -------- Additional team members (optional) --------
       Each member has: name, role, avatar (optional), url (optional).
       Set members: [] to hide the grid entirely. */
    members: [
      // ---------- Example team member (uncomment to use) ----------
      // {
      //   name:   "Ayesha Chowdhury",
      //   role:   "Bioinformatics Lead",
      //   avatar: "https://github.com/ayesha.png",       // optional
      //   url:    "https://github.com/ayesha"            // optional
      // },
       {
         name:   "RSV Lab",
         role:   "Hosting Institution",
         avatar: "https://github.com/rsv8lab.png",
        
     },
       {
         name:   "Shamol Das, Senior Officer (IT), Sonali Bank",
         role:   "Sponsor",
         bio:    "CSE, HSTU, Bangladesh.",
         avatar: "https://github.com/shamoldas.png",
         orcid: "",
         url:    "https://github.com/shamoldas"
          
       },
       {
         name:   "Sazal Das",
         role:   "Assistant Engineer",
         bio:    "EEE, University of Chittagong, Bangladesh.",
         avatar: "https://github.com/sazaldas.png",
         orcid: "https://orcid.org/0009-0004-4220-4287",
         url:    "https://github.com/sazaldas"
          
       },
    ],
  },

  /* ============================================================
     ▓▓▓  SECTION 14 — CONTACT  ▓▓▓
     ============================================================
     
     Two subsections:
     
     1. cards   → information cards (Location, Phone, Email…)
                  The "text" field can contain <br> for line
                  breaks, or <a> tags for links.
     
     2. socials → branded buttons with brand-specific colours
                  Ideal for Facebook, YouTube, LinkedIn, etc.
                  Brand colours: Facebook #1877F2, YouTube #FF0000,
                  Twitter #1DA1F2, GitHub #333333, LinkedIn #0A66C2.
     ------------------------------------------------------------ */
  contact: {
    title:    "Contact RSV Lab",
    subtitle: "Get in touch with RSV Lab for collaborations, research inquiries, or general questions.",

    /* -------- Base info cards --------
       These accept small HTML in the text field:
         <br> for line break
         <a href="…">text</a> for links */
    cards: [
      {
        icon:  "fa-map-marker-alt",
        color: "var(--primary-blue)",
        title: "Location",
        text:  "University of Chittagong<br>Chittagong, Bangladesh"
      },
      {
        icon:  "fa-phone",
        color: "var(--primary-purple)",
        title: "Phone",
        text:  "01775-510351<br>01867-771598"
      },
      {
        icon:  "fa-envelope",
        color: "var(--primary-orange)",
        title: "Email",
        text:  "kamol.mbio@gmail.com"
      },
    ],

    /* -------- Branded social buttons --------
       Each entry renders a card with a coloured button.
       Perfect for "Follow us on Facebook / YouTube" style cards. */
    socials: [
      {
        label: "Facebook",
        icon:  "fab fa-facebook",     // full brand icon class
        url:   "https://www.facebook.com/profile.php?id=100090153347276",
        color: "#1877F2",             // official Facebook blue
        text:  "Follow RSV Lab for updates, news, and community posts.",
        cta:   "Visit Page"           // button text
      },
      {
        label: "YouTube",
        icon:  "fab fa-youtube",
        url:   "https://www.youtube.com/@RSVLab",
        color: "#FF0000",             // official YouTube red
        text:  "Subscribe to our channel for tutorials, research talks, and lab updates.",
        cta:   "Subscribe"
      },
      // ---------- Add more social buttons below ----------
      {
         label: "LinkedIn",
         icon:  "fab fa-linkedin",
         url:   "https://www.linkedin.com/in/kamol-das-7a4b0b1b7/",
         color: "#0A66C2",
         text:  "Connect with us professionally.",
         cta:   "Connect"
       },
      // {
      //   label: "GitHub",
      //   icon:  "fab fa-github",
      //   url:   "https://github.com/rsv8lab",
      //   color: "#333333",
      //   text:  "Explore our open-source repositories.",
      //   cta:   "View Repos"
      // },
    ],
  },

  /* ============================================================
     ▓▓▓  SECTION 15 — FOOTER  ▓▓▓
     ============================================================
     
     Two lines:
       tagline   → italic line above the copyright
       copyright → the copyright line at the very bottom
     
     Both are optional — if left blank, sensible defaults apply.
     ------------------------------------------------------------ */
  footer: {
    tagline:   "Advancing AMR surveillance through open science and computational biology.",
    copyright: "© 2026 RSV Lab — Kamol Das. All rights reserved."
  },

  /* ============================================================
     ▓▓▓  SECTION 16 — SEO / SITE METADATA  ▓▓▓
     ============================================================
     
     These values feed into <meta> tags for search engines and
     social previews. You generally set these once and forget.
     
     siteUrl  → the canonical URL of your live site
     ogImage  → the image shown in social previews (1200×630 px)
     ------------------------------------------------------------ */
  siteUrl: "https://rsv8lab-github-io.pages.dev/",
  ogImage: "https://rsv8lab-github-io.pages.dev/rsvlab-logo.png",

};

/* ============================================================
   IMPORTANT — do not delete this line.
   It exposes SITE to the render engine.
   ============================================================ */
window.SITE = SITE;
