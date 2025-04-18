import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SubscriptionCardComponent } from '../../components/subscription-card/subscription-card.component';
import { WhiteHeaderComponent } from "../../components/white-header/white-header.component";

@Component({
  selector: 'app-subscription',
  imports: [WhiteHeaderComponent, SubscriptionCardComponent, FooterComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
})
export class SubscriptionComponent {}
