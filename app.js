/**
 * YITBAREK SISAY — PORTFOLIO APPLICATION CONTROLLER
 * Senior Architect & Interior Designer (Addis Ababa, Ethiopia)
 * Webflow Client-First Compatible JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. DATA STORE: CONTEXTUAL ETHIOPIAN ARCHITECTURAL PROJECTS
  // -------------------------------------------------------------------------
  const projectsData = [
    {
      id: 'prj-01',
      code: 'PRJ-01',
      title: 'Entoto Cultural Pavilion & Research Archive',
      category: 'public-cultural',
      typology: 'Public & Cultural Landmark',
      year: '2024',
      scale: '1:200 @ A0',
      site: 'Entoto Ridge, Addis Ababa',
      role: 'Lead Architect & BIM Specialist',
      software: 'Revit, D5 Render, V-Ray, AutoCAD',
      status: 'Completed Design & Tender',
      summary: 'A hillside cultural archive synthesizing Lalibela subtractive rock-carving and Aksumite timber-stone louvers with modern parametric daylight envelopes.',
      conceptTitle: 'Subtractive Basalt Massing & Stack Microclimate',
      conceptP1: 'Emerging from the volcanic terrain of Entoto mountain, the lower exhibition halls are excavated directly into native basalt rock, utilizing substantial earth thermal mass to maintain stable gallery temperatures without artificial cooling.',
      conceptP2: 'The upper timber canopy re-interprets the Aksumite tie-beam system (*re’ese anbasā*), cantilevering parametric eucalyptus shading fins that filter high-altitude ultraviolet daylight into diffuse 350-lux illumination.',
      tags: ['Subtractive Massing', 'Aksumite Joinery', 'Passive Geothermal', 'BIM LOD 350'],
      drawingTitle: 'LEVEL +01 MONOLITHIC GALLERIES & ATRIUM PLAN',
      sheetNum: 'A-201',
      drawingType: 'cultural-plan',
      renderType: 'cultural-exterior'
    },
    {
      id: 'prj-02',
      code: 'PRJ-02',
      title: 'Bole Sky Penthouse & Harari Nadaba Salon',
      category: 'interior',
      typology: 'Luxury Interior & Bespoke Millwork',
      year: '2024',
      scale: '1:50 @ A1',
      site: 'Bole District, Addis Ababa',
      role: 'Senior Interior Designer & Lead',
      software: 'Revit, 3ds Max, V-Ray, Photoshop',
      status: 'Completed & Handed Over',
      summary: 'A high-altitude penthouse interior re-interpreting the historic Harari Nadaba multi-tiered seating platform through oiled Ethiopian olive wood and concealed cove lighting.',
      conceptTitle: 'Nadaba Spatial Platforms & Ethiopian Woodwork',
      conceptP1: 'In homage to Harar Jugol’s five-tier interior seating typology, the primary salon features stepped timber platforms and recessed plaster wall niches (*tāqēt*) that delineate conversation, contemplation, and formal hosting zones.',
      conceptP2: 'Custom-fluted eucalyptus screens filter natural daylight while concealing acoustic dampening panels, creating an intimate sanctuary floating above the Addis Ababa skyline.',
      tags: ['Harari Nadaba', 'Ethiopian Olive Wood', 'Recessed Niches', 'Acoustic Millwork'],
      drawingTitle: 'PENTHOUSE LEVEL 14 REFLECTED CEILING & MILLWORK PLAN',
      sheetNum: 'I-104',
      drawingType: 'interior-plan',
      renderType: 'interior-render'
    },
    {
      id: 'prj-03',
      code: 'PRJ-03',
      title: 'Hawassa Pediatric Campus & Bamboo Shading Canopies',
      category: 'healthcare-schools',
      typology: 'Healthcare & Specialized Clinical Campus',
      year: '2023',
      scale: '1:500 @ A0',
      site: 'Hawassa, Sidama Region',
      role: 'Principal Architect & Medical Planner',
      software: 'ArchiCAD, Lumion, SketchUp, AutoCAD',
      status: 'Under Construction (Phase 2)',
      summary: 'A biophilic hospital campus combining Sidama radial bamboo structural geometries with sterile clinical zoning and landscaped healing courtyards.',
      conceptTitle: 'Indigenous Sidama Canopies & Sterile Zoning',
      conceptP1: 'The master plan organizes pediatric inpatient wards around radial open-air healing gardens inspired by indigenous Sidama bamboo construction, ensuring 100% natural cross-ventilation across patient corridors.',
      conceptP2: 'Parabolic timber solar canopies protect ambulatory walkways from equatorial sun and seasonal rains while supporting a 120kW rooftop solar photovoltaic array.',
      tags: ['Sidama Bamboo Geometry', 'Clean Air Corridors', 'Healing Courtyards', 'Healthcare BIM'],
      drawingTitle: 'PEDIATRIC WING & SURGICAL SUITE COMPOSITE MASTERPLAN',
      sheetNum: 'H-302',
      drawingType: 'hospital-plan',
      renderType: 'hospital-exterior'
    },
    {
      id: 'prj-04',
      code: 'PRJ-04',
      title: 'Kazanchis Aksum Stele Mixed-Use Highrise',
      category: 'residential',
      typology: 'High-Density Residential & Commercial Podium',
      year: '2023',
      scale: '1:250 @ A0',
      site: 'Kazanchis Financial District, Addis Ababa',
      role: 'Project Architect & Computational Designer',
      software: 'Revit, Rhino + Grasshopper, V-Ray',
      status: 'Schematic Design Approved',
      summary: 'A 26-storey urban tower translating the vertical monumentality and stepped podiums of the Aksumite stelae into a climate-responsive residential highrise.',
      conceptTitle: 'Parametric Stele Verticality & Sky Gardens',
      conceptP1: 'The tower massing pays homage to the Great Stele of Aksum, featuring vertical relief recesses and stepped setbacks that accommodate communal sky gardens every four storeys.',
      conceptP2: 'Parametrically optimized ceramic fritted glass panels dynamically balance internal daylight levels with high-altitude solar heat gain reduction.',
      tags: ['Aksumite Stele Profile', 'Parametric Facade', 'Sky Gardens', 'Highrise BIM'],
      drawingTitle: 'TYPICAL RESIDENTIAL LEVEL (+08 TO +18) UNIT MATRIX',
      sheetNum: 'A-412',
      drawingType: 'tower-plan',
      renderType: 'tower-render'
    },
    {
      id: 'prj-05',
      code: 'PRJ-05',
      title: 'Old Airport Monolithic Courtyard Villa',
      category: 'residential',
      typology: 'Private Luxury Residential Compound',
      year: '2022',
      scale: '1:100 @ A1',
      site: 'Old Airport District, Addis Ababa',
      role: 'Principal Architect & Site Supervisor',
      software: 'Revit, Lumion, AutoCAD',
      status: 'Completed & Occupied',
      summary: 'A secluded private residence organized around a serene central water court, pairing board-formed volcanic concrete with warm local wanza timber.',
      conceptTitle: 'Introverted Sanctuary & Water Court Thresholds',
      conceptP1: 'Embracing the introverted vernacular of traditional Ethiopian walled compounds (*ghebbi*), the villa turns inward toward an acoustic reflection pool that naturally humidifies dry winter breezes.',
      conceptP2: 'Deep cantilevered roof overhangs protect floor-to-ceiling glass apertures from Kiremt monsoon rains while creating seamless transitions between indoor salons and outdoor veranda terraces.',
      tags: ['Courtyard Ghebbi', 'Volcanic Concrete', 'Wanza Timber', 'Bespoke Residence'],
      drawingTitle: 'GROUND LEVEL PLAN & LANDSCAPE THRESHOLD SCHEMATIC',
      sheetNum: 'V-101',
      drawingType: 'villa-plan',
      renderType: 'villa-render'
    },
    {
      id: 'prj-06',
      code: 'PRJ-06',
      title: 'Addis International STEM Academy & Fasil Vaults',
      category: 'healthcare-schools',
      typology: 'Educational & Research Campus',
      year: '2022',
      scale: '1:200 @ A0',
      site: 'Bole Bulbula, Addis Ababa',
      role: 'Lead Architectural Consultant',
      software: 'Revit, D5 Render, ArchiCAD',
      status: 'Completed & Commissioned',
      summary: 'An interactive polytechnic institute drawing on 17th-century Gondarine stone arches and vaulted atriums for passive acoustics and collaborative innovation.',
      conceptTitle: 'Gondar Vaulted Atriums & Smart Laboratories',
      conceptP1: 'A soaring central atrium utilizes contemporary catenary stone arches inspired by Gondar’s Fasil Ghebbi, delivering exceptional natural acoustic clarity for amphitheater lectures and symposiums.',
      conceptP2: 'Sawtooth roof clerestories harvest glare-free northern ambient light, illuminating 32 robotics, biology, and computational fabrication laboratories.',
      tags: ['Gondar Stone Arches', 'Sawtooth Skylights', 'Makerspace Labs', 'BIM Coordination'],
      drawingTitle: 'SCIENCE PAVILION & MAKERSPACE COMPOSITE PLAN',
      sheetNum: 'E-205',
      drawingType: 'school-plan',
      renderType: 'school-render'
    }
  ];

  // -------------------------------------------------------------------------
  // 2. VECTOR ARCHITECTURAL ARTWORK GENERATOR
  // -------------------------------------------------------------------------
  function generateSvgArtwork(type, title) {
    const safeTitle = title || 'ARCHITECTURAL VISUALIZATION';
    
    switch (type) {
      case 'cultural-exterior':
      case 'cultural-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch_svg_artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            <g stroke="currentColor" stroke-width="1.2">
              <path d="M60,420 L740,420" stroke-width="1.5" />
              <path d="M60,420 L240,320 L580,320 L740,420" fill="var(--panel-elevated)" opacity="0.6" stroke-dasharray="3 3"/>
              
              <!-- Cantilevered Gallery Wings with Aksumite Louver Rhythm -->
              <rect x="140" y="160" width="280" height="160" fill="var(--panel-elevated)" stroke="var(--text-primary)" stroke-width="1.5"/>
              <rect x="380" y="110" width="280" height="210" fill="var(--bg-primary)" stroke="var(--text-primary)" stroke-width="1.5"/>
              
              <g stroke="var(--accent)" stroke-width="1" opacity="0.8">
                ${Array.from({length: 18}).map((_, i) => `
                  <line x1="${160 + i * 14}" y1="180" x2="${160 + i * 14}" y2="300" />
                  <line x1="${400 + i * 14}" y1="130" x2="${400 + i * 14}" y2="300" />
                `).join('')}
              </g>

              <polygon points="340,70 440,70 420,110 360,110" fill="var(--panel-elevated)" stroke="var(--accent)" stroke-width="1.5"/>
              <line x1="390" y1="50" x2="390" y2="70" stroke="var(--accent)" stroke-width="1" />
              <circle cx="390" cy="50" r="3" fill="var(--accent)"/>
            </g>

            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// ENTOTO CULTURAL PAVILION — ELEVATION STUDY</text>
              <text x="140" y="445">AXIS 01 [LALIBELA TRENCH]</text>
              <text x="380" y="445">AXIS 02 [ATRIUM CORE]</text>
              <text x="660" y="445">AXIS 03</text>
              <text x="700" y="115" fill="var(--accent)">+18.50m ROOF</text>
              <text x="700" y="165" fill="var(--accent)">+12.00m MEZZANINE</text>
              <text x="700" y="325" fill="var(--accent)">±0.00m PODIUM</text>
            </g>
          </svg>
        `;

      case 'interior-render':
      case 'interior-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch_svg_artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            <g stroke="currentColor" stroke-width="1" opacity="0.4">
              <line x1="0" y1="0" x2="400" y2="240" />
              <line x1="800" y1="0" x2="400" y2="240" />
              <line x1="0" y1="500" x2="400" y2="240" />
              <line x1="800" y1="500" x2="400" y2="240" />
              <rect x="260" y="160" width="280" height="160" fill="var(--panel-elevated)" stroke="var(--text-primary)" stroke-width="1.5"/>
            </g>

            <!-- Harari Nadaba Platform Geometry & Recessed Niches -->
            <g stroke="var(--accent)" stroke-width="1.2">
              <polygon points="120,40 680,40 600,120 200,120" fill="var(--bg-primary)" stroke="var(--accent)" />
              <line x1="220" y1="120" x2="580" y2="120" stroke="var(--accent)" stroke-width="2" />
              
              <!-- Recessed Wall Niches (Tāqēt) -->
              <rect x="290" y="190" width="40" height="60" fill="var(--panel-bg)" stroke="var(--accent)"/>
              <rect x="350" y="190" width="40" height="60" fill="var(--panel-bg)" stroke="var(--accent)"/>
              <rect x="410" y="190" width="40" height="60" fill="var(--panel-bg)" stroke="var(--accent)"/>
              <rect x="470" y="190" width="40" height="60" fill="var(--panel-bg)" stroke="var(--accent)"/>
            </g>

            <!-- Raised Nadaba Seating Matrix -->
            <g stroke="var(--text-primary)" stroke-width="1.2">
              <polygon points="200,340 600,340 680,430 120,430" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              <polygon points="260,370 540,370 570,410 230,410" fill="var(--bg-primary)" stroke="var(--accent)"/>
            </g>

            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// BOLE PENTHOUSE — HARARI NADABA SEATING PERSPECTIVE</text>
              <text x="30" y="470">MATERIAL: ETHIOPIAN OLIVE TIMBER / FLUTED BLACK STEEL / TRAVERTINE</text>
              <text x="590" y="115" fill="var(--accent)">COVE LIGHTING: 2700K</text>
            </g>
          </svg>
        `;

      case 'hospital-exterior':
      case 'hospital-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch_svg_artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            <g stroke="currentColor" stroke-width="1.2">
              <rect x="80" y="80" width="640" height="340" stroke="var(--text-primary)" stroke-width="1.5" stroke-dasharray="4 2"/>
              <rect x="120" y="110" width="200" height="110" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              <rect x="480" y="110" width="200" height="110" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              <rect x="120" y="270" width="200" height="110" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              <rect x="480" y="270" width="200" height="110" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              
              <!-- Sidama Radial Bamboo Canopy Structure -->
              <circle cx="400" cy="245" r="50" fill="var(--bg-primary)" stroke="var(--accent)" stroke-width="1.5"/>
              <circle cx="400" cy="245" r="35" stroke="var(--accent)" stroke-dasharray="2 2"/>
              <line x1="350" y1="245" x2="450" y2="245" stroke="var(--accent)"/>
              <line x1="400" y1="195" x2="400" y2="295" stroke="var(--accent)"/>
            </g>

            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// HAWASSA PEDIATRIC CAMPUS — BIOPHILIC BAMBOO SCHEMATIC</text>
              <text x="140" y="170">PEDIATRIC WING A</text>
              <text x="500" y="170">MATERNITY WING B</text>
              <text x="360" y="250" fill="var(--accent)">BAMBOO CANOPY</text>
            </g>
          </svg>
        `;

      case 'tower-render':
      case 'tower-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch_svg_artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            <g stroke="currentColor" stroke-width="1.2">
              <line x1="50" y1="440" x2="750" y2="440" stroke-width="1.5"/>
              <rect x="220" y="360" width="360" height="80" fill="var(--panel-elevated)" stroke="var(--text-primary)" stroke-width="1.5"/>
              
              <!-- Aksum Stele Tapering Profile -->
              <path d="M260,360 L280,180 L310,60 L490,60 L520,180 L540,360 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" stroke-width="1.5"/>
              
              <rect x="300" y="190" width="200" height="30" fill="var(--panel-elevated)" stroke="var(--accent)" stroke-width="1.2"/>
              <rect x="330" y="90" width="140" height="24" fill="var(--panel-elevated)" stroke="var(--accent)" stroke-width="1.2"/>
              
              <line x1="400" y1="20" x2="400" y2="60" stroke="var(--accent)" stroke-width="1.5"/>
              <circle cx="400" cy="20" r="3" fill="var(--accent)"/>
            </g>

            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// KAZANCHIS AKSUM STELE PROFILE — 26 STOREYS</text>
              <text x="560" y="70" fill="var(--accent)">+108.00m CROWN</text>
              <text x="560" y="205" fill="var(--accent)">+52.00m SKY GARDEN</text>
            </g>
          </svg>
        `;

      case 'villa-render':
      case 'villa-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch_svg_artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            <g stroke="currentColor" stroke-width="1.2">
              <path d="M120,380 L400,450 L680,380 L400,310 Z" fill="none" stroke-dasharray="3 3" opacity="0.4"/>
              <polygon points="160,200 400,260 640,200 400,140" fill="var(--panel-elevated)" stroke="var(--text-primary)" stroke-width="1.5"/>
              <polygon points="140,190 400,250 660,190 400,130" fill="var(--bg-primary)" stroke="var(--accent)" stroke-width="1.5"/>
              <polygon points="340,200 400,215 460,200 400,185" fill="var(--panel-bg)" stroke="var(--accent)"/>
              <line x1="200" y1="210" x2="200" y2="350" stroke="var(--accent)" stroke-width="1"/>
              <line x1="600" y1="210" x2="600" y2="350" stroke="var(--accent)" stroke-width="1"/>
            </g>

            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// OLD AIRPORT RESIDENCE — GHEBBI WATER COURT SCHEMATIC</text>
            </g>
          </svg>
        `;

      default:
        return `
          <svg viewBox="0 0 800 500" class="arch_svg_artwork" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            <rect x="100" y="100" width="600" height="300" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
            <circle cx="400" cy="250" r="80" stroke="var(--accent)" stroke-width="1.5"/>
            <text x="400" y="255" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--accent)" text-anchor="middle">${safeTitle.toUpperCase()}</text>
          </svg>
        `;
    }
  }

  // -------------------------------------------------------------------------
  // 3. RENDER SELECTED WORKS GRID
  // -------------------------------------------------------------------------
  const projectsGrid = document.getElementById('projectsGrid');
  const projectCountDisplay = document.getElementById('projectCountDisplay');
  const workFilters = document.querySelectorAll('.filter_button');

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    if (projectCountDisplay) {
      projectCountDisplay.textContent = `SHOWING ${filtered.length} OF ${projectsData.length} PROJECTS`;
    }

    projectsGrid.innerHTML = filtered.map(project => `
      <article class="project_card" data-project-id="${project.id}" role="button" tabindex="0" aria-label="View project ${project.title}">
        <div class="project_card_image_wrap drafting_sheet_frame" data-interactive-blueprint="true">
          <span class="crop_mark crop_tl"></span>
          <span class="crop_mark crop_tr"></span>
          <span class="crop_mark crop_bl"></span>
          <span class="crop_mark crop_br"></span>
          
          <div class="blueprint_grid_overlay"></div>
          
          <div class="render_canvas_container">
            ${generateSvgArtwork(project.renderType, project.title)}
          </div>

          <div class="render_badge text-style-mono text-size-tiny">RENDER PLACEHOLDER</div>
        </div>

        <div class="project_card_meta_row text-style-mono text-size-tiny">
          <span class="text-color-accent">${project.code}</span>
          <span class="text-color-secondary">${project.typology}</span>
        </div>

        <h3 class="project_card_title">${project.title}</h3>
        <p class="project_card_excerpt">${project.summary}</p>
        
        <div class="project_specs_inline text-style-mono text-size-tiny">
          <span>YEAR: ${project.year}</span>
          <span>&bull;</span>
          <span>STATUS: ${project.status}</span>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.project_card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        navigateToProject(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = card.getAttribute('data-project-id');
          navigateToProject(id);
        }
      });
    });
  }

  // Initial projects render
  renderProjects('all');

  // Filter Buttons Logic
  workFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      workFilters.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  // -------------------------------------------------------------------------
  // 4. ROUTING & SCREEN 2 (PROJECT CASE STUDY) CONTROLLER
  // -------------------------------------------------------------------------
  const homeView = document.getElementById('homeView');
  const projectDetailView = document.getElementById('projectDetailView');
  const backToWorksBtn = document.getElementById('backToWorksBtn');
  const nextProjectStrip = document.getElementById('nextProjectStrip');

  let currentProjectIndex = 0;

  function loadProjectDetail(projectId) {
    const index = projectsData.findIndex(p => p.id === projectId);
    if (index === -1) return;
    
    currentProjectIndex = index;
    const project = projectsData[index];
    const nextProject = projectsData[(index + 1) % projectsData.length];

    // Populate Fields
    document.getElementById('detailPrjTag').textContent = `${project.code} // ${project.year} // ${project.typology.toUpperCase()}`;
    document.getElementById('detailTitle').textContent = project.title;
    document.getElementById('detailSummary').textContent = project.summary;
    document.getElementById('detailSite').textContent = project.site.toUpperCase();
    document.getElementById('detailScale').textContent = project.scale;

    // Spec Table
    document.getElementById('specTypology').textContent = project.typology;
    document.getElementById('specRole').textContent = project.role;
    document.getElementById('specSoftware').textContent = project.software;
    document.getElementById('specStatus').textContent = project.status;

    // Editorial Content
    document.getElementById('detailConceptTitle').textContent = project.conceptTitle;
    document.getElementById('detailConceptP1').textContent = project.conceptP1;
    document.getElementById('detailConceptP2').textContent = project.conceptP2;
    document.getElementById('detailDrawingTitle').textContent = project.drawingTitle;
    document.getElementById('detailSheetNum').textContent = project.sheetNum;

    // Tags
    const tagsContainer = document.getElementById('detailTagsList');
    if (tagsContainer) {
      tagsContainer.innerHTML = project.tags.map(t => `<span>${t}</span>`).join('');
    }

    // Hero Render & Editorial Canvases
    document.getElementById('detailHeroRender').innerHTML = generateSvgArtwork(project.renderType, project.title);
    document.getElementById('detailSplitRender').innerHTML = generateSvgArtwork(project.renderType, `${project.title} - Detail`);
    document.getElementById('detailFullBleedRender').innerHTML = generateSvgArtwork(project.renderType, `${project.title} - Full Bleed`);
    document.getElementById('detailDuoRender1').innerHTML = generateSvgArtwork(project.renderType, 'Daylight Study');
    document.getElementById('detailDuoRender2').innerHTML = generateSvgArtwork(project.renderType, 'Night Lighting');
    document.getElementById('detailPlanRender').innerHTML = generateSvgArtwork(project.drawingType, project.drawingTitle);

    // Next Project Strip
    document.getElementById('nextPrjTitle').textContent = nextProject.title;
    document.getElementById('nextPrjTypology').textContent = `${nextProject.code} // ${nextProject.typology.toUpperCase()}`;

    // Switch Views
    homeView.style.display = 'none';
    projectDetailView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.title = `${project.title} — Yitbarek Sisay | Architecture`;
  }

  function navigateToHome() {
    projectDetailView.style.display = 'none';
    homeView.style.display = 'block';
    window.location.hash = '#works';
    document.title = 'Yitbarek Sisay — Senior Architect & Interior Designer | Addis Ababa';
  }

  function navigateToProject(id) {
    window.location.hash = `#project/${id}`;
    loadProjectDetail(id);
  }

  if (nextProjectStrip) {
    nextProjectStrip.addEventListener('click', () => {
      const nextIndex = (currentProjectIndex + 1) % projectsData.length;
      navigateToProject(projectsData[nextIndex].id);
    });
  }

  if (backToWorksBtn) {
    backToWorksBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToHome();
    });
  }

  const brandHomeLink = document.getElementById('brandHomeLink');
  if (brandHomeLink) {
    brandHomeLink.addEventListener('click', (e) => {
      if (projectDetailView.style.display === 'block') {
        e.preventDefault();
        navigateToHome();
      }
    });
  }

  function handleRouteHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#project/')) {
      const projectId = hash.replace('#project/', '');
      loadProjectDetail(projectId);
    } else {
      projectDetailView.style.display = 'none';
      homeView.style.display = 'block';
    }
  }

  window.addEventListener('hashchange', handleRouteHash);
  handleRouteHash();

  // -------------------------------------------------------------------------
  // 5. THEME SWITCHER (NAVY BLUEPRINT <-> WARM CONCRETE)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
  const themeLabel = document.getElementById('themeLabel');
  const mobileThemeLabel = document.getElementById('mobileThemeLabel');

  function updateThemeUI(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const labelText = theme === 'light' ? 'CONCRETE / NAVY' : 'NAVY / CONCRETE';
    if (themeLabel) themeLabel.textContent = labelText;
    if (mobileThemeLabel) mobileThemeLabel.textContent = labelText;
    localStorage.setItem('yitbarek_theme', theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateThemeUI(nextTheme);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);

  const savedTheme = localStorage.getItem('yitbarek_theme');
  if (savedTheme) {
    updateThemeUI(savedTheme);
  }

  // -------------------------------------------------------------------------
  // 6. LIVE ADDIS ABABA CLOCK (UTC+3)
  // -------------------------------------------------------------------------
  const clockTimeElement = document.getElementById('clockTime');

  function updateAddisTime() {
    if (!clockTimeElement) return;
    try {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
      clockTimeElement.textContent = `${timeString} EAT`;
    } catch (e) {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const eatTime = new Date(utc + (3600000 * 3));
      clockTimeElement.textContent = `${eatTime.toTimeString().substring(0, 8)} EAT`;
    }
  }

  setInterval(updateAddisTime, 1000);
  updateAddisTime();

  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------------------
  // 7. CV SPECIFICATION MODAL
  // -------------------------------------------------------------------------
  const cvModal = document.getElementById('cvModal');
  const openCvBtn = document.getElementById('openCvBtn');
  const cvCloseBtn = document.getElementById('cvCloseBtn');
  const printCvBtn = document.getElementById('printCvBtn');

  function openCv() {
    if (cvModal) {
      cvModal.classList.add('is-open');
      cvModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCv() {
    if (cvModal) {
      cvModal.classList.remove('is-open');
      cvModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openCvBtn) openCvBtn.addEventListener('click', openCv);
  if (cvCloseBtn) cvCloseBtn.addEventListener('click', closeCv);
  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCv();
    });
  }

  // -------------------------------------------------------------------------
  // 8. MOBILE NAVIGATION DRAWER
  // -------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile_nav_link');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
      if (projectDetailView.style.display === 'block') {
        navigateToHome();
      }
    });
  });

  // -------------------------------------------------------------------------
  // 9. TRANSMITTAL CONTACT FORM
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formNotice = document.getElementById('formNotice');
  const formStatusIndicator = document.getElementById('formStatusIndicator');
  const submitFormBtn = document.getElementById('submitFormBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const type = document.getElementById('projectType').value;
      const message = document.getElementById('userMessage').value.trim();

      if (!name || !email || !message) {
        if (formNotice) {
          formNotice.textContent = 'PLEASE FILL ALL MANDATORY SPECIFICATION FIELDS.';
          formNotice.style.color = '#FF5555';
        }
        return;
      }

      if (submitFormBtn) {
        submitFormBtn.disabled = true;
        submitFormBtn.querySelector('span').textContent = 'TRANSMITTING BRIEF...';
      }
      if (formStatusIndicator) {
        formStatusIndicator.textContent = 'TRANSMITTING';
        formStatusIndicator.style.color = 'var(--accent)';
      }

      setTimeout(() => {
        if (submitFormBtn) {
          submitFormBtn.disabled = false;
          submitFormBtn.querySelector('span').textContent = 'Send Message';
        }
        if (formStatusIndicator) {
          formStatusIndicator.textContent = 'TRANSMITTED // LOGGED';
          formStatusIndicator.style.color = '#34D399';
        }
        if (formNotice) {
          formNotice.textContent = `THANK YOU ${name.toUpperCase()}. TRANSMITTAL CONFIRMED FOR ${type.toUpperCase()}. STUDIO RESPONSE WITHIN 24 HOURS.`;
          formNotice.style.color = 'var(--accent)';
        }
        contactForm.reset();
      }, 1000);
    });
  }

  // -------------------------------------------------------------------------
  // 10. ACTIVE NAVIGATION TRACKER
  // -------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.nav_menu .nav_link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('is-active');
      if (link.getAttribute('data-nav') === current) {
        link.classList.add('is-active');
      }
    });
  });
});
