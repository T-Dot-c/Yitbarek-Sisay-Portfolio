/**
 * YITBAREK SISAY — PORTFOLIO APPLICATION LOGIC
 * Senior Architect & Interior Designer (Addis Ababa, Ethiopia)
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. DATA STORE: ARCHITECTURAL PROJECTS
  // -------------------------------------------------------------------------
  const projectsData = [
    {
      id: 'prj-01',
      code: 'PRJ-01',
      title: 'Entoto Cultural Pavilion & Research Center',
      category: 'public-cultural',
      typology: 'Public & Cultural Landmark',
      year: '2024',
      scale: '1:200 @ A0',
      site: 'Entoto Ridge, Addis Ababa',
      role: 'Lead Architect & BIM Specialist',
      software: 'Revit, D5 Render, V-Ray, AutoCAD',
      status: 'Completed Design & Tender',
      summary: 'A landmark cultural repository celebrating Ethiopian spatial heritage through contemporary rammed earth, timber louvers, and parametric daylight envelopes.',
      conceptTitle: 'Topographic Integration & Passive Microclimate',
      conceptP1: 'The architecture emerges from the natural slope of the plateau, utilizing locally sourced basalt and compressed earth blocks to anchor the massing. The deep-set loggias shield the interior galleries from Addis Ababa’s intense high-altitude solar radiation while capturing northern ambient daylight.',
      conceptP2: 'A central atrium acts as a natural thermal chimney, inducing passive stack ventilation across all exhibition levels and reducing active HVAC energy requirements by 42%.',
      tags: ['Passive Ventilation', 'Parametric Louvers', 'BIM LOD 350', 'Cultural Heritage'],
      drawingTitle: 'LEVEL +01 MAIN GALLERIES & AUDITORIUM PLAN',
      sheetNum: 'A-201',
      drawingType: 'cultural-plan',
      renderType: 'cultural-exterior'
    },
    {
      id: 'prj-02',
      code: 'PRJ-02',
      title: 'Bole Luxury Penthouse & Sky Lounge',
      category: 'interior',
      typology: 'Interior Architecture & Bespoke Millwork',
      year: '2024',
      scale: '1:50 @ A1',
      site: 'Bole District, Addis Ababa',
      role: 'Senior Interior Designer & Project Lead',
      software: 'Revit, 3ds Max, V-Ray, Photoshop',
      status: 'Completed & Handed Over',
      summary: 'A dual-level penthouse interior balancing refined Ethiopian eucalyptus woodwork with brushed black steel, bespoke ambient illumination, and panoramic metropolitan views.',
      conceptTitle: 'Material Tactility & Fluid Spatial Boundaries',
      conceptP1: 'By removing non-structural partition walls, the primary living zone opens into an expansive light-filled gallery. Custom-crafted fluted timber partitions allow flexible acoustic privacy between the salon and private study without sacrificing visual depth.',
      conceptP2: 'Indirect cove lighting concealed within drop-soffits casts a warm 2700K illumination across textured travertine feature walls, producing an intimate sanctuary suspended above the city.',
      tags: ['Custom Millwork', 'Acoustic Partitions', 'Indirect Lighting', 'Luxury Residential'],
      drawingTitle: 'PENTHOUSE LEVEL 14 DETAILED INTERIOR REFLECTED CEILING PLAN',
      sheetNum: 'I-104',
      drawingType: 'interior-plan',
      renderType: 'interior-render'
    },
    {
      id: 'prj-03',
      code: 'PRJ-03',
      title: 'Hawassa Regional Pediatric & Maternal Clinic',
      category: 'healthcare-schools',
      typology: 'Healthcare & Specialized Clinical Facility',
      year: '2023',
      scale: '1:500 @ A0',
      site: 'Hawassa, Sidama Region',
      role: 'Principal Architect & Medical Planner',
      software: 'ArchiCAD, Lumion, SketchUp, AutoCAD',
      status: 'Under Construction (Phase 2)',
      summary: 'A biophilic pediatric healthcare campus engineered with sterile zoning, landscaped healing courtyards, and solar-assisted natural air circulation.',
      conceptTitle: 'Sterile Circulation & Biophilic Healing Courtyards',
      conceptP1: 'The hospital layout separates public waiting concourses from clean clinical corridors, eliminating contamination vectors while providing every patient room direct views and cross-ventilation through lush inner courtyards.',
      conceptP2: 'Shaded solar canopies provide 60% of daily electricity needs while creating continuous weather-protected ambulatory walkways connecting diagnostics, wards, and surgical suites.',
      tags: ['Medical Zoning', 'Biophilic Design', 'Clean Air Corridors', 'Healthcare BIM'],
      drawingTitle: 'SURGICAL WING & PEDIATRIC INPATIENT BLOCK GENERAL PLAN',
      sheetNum: 'H-302',
      drawingType: 'hospital-plan',
      renderType: 'hospital-exterior'
    },
    {
      id: 'prj-04',
      code: 'PRJ-04',
      title: 'Kazanchis Sustainable Mixed-Use Highrise',
      category: 'residential',
      typology: 'High-Density Residential & Commercial Podium',
      year: '2023',
      scale: '1:250 @ A0',
      site: 'Kazanchis Financial District, Addis Ababa',
      role: 'Project Architect & Computational Designer',
      software: 'Revit, Rhino + Grasshopper, V-Ray',
      status: 'Schematic Design Approved',
      summary: 'A 26-storey urban tower integrating modular multi-family apartments, vertical sky gardens, and an active retail pedestrian arcade.',
      conceptTitle: 'Modular Verticality & Wind-Optimized Aerodynamics',
      conceptP1: 'Parametric aerodynamic tapering reduces lateral wind loads by 18%, allowing a lighter structural concrete core. Stepped sky gardens every four levels foster communal social interactions among residents.',
      conceptP2: 'Double-glazed facade modules with integrated solar shading louvers respond dynamically to eastern morning solar gains and western afternoon thermal peaks.',
      tags: ['Highrise BIM', 'Parametric Facade', 'Sky Gardens', 'Mixed-Use'],
      drawingTitle: 'TYPICAL RESIDENTIAL LEVEL (+08 TO +18) UNIT MATRIX',
      sheetNum: 'A-412',
      drawingType: 'tower-plan',
      renderType: 'tower-render'
    },
    {
      id: 'prj-05',
      code: 'PRJ-05',
      title: 'Old Airport Bespoke Courtyard Villa',
      category: 'residential',
      typology: 'Private Luxury Residential Sanctuary',
      year: '2022',
      scale: '1:100 @ A1',
      site: 'Old Airport District, Addis Ababa',
      role: 'Principal Architect & Site Supervisor',
      software: 'Revit, Lumion, AutoCAD',
      status: 'Completed & Occupied',
      summary: 'A minimalist private residence organized around a serene central water court, framing mature indigenous trees with board-formed concrete and warm local timber.',
      conceptTitle: 'Introverted Sanctuary & Seamless Thresholds',
      conceptP1: 'Designed for privacy in a dense urban neighborhood, the exterior perimeter presents quiet masonry walls, while the interior unfolds into open glass curtain walls embracing the central courtyard reflection pool.',
      conceptP2: 'Cantilevered roof planes hover over deep overhangs, preventing rain splash during Kiremt monsoon seasons and casting dynamic geometric shadow patterns throughout the day.',
      tags: ['Board-Formed Concrete', 'Reflecting Pool', 'Courtyard Typology', 'Bespoke Residence'],
      drawingTitle: 'GROUND LEVEL PLAN & LANDSCAPE THRESHOLD SCHEMATIC',
      sheetNum: 'V-101',
      drawingType: 'villa-plan',
      renderType: 'villa-render'
    },
    {
      id: 'prj-06',
      code: 'PRJ-06',
      title: 'Addis International STEM Academy',
      category: 'healthcare-schools',
      typology: 'Educational & Research Campus',
      year: '2022',
      scale: '1:200 @ A0',
      site: 'Bole Bulbula, Addis Ababa',
      role: 'Lead Architectural Consultant',
      software: 'Revit, D5 Render, ArchiCAD',
      status: 'Completed & Commissioned',
      summary: 'An interactive learning environment featuring modular maker-laboratories, tiered amphitheaters, and solar roof pavilions designed to inspire technological innovation.',
      conceptTitle: 'Flexible Learning Hubs & Daylight Glazing',
      conceptP1: 'A spine of collaborative break-out areas interconnects physics, robotics, and biology laboratories, encouraging interdisciplinary exploration and spontaneous student interactions.',
      conceptP2: 'Acoustic baffle ceilings and sawtooth skylights deliver glare-free northern daylight evenly across all 32 smart classrooms.',
      tags: ['Educational Campus', 'Acoustic Baffles', 'Sawtooth Skylights', 'BIM Coordination'],
      drawingTitle: 'SCIENCE PAVILION & MAKERSPACE COMPOSITE PLAN',
      sheetNum: 'E-205',
      drawingType: 'school-plan',
      renderType: 'school-render'
    }
  ];

  // -------------------------------------------------------------------------
  // 2. SVG ARCHITECTURAL RENDER GENERATOR
  // (Generates crisp, precise, vector architectural drawings & 3D renders)
  // -------------------------------------------------------------------------
  function generateSvgArtwork(type, title) {
    const safeTitle = title || 'ARCHITECTURAL VISUALIZATION';
    
    switch (type) {
      case 'cultural-exterior':
      case 'cultural-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch-svg-render" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid_${Math.random().toString(36).substr(2, 9)}" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            <rect width="100%" height="100%" fill="url(#grid_pattern)" opacity="0.4" />
            
            <!-- Structural Massing & Louvers -->
            <g stroke="currentColor" stroke-width="1.2">
              <path d="M60,420 L740,420" stroke-width="1.5" />
              <!-- Plateau Sloping Base -->
              <path d="M60,420 L240,320 L580,320 L740,420" fill="var(--panel-elevated)" opacity="0.6" stroke-dasharray="3 3"/>
              
              <!-- Cantilevered Gallery Wings -->
              <rect x="140" y="160" width="280" height="160" fill="var(--panel-elevated)" stroke="var(--text-primary)" stroke-width="1.5"/>
              <rect x="380" y="110" width="280" height="210" fill="var(--bg-primary)" stroke="var(--text-primary)" stroke-width="1.5"/>
              
              <!-- Parametric Louver Blades -->
              <g stroke="var(--accent)" stroke-width="1" opacity="0.8">
                ${Array.from({length: 18}).map((_, i) => `
                  <line x1="${160 + i * 14}" y1="180" x2="${160 + i * 14}" y2="300" />
                  <line x1="${400 + i * 14}" y1="130" x2="${400 + i * 14}" y2="300" />
                `).join('')}
              </g>

              <!-- Central Glass Atrium Lantern -->
              <polygon points="340,70 440,70 420,110 360,110" fill="var(--panel-elevated)" stroke="var(--accent)" stroke-width="1.5"/>
              <line x1="390" y1="50" x2="390" y2="70" stroke="var(--accent)" stroke-width="1" />
              <circle cx="390" cy="50" r="3" fill="var(--accent)"/>
            </g>

            <!-- Dimension & Axis Annotations -->
            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// ELEVATION STUDY — NORTH-EAST ORIENTATION</text>
              <text x="140" y="445">AXIS 01</text>
              <text x="380" y="445">AXIS 02 [ATRIUM]</text>
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
          <svg viewBox="0 0 800 500" class="arch-svg-render" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            
            <!-- Interior 1-Point Perspective Grid -->
            <g stroke="currentColor" stroke-width="1" opacity="0.4">
              <!-- Vanishing Point Convergence -->
              <line x1="0" y1="0" x2="400" y2="240" />
              <line x1="800" y1="0" x2="400" y2="240" />
              <line x1="0" y1="500" x2="400" y2="240" />
              <line x1="800" y1="500" x2="400" y2="240" />
              
              <!-- Back Wall -->
              <rect x="260" y="160" width="280" height="160" fill="var(--panel-elevated)" stroke="var(--text-primary)" stroke-width="1.5"/>
            </g>

            <!-- Architectural Ceiling Dropped Soffit & Linear Cove Lighting -->
            <g stroke="var(--accent)" stroke-width="1.2">
              <polygon points="120,40 680,40 600,120 200,120" fill="var(--bg-primary)" stroke="var(--accent)" />
              <line x1="220" y1="120" x2="580" y2="120" stroke="var(--accent)" stroke-width="2" />
              <line x1="140" y1="40" x2="220" y2="120" stroke-dasharray="2 2"/>
              <line x1="660" y1="40" x2="580" y2="120" stroke-dasharray="2 2"/>
            </g>

            <!-- Custom Millwork Fluted Partitions & Seating Lounge Volume -->
            <g stroke="var(--text-primary)" stroke-width="1.2">
              <!-- Left Fluted Screen -->
              <rect x="140" y="180" width="70" height="260" fill="var(--panel-elevated)" />
              ${Array.from({length: 6}).map((_, i) => `
                <line x1="${145 + i * 10}" y1="180" x2="${145 + i * 10}" y2="440" stroke="var(--accent)" stroke-width="0.8"/>
              `).join('')}

              <!-- Central Minimalist Low Hearth & Coffee Table -->
              <polygon points="300,340 500,340 540,400 260,400" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              <polygon points="260,400 540,400 540,420 260,420" fill="var(--bg-primary)" stroke="var(--text-primary)"/>
            </g>

            <!-- Annotations -->
            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// INTERIOR SECTIONAL PERSPECTIVE — BOLE PENTHOUSE</text>
              <text x="30" y="470">MATERIAL: EUCALYPTUS WOODWORK / FLUTED BLACK STEEL / TRAVERTINE</text>
              <text x="590" y="115" fill="var(--accent)">COVE LIGHTING: 2700K</text>
            </g>
          </svg>
        `;

      case 'hospital-exterior':
      case 'hospital-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch-svg-render" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            
            <!-- Campus Courtyard Orthographic CAD Plan -->
            <g stroke="currentColor" stroke-width="1.2">
              <!-- Clean Air Corridor Outer Envelope -->
              <rect x="80" y="80" width="640" height="340" stroke="var(--text-primary)" stroke-width="1.5" stroke-dasharray="4 2"/>
              
              <!-- Pediatric Wing A -->
              <rect x="120" y="110" width="200" height="110" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              <!-- Maternity Wing B -->
              <rect x="480" y="110" width="200" height="110" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              
              <!-- Surgical Suite C -->
              <rect x="120" y="270" width="200" height="110" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              <!-- Diagnostics Wing D -->
              <rect x="480" y="270" width="200" height="110" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              
              <!-- Central Biophilic Courtyard & Covered Pergola -->
              <circle cx="400" cy="245" r="50" fill="var(--bg-primary)" stroke="var(--accent)" stroke-width="1.5"/>
              <circle cx="400" cy="245" r="35" stroke="var(--accent)" stroke-dasharray="2 2"/>
              
              <!-- Connecting Glazed Bridges -->
              <rect x="320" y="150" width="160" height="30" fill="var(--bg-primary)" stroke="var(--accent)"/>
              <rect x="320" y="310" width="160" height="30" fill="var(--bg-primary)" stroke="var(--accent)"/>
              <line x1="400" y1="110" x2="400" y2="380" stroke="var(--accent)" stroke-dasharray="2 2"/>
            </g>

            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// SCHEMATIC MASTERPLAN — BIOPHILIC CIRCULATION</text>
              <text x="140" y="170">WARD A (PEDIATRIC)</text>
              <text x="500" y="170">WARD B (MATERNITY)</text>
              <text x="140" y="330">SURGERY &amp; ICU</text>
              <text x="500" y="330">LABS &amp; DIAGNOSTICS</text>
              <text x="360" y="250" fill="var(--accent)">HEALING ATRIUM</text>
            </g>
          </svg>
        `;

      case 'tower-render':
      case 'tower-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch-svg-render" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            
            <!-- Highrise Elevation / Tapering Massing -->
            <g stroke="currentColor" stroke-width="1.2">
              <!-- Ground Plane -->
              <line x1="50" y1="440" x2="750" y2="440" stroke-width="1.5"/>
              
              <!-- Podium Base -->
              <rect x="220" y="360" width="360" height="80" fill="var(--panel-elevated)" stroke="var(--text-primary)" stroke-width="1.5"/>
              
              <!-- Tower Body with Setbacks -->
              <path d="M260,360 L280,180 L310,60 L490,60 L520,180 L540,360 Z" fill="var(--bg-primary)" stroke="var(--text-primary)" stroke-width="1.5"/>
              
              <!-- Sky Garden Cutouts -->
              <rect x="300" y="190" width="200" height="30" fill="var(--panel-elevated)" stroke="var(--accent)" stroke-width="1.2"/>
              <rect x="330" y="90" width="140" height="24" fill="var(--panel-elevated)" stroke="var(--accent)" stroke-width="1.2"/>
              
              <!-- Facade Vertical Mullions -->
              <g stroke="var(--accent)" stroke-width="0.8" opacity="0.6">
                ${Array.from({length: 12}).map((_, i) => `
                  <line x1="${290 + i * 18}" y1="230" x2="${290 + i * 18}" y2="350" />
                  <line x1="${315 + i * 14}" y1="120" x2="${315 + i * 14}" y2="180" />
                `).join('')}
              </g>

              <!-- Spire / Crown -->
              <line x1="400" y1="20" x2="400" y2="60" stroke="var(--accent)" stroke-width="1.5"/>
              <circle cx="400" cy="20" r="3" fill="var(--accent)"/>
            </g>

            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// TOWER MASSING &amp; SOLAR ENVELOPE [26 STOREYS]</text>
              <text x="560" y="70" fill="var(--accent)">+108.00m CROWN</text>
              <text x="560" y="205" fill="var(--accent)">+52.00m SKY GARDEN</text>
              <text x="590" y="375" fill="var(--accent)">+12.00m PODIUM</text>
              <text x="240" y="410">COMMERCIAL ARCADE</text>
            </g>
          </svg>
        `;

      case 'villa-render':
      case 'villa-plan':
        return `
          <svg viewBox="0 0 800 500" class="arch-svg-render" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            
            <!-- Courtyard Villa Axonometric Section -->
            <g stroke="currentColor" stroke-width="1.2">
              <path d="M120,380 L400,450 L680,380 L400,310 Z" fill="none" stroke-dasharray="3 3" opacity="0.4"/>
              
              <!-- Outer Shading Canopies -->
              <polygon points="160,200 400,260 640,200 400,140" fill="var(--panel-elevated)" stroke="var(--text-primary)" stroke-width="1.5"/>
              
              <!-- Cantilever Roof Slab -->
              <polygon points="140,190 400,250 660,190 400,130" fill="var(--bg-primary)" stroke="var(--accent)" stroke-width="1.5"/>
              
              <!-- Inner Courtyard Opening -->
              <polygon points="340,200 400,215 460,200 400,185" fill="var(--panel-bg)" stroke="var(--accent)"/>
              
              <!-- Glass Enclosure Walls -->
              <line x1="200" y1="210" x2="200" y2="350" stroke="var(--accent)" stroke-width="1"/>
              <line x1="600" y1="210" x2="600" y2="350" stroke="var(--accent)" stroke-width="1"/>
              <line x1="400" y1="260" x2="400" y2="400" stroke="var(--text-primary)" stroke-width="1.5"/>
            </g>

            <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--text-secondary)" stroke="none">
              <text x="30" y="30">// AXONOMETRIC COURTYARD &amp; REFLECTION POOL</text>
              <text x="30" y="470">OLD AIRPORT RESIDENCE // BOARD-FORMED CONCRETE &amp; WATER COURT</text>
            </g>
          </svg>
        `;

      default:
        return `
          <svg viewBox="0 0 800 500" class="arch-svg-render" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="var(--panel-bg)" />
            <g stroke="currentColor" stroke-width="1.2" opacity="0.7">
              <rect x="100" y="100" width="600" height="300" fill="var(--panel-elevated)" stroke="var(--text-primary)"/>
              <line x1="100" y1="100" x2="700" y2="400" stroke-dasharray="4 4"/>
              <line x1="700" y1="100" x2="100" y2="400" stroke-dasharray="4 4"/>
              <circle cx="400" cy="250" r="80" stroke="var(--accent)" stroke-width="1.5"/>
            </g>
            <g font-family="JetBrains Mono, monospace" font-size="10" fill="var(--accent)" text-anchor="middle">
              <text x="400" y="255">${safeTitle.toUpperCase()}</text>
            </g>
          </svg>
        `;
    }
  }

  // -------------------------------------------------------------------------
  // 3. RENDER WORKS GRID
  // -------------------------------------------------------------------------
  const projectsGrid = document.getElementById('projectsGrid');
  const projectCountDisplay = document.getElementById('projectCountDisplay');
  const workFilters = document.querySelectorAll('.filter-btn');

  function renderProjects(filter = 'all') {
    if (!projectsGrid) return;
    
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    if (projectCountDisplay) {
      projectCountDisplay.textContent = `SHOWING ${filtered.length} OF ${projectsData.length} PROJECTS`;
    }

    projectsGrid.innerHTML = filtered.map(project => `
      <article class="project-card" data-project-id="${project.id}" role="button" tabindex="0" aria-label="View project ${project.title}">
        <div class="project-card-image-wrap sheet-frame" data-interactive-blueprint="true">
          <span class="crop-mark crop-tl"></span>
          <span class="crop-mark crop-tr"></span>
          <span class="crop-mark crop-bl"></span>
          <span class="crop-mark crop-br"></span>
          
          <div class="blueprint-grid-overlay"></div>
          
          <div class="render-canvas">
            ${generateSvgArtwork(project.renderType, project.title)}
          </div>

          <div class="render-badge mono-label">RENDER PLACEHOLDER</div>
        </div>

        <div class="project-card-meta-row mono-label">
          <span class="prj-id">${project.code}</span>
          <span class="prj-typology">${project.typology}</span>
        </div>

        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-excerpt">${project.summary}</p>
        
        <div class="project-specs-inline mono-label">
          <span>YEAR: ${project.year}</span>
          <span>&bull;</span>
          <span>STATUS: ${project.status}</span>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.project-card').forEach(card => {
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
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
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

    // Update document title
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

  // Next Project Click
  if (nextProjectStrip) {
    nextProjectStrip.addEventListener('click', () => {
      const nextIndex = (currentProjectIndex + 1) % projectsData.length;
      navigateToProject(projectsData[nextIndex].id);
    });
  }

  // Back Button Click
  if (backToWorksBtn) {
    backToWorksBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToHome();
    });
  }

  // Brand Name Click
  const brandHomeLink = document.getElementById('brandHomeLink');
  if (brandHomeLink) {
    brandHomeLink.addEventListener('click', (e) => {
      if (projectDetailView.style.display === 'block') {
        e.preventDefault();
        navigateToHome();
      }
    });
  }

  // Handle Initial Hash on Page Load
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
  // 5. THEME SWITCHER (DEEP NAVY BLUEPRINT <--> WARM CONCRETE GREY)
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

  // Load saved theme preference
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
      // Format to Addis Ababa Timezone (Africa/Addis_Ababa, UTC+3)
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
      // Fallback
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const eatTime = new Date(utc + (3600000 * 3));
      clockTimeElement.textContent = `${eatTime.toTimeString().substring(0, 8)} EAT`;
    }
  }

  setInterval(updateAddisTime, 1000);
  updateAddisTime();

  // Dynamic Copyright Year
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------------------
  // 7. CV MODAL HANDLERS
  // -------------------------------------------------------------------------
  const cvModal = document.getElementById('cvModal');
  const openCvBtn = document.getElementById('openCvBtn');
  const cvCloseBtn = document.getElementById('cvCloseBtn');
  const printCvBtn = document.getElementById('printCvBtn');

  function openCv() {
    if (cvModal) {
      cvModal.classList.add('open');
      cvModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCv() {
    if (cvModal) {
      cvModal.classList.remove('open');
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
  // 8. MOBILE DRAWER NAVIGATION
  // -------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
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
  // 9. TRANSMITTAL CONTACT FORM HANDLER
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

      // Simulate formal architectural transmittal transmission
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
          formNotice.textContent = `THANK YOU ${name.toUpperCase()}. TRANSMITTAL CONFIRMED FOR ${type.toUpperCase()}. WE WILL RESPOND WITHIN 24 HOURS.`;
          formNotice.style.color = 'var(--accent)';
        }
        contactForm.reset();
      }, 1000);
    });
  }

  // -------------------------------------------------------------------------
  // 10. SMOOTH SCROLL NAVIGATION HIGHLIGHTING
  // -------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
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
      link.classList.remove('active');
      if (link.getAttribute('data-nav') === current) {
        link.classList.add('active');
      }
    });
  });
});
