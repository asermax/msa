import React from 'react'
import { hideOnMobile } from 'styles/util'
import { ProductField } from './ProductField'

const products = [
  {
    "id": 1,
    "name": "Cremoso",
    "price": "400.00",
    "unit": "horma (4 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 2,
    "name": "Por Salut",
    "price": "400.00",
    "unit": "horma (3 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 3,
    "name": "Tybo",
    "price": "500.00",
    "unit": "horma (4 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 4,
    "name": "Sardo",
    "price": "500.00",
    "unit": "horma (3 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 5,
    "name": "Muzarella",
    "price": "500.00",
    "unit": "horma (4 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 6,
    "name": "Azul",
    "price": "550.00",
    "unit": "horma (3 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 7,
    "name": "Emmental",
    "price": "1000.00",
    "unit": "horma (4 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 8,
    "name": "Fontina",
    "price": "1300.00",
    "unit": "horma (7 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 9,
    "name": "Gruyerito",
    "price": "1000.00",
    "unit": "horma (5 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 10,
    "name": "Romanito Criollo Saborizado",
    "price": "120.00",
    "unit": "horma (0.5 kg)",
    "minAmount": "0.50",
  },
  {
    "id": 11,
    "name": "Manteca",
    "price": "30.00",
    "unit": "paquete (200 g)",
    "minAmount": "1.00",
  },
  {
    "id": 12,
    "name": "Dulce de Leche",
    "price": "65.00",
    "unit": "tarro (1 kg)",
    "minAmount": "1.00",
  },
]

export const OrderForm = () => (
  <form>
    <fieldset>
      <label htmlFor="name">
      Nombre*
      </label>
      <input type="text" name="name" />
    </fieldset>
    <fieldset>
      <h2>Productos</h2>
      <table>
        <thead>
          <tr>
            <th>
              Producto
            </th>
            <th className={hideOnMobile}>
            </th>
            <th>
              Cantidad
            </th>
            <th className={hideOnMobile}>
              Precio
            </th>
            <th>
              TOTAL
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => <ProductField key={product.name} {...product} />)}
          <td>
            TOTAL
          </td>
          <td className={hideOnMobile}></td>
          <td></td>
          <td className={hideOnMobile}></td>
          <td>
            $1000
          </td>
        </tbody>
      </table>
    </fieldset>
    <button type="submit">
      Enviar Orden
    </button>
  </form>
)
