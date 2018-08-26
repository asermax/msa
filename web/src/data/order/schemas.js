import * as R from 'ramda'
import * as yup from 'yup'

export const orderSchema = yup.object().shape({
  user: yup.string().trim().required(),
  organization: yup.string().trim().required(),
  products: yup.lazy(R.compose(
    R.ifElse(
      R.either(R.isNil, R.isEmpty),
      () => yup.object().test(
        'required',
        '${path} is required',
        R.complement(R.either(R.isNil, R.isEmpty)),
      ),
      (products) => yup.object().shape(
        R.map(
          () => yup.number().moreThan(0).required(),
        )(products),
      ),
    ),
  )),
})
