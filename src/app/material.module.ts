import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatStepperModule,
        MatFormFieldModule,
        MatListModule,
        MatSnackBarModule,
        MatInputModule,
        MatDialogModule,
        MatTabsModule,
        MatCardModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatSelectModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatExpansionModule,
        MatTooltipModule,
        DragDropModule,
        MatRadioModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatStepperModule,
        MatFormFieldModule,
        MatListModule,
        MatSnackBarModule,
        MatInputModule,
        MatDialogModule,
        MatTabsModule,
        MatCardModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatSelectModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatExpansionModule,
        MatTooltipModule,
        DragDropModule,
        MatRadioModule,
        MatMenuModule
    ],
})
export class MaterialModule { }
