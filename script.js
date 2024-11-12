$(function () {
  $(".leftBarButton").on("click", function () {
    // Slide out leftBarContainer and leftBarButton
    gsap.to(".leftBarContainer", {
      duration: 2,
      x: -300,
      display: "none",
      opacity: 0,
    });
    $(".leftBarDiscover").addClass("!flex flex-col justify-center gap-4");
    gsap.fromTo(
      ".leftBarDiscover",
      { opacity: 0 },
      { x: 0, opacity: 1, display: "block", duration: 2 }
    );
    gsap.to(".leftBarButton", {
      duration: 2,
      x: -300,
      y: -100,
      rotation: -90,
    });

    // Fade out and move rightBarAsk to the left
    gsap.fromTo(
      ".rightBarAsk",
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: -200,
        duration: 2,
        display: "none",
      }
    );
    gsap.fromTo(
      ".rightBarContainer",
      { x: 300 },
      { x: 0, opacity: 1, display: "block", duration: 2 }
    );
    gsap.fromTo(
      ".image1",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        x: 100,
        display: "none",
        duration: 2,
      }
    );

    gsap.fromTo(
      ".image2",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        x: 100,
        display: "block",
        duration: 2,
      }
    );
  });

  $(".image2").on("click", function () {
    gsap.to(".discoverProduct", {
      opacity: 0,
      height: 0,
      padding: 0,
      duration: 1,
      onComplete: function () {
        $(".discoverProduct").css("display", "none");
      },
    });
    gsap.to(".askDispensing", {
      opacity: 0,
      height: 0,
      padding: 0,
      duration: 1,
      onComplete: function () {
        $(".askDispensing").css("display", "none");
      },
    });
    $(".rightBarAsk").addClass("!left-0");
    gsap.fromTo(
      ".rightBarAsk",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        display: "block",
      }
    );

    gsap.fromTo(
      ".rightBarContainer",
      { x: 0, opacity: 1 },
      { x: 300, opacity: 0, display: "none", duration: 2 }
    );

    $(".imgContainer").addClass("justify-center");
    gsap.fromTo(
      ".image2",
      { opacity: 1 },
      { opacity: 0, display: "none", duration: 0.5 }
    );
    gsap.fromTo(
      ".image3",
      { opacity: 0 },
      {
        opacity: 1,
        display: "block",
        duration: 2,
      }
    );
  });

  $(".discoverAllButton").on("click", function () {
    gsap.to(".discoverProduct", {
      opacity: 1,
      height: "100%",
      duration: 2,
      display: "flex",
    });

    gsap.fromTo(
      ".image3",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 2,
      }
    );
    gsap.fromTo(
      ".image1",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 2,
      }
    );
    $(".imgContainer").addClass("justify-end");
    gsap.fromTo(
      ".image2",
      { opacity: 0 },
      { opacity: 1, display: "block", duration: 2 }
    );

    gsap.fromTo(
      ".rightBarContainer",
      { x: +300, opacity: 0 },
      {
        duration: 2,
        x: 0,
        display: "block",
        opacity: 1,
      }
    );

    gsap.fromTo(
      ".rightBarAsk",
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: -200,
        duration: 2,
        display: "none",
      }
    );
  });

  $(".learnMoreButton").on("click", function () {
    gsap.fromTo(
      ".image3",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 2,
      }
    );
    $(".imgContainer").addClass("justify-start");
    gsap.fromTo(
      ".image1",
      { opacity: 0 },
      { opacity: 1, display: "block", duration: 2, x: -200, ease: "slow" }
    );
    gsap.to(".askDispensing", {
      opacity: 1,
      height: "100%",
      duration: 2,
      display: "block",
      ease: "slow",
    });

    gsap.fromTo(
      ".leftBarContainer",
      {
        x: -300,
        opacity: 1,
      },
      {
        duration: 2,
        x: 0,
        opacity: 1,
        display: "block",
        ease: "slow",
      }
    );

    gsap.fromTo(
      ".leftBarButton",
      {
        x: -300,
        y: -100,
        rotation: -90,
      },
      {
        duration: 2,
        x: 0,
        y: 0,
        rotation: 0,
      }
    );

    gsap.fromTo(
      ".leftBarDiscover",
      { opacity: 1 },
      { x: -300, opacity: 0, display: "none", duration: 2, ease: "back" }
    );
  });

  $(".image1").on("click", function () {
    // Slide out leftBarContainer and leftBarButton
    gsap.to(".leftBarContainer", {
      duration: 2,
      x: -300,
      display: "none",
      opacity: 0,
    });
    gsap.fromTo(
      ".leftBarDiscover",
      { opacity: 0 },
      { x: 0, opacity: 1, display: "block", duration: 2 }
    );
    gsap.to(".leftBarButton", {
      duration: 2,
      x: -300,
      y: -100,
      rotation: -90,
    });

    gsap.to(".discoverProduct", {
      opacity: 0,
      height: 0,
      padding: 0,
      duration: 1,
      onComplete: function () {
        $(".discoverProduct").css("display", "none");
      },
    });
    gsap.to(".askDispensing", {
      opacity: 0,
      height: 0,
      padding: 0,
      duration: 1,
      onComplete: function () {
        $(".askDispensing").css("display", "none");
      },
    });
    $(".rightBarAsk").addClass("!left-0");
    gsap.fromTo(
      ".rightBarAsk",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        display: "block",
      }
    );

    gsap.fromTo(
      ".rightBarContainer",
      { x: 0, opacity: 1 },
      { x: 300, opacity: 0, display: "none", duration: 2 }
    );

    $(".imgContainer").addClass("justify-center");
    gsap.fromTo(
      ".image1",
      { opacity: 1 },
      { opacity: 0, display: "none", duration: 0.5 }
    );
    gsap.fromTo(
      ".image3",
      { opacity: 0 },
      {
        opacity: 1,
        display: "block",
        duration: 2,
      }
    );
  });

  $(".rightBarButton").on("click", function () {
    gsap.to(".rightBarContainer", {
      duration: 2,
      x: 300,
      display: "none",
      opacity: 0,
      ease: "slow",
    });
    gsap.fromTo(
      ".rightBarAsk",
      { opacity: 0 },
      { opacity: 1, display: "block", duration: 2 }
    );

    gsap.fromTo(
      ".leftBarButton",
      {
        x: 300,
        y: 100,
        rotation: 90,
      },
      {
        duration: 2,
        x: 0,
        y: 0,
        rotation: 0,
      }
    );

    gsap.fromTo(
      ".image2",
      {
        opacity: 1,
        x: 0,
      },
      {
        opacity: 0,
        x: -200,
        display: "none",
        duration: 2,
      }
    );

    gsap.fromTo(
      ".image1",
      {
        opacity: 0,
        x: 0,
      },
      {
        opacity: 1,
        x: -200,
        display: "block",
        duration: 2,
      }
    );

    gsap.fromTo(
      ".leftBarContainer",
      { x: -300, opacity: 0 },
      {
        duration: 2,
        x: 0,
        display: "block",
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".leftBarDiscover",
      { opacity: 1 },
      { x: -300, opacity: 0, display: "none", duration: 2, ease: "back" }
    );
    gsap.fromTo(
      ".leftBarButton",
      {
        x: -300,
        y: -100,
        rotation: -90,
      },
      {
        duration: 2,
        x: 0,
        y: 0,
        rotation: 0,
      }
    );
  });
});
