(function($) {
  $.reflet = function(ev, o) {
    var movies, tmpl;

    // templateバージョン1
    tmpl = '<li><b>${Name}</b> (${ReleaseYear})</li>';
    movies = [
      { Name: "The Red Violin" , ReleaseYear: "1998" },
      { Name: "Eyes Wide Shut" , ReleaseYear: "1999" },
      { Name: "The Inheritance", ReleaseYear: "1976" }
    ];
    this.tmp1(movies, '#movieList', tmpl);

    // templateバージョン2
    tmpl = '#movieTemplate2';
    movies = [
      { Name: "The Red Violin" , ReleaseYear: "1998" },
      { Name: "Eyes Wide Shut" , ReleaseYear: "1999" },
      { Name: "The Inheritance", ReleaseYear: "1976" }
    ];
    this.tmp2(movies, '#movieList2', tmpl);

    // templateバージョン3
    tmpl = '#movieTemplate3';
    movies = [
      { Name: "Meet Joe Black", Languages: ["French"] },
      { Name: "The Mighty", Languages: [] },
      { Name: "City Hunter", Languages: ["Mandarin", "Cantonese"] }
    ];
    this.tmp2(movies, '#movieList3', tmpl);
  };

  // plugins
  $.extend($.reflet.prototype, {
    tmp1: function(data, target, tmpl) {
      // $.template('tmp', tmpl);
      // $.tmpl('tmp', data).appendTo(target);

      var tmp = $.template(null, tmpl);
      $.tmpl(tmp, data).appendTo(target);
    }

    ,tmp2: function(data, target, tmpl)
    {
      $(tmpl).tmpl(data).appendTo(target);
    }
  });

  /**
   * @brief	プラグインに追加
   */
  $.fn.reflet = function(o){
    return this.each(function(){ new $.reflet(this, o); });
  };

})(jQuery);
