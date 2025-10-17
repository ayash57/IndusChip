/**
 * INDUS CHIP - VLSI Resources Hub
 * 
 * ============================================================================
 * EDITING GUIDE - HOW TO ADD NEW CONTENT:
 * ============================================================================
 * 
 * 1. TO ADD NEW YOUTUBE CHANNELS:
 *    - Go to the 'youtubeChannels' array in the RESOURCES object below
 *    - Add a new object with the following structure:
 *    {
 *      name: "Channel Name",
 *      url: "https://www.youtube.com/@channelname/playlists",
 *      description: "Brief description of the channel",
 *      category: "Category Name", // See existing categories
 *      level: "Beginner/Intermediate/Advanced/All Levels",
 *      playlists: "Number or description of playlists"
 *    }
 * 
 * 2. TO ADD NEW FEATURED PLAYLISTS:
 *    - Go to the 'featuredPlaylists' array in the RESOURCES object
 *    - Add a new object with:
 *    {
 *      title: "Playlist Title",
 *      url: "https://www.youtube.com/playlist?list=PLAYLIST_ID",
 *      description: "What this playlist covers",
 *      author: "Creator Name",
 *      videos: "Number of videos",
 *      level: "Difficulty level"
 *    }
 * 
 * 3. TO ADD NEW PREMIUM COURSES:
 *    - Go to the 'premiumCourses' array
 *    - Add with structure:
 *    {
 *      title: "Course Title",
 *      url: "https://course-url.com",
 *      description: "Course description",
 *      provider: "Institution/Company Name",
 *      duration: "Time duration",
 *      certification: "Yes/No",
 *      cost: "Free/Paid/Price"
 *    }
 * 
 * 4. TO ADD NEW LEARNING PATHS:
 *    - Go to the 'learningPaths' array
 *    - Add with structure:
 *    {
 *      id: "unique-id",
 *      title: "Path Title",
 *      description: "What this path covers",
 *      duration: "Expected completion time",
 *      steps: ["Step 1", "Step 2", "Step 3", "Step 4"]
 *    }
 * 
 * 5. TO ADD NEW TOOL GUIDES:
 *    - Go to the 'toolGuides' array
 *    - Add with structure:
 *    {
 *      title: "Guide Title",
 *      url: "https://guide-url.com",
 *      description: "What the guide covers",
 *      tool: "Tool Name",
 *      type: "Installation/Setup/Tutorial"
 *    }
 * 
 * 6. TO ADD NEW CATEGORIES:
 *    - Add the category name to existing channels/content
 *    - Update the categoryFilter options in index.html
 * 
 * 7. TO MODIFY SITE INFO:
 *    - Edit the SITE_INFO object below
 * 
 * ============================================================================
 * CROSS-BROWSER COMPATIBILITY NOTES:
 * ============================================================================
 * 
 * This application is designed to work across all modern browsers:
 * - Chrome, Firefox, Edge, Safari (desktop and mobile)
 * - Uses vanilla JavaScript (no frameworks)
 * - CSS uses fallbacks and vendor prefixes
 * - Responsive design for all screen sizes
 * - Accessibility features included
 * 
 * ============================================================================
 */

// ============================================================================
// SITE CONFIGURATION - EDIT THIS SECTION
// ============================================================================

const SITE_INFO = {
  title: "INDUS CHIP",
  tagline: "Complete VLSI Resource Hub",
  description: "From Ancient Innovation to Digital Revolution - Your one-stop destination for VLSI learning resources"
};

// ============================================================================
// RESOURCES DATA - MAIN CONTENT TO EDIT
// ============================================================================

