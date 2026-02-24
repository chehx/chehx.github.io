$(document).ready(function () {
  // Smooth Scroll
  $('a.nav-link').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top - 60 }, 500);
    }
  });

  // Scroll Spy
  $(window).on('scroll', function () {
    var scrollPos = $(window).scrollTop() + 100;
    $('section').each(function () {
      var currLink = $('a.nav-link[href="#' + $(this).attr('id') + '"]');
      if (
        $(this).position().top <= scrollPos &&
        $(this).position().top + $(this).height() > scrollPos
      ) {
        $('.nav-link').removeClass('active');
        currLink.addClass('active');
      }
    });
  });

  // GitHub stars & Hugging Face likes
  $('a.btn-pill[data-github]').each(function () {
    var $link = $(this);
    var repo = $link.attr('data-github');
    var $badge = $link.find('.gh-stars');
    fetch('https://api.github.com/repos/' + repo)
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        if (data.stargazers_count != null) {
          $badge.text('⭐ ' + data.stargazers_count);
        }
      })
      .catch(function () {});
  });

  $('a.btn-pill[data-hf]').each(function () {
    var $link = $(this);
    var modelId = $link.attr('data-hf');
    var $badge = $link.find('.hf-likes');
    fetch('https://huggingface.co/api/models/' + modelId)
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        var likes =
          data.likes != null
            ? data.likes
            : data.likeCount != null
            ? data.likeCount
            : null;
        if (likes != null) {
          $badge.text('❤️ ' + likes);
        }
      })
      .catch(function () {});
  });
});

