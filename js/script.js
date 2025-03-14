function handleTickInit(tick) {
    var nextYear = (new Date('22 Nov 2025')).getFullYear() + 1;
    
    Tick.count.down(nextYear + '-01-01').onupdate = function(value) {
      tick.value = value;
    };
  }