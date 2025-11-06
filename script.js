// API Configuration
const API_KEY = 'k0gwtb25zsf0';
const API_BASE_URL = 'https://www.balldontlie.io/api/v1';
const USE_MOCK_DATA = false; // Set to true to use mock data instead of API

// Mock data for demonstration (works offline)
const MOCK_PLAYERS_DATA = [
    { id: 1, first_name: 'LeBron', last_name: 'James', position: 'F', team: { full_name: 'Los Angeles Lakers' }, seasonStats: { pts: 25.8, reb: 7.3, ast: 8.3, stl: 1.3, blk: 0.6, games_played: 71 } },
    { id: 2, first_name: 'Stephen', last_name: 'Curry', position: 'G', team: { full_name: 'Golden State Warriors' }, seasonStats: { pts: 26.4, reb: 4.5, ast: 5.1, stl: 0.8, blk: 0.4, games_played: 74 } },
    { id: 3, first_name: 'Kevin', last_name: 'Durant', position: 'F', team: { full_name: 'Phoenix Suns' }, seasonStats: { pts: 27.1, reb: 6.7, ast: 5.0, stl: 0.9, blk: 1.2, games_played: 75 } },
    { id: 4, first_name: 'Giannis', last_name: 'Antetokounmpo', position: 'F', team: { full_name: 'Milwaukee Bucks' }, seasonStats: { pts: 30.4, reb: 11.5, ast: 6.5, stl: 1.2, blk: 1.1, games_played: 73 } },
    { id: 5, first_name: 'Luka', last_name: 'Doncic', position: 'G', team: { full_name: 'Dallas Mavericks' }, seasonStats: { pts: 33.9, reb: 9.2, ast: 9.8, stl: 1.4, blk: 0.5, games_played: 70 } },
    { id: 6, first_name: 'Jayson', last_name: 'Tatum', position: 'F', team: { full_name: 'Boston Celtics' }, seasonStats: { pts: 26.9, reb: 8.1, ast: 4.9, stl: 1.0, blk: 0.6, games_played: 74 } },
    { id: 7, first_name: 'Joel', last_name: 'Embiid', position: 'C', team: { full_name: 'Philadelphia 76ers' }, seasonStats: { pts: 34.7, reb: 11.0, ast: 5.6, stl: 1.2, blk: 1.7, games_played: 66 } },
    { id: 8, first_name: 'Nikola', last_name: 'Jokic', position: 'C', team: { full_name: 'Denver Nuggets' }, seasonStats: { pts: 26.4, reb: 12.4, ast: 9.0, stl: 1.4, blk: 0.9, games_played: 79 } },
    { id: 9, first_name: 'Devin', last_name: 'Booker', position: 'G', team: { full_name: 'Phoenix Suns' }, seasonStats: { pts: 27.1, reb: 4.5, ast: 6.9, stl: 0.9, blk: 0.3, games_played: 68 } },
    { id: 10, first_name: 'Damian', last_name: 'Lillard', position: 'G', team: { full_name: 'Milwaukee Bucks' }, seasonStats: { pts: 24.3, reb: 4.4, ast: 7.0, stl: 0.9, blk: 0.2, games_played: 73 } },
    { id: 11, first_name: 'Anthony', last_name: 'Edwards', position: 'G', team: { full_name: 'Minnesota Timberwolves' }, seasonStats: { pts: 25.9, reb: 5.4, ast: 5.1, stl: 1.3, blk: 0.5, games_played: 79 } },
    { id: 12, first_name: 'Shai', last_name: 'Gilgeous-Alexander', position: 'G', team: { full_name: 'Oklahoma City Thunder' }, seasonStats: { pts: 30.1, reb: 5.5, ast: 6.2, stl: 2.0, blk: 0.9, games_played: 75 } },
    { id: 13, first_name: 'Jayson', last_name: 'Tatum', position: 'F', team: { full_name: 'Boston Celtics' }, seasonStats: { pts: 26.9, reb: 8.1, ast: 4.9, stl: 1.0, blk: 0.6, games_played: 74 } },
    { id: 14, first_name: 'Kawhi', last_name: 'Leonard', position: 'F', team: { full_name: 'LA Clippers' }, seasonStats: { pts: 23.7, reb: 6.1, ast: 3.6, stl: 1.6, blk: 0.9, games_played: 68 } },
    { id: 15, first_name: 'Jimmy', last_name: 'Butler', position: 'F', team: { full_name: 'Miami Heat' }, seasonStats: { pts: 20.8, reb: 5.3, ast: 5.0, stl: 1.3, blk: 0.3, games_played: 60 } },
    { id: 16, first_name: 'Bam', last_name: 'Adebayo', position: 'C', team: { full_name: 'Miami Heat' }, seasonStats: { pts: 19.3, reb: 10.4, ast: 3.9, stl: 1.1, blk: 0.9, games_played: 71 } },
    { id: 17, first_name: 'Pascal', last_name: 'Siakam', position: 'F', team: { full_name: 'Indiana Pacers' }, seasonStats: { pts: 21.7, reb: 7.1, ast: 4.3, stl: 0.8, blk: 0.5, games_played: 80 } },
    { id: 18, first_name: 'De\'Aaron', last_name: 'Fox', position: 'G', team: { full_name: 'Sacramento Kings' }, seasonStats: { pts: 26.6, reb: 4.6, ast: 5.6, stl: 1.8, blk: 0.4, games_played: 74 } },
    { id: 19, first_name: 'Donovan', last_name: 'Mitchell', position: 'G', team: { full_name: 'Cleveland Cavaliers' }, seasonStats: { pts: 26.6, reb: 5.1, ast: 6.1, stl: 1.8, blk: 0.5, games_played: 55 } },
    { id: 20, first_name: 'Jaylen', last_name: 'Brown', position: 'F', team: { full_name: 'Boston Celtics' }, seasonStats: { pts: 23.0, reb: 5.5, ast: 3.6, stl: 1.2, blk: 0.5, games_played: 70 } }
];

