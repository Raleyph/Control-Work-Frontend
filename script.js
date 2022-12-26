const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.box, .footer-description,
.video, .video-title`, {
    interval: 200
})