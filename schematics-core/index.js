(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@ngrx/schematics/schematics-core/index", ["require", "exports", "@ngrx/schematics/schematics-core/utility/strings", "@ngrx/schematics/schematics-core/utility/ast-utils", "@ngrx/schematics/schematics-core/utility/change", "@ngrx/schematics/schematics-core/utility/config", "@ngrx/schematics/schematics-core/utility/find-module", "@ngrx/schematics/schematics-core/utility/ngrx-utils", "@ngrx/schematics/schematics-core/utility/project", "@ngrx/schematics/schematics-core/utility/route-utils", "@ngrx/schematics/schematics-core/utility/update", "@ngrx/schematics/schematics-core/utility/parse-name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var strings_1 = require("@ngrx/schematics/schematics-core/utility/strings");
    var ast_utils_1 = require("@ngrx/schematics/schematics-core/utility/ast-utils");
    exports.findNodes = ast_utils_1.findNodes;
    exports.getSourceNodes = ast_utils_1.getSourceNodes;
    exports.getDecoratorMetadata = ast_utils_1.getDecoratorMetadata;
    exports.getContentOfKeyLiteral = ast_utils_1.getContentOfKeyLiteral;
    exports.insertAfterLastOccurrence = ast_utils_1.insertAfterLastOccurrence;
    exports.addBootstrapToModule = ast_utils_1.addBootstrapToModule;
    exports.addDeclarationToModule = ast_utils_1.addDeclarationToModule;
    exports.addExportToModule = ast_utils_1.addExportToModule;
    exports.addImportToModule = ast_utils_1.addImportToModule;
    exports.addProviderToModule = ast_utils_1.addProviderToModule;
    var change_1 = require("@ngrx/schematics/schematics-core/utility/change");
    exports.NoopChange = change_1.NoopChange;
    exports.InsertChange = change_1.InsertChange;
    exports.RemoveChange = change_1.RemoveChange;
    exports.ReplaceChange = change_1.ReplaceChange;
    var config_1 = require("@ngrx/schematics/schematics-core/utility/config");
    exports.getAppFromConfig = config_1.getAppFromConfig;
    exports.getConfig = config_1.getConfig;
    exports.getWorkspace = config_1.getWorkspace;
    exports.getWorkspacePath = config_1.getWorkspacePath;
    var find_module_1 = require("@ngrx/schematics/schematics-core/utility/find-module");
    exports.findModule = find_module_1.findModule;
    exports.findModuleFromOptions = find_module_1.findModuleFromOptions;
    exports.buildRelativePath = find_module_1.buildRelativePath;
    var ngrx_utils_1 = require("@ngrx/schematics/schematics-core/utility/ngrx-utils");
    exports.addReducerToState = ngrx_utils_1.addReducerToState;
    exports.addReducerToStateInferface = ngrx_utils_1.addReducerToStateInferface;
    exports.addReducerImportToNgModule = ngrx_utils_1.addReducerImportToNgModule;
    exports.addReducerToActionReducerMap = ngrx_utils_1.addReducerToActionReducerMap;
    exports.omit = ngrx_utils_1.omit;
    var project_1 = require("@ngrx/schematics/schematics-core/utility/project");
    exports.getProjectPath = project_1.getProjectPath;
    var route_utils_1 = require("@ngrx/schematics/schematics-core/utility/route-utils");
    exports.insertImport = route_utils_1.insertImport;
    exports.stringUtils = {
        dasherize: strings_1.dasherize,
        decamelize: strings_1.decamelize,
        camelize: strings_1.camelize,
        classify: strings_1.classify,
        underscore: strings_1.underscore,
        group: strings_1.group,
        capitalize: strings_1.capitalize,
        featurePath: strings_1.featurePath,
    };
    var update_1 = require("@ngrx/schematics/schematics-core/utility/update");
    exports.updatePackage = update_1.updatePackage;
    var parse_name_1 = require("@ngrx/schematics/schematics-core/utility/parse-name");
    exports.parseName = parse_name_1.parseName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3NjaGVtYXRpY3Mvc2NoZW1hdGljcy1jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEsNEVBUzJCO0lBRTNCLGdGQVc2QjtJQVYzQixnQ0FBQSxTQUFTLENBQUE7SUFDVCxxQ0FBQSxjQUFjLENBQUE7SUFDZCwyQ0FBQSxvQkFBb0IsQ0FBQTtJQUNwQiw2Q0FBQSxzQkFBc0IsQ0FBQTtJQUN0QixnREFBQSx5QkFBeUIsQ0FBQTtJQUN6QiwyQ0FBQSxvQkFBb0IsQ0FBQTtJQUNwQiw2Q0FBQSxzQkFBc0IsQ0FBQTtJQUN0Qix3Q0FBQSxpQkFBaUIsQ0FBQTtJQUNqQix3Q0FBQSxpQkFBaUIsQ0FBQTtJQUNqQiwwQ0FBQSxtQkFBbUIsQ0FBQTtJQUdyQiwwRUFPMEI7SUFKeEIsOEJBQUEsVUFBVSxDQUFBO0lBQ1YsZ0NBQUEsWUFBWSxDQUFBO0lBQ1osZ0NBQUEsWUFBWSxDQUFBO0lBQ1osaUNBQUEsYUFBYSxDQUFBO0lBR2YsMEVBTzBCO0lBSnhCLG9DQUFBLGdCQUFnQixDQUFBO0lBQ2hCLDZCQUFBLFNBQVMsQ0FBQTtJQUNULGdDQUFBLFlBQVksQ0FBQTtJQUNaLG9DQUFBLGdCQUFnQixDQUFBO0lBR2xCLG9GQUsrQjtJQUo3QixtQ0FBQSxVQUFVLENBQUE7SUFDViw4Q0FBQSxxQkFBcUIsQ0FBQTtJQUNyQiwwQ0FBQSxpQkFBaUIsQ0FBQTtJQUluQixrRkFNOEI7SUFMNUIseUNBQUEsaUJBQWlCLENBQUE7SUFDakIsa0RBQUEsMEJBQTBCLENBQUE7SUFDMUIsa0RBQUEsMEJBQTBCLENBQUE7SUFDMUIsb0RBQUEsNEJBQTRCLENBQUE7SUFDNUIsNEJBQUEsSUFBSSxDQUFBO0lBR04sNEVBQW1EO0lBQTFDLG1DQUFBLGNBQWMsQ0FBQTtJQUN2QixvRkFBcUQ7SUFBNUMscUNBQUEsWUFBWSxDQUFBO0lBRVIsUUFBQSxXQUFXLEdBQUc7UUFDekIsU0FBUyxxQkFBQTtRQUNULFVBQVUsc0JBQUE7UUFDVixRQUFRLG9CQUFBO1FBQ1IsUUFBUSxvQkFBQTtRQUNSLFVBQVUsc0JBQUE7UUFDVixLQUFLLGlCQUFBO1FBQ0wsVUFBVSxzQkFBQTtRQUNWLFdBQVcsdUJBQUE7S0FDWixDQUFDO0lBRUYsMEVBQWlEO0lBQXhDLGlDQUFBLGFBQWEsQ0FBQTtJQUN0QixrRkFBaUQ7SUFBeEMsaUNBQUEsU0FBUyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZGFzaGVyaXplLFxuICBkZWNhbWVsaXplLFxuICBjYW1lbGl6ZSxcbiAgY2xhc3NpZnksXG4gIHVuZGVyc2NvcmUsXG4gIGdyb3VwLFxuICBjYXBpdGFsaXplLFxuICBmZWF0dXJlUGF0aCxcbn0gZnJvbSAnLi91dGlsaXR5L3N0cmluZ3MnO1xuXG5leHBvcnQge1xuICBmaW5kTm9kZXMsXG4gIGdldFNvdXJjZU5vZGVzLFxuICBnZXREZWNvcmF0b3JNZXRhZGF0YSxcbiAgZ2V0Q29udGVudE9mS2V5TGl0ZXJhbCxcbiAgaW5zZXJ0QWZ0ZXJMYXN0T2NjdXJyZW5jZSxcbiAgYWRkQm9vdHN0cmFwVG9Nb2R1bGUsXG4gIGFkZERlY2xhcmF0aW9uVG9Nb2R1bGUsXG4gIGFkZEV4cG9ydFRvTW9kdWxlLFxuICBhZGRJbXBvcnRUb01vZHVsZSxcbiAgYWRkUHJvdmlkZXJUb01vZHVsZSxcbn0gZnJvbSAnLi91dGlsaXR5L2FzdC11dGlscyc7XG5cbmV4cG9ydCB7XG4gIEhvc3QsXG4gIENoYW5nZSxcbiAgTm9vcENoYW5nZSxcbiAgSW5zZXJ0Q2hhbmdlLFxuICBSZW1vdmVDaGFuZ2UsXG4gIFJlcGxhY2VDaGFuZ2UsXG59IGZyb20gJy4vdXRpbGl0eS9jaGFuZ2UnO1xuXG5leHBvcnQge1xuICBBcHBDb25maWcsXG4gIENsaUNvbmZpZyxcbiAgZ2V0QXBwRnJvbUNvbmZpZyxcbiAgZ2V0Q29uZmlnLFxuICBnZXRXb3Jrc3BhY2UsXG4gIGdldFdvcmtzcGFjZVBhdGgsXG59IGZyb20gJy4vdXRpbGl0eS9jb25maWcnO1xuXG5leHBvcnQge1xuICBmaW5kTW9kdWxlLFxuICBmaW5kTW9kdWxlRnJvbU9wdGlvbnMsXG4gIGJ1aWxkUmVsYXRpdmVQYXRoLFxuICBNb2R1bGVPcHRpb25zLFxufSBmcm9tICcuL3V0aWxpdHkvZmluZC1tb2R1bGUnO1xuXG5leHBvcnQge1xuICBhZGRSZWR1Y2VyVG9TdGF0ZSxcbiAgYWRkUmVkdWNlclRvU3RhdGVJbmZlcmZhY2UsXG4gIGFkZFJlZHVjZXJJbXBvcnRUb05nTW9kdWxlLFxuICBhZGRSZWR1Y2VyVG9BY3Rpb25SZWR1Y2VyTWFwLFxuICBvbWl0LFxufSBmcm9tICcuL3V0aWxpdHkvbmdyeC11dGlscyc7XG5cbmV4cG9ydCB7IGdldFByb2plY3RQYXRoIH0gZnJvbSAnLi91dGlsaXR5L3Byb2plY3QnO1xuZXhwb3J0IHsgaW5zZXJ0SW1wb3J0IH0gZnJvbSAnLi91dGlsaXR5L3JvdXRlLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IHN0cmluZ1V0aWxzID0ge1xuICBkYXNoZXJpemUsXG4gIGRlY2FtZWxpemUsXG4gIGNhbWVsaXplLFxuICBjbGFzc2lmeSxcbiAgdW5kZXJzY29yZSxcbiAgZ3JvdXAsXG4gIGNhcGl0YWxpemUsXG4gIGZlYXR1cmVQYXRoLFxufTtcblxuZXhwb3J0IHsgdXBkYXRlUGFja2FnZSB9IGZyb20gJy4vdXRpbGl0eS91cGRhdGUnO1xuZXhwb3J0IHsgcGFyc2VOYW1lIH0gZnJvbSAnLi91dGlsaXR5L3BhcnNlLW5hbWUnO1xuIl19