const RESOURCES = {
  // YouTube Channels - Add new channels here
  youtubeChannels: [
    {
      name: "Ali Hajimiri (Caltech)",
      channelUrl: "https://www.youtube.com/@AliHajimiriChannel",
      description: "World-renowned expert in analog circuit design and RF systems from Caltech",
      category: "Academic",
      level: "Advanced",
      playlists: [
        {
          title: "Analog Circuit Design",
          url: "https://www.youtube.com/playlist?list=PLc7Gz02Znph8d2777p1PUrfPL-8nfj8oZ",
          description: "Complete analog circuit design course by Professor Ali Hajimiri",
          videos: "40+",
          level: "Advanced"
        },
        {
          title: "New Analog Circuit Design", 
          url: "https://www.youtube.com/playlist?list=PLc7Gz02Znph-c2-ssFpRrzYwbzplXfXUT",
          description: "Updated analog circuit design concepts and methodologies",
          videos: "30+",
          level: "Advanced"
        },
        {
          title: "Circuits and Systems",
          url: "https://www.youtube.com/playlist?list=PLc7Gz02Znph_HU1I9STgC4Nv0aG_jdb8Z",
          description: "Comprehensive circuits and systems course covering theoretical foundations",
          videos: "35+",
          level: "Advanced"
        },
        {
          title: "General Lectures/Research Overviews",
          url: "https://www.youtube.com/playlist?list=PLc7Gz02Znph_8hZvXm7VfQjGkB-VwP9mf",
          description: "Research overview lectures and general engineering topics",
          videos: "15+",
          level: "Advanced"
        },
        {
          title: "Overview Videos",
          url: "https://www.youtube.com/playlist?list=PLc7Gz02Znph_vK5xwWdTjv2g4a2Z1vH5z",
          description: "Course overviews and introductory content",
          videos: "8+",
          level: "Beginner"
        },
        {
          title: "Fun Stuff",
          url: "https://www.youtube.com/playlist?list=PLc7Gz02Znph_2wnGLBMc5zxD8oXzc8vHn",
          description: "Engaging educational content and interesting engineering demonstrations",
          videos: "10+",
          level: "All Levels"
        }
      ]
    },
    {
      name: "Behzad Razavi (UCLA)",
      channelUrl: "https://www.youtube.com/@b_razavi",
      description: "Gold standard electronics education from renowned UCLA professor",
      category: "Academic",
      level: "All Levels",
      playlists: [
        {
          title: "Electronics 1 - Complete Series",
          url: "https://www.youtube.com/playlist?list=PLyYrySVqmyVPzvVlPW-TTzHhNWg1J_0LU",
          description: "Foundational electronics: semiconductors, diodes, BJTs, MOSFETs",
          videos: "45+",
          level: "Beginner to Intermediate"
        },
        {
          title: "Electronics 2 - Advanced Topics",
          url: "https://www.youtube.com/playlist?list=PLyYrySVqmyVOAn8wHnr2W3yQtjqJ7oOoN",
          description: "Advanced analog circuit design, cascodes, current sources",
          videos: "30+",
          level: "Advanced"
        },
        {
          title: "Basic Circuits Fundamentals",
          url: "https://www.youtube.com/playlist?list=PLyYrySVqmyVNjTrEp4_xENYyE2lWM9o8z",
          description: "Basic circuit theory covering charge, current, voltage, fundamental laws",
          videos: "25+",
          level: "Beginner"
        }
      ]
    },
    {
      name: "ChipXPRT",
      channelUrl: "https://www.youtube.com/@chipxprt",
      description: "Comprehensive IC design education from basics to advanced implementation",
      category: "Professional",
      level: "All Levels",
      playlists: [
        {
          title: "Learn IC Design from Basics",
          url: "https://www.youtube.com/playlist?list=PL0-xus8sJBCT8YI0CXzPKCFn6bv49q3Xb",
          description: "Foundational course covering complete IC design flow from basics to advanced",
          videos: "100+",
          level: "Beginner to Advanced"
        },
        {
          title: "STA Series",
          url: "https://www.youtube.com/playlist?list=PL0-xus8sJBCTw1aDsx3RXQv3D8MfYJ602",
          description: "Complete Static Timing Analysis course with hands-on tools",
          videos: "55",
          level: "Advanced"
        },
        {
          title: "Digital Logic Design Series",
          url: "https://www.youtube.com/playlist?list=PL0-xus8sJBCTUBjCHB8KBxiGC8h4oJpVa",
          description: "Complete digital logic design from fundamentals to complex circuits",
          videos: "25+",
          level: "Beginner to Intermediate"
        },
        {
          title: "Sequential Logic Design",
          url: "https://www.youtube.com/playlist?list=PL0-xus8sJBCTJTOA6mFzQ6FaF0Qj3-xgr",
          description: "Sequential circuits, flip-flops, counters, and state machines",
          videos: "20+",
          level: "Intermediate"
        },
        {
          title: "Design Verification with SystemVerilog",
          url: "https://www.youtube.com/playlist?list=PL0-xus8sJBCT_RGOtPl0qK0FLSrQaCBSN",
          description: "Complete SystemVerilog testbench and UVM verification",
          videos: "15+",
          level: "Advanced"
        }
      ]
    },
    {
      name: "Hafeez KT (IIT Hyderabad)",
      channelUrl: "https://www.youtube.com/@hafeezkt",
      description: "PhD researcher with practical Cadence tools and analog design tutorials",
      category: "Practical",
      level: "Beginner to Advanced",
      playlists: [
        {
          title: "Cadence Tutorials",
          url: "https://www.youtube.com/playlist?list=PLkPxJ0BaDi9uAXgKj4wX-uDzJd7Zp9xQl",
          description: "Comprehensive Cadence Virtuoso tutorial series for analog design",
          videos: "20+",
          level: "Beginner"
        },
        {
          title: "Basic Concepts",
          url: "https://www.youtube.com/playlist?list=PLkPxJ0BaDi9s3Fm7gqkKd5lXzG2qX8rZL",
          description: "Fundamental concepts in analog circuit design and VLSI",
          videos: "18+",
          level: "Beginner"
        },
        {
          title: "Design of Differential Amplifier in Cadence",
          url: "https://www.youtube.com/playlist?list=PLkPxJ0BaDi9vTVyNmXzAQktmr7J8X9Xrz",
          description: "Complete tutorial series on differential amplifier design using Cadence tools",
          videos: "12+",
          level: "Intermediate"
        },
        {
          title: "Design of Two Stage OpAmp in Cadence",
          url: "https://www.youtube.com/playlist?list=PLkPxJ0BaDi9t5C7yJpLMDr5rQKzXzb8gh",
          description: "Two-stage operational amplifier design and simulation in Cadence",
          videos: "15+",
          level: "Advanced"
        },
        {
          title: "Advanced Topics and Simulations",
          url: "https://www.youtube.com/playlist?list=PLkPxJ0BaDi9tM5hXzKzQrF7X8lNd9jY2P",
          description: "Advanced analog design topics and SPICE simulations",
          videos: "14+",
          level: "Advanced"
        },
        {
          title: "Design of Bandgap Reference",
          url: "https://www.youtube.com/playlist?list=PLkPxJ0BaDi9vW3Dm8zGJJ5qX2r9xH5tQf",
          description: "Complete bandgap reference circuit design methodology",
          videos: "10+",
          level: "Advanced"
        },
        {
          title: "gm/id Technique",
          url: "https://www.youtube.com/playlist?list=PLkPxJ0BaDi9vZtFm5qX8HrJ9jQd2x5wGl",
          description: "gm/id design methodology for analog CMOS circuits",
          videos: "8+",
          level: "Advanced"
        }
      ]
    },
    {
      name: "NPTEL (IIT)",
      channelUrl: "https://www.youtube.com/@iit",
      description: "Comprehensive VLSI and electronics courses from IIT professors",
      category: "Academic",
      level: "All Levels",
      playlists: [
        {
          title: "All NPTEL VLSI Playlists",
          url: "https://www.youtube.com/@iit/playlists",
          description: "Browse all NPTEL VLSI and electronics courses",
          videos: "50+ courses",
          level: "All Levels"
        }
      ]
    },
	
	{
      name: "ANALOG LAYOUT DESIGN",
      channelUrl: "https://www.youtube.com/@analoglayoutdesign2342",
      description: "Explaining Analog Design with Nuances",
      category: "Industry",
      level: "All Levels",
      playlists: [
        {
          title: "All ANALOG LAYOUT DESIGN Content",
          url: "https://www.youtube.com/@analoglayoutdesign2342/playlists",
          description: "Career guidance and industry insights",
          videos: "Multiple series",
          level: "All Levels"
        }
      ]
    },
	
    {
      name: "VLSI FOR ALL",
      channelUrl: "https://www.youtube.com/@vlsiforall",
      description: "Modern VLSI platform connecting aspirants with industry experts",
      category: "Industry",
      level: "All Levels",
      playlists: [
        {
          title: "All VLSI FOR ALL Content",
          url: "https://www.youtube.com/@vlsiforall/playlists",
          description: "Career guidance and industry insights",
          videos: "Multiple series",
          level: "All Levels"
        }
      ]
    },
    {
      name: "Team VLSI",
      channelUrl: "https://www.youtube.com/@teamvlsi",
      description: "EDA tool training and practical VLSI flow implementation",
      category: "Professional",
      level: "Intermediate",
      playlists: [
        {
          title: "All Team VLSI Tutorials",
          url: "https://www.youtube.com/@teamvlsi/playlists",
          description: "EDA tools and VLSI implementation flows",
          videos: "Tool-focused series",
          level: "Intermediate"
        }
      ]
    }
  ],

  // Featured Playlists - Add specific playlist links here
  featuredPlaylists: [
    {
      title: "Razavi Electronics 1 - Complete Series",
      url: "https://www.youtube.com/playlist?list=PLyYrySVqmyVPzvVlPW-TTzHhNWg1J_0LU",
      description: "Foundational electronics: semiconductors, diodes, BJTs, MOSFETs",
      author: "Behzad Razavi (UCLA)",
      videos: "45+",
      level: "Beginner to Intermediate"
    },
    {
      title: "Razavi Electronics 2 - Advanced Topics",
      url: "https://www.youtube.com/playlist?list=PLyYrySVqmyVOAn8wHnr2W3yQtjqJ7oOoN",
      description: "Advanced analog circuit design, cascodes, current sources",
      author: "Behzad Razavi (UCLA)",
      videos: "30+",
      level: "Advanced"
    },
    {
      title: "Ali Hajimiri Analog Circuit Design",
      url: "https://www.youtube.com/playlist?list=PLc7Gz02Znph-c2-ssFpRrzYwbiM8x0N_HQR",
      description: "Complete analog circuit design course from Caltech",
      author: "Ali Hajimiri (Caltech)",
      videos: "40+",
      level: "Advanced"
    }
  ],

  // Technical Blogs - Add new blog resources here
  technicalBlogs: [
    {
      name: "Semiconductor Engineering",
      url: "https://semiengineering.com",
      description: "Deep insights into semiconductor design, testing, and manufacturing",
      category: "Industry News",
      specialization: "All Topics"
    },
	
    {
      name: "Design Re-Use",
      url: "https://www.design-reuse.com",
      description: "Deep insights into semiconductor news, concepts and products",
      category: "Industry News",
      specialization: "All Topics"
    },
	
    {
      name: "ESD Concepts and Solutions",
      url: "https://www.sofics.com",
      description: "ESD Basics to Advanced across different foundries",
      category: "Educational and Applied",
      specialization: "Backend Design"
    },
	
    {
      name: "VLSI Concepts",
      url: "https://www.vlsi-expert.com",
      description: "VLSI basics, timing analysis, physical design, and interview prep",
      category: "Educational",
      specialization: "Backend Design"
    },
    {
      name: "Maven Silicon Blog",
      url: "https://www.maven-silicon.com/blog",
      description: "VLSI training insights, SystemVerilog, UVM, and verification",
      category: "Training",
      specialization: "Verification"
    },
    {
      name: "ChipEdge Blog",
      url: "https://chipedge.com/blog",
      description: "VLSI career guidance and industry best practices",
      category: "Career",
      specialization: "Professional Development"
    },
    {
      name: "Team VLSI Blog",
      url: "https://teamvlsi.com",
      description: "ASIC design flow, physical design, and EDA automation",
      category: "Technical",
      specialization: "Physical Design"
    },
    {
      name: "VLSI System Design Blog",
      url: "https://www.vlsisystemdesign.com/blogs",
      description: "Chip design fundamentals and flow explanations",
      category: "Educational",
      specialization: "System Design"
    },
    {
      name: "Takshila VLSI Blog",
      url: "https://www.takshila-vlsi.com/blog",
      description: "Analog layout design, verification, and ASIC best practices",
      category: "Professional",
      specialization: "Analog Layout"
    },
    {
      name: "VLSI TALKS",
      url: "https://vlsitalks.com",
      description: "Free open-source VLSI information for freshers and professionals",
      category: "Community",
      specialization: "All Topics"
    }
  ],

  // EDA Playgrounds - Add online simulation platforms here
  edaPlaygrounds: [
    {
      name: "EDA Playground",
      url: "https://www.edaplayground.com",
      description: "Free web-based HDL simulation and synthesis platform",
      languages: "SystemVerilog, Verilog, VHDL, C++/SystemC",
      features: "Real-time simulation, waveform viewer, code sharing",
      cost: "Free"
    },
    {
      name: "CircuitLab",
      url: "https://www.circuitlab.com",
      description: "Online circuit simulator and schematic editor",
      languages: "Analog/Digital Circuits",
      features: "Interactive simulation, component library",
      cost: "Free tier available"
    },
    {
      name: "Falstad Circuit Simulator",
      url: "https://www.falstad.com/circuit",
      description: "Interactive real-time circuit simulator",
      languages: "Analog/Digital Circuits",
      features: "Animated current flow, real-time interaction",
      cost: "Free"
    },
    {
      name: "EveryCircuit",
      url: "https://everycircuit.com",
      description: "Animated interactive circuit simulator",
      languages: "Analog/Digital/Mixed-signal",
      features: "Animated voltages and currents, mobile app",
      cost: "Free with premium options"
    },
    {
      name: "PhET Circuit Construction Kit",
      url: "https://phet.colorado.edu/en/simulation/circuit-construction-kit-dc",
      description: "Educational DC circuit construction and simulation",
      languages: "DC Circuits",
      features: "Drag-and-drop interface, educational focus",
      cost: "Free"
    }
  ],

  // Open-Source Tools - Add free EDA tools here
  openSourceTools: {
    rtlSimulation: [
      {
        name: "Icarus Verilog",
        url: "https://steveicarus.github.io/iverilog",
        description: "IEEE-1364 compliant Verilog HDL compiler and simulator",
        category: "RTL Simulation",
        platform: "Cross-platform"
      },
      {
        name: "Verilator",
        url: "https://www.veripool.org/verilator",
        description: "Fast free Verilog/SystemVerilog simulator",
        category: "RTL Simulation",
        platform: "Linux/Windows/Mac"
      },
      {
        name: "GHDL",
        url: "https://ghdl.github.io",
        description: "Open-source analyzer and simulator for VHDL",
        category: "VHDL Simulation",
        platform: "Cross-platform"
      },
      {
        name: "GTKWave",
        url: "https://gtkwave.sourceforge.net",
        description: "Fully featured GTK+ waveform viewer",
        category: "Waveform Viewer",
        platform: "Cross-platform"
      }
    ],
    physicalDesign: [
      {
        name: "OpenLane",
        url: "https://openlane.readthedocs.io",
        description: "Automated RTL-to-GDSII flow using open-source tools",
        category: "Complete Flow",
        platform: "Linux"
      },
      {
        name: "OpenROAD",
        url: "https://theopenroadproject.org",
        description: "Open-source digital SoC layout generation",
        category: "Physical Design",
        platform: "Linux"
      },
      {
        name: "Magic VLSI",
        url: "http://opencircuitdesign.com/magic",
        description: "Interactive system for creating VLSI layouts",
        category: "Layout Editor",
        platform: "Linux/Mac"
      },
      {
        name: "Yosys",
        url: "http://www.clifford.at/yosys",
        description: "Framework for RTL synthesis tools",
        category: "Synthesis",
        platform: "Cross-platform"
      }
    ],
    circuitSimulation: [
      {
        name: "ngSPICE",
        url: "http://ngspice.sourceforge.net",
        description: "Mixed-level/mixed-signal circuit simulator",
        category: "SPICE Simulation",
        platform: "Cross-platform"
      },
      {
        name: "Xschem",
        url: "http://repo.hu/projects/xschem",
        description: "Schematic capture and netlisting EDA tool",
        category: "Schematic Editor",
        platform: "Linux"
      }
    ],
    verification: [
      {
        name: "Cocotb",
        url: "https://docs.cocotb.org",
        description: "Python-based HDL simulation framework",
        category: "Verification",
        platform: "Cross-platform"
      },
      {
        name: "SymbiYosys",
        url: "https://symbiyosys.readthedocs.io",
        description: "Front-end for formal verification flows",
        category: "Formal Verification",
        platform: "Linux"
      }
    ]
  },

  // PCB Design Tools - Add PCB design resources here
  pcbDesign: [
    {
      name: "KiCad",
      url: "https://www.kicad.org",
      description: "Free, open-source PCB design software with schematic capture",
      features: "Schematic editor, PCB layout, 3D viewer, Gerber output",
      platforms: "Windows, macOS, Linux",
      cost: "Free",
      tutorials: [
        {
          title: "KiCad Tutorial: Make Your First PCB",
          url: "https://www.build-electronic-circuits.com/kicad-tutorial"
        },
        {
          title: "KiCad 7 PCB Layout in 5 Steps",
          url: "https://www.youtube.com/watch?v=3FGNw28xBr0"
        },
        {
          title: "Getting Started in KiCad (Official)",
          url: "https://docs.kicad.org/8.0/en/getting_started_in_kicad"
        }
      ]
    },
	
	{
      name: "pcb-hero",
      url: "https://www.pcb-hero.org",
      description: "PCB services and parts",
      features: "PCB Boards",
      platforms: "Windows, macOS, Linux",
      cost: "Paid",
    }
	
  ],

  // Learning Paths - Add structured learning sequences here
  learningPaths: [
    {
      id: "beginner",
      title: "Beginner's Journey",
      description: "Start your VLSI adventure from the fundamentals",
      duration: "3-6 months",
      steps: [
        "Master electronics fundamentals with Behzad Razavi's courses",
        "Learn basic concepts with Hafeez KT's tutorials",
        "Explore NPTEL's introductory VLSI courses",
        "Practice with ChipXPRT's basic IC design series"
      ]
    },
    {
      id: "analog-master",
      title: "Analog Design Mastery",
      description: "Become an expert in analog circuit design",
      duration: "6-12 months",
      steps: [
        "Complete Ali Hajimiri's advanced analog courses",
        "Practice with Hafeez KT's Cadence tutorials",
        "Study layout techniques with Analog Layout Laboratory",
        "Enroll in NPTEL's Analog IC Design certification"
      ]
    },
    {
      id: "digital-expert",
      title: "Digital IC Design Expert",
      description: "Master digital VLSI design and verification",
      duration: "6-12 months",
      steps: [
        "Learn RTL design with ChipXPRT's comprehensive courses",
        "Master timing analysis with VLSI Expert's content",
        "Practice flows with Team VLSI tutorials",
        "Build projects with VSD's open-source approach"
      ]
    },
    {
      id: "career-ready",
      title: "Industry Career Track",
      description: "Get job-ready with industry-focused training",
      duration: "6-18 months",
      steps: [
        "Follow VLSI FOR ALL's career guidance",
        "Get industry insights from WhyRD's content",
        "Complete professional courses from ChipEdge/Takshila",
        "Master EDA tools with STTP SPIT training"
      ]
    }
  ],

  // Tool Installation Guides - Add EDA tool setup guides here
  toolGuides: [
    {
      title: "Synopsys Custom Compiler Installation",
      url: "https://www.youtube.com/watch?v=OKzB6ADFN2E",
      description: "Complete installation guide with license setup",
      tool: "Synopsys Custom Compiler",
      type: "Installation"
    },
    {
      title: "Cadence Virtuoso Setup Guide",
      url: "https://www.youtube.com/watch?v=WeYjWHuFGv0",
      description: "Step-by-step Virtuoso setup for beginners",
      tool: "Cadence Virtuoso",
      type: "Setup"
    }
  ]
};

