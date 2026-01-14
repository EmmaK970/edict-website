// Homepage Statistics Configuration
// Update these values to change the numbers displayed on the homepage

const homepageStats = {
    phdPositions: {
        value: "16",
        label: "PhD Positions"
    },
    euFunding: {
        value: "€4.35M",
        label: "EU Funding"
    },
    partnerOrganisations: {
        value: "26",
        label: "Partner Organisations"
    },
    startDate: {
        value: "March 2026",
        label: "Start"
    }
};

// Function to populate homepage statistics
function populateHomepageStats() {
    const statsContainer = document.querySelector('.hero-stats');

    if (!statsContainer) {
        console.warn('Stats container not found');
        return;
    }

    // Clear existing content
    statsContainer.innerHTML = '';

    // Create stat elements for each configuration item
    Object.values(homepageStats).forEach(stat => {
        const statDiv = document.createElement('div');
        statDiv.className = 'hero-stat';

        const valueDiv = document.createElement('div');
        valueDiv.className = 'hero-stat-value';
        valueDiv.textContent = stat.value;

        const labelDiv = document.createElement('div');
        labelDiv.className = 'hero-stat-label';
        labelDiv.textContent = stat.label;

        statDiv.appendChild(valueDiv);
        statDiv.appendChild(labelDiv);
        statsContainer.appendChild(statDiv);
    });
}

// Initialize stats when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateHomepageStats);
} else {
    populateHomepageStats();
}
