import { NgModule } from '@angular/core';
import { MatButtonModule, MatBadgeModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatBadgeModule],
  exports: [MatButtonModule, MatBadgeModule]
})
export class MaterialModule {}
