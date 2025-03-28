document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        musicContainer: document.getElementById('music-container'),
        searchInput: document.getElementById('search-input'),
        searchBtn: document.getElementById('search-btn'),
        genreFilter: document.getElementById('genre-filter'),
        themeToggle: document.getElementById('theme-toggle'),
        viewLiked: document.getElementById('view-liked'),
        likedCount: document.getElementById('liked-count'),
        player: document.getElementById('player'),
        nowPlayingTitle: document.getElementById('now-playing-title'),
        nowPlayingArtist: document.getElementById('now-playing-artist'),
        playBtn: document.getElementById('play-btn'),
        prevBtn: document.getElementById('prev-btn'),
        nextBtn: document.getElementById('next-btn'),
        progressBar: document.getElementById('progress-bar'),
        currentTime: document.getElementById('current-time'),
        duration: document.getElementById('duration')
    };

    const mockSongs = [
        {
            id: '1',
            title: 'Alert',
            artist: 'Lil Maina',
            album: 'Maisha ya Stunna',
            genre: 'Arbantone',
            duration: '3:35',
            image: 'https://cdn-images.dzcdn.net/images/cover/3d877428c3b0f80579f8dad2385133b6/0x1900-000000-80-0-0.jpg',
            audio: 'Lil Maina - Alert (Official Music Video) [plxuzZTwE5s].mp3'
        },
        {
            id: '2',
            title: 'Evil Jordan',
            artist: 'Playboi Carti',
            album: 'I AM MUSIC',
            genre: 'Hip Hop',
            duration: '3:03',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/I_Am_Music_by_Playboi_Carti.jpg/640px-I_Am_Music_by_Playboi_Carti.jpg',
            audio: 'NA [cOGGQT4vPRs].mp3'
        },
        {
            id: '3',
            title: 'Blinking Lights',
            artist: 'The Weeknd',
            album: '17',
            genre: 'Hip Hop',
            duration: '3:20',
            image: 'https://i.scdn.co/image/ab67616d0000b273a3eff72f62782fb589a492f9',
            audio: 'The Weeknd - Blinding Lights (Official Video) [4NRXx6U8ABQ].mp3',
        },
        {
            id: '4',
            title: 'Black Space',
            artist: 'Taylor Swift',
            album: '1989',
            genre: 'Pop',
            duration: '3:51',
            image: 'https://amateurphotographer.com/wp-content/uploads/sites/7/2024/03/Deluxe-edition-of-the-original-1989-album-cover.jpg?w=1024',
            audio: 'Taylor Swift - Blank Space [e-ORhEE9VVg].mp3'
        },
        
        {
            id: '5',
            title: 'Marvins Room',
            artist: 'Drake',
            album: 'Take care',
            genre: 'Rnb',
            duration: '3:55',
            image: 'https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550',
            audio: 'Marvins Room [JDb3ZZD4bA0].mp3'
        },
        {
            id: '6',
            title: 'Narcos',
            artist: 'Migos',
            album: 'Culture II',
            genre: 'Hip Hop',
            duration: '3:35',
            image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Culture_II.png',
            audio: 'Migos - Narcos [unh8kWUuNt4].mp3'

        },
        {
            id: '6',
            title: 'Sikutambui',
            artist: 'Wakadinali',
            album: 'zozaNation',
            genre: 'Drills',
            duration: '3:35',
            image: 'https://i.scdn.co/image/ab67616d00001e02c24c821df84fedfe77035fac',
            audio: 'Wakadinali - _Sikutambui_ (Official Music Video) [0rLqU8gNams].mp3'
        },
        {
            id: '7',
            title: 'Set it',
            artist: 'Dyana Cods',
            album: 'Burukylboyz',
            genre: 'Arbantone',
            duration: '3:35',
            image: 'https://source.boomplaymusic.com/group10/M00/07/23/c2a595a50b6d48c88441409537098d93_464_464.jpg',
            audio: 'Set It (feat. AJAY (Buruklynboyz)) [ewYXYGLYsR8].mp3'

        },
        {
            id: '8',
            title: 'Redemption',
            artist: 'Nemzzz',
            album: 'DO NOT DISTURB',
            genre: 'Drills',
            duration: '3:35',
            image: 'https://i.scdn.co/image/ab67616d0000b2732c21571d6712b4e96c2fd1cd',
            audio: 'Redemption (feat. Nemzzz) [Oh2TExDgp24].mp3'

        },
        {
            id: '9',
            title: 'War machine',
            artist: 'Rema',
            album: 'HEIS',
            genre: 'Afrobeats',
            duration: '3:35',
            image: 'https://source.boomplaymusic.com/group10/M00/07/27/2924f6c98cdb43ce8d9ad63c127c665bH375W375_320_320.jpg',
            audio: 'WAR MACHINE [acMBhUPleYY].mp3'

        },{
            id: '10',
            title: 'ASibe Happy',
            artist: 'Kabza De small',
            album: 'Happy',
            genre: 'Amapiano',
            duration: '7:35',
            image: 'https://cdn-images.dzcdn.net/images/cover/247192787429266cf848b4c220e234c9/1900x1900-000000-80-0-0.jpg',
            audio: 'Asibe Happy [8wJTm0RoQBo].mp3'
        },
        {
            id: '11',
            title: 'interlude',
            artist: 'Stormzy',
            album: 'Wakanda',
            genre: 'Afrobeats',
            duration: '2:18',
            image: 'https://i.scdn.co/image/ab67616d0000b273992a1f56ac5382848277cff2',
            audio: 'Interlude (From _Black Panther_ Wakanda Forever - Music From and Inspired By__Visualizer) [yv9aZpzrfTE].mp3',
        },
        {
            id: '12',
            title: 'Made of Steel',
            artist: 'Sondae',
            album: 'By The Water',
            genre: 'Gospel',
            duration: '3:35',
            image: 'https://i.scdn.co/image/ab67616d0000b273748a8c99e9afc4629f692531',
            audio: ''
        },
        
        {
            id: '13',
            title: 'Dependable',
            artist: 'Travis Greene',
            album: 'Oil + Water',
            genre: 'Gospel',
            duration: '3:35',
            image: 'https://news.theurbanmusicscene.com/wp-content/uploads/2021/07/cropped-TravisGreene_OilWater_album-cover-1.jpg',
            audio: ''
        },
        {
            id: '14',
            title: 'IMTHATGIRL',
            artist: '9DAYS',
            album: 'Days',
            genre: 'Jazz',
            duration: '3:35',
            image: 'https://cdn-images.dzcdn.net/images/cover/5a77597720fc7cd4be2a7c059616848a/0x1900-000000-80-0-0.jpg',
            audio: 'IMTHATGIRL [NvsIlv2wsUY].mp3'

        },
    ];

    const state = {
        currentTracks: [],
        likedSongs: JSON.parse(localStorage.getItem('likedSongs')) || [],
        currentTrackIndex: -1,
        isPlaying: false,
        audio: new Audio(),
        currentTimeInterval: null,
        showingLiked: false
    };

    updateLikedCount();
    loadInitialTracks();

    elements.playBtn.addEventListener('click', togglePlay);
    elements.prevBtn.addEventListener('click', playPrevious);
    elements.nextBtn.addEventListener('click', playNext);
    elements.searchBtn.addEventListener('click', handleSearch);
    elements.genreFilter.addEventListener('change', filterByGenre);
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.viewLiked.addEventListener('click', toggleLikedView);

    function loadInitialTracks() {
        state.currentTracks = mockSongs.map(track => ({
            ...track,
            isLiked: state.likedSongs.some(song => song.id === track.id)
        }));
        displayMusic(state.currentTracks);
    }

    function displayMusic(tracks) {
        elements.musicContainer.innerHTML = '';
        
        if (tracks.length === 0) {
            elements.musicContainer.innerHTML = '<p>No tracks found.</p>';
            return;
        }
        
        tracks.forEach((track, index) => {
            const musicCard = document.createElement('div');
            musicCard.className = 'music-card';
            musicCard.innerHTML = `
                <img src="${track.image}" alt="${track.title} album cover">
                <h3>${track.title}</h3>
                <p>${track.artist}</p>
                <p>${track.album}</p>
                <div class="card-actions">
                    <button class="play-btn" data-index="${index}" aria-label="Play ${track.title}">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="like-btn ${track.isLiked ? 'liked' : ''}" data-id="${track.id}" 
                            aria-label="${track.isLiked ? 'Unlike' : 'Like'} ${track.title}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            `;
            elements.musicContainer.appendChild(musicCard);
            
            musicCard.querySelector('.play-btn').addEventListener('click', () => {
                playTrack(index);
            });
            
            musicCard.querySelector('.like-btn').addEventListener('click', (e) => {
                toggleLike(e.target.closest('.like-btn').dataset.id);
            });
        });
    }

    function playTrack(index) {
        const tracks = state.showingLiked ? state.likedSongs : state.currentTracks;
        const track = tracks[index];
        
        if (state.audio) {
            state.audio.pause();
            clearInterval(state.currentTimeInterval);
        }
        
        state.audio.src = track.audio;
        state.currentTrackIndex = index;
        
        elements.nowPlayingTitle.textContent = track.title;
        elements.nowPlayingArtist.textContent = track.artist;
        elements.duration.textContent = track.duration;
        elements.player.hidden = false;
        
        state.audio.play()
            .then(() => {
                state.isPlaying = true;
                elements.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                elements.playBtn.setAttribute('aria-label', 'Pause');
                
                state.currentTimeInterval = setInterval(updateProgress, 1000);
            })
            .catch(error => {
                console.error('Playback failed:', error);
                alert('Could not play the song. Please check the audio file.');
            });
        
        state.audio.addEventListener('ended', () => {
            playNext();
        });
    }

    function togglePlay() {
        if (!state.audio.src) {
            if (state.currentTrackIndex >= 0) {
                playTrack(state.currentTrackIndex);
            }
            return;
        }
        
        if (state.isPlaying) {
            state.audio.pause();
            state.isPlaying = false;
            elements.playBtn.innerHTML = '<i class="fas fa-play"></i>';
            elements.playBtn.setAttribute('aria-label', 'Play');
            clearInterval(state.currentTimeInterval);
        } else {
            state.audio.play()
                .then(() => {
                    state.isPlaying = true;
                    elements.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    elements.playBtn.setAttribute('aria-label', 'Pause');
                    state.currentTimeInterval = setInterval(updateProgress, 1000);
                });
        }
    }

    function playNext() {
        const tracks = state.showingLiked ? state.likedSongs : state.currentTracks;
        const nextIndex = (state.currentTrackIndex + 1) % tracks.length;
        playTrack(nextIndex);
    }

    function playPrevious() {
        const tracks = state.showingLiked ? state.likedSongs : state.currentTracks;
        const prevIndex = (state.currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(prevIndex);
    }

    function updateProgress() {
        if (state.audio.duration) {
            const progress = (state.audio.currentTime / state.audio.duration) * 100;
            elements.progressBar.value = progress;
            elements.currentTime.textContent = formatTime(state.audio.currentTime);
        }
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    function toggleLike(trackId) {
        const track = [...state.currentTracks, ...mockSongs].find(t => t.id === trackId);
        if (!track) return;

        const alreadyLiked = state.likedSongs.some(song => song.id === trackId);
        
        if (alreadyLiked) {
            state.likedSongs = state.likedSongs.filter(song => song.id !== trackId);
        } else {
            if (state.likedSongs.length >= 30) {
                alert('You can only like up to 30 songs!');
                return;
            }
            state.likedSongs.push({
                id: track.id,
                title: track.title,
                artist: track.artist,
                album: track.album,
                image: track.image,
                audio: track.audio,
                duration: track.duration,
                genre: track.genre
            });
        }

        const likeBtn = document.querySelector(`.like-btn[data-id="${trackId}"]`);
        if (likeBtn) likeBtn.classList.toggle('liked');
        
        state.currentTracks = state.currentTracks.map(t => 
            t.id === trackId ? {...t, isLiked: !t.isLiked} : t
        );

        localStorage.setItem('likedSongs', JSON.stringify(state.likedSongs));
        updateLikedCount();
    }

    function updateLikedCount() {
        elements.likedCount.textContent = state.likedSongs.length;
    }

    function handleSearch() {
        const query = elements.searchInput.value.trim().toLowerCase();
        if (!query) {
            loadInitialTracks();
            return;
        }

        const filtered = mockSongs.filter(track => 
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query) ||
            track.album.toLowerCase().includes(query)
        );
        
        state.currentTracks = filtered.map(track => ({
            ...track,
            isLiked: state.likedSongs.some(song => song.id === track.id)
        }));
        
        displayMusic(state.currentTracks);
    }

    function filterByGenre() {
        const selectedGenre = elements.genreFilter.value;
        const tracks = state.showingLiked ? state.likedSongs : state.currentTracks;
        
        if (selectedGenre === 'all') {
            displayMusic(tracks);
        } else {
            const filtered = tracks.filter(track => 
                track.genre.toLowerCase() === selectedGenre.toLowerCase()
            );
            displayMusic(filtered);
        }
    }

    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        const icon = elements.themeToggle.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    function toggleLikedView() {
        state.showingLiked = !state.showingLiked;
        
        if (state.showingLiked) {
            displayMusic(state.likedSongs);
            elements.viewLiked.innerHTML = `<i class="fas fa-globe"></i> <span id="liked-count">${state.likedSongs.length}</span>/30 <span class="sr-only">View all songs</span>`;
        } else {
            displayMusic(state.currentTracks);
            elements.viewLiked.innerHTML = `<i class="fas fa-heart"></i> <span id="liked-count">${state.likedSongs.length}</span>/30 <span class="sr-only">View liked songs</span>`;
        }
    }
});