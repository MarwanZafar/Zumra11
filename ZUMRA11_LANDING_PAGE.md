# زمرة 11 — صفحة الهبوط (Landing Page)
## التوثيق الشامل للمشروع

> **مركز ابتكار يجمع رواد الأعمال، الشركات، المستثمرين، وأصحاب الحلول في بيئة واحدة لتطوير الأفكار، اختبار الحلول، وبناء فرص تعاون قابلة للنمو في مجالات تجربة الزائر.**

---

## 📋 جدول المحتويات

1. [الفكرة العامة](#الفكرة-العامة)
2. [الهوية البصرية](#الهوية-البصرية)
3. [الهوية اللونية](#الهوية-اللونية)
4. [الخطوط والـ Typography](#الخطوط-والـ-typography)
5. [البنية التقنية](#البنية-التقنية)
6. [أقسام الصفحة](#أقسام-الصفحة)
7. [الـ Animations والتفاعلات](#الـ-animations-والتفاعلات)
8. [المعمارية والملفات](#المعمارية-والملفات)
9. [الـ Accessibility والـ Performance](#الـ-accessibility-والـ-performance)
10. [الإنجازات الزمنية](#الإنجازات-الزمنية)

---

## الفكرة العامة

### الرؤية
صفحة هبوط **سينمائية فاخرة** لـ **زمرة 11** — مركز الابتكار في مكة المكرمة، تابع لشركة EVC. الهدف: تقديم المركز كمنصة عالمية في الرؤية، محلية في الأثر، تركز على تجربة الزائر للحج والعمرة.

### الأهداف الرئيسية
- **First Impression قوي**: الزائر يقرر يبقى أو يطلع في أول ١٠ ثوان
- **Cinematic Storytelling**: السرد بصري متدفّق، مو static
- **Conversion-focused**: التركيز النهائي على تسجيل الاهتمام
- **Bilingual Ready**: عربي أساسي مع دعم تقني للإنجليزي مستقبلًا
- **Mobile-first**: تجربة مكافئة على كل الأجهزة

### الجمهور المستهدف
| الفئة | الاحتياج |
|------|--------|
| **رواد الأعمال** | بيئة لتطوير فكرتهم في قطاع الحج/العمرة |
| **الشركات** | شراكات وفرص دخول لقطاع تجربة الزائر |
| **المستثمرون** | الكشف عن فرص استثمارية واعدة |
| **المبتكرون والمهتمون** | متابعة تطوير حلول تجربة الزائر |

### الإطلاق المتوقع
**سبتمبر 2026** — متزامن مع موسم العمرة المبكرة.

---

## الهوية البصرية

### الفلسفة
**"Cinematic Dark + Warm Cream Moments"** — أساس داكن سينمائي يُكسر بلحظات ضوء دافئة (Spaces cream band) لخلق إيقاع بصري وعاطفي. هذا ينقل رسالة المركز: داكن وعميق كقدسية المكان، دافئ ومضيء كروح الابتكار.

### المبادئ التصميمية
1. **Less is More** — لا overload، كل عنصر له غرض
2. **Motion with Intent** — الـ animations تخدم القصة، مو زخرفة
3. **Depth Through Layering** — الـ ambient layers + glow blobs + particles
4. **Premium Restraint** — الـ accents نادرة عشان تكون قوية
5. **Smooth Transitions** — لا hard cuts، الانتقال بين الأقسام `mask-image` feathered

### المرجع البصري
- **Stripe.com** — في الـ glass morphism والـ nav
- **Linear.app** — في الـ subtle gradients والـ ambient layers
- **Apple Vision Pro** — في الـ cinematic depth والـ word-reveal
- **Awwwards winners 2025-2026** — في الـ scroll-driven animations

---

## الهوية اللونية

### نظام الألوان الرسمي (من ملف Color System PDF)

| اللون | HEX | الدور | النسبة |
|------|-----|------|--------|
| **Zamzam Teal** | `#0D5B5A` | Primary Brand Color | 20% |
| **Midnight Kaaba** | `#0B0D10` | Primary Anchor | 5% |
| **Copper Clay** | `#C46A36` | Accent / Highlights | 15% |
| **Haram Limestone** | `#D9CDB8` | Neutral Foundation | 40% |
| **Pilgrim White** | `#F7F5F1` | Backgrounds | 20% |

### القاعدة الذهبية للاستخدام
- **Teal** = **السلطة الهادئة للعلامة** — eyebrows, dividers, primary highlights, hover states
- **Copper Clay** = **إشارة الفعل** — فقط للـ CTAs والـ critical actions
- **Limestone + White** = **التهدئة البصرية** — في Spaces band فقط
- **Kaaba Black** = **العمق** — في الـ dark sections backgrounds

### الـ Background System
```
--bg-deepest:  #0B0D10  (Midnight Kaaba — الأعمق)
--bg-base:     #14181F  (Charcoal warm)
--bg-elevated: #1A1F26  (Surface elevated)
--bg-surface:  #232932  (Cards وعناصر)
```

### الـ Supporting Tones (للـ Charts وUI states)
- Sage Light `#B5C9B5`
- Sage Mid `#7A9A85`
- Teal Light `#4A8B8E`

### درجات إضافية تستخدم في الـ Roadmap journey
الـ 4 steps في Roadmap تستخدم ألوان متنوعة للتنويع البصري (مع الحفاظ على Teal كـ primary):
- ٠١ التعاون → Cyan `#359AB5`
- ٠٢ التجربة → Pink `#E44966`
- ٠٣ العرض → Purple `#4D4496`
- ٠٤ النمو → Amber `#D99109`

---

## الخطوط والـ Typography

### الـ Font Stack
- **العربي (Display + Body)**: `Tajawal` — Google Fonts
- **اللاتيني**: `Inter` — Google Fonts
- **الـ Numbers**: `Inter` — للأرقام العربية الشرقية أيضًا

### السلم الـ Typographic
| العنصر | الحجم | الوزن |
|--------|------|------|
| **Hero Title** | `clamp(40px, 5.5vw, 76px)` | 700 |
| **Section Title (H2)** | `clamp(32px, 4.6vw, 56px)` | 700 |
| **Card Title (H3)** | 19-24px | 700 |
| **Body** | 14-17px | 400 |
| **Eyebrow (English)** | 11-13px + 0.22em letter-spacing | 600 |
| **Small Caption** | 11-13px | 500 |

### القاعدة العربية
- **الأرقام**: عربية شرقية (٠١، ٠٢، ٠٣) في الـ context الفخم
- **النصوص الكبيرة**: padding-top إضافي عشان النقاط (ـُـ) ما تنقص
- **Letter-spacing**: -0.01em للعناوين عشان أنعم
- **Line-height**: 1.7 للنصوص، 1.15-1.3 للعناوين

---

## البنية التقنية

### الـ Stack
```
- HTML5 (vanilla)
- CSS3 (custom properties + mask-image + color-mix)
- JavaScript (ES6 modules, no framework)
- GSAP 3.12 (animations engine)
- ScrollTrigger (scroll-driven animations)
- Lenis 1.1 (smooth scroll)
```

### القرارات المعمارية
1. **No build step** — يشتغل مباشرة بـ `python3 -m http.server 8000`
2. **No framework** — Vanilla JS modules عشان السرعة والسيطرة
3. **CDN dependencies** — GSAP, Lenis, Tajawal/Inter من Google Fonts
4. **Progressive enhancement** — يشتغل بدون JS (fallback)

### الـ Browser Support
- Chrome / Edge ≥ 90
- Safari ≥ 15 (للـ backdrop-filter و mask-image)
- Firefox ≥ 89

---

## أقسام الصفحة

### تسلسل الأقسام (V1 النهائي)

```
┌─────────────────────────────────────┐
│  1. Loader (initial)                │
├─────────────────────────────────────┤
│  2. Nav (sticky, auto-hide)         │
├─────────────────────────────────────┤
│  3. Hero — "نبتكر تجربة الزائر"     │
├─────────────────────────────────────┤
│  4. Spotlight — 4 feature cards     │
├─────────────────────────────────────┤
│  5. Spaces — Cream band, 4 tiles    │
├─────────────────────────────────────┤
│  6. Roadmap — S-curve journey       │
├─────────────────────────────────────┤
│  7. Programs — 6 program cards      │
├─────────────────────────────────────┤
│  8. Closing CTA — Final call        │
├─────────────────────────────────────┤
│  9. Register — Multi-step form      │
├─────────────────────────────────────┤
│  10. Footer                         │
└─────────────────────────────────────┘
```

---

### 1. الـ Loader
- **Animation**: Logo zumra يظهر مع shimmer effect
- **Duration**: ~1.5 ثانية
- **Exit**: Fade out smooth قبل ما الـ Hero يبدأ

### 2. الـ Navigation
- **Style**: Glass block — `backdrop-filter: blur(24px) saturate(1.6)`
- **Shape**: Rounded corners 14px (مو pill كامل)
- **Border**: 1.5px subtle white-tinted
- **Shadow**: Multi-layer (inner highlight + outer soft + outer deep + ambient glow)
- **Behavior**:
  - Auto-hide عند scroll down
  - Auto-show عند scroll up
  - **Adaptive**: يتحول لـ light glass فوق Spaces cream band، يرجع dark glass تحت
- **Links**: الرئيسية / المساحات / البرامج / التسجيل
- **CTA**: زر "سجّل اهتمامك" دائم

### 3. الـ Hero
- **Background**:
  - Layer 1: Warm gradient base (تيراكوتا خفيف على dark)
  - Layer 2: 3 glow blobs (terra + teal + amber) تطفو ببطء
  - Layer 3: صورة مبنى زمرة 11 الحقيقية (`hero-building.png`) — مخفية بـ `opacity: 0.42 + blur(1.5px) + mix-blend-mode: luminosity`
  - Layer 4: 28 جزيء عائم (terra/teal/amber/white)
  - Layer 5: Vignette
- **النصوص**:
  - Eyebrow: "حج وعمرة | تجربة الضيف"
  - Title: "نبتكر تجربة الزائر" (single-line + word-reveal animation)
  - Description: من ملف الورد الرسمي
  - Tagline: "عالمية في الرؤية، محلية في الأثر"
- **Buttons**: "سجّل اهتمامك الآن" + "استكشف زمرة 11"
- **Animations**:
  - Word-by-word reveal
  - Ken-burns slow zoom على الصورة (24s breathe)
  - Mouse parallax (الصورة تتحرك عكس الماوس = depth)
  - Glow blobs drift (22s/28s/32s cycles)

### 4. Spotlight Section
- **Title**: العناصر الداعمة (4 features)
- **4 Feature Cards** بـ 3D mouse-tilt:
  1. برامج الابتكار — من الفكرة إلى الحل
  2. شراكات واستثمار — نربط الفرص بالشركاء
  3. تطوير القدرات — تنمية المهارات والمعرفة
  4. نمو وتوسع — دعم الحلول القابلة للنمو
- **Card structure**: Stacked icon-layers + parallax tilt + hover glow
- **Animations**: Mouse-tracking tilt, hover surface scaling

### 5. Spaces Band (الـ Hero Centerpiece)
- **النوع**: Full-width cream band — يستخدم `margin-left/right: calc(50% - 50vw)`
- **اللون**: Gradient `#F8F4EA → #F2EBDC`
- **الـ Bridges**: `mask-image` feathered edges — تختفي تدريجيًا في الأقسام المجاورة
- **الـ Content**:
  - Title: "مساحات صُممت للابتكار" (dark charcoal على cream)
  - Subtitle بـ font عربي خفيف
- **4 Tiles** في صف أفقي:
  | # | الاسم | اللون المميز |
  |---|------|-------------|
  | ٠١ | مساحات العرض والفعاليات | Purple |
  | ٠٢ | مساحات العمل المشتركة | Amber |
  | ٠٣ | غرفة الابتكار | Pink |
  | ٠٤ | المكاتب الخاصة | Terracotta |
- **Tile interaction**:
  - Default: Image + permanent label (index + name) bottom-right
  - Hover: Image blurs + premium glass card reveals مع accent bar + title + description
- **Decoration layers**:
  - 3 warm glow blobs (terra/teal/amber)
  - 4 geometric shapes (large circle, small circle, rotating square, double-ring)
  - 3 dashed flowing SVG curves
  - 6 colored accent dots
- **Animations**:
  - Continuous breathe (4px, 6s) — pauses on hover
  - Scroll-driven parallax على الـ shapes + glows
  - Inner image parallax داخل كل tile

### 6. Roadmap Journey
- **النوع**: Diagonal cinematic journey (مو straight timeline)
- **Title**: "بيئة تجمع المساحة، المعرفة، والفرصة"
- **الـ Path**: SVG S-curve يلف بين 4 nodes:
  - يبدأ يمين فوق (نقطة 1: التعاون)
  - يلف لليسار، يمر بنقطة 2: التجربة
  - يلف مرة ثانية، يمر بنقطة 3: العرض
  - ينتهي يسار تحت (نقطة 4: النمو)
- **الـ Curve**: `M 1140 60 C 900 60, 800 240, 600 240 C 400 240, 300 420, 60 420`
- **Line color**: Pure white at 55% opacity (مينمالست)
- **Scroll animation**: Line draws itself مع scroll progress
- **4 Steps Cards**:
  - كل card فيها node + bar accent + title + description
  - الـ cards مكدّسة قطريًا (margin-top: 0/90/180/270px)
- **Step contents** (من الورد الرسمي):
  1. **التعاون** — نوفر لك بيئة تشاركية تربطك بخبرات ومجتمعات ملهمة
  2. **التجربة** — نمنحك مساحة لتجربة أفكارك وتحويلها إلى نماذج واقعية
  3. **العرض** — ندعمك بعرض أفكارك وحلولك أمام جمهورك المناسب
  4. **النمو** — نساعدك على تطوير أعمالك وتوسيع أثرها واستدامتها

### 7. Programs Section
- **Title**: "برامج وأنشطة تحرّك الأفكار"
- **النصوص** (من الورد): "تجمع زمرة 11 رواد الأعمال، مزودي الحلول، الشركات، والمستثمرين..."
- **6 Program Cards**:
  1. برامج الابتكار
  2. ورش العمل
  3. التجريب الميداني
  4. جلسات المعرفة
  5. فعاليات عرض الحلول
  6. فرص التعاون
- **Card features**:
  - Internal `.pc-shape*` depth decorations
  - SVG icons قوية
  - Dot pulse animation on hover (dot-2 delayed 0.3s)
  - Hover lift + glow

### 8. Closing CTA
- **Background**: Pure cinematic (لا صور)
  - Layered gradient base
  - 2 large glow blobs (terra + teal)
  - Hexagon pattern at 5% opacity, drifting
  - Conic-gradient rays rotating 90s
  - 7 blinking sparkles
- **Title**: "كن جزءًا من مجتمع زمرة 11" (single-line desktop)
- **Word-reveal**: مع terracotta accent على آخر 3 كلمات
- **CTA**: زر large "احجز مساحتك القادمة"
- **Audience tags** (17px — أكبر من قبل):
  - رواد أعمال • شركات • مستثمرون • مبتكرون

### 9. Register Form
- **Structure**: Multi-step
- **Step 1** — Role selection:
  - Vertical 3D row list (مو 2×2 grid)
  - 4 roles: rights-rights / company / investor / innovator
  - كل row: icon (يسار) + text (وسط) + check circle (يمين) + accent stripe (آخر يمين)
  - Selected state: Terracotta glow + filled checkmark + lifted row
- **Step 2 / 3**: Additional fields (الاسم الكامل، البريد، إلخ)
- **Submit**: زر terracotta primary
- **Validation**: HTML5 + custom JS

### 10. Footer
- Logo
- Quick links
- Contact placeholders (للملء لاحقًا)
- Social placeholders

---

## الـ Animations والتفاعلات

### الفلسفة
كل animation تخدم القصة:
- **Word-reveal** = "النص يتشكّل أمامك"
- **Hero ken-burns** = "العمق المعماري حي"
- **Tile breathe** = "المساحات تتنفس"
- **Roadmap line draw** = "أنت تتقدم في الرحلة"
- **Nav adaptive glass** = "الواجهة تتكيف معك"

### المبادئ التقنية
1. **GPU-friendly**: كل الـ animations على `transform` و `opacity` فقط
2. **No layout thrashing**: لا reflows في الـ hot path
3. **will-change**: فقط على العناصر النشطة
4. **Scroll-driven**: عبر GSAP ScrollTrigger مع `scrub`
5. **Reduced motion**: كل الـ decorative animations تحترم `prefers-reduced-motion: reduce`

### الـ Animations الرئيسية

| Animation | الـ Trigger | Duration | Easing |
|-----------|------------|----------|--------|
| Hero word-reveal | Page load | 1.1s × 6 words | `power4.out` |
| Hero photo breathe | Continuous | 24s loop | `ease-in-out` |
| Glow blobs drift | Continuous | 22-32s loop | `ease-in-out` |
| Particles float | Continuous | 8-16s each | `ease-in-out` |
| Spotlight card tilt | Mouse move | Real-time | quickTo 0.8s |
| Spaces tile breathe | Continuous | 6s loop | `ease-in-out` |
| Spaces tile reveal | Scroll enter | 0.9s × 4 | `power3.out` |
| Roadmap line draw | Scroll scrub | scrub 0.8 | linear |
| Roadmap card reveal | Scroll trigger | 0.7s + 180ms stagger | `cubic-bezier` |
| Nav auto-hide | Scroll direction | 0.4s | `cubic-bezier(.16,1,.3,1)` |
| Nav adaptive glass | Section enter/exit | 0.4s | `ease` |

---

## المعمارية والملفات

### بنية المشروع

```
zumra11-landing/
├── index.html                          # Main HTML
├── hero.mp4                            # (kept on disk, unused in V1)
├── building-map.jpg                    # (kept for og:image)
├── logo_jpg-04.png                     # Brand logo
│
├── assets/
│   ├── images/
│   │   ├── hero-building.png           # Hero photo (cinematic, hidden)
│   │   ├── space-events.png            # Spaces tile 1
│   │   ├── space-coworking.jpeg        # Spaces tile 2
│   │   ├── space-innovation-room.png   # Spaces tile 3
│   │   ├── space-private-offices.jpg   # Spaces tile 4
│   │   └── zumra-sketch.png            # (unused, kept)
│   │
│   ├── css/
│   │   ├── tokens.css                  # CSS variables (brand colors, sizes)
│   │   ├── base.css                    # Reset, body, typography base
│   │   ├── components.css              # Nav, buttons, eyebrows, shared
│   │   ├── ambient.css                 # Background ambient layers
│   │   ├── sections.css                # All section styles
│   │   └── section-identities.css      # Per-section decorations
│   │
│   └── js/
│       ├── main.js                     # Entry point — imports + init calls
│       └── modules/
│           ├── loader.js               # Initial loader animation
│           ├── nav.js                  # Nav scroll, auto-hide, adaptive glass
│           ├── particles.js            # Hero particle system
│           ├── hero.js                 # Hero word-reveal + mouse parallax
│           ├── spotlight.js            # Spotlight word reveals
│           ├── spotlight-features.js   # 4 feature cards 3D tilt
│           ├── spaces.js               # Spaces tile reveals + parallax
│           ├── roadmap.js              # Roadmap S-curve + step reveals
│           ├── programs.js             # Programs cards animations
│           ├── closing.js              # Closing word-reveal + sparkles
│           └── register.js             # Multi-step form logic
```

### الملفات المحذوفة (تنظيف عبر المراحل)
- `assets/js/modules/pillars.js` ❌ (مدمج في Spotlight)
- `assets/js/modules/features.js` ❌ (مدمج في Spotlight)
- `assets/css/features.css` ❌

---

## الـ Accessibility والـ Performance

### الـ Accessibility
- ✅ `lang="ar"` + `dir="rtl"` على الـ HTML
- ✅ Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- ✅ `aria-label` على الـ icons والـ buttons غير النصية
- ✅ `aria-hidden="true"` على الـ decorations
- ✅ Color contrast ratios ≥ 4.5:1 على كل النصوص الأساسية
- ✅ Keyboard navigation works on all interactive elements
- ✅ Focus states visible (custom + browser default)
- ✅ `prefers-reduced-motion: reduce` يقفل كل الـ animations
- ✅ Form fields لها `<label>` مرتبط
- ✅ Heading hierarchy منطقي (H1 → H2 → H3)

### الـ Performance
| Metric | Target | الـ Approach |
|--------|--------|-------------|
| **Lighthouse Performance** | ≥ 80 | Lazy load غير-critical assets, GPU animations |
| **Lighthouse Accessibility** | ≥ 90 | Semantic + ARIA + contrast |
| **First Contentful Paint** | < 1.5s | Critical CSS inline, fonts preconnect |
| **Largest Contentful Paint** | < 2.5s | Hero photo eager-load + decode async |
| **Cumulative Layout Shift** | < 0.1 | Image dimensions explicit, font swap |
| **Total Blocking Time** | < 200ms | Defer non-critical JS |

### تحسينات مطبّقة
- Font preconnect للـ Google Fonts
- `decoding="async"` على كل الصور
- `loading="eager"` فقط على Hero photo (above-fold)
- `will-change` فقط على عناصر active
- ScrollTrigger throttling تلقائي
- Particles capped (28 desktop / 14 mobile)
- Reduced motion respect everywhere

---

## الإنجازات الزمنية (Phases Timeline)

### المراحل الرئيسية المنجزة

| الـ Phase | المحتوى | الحالة |
|-----------|---------|--------|
| **5.5** | Visual Refinement — sketch bg, hexagons, mosaic | ✅ |
| **5.6** | Hero video restored, ambient visibility forced | ✅ |
| **5.7** | Nav rebuild, per-section identity, smooth transitions | ✅ |
| **5.8** | Hero Arabic dots fix, 3D premium feature cards | ✅ |
| **Final 1-4** | Pillars deletion, Spotlight merge, Spaces collage | ✅ |
| **Final 5-8** | Closing cinematic, Register vertical, Cleanup | ✅ |
| **6.1.a** | Spaces first cinematic attempt (rejected) | ↩️ |
| **6.1.b** | Spaces full light cinematic band (cream) | ✅ |
| **6.1.c** | Spaces background depth + animations | ✅ |
| **6.2** | Hero 3D architecture wireframe (rejected) | ↩️ |
| **6.3** | Delete building map + 4-pin list | ✅ |
| **6.4** | Hero hidden cinematic photo | ✅ |
| **6.5** | Vertical zigzag Roadmap (rejected — too tall) | ↩️ |
| **6.6** | Horizontal timeline Roadmap | ✅ |
| **6.7** | Diagonal minimalist Roadmap (no numbers, white line) | ✅ |
| **6.8** | Curved S-line + lighter bg + auto-hide nav | ✅ |
| **6.9** | Brand identity alignment + nav glass block | ✅ |
| **6.10** | Remove eyebrows + mask-image bridges | ✅ |

### الـ Iterations الكلية
~ **20 phase** من V1 الأولي إلى الـ V1 النهائي
~ **15+ screenshots** للـ feedback iterations
~ **6.10** هو آخر Phase تم تنفيذه

---

## الملاحظات والقرارات النهائية

### قرارات تصميمية محورية
1. **Cinematic Dark Theme** — مو light/minimal
2. **Cream Spaces band** كـ visual breakpoint وسط الصفحة
3. **Diagonal Roadmap** بدل horizontal/vertical عشان "رحلة" حقيقية
4. **Mask-image bridges** بدل linear gradients
5. **Adaptive glass nav** بدل static
6. **Hero photo hidden** بدل dominant
7. **Teal-first, Copper Clay للـ CTAs فقط** — مطابق للـ brand book

### قرارات محتوى محورية
- **اعتماد الورد الرسمي** كمصدر وحيد للمحتوى
- **حذف "مختبرات الابتكار"** من Spaces (مذكور بالورد بدون وصف)
- **توحيد اسم القسم**: "غرفة الابتكار" بدل "مناطق الابتكار" (في الورد)
- **اعتماد "كيف تخدمك زمرة 11؟"** عنوان للـ Roadmap (مطابق الورد)

### Items مؤجّلة (للـ Phase التالي)
- [ ] Form backend integration (Web3Forms / Formspree / Apps Script)
- [ ] Analytics integration (إذا قُرّر)
- [ ] Contact info real values (replace `hello@zumra11.sa`, `+966 5X XXX XXXX`)
- [ ] Social media real links (replace `#`)
- [ ] Image optimization to WebP (squoosh.app, quality 80)
- [ ] CDN setup للـ production
- [ ] SEO meta tags (Open Graph, Twitter Cards)
- [ ] Sitemap + robots.txt

### الملف الرسمي للمحتوى
المحتوى الفعلي مُستمد من: `محتوى_موقع__زمرة_11.docx`

---

## معلومات المشروع

| Field | Value |
|-------|-------|
| **اسم المشروع** | زمرة 11 — Zumra 11 Landing Page |
| **الجهة** | EVC (شركة رؤية الخبراء الاستشارية) |
| **Hub Director** | المهندس ريان زفر |
| **اللغة** | عربي (RTL) + دعم تقني للإنجليزي |
| **الموقع** | مكة المكرمة، السعودية |
| **تاريخ التوثيق** | مايو 2026 |
| **الـ Stack** | Vanilla HTML/CSS/JS + GSAP + Lenis |
| **التشغيل المحلي** | `python3 -m http.server 8000` |
| **مسار المشروع** | `c:\Users\mincr\Desktop\Z\` |

---

## شكر وتقدير

تم بناء هذا الموقع عبر سلسلة من الـ iterative refinements بالتعاون بين الفريق و Claude (Anthropic) — مع تركيز على الـ cinematic storytelling والـ brand identity alignment.

**Built with care for the Zumra 11 mission.**
**عالمية في الرؤية، محلية في الأثر.**

---

*هذا الملف يلخّص الرحلة الكاملة لبناء صفحة الهبوط من V0 إلى الإصدار الحالي. للتفاصيل التقنية الكاملة، راجع الـ `INTEGRATION.md` و `BRAND.md` و `start-local.md` (يتم إعدادها في Phase 7).*
