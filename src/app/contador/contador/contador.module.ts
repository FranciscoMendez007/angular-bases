import { NgModule } from '@angular/core';
import { ContadorCompoent } from './contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        ContadorCompoent
    ],
    exports:[
        ContadorCompoent
    ],
    imports:[
        CommonModule
    ]
})
export class ContadorModule{
    
}