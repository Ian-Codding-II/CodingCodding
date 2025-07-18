document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: '3D Modeling',
      description: 'Creating detailed 3D models for games and animations using Blender.',
      status: 'in-progress',
      thumbnail: 'assets/images/project1.jpg',
      lastUpdated: '2025-07-18',
      updates: [
        '2025-07-18: Started brainstorming posible game setups for implementation.',
      ]
    },
    {
      title: 'Design Thinking and impellers',
      description: 'Applying design thinking principles to solve user-centered problems.',
      status: 'completed',
      thumbnail: 'assets/images/designThinking.png',
      lastUpdated: '2025-06-20',
      updates: [
        '2025-06-20: Presented final design solution.',
        '2025-06-10: Conducted user testing sessions.'
      ]
    },
    {
      title: 'Coding & Problem Solving',
      description: 'Building web apps and solving algorithmic challenges with JavaScript.',
      status: 'in-progress',
      thumbnail: 'assets/images/project3.jpg',
      lastUpdated: '2025-06-10',
      updates: [
        '2025-07-10: Implemented new feature for web app.',
        '2025-07-05: Solved LeetCode medium problem.'
      ]
    }
  ];

  const projectGrid = document.getElementById('project-grid');
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalUpdates = document.getElementById('modal-updates');
  const modalClose = document.querySelector('.modal-close');

  // Render project cards
  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title} thumbnail">
      <h2>${project.title}</h2>
      <span class="status-badge ${project.status}">${project.status.replace('-', ' ')}</span>
      <p>${project.description}</p>
      <p class="update-log">Last Updated: ${project.lastUpdated}</p>
      <button class="read-more" data-title="${project.title}">Read More</button>
    `;
    projectGrid.appendChild(card);
  });

  // Handle "Read More" button clicks
  projectGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('read-more')) {
      const title = e.target.getAttribute('data-title');
      const project = projects.find(p => p.title === title);
      if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalUpdates.innerHTML = project.updates.map(update => `<li>${update}</li>`).join('');
        modal.style.display = 'flex';
      }
    }
  });

  // Close modal
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
});