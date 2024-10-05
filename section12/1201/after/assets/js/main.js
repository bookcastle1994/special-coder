document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.js-parallax').forEach((wrap) => {
    const y = wrap.getAttribute('data-y') || -120;
    gsap.to(wrap, {
      y: y,
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  });

  gsap.utils.toArray('.js-parallax21').forEach((wrap) => {
    const y = wrap.getAttribute('data-y') || -160;
    gsap.to(wrap, {
      y: y,
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  });
  gsap.utils.toArray('.js-parallax22').forEach((wrap) => {
    const y = wrap.getAttribute('data-y') || -120;
    gsap.to(wrap, {
      y: y,
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  });
  gsap.utils.toArray('.js-parallax23').forEach((wrap) => {
    const y = wrap.getAttribute('data-y') || -180;
    gsap.to(wrap, {
      y: y,
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  });

  gsap.utils.toArray('.js-parallax3').forEach((wrap) => {
    const y = wrap.getAttribute('data-y') || -200;
    gsap.to(wrap, {
      y: y,
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  });
});
