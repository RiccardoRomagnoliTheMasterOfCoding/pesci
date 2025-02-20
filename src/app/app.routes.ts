import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { CatalogComponent } from '../components/catalog/catalog.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { LoginComponent } from '../components/login/login.component';
import { CartComponent } from '../components/cart/cart.component';
import { AdminComponent } from '../components/admin/admin.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "catalog",
        component: CatalogComponent
    },
    {
        path: "contacts",
        component: ContactsComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "admin",
        component: AdminComponent
    },
    {
        path: "**",
        component: NotfoundComponent
    }
];
