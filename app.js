import {media,projects,services,values,insights,categories} from "./data.js";

const $app = document.getElementById("app");
const SITE = "COMPAX Construction";
const toWhatsApp = "https://wa.me/2348088071657";
const demo = "COMPAX is a fictional construction brand. Project details and photography are illustrative, not evidence of completed work.";
const icon = (name,size=18) => {
 const attrs='width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
 const paths={
 arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
 northeast:'<path d="M5 19 19 5M6 5h13v13"/>',
 down:'<path d="M12 5v14m-7-7 7 7 7-7"/>',
 menu:'<path d="M4 8h16M4 16h16"/>',
 close:'<path d="M5 5l14 14M19 5 5 19"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 chevron:'<path d="m9 18 6-6-6-6"/>',
 instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
 };
 return '<svg '+attrs+'>'+ (paths[name]||paths.arrow) +'</svg>';
};
function wordmark(light=false) {
 return '<a class="brand '+(light?'brand-light':'')+'" href="/" data-link aria-label="COMPAX Construction, homepage"><span class="brand-symbol"><span></span><span></span></span><span class="brand-type">COMPAX<small>CONSTRUCTION</small></span></a>';
}
function navigation() {
 return '<header class="site-header" id="site-header"><div class="header-inner">'+wordmark(true)+
 '<nav class="desktop-nav" aria-label="Main navigation"><a href="/about" data-link>Our story</a><a href="/expertise" data-link>Expertise</a><a href="/projects" data-link>Projects</a><a href="/insights" data-link>Perspectives</a></nav>'+
 '<a class="nav-cta" href="/contact" data-link>Start a conversation '+icon("northeast",15)+'</a>'+
 '<button class="mobile-toggle" id="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">'+icon("menu",25)+'</button></div>'+
 '<div class="mobile-menu" id="mobile-menu" aria-hidden="true"><nav aria-label="Mobile navigation"><a href="/about" data-link>Our story</a><a href="/expertise" data-link>Expertise</a><a href="/projects" data-link>Projects</a><a href="/insights" data-link>Perspectives</a><a href="/contact" data-link>Let\'s talk '+icon("northeast")+'</a></nav><div class="mobile-menu-note">Built for people. Built with purpose.</div></div></header>';
}
function footer() {
 return '<footer class="footer"><div class="container">'+
 '<div class="footer-top"><div><div class="footer-kicker">LET\'S BUILD SOMETHING THAT MATTERS</div><h2>Have something <em>in mind?</em></h2></div><a href="/contact" data-link class="round-arrow" aria-label="Get in touch">'+icon("northeast",30)+'</a></div>'+
 '<div class="footer-divider"></div><div class="footer-middle"><div class="footer-about">'+wordmark(true)+'<p>Thoughtfully conceived places.<br>Better ways to live, work and connect.</p></div>'+
 '<div class="footer-links"><div><span>EXPLORE</span><a href="/about" data-link>Our story</a><a href="/expertise" data-link>Expertise</a><a href="/projects" data-link>Projects</a><a href="/insights" data-link>Perspectives</a></div>'+
 '<div><span>CONNECT</span><a href="/contact" data-link>Contact</a><a href="'+toWhatsApp+'" target="_blank" rel="noopener noreferrer">Bespoke on WhatsApp '+icon("northeast",13)+'</a><a href="https://www.bespoketech.com.ng" target="_blank" rel="noopener noreferrer">Bespoke Technologies '+icon("northeast",13)+'</a></div></div></div>'+
 '<div class="footer-bottom"><span>© 2026 COMPAX — A concept construction brand</span><span>Designed & engineered by <a href="https://www.bespoketech.com.ng" target="_blank" rel="noopener noreferrer">Bespoke Technologies</a></span></div>'+
 '<p class="disclosure">Portfolio demonstration only. COMPAX is a fictional company; its showcased projects, capabilities and narratives are illustrative. Architecture photographs are stock imagery, not COMPAX-built projects. Photography: Unsplash.</p>'+
 '</div></footer>';
}
function sectionHeading(kicker,title,description="",aside="") {
 return '<div class="section-heading reveal"><div><div class="eyebrow"><span class="eyebrow-line"></span>'+kicker+'</div><h2>'+title+'</h2></div><div class="section-aside">'+(description?'<p>'+description+'</p>':'')+aside+'</div></div>';
}
function photo(src,alt,cls="",loading="lazy") {return '<img class="'+cls+'" src="'+src+'" alt="'+alt+'" loading="'+loading+'" decoding="async" />';}
function projectCard(p,i=0,style="") {
 return '<a href="/projects/'+p.slug+'" data-link class="project-card reveal '+style+'" style="--d:'+(i%4*85)+'ms"><div class="project-image">'+photo(p.image,p.alt)+
 '<div class="project-image-arrow">'+icon("northeast",23)+'</div><div class="project-image-tag">CONCEPT PROJECT</div></div>'+
 '<div class="project-card-info"><div><span>'+p.category+' <i>·</i> '+p.location+'</span><h3>'+p.name+'</h3><p>'+p.intro+'</p></div>'+icon("northeast",19)+'</div></a>';
}
function insightCard(post,index=0) {
 return '<a href="/insights/'+post.slug+'" data-link class="insight-card reveal" style="--d:'+(index*90)+'ms"><div class="insight-image">'+photo(post.image,post.title)+'</div><div class="insight-meta">'+post.topic+' <span class="dot"></span> '+post.read+' read</div><h3>'+post.title+'</h3><p>'+post.excerpt+'</p><span class="text-link">Read story '+icon("northeast",15)+'</span></a>';
}
function ctaBlock() {
 return '<section class="cta-block"><div class="container cta-inner reveal"><div class="eyebrow pale"><span class="eyebrow-line"></span> THE NEXT CHAPTER</div><h2>What could we<br><em>build together?</em></h2><p>Every good project starts with a conversation.<br>And a really good question.</p><a class="btn btn-light" href="/contact" data-link>Let\'s talk about it '+icon("northeast",18)+'</a></div></section>';
}
function home() {
 return '<section class="hero"><div class="hero-image" style="background-image:url(\''+media.hero+'\')"></div><div class="hero-overlay"></div>'+
 '<div class="container hero-inner"><div class="hero-copy"><div class="hero-eyebrow"><span class="eyebrow-line"></span> CONSTRUCTION, THOUGHTFULLY CONSIDERED</div>'+
 '<h1>Beyond construction.<br><em>A lasting impact</em></h1><p>Places to belong. Spaces to thrive.<br>Building for the lives that happen in between.</p>'+
 '<div class="hero-actions"><a class="btn btn-light" href="/projects" data-link>Explore our work '+icon("northeast",19)+'</a><a href="/about" data-link class="hero-secondary">Discover our thinking '+icon("arrow",17)+'</a></div></div>'+
 '<div class="hero-bottom"><div class="hero-index"><span>01 / 04</span><span class="hero-progress"><i></i></span><span>THE BIGGER PICTURE</span></div><a class="scroll-cue" href="#welcome">SCROLL TO EXPLORE '+icon("down",16)+'</a></div></div></section>'+
 '<div class="demo-ribbon"><div class="container"><span class="ribbon-star">✳</span><span>AN ORIGINAL CONSTRUCTION EXPERIENCE — A BESPOKE TECHNOLOGIES CONCEPT</span><span class="ribbon-right">CRAFTED TO INSPIRE. NOT A REAL CONTRACTOR.</span></div></div>'+
 '<section class="intro-section section-pad" id="welcome"><div class="container intro-grid"><div class="eyebrow reveal"><span class="eyebrow-line"></span> THE COMPAX POINT OF VIEW</div>'+
 '<div class="intro-main reveal"><h2>Good buildings hold<br>more than <em>weight.</em></h2><div class="intro-lower"><p>They hold first days. Bold decisions. Ordinary routines. Moments people will remember. We believe building well starts with caring about all of it.</p><a class="underlined-link" href="/about" data-link>Get to know us '+icon("northeast",17)+'</a></div></div></div></section>'+
 '<section class="work-section section-pad" id="selected-work"><div class="container">'+sectionHeading("SELECTED WORK","Places with <em>purpose.</em>","A collection of imagined projects showing how distinctive construction stories can be told.",'<a class="underlined-link" href="/projects" data-link>View all projects '+icon("northeast",17)+'</a>')+
 '<div class="feature-grid">'+projectCard(projects[0],0,"feature-large")+projectCard(projects[1],1,"feature-small")+projectCard(projects[2],2,"feature-small")+projectCard(projects[6],3,"feature-large")+'</div>'+
 '</div></section>'+
 '<section class="statement-section"><div class="statement-photo" style="background-image:url(\''+media.site+'\')"></div><div class="statement-overlay"></div><div class="container statement-content reveal"><div class="eyebrow pale"><span class="eyebrow-line"></span> THE BIGGER PICTURE</div>'+
 '<h2>Built on intention.<br><em>Made for life.</em></h2><p>A line on a drawing becomes a doorway. A framework becomes a neighbourhood. Little decisions become the places we share. That\'s why every detail deserves attention.</p>'+
 '<a class="underlined-link light" href="/about" data-link>What drives us '+icon("northeast",18)+'</a></div></section>'+
 '<section class="services-section section-pad"><div class="container">'+sectionHeading("WHAT WE DO","Everything between<br>the plan and <em>the place.</em>","An integrated perspective on the built environment, with thoughtful expertise at each step.")+
 '<div class="service-list">'+services.slice(0,4).map(s=>'<a href="/expertise" data-link class="service-row reveal"><span class="service-number">'+s.n+'</span><div><h3>'+s.name+'</h3><p>'+s.tag+'</p></div><span class="service-arrow">'+icon("northeast",23)+'</span></a>').join("")+'</div>'+
 '<a class="btn btn-dark more-services" href="/expertise" data-link>Explore our expertise '+icon("northeast",18)+'</a></div></section>'+
 '<section class="people-section section-pad"><div class="container people-grid"><div class="people-photo reveal">'+photo(media.interior,"Bright contemporary interior with considered finishes")+'<span class="photo-corner">A BETTER WAY TO BUILD</span></div><div class="people-copy reveal"><div class="eyebrow"><span class="eyebrow-line"></span> PEOPLE MAKE THE PLACE</div><h2>It\'s never<br><em>just a building.</em></h2><p>It\'s somebody\'s first home. A team\'s next big idea. A child\'s favourite place to learn. We pay attention to the things that make places matter.</p><div class="people-micro"><span>THE HUMAN SIDE OF CONSTRUCTION</span><span class="micro-line"></span> <span>ALWAYS IN THE PLAN</span></div><a class="underlined-link" href="/about" data-link>Our approach '+icon("northeast",18)+'</a></div></div></section>'+
 '<section class="journal-section section-pad"><div class="container">'+sectionHeading("THE JOURNAL","Things worth <em>thinking about.</em>","Thoughts on creating more useful, more human places.",'<a class="underlined-link" href="/insights" data-link>All perspectives '+icon("northeast",17)+'</a>')+
 '<div class="insight-grid">'+insights.slice(0,3).map((p,i)=>insightCard(p,i)).join("")+'</div></div></section>'+ctaBlock();
}
function pageHero(kicker,title,body,image="",imageAlt="") {
 return '<section class="page-hero '+(image?'page-hero-split':'')+'"><div class="container page-hero-inner"><div class="page-hero-copy reveal"><div class="eyebrow pale"><span class="eyebrow-line"></span>'+kicker+'</div><h1>'+title+'</h1><p>'+body+'</p></div>'+
 (image?'<div class="page-hero-visual">'+photo(image,imageAlt||"Architectural photograph")+'</div>':'<div class="page-hero-watermark" aria-hidden="true">COMPAX</div>')+'</div></section>';
}
function about() {
 return pageHero("OUR STORY","Building is a <em>human business.</em>","A construction company concept with a simple point of view: places are only as good as the lives they make possible.",media.civic,"Minimalist sculptural architecture")+
 '<section class="section-pad"><div class="container editorial-grid"><div class="eyebrow reveal"><span class="eyebrow-line"></span> A DIFFERENT STARTING POINT</div><div class="editorial-content reveal"><h2>We believe the best way to build something extraordinary is to begin with something <em>ordinary.</em></h2><p>A conversation. An observation. A question about how somebody actually lives or works. From there, the architecture has a reason to exist.</p><p>COMPAX is an imagined construction brand, designed to demonstrate how modern builders can communicate with clarity, craft and a truly human voice. Its philosophy is aspirational, its work illustrative, and its story intentionally original.</p></div></div></section>'+
 '<section class="wide-photo-section">'+photo(media.site,"Modern construction project with high-rise structure")+'<div class="wide-photo-caption">THE BEAUTY OF PROGRESS, IN EVERY DETAIL</div></section>'+
 '<section class="section-pad philosophy"><div class="container">'+sectionHeading("OUR PRINCIPLES","Four ways of <em>thinking.</em>","Not slogans for a wall. Ideas that should shape how a project feels.")+
 '<div class="values-grid">'+values.map(v=>'<div class="value-card reveal"><span>'+v.n+' / THE COMPAX WAY</span><h3>'+v.title+'</h3><p>'+v.text+'</p></div>').join("")+'</div></div></section>'+
 '<section class="about-culture section-pad"><div class="container culture-grid"><div class="culture-photo reveal">'+photo(media.workplace,"Warm modern workspace with thoughtful interior layout")+'</div><div class="culture-copy reveal"><div class="eyebrow"><span class="eyebrow-line"></span> A LITTLE ABOUT US</div><h2>Serious about the work.<br><em>Human about everything else.</em></h2><p>We like clear thinking, good questions and people who care about getting the little things right. And yes, we believe a meeting can be useful without running into lunchtime.</p><a class="underlined-link" href="/contact" data-link>Start a conversation '+icon("northeast",18)+'</a></div></div></section>'+ctaBlock();
}
function expertise() {
 return pageHero("OUR EXPERTISE","The thinking behind <em>the making.</em>","From the first question to the finishing detail, a thoughtful approach to creating places built for real life.",media.site,"High rise building under construction")+
 '<section class="section-pad"><div class="container">'+sectionHeading("WHAT WE BRING","Different disciplines.<br><em>One shared purpose.</em>","The strongest work happens when every part of the process knows what matters.")+
 '<div class="expertise-list">'+services.map(s=>'<article class="expertise-row reveal"><div class="expertise-count">'+s.n+' / 06</div><div class="expertise-body"><div class="expertise-tag">'+s.tag+'</div><h3>'+s.name+'</h3><p>'+s.description+'</p><div class="expertise-features">'+s.features.map(f=>'<span>'+icon("check",13)+' '+f+'</span>').join("")+'</div></div><span class="expertise-mark">'+icon("northeast",23)+'</span></article>').join("")+'</div></div></section>'+
 '<section class="dark-interlude"><div class="container"><div class="eyebrow pale"><span class="eyebrow-line"></span> HOW WE THINK</div><h2>Build with care.<br><em>Leave room for life.</em></h2><p>Technical discipline and human understanding belong in the same conversation.</p></div></section>'+
 '<section class="section-pad"><div class="container">'+sectionHeading("SECTORS","Places for every<br><em>part of life.</em>","Every sector comes with its own challenges. Understanding the people who use each space is what connects them.")+
 '<div class="sector-grid">'+["Commercial","Residential","Civic & Culture","Infrastructure","Education","Healthcare","Industrial","Mixed-use"].map((c,i)=>'<a class="sector-cell reveal" href="/projects" data-link data-sector="'+c+'"><span>'+String(i+1).padStart(2,"0")+'</span><h3>'+c+'</h3>'+icon("northeast",19)+'</a>').join("")+'</div></div></section>'+ctaBlock();
}
function projectsPage() {
 return pageHero("THE PORTFOLIO","Places that make <em>possibility real.</em>","Explore a collection of illustrative construction concepts across the places we live, work, learn and connect.")+
 '<section class="section-pad portfolio-section"><div class="container"><div class="portfolio-toolbar"><p>EXPLORE BY SECTOR</p><div class="filters" role="group" aria-label="Filter projects by sector">'+categories.map((c,i)=>'<button class="filter '+(i===0?'is-active':'')+'" type="button" data-filter="'+c+'" aria-pressed="'+(i===0?'true':'false')+'">'+c+'</button>').join("")+'</div></div>'+
 '<div class="portfolio-count" id="portfolio-count">SHOWING ALL '+projects.length+' CONCEPT PROJECTS</div><div class="portfolio-grid" id="portfolio-grid">'+projects.map((p,i)=>projectCard(p,i)).join("")+'</div><p class="portfolio-disclosure">Conceptual project studies. All location references, briefs and scopes are illustrative; stock images do not depict projects delivered by COMPAX.</p></div></section>'+ctaBlock();
}
function projectPage(p) {
 const idx=projects.indexOf(p),next=projects[(idx+1)%projects.length];
 return '<section class="project-hero"><div class="project-hero-img">'+photo(p.image,p.alt,"","eager")+'</div><div class="project-hero-shade"></div><div class="container project-hero-inner"><a href="/projects" data-link class="back-link">'+icon("arrow",17)+' All projects</a><div class="project-hero-copy"><div class="eyebrow pale"><span class="eyebrow-line"></span> '+p.category+' / CONCEPT PROJECT</div><h1>'+p.name+'</h1><p>'+p.intro+'</p></div><div class="project-hero-meta"><span>PROJECT STUDY '+String(idx+1).padStart(2,"0")+' / 08</span><span>'+p.location+'</span></div></div></section>'+
 '<section class="section-pad"><div class="container"><div class="project-overview"><div class="project-overview-label reveal"><div class="eyebrow"><span class="eyebrow-line"></span> THE IDEA</div><span class="concept-badge">ILLUSTRATIVE CONCEPT</span></div><div class="project-overview-text reveal"><h2>'+p.challenge+'</h2><p>'+p.solution+'</p></div></div>'+
 '<div class="project-detail-meta"><div><span>PROJECT</span><strong>'+p.name+'</strong></div><div><span>SECTOR</span><strong>'+p.category+'</strong></div><div><span>CONCEPT LOCATION</span><strong>'+p.location+'</strong></div><div><span>STATUS</span><strong>Design demonstration</strong></div></div></div></section>'+
 '<section class="project-gallery"><div class="gallery-large">'+photo(p.gallery[0],"Architectural reference photograph for "+p.name)+'</div><div class="gallery-small">'+photo(p.gallery[1],"Additional illustrative architecture photograph")+'</div></section>'+
 '<section class="section-pad"><div class="container project-story"><div class="reveal"><div class="eyebrow"><span class="eyebrow-line"></span> BEHIND THE CONCEPT</div><h2>Designed around <em>what matters.</em></h2></div><div class="reveal"><p>'+p.story+'</p><div class="project-keypoints">'+p.highlights.map((h,i)=>'<div><span>'+String(i+1).padStart(2,"0")+'</span><strong>'+h+'</strong></div>').join("")+'</div></div></div></section>'+
 '<section class="next-project"><a href="/projects/'+next.slug+'" data-link class="container next-inner"><span>NEXT PROJECT <i>→</i></span><h2>'+next.name+'</h2><div>'+icon("northeast",32)+'</div></a></section>'+ctaBlock();
}
function insightsPage(){
 return pageHero("PERSPECTIVES","Good ideas deserve <em>room to grow.</em>","Thoughts about buildings, the people who use them, and the details that make places remarkable.")+
 '<section class="section-pad"><div class="container"><div class="journal-intro"><div class="eyebrow"><span class="eyebrow-line"></span> NOTES FROM THE BUILT WORLD</div><p>Curiosity is part of the craft. Here are a few things we think are worth talking about.</p></div><div class="insight-grid insight-page-grid">'+insights.map((p,i)=>insightCard(p,i)).join("")+'</div></div></section>'+ctaBlock();
}
function insightPage(p) {
 return '<section class="article-hero"><div class="container article-hero-content"><a href="/insights" data-link class="back-link">'+icon("arrow",17)+' All perspectives</a><div class="eyebrow pale"><span class="eyebrow-line"></span>'+p.topic+' / '+p.read+' READ</div><h1>'+p.title+'</h1><p>'+p.excerpt+'</p></div></section><div class="article-cover">'+photo(p.image,p.title,"","eager")+'</div>'+
 '<section class="section-pad"><article class="article-body container"><div class="article-aside"><span>THE COMPAX JOURNAL</span><span>'+p.read+' READ</span><a href="/insights" data-link>'+icon("arrow",17)+' Back to journal</a></div><div class="article-text">'+p.body.map((line,i)=>(i===1?'<blockquote>“'+p.quote+'”</blockquote>':'')+'<p>'+line+'</p>').join("")+'<div class="article-end"><span>✳</span><p>More questions. Better places.</p></div></div></article></section>'+
 '<section class="section-pad related-section"><div class="container">'+sectionHeading("KEEP READING","Another thought <em>worth sharing.</em>")+'<div class="insight-grid">'+insights.filter(x=>x.slug!==p.slug).slice(0,3).map((x,i)=>insightCard(x,i)).join("")+'</div></div></section>'+ctaBlock();
}
function contact(){
 return pageHero("GET IN TOUCH","Great things start<br>with <em>hello.</em>","Tell us what's on your mind. Big idea, small question, early-stage sketch — good conversations welcome.")+
 '<section class="section-pad"><div class="container contact-layout"><div class="contact-left reveal"><div class="eyebrow"><span class="eyebrow-line"></span> START THE CONVERSATION</div><h2>We\'re all <em>ears.</em></h2><p>This is a Bespoke Technologies portfolio demonstration. The form below prepares a WhatsApp message to Bespoke Technologies; it does not send data to a fictional COMPAX business.</p>'+
 '<div class="contact-details"><span>THE REAL TEAM BEHIND THIS EXPERIENCE</span><a href="https://www.bespoketech.com.ng" target="_blank" rel="noopener noreferrer">Bespoke Technologies '+icon("northeast",17)+'</a><a href="'+toWhatsApp+'" target="_blank" rel="noopener noreferrer">+234 808 807 1657 '+icon("northeast",17)+'</a></div>'+
 '<div class="contact-quote">“Good conversations are<br>the foundation of<br><em>great places.”</em></div></div>'+
 '<form class="contact-form reveal" id="contact-form"><span class="form-kicker">TELL US ABOUT YOUR IDEA</span><div class="form-row"><label for="contact-name">Your name <span>*</span><input id="contact-name" name="name" autocomplete="name" placeholder="How should we address you?" required minlength="2" maxlength="100" /></label><label for="contact-email">Email address <span>*</span><input id="contact-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required maxlength="180" /></label></div>'+
 '<div class="form-row"><label for="contact-company">Company / organisation<input id="contact-company" name="company" placeholder="Optional" maxlength="120" /></label><label for="contact-type">What are you exploring? <span>*</span><select id="contact-type" name="type" required><option value="">Select one</option><option>Commercial website</option><option>Construction company website</option><option>Portfolio & case studies</option><option>Brand & digital experience</option><option>Something else</option></select></label></div>'+
 '<label for="contact-message">Tell us a little more <span>*</span><textarea id="contact-message" name="message" rows="6" placeholder="A few details about what you have in mind..." required minlength="10" maxlength="1500"></textarea></label>'+
 '<div class="form-bottom"><p>Your message opens in WhatsApp for you to review and send. No details are stored on this website.</p><button class="btn btn-dark" type="submit">Continue to WhatsApp '+icon("northeast",18)+'</button></div><p id="form-status" role="status" aria-live="polite"></p></form></div></section>'+
 '<section class="faq-section section-pad"><div class="container">'+sectionHeading("A FEW GOOD QUESTIONS","Before you <em>ask.</em>")+
 '<div class="faq-list"><details><summary>Is COMPAX a real construction company? '+icon("plus",18)+'</summary><p>No. COMPAX is a fictional brand created as an end-to-end website concept by Bespoke Technologies. It demonstrates the quality of digital experiences we can build for real construction companies.</p></details>'+
 '<details><summary>Are the featured projects real COMPAX projects? '+icon("plus",18)+'</summary><p>No. Project names, locations, stories and scopes are illustrative. The photographs are licensed editorial imagery, not proof of delivered work.</p></details>'+
 '<details><summary>Can Bespoke Technologies create something like this for my company? '+icon("plus",18)+'</summary><p>Yes. That is exactly why we created this experience. A real project would use your brand, verified projects, photographs, credentials, and business goals.</p></details></div></div></section>';
}
function notFound() { return '<section class="not-found"><div class="container"><div class="eyebrow pale"><span class="eyebrow-line"></span> LOST YOUR WAY?</div><h1>Even the best plans<br><em>need directions.</em></h1><p>We couldn\'t find that page. Let\'s get you back somewhere useful.</p><a href="/" data-link class="btn btn-light">Back to homepage '+icon("arrow",18)+'</a></div></section>'; }

