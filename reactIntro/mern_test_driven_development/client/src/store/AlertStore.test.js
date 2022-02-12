import alertReducer, { alertSliceActions } from './AlertStore'


test('should return the initial state', () => {
  expect(alertReducer(undefined, {})).toEqual(
    {
      showAlert: false,
      alertMessage: null,
      alertVariant: null
    }
  )
})

test('should show alert', () => {
    
    const alert = {message:'show alert', variant:'danger'}

    expect(alertReducer(undefined, alertSliceActions.showAlert(alert))).toEqual(
      {
        showAlert: true,
        alertMessage: alert.message,
        alertVariant: alert.variant
      }
    )
  })


test('should close alert', () => {

const initialState = {showAlert: true, alertMessage:'show alert', alertVariant:'danger'}

expect(alertReducer(initialState, alertSliceActions.closeAlert())).toEqual(
    {
        showAlert: false,
        alertMessage: null,
        alertVariant: null
    }
)
})
