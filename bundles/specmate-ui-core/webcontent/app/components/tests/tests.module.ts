import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TestCaseRow} from './test-case-row.component';
import { NgModule } from '@angular/core';

import { TestsPerspective } from './tests-perspective.component';
//import { TestSpecificationEditor } from './test-specification-editor.component';

import { CoreModule } from '../core/core.module';
import { TestsRoutingModule } from './tests-routing.module';
import { TestSpecificationEditor } from './test-specification-editor.component';
import { TestParameterForm } from './test-parameter-form.component';
import { TestCaseValueForm } from './test-case-value-form.component';
import { TestCaseNameForm } from './test-case-name-form.component';
import {TestProcedureEditor} from './test-procedure-editor.component';
import {TestCaseParameterMapping} from './test-case-parameter-mapping.component';

@NgModule({
    imports: [
        CoreModule,
        TestsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TestsPerspective,
        TestSpecificationEditor,
        TestCaseRow,
        TestParameterForm,
        TestCaseValueForm,
        TestCaseNameForm,
        TestProcedureEditor,
        TestCaseParameterMapping
    ],
    providers: [],
    exports: [],
})
export class TestsModule { }
