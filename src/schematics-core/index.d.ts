/// <amd-module name="@ngrx/schematics/src/schematics-core/index" />
import { dasherize, decamelize, camelize, classify, underscore, group, capitalize, featurePath } from './utility/strings';
export { findNodes, getSourceNodes, getDecoratorMetadata, getContentOfKeyLiteral, insertAfterLastOccurrence, addBootstrapToModule, addDeclarationToModule, addExportToModule, addImportToModule, addProviderToModule } from './utility/ast-utils';
export { Host, Change, NoopChange, InsertChange, RemoveChange, ReplaceChange } from './utility/change';
export { AppConfig, CliConfig, getAppFromConfig, getConfig, getWorkspace, getWorkspacePath } from './utility/config';
export { findModule, findModuleFromOptions, buildRelativePath, ModuleOptions } from './utility/find-module';
export { addReducerToState, addReducerToStateInferface, addReducerImportToNgModule, addReducerToActionReducerMap, omit } from './utility/ngrx-utils';
export { getProjectPath } from './utility/project';
export { insertImport } from './utility/route-utils';
export declare const stringUtils: {
    dasherize: typeof dasherize;
    decamelize: typeof decamelize;
    camelize: typeof camelize;
    classify: typeof classify;
    underscore: typeof underscore;
    group: typeof group;
    capitalize: typeof capitalize;
    featurePath: typeof featurePath;
};