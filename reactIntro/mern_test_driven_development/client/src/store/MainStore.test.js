import {screen, render} from '@testing-library/react'
import {store} from './MainStore'

describe('Main Store', () => {
    it('should render the basic initial states of each store', async () => {
        expect(await store.getState()).toEqual(
            {
                post: 
                    {posts:[], post:{}
                },
                alert:
                    {showAlert:false, alertMessage: null, alertVariant: null
                }
            }
        )
    })
})