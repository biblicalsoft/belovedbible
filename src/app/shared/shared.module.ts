import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadingZeroFormatPipe } from './leading-zero-format/leading-zero-format.pipe';

@NgModule({
  declarations: [LeadingZeroFormatPipe],
  imports: [CommonModule],
  exports: [LeadingZeroFormatPipe]
})
export class SharedModule { }
