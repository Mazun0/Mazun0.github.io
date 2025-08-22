const sections = [
    { id: "hero", label: "Hero", color: "#0078D7" },
    { id: "about", label: "About", color: "#E91E63" },
    { id: "projects", label: "Projects", color: "#4CAF50" },
    { id: "blog", label: "Blog", color: "#FFC107" },
    { id: "current", label: "Now", color: "#00BCD4" }, // 👈 Add this!
    { id: "contact", label: "Contact", color: "#9C27B0" }
  ];
  
  
  const sidebar = document.querySelector('.metro-line-wrapper');
  const metroLine = document.createElement('div');
  metroLine.classList.add('metro-line');
  sidebar.appendChild(metroLine);
  
  const blinkingDot = document.createElement('div');
  blinkingDot.classList.add('blinking-dot');
  sidebar.appendChild(blinkingDot);
  
  const dotData = [];
  
  sections.forEach(({ id, label, color }) => {
    const dot = document.createElement('div');
    dot.classList.add('metro-dot');
    dot.style.backgroundColor = color;
  
    const labelEl = document.createElement('div');
    labelEl.classList.add('metro-label');
    labelEl.textContent = label;
    labelEl.style.left = '80px';  // or even 90px

  
    dot.addEventListener('click', () => {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
  
    sidebar.appendChild(dot);
    sidebar.appendChild(labelEl);
  
    dotData.push({ id, dot, labelEl });
  });
  
  function updatePositions() {
    const sidebarTop = sidebar.getBoundingClientRect().top + window.scrollY;
  
    let firstDotTop = null;
    let lastDotTop = null;
  

    
    dotData.forEach(({ id, dot, labelEl }) => {
      const section = document.getElementById(id);
      if (!section) return;
  
      // Get section top relative to document
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  
      // Calculate top relative to sidebar
      const relativeTop = sectionTop - sidebarTop + dot.offsetHeight / 2;
  
      dot.style.top = `${relativeTop}px`;
      labelEl.style.top = `${relativeTop}px`;
  
      if (firstDotTop === null) firstDotTop = relativeTop;
      lastDotTop = relativeTop;
    });
  
    // Stretch the line from first to last dot centers
    const metroLine = sidebar.querySelector('.metro-line');
    metroLine.style.top = `${firstDotTop}px`;
    metroLine.style.height = `${lastDotTop - firstDotTop}px`;
  }
  
  function updateActiveDot() {
    const scrollMiddle = window.scrollY + window.innerHeight / 2;
    let closest = null;
    let closestDist = Infinity;
  
    dotData.forEach(({ id, dot, labelEl }) => {
      const section = document.getElementById(id);
      const sectionMiddle = section.offsetTop + section.offsetHeight / 2;
      const dist = Math.abs(scrollMiddle - sectionMiddle);
      dot.classList.remove('active');
      if (dist < closestDist) {
        closestDist = dist;
        closest = dot;
      }
    });
  
    if (closest) {
        closest.classList.add('active');
        const dotRect = closest.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();
        const topPosition = dotRect.top + dotRect.height / 2 - sidebarRect.top;
        blinkingDot.style.top = `${topPosition}px`;
          
          
    }
  }
  
  window.addEventListener('scroll', updateActiveDot);
  window.addEventListener('resize', () => {
    updatePositions();
    updateActiveDot();
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    updatePositions();
    updateActiveDot();
  });
  