// State management
let allPlayers = [];
let allStats = [];
let filteredPlayers = [];

// DOM Elements
const playerSearch = document.getElementById('playerSearch');
const teamFilter = document.getElementById('teamFilter');
const positionFilter = document.getElementById('positionFilter');
const sortBy = document.getElementById('sortBy');
const loadPlayersBtn = document.getElementById('loadPlayers');
const playersContainer = document.getElementById('playersContainer');
const errorMessage = document.getElementById('errorMessage');
const loadingIndicator = document.getElementById('loadingIndicator');
const statsSummary = document.getElementById('statsSummary');

// Initialize event listeners
function initializeEventListeners() {
    loadPlayersBtn.addEventListener('click', handleLoadPlayers);
    playerSearch.addEventListener('input', handleFilter);
    teamFilter.addEventListener('change', handleFilter);
    positionFilter.addEventListener('change', handleFilter);
    sortBy.addEventListener('change', handleSort);
}

// Fetch players from API or use mock data
async function fetchPlayers() {
    try {
        showLoading(true);
        hideError();

        // Use mock data if enabled or if API fails
        if (USE_MOCK_DATA) {
            // Simulate API delay for realism
            await new Promise(resolve => setTimeout(resolve, 500));
            allPlayers = MOCK_PLAYERS_DATA;
            populateTeamFilter();
            showLoading(false);
            return allPlayers;
        }

        // Try to fetch from real API
        try {
            const playersResponse = await fetch(`${API_BASE_URL}/players?per_page=100`);
            
            if (!playersResponse.ok) {
                throw new Error(`API error: ${playersResponse.status}`);
            }

            const playersData = await playersResponse.json();
            allPlayers = playersData.data;

            // Fetch more pages if available
            let currentPage = playersData.meta.current_page;
            const totalPages = playersData.meta.total_pages;

            while (currentPage < totalPages && currentPage < 3) { // Limit to first 3 pages for performance
                currentPage++;
                const nextPageResponse = await fetch(`${API_BASE_URL}/players?per_page=100&page=${currentPage}`);
                if (nextPageResponse.ok) {
                    const nextPageData = await nextPageResponse.json();
                    allPlayers = allPlayers.concat(nextPageData.data);
                }
            }

            // Fetch season averages for current season
            await fetchSeasonStats();
        } catch (apiError) {
            // If API fails, fall back to mock data
            console.warn('API fetch failed, using mock data:', apiError);
            await new Promise(resolve => setTimeout(resolve, 500));
            allPlayers = MOCK_PLAYERS_DATA;
        }

        // Populate team filter
        populateTeamFilter();

        showLoading(false);
        return allPlayers;
    } catch (error) {
        showLoading(false);
        // Try mock data as last resort
        try {
            allPlayers = MOCK_PLAYERS_DATA;
            populateTeamFilter();
            showError('Using demo data. API unavailable. All features still work!');
        } catch (fallbackError) {
            showError(`Failed to load players: ${error.message}. Please try again later.`);
            console.error('Error fetching players:', error);
            return [];
        }
    }
}

// Fetch season statistics
async function fetchSeasonStats() {
    try {
        // Skip if using mock data (already has stats)
        if (USE_MOCK_DATA || allPlayers[0]?.seasonStats) {
            return;
        }

        // Get current season (2023-24 season)
        const season = 2023;
        const statsPromises = allPlayers.slice(0, 100).map(async (player) => {
            try {
                const response = await fetch(
                    `${API_BASE_URL}/season_averages?season=${season}&player_ids[]=${player.id}`
                );
                if (response.ok) {
                    const data = await response.json();
                    if (data.data && data.data.length > 0) {
                        return {
                            playerId: player.id,
                            stats: data.data[0]
                        };
                    }
                }
            } catch (error) {
                console.error(`Error fetching stats for player ${player.id}:`, error);
            }
            return null;
        });

        const statsResults = await Promise.all(statsPromises);
        allStats = statsResults.filter(result => result !== null);

        // Merge stats with players (only if we fetched new stats)
        if (allStats.length > 0) {
            allPlayers = allPlayers.map(player => {
                const playerStats = allStats.find(s => s.playerId === player.id);
                return {
                    ...player,
                    seasonStats: playerStats ? playerStats.stats : null
                };
            });
        }
    } catch (error) {
        console.error('Error fetching season stats:', error);
    }
}

