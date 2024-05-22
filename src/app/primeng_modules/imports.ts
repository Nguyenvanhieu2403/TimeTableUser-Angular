import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CalendarModule,
    CheckboxModule,
    DialogModule,
    TableModule,
    ToggleButtonModule,
    NgxTippyModule,
    ConfirmPopupModule,
    SplitButtonModule,
    RadioButtonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CalendarModule,
    CheckboxModule,
    DialogModule,
    TableModule,
    ToggleButtonModule,
    NgxTippyModule,
    ConfirmPopupModule,
    SplitButtonModule,
    RadioButtonModule
  ],
  providers: [  ]
})
export class ImportsModule {}
