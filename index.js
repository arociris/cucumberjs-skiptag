const {Before} = require('cucumber');
const {skipTags} = require('./lib/tagIdentifier');

Before(function (scenario) {
  if(skipTags){
    for(let tag of scenario.pickle.tags){
      if(skipTags.includes(tag.name))
        return 'skipped';      
    }
  }
});
