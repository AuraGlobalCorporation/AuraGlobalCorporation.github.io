# Aura Global Corporation - Healthcare SaaS Website Development Documentation

## Project Overview

Build a high-performance, futuristic healthcare software marketing website for **Aura Global Corporation**, featuring their three core products:

1. **Aura Medical Inventory Management System** (Launching First) - Complete hospital inventory, asset lifecycle, and compliance management
2. **GoEMR** (Electronic Medical Records) - AI-powered clinical management platform
3. **Patient Portal** - Patient self-service and engagement platform

Additionally, Aura Global offers professional **Website Development Services** for healthcare providers seeking compliant, high-performance web presence.

The website must embody cutting-edge 2026 design trends while maintaining strict healthcare compliance standards.

## Core Technology Stack

### Primary Framework: Astro
- **Why**: Zero JavaScript by default, optimal for GitHub Pages hosting
- **Performance Target**: Sub-0.5s page load, 95-100 Lighthouse score
- **Architecture**: Islands Architecture for selective hydration
- **Features Required**:
  - View Transitions API for smooth page navigation
  - Native Markdown/MDX support
  - File-based routing (MPA - Multi-Page Application)

### Design System
- **Component Library**: Shadcn UI + Radix UI primitives
- **Styling**: Tailwind CSS with utility-first approach
- **Theme Management**: CSS variables with :root and .dark classes
- **Accessibility**: WCAG 2.2 compliant, full keyboard navigation and screen reader support

### Animation Framework
- **GSAP (GreenSock Animation Platform)** for high-performance animations:
  - ScrollTrigger & ScrollSmoother for scroll-based animations
  - SplitText & ScrambleText for text effects
  - MorphSVG & DrawSVG for icon/diagram animations
  - Flip for layout change animations

## Design Philosophy & Visual Identity

### 2026 Design Trends to Implement

#### 1. Strategic Minimalism with Purpose
- **Principle**: Strip away non-essential elements to spotlight critical data
- **Application**: Clean layouts, generous whitespace, reduce cognitive load
- **Goal**: Create calm in high-pressure clinical environments

#### 2. Human-Centric Emotional Design
- **Approach**: Inject warmth into B2B medical interfaces
- **Elements**: Soft UI curves, inviting color palettes, reduced perceived complexity
- **Objective**: Build trust through psychological impact of interface

