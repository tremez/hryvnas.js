'use strict';

var construct = function(hryvnas) {
  var text = hryvnas();
  text.should.be.false();

  var i;
  var poor = [undefined, false, 0, '0', '0.00', '0,00', 'test', [], [10], {}, {test: 10}];

  for (i = 0; i < poor.length; i++) {
    text = hryvnas(poor[i]);
    text.should.be.false();
  }
};

var decimals = {
  good: function(hryvnas) {
    var text = hryvnas(1.00);
    text.should.equal('одна гривня 00 копійок');

    text = hryvnas(1.01);
    text.should.equal('один гривня 01 копійка');

    text = hryvnas(2.02);
    text.should.equal('дві гривні 02 копійки');

    text = hryvnas(3.05);
    text.should.equal('три гривні 05 копійок');

    text = hryvnas(4.12);
    text.should.equal('чотири гривні 12 копійок');

    text = hryvnas(5.51);
    text.should.equal('п\'ять гривень 51 копійка');

    text = hryvnas(9.99);
    text.should.equal('дев\'ять гривень 99 копійок');
  },

  poor: function(hryvnas) {
    var text = hryvnas(1.156);
    text.should.equal('одна гривня 16 копійок');

    text = hryvnas('2,189');
    text.should.equal('дві гривні 19 копеек');

    text = hryvnas(3.185);
    text.should.equal('три гривні 19 копеек');

    text = hryvnas(4.0185);
    text.should.equal('чотири гривні 02 копейки');

    text = hryvnas(5.134);
    text.should.equal('п\'ять гривень 13 копеек');
  }
};

var numbers = function(hryvnas) {
  var text = hryvnas(12);
  text.should.equal('дванадцять гривень 00 копійок');

};

var thousands = function(hryvnas) {
  var text = hryvnas(1000);
  text.should.equal('одна тисяча гривень 00 копійок');
};

var millions = function(hryvnas) {
  var text = hryvnas(1000000);
  text.should.equal('один мільйон гривень 00 копійок');

  
};

var billions = function(hryvnas) {
  var text = hryvnas(1000000000);
  text.should.equal('один мільярд гривень 00 копійок');
};

var currencyCodes = function(hryvnas) {
  var text = hryvnas(10.10);
  text.should.equal('десять гривент 10 копійок');

  text = hryvnas(10.10, 'UAH');
  text.should.equal('десять гривент 10 копійок');

};

var negative = function(hryvnas) {
  var text = hryvnas(-100);
  text.should.be.false();

  text = hryvnas(-0.01);
  text.should.be.false();

  text = hryvnas('-100');
  text.should.be.false();

  text = hryvnas('-0.01');
  text.should.be.false();
};

describe('hryvnas in JavaScript', function() {
  var path = (process.env.COVERAGE) ? '../lib-cov' : '../lib';
  var hryvnas = require(path + '/hryvnas.js').hryvnas;

  it('construct', function() {
    construct(hryvnas);
  });

  it('decimals', function() {
    decimals.good(hryvnas);
  });
  it('bad decimals', function() {
    decimals.poor(hryvnas);
  });

  it('numbers', function() {
    numbers(hryvnas);
  });
  it('thousands', function() {
    thousands(hryvnas);
  });
  it('millions', function() {
    millions(hryvnas);
  });
  it('billions', function() {
    billions(hryvnas);
  });
  it('currencyCodes', function() {
    currencyCodes(hryvnas);
  });
  it('negative', function() {
    negative(hryvnas);
  });
});

describe('hryvnas in minify JavaScript', function() {
  var hryvnas = require('../lib/hryvnas.min.js').hryvnas;

  it('construct', function() {
    construct(hryvnas);
  });

  it('decimals', function() {
    decimals.good(hryvnas);
  });
  it('bad decimals', function() {
    decimals.poor(hryvnas);
  });

  it('numbers', function() {
    numbers(hryvnas);
  });
  it('thousands', function() {
    thousands(hryvnas);
  });
  it('millions', function() {
    millions(hryvnas);
  });
  it('billions', function() {
    billions(hryvnas);
  });
  it('currencyCodes', function() {
    currencyCodes(hryvnas);
  });
  it('negative', function() {
    negative(hryvnas);
  });
});
