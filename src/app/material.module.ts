import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatListModule
  ]
})
export class MaterialModule {}
