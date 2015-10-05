app.service('browser', function(){
    this.isMobile = $(window).width() < 603;
    this.isDesktop = $(window).width() > 602;
});