function render(scroll=true){
 const path=decodeURI(window.location.pathname).replace(/\/$/,"")||"/";
 let content="",title="",description="";
 if(path==="/"){content=home();title="Beyond construction. A lasting impact";description="Thoughtfully considered construction. Spaces with purpose. Explore the COMPAX concept website by Bespoke Technologies.";}
 else if(path==="/about"){content=about();title="Our story";description="Discover a people-first approach to building and the story behind the COMPAX concept.";}
 else if(path==="/expertise"){content=expertise();title="Our expertise";description="Explore construction, infrastructure, design and build, project management and more.";}
 else if(path==="/projects"){content=projectsPage();title="Projects";description="Explore eight richly detailed, illustrative construction concept projects.";}
 else if(path.startsWith("/projects/")){let p=projects.find(x=>x.slug===path.split("/")[2]);content=p?projectPage(p):notFound();title=p?p.name:"Page not found";description=p?p.intro:"Page not found";}
 else if(path==="/insights"){content=insightsPage();title="Perspectives";description="Human stories and thoughtful ideas about the built world.";}
 else if(path.startsWith("/insights/")){let p=insights.find(x=>x.slug===path.split("/")[2]);content=p?insightPage(p):notFound();title=p?p.title:"Page not found";description=p?p.excerpt:"Page not found";}
 else if(path==="/contact"){content=contact();title="Get in touch";description="Contact Bespoke Technologies about a construction company digital experience.";}
 else {content=notFound();title="Page not found";description="Find your way back to COMPAX.";}
 document.title=title+" | "+SITE;
 const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute("content",description);
 document.body.dataset.route=path==="/home"?"home":path==="/"?"home":"inside";
 $app.innerHTML=navigation()+'<main id="main" tabindex="-1">'+content+'</main>'+footer();
 attach();
 if(scroll){window.scrollTo({top:0,behavior:"instant"});}else{updateNav();}
}
function attach(){
 const header=document.getElementById("site-header"),toggle=document.getElementById("menu-toggle"),menu=document.getElementById("mobile-menu");
 toggle?.addEventListener("click",()=>{const isOpen=menu.classList.toggle("open");toggle.innerHTML=icon(isOpen?"close":"menu",25);toggle.setAttribute("aria-expanded",String(isOpen));toggle.setAttribute("aria-label",isOpen?"Close navigation":"Open navigation");menu.setAttribute("aria-hidden",String(!isOpen));document.body.classList.toggle("menu-open",isOpen);});
 document.querySelectorAll("[data-link]").forEach(link=>link.addEventListener("click",event=>{if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;const href=link.getAttribute("href");if(!href||!href.startsWith("/"))return;event.preventDefault();document.body.classList.remove("menu-open");if(window.location.pathname!==href){history.pushState({},"",href);render(true);}else{menu?.classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});}}));
 document.querySelectorAll("[data-sector]").forEach(a=>a.addEventListener("click",()=>{sessionStorage.setItem("compax-filter",a.dataset.sector||"");}));
 const filters=document.querySelectorAll("[data-filter]");
 function applyFilter(filter){
 filters.forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",String(active));});
 const cards=document.querySelectorAll(".portfolio-grid .project-card");let count=0;
 cards.forEach((card,i)=>{const active=filter==="All projects"||projects[i].category===filter;card.hidden=!active;if(active)count++;});
 const el=document.getElementById("portfolio-count");if(el)el.textContent="SHOWING "+(filter==="All projects"?"ALL ":"")+count+" CONCEPT PROJECT"+(count===1?"":"S");
 }
 filters.forEach(b=>b.addEventListener("click",()=>applyFilter(b.dataset.filter)));
 if(filters.length){const saved=sessionStorage.getItem("compax-filter");if(saved&&categories.includes(saved)){applyFilter(saved);}sessionStorage.removeItem("compax-filter");}
 const form=document.getElementById("contact-form");
 form?.addEventListener("submit",event=>{
 event.preventDefault();if(!form.reportValidity())return;
 const data=new FormData(form);const value=key=>String(data.get(key)||"").trim();
 const message=["Hello Bespoke Technologies,","I visited the COMPAX Construction website concept and would like to discuss a project.","","Name: "+value("name"),"Email: "+value("email"),...(value("company")?["Company: "+value("company")]:[]),"Interest: "+value("type"),"","Message: "+value("message")].join("\n");
 const url=toWhatsApp+"?text="+encodeURIComponent(message);
 const popup=window.open(url,"_blank","noopener,noreferrer");
 const status=document.getElementById("form-status");if(status)status.innerHTML=popup?"WhatsApp has opened. Review and send your message there.":'If WhatsApp did not open, <a href="'+url+'" target="_blank" rel="noopener noreferrer">open your prepared message here</a>.';
 });
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("shown");observer.unobserve(entry.target);}});},{rootMargin:"0px 0px -40px 0px",threshold:.07});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
 updateNav();
}
function updateNav(){const header=document.getElementById("site-header");if(header)header.classList.toggle("scrolled",window.scrollY>40);}
window.addEventListener("scroll",updateNav,{passive:true});
window.addEventListener("popstate",()=>render(false));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&document.body.classList.contains("menu-open")){document.body.classList.remove("menu-open");document.getElementById("mobile-menu")?.classList.remove("open");document.getElementById("menu-toggle")?.setAttribute("aria-expanded","false");}});
render();