// Populate team filter dropdown
function populateTeamFilter() {
    const teams = [...new Set(allPlayers.map(player => player.team ? player.team.full_name : 'Free Agent'))]
        .filter(team => team)
        .sort();

    teamFilter.innerHTML = '<option value="">All Teams</option>';
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });
}

// Handle load players button click
async function handleLoadPlayers() {
    if (allPlayers.length === 0) {
        await fetchPlayers();
    }
    handleFilter();
}

// Handle filtering
function handleFilter() {
    const searchTerm = playerSearch.value.toLowerCase().trim();
    const selectedTeam = teamFilter.value;
    const selectedPosition = positionFilter.value;

    filteredPlayers = allPlayers.filter(player => {
        const matchesSearch = !searchTerm || 
            player.first_name.toLowerCase().includes(searchTerm) ||
            player.last_name.toLowerCase().includes(searchTerm) ||
            `${player.first_name} ${player.last_name}`.toLowerCase().includes(searchTerm);

        const matchesTeam = !selectedTeam || 
            (player.team && player.team.full_name === selectedTeam) ||
            (!player.team && selectedTeam === 'Free Agent');

        const matchesPosition = !selectedPosition || player.position === selectedPosition;

        return matchesSearch && matchesTeam && matchesPosition;
    });

    handleSort();
}

// Handle sorting
function handleSort() {
    const sortValue = sortBy.value;

    filteredPlayers.sort((a, b) => {
        switch (sortValue) {
            case 'name':
                const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
                const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
                return nameA.localeCompare(nameB);

            case 'points':
                return (b.seasonStats?.pts || 0) - (a.seasonStats?.pts || 0);

            case 'rebounds':
                return (b.seasonStats?.reb || 0) - (a.seasonStats?.reb || 0);

            case 'assists':
                return (b.seasonStats?.ast || 0) - (a.seasonStats?.ast || 0);

            case 'steals':
                return (b.seasonStats?.stl || 0) - (a.seasonStats?.stl || 0);

            case 'blocks':
                return (b.seasonStats?.blk || 0) - (a.seasonStats?.blk || 0);

            default:
                return 0;
        }
    });

    updateStatsSummary();
    renderPlayers();
}

// Update stats summary
function updateStatsSummary() {
    const playersWithStats = filteredPlayers.filter(p => p.seasonStats);

    if (playersWithStats.length === 0) {
        statsSummary.style.display = 'none';
        return;
    }

    // Use reduce to calculate averages
    const totals = playersWithStats.reduce((acc, player) => {
        const stats = player.seasonStats;
        return {
            points: acc.points + (stats.pts || 0),
            rebounds: acc.rebounds + (stats.reb || 0),
            assists: acc.assists + (stats.ast || 0)
        };
    }, { points: 0, rebounds: 0, assists: 0 });

    const count = playersWithStats.length;

    document.getElementById('totalPlayers').textContent = filteredPlayers.length;
    document.getElementById('avgPoints').textContent = (totals.points / count).toFixed(1);
    document.getElementById('avgRebounds').textContent = (totals.rebounds / count).toFixed(1);
    document.getElementById('avgAssists').textContent = (totals.assists / count).toFixed(1);

    statsSummary.style.display = 'block';
}

// Render players to DOM
function renderPlayers() {
    if (filteredPlayers.length === 0) {
        playersContainer.innerHTML = '<div class="no-results">No players found matching your criteria.</div>';
        return;
    }

    // Use map to create player cards
    const playerCardsHTML = filteredPlayers.map(player => {
        const stats = player.seasonStats;
        const teamName = player.team ? player.team.full_name : 'Free Agent';
        const position = player.position || 'N/A';

        return `
            <div class="player-card">
                <div class="player-header">
                    <div>
                        <div class="player-name">${player.first_name} ${player.last_name}</div>
                        <div class="player-team">${teamName}</div>
                    </div>
                    <span class="player-position">${position}</span>
                </div>
                ${stats ? `
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-label">Points</span>
                            <span class="stat-value">${stats.pts || '0.0'}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Rebounds</span>
                            <span class="stat-value">${stats.reb || '0.0'}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Assists</span>
                            <span class="stat-value">${stats.ast || '0.0'}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Steals</span>
                            <span class="stat-value">${stats.stl || '0.0'}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Blocks</span>
                            <span class="stat-value">${stats.blk || '0.0'}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Games</span>
                            <span class="stat-value">${stats.games_played || '0'}</span>
                        </div>
                    </div>
                ` : '<p class="no-stats">No season stats available</p>'}
            </div>
        `;
    }).join('');

    playersContainer.innerHTML = playerCardsHTML;
}

// Show/hide loading indicator
function showLoading(show) {
    loadingIndicator.style.display = show ? 'block' : 'none';
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Hide error message
function hideError() {
    errorMessage.style.display = 'none';
}

// Initialize the application
initializeEventListeners();