#### 3. Sophisticated Dark Mode (Non-Negotiable)
- **Implementation**: Deep charcoals (#121212) and midnight blues (#0D1B2A) instead of pure black
- **Features**: 
  - Layered overlays for 3D depth hierarchy
  - Reduced eye strain for long work sessions
  - WCAG compliant contrast ratios
  - System preference detection via next-themes or custom script

### Color Palette System

#### Primary Palette: Diagnostic Noir (Default Dark)
```css
Background Primary: #0D1B2A (Deep Navy)
Background Secondary: #1B263B (Midnight Blue)
Accent/Interactive: #00E5FF (Electric Blue/Cyan)
Text Primary: #F7FBFF
Text Secondary: #E3F2FD
```

#### Secondary Palette: Neon Vitality (High Energy)
```css
Background: #000000 / #1C1C1C
Accent: #FF1744 (Neon Red)
Use for: Urgent alerts, critical vital signs
```

#### Tertiary Palette: Sterile High-Tech (Light Mode)
```css
Background: #F7FBFF (Near White)
Secondary: #E3F2FD (Light Blue)
Accent: #42A5F5 (Professional Blue)
Use for: Clean, precise, professional contexts
```

#### Specialty Palettes
- **Calm Bio-Tech**: #A8E6CF (Mint) with #2B2B2B accents - for eco-conscious messaging
- **Mindful Telehealth**: #E0F2F1 (Teal tint) with #00838F - reassuring, digital calm
- **Future Dusk**: #4C5578 (Blue-purple blend) - represents AI-driven healthcare excitement

### Typography & Visual Hierarchy
- **Headings**: Bold, modern sans-serif (Inter, Poppins, or SF Pro)
- **Body**: Readable, accessible sans-serif with 1.6-1.8 line height
- **Code/Data**: Monospace font for technical specifications
- **Emphasis**: Minimal bold text, rely on color and size for hierarchy

## Website Structure & Content

### 1. Home Page - "The Future of Healthcare, Redefined"

#### Hero Section
**Headline**: "The Future of Healthcare Management, Starting with Complete Inventory Control"

**Sub-headline**: "Aura Global Corporation launches the most advanced Medical Inventory Management System for hospitals and clinics. Experience futuristic design that prioritizes compliance, cost savings, and operational excellence. Plus: Professional website development services to grow your practice online."

**Limited-Time Offer Banner** (Prominent, animated):
🎉 **LAUNCH SPECIAL: 26% OFF for First 26 Customers Only!**
"Be among the pioneers. Get 26% lifetime discount on all Aura products."
- Inventory Management System: ✓
- GoEMR (when launched): ✓
- Patient Portal (when launched): ✓

**Urgency Counter**: 
- "Only X spots remaining!" (Dynamic counter fetched from `/campaign-data.json`)
- Shows total: "X of 26 spots claimed"
- **Last updated timestamp**: "Updated: Feb 13, 2026 at 11:30 PM IST"
- **Daily refresh**: Counter updates every night at 11:30 PM IST
- Visual: Progress bar showing filled vs remaining spots
- When <10 spots: Red color + pulsing animation
- When <5 spots: "ALMOST GONE!" badge appears

**CTAs**: 
- Primary: "Claim Your 26% Discount" (Bright, pulsing CTA)
- Secondary: "Request Inventory System Demo"
- Tertiary: "Explore Website Services"

**Visual Treatment**: 
- Full-viewport hero with animated background gradient (Diagnostic Noir palette)
- GSAP ScrollTrigger for reveal animations
- Floating inventory dashboard mockup with real-time stock alerts and compliance metrics
- Animated numbers showing cost savings (₹5L saved annually, 46% waste reduction)
- Subtle parallax effect on background medical icons
- Discount badge with animated glow effect

#### Value Proposition Section
**Message**: "Traditional inventory systems are bloated, expensive, and compliance-nightmares. Aura Global changes the game. Our Medical Inventory Management System combines Strategic Minimalism with the rigorous security of HIPAA, GDPR, and DPDP compliance. Never run out. Never over-order. Always audit-ready."

**Impact Metrics Table** (Interactive with hover states):
```
Metric                    | Industry Average | Aura Global Impact
--------------------------|------------------|--------------------
Inventory Waste           | 12-18%           | <5% (FIFO automation)
Stockout Incidents        | 4-6 per month    | <1 per month (Smart alerts)
Compliance Audit Prep     | 2-3 weeks        | Instant (100% audit-ready)
Equipment Downtime        | 15-20 days/year  | 5-8 days (Preventive maintenance)
Manual Data Entry Time    | 8-10 hrs/week    | <1 hr (Barcode scanning)
```

#### Product Trio Cards

**Section Header**: "Our Solutions" with animated subtitle: "🎉 First 26 Customers Get 26% OFF - Forever!"

Three visually distinct cards showcasing:

1. **Aura Medical Inventory Management System** - Complete Hospital Asset & Compliance Solution
   - **Badge**: "🚀 Launching Soon!"
   - **Special Badge**: "26% OFF for First 26"
   - Hover effect reveals: "Save ₹13,000+/month with early-bird pricing"
   
2. **GoEMR** - AI-Assisted Clinical Management
   - **Badge**: "Coming Q3 2026"
   - **Special Badge**: "26% OFF for First 26"
   - Hover effect reveals: "Lock in lifetime discount now"
   
3. **Patient Portal** - Patient Self-Service Empowerment
   - **Badge**: "Coming Q4 2026"
   - **Special Badge**: "26% OFF for First 26"
   - Hover effect reveals: "Early birds save ₹10,000+/month"

Each card should:
- Use icon animations (DrawSVG)
- Have hover state with elevation
- Animated "26% OFF" badge with glow effect
- Countdown indicator showing remaining spots (e.g., "14 of 26 spots left")
- Link to detailed feature pages or waitlist signup

**Bonus Card** (4th card, slightly smaller):
**Professional Website Development**
- **Badge**: "Available Now - No Waiting!"
- Starting at ₹9,999 one-time
- FREE hosting forever
- Link to pricing section

#### Social Proof Section
- Testimonial slider (3-5 quotes from fictional satisfied doctors)
- Trust badges: HIPAA Compliant, GDPR Ready, DPDP Certified
- Client logos (if available) or placeholder professional associations

---

### 2. About Us - "Human-Centric Innovation, Starting with Inventory Excellence"

#### Core Message
"At Aura Global, we believe that healthcare technology should solve real operational problems—not create new ones. We started with the #1 pain point hospitals face: inventory management chaos. Our Medical Inventory Management System is the first step in our mission to transform healthcare operations worldwide. And while you're optimizing your operations, let us optimize your online presence too."

#### Brand Narrative
"Founded in 2024, Aura Global was born from frustration with the status quo. Hospital administrators told us they were drowning in expired supplies, lost equipment, and compliance anxiety. Doctors told us their websites looked like they were built in 2010. We listened.

Our approach is different: We prioritize **Neuro Comfort** and **Cleanical** design (clean + clinical), ensuring our interfaces reduce stress instead of adding to it. Our inventory system doesn't just track items—it predicts problems, prevents waste, and proves compliance. Our websites don't just look good—they load in under 0.5 seconds and cost a fraction of traditional agencies.

We don't just build software; we build trust. We don't just make websites; we make competitive advantages."

#### What Makes Us Different

**Triple Product Focus**:
1. **Launching Now**: Medical Inventory Management System - solve your biggest operational headache
2. **Coming Q3 2026**: GoEMR - AI-powered electronic medical records
3. **Coming Q4 2026**: Patient Portal - self-service patient engagement
4. **Available Today**: Professional website development with FREE forever hosting

#### Our Philosophy

**For Software**: 
- Cloud-native architecture (scale from 1 to 1000+ locations)
- Compliance-first design (HIPAA, GDPR, DPDP built-in, not bolted-on)
- Mobile-first interfaces (your staff works on the floor, not at desks)
- API-everything (integrate with your existing EHR, ERP, CMMS)

**For Websites**:
- One-time pricing, no monthly ransom (you own it, we host it FREE forever)
- Performance obsession (<0.5s load times beat 99% of healthcare sites)
- Accessibility as standard (WCAG 2.2 compliant, not an afterthought)
- Future-proof technology (Astro + Tailwind = no framework lock-in)

#### Team Section (Optional)
- Founder/Leadership profiles (use placeholder images/names)
- Emphasize healthcare + technology expertise
- Casual, approachable photos

**Example Team Member**:
**Rajesh Kumar** - Founder & CEO
"After watching my mother's hospital lose ₹12 lakhs in expired inventory in a single year, I knew there had to be a better way. Aura Global is that better way."
- 15 years healthcare IT consulting
- Built inventory systems for 3 hospital chains
- IIT Delhi Computer Science, Healthcare MBA

#### Mission & Values Cards
Display 6 core values:
1. **Operational Excellence First** - Solve real problems, not imaginary ones
2. **Transparent Pricing** - No hidden fees, no vendor lock-in
3. **Compliance Without Complexity** - Meeting regulations shouldn't require a PhD
4. **Design That Delights** - Software can be beautiful AND functional
5. **Speed at Every Layer** - Fast load times, fast implementation, fast support
6. **Your Success = Our Success** - We only win when you save money and time

#### Awards & Recognition Section (Placeholder)
- "Top 10 Healthcare Startups to Watch - 2025" - Tech Healthcare Magazine
- "Best Inventory Management Innovation" - Hospital Management Summit 2025
- "Customer Choice Award" - G2 Ratings 2025 (96% satisfaction)

**Note**: Replace with real awards when available, or remove section if none yet.

---

### 3. Features - "The Aura Ecosystem"

**Design Pattern**: Immersive Product Preview with scroll-revealed graphics

#### Aura Medical Inventory Management System (LAUNCHING FIRST)

**Visual**: Large animated mockup of inventory dashboard showing real-time stock levels, alerts, and compliance metrics (dark mode by default)

**Hero Message**: "Never Run Out. Never Over-Order. Always Compliant."

**Feature Categories** (organized in expandable sections or tabs):

##### 1. Cost Savings & Waste Reduction
- **Automated FIFO Enforcement**: Oldest stock consumed first, reducing expiration waste
- **Expiration Date Tracking**: Alerts days/weeks before items expire for redistribution
- **Waste Reporting & Analytics**: Quantify discards by category and disposal method
- **Discard Workflow**: Approval gates with documentation and witness verification

##### 2. Intelligent Stock Management
- **Real-Time Monitoring**: Stock levels with configurable min/max thresholds per item
- **Automatic Purchase Orders**: Triggered by reorder points - zero manual intervention
- **Smart Alerts**: Low stock & out-of-stock notifications via dashboard, email, and webhooks
- **Inventory Valuation**: Real-time visibility into capital tied up in supplies
- **Trend Analysis**: Forecast demand and right-size orders to eliminate overstocking

##### 3. Regulatory Compliance Suite
- **Multi-Jurisdiction Support**: HIPAA (US), GDPR (EU), DPDP Act (India), ABHA/Ayushman Bharat (India), Australian Privacy Act
- **Compliance Dashboard**: Radar charts showing readiness across all regulations
- **Consent Management**: Track patient/data subject consent records
- **Data Subject Rights**: Handle access, correction, erasure, portability requests
- **Breach Management**: Incident tracking with notification timelines (GDPR 72-hour rule)
- **Audit Task Tracking**: Never miss compliance requirements

##### 4. Complete Audit Trail
- **Every Action Logged**: Creates, updates, deletes, logins, approvals, exports, imports
- **Change Tracking**: Before/after snapshots showing exactly what changed and who changed it
- **Risk Classification**: Events tagged as Low, Medium, High, or Critical
- **Security Investigation**: IP address, session ID, and user agent tracking
- **Exportable Logs**: For regulatory submissions and external audits

##### 5. Full Asset Lifecycle Management
- **Acquisition to Disposal**: Track equipment from purchase through decommissioning
- **Depreciation Management**: Straight-Line, Declining Balance, Units of Production methods
- **Book Value Tracking**: Accurate financial reporting of current asset worth
- **Maintenance Scheduling**: Preventive, Corrective, Emergency, Calibration, Safety Inspection
- **Performance Metrics**: MTBF (Mean Time Between Failures) and uptime tracking

##### 6. Maintenance Cost Optimization
- **Preventive Scheduling**: Catch problems before they become emergencies
- **Cost Tracking**: Labor + parts per equipment item reveals true cost of ownership
- **Workload Balancing**: Prevent technician bottlenecks, ensure timely service
- **First-Time Fix Rate**: Measure maintenance team effectiveness
- **Preventive vs. Corrective Ratio**: Higher preventive ratios = lower overall costs

##### 7. Operational Efficiency Tools
- **Barcode & QR Scanning**: Check-in/check-out, receiving, inventory counting
- **Procedure Kit Management**: Pre-build kits for common procedures with required/optional/substitute items
- **Pick List Workflows**: Priority levels and real-time picking progress
- **Check-Out System**: Overdue tracking so equipment is never "lost"
- **Shipment Tracking**: Chain-of-custody for transfers between facilities
- **Returns Management**: Inspection and restocking workflows

##### 8. Vendor Management & Procurement
- **Vendor Scorecards**: On-time delivery, quality, response time, issue resolution
- **Performance Comparison**: Data-driven vendor evaluation for contract negotiations
- **Contract Alerts**: Prevent auto-renewals of underperforming vendors
- **PO Approval Workflows**: Draft → Approval → Sent → Received with oversight
- **Budget Tracking**: Identify cost overruns before they escalate

##### 9. Lot Traceability & Recall Response
- **Lot & Serial Number Tracking**: Every item traceable from receiving to patient use
- **GS1 Barcode & NDC Support**: Industry-standard compliance
- **Scan History**: Complete audit trail for regulatory requirements
- **Instant Recall Response**: Locate every unit of a recalled lot across all locations in seconds

##### 10. Multi-Facility Architecture
- **Tenant Isolation**: Each hospital/facility sees only its own data
- **Cross-Facility Administration**: Manage multiple sites from central dashboard
- **Role-Based Access Control**: Administrator, Manager, Technician, Viewer levels
- **White-Label Ready**: Tenant-level branding and configuration

##### 11. Financial Reporting & ROI
- **Total Cost of Ownership (TCO)**: Analysis per equipment
- **Maintenance ROI**: Prove value of preventive programs
- **Inventory Turnover**: Identify slow-moving capital
- **Depreciation Reports**: Accurate financial statements
- **Cost Distribution**: Labor vs. Parts vs. Services for budget planning
- **Export Options**: PDF, CSV, XLSX for stakeholder reporting

##### 12. Integration-Ready Platform
- **Webhook System**: Real-time event notifications to EHR, ERP, CMMS systems
- **REST API**: Key management with scoping, rate limiting, IP whitelisting
- **Bulk Import/Export**: CSV, XLSX, JSON with validation and duplicate handling
- **Scheduled Exports**: Automated reporting to stakeholders

##### 13. Intelligent Alert Engine
- **Date-Based Alerts**: Maintenance due, calibration, warranty expiry, certification expiry, license expiry, contract renewals, custom dates
- **Multi-Channel Delivery**: Dashboard, email, webhook
- **Severity Levels**: Info, Warning, Urgent, Critical with escalation
- **Acknowledgment Tracking**: Ensure alerts are acted upon

##### 14. Built-In Help Desk
- **Equipment Ticketing**: Service requests linked directly to asset records
- **SLA Tracking**: Response and resolution time monitoring
- **Priority Routing**: Urgent failures get immediate attention
- **Issue History**: Track recurring problems per equipment

##### 15. Mobile & Offline Support
- **Offline Action Queuing**: Scan and work without network connectivity
- **Automatic Sync**: Conflict resolution when connection restored
- **Mobile-Optimized Interface**: For warehouse and floor staff

---

#### GoEMR - Intelligent Clinical Management (COMING Q3 2026)

**Visual**: Large animated mockup of EMR dashboard (dark mode by default)

**Status Badge**: "Coming Q3 2026 - Join the Waitlist"
**Discount Badge**: "🎉 26% OFF for First 26 Customers - Lifetime Discount!"

**Feature List** (brief overview):
1. **AI-Assisted Charting (Echo AI)**
   - Automatically draft consult notes and treatment plans
   - Reduce documentation time by 50%
   - Natural language processing for voice-to-text

2. **Medical Billing Dashboard**
   - Auto-populate insurance claim forms
   - Real-time practice performance analytics
   - Revenue cycle optimization

3. **e-Prescribing & Drug Dispensing**
   - Electronic prescription transmission to pharmacies
   - Medication history tracking
   - Drug interaction alerts

4. **Integrated Telemedicine**
   - Launch HD video consultations from patient record
   - Screen sharing for diagnostic review
   - Secure end-to-end encryption

5. **Clinical Decision Support**
   - Evidence-based treatment recommendations
   - Diagnostic coding assistance (ICD-10)
   - Lab result interpretation

**Savings Callout Box**:
"Early-bird customers save an estimated ₹10,500/month (₹1,26,000/year) with the 26% lifetime discount. That's the cost of hiring a full-time data entry clerk - saved every single month, forever."

**CTA**: "🎯 Lock In Your 26% Discount" → Email capture form with urgency timer

---

#### Patient Portal - Self-Service Empowerment (COMING Q4 2026)

**Visual**: Mobile and desktop mockups side-by-side

**Status Badge**: "Coming Q4 2026 - Be the First to Know"
**Discount Badge**: "🎉 26% OFF for First 26 Customers - Lifetime Discount!"

**Feature List** (brief overview):
1. **24/7 Appointment Management**
   - Real-time calendar availability
   - Book, reschedule, cancel visits instantly
   - Automated appointment reminders

2. **Secure Messaging**
   - 2-way HIPAA-compliant communication
   - Attach photos/documents
   - Notification preferences

3. **Lab Results & Health Records**
   - Instant access to test results
   - Download medical history as PDF
   - Shareable with other providers

4. **Transparent Financial Management**
   - Clear price estimates for procedures
   - Online bill pay with multiple payment options
   - Insurance claim status tracking

5. **Personalized Health Education**
   - Curated articles based on diagnosis
   - Video library of procedures/treatments
   - Medication instructions and reminders

6. **Pre-Visit Intake Forms**
   - Conditional logic for dynamic questions
   - E-signatures for consent forms
   - Reduce check-in time to <2 minutes

**Savings Callout Box**:
"With 26% lifetime discount, early adopters save approximately ₹8,500/month (₹1,02,000/year). Invest those savings in growing your practice instead of paying full price forever."

**CTA**: "🎯 Secure Your 26% Lifetime Discount" → Email capture form with countdown timer

---

#### Professional Website Development Services

**Visual**: Portfolio grid of example medical websites

**Headline**: "Your Practice Deserves a Professional Digital Presence"

**Service Tiers** (see Pricing section for full details):
- Freedom Plan: ₹9,999 one-time
- Business Pro Plan: ₹14,999 one-time
- Enterprise Plan: ₹24,999 one-time

**Key Benefits**:
- FREE hosting forever (GitHub Pages)
- Mobile-responsive design
- HIPAA-compliant contact forms
- SSL certificate included
- Professional email addresses
- Ultra-fast load times (<0.5s)

**CTA**: "View Pricing" → Link to Pricing section

---

### 4. Pricing - "Transparent and Scalable"

**Layout**: Three-column pricing table with clear hierarchy

### 4. Pricing - "Transparent and Scalable"

**Layout**: Split into two sections - Software Products and Website Development Services

---

#### Software Products (Launching Soon - Special Offer!)

**🎉 LAUNCH SPECIAL: 26% OFF FOR FIRST 26 CUSTOMERS**

**Offer Details**:
- **Discount**: 26% lifetime discount on all monthly/annual subscription fees
- **Eligibility**: First 26 customers who sign up during launch period
- **Applies To**: Inventory Management System, GoEMR (when launched), Patient Portal (when launched)
- **Lifetime Benefit**: The discount never expires - 26% off every payment, forever
- **How to Claim**: Join the waitlist now and you'll be notified immediately when launch happens

**Urgency Indicator**: 
"⚡ Only [X] spots remaining out of 26!" (Real-time counter)

**Example Savings**:
If regular price is ₹50,000/month:
- Regular customers pay: ₹50,000/month (₹6,00,000/year)
- First 26 customers pay: ₹37,000/month (₹4,44,000/year)
- **Your annual savings: ₹1,56,000** 💰

---

**Anticipated Pricing** (final pricing TBD, but 26% discount guaranteed):

##### Aura Medical Inventory Management System
- **Starter**: For small clinics (1 location, up to 500 items)
  - Estimated: ₹15,000/month
  - **With 26% discount: ₹11,100/month**
  
- **Professional**: For growing facilities (up to 3 locations, unlimited items)
  - Estimated: ₹35,000/month
  - **With 26% discount: ₹25,900/month**
  
- **Enterprise**: For hospital networks (unlimited locations, white-label)
  - Estimated: ₹75,000/month
  - **With 26% discount: ₹55,500/month**

##### GoEMR + Patient Portal Bundle (Coming Q3-Q4 2026)
- **Solo**: For individual practitioners
  - Estimated: ₹12,000/month
  - **With 26% discount: ₹8,880/month**
  
- **Group Practice**: For multi-physician practices
  - Estimated: ₹40,000/month
  - **With 26% discount: ₹29,600/month**
  
- **Hospital**: For large healthcare facilities
  - Estimated: ₹1,00,000/month
  - **With 26% discount: ₹74,000/month**

**Important Notes**:
- Prices above are estimates and subject to change before official launch
- 26% discount for first 26 customers is GUARANTEED regardless of final pricing
- Annual payment plans will receive additional 10% discount on top of the 26% off
- Example: ₹35,000/month product = ₹25,900 after 26% = ₹23,310/month if paid annually

**CTA**: "🎯 Join the Waitlist & Lock In 26% OFF" → Email capture form with:
- Name
- Hospital/Clinic Name
- Email
- Phone
- Product Interest (checkboxes: Inventory, GoEMR, Patient Portal, All)
- "I understand this locks in my 26% lifetime discount when the product launches"

---

#### Website Development Services - Available Now!

**Note**: Website services are one-time purchases and already competitively priced. The 26% discount applies only to our software products (Inventory Management, GoEMR, Patient Portal).

**Headline**: "Professional Websites That Grow Your Practice - No Recurring Fees"

**Value Proposition**: "Unlike traditional web agencies charging ₹50,000+ with ongoing monthly fees, we offer one-time pricing with FREE forever hosting. Pay once, own forever."

##### 🎯 Freedom Plan - ₹9,999 (One-Time)
**Perfect for**: Solo practitioners, small clinics just getting online

**Includes**:
- Professional static website (up to 7 pages)
- Domain name registration (1 year included)
- **FREE hosting forever** (GitHub Pages - no monthly fees!)
- 5 professional email addresses (@yourdomain.com)
- Mobile responsive design
- Contact form (HIPAA-compliant option available)
- Google Maps integration
- Basic SEO setup
- SSL certificate included
- Dark/Light mode toggle

**Year 2 Onwards**: Only ₹2,999/year (domain renewal + email maintenance)

**Example Pages**: Home, About, Services, Contact, Gallery, Testimonials, FAQ

**CTA**: "Get Started" → Contact form with plan pre-selected

---

##### 🚀 Business Pro Plan - ₹14,999 (One-Time)
**Perfect for**: Growing practices, multi-physician clinics, specialty practices

**Everything in Freedom Plan, PLUS**:
- Up to 12 pages
- Advanced SEO optimization
- Google Analytics setup & tracking
- WhatsApp integration (click-to-chat)
- Social media integration (Facebook, Instagram, LinkedIn)
- Blog section with 5 starter articles
- 3 rounds of revisions
- Priority support (24-hour response time)
- Online appointment inquiry form

**Year 2 Onwards**: Only ₹3,499/year

**Additional Pages Examples**: Doctor profiles, Departments, Insurance accepted, Patient resources, Health tips blog

**CTA**: "Choose Business Pro" → Contact form

---

##### 💼 Enterprise Plan - ₹24,999 (One-Time)
**Perfect for**: Multi-specialty hospitals, established practices with complex needs

**Everything in Business Pro, PLUS**:
- Up to 20 pages
- E-commerce ready (static store for medical products/supplements)
- Custom animations (GSAP-powered)
- Advanced form builder (multi-step intake forms)
- Monthly content updates (3 updates/month for first year)
- 10 professional email addresses
- Custom feature development
- Integration support (patient portal APIs, booking systems)
- Dedicated project manager

**Year 2 Onwards**: Only ₹4,999/year

**Advanced Features**: Patient testimonial showcase, Before/after galleries, Detailed service pages, Provider directories, Health calculators

**CTA**: "Request Custom Quote" → Contact form with consultation scheduler

---

#### Add-On Services (All Plans)

**One-Time Add-Ons**:
- Additional pages: ₹500/page
- E-commerce product pages: ₹2,000 (up to 20 products)
- Custom animations: ₹3,000
- Multi-language support: ₹5,000
- Video integration & hosting: ₹2,000

**Ongoing Add-Ons** (Monthly):
- Content updates: ₹1,999/month (4 updates)
- Blog writing: ₹999/article
- Social media graphics: ₹2,499/month (8 posts)

---

#### Why Our Pricing Beats Traditional Agencies

**Comparison Table**:
```
                           | Traditional Agency | Aura Global
---------------------------|-------------------|-------------
Initial Setup Fee          | ₹50,000 - ₹2,00,000 | ₹9,999 - ₹24,999
Monthly Hosting Fee        | ₹3,000 - ₹10,000  | ₹0 (FREE forever)
Yearly Maintenance         | ₹50,000+          | ₹2,999 - ₹4,999
Domain & Email             | Extra charges     | Included
SSL Certificate            | ₹3,000/year       | FREE
Performance Guarantee      | No guarantee      | <0.5s load time
Mobile Optimization        | Often extra       | Always included
Ownership                  | Limited           | 100% yours
```

**Total 3-Year Cost**:
- Traditional Agency: ₹1,50,000+ 
- Aura Freedom Plan: ₹15,997 (84% savings!)

---

#### Frequently Asked Questions

**Q: What happens if I don't renew after Year 1?**
A: Your website stays online forever (FREE hosting), but your custom domain will expire. You can still access via our subdomain.

**Q: Can I upgrade my plan later?**
A: Absolutely! Just pay the difference between plans. We'll migrate everything seamlessly.

**Q: Do you offer refunds?**
A: Yes, 30-day money-back guarantee if you're not satisfied (before final deployment).

**Q: How long does it take to build?**
A: Freedom Plan: 7-10 days | Business Pro: 14-21 days | Enterprise: 21-30 days

**Q: Do I need to know coding?**
A: Not at all! We handle everything. You provide content, we build and deploy.

**Q: Is hosting really free forever?**
A: Yes! GitHub Pages offers unlimited free static hosting. This is our competitive advantage.

---

**Call-to-Action Section**:
**Headline**: "Ready to Establish Your Professional Online Presence?"

**Sub-text**: "Join 100+ healthcare providers who chose Aura Global for their digital transformation."

**Buttons**:
- Primary: "Schedule Free Consultation"
- Secondary: "View Portfolio Examples"
- Tertiary: "Download Pricing PDF"

---

### 5. Portfolio - "Clinical Success Stories & Website Showcases"

**Layout**: Case study cards showcasing both software implementations (when launched) and website development projects

#### Website Development Portfolio

##### Portfolio Item 1: Dermatology Clinic Website
**Client**: Dr. Sharma's Skin & Laser Clinic (fictional)

**Challenge**: Outdated website with slow load times, low mobile traffic, minimal patient inquiries

**Solution**: 
- Business Pro Plan implementation
- 10-page responsive website with dark mode
- Before/after gallery with lazy loading
- Online consultation inquiry form
- Blog section with skincare tips
- WhatsApp integration for instant queries

**Results**:
- Page load time: 2.8s → 0.4s (86% improvement)
- Mobile traffic: 35% → 68%
- Online inquiries: +145% in first 90 days
- Google ranking: Page 3 → Page 1 for "dermatologist [city name]"

**Visual**: Desktop and mobile mockups side-by-side

**Tech Stack Badge**: Astro + Shadcn UI + Tailwind CSS

---

##### Portfolio Item 2: Multi-Specialty Hospital Website
**Client**: City Care Hospital (fictional)

**Challenge**: Complex structure (12 departments), patient confusion, fragmented information

**Solution**: 
- Enterprise Plan with custom development
- 20-page website with department microsites
- Doctor profile directory with specialization filters
- Multi-step appointment booking form
- Integration with existing patient portal API
- Health blog with 15 starter articles

**Results**:
- 60% reduction in phone calls asking for doctor availability
- Online appointment requests: +230%
- Patient satisfaction score: 3.2 → 4.6 (out of 5)
- Featured in local news for "Best Hospital Website 2026"

**Visual**: Homepage hero + department page + doctor profile

**Tech Stack Badge**: Astro + GSAP animations + Custom React components

---

##### Portfolio Item 3: Mental Health Practice Website
**Client**: Mindful Wellness Center (fictional)

**Challenge**: Stigma-sensitive practice needed reassuring, private online presence

**Solution**: 
- Freedom Plan with custom Neuro Comfort palette
- 7-page minimal design with calming animations
- Anonymous inquiry form (no name required initially)
- Resource library with mental health articles
- HIPAA-compliant contact system
- Dark mode default for evening visitors

**Results**:
- 89% of new patients found practice via website
- Average session duration: 4.2 minutes (industry avg: 1.8 min)
- Bounce rate: 28% (excellent for healthcare)
- Patient feedback: "Website made me feel safe before even visiting"

**Visual**: Homepage with Calm Bio-Tech color palette

**Tech Stack Badge**: Astro + Radix UI + View Transitions

---

##### Portfolio Item 4: Dental Clinic E-Commerce
**Client**: Smile Studio Dental Care (fictional)

**Challenge**: Wanted to sell oral care products online without expensive e-commerce platform fees

**Solution**: 
- Enterprise Plan with static e-commerce integration
- Product catalog with 25 items (toothpaste, mouthwash, teeth whitening kits)
- Cart system with WhatsApp order integration
- Payment gateway integration (Razorpay)
- Automated order confirmation emails

**Results**:
- Monthly product sales: ₹1.2 lakhs (average)
- Zero monthly platform fees (vs. ₹5,000+ on Shopify)
- Mobile orders: 78% of all transactions
- Repeat customer rate: 42%

**Visual**: Product page + cart + mobile checkout flow

**Tech Stack Badge**: Astro + Snipcart + Tailwind CSS

---

##### Portfolio Item 5: Ayurvedic Wellness Center
**Client**: Nature's Cure Ayurveda (fictional)

**Challenge**: Target audience prefers natural, earthy aesthetics; wanted blog-focused website

**Solution**: 
- Business Pro Plan with Calm Bio-Tech palette
- 12-page website with emphasis on blog (20 articles at launch)
- Treatment description pages with ingredient breakdowns
- Video testimonials from patients
- Social media feed integration
- Multi-language support (English + Hindi)

**Results**:
- Organic traffic from blog: 1,200 visitors/month within 6 months
- Email newsletter subscribers: 840
- Treatment inquiries via website: 65% of all bookings
- Featured in "Best Ayurveda Blogs 2026" list

**Visual**: Blog layout + treatment page + video testimonial section

**Tech Stack Badge**: Astro + MDX + i18n

---

#### Call-to-Action
**Headline**: "Your Practice Could Be Next"

**Sub-text**: "See how we can transform your online presence with a custom website tailored to your specialty."

**Button**: "View Full Portfolio" → Link to dedicated portfolio page with 10+ more examples

---

### 6. Why Doctors Need a Website (Dedicated Conversion Page)

**Purpose**: Address skepticism, educate doctors on digital necessity

#### Section 1: The Competitive Landscape
**Stat**: "67.2% of adults use the internet to look for health information. If you're not online, your community cannot find you."

**Visual**: Infographic showing patient journey (Google search → doctor website → appointment)

#### Section 2: Build Trust & Credibility
**Message**: "Patients research doctors online before booking. A professional website establishes you as an authority and showcases your expertise."

**Elements**:
- Highlight certifications, education
- Display patient reviews/testimonials
- Publish thought leadership (blog posts)

#### Section 3: Patient Convenience = Competitive Advantage
**Benefits**:
- Online scheduling (24/7 availability)
- Pre-visit forms (reduce wait times)
- Telemedicine options (expand reach)
- Automated reminders (reduce no-shows)

#### Section 4: Showcase Specialized Expertise
**Trend**: "Specialized care demands are rising. Your website highlights unique achievements and treatment approaches."

**Examples**:
- Robotic surgery certifications
- Rare disease treatment experience
- Published research or awards

#### Section 5: Reduce Marketing Costs
**Comparison Table**:
```
Traditional Marketing      | Digital Marketing
---------------------------|---------------------------
Print ads: ₹50K/month     | SEO-optimized site: ₹15K/month
Yellow Pages: ₹20K/year   | Google Business: Free
Billboards: ₹1L+ one-time | Social media: ₹5K/month
Limited tracking          | Full analytics & ROI
```

**CTA**: "Get Your Professional Website Today - Starting at ₹15,000/month"

---

### 7. Contact Page

#### Contact Form (HIPAA-Compliant)
**Fields**:
- Name (required)
- Email (required)
- Phone (optional)
- Practice Type (dropdown: Solo, Group, Hospital)
- Message (textarea)
- Newsletter opt-in (checkbox)

**Note**: "This form is HIPAA-compliant. Do not include any patient health information."

#### Alternative Contact Methods
- Phone: +91-XXX-XXX-XXXX
- Email: hello@auraglobal.com
- Address: [Office location]

#### Office Hours
- Monday-Friday: 9:00 AM - 6:00 PM IST
- Saturday: 10:00 AM - 2:00 PM IST
- Sunday: Closed

#### Map Embed (Optional)
- Google Maps iframe if physical office exists

---

## Technical Implementation Requirements

### Responsive Design Breakpoints
```css
/* Mobile First Approach */
Base: 320px - 640px (mobile)
sm: 640px+ (large mobile)
md: 768px+ (tablet)
lg: 1024px+ (desktop)
xl: 1280px+ (large desktop)
2xl: 1536px+ (ultra-wide)
```

### Performance Optimization
1. **Image Optimization**:
   - WebP format with AVIF fallback
   - Lazy loading for below-fold images
   - Responsive srcset for different screen sizes
   - Max file size: 200KB per image

2. **Code Splitting**:
   - Separate JS bundles for interactive components
   - Critical CSS inline, rest async loaded
   - Defer non-essential scripts

3. **Caching Strategy**:
   - Static assets: 1 year cache
   - HTML: No cache (always fresh)
   - Service worker for offline fallback (optional)

### SEO Requirements
1. **Meta Tags** (every page):
   - Title: < 60 characters, includes target keyword
   - Description: 150-160 characters, compelling CTA
   - Open Graph tags for social sharing
   - Twitter Card tags

2. **Structured Data** (Schema.org):
   - Organization schema (homepage)
   - MedicalOrganization schema
   - WebPage schema (all pages)
   - FAQPage schema (if FAQ section exists)

3. **Sitemap & Robots**:
   - Generate sitemap.xml automatically (Astro plugin)
   - Robots.txt to allow all crawlers
   - Submit to Google Search Console

### Accessibility (WCAG 2.2 Level AA)
1. **Semantic HTML**:
   - Proper heading hierarchy (h1 → h6)
   - Landmark regions (header, nav, main, footer)
   - ARIA labels for interactive elements

2. **Keyboard Navigation**:
   - All interactive elements focusable
   - Visible focus indicators
   - Skip to main content link

3. **Color Contrast**:
   - Minimum 4.5:1 for normal text
   - Minimum 3:1 for large text (18px+)
   - Contrast checker in dark mode

4. **Screen Reader**:
   - Alt text for all images (descriptive, not "image of")
   - ARIA live regions for dynamic content
   - Form labels properly associated

### Animation Guidelines
1. **Respect User Preferences**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

2. **Performance Budget**:
   - Use CSS transforms (translate, scale, rotate) for smooth 60fps
   - Avoid animating width, height, top, left
   - Use GSAP's will-change optimization

3. **Animation Timings**:
   - Micro-interactions: 200-300ms
   - Page transitions: 400-600ms
   - Scroll animations: Sync with scroll speed
   - Hover effects: 150ms

### Dark Mode Implementation
1. **CSS Variables Approach**:
   ```css
   :root {
     --background: #F7FBFF;
     --foreground: #0D1B2A;
     --accent: #42A5F5;
   }
   
   .dark {
     --background: #0D1B2A;
     --foreground: #F7FBFF;
     --accent: #00E5FF;
   }
   ```

2. **Theme Toggle**:
   - Icon: Sun/Moon or System/Light/Dark
   - Persist preference in localStorage
   - Smooth transition (200ms) between modes
   - Default: Respect system preference

3. **Image Handling**:
   - Provide dark mode variants for logos/graphics
   - Reduce image brightness in dark mode (CSS filter)

---

## Compliance & Security

### HIPAA Compliance (USA)
**Requirement**: Patient health information (PHI) must never be stored or transmitted via the static website.

**Implementation**:
1. **No PHI in Contact Forms**: Clear disclaimer warning users not to include health information
2. **HIPAA-Compliant Form Provider**: Integrate third-party service with signed BAA (e.g., Jotform HIPAA, Formstack)
3. **SSL/TLS**: Enforce HTTPS with TLS 1.3 minimum
4. **No Analytics PHI**: Ensure Google Analytics or similar tools never capture PHI

**Documentation**:
- Include Privacy Policy page
- HIPAA Notice of Privacy Practices (link to PDF)
- Business Associate Agreement (for clients to download)

### GDPR Compliance (EU)
**Requirements for EU visitors**:
1. **Cookie Consent Banner**:
   - Clear opt-in for non-essential cookies
   - Granular consent (analytics, marketing)
   - Easy opt-out mechanism

2. **Data Subject Rights**:
   - Right to access data
   - Right to erasure ("right to be forgotten")
   - Right to data portability

3. **Privacy Policy**:
   - Data controller identity (Aura Global)
   - Purpose of data collection
   - Legal basis for processing
   - Data retention periods
   - Third-party processors

### DPDP Act 2023 (India)
**Key Obligations**:
1. **Explicit Consent**:
   - Clear, affirmative action required (no pre-checked boxes)
   - Separate consent for each purpose
   - Available in English + scheduled Indian languages

2. **Data Principal Rights**:
   - Access personal data
   - Correction of inaccurate data
   - Erasure of data
   - Grievance redressal mechanism

3. **Data Protection Officer** (if Significant Data Fiduciary):
   - Appoint DPO
   - Publish contact details

4. **Breach Notification**:
   - Notify Data Protection Board within 72 hours
   - Inform affected users promptly

**Implementation**:
- Privacy Policy page compliant with DPDP
- Consent management system
- Data access/erasure request form
- Breach response protocol

---

## Content Delivery & Hosting

### GitHub Pages Configuration
**Repository Setup**:
- Public repository (required for free GitHub Pages)
- Branch: `main` or `gh-pages`
- Custom domain: www.auraglobal.com (CNAME file)

**Build Process**:
1. Local development: `npm run dev`
2. Production build: `npm run build`
3. Preview: `npm run preview`
4. Deploy: GitHub Actions workflow (auto-deploy on push to main)

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  schedule:
    # Runs daily at 11:30 PM IST (6:00 PM UTC)
    - cron: '0 18 * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
  
  update-campaign-counter:
    runs-on: ubuntu-latest
    if: github.event_name == 'schedule'
    steps:
      - uses: actions/checkout@v3
      - name: Update campaign data
        run: |
          # Fetch signup count from your database/spreadsheet
          # Update public/campaign-data.json
          # This is a placeholder - implement your actual data source
          node scripts/update-campaign-counter.js
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add public/campaign-data.json
          git commit -m "Daily campaign counter update - $(date +'%Y-%m-%d %H:%M IST')" || exit 0
          git push
```

**Note**: The schedule cron runs at 6:00 PM UTC which equals 11:30 PM IST during standard time. Adjust for daylight saving if needed.

### CDN & Performance
- Cloudflare in front of GitHub Pages (optional, for additional security)
- Enable HTTP/3 for faster connections
- Brotli compression for text assets
- Cache-Control headers optimized

---

## Animation Specifications

### Hero Section Animations
1. **On Load**:
   - Headline: Fade in + slide up (stagger by word using SplitText)
   - Subheadline: Fade in with 200ms delay
   - CTA buttons: Scale in with bounce effect
   - Background: Animated gradient shift (GSAP to)

2. **On Scroll**:
   - Parallax effect on background elements
   - Hero image/mockup slides up slightly as user scrolls

### Product Cards
1. **Hover State**:
   - Elevate card (translateY: -10px)
   - Increase shadow (box-shadow)
   - Icon animates (rotate, scale, or morph)
   - Background color shifts slightly

2. **Scroll Into View**:
   - Fade in + scale from 0.95 to 1
   - Stagger animation (100ms delay between cards)

### Feature Page Mockups
1. **Scroll-Linked Animation**:
   - Mockup image fades in and scales as user scrolls
   - Use GSAP ScrollTrigger with scrub: true for smooth sync
   - Pin feature text while mockup animates through different screens

2. **Interactive Mockup**:
   - Cursor hover reveals tooltips on UI elements
   - Hotspots pulse gently to draw attention

### Navigation
1. **Sticky Header**:
   - Shrinks on scroll (reduce padding)
   - Background becomes solid after scrolling 100px
   - Logo scales down slightly

2. **Mobile Menu**:
   - Hamburger → X animation (morphing)
   - Menu slides in from right with overlay fade
   - Nav items stagger in (top to bottom)

### Page Transitions (Astro View Transitions)
1. **Between Pages**:
   - Cross-fade (400ms)
   - Shared elements (logo, nav) morph seamlessly
   - Loading indicator if page takes >500ms

2. **Exceptions**:
   - Same-page anchor links: Smooth scroll only
   - External links: Open in new tab, no transition

---

## Brand Voice & Copywriting Guidelines

### Tone
- **Professional but Approachable**: Not stuffy or overly technical
- **Confident but Not Arrogant**: Showcase expertise without condescension
- **Empathetic**: Acknowledge challenges doctors face
- **Forward-Thinking**: Emphasize innovation and future readiness

### Language
- **Avoid Jargon**: Explain technical terms or use simpler alternatives
- **Active Voice**: "Aura Global simplifies billing" not "Billing is simplified by Aura Global"
- **Benefit-Focused**: Lead with outcomes, not features
- **Inclusive**: Use "you" and "your practice" to engage reader

### Example Transformations
❌ "Our platform utilizes advanced algorithms to optimize workflow efficiency."
✅ "Spend less time on paperwork. Our AI drafts your notes automatically."

❌ "Leverage our cutting-edge telemedicine infrastructure."
✅ "See patients from anywhere with high-quality video visits built into your EMR."

---

## Project Deliverables Checklist

### Phase 1: Foundation (Weeks 1-2)
- [ ] Astro project initialized with TypeScript
- [ ] Shadcn UI + Radix UI + Tailwind configured
- [ ] Dark mode toggle working
- [ ] Base layout component (header, footer, nav)
- [ ] Color palette CSS variables defined
- [ ] Typography system established
- [ ] Responsive breakpoints tested
- [ ] **26% Discount Campaign**: Sticky banner component
- [ ] **26% Discount Campaign**: Countdown widget component
- [ ] **26% Discount Campaign**: Waitlist form with email validation
- [ ] **26% Discount Campaign**: `campaign-data.json` structure created
- [ ] **26% Discount Campaign**: GitHub Actions workflow for daily 11:30 PM IST updates
- [ ] **26% Discount Campaign**: Frontend fetch logic for real-time counter display

### Phase 2: Core Pages (Weeks 3-4)
- [ ] Home page with hero, value prop, product cards
- [ ] **Home page**: 26% discount banner integrated into hero
- [ ] About Us page with team section
- [ ] Features page with immersive mockups
- [ ] **Features page**: Discount badges on product sections
- [ ] Pricing page with 3-tier table
- [ ] **Pricing page**: 26% discount calculator showing savings
- [ ] Contact page with HIPAA-compliant form
- [ ] All pages mobile-responsive
- [ ] **26% Campaign**: Exit-intent popup (desktop only)

### Phase 3: Advanced Features (Weeks 5-6)
- [ ] GSAP animations on hero and feature sections
- [ ] **GSAP**: Animated 26% discount badge with glow effect
- [ ] Astro View Transitions between pages
- [ ] Portfolio page with case studies
- [ ] "Why Doctors Need a Website" page
- [ ] Interactive metrics/stats (countUp.js or GSAP)
- [ ] **Interactive**: Real-time counter showing remaining spots (26 - signups)
- [ ] Dark mode persists across sessions
- [ ] **26% Campaign**: Email automation setup for waitlist confirmations

### Phase 4: Optimization & Compliance (Week 7)
- [ ] Image optimization (WebP, lazy loading)
- [ ] SEO meta tags on all pages
- [ ] Structured data (Schema.org)
- [ ] Accessibility audit (WAVE, axe DevTools)
- [ ] Privacy Policy & Terms of Service pages
- [ ] Cookie consent banner (GDPR/DPDP)
- [ ] **26% Campaign**: FAQ section about discount terms
- [ ] **26% Campaign**: Social proof section ready for customer testimonials
- [ ] Lighthouse score 95+ on all pages

### Phase 5: Deployment & Testing (Week 8)
- [ ] GitHub repository created
- [ ] GitHub Actions workflow configured
- [ ] Custom domain connected (if applicable)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Load testing (page speed under 0.5s)
- [ ] Final stakeholder review & feedback

---

## Design Assets Needed

### Logos
- Primary logo (SVG, transparent background)
- Logo dark mode variant
- Favicon (multiple sizes: 16x16, 32x32, 180x180)

### Product Mockups
- GoEMR dashboard screenshots (desktop, dark mode)
- Patient Portal mobile app mockups (iOS/Android)
- Website examples from portfolio

### Icons
- Medical icons (stethoscope, heart rate, prescription, etc.)
- UI icons (checkmark, arrow, menu, close, etc.)
- Social media icons (LinkedIn, Twitter, etc.)

**Recommended Icon Libraries**:
- Lucide Icons (React-friendly, clean)
- Heroicons (Tailwind-designed)
- Phosphor Icons (medical-specific set)

### Illustrations (Optional)
- Abstract medical/tech illustrations for hero backgrounds
- Infographics for statistics
- Team avatars (if no real photos)

**Style**: Flat, modern, align with color palette (blues, cyans, purples)

---

## Additional Features (Nice-to-Have)

### 26% Discount Campaign Elements

#### Real-Time Counter System (Daily Updates at 11:30 PM IST)

**Technical Implementation**:
1. **Static JSON Data File**: `/public/campaign-data.json`
   ```json
   {
     "spotsRemaining": 18,
     "totalSpots": 26,
     "lastUpdated": "2026-02-13T23:30:00+05:30",
     "recentSignups": [
       {
         "initial": "Dr. A***a",
         "location": "Mumbai",
         "timestamp": "2026-02-13T15:20:00+05:30"
       }
     ]
   }
   ```

2. **Automated Daily Update Process**:
   - **GitHub Actions Workflow** scheduled for 11:30 PM IST daily
   - Workflow checks a database/spreadsheet for new signups during the day
   - Updates `campaign-data.json` with current count
   - Commits and pushes changes to trigger GitHub Pages rebuild
   - Entire site rebuilds within 1-2 minutes

3. **Frontend Implementation**:
   - Fetch `/campaign-data.json` on page load
   - Display `spotsRemaining` in all counter components
   - Show `lastUpdated` timestamp converted to user's timezone
   - Cache the data for 1 hour to reduce unnecessary fetches
   - If fetch fails, show fallback: "Limited spots remaining"

4. **Update Schedule**:
   - **Daily at 11:30 PM IST** (6:00 PM UTC during standard time)
   - Ensures counter is fresh for next business day
   - Staff has time to manually verify count before automated update
   - Weekend updates continue automatically

5. **Manual Override**:
   - Staff can manually trigger GitHub Action if urgent update needed
   - Emergency updates take 2-3 minutes to go live
   - Logging system tracks who made manual updates and when

**Alternative Implementation** (if GitHub Actions not preferred):
- Netlify/Vercel scheduled function (serverless)
- Zapier/Make automation triggered daily
- Simple cron job on any server that commits to Git

---

**Sticky Banner** (top of every page):
- Minimal height (40-50px)
- Non-intrusive but visible
- Message: "🎉 LAUNCH SPECIAL: First 26 Customers Get 26% OFF Forever | Only X Spots Left"
- **Updates daily at 11:30 PM IST** - displays last update timestamp
- Small text below main message: "Updated daily at 11:30 PM IST"
- CTA button: "Claim Your Discount"
- Dismissible but returns on page refresh
- Mobile-optimized (smaller text, hamburger menu compatible)
- Shows "Last updated: [Date] 11:30 PM IST" in small print

**Countdown Timer Widget** (on pricing page):
- Shows remaining spots out of 26
- **Real-time daily update at 11:30 PM IST** - counter refreshes automatically every night
- Visual indicator: Progress bar showing 26 - [signups]
- Example: "⚡ 18 of 26 spots remaining | Last updated: Feb 13, 2026 at 11:30 PM IST"
- Psychological urgency: When <10 spots remain, color changes to red
- When <5 spots remain, add pulsing animation to create urgency
- Optional: Show recent signups (e.g., "Dr. A***a from Mumbai just claimed a spot 5 minutes ago")
- Technical implementation: Use static JSON file that updates daily at 11:30 PM IST via scheduled job

**Exit-Intent Popup** (triggers when mouse leaves viewport):
- Headline: "Wait! Don't Miss Your 26% Lifetime Discount"
- Sub-text: "Join the first 26 customers and save ₹1.5L+ annually, forever."
- Email capture form (simplified: just email)
- CTA: "Count Me In"
- Only shows once per session
- Easy close button (no dark patterns)

**Testimonial/Social Proof Section** (once available):
- Quotes from early signups (with permission)
- Example: "I signed up immediately when I saw 26% lifetime discount. That's ₹3 lakhs saved over 2 years!" - Dr. Sharma, Dermatologist
- Logos of hospitals/clinics that joined waitlist (with permission)

**FAQ Addition** (to existing FAQ section):

**Q: What exactly does "26% off for first 26 customers" mean?**
A: The first 26 customers who sign up during our launch period will receive a 26% discount on their monthly or annual subscription fees for ALL Aura products, for life. This means if a product costs ₹50,000/month, you'll pay ₹37,000/month - forever. The discount never expires as long as your subscription is active.

**Q: How often does the "spots remaining" counter update?**
A: The counter updates automatically every day at 11:30 PM IST. This ensures you always see an accurate count of remaining spots. The last update timestamp is displayed on all counter widgets so you know exactly when the data was refreshed.

**Q: How do I know if I'm one of the first 26?**
A: We display a real-time counter showing remaining spots (updated daily at 11:30 PM IST). When you submit the waitlist form, you'll receive immediate confirmation if you secured a spot. All 26 customers will be locked in before official launch, and you'll receive a unique confirmation email with your spot number.

**Q: Does the 26% discount apply to website development services too?**
A: No, the 26% lifetime discount applies only to our software products (Inventory Management System, GoEMR, and Patient Portal). Website development services are already competitively priced with one-time fees.

**Q: Can I transfer my 26% discount to another clinic?**
A: No, the discount is tied to the customer (clinic/hospital) that originally signed up. However, if you expand to multiple locations, the discount applies to all locations under your account.

**Q: What if the launch is delayed?**
A: Your spot is guaranteed. Even if launch dates shift, the first 26 signups will receive the 26% lifetime discount when the product becomes available. Your discount is locked in from the moment you join the waitlist and receive confirmation.

### Blog Section
- CMS integration (Markdown files in `/src/content/blog`)
- Blog post template (title, date, author, tags, content)
- Category/tag filtering
- Related posts section
- Social sharing buttons

### FAQ Section
- Accordion-style Q&A (Radix UI Accordion)
- Search functionality
- Categories: General, GoEMR, Patient Portal, Pricing, Compliance

### Live Chat Widget
- Tawk.to or Intercom integration (if allowed on GitHub Pages)
- Positioned bottom-right
- Triggers after 30 seconds or on exit intent

### Newsletter Signup
- Embedded form (Mailchimp, ConvertKit)
- Popup modal after 60 seconds (optional, respectful)
- Footer signup form always visible

### Language Switcher
- English (default)
- Hindi (optional Phase 2)
- Use i18n library (astro-i18n)

---

## Testing Checklist

### Functional Testing
- [ ] All navigation links work correctly
- [ ] Contact form submits successfully
- [ ] Dark mode toggle switches theme
- [ ] Mobile menu opens/closes
- [ ] All CTAs link to correct pages
- [ ] External links open in new tabs

### Performance Testing
- [ ] Lighthouse Performance score: 95+
- [ ] First Contentful Paint (FCP): <1.5s
- [ ] Largest Contentful Paint (LCP): <2.5s
- [ ] Cumulative Layout Shift (CLS): <0.1
- [ ] Time to Interactive (TTI): <3.5s

### Accessibility Testing
- [ ] WAVE scan: 0 errors
- [ ] Keyboard navigation: All elements reachable
- [ ] Screen reader test: Content makes sense
- [ ] Color contrast: All text passes WCAG AA
- [ ] Focus indicators: Visible on all interactive elements

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, macOS and iOS)
- [ ] Edge (latest)
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

### Device Testing
- [ ] iPhone SE (320px wide)
- [ ] iPhone 13 Pro
- [ ] iPad Pro
- [ ] Desktop 1920x1080
- [ ] Desktop 2560x1440 (ultra-wide)

---

## Maintenance & Updates

### Content Updates (Monthly)
- Blog posts: 2-4 per month
- Portfolio case studies: Add new clients quarterly
- FAQ: Update based on common support questions

### Technical Maintenance (Quarterly)
- Dependency updates (npm packages)
- Astro version updates
- Security patches
- Broken link checks
- Lighthouse re-audits

### Analytics Review (Monthly)
- Google Analytics traffic report
- Conversion rate tracking (demo requests, form submissions)
- Most visited pages
- Bounce rate analysis
- Mobile vs. desktop usage

---

## Support & Documentation

### For Developers
- README.md with setup instructions
- CONTRIBUTING.md with code style guidelines
- Component documentation (Storybook optional)
- Deployment guide

### For Content Editors
- Markdown guide for blog posts
- How to update pricing information
- How to add case studies
- Image size and format guidelines

### For Stakeholders
- Analytics dashboard access
- Monthly performance reports
- Feedback submission process

---

## Success Metrics

### Primary KPIs
1. **Waitlist Signups (26% Discount Campaign)**: Target 26 signups within first 30 days of launch
2. **Demo Request Conversions**: Target 2-5% of visitors (beyond the 26 waitlist signups)
3. **Page Load Speed**: Maintain sub-0.5s average
4. **Mobile Traffic**: Expect 60%+ from mobile devices
5. **Organic Search Traffic**: Grow 10% month-over-month
6. **Bounce Rate**: Keep below 50%

### Secondary KPIs
1. **26% Discount Campaign Metrics**:
   - Time to reach 26 signups (goal: <30 days)
   - Conversion rate from visitor to waitlist signup (goal: 5-8%)
   - Email open rate for waitlist confirmation (goal: >70%)
   - Click-through rate on "Claim Discount" CTAs (goal: 15-20%)
2. Time on site: Average 2+ minutes
3. Pages per session: 3+
4. Return visitor rate: 20%+
5. Newsletter signups: 1% of visitors
6. Social shares: Track via UTM parameters

### 26% Discount Campaign Tracking
**Dashboard Metrics to Monitor**:
- Real-time signup counter (displayed publicly: "X of 26 spots remaining")
- **Daily update log**: Track counter changes at each 11:30 PM IST update
- **Update reliability**: Ensure automated updates run successfully every night
- Geographic distribution of signups (by state/city)
- Product interest breakdown (Inventory vs GoEMR vs Patient Portal vs All)
- Referral source (organic, social, email, direct)
- Average time from first visit to signup
- Exit-intent popup conversion rate
- Counter update history: Visualize daily progression toward 26 signups

---

## Final Notes

This website is not just a marketing tool—it's a demonstration of Aura Global's commitment to cutting-edge design, uncompromising security, and user-centric innovation. Every animation, every color choice, every line of copy should reinforce the message: **"The Future of Healthcare is Here."**

The technical foundation (Astro + Shadcn + GSAP) ensures this vision is delivered with blazing speed and accessibility. The compliance framework (HIPAA + GDPR + DPDP) builds trust. The design philosophy (Strategic Minimalism + Emotional UI) creates delight.

Build this website as if you're building the future of healthcare software—because that's exactly what Aura Global represents.



