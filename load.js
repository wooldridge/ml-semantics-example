// Load semantic data of western universities in the U.S. into
// MarkLogic database
// Run in the MarkLogic Query Console (http://localhost:8000/qconsole/)

declareUpdate();
var sem = require("/MarkLogic/semantics.xqy");

var schools = [
  {
    iri: sem.iri('http://example.org/school/uc_berkeley'),
    nickname: 'Cal',
    city: sem.iri('http://example.org/city/berkeley'),
    mascot: sem.iri('http://example.org/mascot/golden_bear')
  },
  {
    iri: sem.iri('http://example.org/school/stanford'),
    nickname: 'Stanford',
    city: sem.iri('http://example.org/city/palo_alto'),
    mascot: sem.iri('http://example.org/mascot/cardinal')
  },
  {
    iri: sem.iri('http://example.org/school/ucla'),
    nickname: 'UCLA',
    city: sem.iri('http://example.org/city/los_angeles'),
    mascot: sem.iri('http://example.org/mascot/bruin')
  },
  {
    iri: sem.iri('http://example.org/school/usc'),
    nickname: 'USC',
    city: sem.iri('http://example.org/city/los_angeles'),
    mascot: sem.iri('http://example.org/mascot/trojan')
  },
  {
    iri: sem.iri('http://example.org/school/oregon'),
    nickname: 'Oregon',
    city: sem.iri('http://example.org/city/eugene'),
    mascot: sem.iri('http://example.org/mascot/duck')
  },
  {
    iri: sem.iri('http://example.org/school/oregon_state'),
    nickname: 'OSU',
    city: sem.iri('http://example.org/city/corvallis'),
    mascot: sem.iri('http://example.org/mascot/beaver')
  },
  {
    iri: sem.iri('http://example.org/school/washington'),
    nickname: 'UW',
    city: sem.iri('http://example.org/city/seattle'),
    mascot: sem.iri('http://example.org/mascot/husky')
  },
  {
    iri: sem.iri('http://example.org/school/washington_state'),
    nickname: 'WSU',
    city: sem.iri('http://example.org/city/pullman'),
    mascot: sem.iri('http://example.org/mascot/cougar')
  },
  {
    iri: sem.iri('http://example.org/school/arizona'),
    nickname: 'Arizona',
    city: sem.iri('http://example.org/city/tucson'),
    mascot: sem.iri('http://example.org/mascot/wildcat')
  },
  {
    iri: sem.iri('http://example.org/school/arizona_state'),
    nickname: 'ASU',
    city: sem.iri('http://example.org/city/tempe'),
    mascot: sem.iri('http://example.org/mascot/sun_devil')
  },
  {
    iri: sem.iri('http://example.org/school/colorado'),
    nickname: 'Colorado',
    city: sem.iri('http://example.org/city/boulder'),
    mascot: sem.iri('http://example.org/mascot/buffalo')
  },
  {
    iri: sem.iri('http://example.org/school/Utah'),
    nickname: 'Utah',
    city: sem.iri('http://example.org/city/salt_lake_city'),
    mascot: sem.iri('http://example.org/mascot/ute')
  }
];

