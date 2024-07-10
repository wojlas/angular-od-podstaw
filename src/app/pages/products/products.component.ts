import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct } from '../../common/core/interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  public products: IProduct[] = [
    { id: 0, name: 'Telewizor', type: 'RTV' },
    { id: 1, name: 'PlayStation', type: 'Konsola' },
    { id: 2, name: 'IPhone', type: '"Smartfon"' },
    { id: 3, name: 'Lodówka', type: 'AGD' },
    { id: 4, name: 'Pralka', type: 'AGD' },
    { id: 5, name: 'Dekoder', type: 'RTV' },
    { id: 6, name: 'Słuchawki', type: 'RTV' },
  ];

}
