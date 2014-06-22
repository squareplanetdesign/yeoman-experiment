var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
        this.argument("name", {
            desc : "Name of the module.",
            optional: true,
            type: "String",
            defaults: "index",
            banner: "Name of the module in the folder. Defautls to index"
        });

        this.argument("dir", {
            desc : "Name of the module directory.",
            optional: true,
            type: "String",
            banner: "Name of the module directory. Defautls to the current folder if not specified."
        });

        this.option("amd", {
            desc : "Use amd in templates",
            optional: true,
            type: "Boolean",
            defaults: false,
            banner: "Indicates you want AMD based module loading in this module."
        })
    },
    promptModuleName: function () {
        if (!this.arguments["name"]) {
            var done = this.async();
            this.prompt({
                type    : "input",
                name    : "name",
                message : "Your project name",
              default : this.appname // Default to current folder name
            }, function (answers) {
                this.log(answers.name);
                done();
            });
        }
    },
    writingModule: function() {
        var destDir = this.arguments["dir"] || ".";
        this.directory("app", destDir, process)
    }
});