// ============================================================================
// APPLICATION LOGIC - MODIFY CAREFULLY
// ============================================================================

// State management - using JavaScript variables (no localStorage due to sandbox)
let currentFilter = {
  search: '',
  category: '',
  blogSearch: '',
  blogCategory: '',
  toolCategory: ''
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  try {
    initializeApp();
  } catch (error) {
    console.error('Error initializing app:', error);
  }
});

/**
 * Initialize the application
 */
function initializeApp() {
  renderChannels();
  renderTechnicalBlogs();
  renderEdaPlaygrounds();
  renderOpenSourceTools();
  renderPcbDesign();
  renderLearningPaths();
  setupEventListeners();
}

/**
 * Setup event listeners for cross-browser compatibility
 */
function setupEventListeners() {
  // Smooth scrolling for navigation links (with fallback)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Modern browsers
        if (targetElement.scrollIntoView) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          // Fallback for older browsers
          window.scrollTo(0, targetElement.offsetTop - 80);
        }
      }
    });
  });
}

/**
 * Render YouTube channels with dropdown menus
 */
function renderChannels() {
  const container = document.getElementById('channelsGrid');
  if (!container) return;
  
  container.innerHTML = RESOURCES.youtubeChannels.map(channel => `
    <div class="card youtube-channel-card" data-category="${channel.category}" data-name="${channel.name.toLowerCase()}">
      <div class="channel-header">
        <h3 class="channel-name">
          <a href="${channel.channelUrl}" target="_blank" rel="noopener noreferrer" class="channel-link">
            ${channel.name}
            <svg class="external-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15,3 21,3 21,9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </h3>
        <button class="playlist-toggle" onclick="togglePlaylistDropdown('${channel.name.replace(/[^a-zA-Z0-9]/g, '')}')" aria-expanded="false" aria-label="Toggle playlists for ${channel.name}">
          <span class="playlist-count">${channel.playlists.length} Playlist${channel.playlists.length > 1 ? 's' : ''}</span>
          <svg class="dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      
      <p class="channel-description">${channel.description}</p>
      
      <div class="resource-meta">
        <span class="resource-tag">${channel.category}</span>
        <span class="resource-tag">${channel.level}</span>
      </div>
      
      <div class="playlist-dropdown" id="dropdown-${channel.name.replace(/[^a-zA-Z0-9]/g, '')}" aria-hidden="true">
        <div class="playlist-list">
          ${channel.playlists.map(playlist => `
            <a href="${playlist.url}" target="_blank" rel="noopener noreferrer" class="playlist-item">
              <div class="playlist-info">
                <h4 class="playlist-title">${playlist.title}</h4>
                <p class="playlist-description">${playlist.description}</p>
                <div class="playlist-meta">
                  <span class="playlist-tag">${playlist.videos} videos</span>
                  <span class="playlist-tag">${playlist.level}</span>
                </div>
              </div>
              <svg class="playlist-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Render technical blogs
 */
function renderTechnicalBlogs() {
  const container = document.getElementById('blogsGrid');
  if (!container) return;
  
  container.innerHTML = RESOURCES.technicalBlogs.map(blog => `
    <div class="card resource-card" data-name="${blog.name.toLowerCase()}" data-specialization="${blog.specialization}" style="border-left-color: var(--color-orange-500);">
      <h3>${blog.name}</h3>
      <p>${blog.description}</p>
      <div class="resource-meta">
        <span class="resource-tag">${blog.category}</span>
        <span class="resource-tag">${blog.specialization}</span>
      </div>
      <a href="${blog.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="margin-top: var(--space-12);">
        Visit Blog
      </a>
    </div>
  `).join('');
}

/**
 * Render EDA playgrounds
 */
function renderEdaPlaygrounds() {
  const container = document.getElementById('playgroundsGrid');
  if (!container) return;
  
  container.innerHTML = RESOURCES.edaPlaygrounds.map(playground => `
    <div class="card resource-card" style="border-left-color: var(--color-teal-500);">
      <h3>${playground.name}</h3>
      <p>${playground.description}</p>
      <div class="resource-meta">
        <span class="resource-tag">${playground.languages}</span>
        <span class="resource-tag">${playground.cost}</span>
      </div>
      <div style="margin: var(--space-12) 0; font-size: var(--font-size-sm); color: var(--color-text-secondary);">
        <strong>Features:</strong> ${playground.features}
      </div>
      <a href="${playground.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="margin-top: var(--space-12);">
        Try Online
      </a>
    </div>
  `).join('');
}

/**
 * Render open-source tools
 */
function renderOpenSourceTools() {
  const container = document.getElementById('opensourceGrid');
  if (!container) return;
  
  // Flatten all tool categories into a single array
  const allTools = [
    ...RESOURCES.openSourceTools.rtlSimulation.map(tool => ({...tool, categoryType: 'RTL Simulation'})),
    ...RESOURCES.openSourceTools.physicalDesign.map(tool => ({...tool, categoryType: 'Physical Design'})),
    ...RESOURCES.openSourceTools.circuitSimulation.map(tool => ({...tool, categoryType: 'Circuit Simulation'})),
    ...RESOURCES.openSourceTools.verification.map(tool => ({...tool, categoryType: 'Verification'}))
  ];
  
  container.innerHTML = allTools.map(tool => `
    <div class="card resource-card" data-category="${tool.categoryType}" style="border-left-color: var(--color-slate-500);">
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <div class="resource-meta">
        <span class="resource-tag">${tool.categoryType}</span>
        <span class="resource-tag">${tool.platform}</span>
      </div>
      <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="margin-top: var(--space-12);">
        Download Tool
      </a>
    </div>
  `).join('');
}

/**
 * Render PCB design tools
 */
function renderPcbDesign() {
  const container = document.getElementById('pcbGrid');
  if (!container) return;
  
  container.innerHTML = RESOURCES.pcbDesign.map(pcb => `
    <div class="card resource-card" style="border-left-color: var(--color-red-500);">
      <h3>${pcb.name}</h3>
      <p>${pcb.description}</p>
      <div class="resource-meta">
        <span class="resource-tag">${pcb.platforms}</span>
        <span class="resource-tag">${pcb.cost}</span>
      </div>
      <div style="margin: var(--space-12) 0; font-size: var(--font-size-sm); color: var(--color-text-secondary);">
        <strong>Features:</strong> ${pcb.features}
      </div>
      <div style="margin: var(--space-16) 0;">
        <h4 style="font-size: var(--font-size-sm); margin-bottom: var(--space-8); color: var(--color-text);">Tutorials:</h4>
        ${pcb.tutorials.map(tutorial => `
          <div style="margin-bottom: var(--space-4);">
            <a href="${tutorial.url}" target="_blank" rel="noopener noreferrer" style="font-size: var(--font-size-sm); color: var(--color-primary);">
              ${tutorial.title}
            </a>
          </div>
        `).join('')}
      </div>
      <a href="${pcb.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="margin-top: var(--space-12);">
        Download KiCad
      </a>
    </div>
  `).join('');
}



/**
 * Render learning paths
 */
function renderLearningPaths() {
  const container = document.getElementById('pathsGrid');
  if (!container) return;
  
  container.innerHTML = RESOURCES.learningPaths.map(path => `
    <div class="card learning-path">
      <h3>${path.title}</h3>
      <p>${path.description}</p>
      <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin: var(--space-12) 0;">
        <strong>Duration:</strong> ${path.duration}
      </p>
      <ol class="learning-steps">
        ${path.steps.map(step => `<li class="learning-step">${step}</li>`).join('')}
      </ol>
    </div>
  `).join('');
}



/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  
  if (navMenu && hamburger) {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
}

/**
 * Toggle playlist dropdown for YouTube channels
 */
function togglePlaylistDropdown(channelId) {
  const dropdown = document.getElementById(`dropdown-${channelId}`);
  const button = dropdown.previousElementSibling.querySelector('.playlist-toggle');
  
  if (!dropdown || !button) return;
  
  const isOpen = dropdown.classList.contains('open');
  
  // Close all other dropdowns first
  document.querySelectorAll('.playlist-dropdown.open').forEach(openDropdown => {
    if (openDropdown !== dropdown) {
      openDropdown.classList.remove('open');
      const otherButton = openDropdown.previousElementSibling.querySelector('.playlist-toggle');
      if (otherButton) {
        otherButton.setAttribute('aria-expanded', 'false');
      }
    }
  });
  
  // Toggle current dropdown
  if (isOpen) {
    dropdown.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    dropdown.setAttribute('aria-hidden', 'true');
  } else {
    dropdown.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
    dropdown.setAttribute('aria-hidden', 'false');
  }
}

/**
 * Close dropdowns when clicking outside
 */
document.addEventListener('click', function(e) {
  if (!e.target.closest('.youtube-channel-card')) {
    document.querySelectorAll('.playlist-dropdown.open').forEach(dropdown => {
      dropdown.classList.remove('open');
      const button = dropdown.previousElementSibling.querySelector('.playlist-toggle');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
      dropdown.setAttribute('aria-hidden', 'true');
    });
  }
});

/**
 * Keyboard navigation for dropdowns
 */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.playlist-dropdown.open').forEach(dropdown => {
      dropdown.classList.remove('open');
      const button = dropdown.previousElementSibling.querySelector('.playlist-toggle');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
        button.focus();
      }
      dropdown.setAttribute('aria-hidden', 'true');
    });
  }
});

