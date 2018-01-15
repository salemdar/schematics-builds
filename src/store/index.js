"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular-devkit/core");
var schematics_1 = require("@angular-devkit/schematics");
require("rxjs/add/operator/merge");
var ts = require("typescript");
var stringUtils = require("../strings");
var ast_utils_1 = require("../utility/ast-utils");
var change_1 = require("../utility/change");
var find_module_1 = require("../utility/find-module");
var route_utils_1 = require("../utility/route-utils");
function addImportToNgModule(options) {
    return function (host) {
        if (!options.module) {
            return host;
        }
        var modulePath = options.module;
        if (!host.exists(options.module)) {
            throw new Error('Specified module does not exist');
        }
        var text = host.read(modulePath);
        if (text === null) {
            throw new schematics_1.SchematicsException("File " + modulePath + " does not exist.");
        }
        var sourceText = text.toString('utf-8');
        var source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
        var statePath = "/" + options.sourceDir + "/" + options.path + "/" + options.statePath;
        var relativePath = find_module_1.buildRelativePath(modulePath, statePath);
        var environmentsPath = find_module_1.buildRelativePath(statePath, "/" + options.sourceDir + "/environments/environment");
        var storeNgModuleImport = ast_utils_1.addImportToModule(source, modulePath, options.root
            ? "StoreModule.forRoot(reducers, { metaReducers })"
            : "StoreModule.forFeature('" + stringUtils.camelize(options.name) + "', from" + stringUtils.classify(options.name) + ".reducers, { metaReducers: from" + stringUtils.classify(options.name) + ".metaReducers })", relativePath).shift();
        var commonImports = [
            route_utils_1.insertImport(source, modulePath, 'StoreModule', '@ngrx/store'),
            options.root
                ? route_utils_1.insertImport(source, modulePath, 'reducers, metaReducers', relativePath)
                : route_utils_1.insertImport(source, modulePath, "* as from" + stringUtils.classify(options.name), relativePath, true),
            storeNgModuleImport,
        ];
        var rootImports = [];
        if (options.root) {
            var storeDevtoolsNgModuleImport = ast_utils_1.addImportToModule(source, modulePath, "!environment.production ? StoreDevtoolsModule.instrument() : []", relativePath).shift();
            rootImports = rootImports.concat([
                route_utils_1.insertImport(source, modulePath, 'StoreDevtoolsModule', '@ngrx/store-devtools'),
                route_utils_1.insertImport(source, modulePath, 'environment', environmentsPath),
                storeDevtoolsNgModuleImport,
            ]);
        }
        var changes = commonImports.concat(rootImports);
        var recorder = host.beginUpdate(modulePath);
        for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
            var change = changes_1[_i];
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(recorder);
        return host;
    };
}
function default_1(options) {
    options.path = options.path ? core_1.normalize(options.path) : options.path;
    var sourceDir = options.sourceDir;
    var statePath = "/" + options.sourceDir + "/" + options.path + "/" + options.statePath + "/index.ts";
    var environmentsPath = find_module_1.buildRelativePath(statePath, "/" + options.sourceDir + "/environments/environment");
    if (!sourceDir) {
        throw new schematics_1.SchematicsException("sourceDir option is required.");
    }
    return function (host, context) {
        if (options.module) {
            options.module = find_module_1.findModuleFromOptions(host, options);
        }
        var templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.template(__assign({}, stringUtils, options, { environmentsPath: environmentsPath })),
            schematics_1.move(sourceDir),
        ]);
        return schematics_1.chain([
            schematics_1.branchAndMerge(schematics_1.chain([
                schematics_1.filter(function (path) {
                    return path.endsWith('.module.ts') &&
                        !path.endsWith('-routing.module.ts');
                }),
                addImportToNgModule(options),
                schematics_1.mergeWith(templateSource),
            ])),
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map