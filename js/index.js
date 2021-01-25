$(document).ready(function () {
  var finalPackageContainer = $(".final-package-container");
  var finalPriceContainer = $(".final-price-container");
  calculateFinalPrice();
  $(window).scroll(function () {
    // check if scroll event happened
    if ($(document).scrollTop() > 10) {
      // check if user scrolled more than 50 from top of the browser window
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
    $(".navbar-collapse.collapse.show").removeClass("show");
  });

  $("#usersControlRange").bind("change", function (event) {
    if (this.value > 100)
      finalPackageContainer.find(".final-num-of-users .value").text(100);
    else if (this.value < 2)
      finalPackageContainer.find(".final-num-of-users .value").text(2);
    else
      finalPackageContainer.find(".final-num-of-users .value").text(this.value);
    calculateFinalPrice();
  });

  $(".cd-select").bind("click", function (event) {
    finalPackageContainer.find(".final-price-months-value").text(this.rel);
    calculateFinalPrice();
  });

  $("#defaultCheck1").bind("change", function (event) {
    if ($(this).is(":checked")) {
      finalPackageContainer.find(".final-additional-features").show();
      finalPackageContainer
        .find(".final-additional-features .final-features-list .feature-1")
        .show();
    } else finalPackageContainer.find(".final-additional-features .final-features-list .feature-1").hide();
    checkIfAdditionalFeaturesPresent();
    calculateFinalPrice();
  });

  $("#defaultCheck2").bind("change", function (event) {
    if ($(this).is(":checked")) {
      finalPackageContainer.find(".final-additional-features").show();
      finalPackageContainer
        .find(".final-additional-features .final-features-list .feature-2")
        .show();
    } else finalPackageContainer.find(".final-additional-features .final-features-list .feature-2").hide();
    checkIfAdditionalFeaturesPresent();
    calculateFinalPrice();
  });

  $("#defaultCheck3").bind("change", function (event) {
    if ($(this).is(":checked")) {
      finalPackageContainer.find(".final-additional-features").show();
      finalPackageContainer
        .find(".final-additional-features .final-features-list .feature-3")
        .show();
    } else finalPackageContainer.find(".final-additional-features .final-features-list .feature-3").hide();
    checkIfAdditionalFeaturesPresent();
    calculateFinalPrice();
  });

  function checkIfAdditionalFeaturesPresent() {
    if ($("ul.final-features-list li:visible").length === 0)
      finalPackageContainer.find(".final-additional-features").hide();
  }

  function calculateFinalPrice() {
    var numOfUsers = finalPackageContainer
      .find(".final-price-users-value")
      .text();
    var numOfMonths = finalPackageContainer
      .find(".final-price-months-value")
      .text();
    var feature1 = finalPackageContainer.find(".feature-1").is(":visible");
    var feature2 = finalPackageContainer.find(".feature-2").is(":visible");
    var feature3 = finalPackageContainer.find(".feature-3").is(":visible");

    var pricePerUserPerMonth = $(".pricing-card #price-sec2").text();
    if (numOfMonths == 6)
      pricePerUserPerMonth = $(".pricing-card #price-sec1").text();
    if (finalPackageContainer.find(".final-price-users-value"))
      var recurringCharges = numOfUsers * numOfMonths * pricePerUserPerMonth;
    if (feature1)
      recurringCharges +=
        numOfUsers *
        numOfMonths *
        $(".additional-features-row #email-price-per-user-price").text();
    if (feature2)
      recurringCharges +=
        1 * $(".additional-features-row #same-level-bulk-price").text();
    if (feature3)
      recurringCharges +=
        1 * $(".additional-features-row #track-work-charts-price").text();

    finalPriceContainer
      .find("#final-one-time-cost")
      .text($(".pricing-six-months #onetimecharges").text());
    finalPriceContainer.find("#final-recurring-cost").text(recurringCharges);

    var gstCharges =
      0.18 *
      (1 * finalPriceContainer.find("#final-one-time-cost").text() +
        1 * finalPriceContainer.find("#final-recurring-cost").text());
    finalPriceContainer.find("#final-gst-cost").text(gstCharges);

    var totalCharges =
      1 * finalPriceContainer.find("#final-one-time-cost").text() +
      1 * finalPriceContainer.find("#final-recurring-cost").text() +
      1 * finalPriceContainer.find("#final-gst-cost").text();
    finalPriceContainer.find("#final-total-cost").text(totalCharges);
  }

  /* JS FOR MODAL SECTION */

  $(".disclaimer").click(function (e) {
    $("#disclaimer-section").show();
  });

  $(".modal .close").click(function () {
    $(".modal").hide();
  });
});
