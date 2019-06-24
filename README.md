# cucumberjs-skiptag

This package will serve as an added plugin to your cucumber tests by skipping test cases by matching them with tags.

In your run command you just have to provide option `--skiptags` with the tags that you want to exclude and those tests will be excluded. Such tests will be shown as skipped in you test report.

**Installation**:<br>
First you need to have cucumberjs-skiptag and Cucumber.js to be installed locally.<br>
`npm install --save-dev cucumberjs-skiptag`

**Usage:**
 1. Add cucumberjs-skiptag to your steps definition as `require('cucumberjs-skiptag')` Thats it, you dont have to write any further code for it and it will do the rest by itself except defining the tags to be skipped.
 2. Skip single tag e.g. tag1<br>
	 - Single tag can be skipped using `--skiptags @tag1`
	
 3. Skip multiple tags tag e.g. tag1 and tag2<br>
	 - Multiple tags can be passed as comma separated using `--skiptags @tag1,@tag2`

**Sample command**:<br>
	`cucumber-js --skiptags @Tag1 <pathToFeatureFiles>`

**Note**:<br>
You have to provide the path of folder where feature files are present. If not provided then, by default cucumber-js will read files from ./features folder and in such case this package will be ignored by cucumber-js. In that case, you might also see an error stating "No such option skiptags"

**Running the examples:**

 1. Clone the repo
 2. Fire below mentioned commands<br>
	 `cd examples`<br>
	 `npm install`<br>
3. To run example for single tag skip run below command<br>
	`npm run test-single`<br>
4. To run example for multiple tags skip run below command<br>
	`npm run test-multi`<br>
 
