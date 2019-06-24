let skipTags;
this.prepareSkipTags = ()=>{
    let skipTagsIndex = process.argv.indexOf("--skiptags");
    if (skipTagsIndex != -1) {
        if (!process.argv[skipTagsIndex + 1].startsWith("@")) {
            throw new Error("Skiptag must have tags starting with @");
        }
        skipTags = process.argv.splice(skipTagsIndex + 1, 1)[0].split(",");
        process.argv.splice(skipTagsIndex, 1);
    }
}
this.prepareSkipTags();




module.exports.skipTags = skipTags;