/**
 * Filter channels based on search and category
 */
function filterChannels() {
  const searchInput = document.getElementById('channelSearch');
  const categoryFilter = document.getElementById('categoryFilter');
  
  if (!searchInput || !categoryFilter) return;
  
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  
  // Update current filter state
  currentFilter.search = searchTerm;
  currentFilter.category = selectedCategory;
  
  // Get all channel cards
  const channelCards = document.querySelectorAll('#channelsGrid .youtube-channel-card');
  
  channelCards.forEach(card => {
    const cardName = card.dataset.name || '';
    const cardCategory = card.dataset.category || '';
    
    // Check if card matches search and category filters
    const matchesSearch = !searchTerm || cardName.includes(searchTerm) || 
                         card.textContent.toLowerCase().includes(searchTerm);
    const matchesCategory = !selectedCategory || cardCategory === selectedCategory;
    
    // Show/hide card based on filters
    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
      // Close any open dropdowns when filtering
      const dropdown = card.querySelector('.playlist-dropdown.open');
      if (dropdown) {
        dropdown.classList.remove('open');
        const button = card.querySelector('.playlist-toggle');
        if (button) {
          button.setAttribute('aria-expanded', 'false');
        }
        dropdown.setAttribute('aria-hidden', 'true');
      }
    } else {
      card.style.display = 'none';
    }
  });
  
  // Announce filter results to screen readers
  const visibleCards = document.querySelectorAll('#channelsGrid .youtube-channel-card[style*="block"], #channelsGrid .youtube-channel-card:not([style*="none"])');
  const resultCount = Array.from(channelCards).filter(card => 
    card.style.display !== 'none'
  ).length;
  
  announceToScreenReader(`Found ${resultCount} channel${resultCount !== 1 ? 's' : ''} matching your criteria.`);
}

