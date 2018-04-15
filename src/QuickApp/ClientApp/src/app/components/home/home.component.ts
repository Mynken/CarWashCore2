
import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';
import { AccountService } from '../../services/account.service';
import { Permission } from '../../models/permission.model';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fadeInOut]
})
export class HomeComponent {

    constructor(public configurations: ConfigurationService, private accountService: AccountService) {
    }

    get canViewCustomers() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewCustomersPermission
      }
}