var mascots = [
  {
    iri: sem.iri('http://example.org/mascot/golden_bear'),
    type: sem.iri('http://example.org/type/animal')
  },
  {
    iri: sem.iri('http://example.org/mascot/cardinal'),
    type: sem.iri('http://example.org/type/color')
  },
  {
    iri: sem.iri('http://example.org/mascot/bruin'),
    type: sem.iri('http://example.org/type/animal')
  },
  {
    iri: sem.iri('http://example.org/mascot/trojan'),
    type: sem.iri('http://example.org/type/human')
  },
  {
    iri: sem.iri('http://example.org/mascot/duck'),
    type: sem.iri('http://example.org/type/animal')
  },
  {
    iri: sem.iri('http://example.org/mascot/beaver'),
    type: sem.iri('http://example.org/type/animal')
  },
  {
    iri: sem.iri('http://example.org/mascot/husky'),
    type: sem.iri('http://example.org/type/animal')
  },
  {
    iri: sem.iri('http://example.org/mascot/cougar'),
    type: sem.iri('http://example.org/type/animal')
  },
  {
    iri: sem.iri('http://example.org/mascot/wilcat'),
    type: sem.iri('http://example.org/type/animal')
  },
  {
    iri: sem.iri('http://example.org/mascot/sun_devil'),
    type: sem.iri('http://example.org/type/human')
  },
  {
    iri: sem.iri('http://example.org/mascot/buffalo'),
    type: sem.iri('http://example.org/type/animal')
  },
  {
    iri: sem.iri('http://example.org/mascot/ute'),
    type: sem.iri('http://example.org/type/human')
  }
];

var cities = [
  {
    iri: sem.iri('http://example.org/city/berkeley'),
    state: sem.iri('http://example.org/state/california'),
    latitude: 37.871667,
    longitude: -122.272778
  },
  {
    iri: sem.iri('http://example.org/city/palo_alto'),
    state: sem.iri('http://example.org/state/california'),
    latitude: 37.429167,
    longitude: -122.138056
  },
  {
    iri: sem.iri('http://example.org/city/los_angeles'),
    state: sem.iri('http://example.org/state/california'),
    latitude: 34.05,
    longitude: -118.25
  },
  {
    iri: sem.iri('http://example.org/city/eugene'),
    state: sem.iri('http://example.org/state/oregon'),
    latitude: 44.051944,
    longitude: -123.086667
  },
  {
    iri: sem.iri('http://example.org/city/corvallis'),
    state: sem.iri('http://example.org/state/oregon'),
    latitude: 44.566667,
    longitude: -123.283333
  },
  {
    iri: sem.iri('http://example.org/city/seattle'),
    state: sem.iri('http://example.org/state/washington'),
    latitude: 47.609722,
    longitude: -122.333056
  },
  {
    iri: sem.iri('http://example.org/city/pullman'),
    state: sem.iri('http://example.org/state/washington'),
    latitude: 46.733333,
    longitude: -117.166667
  },
  {
    iri: sem.iri('http://example.org/city/tucson'),
    state: sem.iri('http://example.org/state/arizona'),
    latitude: 32.221667,
    longitude: -110.926389
  },
  {
    iri: sem.iri('http://example.org/city/tempe'),
    state: sem.iri('http://example.org/state/arizona'),
    latitude: 33.429444,
    longitude: -111.943056
  },
  {
    iri: sem.iri('http://example.org/city/boulder'),
    state: sem.iri('http://example.org/state/colorado'),
    latitude: 40.027435,
    longitude: -105.251945
  },
  {
    iri: sem.iri('http://example.org/city/salt_lake_city'),
    state: sem.iri('http://example.org/state/utah'),
    latitude: 40.75,
    longitude: -111.883333
  }
];

function loadTriple(s, p, o) {
  sem.rdfInsert(
    sem.triple(s, p, o)
  );
}

schools.forEach(function (school) {
  loadTriple(
    school.iri,
    sem.iri('http://example.org/hasName'),
    school.nickname);
  loadTriple(
    school.iri,
    sem.iri('http://example.org/isIn'),
    school.city);
  loadTriple(
    school.iri,
    sem.iri('http://example.org/hasMascot'),
    school.mascot);
});

mascots.forEach(function (mascot) {
  loadTriple(
    mascot.iri,
    sem.iri('http://example.org/isType'),
    mascot.type
  );
});

cities.forEach(function (city) {
  loadTriple(
    city.iri,
    sem.iri('http://example.org/isIn'),
    city.state
  );
  loadTriple(
    city.iri,
    sem.iri('http://example.org/latitude'),
    city.latitude
  );
  loadTriple(
    city.iri,
    sem.iri('http://example.org/longitude'),
    city.longitude
  );
});