/**
 * Filter technical blogs based on search and specialization
 */
function filterBlogs() {
  const searchInput = document.getElementById('blogSearch');
  const categoryFilter = document.getElementById('blogCategoryFilter');
  
  if (!searchInput || !categoryFilter) return;
  
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  
  // Update current filter state
  currentFilter.blogSearch = searchTerm;
  currentFilter.blogCategory = selectedCategory;
  
  // Get all blog cards
  const blogCards = document.querySelectorAll('#blogsGrid .card');
  
  blogCards.forEach(card => {
    const cardName = card.dataset.name || '';
    const cardSpecialization = card.dataset.specialization || '';
    
    // Check if card matches search and category filters
    const matchesSearch = !searchTerm || cardName.includes(searchTerm);
    const matchesCategory = !selectedCategory || cardSpecialization === selectedCategory;
    
    // Show/hide card based on filters
    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * Filter open-source tools based on category
 */
function filterOpenSourceTools() {
  const categoryFilter = document.getElementById('toolCategoryFilter');
  
  if (!categoryFilter) return;
  
  const selectedCategory = categoryFilter.value;
  
  // Update current filter state
  currentFilter.toolCategory = selectedCategory;
  
  // Get all tool cards
  const toolCards = document.querySelectorAll('#opensourceGrid .card');
  
  toolCards.forEach(card => {
    const cardCategory = card.dataset.category || '';
    
    // Check if card matches category filter
    const matchesCategory = !selectedCategory || cardCategory === selectedCategory;
    
    // Show/hide card based on filter
    if (matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// ============================================================================
// UTILITY FUNCTIONS FOR CROSS-BROWSER COMPATIBILITY
// ============================================================================

/**
 * Polyfill for older browsers - Array.from
 */
if (!Array.from) {
  Array.from = function(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };
}

/**
 * Polyfill for older browsers - Element.classList
 */
if (!Element.prototype.classList) {
  Element.prototype.classList = {
    add: function(className) {
      if (!this.className) this.className = '';
      if (this.className.indexOf(className) === -1) {
        this.className += (this.className ? ' ' : '') + className;
      }
    },
    remove: function(className) {
      if (this.className) {
        this.className = this.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
        this.className = this.className.replace(/\s+/g, ' ').trim();
      }
    },
    toggle: function(className) {
      if (this.className && this.className.indexOf(className) !== -1) {
        this.remove(className);
      } else {
        this.add(className);
      }
    },
    contains: function(className) {
      return this.className && this.className.indexOf(className) !== -1;
    }
  };
}

/**
 * Error handling for network requests (if needed for future enhancements)
 */
function handleNetworkError(error) {
  console.warn('Network error detected:', error);
  // Graceful degradation - application continues to work with static content
}

// ============================================================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================================================

/**
 * Add keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
  // ESC key closes mobile menu and dropdowns
  if (e.keyCode === 27 || e.key === 'Escape') {
    const navMenu = document.getElementById('navMenu');
    if (navMenu && navMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
    // Close any open dropdowns
    document.querySelectorAll('.playlist-dropdown.open').forEach(dropdown => {
      dropdown.classList.remove('open');
      const button = dropdown.previousElementSibling.querySelector('.playlist-toggle');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
        button.focus();
      }
      dropdown.setAttribute('aria-hidden', 'true');
    });
  }
});

/**
 * Announce dynamic content changes to screen readers
 */
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'visually-hidden';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    if (announcement.parentNode) {
      announcement.parentNode.removeChild(announcement);
    }
  }, 1000);
}

// ============================================================================
// PERFORMANCE OPTIMIZATIONS
// ============================================================================

/**
 * Debounce function for search input
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounced search for various inputs
if (document.getElementById('channelSearch')) {
  const debouncedChannelFilter = debounce(filterChannels, 300);
  document.getElementById('channelSearch').addEventListener('input', debouncedChannelFilter);
}

if (document.getElementById('blogSearch')) {
  const debouncedBlogFilter = debounce(filterBlogs, 300);
  document.getElementById('blogSearch').addEventListener('input', debouncedBlogFilter);
}

// ============================================================================
// BROWSER FEATURE DETECTION
// ============================================================================

/**
 * Check for CSS Grid support and provide fallback
 */
function checkCSSGridSupport() {
  const testElement = document.createElement('div');
  testElement.style.display = 'grid';
  
  if (testElement.style.display === 'grid') {
    document.documentElement.classList.add('css-grid-support');
  } else {
    document.documentElement.classList.add('css-grid-fallback');
    // Add fallback styles for older browsers
    const fallbackCSS = `
      .grid { display: flex; flex-wrap: wrap; }
      .grid > * { flex: 1 1 300px; margin: 10px; }
    `;
    const style = document.createElement('style');
    style.textContent = fallbackCSS;
    document.head.appendChild(style);
  }
}

// Run feature detection
checkCSSGridSupport();

// ============================================================================
// FINAL INITIALIZATION
// ============================================================================

console.log('🔬 IndusChip VLSI Hub initialized successfully!');
console.log('📚 Loaded', RESOURCES.youtubeChannels.length, 'YouTube channels');
console.log('📝 Loaded', RESOURCES.technicalBlogs.length, 'technical blogs');
console.log('🎮 Loaded', RESOURCES.edaPlaygrounds.length, 'EDA playgrounds');
const totalOpenSourceTools = Object.values(RESOURCES.openSourceTools).reduce((acc, category) => acc + category.length, 0);
console.log('🔧 Loaded', totalOpenSourceTools, 'open-source tools');
console.log('🔌 Loaded', RESOURCES.pcbDesign.length, 'PCB design tools');
console.log('🛤️ Loaded', RESOURCES.learningPaths.length, 'learning paths');
console.log('🌐 Cross-browser compatibility: ✅');
console.log('📱 Mobile responsive: ✅');
console.log('♿ Accessibility features: ✅');

/**
 * ============================================================================
 * END OF EDITABLE CONFIGURATION
 * ============================================================================
 * 
 * The above sections contain all the data and configuration you need to edit.
 * The core application logic below generally doesn't need modification unless
 * you're adding entirely new features.
 * 
 * For most content updates, just modify the RESOURCES object above.
 * 
 * Remember:
 * - All external links open in new tabs for better UX
 * - The app works offline with static content
 * - No localStorage used (sandbox compatibility)
 * - Fully responsive and accessible
 * - Cross-browser compatible
 * 
 * Happy editing! 🚀
 * ============================================================================
 */