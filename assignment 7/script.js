$(document).ready(function() {
  console.log("jQuery is ready!");

  // ====== TASK 1: Selectors & CSS ======
  $("#changeText").click(function() {
    $("#para1").text("Changed by ID selector!");
    $(".paraClass").html("<b>Changed by Class selector!</b>");
    $("p").css({ "color": "#de0808ff","font-size": "18px"
    });
    $("#qwerty").click(function() {
    $("body").css("background-color", "#3df40fff"); 
});
  });
  // ====== TASK 2: Visibility Methods ======
  $("#hideBtn").click(function() { $("#text").hide(); });
  $("#showBtn").click(function() { $("#text").show(); });
  $("#toggleBtn").click(function() { $("#text").toggle(); });

  // ====== TASK 3: Fade Methods ======
  $("#fadeInBtn").click(function() { $("#fadeImg").fadeIn(); });
  $("#fadeOutBtn").click(function() { $("#fadeImg").fadeOut(); });
  $("#fadeToggleBtn").click(function() { $("#fadeImg").fadeToggle(); });

  // ====== TASK 4: Slide Methods ======
  $("#animateBtn").click(function() {

  $("#panel").slideToggle(500, function() {
  
    $(this)
      .css("background-color","#3df40fff") 
      .animate({ left: "100px" }, 500)         
      .animate({ left: "0px" }, 500);            
  })
});


  // ====== TASK 5: Add & Remove Elements ======
  $("#addItem").click(function() {
    $("#itemList").append("<li>New Item</li>");
  });
  $("#removeItem").click(function() {
    $("#itemList li:last").remove();
  });

  // ====== TASK 6: Modifying Attributes ======
  $("#changeSrc").click(function() {
    $("#imgChange").attr("src", "https://picsum.photos/100?random=" + Math.floor(Math.random() * 100));
  });
  $("#changeHref").click(function() {
    $("#link").attr("href", "https://kinogo.report/filmy/20176-oderzhimost.html");
    $("#link").text("Go to watch одержимость");
  });

  // ====== TASK 7: Form Interaction ======
  $("#nameInput, #emailInput").on("input", function() {
    $("#liveName").text($("#nameInput").val());
    $("#liveEmail").text($("#emailInput").val());
  });

  // ====== TASK 8: Basic Animation ======
  $("#animateBtn").click(function() {

  $("#panel").slideToggle(500, function() {

    $(this)
      .css("background-color", "#ff0000ff") 
      .animate({ left: "100px" }, 500)         
      .animate({ left: "0px" }, 500);            
  });
  
});

  // ====== TASK 9: Sequential Animations ======
  $("#seqBtn").click(function() {
    $("#box")
      .animate({ left: "200px" }, 500)
      .animate({ top: "200px" }, 500)
      .animate({ width: "50px", height: "50px" }, 500)
      .animate({ left: "0", top: "0", width: "100px", height: "100px" }, 500);
  });

  // ====== TASK 10: Combined Animation ======
  $("#comboBtn").click(function() {
    $("#box").animate({
      opacity: 0.5,
      width: "150px",
      height: "150px",
      left: "50px",
      top: "50px"
    }, 800);
  });

  // ====== TASK 11: Image Gallery ======
  $(".thumb").click(function() {
    let src = $(this).attr("src");
    $("#largeImg").attr("src", src).hide().fadeIn(500);
  });
});
