import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { AboutComponent } from "./Components/about/about.component";
import { SkillsComponent } from "./Components/skills/skills.component";
import { PortfolioComponent } from "./Components/portfolio/portfolio.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, AboutComponent, SkillsComponent, PortfolioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';
}
